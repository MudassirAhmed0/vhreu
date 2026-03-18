/* ══════════════════════════════════════════════════════════
   SectionBackground — background layers + scene decorations
   bg: "white" | "muted" | "dark" — base color + default layers
   scene: optional decorative overlay that works on any bg
   ══════════════════════════════════════════════════════════ */

import { NOISE, BG_CLASSES, EDGE_CLASSES, type BgVariant } from "./constants";

export type Scene = "default" | "glow" | "rings" | "grid" | "waves" | "minimal";

interface SectionBackgroundProps {
  bg: BgVariant;
  scene?: Scene;
}

export default function SectionBackground({ bg, scene = "default" }: SectionBackgroundProps) {
  const isDark = bg === "dark";

  return (
    <>
      {/* Base color */}
      <div className={`absolute inset-0 ${BG_CLASSES[bg]}`} />

      {/* Dark-only base layers (noise + dots) */}
      {isDark && (
        <>
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{ backgroundImage: NOISE }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              opacity: 0.04,
            }}
          />
        </>
      )}

      {/* Muted base dot pattern */}
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

      {/* ── Scene decorations ── */}
      <SceneLayer scene={scene} isDark={isDark} />

      {/* Bottom edge line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent ${EDGE_CLASSES[bg]}`}
      />
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   SCENE LAYERS — decorative overlays for visual variety
   Each works on both light and dark backgrounds.
   ══════════════════════════════════════════════════════════ */

function SceneLayer({ scene, isDark }: { scene: Scene; isDark: boolean }) {
  switch (scene) {
    case "minimal":
      return null;

    case "glow":
      return <SceneGlow isDark={isDark} />;

    case "rings":
      return <SceneRings isDark={isDark} />;

    case "grid":
      return <SceneGrid isDark={isDark} />;

    case "waves":
      return <SceneWaves isDark={isDark} />;

    case "default":
    default:
      return <SceneDefault isDark={isDark} />;
  }
}

/* ── Default: central glow (original behavior) ── */
function SceneDefault({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
      style={{
        background: "radial-gradient(ellipse, var(--primary) 0%, transparent 70%)",
        opacity: isDark ? 0.15 : 0.04,
      }}
    />
  );
}

/* ── Glow: dual orbs with drift animation ── */
function SceneGlow({ isDark }: { isDark: boolean }) {
  return (
    <>
      {/* Primary orb — left-center */}
      <div
        className="absolute -left-[5%] top-[20%] h-[450px] w-[500px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(ellipse, var(--primary) 0%, transparent 70%)",
          opacity: isDark ? 0.2 : 0.05,
          animation: "orb-drift 14s ease-in-out infinite",
        }}
      />
      {/* Secondary orb — right-bottom */}
      <div
        className="absolute -right-[5%] bottom-[10%] h-[350px] w-[400px] rounded-full blur-[100px]"
        style={{
          background: isDark
            ? "radial-gradient(circle, var(--accent) 0%, transparent 70%)"
            : "radial-gradient(circle, var(--primary-light) 0%, transparent 70%)",
          opacity: isDark ? 0.1 : 0.04,
          animation: "orb-drift 11s ease-in-out infinite reverse",
        }}
      />
    </>
  );
}

/* ── Rings: concentric pulsing circles ── */
function SceneRings({ isDark }: { isDark: boolean }) {
  return (
    <>
      {/* Central glow behind rings */}
      <div
        className="absolute left-1/2 top-1/2 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(ellipse, var(--primary) 0%, transparent 70%)",
          opacity: isDark ? 0.12 : 0.03,
        }}
      />
      {/* Pulsing rings */}
      {[200, 340, 500].map((size, i) => (
        <div
          key={size}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: size,
            height: size,
            border: `1px solid ${isDark ? "rgba(255,255,255,0.03)" : "rgba(26,54,92,0.06)"}`,
            animation: `ring-pulse 7s ease-in-out ${i * 2}s infinite`,
          }}
        />
      ))}
    </>
  );
}

/* ── Grid: geometric cross-hatch pattern ── */
function SceneGrid({ isDark }: { isDark: boolean }) {
  return (
    <>
      {/* Vertical lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(90deg, ${
            isDark ? "rgba(255,255,255,0.02)" : "rgba(26,54,92,0.03)"
          } 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Horizontal lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(0deg, ${
            isDark ? "rgba(255,255,255,0.02)" : "rgba(26,54,92,0.03)"
          } 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Corner glow */}
      <div
        className="absolute -right-[10%] -top-[10%] h-[400px] w-[400px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          opacity: isDark ? 0.12 : 0.04,
        }}
      />
    </>
  );
}

/* ── Waves: diagonal flowing lines ── */
function SceneWaves({ isDark }: { isDark: boolean }) {
  const color = isDark ? "rgba(255,255,255,0.025)" : "rgba(26,54,92,0.04)";
  return (
    <>
      {/* Diagonal lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 60px,
            ${color} 60px,
            ${color} 61px
          )`,
        }}
      />
      {/* Soft glow — bottom left */}
      <div
        className="absolute -bottom-[5%] -left-[5%] h-[350px] w-[450px] rounded-full blur-[110px]"
        style={{
          background: isDark
            ? "radial-gradient(ellipse, var(--primary) 0%, transparent 70%)"
            : "radial-gradient(ellipse, var(--primary-light) 0%, transparent 70%)",
          opacity: isDark ? 0.15 : 0.04,
          animation: "orb-drift 16s ease-in-out infinite",
        }}
      />
    </>
  );
}
