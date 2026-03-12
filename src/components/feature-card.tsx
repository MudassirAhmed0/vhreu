import { ReactNode } from "react";

/* ══════════════════════════════════════════════════════════
   FeatureCard — versatile card for grids
   Variants:
   • Icon mode:      icon + title + description
   • Checklist mode: title + list of items (string or {bold,text})
   Accent colors for category theming (Report Contents, etc.)
   Non-actionable — no hover effects (cards are not links).
   ══════════════════════════════════════════════════════════ */

type AccentColor = "blue" | "amber" | "green" | "purple" | "red";
type ChecklistItem = string | { bold: string; text: string };

interface FeatureCardProps {
  title: string;
  dark?: boolean;
  /** Stagger delay in seconds for entrance animation */
  delay?: number;
  /** Icon for the icon variant */
  icon?: ReactNode;
  /** Description text for the icon variant */
  description?: string;
  /** Checklist items — renders checklist variant when provided */
  items?: ChecklistItem[];
  /** Color accent for category cards */
  accent?: AccentColor;
}

export { type AccentColor, type ChecklistItem, type FeatureCardProps };

/* ── Accent color system ── */

const ACCENT_CARD: Record<AccentColor, string> = {
  blue:   "border-blue-200/60 bg-gradient-to-br from-blue-50/70 to-white",
  amber:  "border-amber-200/60 bg-gradient-to-br from-amber-50/70 to-white",
  green:  "border-green-200/60 bg-gradient-to-br from-green-50/70 to-white",
  purple: "border-purple-200/60 bg-gradient-to-br from-purple-50/70 to-white",
  red:    "border-red-200/60 bg-gradient-to-br from-red-50/70 to-white",
};

const ACCENT_TITLE: Record<AccentColor, string> = {
  blue:   "text-blue-700",
  amber:  "text-amber-700",
  green:  "text-green-700",
  purple: "text-purple-700",
  red:    "text-red-700",
};

const ACCENT_CHECK: Record<AccentColor, string> = {
  blue:   "text-blue-500",
  amber:  "text-amber-600",
  green:  "text-green-600",
  purple: "text-purple-600",
  red:    "text-red-500",
};

/* ── Dark mode accent variants ── */

const ACCENT_DARK_CARD: Record<AccentColor, string> = {
  blue:   "border-blue-400/15 bg-blue-950/20 backdrop-blur-sm",
  amber:  "border-amber-400/15 bg-amber-950/20 backdrop-blur-sm",
  green:  "border-green-400/15 bg-green-950/20 backdrop-blur-sm",
  purple: "border-purple-400/15 bg-purple-950/20 backdrop-blur-sm",
  red:    "border-red-400/15 bg-red-950/20 backdrop-blur-sm",
};

const ACCENT_DARK_TITLE: Record<AccentColor, string> = {
  blue:   "text-blue-300",
  amber:  "text-amber-300",
  green:  "text-green-300",
  purple: "text-purple-300",
  red:    "text-red-300",
};

const ACCENT_DARK_CHECK: Record<AccentColor, string> = {
  blue:   "text-blue-400",
  amber:  "text-amber-400",
  green:  "text-green-400",
  purple: "text-purple-400",
  red:    "text-red-400",
};

/* ── Check circle icon ── */
function CheckIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════ */

export default function FeatureCard({
  title,
  dark = false,
  delay = 0,
  icon,
  description,
  items,
  accent,
}: FeatureCardProps) {
  const isChecklist = !!items?.length;

  /* ── Card shell classes (no hover — cards are not actionable) ── */
  let cardClasses: string;
  let padding: string;

  if (isChecklist && accent) {
    cardClasses = dark ? ACCENT_DARK_CARD[accent] : ACCENT_CARD[accent];
    padding = "p-7";
  } else if (isChecklist) {
    cardClasses = dark
      ? "border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
      : "border border-border bg-white shadow-sm";
    padding = "p-7";
  } else {
    cardClasses = dark
      ? "border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
      : "border border-border bg-white shadow-sm";
    padding = "p-6";
  }

  return (
    <div
      className={`relative rounded-2xl ${cardClasses} ${padding}`}
      style={{
        animation: delay
          ? `hero-up 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
          : undefined,
      }}
    >
      {isChecklist ? (
        <ChecklistContent
          title={title}
          items={items}
          accent={accent}
          dark={dark}
          delay={delay}
        />
      ) : (
        <IconContent
          title={title}
          icon={icon}
          description={description}
          dark={dark}
        />
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   ICON VARIANT (original)
   ══════════════════════════════════════════════════════════ */

function IconContent({
  title,
  icon,
  description,
  dark,
}: {
  title: string;
  icon?: ReactNode;
  description?: string;
  dark: boolean;
}) {
  return (
    <>
      {/* Icon container */}
      {icon && (
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${
            dark
              ? "bg-white/[0.06] text-white/70"
              : "bg-primary/[0.07] text-primary"
          }`}
        >
          {icon}
        </div>
      )}

      {/* Title */}
      <h3
        className={`mt-4 text-[17px] font-bold leading-snug ${
          dark ? "text-white/90" : "text-foreground"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p
          className={`mt-2 text-[14px] leading-relaxed ${
            dark ? "text-white/40" : "text-text-2"
          }`}
        >
          {description}
        </p>
      )}
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   CHECKLIST VARIANT (new)
   ══════════════════════════════════════════════════════════ */

function ChecklistContent({
  title,
  items,
  accent,
  dark,
  delay,
}: {
  title: string;
  items: ChecklistItem[];
  accent?: AccentColor;
  dark: boolean;
  delay: number;
}) {
  /* Title color */
  const titleClass = accent
    ? dark
      ? ACCENT_DARK_TITLE[accent]
      : ACCENT_TITLE[accent]
    : dark
      ? "text-white/90"
      : "text-foreground";

  /* Check icon color */
  const checkClass = accent
    ? dark
      ? ACCENT_DARK_CHECK[accent]
      : ACCENT_CHECK[accent]
    : dark
      ? "text-accent/70"
      : "text-primary";

  return (
    <>
      <h3 className={`text-[18px] font-bold leading-snug ${titleClass}`}>
        {title}
      </h3>

      <ul className="mt-5 space-y-3.5">
        {items.map((item, i) => {
          const isComplex = typeof item === "object";
          return (
            <li
              key={i}
              className="flex items-start gap-3"
              style={{
                animation: delay
                  ? `hero-up 0.6s cubic-bezier(0.16,1,0.3,1) ${delay + 0.15 + i * 0.06}s both`
                  : undefined,
              }}
            >
              <CheckIcon className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${checkClass}`} />
              <span
                className={`text-[14px] leading-relaxed ${
                  dark ? "text-white/50" : "text-text-2"
                }`}
              >
                {isComplex ? (
                  <>
                    <strong
                      className={`font-semibold ${
                        dark ? "text-white/80" : "text-foreground"
                      }`}
                    >
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
    </>
  );
}
