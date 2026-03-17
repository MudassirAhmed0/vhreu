import { ReactNode } from "react";
import { TriangleAlert } from "lucide-react";
import { CheckIcon } from "./shared/icons";

/* ══════════════════════════════════════════════════════════
   Card — versatile card for grids
   Variants:
   • icon:      icon + title + description
   • checklist: title + list of items (string or {bold,text})
   • stat:      alert icon + stat number + label + description
   • contact:   centered icon + label + value link
   • callout:   gold stat + text + source (horizontal)
   Non-actionable — no hover effects (cards are not links).
   ══════════════════════════════════════════════════════════ */

type AccentColor = "blue" | "amber" | "green" | "purple" | "red";
type ChecklistItem = string | { bold: string; text: string };
type Variant = "icon" | "checklist" | "stat" | "contact" | "callout";

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
  /** Explicit variant override (auto-detected when omitted) */
  variant?: Variant;
  /* ── Stat variant props ── */
  stat?: string;
  label?: string;
  /* ── Contact variant props ── */
  value?: string;
  href?: string;
  secondary?: string;
  /* ── Callout variant props ── */
  text?: string;
  source?: string;
}

export { type AccentColor, type ChecklistItem, type FeatureCardProps, type Variant };

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

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════ */

export default function Card(props: FeatureCardProps) {
  const {
    title,
    dark = false,
    delay = 0,
    icon,
    description,
    items,
    accent,
    variant: explicitVariant,
    stat,
    label,
    value,
    href,
    secondary,
    text,
    source,
  } = props;

  /* Auto-detect variant from props */
  const variant: Variant = explicitVariant
    ?? (stat && text ? "callout"
    : stat ? "stat"
    : value !== undefined ? "contact"
    : items?.length ? "checklist"
    : "icon");

  /* ── Callout variant has its own shell ── */
  if (variant === "callout") {
    return (
      <CalloutContent
        stat={stat!}
        text={text!}
        source={source}
        dark={dark}
        delay={delay}
      />
    );
  }

  /* ── Card shell classes (no hover — cards are not actionable) ── */
  let cardClasses: string;
  let padding: string;

  if (variant === "checklist" && accent) {
    cardClasses = dark ? ACCENT_DARK_CARD[accent] : ACCENT_CARD[accent];
    padding = "p-7";
  } else if (variant === "contact") {
    cardClasses = dark
      ? "border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
      : "border border-border bg-white";
    padding = "p-8";
  } else if (variant === "checklist") {
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
      {variant === "checklist" ? (
        <ChecklistContent
          title={title}
          items={items!}
          accent={accent}
          dark={dark}
          delay={delay}
        />
      ) : variant === "stat" ? (
        <StatContent
          stat={stat!}
          label={label || title}
          description={description || ""}
          dark={dark}
        />
      ) : variant === "contact" ? (
        <ContactContent
          icon={icon}
          label={label || title}
          value={value!}
          href={href}
          secondary={secondary}
          dark={dark}
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
      <h3
        className={`mt-4 text-[17px] font-bold leading-snug ${
          dark ? "text-white/90" : "text-foreground"
        }`}
      >
        {title}
      </h3>
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
   CHECKLIST VARIANT
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
  const titleClass = accent
    ? dark ? ACCENT_DARK_TITLE[accent] : ACCENT_TITLE[accent]
    : dark ? "text-white/90" : "text-foreground";

  const checkClass = accent
    ? dark ? ACCENT_DARK_CHECK[accent] : ACCENT_CHECK[accent]
    : dark ? "text-accent/70" : "text-primary";

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

/* ══════════════════════════════════════════════════════════
   STAT VARIANT (absorbs StatCard)
   ══════════════════════════════════════════════════════════ */

function StatContent({
  stat,
  label,
  description,
  dark,
}: {
  stat: string;
  label: string;
  description: string;
  dark: boolean;
}) {
  return (
    <div className="flex flex-col">
      {/* Alert icon */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-danger/10">
        <TriangleAlert size={20} className="text-danger" strokeWidth={1.6} />
      </div>
      <p className="text-[28px] font-extrabold leading-none tracking-tight text-danger">
        {stat}
      </p>
      <p
        className={`mt-2 text-[14px] font-bold ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {label}
      </p>
      <p
        className={`mt-2 text-[13px] leading-relaxed ${
          dark ? "text-white/40" : "text-text-2"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   CONTACT VARIANT (absorbs ContactCard)
   ══════════════════════════════════════════════════════════ */

function ContactContent({
  icon,
  label,
  value,
  href,
  secondary,
  dark,
}: {
  icon?: ReactNode;
  label: string;
  value: string;
  href?: string;
  secondary?: string;
  dark: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {icon && (
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${
            dark ? "bg-accent/10 text-accent" : "bg-primary/8 text-primary"
          }`}
        >
          {icon}
        </div>
      )}
      <p
        className={`mt-4 text-[12px] font-bold uppercase tracking-[0.15em] ${
          dark ? "text-white/40" : "text-text-3"
        }`}
      >
        {label}
      </p>
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

/* ══════════════════════════════════════════════════════════
   CALLOUT VARIANT (absorbs CalloutBanner)
   ══════════════════════════════════════════════════════════ */

function CalloutContent({
  stat,
  text,
  source,
  dark,
  delay,
}: {
  stat: string;
  text: string;
  source?: string;
  dark: boolean;
  delay: number;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-8 sm:p-10 ${
        dark
          ? "border-accent/15 bg-accent/[0.04]"
          : "border-accent/20 bg-accent-light"
      }`}
      style={{
        animation: delay
          ? `hero-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
          : undefined,
      }}
    >
      {/* Accent glow */}
      <div
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-[60px]"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />
      <div className="relative flex flex-col items-center text-center sm:flex-row sm:gap-6 sm:text-left">
        <span
          className="shrink-0 text-[48px] font-extrabold leading-none tracking-tight sm:text-[56px]"
          style={{
            background: "linear-gradient(135deg, #E6B800 0%, #FFCC00 40%, #FFE566 70%, #FFCC00 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {stat}
        </span>
        <div>
          <p
            className={`text-[16px] font-semibold leading-relaxed sm:text-[17px] ${
              dark ? "text-white/70" : "text-foreground"
            }`}
          >
            {text}
          </p>
          {source && (
            <p
              className={`mt-2 text-[12px] ${
                dark ? "text-white/25" : "text-text-3"
              }`}
            >
              Source: {source}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
