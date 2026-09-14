import BounceText, { FlowerMark } from "../components/BounceText";
import { useLang } from "../i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="noise bg-[var(--ink-deep)] text-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-16 md:px-6 md:pt-24">
        <div className="flex flex-col items-center gap-10 text-center">
          <p className="font-display text-[16vw] leading-none tracking-wide text-[var(--pink)] md:text-8xl">
            <BounceText text="ちぃを、よろしく。" />
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/Anime2Real/Chobits-Chii-Mascot-Release"
              target="_blank"
              rel="noreferrer"
              className="btn-pill btn-pill--pink"
            >
              {t.footer.github} ↗
            </a>
            <a
              href="https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases"
              target="_blank"
              rel="noreferrer"
              className="btn-pill !border-[var(--cream)] !bg-transparent !text-[var(--cream)] hover:!shadow-[0_6px_0_rgba(255,249,238,0.35)]"
            >
              {t.footer.releases} ↗
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs text-[var(--cream)]/60">
            <FlowerMark className="h-4 w-4 text-[var(--pink)]" />
            <p>{t.footer.copyright}</p>
            <FlowerMark className="h-4 w-4 text-[var(--pink)]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
