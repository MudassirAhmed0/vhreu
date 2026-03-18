/* ══════════════════════════════════════════════════════════
   Shared CTA buttons — primary navy + secondary outline
   Light bg: navy button. Dark bg: gold button.
   ══════════════════════════════════════════════════════════ */

import Link from "next/link";

interface PrimaryCTAProps {
  href: string;
  label: string;
  dark?: boolean;
}

export function PrimaryCTA({ href, label, dark = false }: PrimaryCTAProps) {
  return (
    <Link
      href={href}
      className={`rounded-xl px-6 py-3 text-[14px] font-bold transition-all duration-300 hover:-translate-y-0.5 ${
        dark
          ? "bg-accent text-hero-dark shadow-[0_2px_12px_rgba(255,204,0,0.18)] hover:bg-accent-hover hover:shadow-[0_4px_20px_rgba(255,204,0,0.25)]"
          : "bg-primary text-white shadow-[0_2px_12px_rgba(26,54,92,0.2)] hover:bg-primary-light hover:shadow-[0_4px_20px_rgba(26,54,92,0.25)]"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.25,0.74,0.22,0.99)" }}
    >
      {label}
    </Link>
  );
}

interface SecondaryCTAProps {
  href: string;
  label: string;
  dark?: boolean;
}

export function SecondaryCTA({ href, label, dark = false }: SecondaryCTAProps) {
  return (
    <Link
      href={href}
      className={`rounded-xl border-2 px-6 py-3 text-[14px] font-bold transition-colors duration-300 ${
        dark
          ? "border-white/20 text-white hover:bg-white/10"
          : "border-primary text-primary hover:bg-primary hover:text-white"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.25,0.74,0.22,0.99)" }}
    >
      {label}
    </Link>
  );
}
