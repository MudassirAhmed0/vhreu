/* ══════════════════════════════════════════════════════════
   IconList — icon + text list (vertical or grid)
   Foundational pattern: warnings, benefits, features, callouts.
   Composable into SplitContent, CardSection, or standalone.
   Non-actionable — no hover effects.
   ══════════════════════════════════════════════════════════ */

import DynamicIcon, { type IconName } from "./shared/dynamic-icon";

type ListItem = string | { bold: string; text: string };
type Variant = "danger" | "success" | "neutral" | "muted";

interface IconListProps {
  items: ListItem[];
  /** Any lucide icon name (e.g. "triangle-alert", "circle-check", "info", "chevron-right") */
  icon?: string;
  /** Color variant — controls icon color and optional row tint */
  variant?: Variant;
  /** Tinted background rows per item (default: true for danger, false otherwise) */
  tinted?: boolean;
  dark?: boolean;
  /** Base delay in seconds — items stagger from this point */
  delay?: number;
  /** Gap between items: "tight" (8px) | "normal" (12px) | "loose" (16px) */
  spacing?: "tight" | "normal" | "loose";
  /** Grid columns — omit for vertical stack, 2/3/4 for responsive grid */
  columns?: 2 | 3 | 4;
}

export { type ListItem, type IconName, type Variant, type IconListProps };

/* ── Variant colors (light) ── */

const ICON_COLOR: Record<Variant, string> = {
  danger:  "text-red-500",
  success: "text-primary",
  neutral: "text-primary/70",
  muted:   "text-text-3",
};

const TINT_BG: Record<Variant, string> = {
  danger:  "border-red-100/80 bg-gradient-to-r from-red-50/80 to-red-50/30",
  success: "border-primary/10 bg-gradient-to-r from-primary/[0.04] to-transparent",
  neutral: "border-border/60 bg-gradient-to-r from-surface/80 to-transparent",
  muted:   "border-border/40 bg-gradient-to-r from-surface/50 to-transparent",
};

const TEXT_COLOR: Record<Variant, string> = {
  danger:  "text-red-800/80",
  success: "text-text-2",
  neutral: "text-text-2",
  muted:   "text-text-3",
};

const BOLD_COLOR: Record<Variant, string> = {
  danger:  "text-red-900/90",
  success: "text-foreground",
  neutral: "text-foreground",
  muted:   "text-text-2",
};

/* ── Dark variant colors ── */

const DARK_ICON_COLOR: Record<Variant, string> = {
  danger:  "text-red-400",
  success: "text-accent/70",
  neutral: "text-white/50",
  muted:   "text-white/30",
};

const DARK_TINT_BG: Record<Variant, string> = {
  danger:  "border-red-400/10 bg-red-950/20",
  success: "border-accent/10 bg-accent/[0.04]",
  neutral: "border-white/[0.06] bg-white/[0.02]",
  muted:   "border-white/[0.04] bg-white/[0.01]",
};

const DARK_TEXT_COLOR: Record<Variant, string> = {
  danger:  "text-red-200/70",
  success: "text-white/50",
  neutral: "text-white/50",
  muted:   "text-white/30",
};

const DARK_BOLD_COLOR: Record<Variant, string> = {
  danger:  "text-red-100/80",
  success: "text-white/80",
  neutral: "text-white/80",
  muted:   "text-white/50",
};

/* ── Spacing (vertical stack) ── */

const GAP: Record<"tight" | "normal" | "loose", string> = {
  tight:  "space-y-2",
  normal: "space-y-3",
  loose:  "space-y-4",
};

/* ── Grid gap ── */

const GRID_GAP: Record<"tight" | "normal" | "loose", string> = {
  tight:  "gap-x-4 gap-y-3",
  normal: "gap-x-5 gap-y-3.5",
  loose:  "gap-x-6 gap-y-4",
};

/* ── Grid columns (mobile always 1-col, then responsive) ── */

const GRID_COLS: Record<2 | 3 | 4, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

/* ── Icon rendering uses DynamicIcon from shared ── */

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════ */

export default function IconList({
  items,
  icon = "check",
  variant = "neutral",
  tinted,
  dark = false,
  delay = 0,
  spacing = "normal",
  columns,
}: IconListProps) {
  /* Grid items always tinted by default (need visual boundary), vertical only for danger */
  const showTint = tinted ?? (columns ? true : variant === "danger");

  const iconSize = "h-[18px] w-[18px]";
  const iconColor = dark ? DARK_ICON_COLOR[variant] : ICON_COLOR[variant];
  const textColor = dark ? DARK_TEXT_COLOR[variant] : TEXT_COLOR[variant];
  const boldColor = dark ? DARK_BOLD_COLOR[variant] : BOLD_COLOR[variant];
  const tintBg = dark ? DARK_TINT_BG[variant] : TINT_BG[variant];

  const listClass = columns
    ? `grid ${GRID_COLS[columns]} ${GRID_GAP[spacing]}`
    : GAP[spacing];

  return (
    <ul className={listClass}>
      {items.map((item, i) => {
        const isComplex = typeof item === "object";
        const staggerDelay = delay ? delay + i * 0.06 : 0;

        return (
          <li
            key={i}
            className={`flex items-start gap-3 ${
              showTint ? `rounded-xl border px-4 py-3.5 ${tintBg}` : ""
            }`}
            style={{
              animation: staggerDelay
                ? `hero-up 0.6s cubic-bezier(0.16,1,0.3,1) ${staggerDelay}s both`
                : undefined,
            }}
          >
            <DynamicIcon name={icon as IconName} className={`mt-0.5 ${iconSize} shrink-0 ${iconColor}`} strokeWidth={1.8} />
            <span className={`text-[14px] leading-relaxed ${textColor}`}>
              {isComplex ? (
                <>
                  <strong className={`font-semibold ${boldColor}`}>
                    {item.bold}
                  </strong>{" "}
                  {item.text}
                </>
              ) : (
                item
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
