/* ══════════════════════════════════════════════════════════
   CTABanner — full-width conversion block
   Uses SectionBackground for dark background layers.
   Two modes: button-only or with VIN input.
   ══════════════════════════════════════════════════════════ */

"use client";

import { useState } from "react";
import Link from "next/link";
import SectionBackground from "./shared/backgrounds";
import { entranceAnimation } from "./shared/constants";

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
      <SectionBackground bg="dark" />

      {/* Top edge line (CTABanner-specific) */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2
          className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.02em] text-white"
          style={entranceAnimation(0.9)}
        >
          {heading}
        </h2>

        {subtitle && (
          <p
            className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-white/50"
            style={entranceAnimation(0.7, 0.1)}
          >
            {subtitle}
          </p>
        )}

        <div className="mt-10" style={entranceAnimation(0.7, 0.2)}>
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
