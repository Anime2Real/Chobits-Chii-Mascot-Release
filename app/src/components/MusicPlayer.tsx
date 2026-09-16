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
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [busy, setBusy] = useState(false);
  const [asking, setAsking] = useState(false);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setBusy(true);
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))
      .finally(() => setBusy(false));
  }, []);

  useEffect(() => {
    const audio = new Audio(`${import.meta.env.BASE_URL}chii-bgm.mp3`);
    audio.preload = "none";
    audio.addEventListener("ended", () => setPlaying(false));
    audioRef.current = audio;

    // No autoplay by default. Only return visits with explicit consent
    // (stored "yes") start the music on their own; if the browser still
    // blocks it, the play button is the fallback.
    if (readConsent() === "yes") play();

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [play]);

  useEffect(() => {
    if (!asking) return;
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") respond("no");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asking]);

  const respond = useCallback(
    (choice: "yes" | "no") => {
      writeConsent(choice);
      setAsking(false);
      buttonRef.current?.focus();
      if (choice === "yes") play();
    },
    [play],
  );

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || busy || asking) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else if (readConsent() === null) {
      // No recorded choice yet: ask once before ever playing.
      setAsking(true);
    } else {
      // "yes" plays directly; stored "no" is not asked again, but an
      // explicit click still starts the music this once.
      play();
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
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

      {asking && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={t.music.askTitle}
          tabIndex={-1}
          className="card-line fixed bottom-24 right-5 z-50 w-72 rounded-[24px] bg-[var(--cream)]/95 p-5 shadow-xl backdrop-blur"
        >
          <p className="font-display text-lg tracking-wide">{t.music.askTitle}</p>
          <p className="mt-1 text-sm font-bold text-[var(--ink-soft)]">{t.music.askBody}</p>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => respond("yes")}
              className="btn-pill btn-pill--dark flex-1 justify-center"
            >
              {t.music.askYes}
            </button>
            <button onClick={() => respond("no")} className="btn-pill flex-1 justify-center">
              {t.music.askNo}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
