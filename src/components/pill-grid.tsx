/* ══════════════════════════════════════════════════════════
   PillGrid — flex-wrapped grid of link pills
   Used for: country lists, tag clouds, category links.
   Follows design system: rounded-xl, border-white/[0.06],
   hero-up entrance animation, staggered items.
   ══════════════════════════════════════════════════════════ */

import Link from "next/link";

interface PillItem {
  label: string;
  href: string;
}

interface PillGridProps {
  items: PillItem[];
  dark?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
}

export { type PillItem, type PillGridProps };

export default function PillGrid({
  items,
  dark = false,
  delay = 0,
}: PillGridProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2.5"
      style={{
        animation: delay
          ? `hero-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
          : undefined,
      }}
    >
      {items.map((item, i) => (
        <Link
          key={item.label}
          href={item.href}
          className={`rounded-xl border px-4 py-2.5 text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
            dark
              ? "border-white/[0.06] bg-white/[0.03] text-white/60 backdrop-blur-sm hover:border-accent/30 hover:bg-white/[0.06] hover:text-white/90"
              : "border-border bg-white text-text-2 hover:border-primary hover:bg-primary hover:text-white"
          }`}
          style={{
            animation: delay
              ? `hero-up 0.5s cubic-bezier(0.16,1,0.3,1) ${delay + 0.05 + i * 0.015}s both`
              : undefined,
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
