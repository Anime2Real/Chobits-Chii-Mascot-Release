import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n";

const labels = {
  zh: { play: "播放音乐", pause: "暂停音乐" },
  ja: { play: "音楽を再生", pause: "音楽を止める" },
  en: { play: "Play music", pause: "Pause music" },
} as const;

export default function MusicPlayer() {
  const { lang } = useLang();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const audio = new Audio(`${import.meta.env.BASE_URL}chii-bgm.mp3`);
    audio.preload = "none";
    audio.addEventListener("ended", () => setPlaying(false));
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || busy) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      setBusy(true);
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false))
        .finally(() => setBusy(false));
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? labels[lang].pause : labels[lang].play}
      aria-pressed={playing}
      title={playing ? labels[lang].pause : labels[lang].play}
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
