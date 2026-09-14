import BounceText, { FlowerMark } from "../components/BounceText";
import { useLang } from "../i18n";

export default function Nav() {
  const { t, lang, setLang } = useLang();

  const links = [
    { href: "#features", label: t.nav.features },
    { href: "#download", label: t.nav.download },
    { href: "#install", label: t.nav.install },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <a
          href="#top"
          className="card-line flex items-center gap-2 rounded-full bg-[var(--cream)]/90 py-1.5 pl-3 pr-4 backdrop-blur transition-transform duration-300 hover:-rotate-2"
        >
          <FlowerMark className="h-5 w-5 text-[var(--pink-deep)]" />
          <span className="font-display text-lg leading-none tracking-wide">
            <BounceText text="ちぃ CHII" />
          </span>
        </a>

        <nav className="card-line hidden items-center gap-1 rounded-full bg-[var(--cream)]/90 px-2 py-1.5 backdrop-blur md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm font-bold transition-colors hover:bg-[var(--pink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* language switch */}
          <div
            className="card-line flex items-center rounded-full bg-[var(--cream)]/90 p-1 text-xs font-bold backdrop-blur"
            role="group"
            aria-label="Language / 言語"
          >
            {(["zh", "ja", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  lang === l
                    ? "bg-[var(--pink-deep)] text-white"
                    : "text-[var(--ink-soft)] hover:bg-[var(--pink)]"
                }`}
              >
                {l === "zh" ? "中" : l === "ja" ? "日" : "EN"}
              </button>
            ))}
          </div>

          <a
            href="https://github.com/Anime2Real/Chobits-Chii-Mascot-Release"
            target="_blank"
            rel="noreferrer"
            className="btn-pill btn-pill--dark !px-4 !py-2 text-sm"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
