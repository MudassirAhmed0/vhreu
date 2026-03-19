/* ══════════════════════════════════════════════════════════
   PricingCard — single pricing tier card
   Shows plan name, price, credits, savings, promo code,
   and CTA button. Optional "featured" highlight.
   Follows design system: rounded-2xl, border-border /
   border-white/[0.06], hero-up entrance animation.
   ══════════════════════════════════════════════════════════ */

interface PricingCardProps {
  name: string;
  price: number;
  credits: number;
  /** Savings label (e.g. "20%") — omit for base tier */
  savings?: string;
  /** Highlight as featured/popular tier */
  featured?: boolean;
  dark?: boolean;
  /** CTA button text (default: "Get Credit(s)") */
  buttonText?: string;
  /** CTA click handler */
  onSelect?: () => void;
  /** Entrance animation delay in seconds */
  delay?: number;
}

export { type PricingCardProps };

export default function PricingCard({
  name,
  price,
  credits,
  savings,
  featured = false,
  dark = false,
  buttonText,
  onSelect,
  delay = 0,
}: PricingCardProps) {
  const ctaText = buttonText ?? (credits === 1 ? "Get Credit" : "Get Credits");

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
        featured
          ? dark
            ? "border-accent/30 bg-white/[0.05] backdrop-blur-sm hover:shadow-accent/10"
            : "border-accent/40 bg-white hover:shadow-black/5"
          : dark
            ? "border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:shadow-black/10"
            : "border-border bg-white hover:shadow-black/5"
      }`}
      style={{
        animation: delay
          ? `hero-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
          : undefined,
      }}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -right-8 top-4 rotate-45 bg-accent px-10 py-1 text-[10px] font-bold uppercase tracking-wider text-hero-dark">
          Popular
        </div>
      )}

      {/* Header */}
      <div
        className={`px-6 pb-5 pt-6 text-center ${
          dark ? "border-b border-white/[0.06]" : "border-b border-border"
        }`}
      >
        {/* Plan name */}
        <p
          className={`text-[12px] font-bold uppercase tracking-[0.15em] ${
            dark ? "text-white/40" : "text-text-3"
          }`}
        >
          {name}
        </p>

        {/* Price */}
        <div className="mt-3 flex items-baseline justify-center gap-0.5">
          <span
            className={`text-[18px] font-bold ${
              dark ? "text-white/60" : "text-text-2"
            }`}
          >
            &euro;
          </span>
          <span
            className={`text-[40px] font-extrabold leading-none tracking-tight ${
              featured
                ? "text-accent"
                : dark
                  ? "text-white"
                  : "text-foreground"
            }`}
          >
            {price % 1 === 0 ? price : price.toFixed(2)}
          </span>
        </div>

        {/* Credits */}
        <p
          className={`mt-2 text-[14px] font-medium ${
            dark ? "text-white/40" : "text-text-2"
          }`}
        >
          {credits} {credits === 1 ? "report" : "reports"}
        </p>

        {/* Savings */}
        {savings && (
          <span
            className={`mt-2 inline-block rounded-full px-3 py-0.5 text-[11px] font-bold ${
              dark
                ? "bg-accent/10 text-accent"
                : "bg-accent/10 text-accent-hover"
            }`}
          >
            Save {savings}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        {/* Features */}
        <ul className="space-y-2.5 text-[13px]">
          <li
            className={`flex items-center gap-2 ${
              dark ? "text-white/50" : "text-text-2"
            }`}
          >
            <CheckIcon dark={dark} />
            Never expires
          </li>
          <li
            className={`flex items-center gap-2 ${
              dark ? "text-white/50" : "text-text-2"
            }`}
          >
            <CheckIcon dark={dark} />
            Instant delivery
          </li>
          <li
            className={`flex items-center gap-2 ${
              dark ? "text-white/50" : "text-text-2"
            }`}
          >
            <CheckIcon dark={dark} />
            Full history report
          </li>
        </ul>

        {/* Spacer pushes CTA to bottom so all cards align */}
        <div className="flex-1" />
        <button
          onClick={onSelect}
          className={`mt-5 w-full rounded-xl py-3.5 text-[14px] font-bold transition-colors duration-200 ${
            featured
              ? "bg-accent text-hero-dark hover:bg-accent-hover"
              : dark
                ? "border border-white/[0.06] bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white"
                : "bg-primary text-white hover:bg-primary-light"
          }`}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}

/* ── Check icon (inline SVG) ── */
function CheckIcon({ dark }: { dark: boolean }) {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${dark ? "text-accent/50" : "text-accent"}`}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
