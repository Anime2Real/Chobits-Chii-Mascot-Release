import { useEffect, useState, type ReactNode } from "react";
import Reveal from "../components/Reveal";
import BounceText, { FlowerMark } from "../components/BounceText";

const REPO = "Anime2Real/Chobits-Chii-Mascot-Release";
const RELEASES_URL = `https://github.com/${REPO}/releases`;
const API_URL = `https://api.github.com/repos/${REPO}/releases/latest`;

interface Asset {
  name: string;
  url: string;
  size: number;
}

interface ReleaseInfo {
  tag: string;
  date: string;
  assets: Asset[];
}

type PlatformKey = "macos-arm" | "macos-intel" | "windows" | "linux";

function classify(assetName: string): PlatformKey | null {
  const n = assetName.toLowerCase();
  if (n.endsWith(".dmg") || n.includes("mac") || n.includes("darwin")) {
    if (n.includes("arm") || n.includes("aarch64") || n.includes("silicon")) return "macos-arm";
    return "macos-intel";
  }
  if (n.endsWith(".exe") || n.endsWith(".msi") || n.includes("win")) return "windows";
  if (n.endsWith(".appimage") || n.endsWith(".deb") || n.endsWith(".rpm") || n.includes("linux"))
    return "linux";
  return null;
}

function formatSize(bytes: number) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function Download() {
  const [release, setRelease] = useState<ReleaseInfo | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "empty">("loading");

  useEffect(() => {
    let cancelled = false;
    fetch(API_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => {
        if (cancelled) return;
        const assets: Asset[] = (d.assets ?? [])
          .map((a: { name: string; browser_download_url: string; size: number }) => ({
            name: a.name,
            url: a.browser_download_url,
            size: a.size,
          }))
          .filter((a: Asset) => classify(a.name) !== null);
        if (assets.length === 0) {
          setState("empty");
          return;
        }
        setRelease({
          tag: d.tag_name ?? "",
          date: (d.published_at ?? "").slice(0, 10),
          assets,
        });
        setState("ready");
      })
      .catch(() => !cancelled && setState("empty"));
    return () => {
      cancelled = true;
    };
  }, []);

  const assetFor = (key: PlatformKey) => release?.assets.find((a) => classify(a.name) === key);

  const platforms: {
    key: PlatformKey;
    label: string;
    sub: string;
    icon: ReactNode;
  }[] = [
    {
      key: "macos-arm",
      label: "macOS",
      sub: "Apple Silicon",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
          <path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.72 1.13-4.72 2.86-2.01 3.49-.51 8.66 1.45 11.5.96 1.39 2.1 2.95 3.6 2.89 1.45-.06 2-.93 3.75-.93s2.25.93 3.78.9c1.56-.03 2.55-1.41 3.5-2.8 1.1-1.61 1.55-3.17 1.58-3.25-.04-.02-3.03-1.16-3.09-4.61ZM14.16 4.06c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.38 1.73-.74.86-1.39 2.23-1.22 3.55 1.29.1 2.6-.65 3.41-1.62Z" />
        </svg>
      ),
    },
    {
      key: "macos-intel",
      label: "macOS",
      sub: "Intel",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
          <path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.72 1.13-4.72 2.86-2.01 3.49-.51 8.66 1.45 11.5.96 1.39 2.1 2.95 3.6 2.89 1.45-.06 2-.93 3.75-.93s2.25.93 3.78.9c1.56-.03 2.55-1.41 3.5-2.8 1.1-1.61 1.55-3.17 1.58-3.25-.04-.02-3.03-1.16-3.09-4.61ZM14.16 4.06c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.38 1.73-.74.86-1.39 2.23-1.22 3.55 1.29.1 2.6-.65 3.41-1.62Z" />
        </svg>
      ),
    },
    {
      key: "windows",
      label: "Windows",
      sub: "10 / 11",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
          <path d="M3 5.5 10.5 4.4v7.1H3V5.5Zm9 7.5H3v6l7.5 1.1V13Zm1.5-9.9L21 1.5v10h-7.5V3.1Zm7.5 9.9v9.4l-7.5-1.4v-8H21Z" />
        </svg>
      ),
    },
    {
      key: "linux",
      label: "Linux",
      sub: "AppImage / deb",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
          <path d="M12.5 1.6c-1.5 0-2.7 1.2-2.9 2.8-.1.7-.1 1.5-.3 2.1-.3 1-1 1.9-1.3 2.9-.2.7-.3 1.5-.4 2.2-.1.6-.2 1.3-.5 1.8-.3.6-.8 1.1-1.2 1.7-.3.4-.6.9-.8 1.4-.2.6-.3 1.3-.2 1.9.1.5.4 1.1.8 1.3.4.3 1 .4 1.5.5.6.2 1.2.3 1.9.4.8.1 1.6.2 2.4.2 1.3 0 2.6-.1 3.8-.4.7-.2 1.4-.5 1.9-1 .4-.4.6-1 .5-1.6-.1-.7-.5-1.3-.9-1.9-.4-.6-.9-1.2-1.2-1.8-.3-.6-.4-1.2-.5-1.9-.1-.8-.2-1.6-.4-2.4-.2-1-.7-1.9-1-2.9-.2-.7-.2-1.4-.3-2.1-.2-1.6-1.3-2.8-2.6-2.9l-.5-.1Zm-1.9 3.5c.5-.1 1 .1 1.1.6.1.5-.2 1-.7 1.1-.5.1-1-.2-1.1-.6-.1-.5.2-1 .7-1.1Zm3.4 0c.5-.1 1 .2 1.1.6.1.5-.2 1-.7 1.1-.5.1-1-.1-1.1-.6-.1-.5.2-1 .7-1.1Zm-3.2 2.1c.5-.3 1.1-.4 1.7-.3.6.1 1.1.4 1.4.9.1.2.1.4-.1.6-.3.2-.8.1-1.2 0-.5-.1-1.1 0-1.5.3-.2.1-.4.1-.5-.1-.1-.2-.1-.4 0-.6.1-.4.1-.6.2-.8Zm-4.3 8.1c.4-.3.9-.6 1.4-.7.5-.1 1-.1 1.5 0 .4.1.7.3.9.6.1.2.1.5-.1.7-.3.3-.8.4-1.3.4-.6 0-1.2-.1-1.7-.3-.3-.1-.6-.3-.7-.5v-.2Zm5.9-.3c.4-.2.9-.4 1.4-.4.5 0 1 .1 1.4.3.3.2.6.4.7.7.1.3-.1.6-.3.7-.4.2-.9.2-1.3.2-.5 0-1.1-.1-1.5-.3-.3-.1-.5-.3-.6-.5 0-.3 0-.5.2-.7Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="download" className="noise bg-[var(--peach)]">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Reveal className="text-center">
          <p className="font-display text-sm tracking-[0.3em] text-[var(--ink-soft)]">DOWNLOAD</p>
          <h2 className="font-display mt-3 text-4xl tracking-wide md:text-6xl">
            <BounceText text="选择你的平台" />
          </h2>
          {state === "ready" && release && (
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--ink-soft)]">
              <span className="tag-pill !bg-[var(--mint)]">{release.tag}</span>
              发布于 {release.date}
            </p>
          )}
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((p, i) => {
            const asset = assetFor(p.key);
            return (
              <Reveal key={p.key} delay={i * 110}>
                <div className="card-line hover-lift flex h-full flex-col rounded-[24px] bg-white p-7 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-[1.5px] border-[var(--line)] bg-[var(--cream)]">
                    {p.icon}
                  </div>
                  <h3 className="font-display mt-4 text-2xl tracking-wide">{p.label}</h3>
                  <p className="mt-1 text-sm font-bold text-[var(--ink-soft)]">{p.sub}</p>

                  <div className="mt-auto pt-6">
                    {state === "loading" ? (
                      <span className="btn-pill w-full justify-center opacity-60">寻找ちぃ中…</span>
                    ) : state === "ready" && asset ? (
                      <a href={asset.url} className="btn-pill btn-pill--dark w-full justify-center">
                        ↓ 下载 · {formatSize(asset.size)}
                      </a>
                    ) : (
                      <span className="btn-pill w-full justify-center opacity-60">准备中…</span>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {state !== "ready" && (
          <Reveal delay={200}>
            <div className="card-line mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 rounded-[24px] bg-[var(--cream)] px-8 py-8 text-center md:flex-row md:text-left">
              <FlowerMark className="heartbeat h-10 w-10 shrink-0 text-[var(--pink-deep)]" />
              <div>
                <p className="font-display text-xl tracking-wide">ちぃ 正在准备下载链接…</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">
                  正式包还没有放出。可以先去 GitHub Releases 蹲守最新进展，或者点 Star 第一时间收到通知。
                </p>
              </div>
              <a
                href={RELEASES_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-pill btn-pill--pink shrink-0 md:ml-auto"
              >
                去 Releases 看看 ↗
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
