/* ══════════════════════════════════════════════════════════
   SidebarCTA — sticky blog sidebar conversion widget
   "Ensure a Smart Purchase with Vehicle History EU"
   with VIN input or "Get Access" button.
   Used in BlogPostLayout sidebar slot.
   ══════════════════════════════════════════════════════════ */

import Link from "next/link";

interface SidebarCTAProps {
  /** Heading text */
  heading?: string;
  /** Description text */
  description?: string;
  /** CTA button text */
  ctaLabel?: string;
  /** CTA link */
  ctaHref?: string;
  dark?: boolean;
}

export { type SidebarCTAProps };

export default function SidebarCTA({
  heading = "Ensure a Smart Purchase",
  description = "Get a comprehensive vehicle history report before buying any used car in Europe.",
  ctaLabel = "Get Access",
  ctaHref = "/pricing",
  dark = false,
}: SidebarCTAProps) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        dark
          ? "border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
          : "border-border bg-white"
      }`}
    >
      {/* Icon */}
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
          dark ? "bg-accent/10" : "bg-primary/8"
        }`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={dark ? "text-accent" : "text-primary"}
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>

      {/* Text */}
      <p
        className={`mt-4 text-[15px] font-bold leading-snug ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {heading}
      </p>
      <p
        className={`mt-2 text-[13px] leading-relaxed ${
          dark ? "text-white/40" : "text-text-2"
        }`}
      >
        {description}
      </p>

      {/* CTA */}
      <Link
        href={ctaHref}
        className={`mt-5 flex w-full items-center justify-center rounded-xl py-3 text-[14px] font-bold transition-colors duration-200 ${
          dark
            ? "bg-accent text-hero-dark hover:bg-accent-hover"
            : "bg-primary text-white hover:bg-primary-light"
        }`}
      >
        {ctaLabel}
      </Link>

      {/* Trust line */}
      <p
        className={`mt-3 text-center text-[11px] ${
          dark ? "text-white/20" : "text-text-4"
        }`}
      >
        Trusted by 50,000+ buyers across Europe
      </p>
    </div>
  );
}
