import { ReactNode } from "react";
import Link from "next/link";

/* ══════════════════════════════════════════════════════════
   SplitContent — 2-column layout (text + media)
   Used by: SaveMoney, VIN Explainer, country/brand pages
   Handles bg, layout direction, CTAs, and entrance animation.
   ══════════════════════════════════════════════════════════ */

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

type BgVariant = "white" | "muted" | "dark";

interface SplitContentProps {
  heading: string;
  /** Body text below heading — string or array of paragraphs */
  description?: string | string[];
  /** Extra content below description (warnings, bullets, stats, etc.) */
  children?: ReactNode;
  /** Media side — image, graphic, or any ReactNode */
  media?: ReactNode;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  bg?: BgVariant;
  /** Swap columns — media on left, text on right */
  reverse?: boolean;
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

const DESC_CLASSES: Record<BgVariant, string> = {
  white: "text-text-2",
  muted: "text-text-2",
  dark: "text-white/50",
};

export default function SplitContent({
  heading,
  description,
  children,
  media,
  cta,
  secondaryCta,
  bg = "white",
  reverse = false,
}: SplitContentProps) {
  const isDark = bg === "dark";
  const paragraphs = description
    ? Array.isArray(description) ? description : [description]
    : [];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* ── Background layers ── */}
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

      {/* Edge line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent ${
          isDark ? "via-accent/20" : "via-primary/8"
        }`}
      />

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Text column ── */}
          <div
            className={reverse ? "order-2 lg:order-2" : "order-1"}
            style={{ animation: "hero-up 0.9s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <h2
              className={`text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.02em] leading-[1.15] ${HEADING_CLASSES[bg]}`}
            >
              {heading}
            </h2>

            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`mt-4 text-[17px] leading-relaxed ${DESC_CLASSES[bg]}`}
              >
                {p}
              </p>
            ))}

            {/* Extra content (warnings, bullets, etc.) */}
            {children && (
              <div
                className="mt-8"
                style={{ animation: "hero-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}
              >
                {children}
              </div>
            )}

            {/* CTAs */}
            {(cta || secondaryCta) && (
              <div
                className="mt-8 flex flex-wrap gap-3"
                style={{ animation: "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
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

          {/* ── Media column ── */}
          <div
            className={`flex justify-center ${reverse ? "order-1 lg:order-1" : "order-2"}`}
            style={{ animation: "hero-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
          >
            {media || <MediaPlaceholder dark={isDark} />}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Default placeholder when no media is provided ── */
function MediaPlaceholder({ dark }: { dark: boolean }) {
  return (
    <div
      className={`relative h-80 w-full max-w-md rounded-2xl p-8 ${
        dark
          ? "border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
          : "border border-border bg-gradient-to-br from-surface to-white"
      }`}
    >
      <div className="flex h-full flex-col items-center justify-center text-center">
        <svg
          className={`h-16 w-16 ${dark ? "text-white/10" : "text-primary/15"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={0.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z"
          />
        </svg>
        <p className={`mt-3 text-[13px] ${dark ? "text-white/20" : "text-text-3"}`}>
          Image or graphic
        </p>
      </div>
    </div>
  );
}
