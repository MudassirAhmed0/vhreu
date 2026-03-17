/* ══════════════════════════════════════════════════════════
   StatCard — danger/alert statistic card
   Shows a bold stat number + label + description with red
   alert styling. Used on homepage + country pages to show
   fraud/theft/recall risk data that motivates VIN checks.
   ══════════════════════════════════════════════════════════ */

interface StatCardProps {
  /** Bold stat value (e.g. "1 in 3", "30%", "697K") */
  stat: string;
  /** Short label (e.g. "Hidden Problems") */
  label: string;
  /** Longer description */
  description: string;
  dark?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
}

export { type StatCardProps };

export default function StatCard({
  stat,
  label,
  description,
  dark = false,
  delay = 0,
}: StatCardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-6 ${
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
      {/* Alert icon */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-danger/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-danger"
        >
          <path
            d="M10 2L1.5 17h17L10 2z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 8v3.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="10" cy="14" r="0.8" fill="currentColor" />
        </svg>
      </div>

      {/* Stat */}
      <p
        className={`text-[28px] font-extrabold leading-none tracking-tight ${
          dark ? "text-danger" : "text-danger"
        }`}
      >
        {stat}
      </p>

      {/* Label */}
      <p
        className={`mt-2 text-[14px] font-bold ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {label}
      </p>

      {/* Description */}
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
