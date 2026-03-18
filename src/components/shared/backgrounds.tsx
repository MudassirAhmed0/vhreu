/* ══════════════════════════════════════════════════════════
   SectionBackground — background layers + scene decorations
   bg: "white" | "muted" | "dark" — base color + default layers
   scene: optional decorative overlay that works on any bg
   ══════════════════════════════════════════════════════════ */

import { NOISE, BG_CLASSES, EDGE_CLASSES, type BgVariant } from "./constants";

export type Scene = "default" | "glow" | "rings" | "grid" | "waves" | "split" | "edge" | "minimal";

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

    case "split":
      return <SceneSplit isDark={isDark} />;

    case "edge":
      return <SceneEdge isDark={isDark} />;

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

/* ── Split: diagonal divider line + dual orbs + scrolling VIN strip ── */
function SceneSplit({ isDark }: { isDark: boolean }) {
  const lineColor = isDark
    ? "rgba(255,204,0,0.10)"
    : "rgba(26,54,92,0.06)";
  const lineColorFade = isDark
    ? "rgba(255,204,0,0.05)"
    : "rgba(26,54,92,0.03)";

  return (
    <>
      {/* Primary orb — left */}
      <div
        className="absolute -left-[5%] top-[15%] h-[450px] w-[500px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          opacity: isDark ? 0.25 : 0.05,
          animation: "orb-drift 13s ease-in-out infinite",
        }}
      />
      {/* Secondary orb — right */}
      <div
        className="absolute -right-[3%] bottom-[5%] h-[350px] w-[400px] rounded-full blur-[100px]"
        style={{
          background: isDark
            ? "radial-gradient(circle, var(--accent) 0%, transparent 70%)"
            : "radial-gradient(circle, var(--primary-light) 0%, transparent 70%)",
          opacity: isDark ? 0.12 : 0.04,
          animation: "orb-drift 10s ease-in-out infinite reverse",
        }}
      />
      {/* Diagonal energy line */}
      <div
        className="absolute left-[48%] top-0 hidden h-full w-px origin-top lg:block"
        style={{
          background: `linear-gradient(180deg, transparent 8%, ${lineColor} 45%, ${lineColorFade} 65%, transparent 92%)`,
          transform: "rotate(6deg)",
        }}
      />
      {/* Scrolling VIN strip */}
      <div className="absolute bottom-10 left-0 right-0 overflow-hidden opacity-[0.025]">
        <div
          className={`flex whitespace-nowrap font-mono text-[10px] font-bold tracking-[0.3em] ${
            isDark ? "text-white" : "text-primary"
          }`}
          style={{ animation: "vin-scroll 50s linear infinite" }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mr-12">
              WVWZZZ3CZWE123456 &middot; 5YJSA1E26MF123456 &middot;
              NMTER16RX0R073590 &middot; VF15RE20A55268448 &middot;
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

/* ── Edge: vertical accent bar + wide wash + rings ── */
function SceneEdge({ isDark }: { isDark: boolean }) {
  const barColor = isDark
    ? "rgba(255,204,0,0.08)"
    : "rgba(26,54,92,0.06)";
  const barColorFade = isDark
    ? "rgba(255,204,0,0.04)"
    : "rgba(26,54,92,0.03)";

  return (
    <>
      {/* Wide wash — top */}
      <div
        className="absolute -left-[5%] -top-[15%] h-[350px] w-[110%] rounded-[50%] blur-[110px]"
        style={{
          background: "linear-gradient(90deg, transparent 5%, var(--primary) 35%, var(--primary-light) 65%, transparent 95%)",
          opacity: isDark ? 0.2 : 0.04,
          animation: "orb-drift 18s ease-in-out infinite",
        }}
      />
      {/* Left accent bar */}
      <div
        className="absolute bottom-0 left-6 top-0 w-px sm:left-10 lg:left-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))]"
        style={{
          background: `linear-gradient(180deg, transparent 5%, ${barColor} 25%, ${barColorFade} 75%, transparent 95%)`,
        }}
      />
      {/* Subtle rings — right side */}
      {[180, 300].map((size, i) => (
        <div
          key={size}
          className="absolute -right-[5%] top-[30%] rounded-full"
          style={{
            width: size,
            height: size,
            border: `1px solid ${isDark ? "rgba(255,255,255,0.025)" : "rgba(26,54,92,0.04)"}`,
            animation: `ring-pulse 8s ease-in-out ${i * 2.5}s infinite`,
          }}
        />
      ))}
    </>
  );
}
