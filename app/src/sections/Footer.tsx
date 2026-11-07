import BounceText, { FlowerMark } from "../components/BounceText";
import { useLang } from "../i18n";
import { DISCORD_URL, ORG_URL, QQ_URL, REPO_URL } from "../links";

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
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-pill btn-pill--pink"
            >
              {t.footer.github} ↗
            </a>
            <a
              href={ORG_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-pill !border-[var(--cream)] !bg-transparent !text-[var(--cream)] hover:!shadow-[0_6px_0_rgba(255,249,238,0.35)]"
            >
              {t.footer.about} ↗
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-[var(--cream-soft)]">{t.footer.communityLead}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-bold">
              <a
                href={QQ_URL}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--cream-soft)] underline-offset-4 transition-colors hover:text-[var(--pink)] hover:underline hover:decoration-[var(--pink)]"
              >
                {t.footer.qq} ↗
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--cream-soft)] underline-offset-4 transition-colors hover:text-[var(--pink)] hover:underline hover:decoration-[var(--pink)]"
              >
                {t.footer.discord} ↗
              </a>
            </div>
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
