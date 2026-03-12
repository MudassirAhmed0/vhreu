/* ══════════════════════════════════════════════════════════
   IconList — vertical list with icon + text
   Foundational pattern: warnings, benefits, features, callouts.
   Composable into SplitContent, CardSection, or standalone.
   Non-actionable — no hover effects.
   ══════════════════════════════════════════════════════════ */

type ListItem = string | { bold: string; text: string };
type IconType = "warning" | "check" | "info" | "arrow";
type Variant = "danger" | "success" | "neutral" | "muted";

interface IconListProps {
  items: ListItem[];
  /** Built-in icon: warning triangle, check circle, info circle, arrow right */
  icon?: IconType;
  /** Color variant — controls icon color and optional row tint */
  variant?: Variant;
  /** Tinted background rows per item (default: true for danger, false otherwise) */
  tinted?: boolean;
  dark?: boolean;
  /** Base delay in seconds — items stagger from this point */
  delay?: number;
  /** Gap between items: "tight" (8px) | "normal" (12px) | "loose" (16px) */
  spacing?: "tight" | "normal" | "loose";
}

export { type ListItem, type IconType, type Variant, type IconListProps };

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

/* ── Spacing ── */

const GAP: Record<"tight" | "normal" | "loose", string> = {
  tight:  "space-y-2",
  normal: "space-y-3",
  loose:  "space-y-4",
};

/* ── Icons ── */

function WarningIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function InfoIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

const ICON_MAP: Record<IconType, React.FC<{ className: string }>> = {
  warning: WarningIcon,
  check:   CheckIcon,
  info:    InfoIcon,
  arrow:   ArrowIcon,
};

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
}: IconListProps) {
  /* Default tinted to true for danger, false otherwise */
  const showTint = tinted ?? variant === "danger";

  const IconComponent = ICON_MAP[icon];
  const iconSize = icon === "warning" ? "h-[18px] w-[18px]" : "h-[18px] w-[18px]";
  const iconColor = dark ? DARK_ICON_COLOR[variant] : ICON_COLOR[variant];
  const textColor = dark ? DARK_TEXT_COLOR[variant] : TEXT_COLOR[variant];
  const boldColor = dark ? DARK_BOLD_COLOR[variant] : BOLD_COLOR[variant];
  const tintBg = dark ? DARK_TINT_BG[variant] : TINT_BG[variant];

  return (
    <ul className={GAP[spacing]}>
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
            <IconComponent className={`mt-0.5 ${iconSize} shrink-0 ${iconColor}`} />
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
