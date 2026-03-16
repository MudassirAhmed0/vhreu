/* ══════════════════════════════════════════════════════════
   SectionWrapper — universal section container
   Every content block on every page sits inside this.
   Handles: background, padding, heading, subtitle, edge
   lines, entrance animation, and width constraints.
   Matches CardSection / SplitContent background system.
   ══════════════════════════════════════════════════════════ */

import { ReactNode } from "react";

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

type BgVariant = "white" | "muted" | "dark";

interface SectionWrapperProps {
  children: ReactNode;
  /** Background style */
  bg?: BgVariant;
  /** Section heading (h2) */
  heading?: string;
  /** Subtitle below heading */
  subtitle?: string;
  /** Anchor link target */
  id?: string;
  /** Narrow container (max-w-3xl) for focused content like FAQ */
  narrow?: boolean;
  /** Entrance animation delay for heading */
  delay?: number;
}

export { type BgVariant, type SectionWrapperProps };

/* ── Background classes ── */

const BG_CLASSES: Record<BgVariant, string> = {
  white: "bg-white",
  muted: "bg-surface",
  dark:  "bg-hero-dark",
};

const HEADING_CLASSES: Record<BgVariant, string> = {
  white: "text-foreground",
  muted: "text-foreground",
  dark:  "text-white",
};

const SUBTITLE_CLASSES: Record<BgVariant, string> = {
  white: "text-text-2",
  muted: "text-text-2",
  dark:  "text-white/50",
};

const EDGE_CLASSES: Record<BgVariant, string> = {
  white: "via-primary/8",
  muted: "via-primary/8",
  dark:  "via-accent/20",
};

/* ── Component ── */

export default function SectionWrapper({
  children,
  bg = "white",
  heading,
  subtitle,
  id,
  narrow = false,
  delay = 0,
}: SectionWrapperProps) {
  const isDark = bg === "dark";

  return (
    <section id={id} className="relative overflow-hidden py-20 sm:py-28">
      {/* ── Background layers ── */}
      <div className={`absolute inset-0 ${BG_CLASSES[bg]}`} />

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

      {/* ── Content ── */}
      <div
        className={`relative mx-auto px-5 sm:px-8 ${
          narrow ? "max-w-3xl" : "max-w-7xl"
        }`}
      >
        {/* Heading block */}
        {heading && (
          <div
            className="mx-auto max-w-3xl text-center"
            style={{
              animation: `hero-up 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s both`,
            }}
          >
            <h2
              className={`text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.02em] ${HEADING_CLASSES[bg]}`}
            >
              {heading}
            </h2>
            {subtitle && (
              <p
                className={`mt-4 text-[17px] leading-relaxed ${SUBTITLE_CLASSES[bg]}`}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Children — with top margin when heading present */}
        <div className={heading ? "mt-12" : undefined}>{children}</div>
      </div>
    </section>
  );
}
