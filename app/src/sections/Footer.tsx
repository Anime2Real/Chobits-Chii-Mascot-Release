import BounceText, { FlowerMark } from "../components/BounceText";

export default function Footer() {
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
              GitHub 仓库 ↗
            </a>
            <a
              href="https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases"
              target="_blank"
              rel="noreferrer"
              className="btn-pill !border-[var(--cream)] !bg-transparent !text-[var(--cream)] hover:!shadow-[0_6px_0_rgba(255,249,238,0.35)]"
            >
              全部 Releases ↗
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs text-[var(--cream)]/60">
            <FlowerMark className="h-4 w-4 text-[var(--pink)]" />
            <p>
              非官方粉丝作品 · Chobits © CLAMP・講談社／ちょびっツ製作委員会 · 代码以开源协议发布
            </p>
            <FlowerMark className="h-4 w-4 text-[var(--pink)]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
