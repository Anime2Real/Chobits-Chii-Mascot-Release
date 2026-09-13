import BounceText, { FlowerMark } from "../components/BounceText";
import Reveal from "../components/Reveal";
import chiiHero from "../assets/chii-hero.webp";

export default function Hero() {
  return (
    <section id="top" className="noise relative overflow-hidden bg-[var(--cream)] pb-0 pt-28 md:pt-36">
      {/* pastel blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[var(--pink)] opacity-60 blur-2xl" />
        <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-[var(--lavender)] opacity-70 blur-2xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-[var(--mint)] opacity-60 blur-2xl" />
      </div>

      {/* floating decorations */}
      <FlowerMark aria-hidden className="wiggle absolute left-[6%] top-32 hidden h-10 w-10 text-[var(--pink-deep)] md:block" />
      <FlowerMark aria-hidden className="wiggle wiggle--slow absolute right-[8%] top-52 hidden h-8 w-8 text-[#c9b8f0] md:block" />
      <FlowerMark aria-hidden className="wiggle wiggle--rev absolute bottom-40 left-[12%] hidden h-7 w-7 text-[#8fd3b6] md:block" />
      <span aria-hidden className="float-y absolute right-[16%] top-28 hidden font-display text-2xl text-[var(--pink-deep)] md:block">
        ❀
      </span>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-[1.15fr_0.85fr] md:px-6">
        {/* copy */}
        <div className="text-center md:text-left">
          <Reveal>
            <span className="tag-pill">
              <span className="heartbeat inline-block h-2 w-2 rounded-full bg-[var(--pink-deep)]" />
              CHOBITS DESKTOP MASCOT
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="font-display mt-6 text-[17vw] leading-[1.02] tracking-wide md:text-[6.4rem]">
              <BounceText text="把" />{" "}
              <BounceText
                text="ちぃ"
                charClassName={() => "text-[var(--pink-deep)]"}
              />{" "}
              <BounceText text="带回家" />
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[var(--ink-soft)] md:mx-0 md:text-lg">
              只属于你的一台 · ちょうびっツ。
              <br />
              ちぃ 会站在你的桌面角落，陪你工作、学习、发呆——
              偶尔卖个萌，偶尔说一句「ちぃ？」。
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <a href="#download" className="btn-pill btn-pill--dark text-base">
                <span className="bob inline-block">↓</span> Download
              </a>
              <a
                href="https://github.com/Anime2Real/Chobits-Chii-Mascot-Release"
                target="_blank"
                rel="noreferrer"
                className="btn-pill btn-pill--pink text-base"
              >
                在 GitHub 上看看 ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={330}>
            <p className="mt-6 text-xs font-bold tracking-widest text-[var(--ink-soft)]">
              macOS · Windows · 免费开源
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
                alt="ちぃ（Chii）—— Chobits 中的人形电脑"
                className="block h-auto w-full"
                loading="eager"
              />
            </div>
            <span className="tape -top-3 left-1/2 -translate-x-1/2" aria-hidden />
            <div className="card-line absolute -bottom-5 -left-4 rotate-[-4deg] rounded-2xl bg-[var(--blush)] px-4 py-2 font-display text-lg">
              ちぃ、だいすき ♡
            </div>
          </div>
        </Reveal>
      </div>

      <div className="h-16 md:h-20" />
    </section>
  );
}
