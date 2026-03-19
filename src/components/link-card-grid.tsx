/* ══════════════════════════════════════════════════════════
   LinkCardGrid — responsive grid of rectangular link cards
   Used for: car makes, brand decoder links, window sticker
   brand availability. Centered text, subtle depth.
   Follows design system: rounded-xl, border-white/[0.06],
   hero-up stagger, shadow-sm on light.
   ══════════════════════════════════════════════════════════ */

import Link from "next/link";

interface LinkCardItem {
  label: string;
  href: string;
}

type GridCols = 2 | 3 | 4 | 5 | 6;

interface LinkCardGridProps {
  items: LinkCardItem[];
  /** Max columns on desktop (default: 5) */
  columns?: GridCols;
  dark?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
}

export { type LinkCardItem, type LinkCardGridProps };

const GRID_COLS: Record<GridCols, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
  6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
};

export default function LinkCardGrid({
  items,
  columns = 5,
  dark = false,
  delay = 0,
}: LinkCardGridProps) {
  return (
    <div className={`grid gap-4 ${GRID_COLS[columns]}`}>
      {items.map((item, i) => (
        <Link
          key={item.label}
          href={item.href}
          className={`flex items-center justify-center rounded-xl border px-4 py-5 text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
            dark
              ? "border-white/[0.06] bg-white/[0.03] text-white/70 backdrop-blur-sm hover:border-accent/30 hover:bg-white/[0.06] hover:text-white hover:shadow-md hover:shadow-black/10"
              : "border-border bg-white text-primary hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-md hover:shadow-black/5"
          }`}
          style={{
            animation: delay
              ? `hero-up 0.6s cubic-bezier(0.16,1,0.3,1) ${delay + i * 0.04}s both`
              : undefined,
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
