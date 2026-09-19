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
        </div>
      </div>
    </header>
  );
}
