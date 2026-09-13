interface ScallopEdgeProps {
  /** fill color of the scallop strip — should match the NEXT section's background */
  color: string;
  /** flip vertically (bumps point down) */
  flip?: boolean;
  className?: string;
}

/**
 * Repeating semicircle wave used as a playful transition between sections.
 */
export default function ScallopEdge({ color, flip = false, className = "" }: ScallopEdgeProps) {
  const r = 18;
  const count = 40;
  const width = r * 2 * count;
  const height = 36;

  let d = `M0 ${flip ? 0 : height} L0 ${flip ? 0 : height / 2}`;
  for (let i = 0; i < count; i++) {
    const x = i * r * 2;
    d += flip
      ? ` A ${r} ${r} 0 0 1 ${x + r * 2} 0`
      : ` A ${r} ${r} 0 0 1 ${x + r * 2} ${height / 2}`;
  }
  d += ` L${width} ${flip ? 0 : height} Z`;

  return (
    <div
      aria-hidden
      className={`pointer-events-none relative z-10 -mb-px w-full overflow-hidden leading-none ${className}`}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="block h-[26px] w-full md:h-[36px]"
      >
        <path d={d} fill={color} />
      </svg>
    </div>
  );
}
