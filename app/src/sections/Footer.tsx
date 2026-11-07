import BounceText, { FlowerMark } from "../components/BounceText";
import qqQr from "../assets/qq-group-qr.jpg";
import discordQr from "../assets/discord-qr.png";
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

          <div className="flex flex-wrap items-start justify-center gap-6 md:gap-10">
            <a
              href={QQ_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2.5"
            >
              <span className="rounded-2xl bg-white p-2.5 shadow-[0_5px_0_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:-translate-y-1">
                <img src={qqQr} alt={t.footer.qqQrAlt} className="h-28 w-28 md:h-32 md:w-32" />
              </span>
              <span className="text-xs font-bold tracking-wide text-[var(--cream-soft)] transition-colors group-hover:text-[var(--pink)]">
                {t.footer.qq}
              </span>
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2.5"
            >
              <span className="rounded-2xl bg-white p-2.5 shadow-[0_5px_0_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:-translate-y-1">
                <span className="relative block">
                  <img
                    src={discordQr}
                    alt={t.footer.discordQrAlt}
                    className="block h-28 w-28 md:h-32 md:w-32"
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="flex h-[18%] w-[18%] items-center justify-center rounded-[26%] bg-white">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden
                        className="h-[72%] w-[72%] fill-[#5865F2]"
                      >
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                      </svg>
                    </span>
                  </span>
                </span>
              </span>
              <span className="text-xs font-bold tracking-wide text-[var(--cream-soft)] transition-colors group-hover:text-[var(--pink)]">
                {t.footer.discord}
              </span>
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
