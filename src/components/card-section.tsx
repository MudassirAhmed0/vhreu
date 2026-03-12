import { ReactNode } from "react";
import Link from "next/link";

/* ══════════════════════════════════════════════════════════
   CardSection — section wrapper with heading, grid, CTA
   Handles background, layout, and responsive grid.
   ══════════════════════════════════════════════════════════ */

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

type BgVariant = "white" | "muted" | "dark";
type GridCols = 2 | 3 | 4;

interface CardSectionProps {
  heading: string;
  subtitle?: string;
  children: ReactNode;
  bg?: BgVariant;
  /** Max columns on desktop (default: 3) */
  columns?: GridCols;
  cta?: { label: string; href: string; variant?: "primary" | "accent" };
  secondaryCta?: { label: string; href: string };
}

const BG_CLASSES: Record<BgVariant, string> = {
  white: "bg-white",
  muted: "bg-surface",
  dark: "bg-hero-dark",
};

const HEADING_CLASSES: Record<BgVariant, string> = {
  white: "text-foreground",
  muted: "text-foreground",
  dark: "text-white",
};

const SUBTITLE_CLASSES: Record<BgVariant, string> = {
  white: "text-text-2",
  muted: "text-text-2",
  dark: "text-white/50",
};

const GRID_COLS: Record<GridCols, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export default function CardSection({
  heading,
  subtitle,
  children,
  bg = "white",
  columns = 3,
  cta,
  secondaryCta,
}: CardSectionProps) {
  const isDark = bg === "dark";

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background */}
      <div className={`absolute inset-0 ${BG_CLASSES[bg]}`} />

      {isDark && (
        <>
          <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: NOISE }} />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              opacity: 0.04,
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
            style={{ background: "radial-gradient(ellipse, var(--primary) 0%, transparent 70%)" }}
          />
        </>
      )}

      {bg === "muted" && (
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(26,74,92,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      )}

      {/* Edge lines */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent ${
          isDark ? "via-accent/20" : "via-primary/8"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div
          className="mx-auto max-w-3xl text-center"
          style={{ animation: "hero-up 0.9s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <h2
            className={`text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.02em] ${HEADING_CLASSES[bg]}`}
          >
            {heading}
          </h2>
          {subtitle && (
            <p className={`mt-4 text-[17px] leading-relaxed ${SUBTITLE_CLASSES[bg]}`}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Card grid */}
        <div className={`mt-14 grid grid-cols-1 gap-6 ${GRID_COLS[columns]}`}>
          {children}
        </div>

        {/* CTA */}
        {(cta || secondaryCta) && (
          <div
            className="mt-12 flex flex-wrap justify-center gap-3"
            style={{ animation: "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
          >
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`rounded-lg border-2 px-6 py-3 text-[14px] font-bold transition-colors duration-300 ${
                  isDark
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.25,0.74,0.22,0.99)" }}
              >
                {secondaryCta.label}
              </Link>
            )}
            {cta && (
              <Link
                href={cta.href}
                className="rounded-lg bg-accent px-6 py-3 text-[14px] font-bold text-white shadow-[0_2px_12px_rgba(232,92,58,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_4px_20px_rgba(232,92,58,0.3)]"
                style={{ transitionTimingFunction: "cubic-bezier(0.25,0.74,0.22,0.99)" }}
              >
                {cta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
