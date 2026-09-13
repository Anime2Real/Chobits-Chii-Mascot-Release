import type { CSSProperties } from "react";
import { FlowerMark } from "../components/BounceText";

const words = [
  "ちぃ！",
  "桌面宠物",
  "只属于你的一台",
  "DESKTOP MASCOT",
  "自动更新",
  "ちょうびっツ",
  "免费开源",
  "CHOBITS",
];

export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center">
      {words.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display whitespace-nowrap px-6 text-xl tracking-wide text-[var(--ink)] md:text-2xl">
            {w}
          </span>
          <FlowerMark className="h-5 w-5 shrink-0 text-[var(--pink-deep)]" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="marquee border-y-[1.5px] border-[var(--line)] bg-[var(--pink)] py-3"
      style={{ "--marquee-bg": "var(--pink)" } as CSSProperties}
    >
      <div className="marquee__track">
        {row}
        {row}
      </div>
    </div>
  );
}
