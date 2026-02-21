interface NoiseProps {
  opacity?: number;
  className?: string;
}

export default function Noise({ opacity = 0.03, className = "" }: NoiseProps) {
  return (
    <>
      {/* SVG filter defined once, invisible */}
      <svg className="hidden">
        <filter id="noise-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </svg>

      {/* Full-screen overlay using the filter — no JS, no canvas, no per-frame cost */}
      <div
        className={`fixed inset-0 pointer-events-none ${className}`}
        style={{
          opacity,
          zIndex: 1,
          filter: "url(#noise-filter)",
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
}
