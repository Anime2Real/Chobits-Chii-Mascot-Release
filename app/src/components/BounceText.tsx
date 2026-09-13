import type { CSSProperties, ReactNode } from "react";

interface BounceTextProps {
  text: string;
  className?: string;
  /** render prop style: wrap each char yourself if needed */
  charClassName?: string | ((ch: string, i: number) => string);
}

/**
 * Splits text into chars that bounce one-by-one when the parent
 * (.bounce-group) is hovered.
 */
export default function BounceText({ text, className = "", charClassName }: BounceTextProps) {
  const chars = Array.from(text);
  return (
    <span className={`bounce-group inline-block ${className}`} aria-label={text}>
      {chars.map((ch, i) => {
        const extra =
          typeof charClassName === "function" ? charClassName(ch, i) : charClassName ?? "";
        return (
          <span
            key={i}
            aria-hidden
            className={`bounce-char ${extra}`}
            style={{ "--i": i } as CSSProperties}
          >
            {ch === " " ? " " : ch}
          </span>
        );
      })}
    </span>
  );
}

export function FlowerMark({ className = "" }: { className?: string }): ReactNode {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <circle cx="12" cy="5.4" r="3.1" />
      <circle cx="18.3" cy="10.2" r="3.1" />
      <circle cx="15.9" cy="17.4" r="3.1" />
      <circle cx="8.1" cy="17.4" r="3.1" />
      <circle cx="5.7" cy="10.2" r="3.1" />
      <circle cx="12" cy="11.6" r="2.4" fill="var(--cream)" />
    </svg>
  );
}
