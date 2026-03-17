/* ══════════════════════════════════════════════════════════
   Shared CTA buttons — primary accent + secondary outline
   ══════════════════════════════════════════════════════════ */

import Link from "next/link";

interface PrimaryCTAProps {
  href: string;
  label: string;
}

export function PrimaryCTA({ href, label }: PrimaryCTAProps) {
  return (
    <Link
      href={href}
      className="rounded-lg bg-accent px-6 py-3 text-[14px] font-bold text-white shadow-[0_2px_12px_rgba(232,92,58,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_4px_20px_rgba(232,92,58,0.3)]"
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
      className={`rounded-lg border-2 px-6 py-3 text-[14px] font-bold transition-colors duration-300 ${
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
