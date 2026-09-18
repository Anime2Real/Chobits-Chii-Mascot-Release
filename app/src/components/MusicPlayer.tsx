import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "../i18n";

const CONSENT_KEY = "chii-bgm-consent";

function readConsent(): "yes" | "no" | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "yes" || v === "no" ? v : null;
  } catch {
    return null;
  }
}

function writeConsent(v: "yes" | "no") {
  try {
    localStorage.setItem(CONSENT_KEY, v);
  } catch {
    /* ignore */
  }
}

export default function MusicPlayer() {
  const { t } = useLang();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [busy, setBusy] = useState(false);
  const retriedRef = useRef(false);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return Promise.resolve(false);
    setBusy(true);
    return audio
      .play()
      .then(() => {
        setPlaying(true);
        writeConsent("yes");
        return true;
      })
      .catch(() => {
        setPlaying(false);
        return false;
      })
      .finally(() => setBusy(false));
  }, []);

  useEffect(() => {
    const audio = new Audio(`${import.meta.env.BASE_URL}chii-bgm.mp3`);
    audio.preload = "auto";
    audio.addEventListener("ended", () => setPlaying(false));
    audioRef.current = audio;

    // 自动播放：进页即尝试。浏览器自动播放策略（Chrome/Edge/Safari 对无
    // 互动历史的访问者拦截有声自动播放）会在首次访问时拒绝——此时挂一次性
    // 交互监听，用户第一次点击/按键/触摸时静默重试；stored "no"（用户此前
    // 明确暂停过）则不再自动播放。
    const onGesture = () => {
      if (retriedRef.current) return;
      retriedRef.current = true;
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      window.removeEventListener("touchstart", onGesture);
      void play();
    };

    if (readConsent() !== "no") {
      void play().then((started) => {
        if (!started) {
          window.addEventListener("pointerdown", onGesture);
          window.addEventListener("keydown", onGesture);
          window.addEventListener("touchstart", onGesture);
        }
      });
    }

    return () => {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      window.removeEventListener("touchstart", onGesture);
      audio.pause();
      audioRef.current = null;
    };
  }, [play]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || busy) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      writeConsent("no");
    } else {
      void play();
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? t.music.pause : t.music.play}
      aria-pressed={playing}
      title={playing ? t.music.pause : t.music.play}
      className="card-line hover-lift group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--cream)]/95 backdrop-blur"
    >
      {/* spinning vinyl while playing */}
      <span
        aria-hidden
        className={`absolute inset-1 rounded-full border-[1.5px] border-dashed border-[var(--pink-deep)] opacity-0 transition-opacity duration-300 ${
          playing ? "spin-slow opacity-60" : ""
        }`}
      />
      {playing ? (
        /* pause icon */
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--pink-deep)]" fill="currentColor" aria-hidden>
          <rect x="6" y="5" width="4" height="14" rx="1.2" />
          <rect x="14" y="5" width="4" height="14" rx="1.2" />
        </svg>
      ) : busy ? (
        /* loading spinner */
        <svg viewBox="0 0 24 24" className="h-5 w-5 animate-spin text-[var(--pink-deep)]" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.5" />
          <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ) : (
        /* music note icon */
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--pink-deep)] transition-transform duration-300 group-hover:-rotate-12" fill="currentColor" aria-hidden>
          <path d="M9 18.5a3 3 0 1 1-2-2.83V5.4a1 1 0 0 1 .76-.97l9-2.25A1 1 0 0 1 18 3.15v11.6a3 3 0 1 1-2-2.83V6.4l-7 1.75v10.35Z" />
        </svg>
      )}
      {/* floating notes while playing */}
      {playing && (
        <>
          <span aria-hidden className="note-float absolute -top-1 left-1 text-xs text-[var(--pink-deep)]">♪</span>
          <span aria-hidden className="note-float note-float--late absolute -top-1 right-1 text-[0.65rem] text-[var(--pink-deep)]">♫</span>
        </>
      )}
    </button>
  );
}
