import type { CSSProperties } from "react";
import { FlowerMark } from "../components/BounceText";
import { useLang } from "../i18n";

export default function Marquee() {
  const { t, lang } = useLang();

  const row = (
    <div className="flex shrink-0 items-center">
      {t.marquee.items.map((w, i) => (
        <span key={`${lang}-${i}`} className="flex items-center">
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
