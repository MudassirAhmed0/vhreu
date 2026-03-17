/* ══════════════════════════════════════════════════════════
   SectionBackground — shared background layers
   Renders noise grain, dot grid, glow, and edge line
   based on BgVariant. Replaces ~30 lines of identical
   background JSX in each section component.
   ══════════════════════════════════════════════════════════ */

import { NOISE, BG_CLASSES, EDGE_CLASSES, type BgVariant } from "./constants";

interface SectionBackgroundProps {
  bg: BgVariant;
}

export default function SectionBackground({ bg }: SectionBackgroundProps) {
  const isDark = bg === "dark";

  return (
    <>
      {/* Base color */}
      <div className={`absolute inset-0 ${BG_CLASSES[bg]}`} />

      {/* Dark-only layers */}
      {isDark && (
        <>
          {/* Noise grain */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{ backgroundImage: NOISE }}
          />
          {/* Dot grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              opacity: 0.04,
            }}
          />
          {/* Central glow */}
          <div
            className="absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
            style={{
              background:
                "radial-gradient(ellipse, var(--primary) 0%, transparent 70%)",
            }}
          />
        </>
      )}

      {/* Muted-only dot pattern */}
      {bg === "muted" && (
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(26,54,92,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      )}

      {/* Bottom edge line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent ${EDGE_CLASSES[bg]}`}
      />
    </>
  );
}
