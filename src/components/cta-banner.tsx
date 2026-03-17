/* ══════════════════════════════════════════════════════════
   CTABanner — full-width conversion block
   Used as bottom-of-page CTA before footer.
   Two modes: button-only or with VIN input.
   Follows design system: hero-dark bg, noise grain, dot
   grid, accent CTA, hero-up entrance animation.
   ══════════════════════════════════════════════════════════ */

"use client";

import { useState } from "react";
import Link from "next/link";

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

interface CTABannerProps {
  heading: string;
  subtitle?: string;
  /** Button text (default: "Check Now") */
  ctaLabel?: string;
  /** Button link — when provided, renders a Link instead of VIN input */
  ctaHref?: string;
  /** Show VIN input + submit instead of a link button */
  showVinInput?: boolean;
  /** VIN submit button text (default: "Search VIN") */
  vinButtonText?: string;
}

export { type CTABannerProps };

export default function CTABanner({
  heading,
  subtitle,
  ctaLabel = "Check Now",
  ctaHref = "#hero",
  showVinInput = false,
  vinButtonText = "Search VIN",
}: CTABannerProps) {
  const [vin, setVin] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-hero-dark" />
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
      {/* Central glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse, var(--primary) 0%, transparent 70%)",
        }}
      />
      {/* Top edge line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2
          className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.02em] text-white"
          style={{
            animation:
              "hero-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          {heading}
        </h2>

        {subtitle && (
          <p
            className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-white/50"
            style={{
              animation:
                "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both",
            }}
          >
            {subtitle}
          </p>
        )}

        <div
          className="mt-10"
          style={{
            animation:
              "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both",
          }}
        >
          {showVinInput ? (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <input
                type="text"
                value={vin}
                onChange={(e) => setVin(e.target.value.toUpperCase())}
                placeholder="Enter VIN"
                className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.05] px-5 py-4 font-mono text-[15px] tracking-wider text-white placeholder-white/30 backdrop-blur-sm transition-colors focus:border-accent/30 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-accent/20"
                maxLength={17}
              />
              <button
                type="submit"
                className="rounded-xl bg-accent px-8 py-4 text-[15px] font-bold text-hero-dark shadow-[0_4px_20px_rgba(255,204,0,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(255,204,0,0.3)]"
              >
                {vinButtonText}
              </button>
            </form>
          ) : (
            <Link
              href={ctaHref}
              className="inline-flex rounded-xl bg-accent px-10 py-4 text-[15px] font-bold text-hero-dark shadow-[0_4px_20px_rgba(255,204,0,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(255,204,0,0.3)]"
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
