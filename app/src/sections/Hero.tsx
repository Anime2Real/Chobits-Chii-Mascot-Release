import BounceText, { FlowerMark } from "../components/BounceText";
import Reveal from "../components/Reveal";
import chiiHero from "../assets/chii-hero.webp";
import { useLang } from "../i18n";

function Bow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 32" className={className} fill="currentColor" aria-hidden>
      <path d="M24 14c-4-7-14-11-20-8C0 8 1 16 4 20c4 5 14 3 20-2 6 5 16 7 20 2 3-4 4-12 0-14-6-3-16 1-20 8Z" />
      <circle cx="24" cy="15" r="4.2" fill="var(--cream)" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}

export default function Hero() {
  const { t, lang } = useLang();
  return (
    <section id="top" className="noise relative overflow-hidden bg-[var(--cream)] pb-0 pt-28 md:pt-36">
      {/* pastel blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[var(--pink)] opacity-60 blur-2xl" />
        <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-[var(--lavender)] opacity-70 blur-2xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-[var(--mint)] opacity-60 blur-2xl" />
      </div>

      {/* floating decorations — 黑蝴蝶结呼应女仆装，白蕾丝边呼应头饰 */}
      <Bow className="wiggle absolute left-[3%] top-56 hidden h-10 w-14 text-[var(--ink-deep)] md:block" />
      <FlowerMark aria-hidden className="wiggle wiggle--slow absolute right-[8%] top-52 hidden h-8 w-8 text-[var(--pink-deep)] md:block" />
      <Bow className="wiggle wiggle--rev absolute bottom-40 left-[10%] hidden h-7 w-10 rotate-12 text-[var(--pink-deep)] md:block" />
      <span aria-hidden className="float-y absolute right-[16%] top-28 hidden font-display text-2xl text-[var(--ink-deep)] md:block">
        ♡
      </span>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-[1.15fr_0.85fr] md:px-6">
        {/* copy */}
        <div className="text-center md:text-left">
          <Reveal>
            <span className="tag-pill">
              <span className="heartbeat inline-block h-2 w-2 rounded-full bg-[var(--pink-deep)]" />
              {t.hero.tag}
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1
              className={`font-display mt-6 leading-[1.08] tracking-wide ${
                lang === "en" ? "text-[13vw] md:text-[4.6rem]" : "text-[15vw] md:text-[5.6rem]"
              }`}
            >
              {t.hero.headlineBefore && (
                <>
                  <BounceText text={t.hero.headlineBefore} />{" "}
                </>
              )}
              <BounceText
                text="ちぃ"
                charClassName={() => "text-[var(--pink-deep)]"}
              />{" "}
              <BounceText text={t.hero.headlineAfter} />
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[var(--ink-soft)] md:mx-0 md:text-lg">
              {t.hero.intro1}
              <br />
              {t.hero.intro2}
              {t.hero.intro3}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <a href="#download" className="btn-pill btn-pill--dark text-base">
                <span className="bob inline-block">↓</span> {t.hero.download}
              </a>
              <a
                href="https://github.com/Anime2Real/Chobits-Chii-Mascot-Release"
                target="_blank"
                rel="noreferrer"
                className="btn-pill btn-pill--pink text-base"
              >
                {t.hero.github}
              </a>
            </div>
          </Reveal>

          <Reveal delay={330}>
            <p className="mt-6 text-xs font-bold tracking-widest text-[var(--ink-soft)]">
              {t.hero.platforms}
            </p>
          </Reveal>
        </div>

        {/* mascot */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-[340px] md:max-w-[380px]">
          <div className="float-y relative">
            <div aria-hidden className="spin-slow absolute -right-6 -top-6 z-10 h-20 w-20 text-[var(--pink-deep)]">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <path id="circlePath" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                </defs>
                <text fontSize="11.5" fontWeight="700" fill="currentColor" letterSpacing="2.5">
                  <textPath href="#circlePath">CHII · CHOBITS · ちぃ · CHII · CHOBITS ·</textPath>
                </text>
              </svg>
            </div>
            <div className="arch-frame hover-lift relative bg-white">
              <img
                src={chiiHero}
                alt={t.hero.heroAlt}
                className="block h-auto w-full"
                loading="eager"
              />
            </div>
            {/* 白色蕾丝胶带 + 黑蝴蝶结，呼应女仆装 */}
            <span className="tape tape--lace -top-3 left-1/2 -translate-x-1/2" aria-hidden />
            <Bow className="absolute -left-5 top-10 z-10 h-8 w-11 -rotate-12 text-[var(--ink-deep)]" />
            <div className="card-line absolute -bottom-5 -left-4 rotate-[-4deg] rounded-2xl bg-[var(--blush)] px-4 py-2 font-display text-lg">
              おかえりなさい、ご主人さま ♡
            </div>
          </div>
        </Reveal>
      </div>

      <div className="h-16 md:h-20" />
    </section>
  );
}
