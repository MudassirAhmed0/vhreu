/* ══════════════════════════════════════════════════════════
   ContactCard — single contact method card
   Shows icon, label, value, and optional action link.
   Used for Live Chat, Phone, Email on the contact page.
   ══════════════════════════════════════════════════════════ */

import { ReactNode } from "react";

interface ContactCardProps {
  /** Card icon */
  icon: ReactNode;
  /** Contact method label (e.g. "Live Chat") */
  label: string;
  /** Contact value (e.g. "support@vehiclehistory.eu") */
  value: string;
  /** Optional secondary value */
  secondary?: string;
  /** Link href (mailto:, tel:, or URL) */
  href?: string;
  dark?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
}

export { type ContactCardProps };

export default function ContactCard({
  icon,
  label,
  value,
  secondary,
  href,
  dark = false,
  delay = 0,
}: ContactCardProps) {
  return (
    <div
      className={`flex flex-col items-center rounded-2xl border p-8 text-center ${
        dark
          ? "border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
          : "border-border bg-white"
      }`}
      style={{
        animation: delay
          ? `hero-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
          : undefined,
      }}
    >
      {/* Icon */}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
          dark ? "bg-accent/10 text-accent" : "bg-primary/8 text-primary"
        }`}
      >
        {icon}
      </div>

      {/* Label */}
      <p
        className={`mt-4 text-[12px] font-bold uppercase tracking-[0.15em] ${
          dark ? "text-white/40" : "text-text-3"
        }`}
      >
        {label}
      </p>

      {/* Value */}
      {href ? (
        <a
          href={href}
          className={`mt-2 text-[15px] font-semibold transition-colors duration-200 ${
            dark
              ? "text-white hover:text-accent"
              : "text-foreground hover:text-primary"
          }`}
        >
          {value}
        </a>
      ) : (
        <p
          className={`mt-2 text-[15px] font-semibold ${
            dark ? "text-white" : "text-foreground"
          }`}
        >
          {value}
        </p>
      )}

      {/* Secondary */}
      {secondary && (
        <p
          className={`mt-1 text-[13px] ${
            dark ? "text-white/40" : "text-text-3"
          }`}
        >
          {secondary}
        </p>
      )}
    </div>
  );
}
