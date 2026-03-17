/* ══════════════════════════════════════════════════════════
   CalloutBanner — gold-accent stat callout
   Impactful single-stat highlight with gold gradient accent.
   e.g. "Over 73% of cars imported to Europe between 2011
   and 2021 had salvage titles."
   Used on sample report page.
   ══════════════════════════════════════════════════════════ */

interface CalloutBannerProps {
  /** The bold stat value (e.g. "73%") */
  stat: string;
  /** The full callout text */
  text: string;
  /** Optional source attribution */
  source?: string;
  dark?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
}

export { type CalloutBannerProps };

export default function CalloutBanner({
  stat,
  text,
  source,
  dark = false,
  delay = 0,
}: CalloutBannerProps) {
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
        {/* Stat */}
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
          {/* Text */}
          <p
            className={`text-[16px] font-semibold leading-relaxed sm:text-[17px] ${
              dark ? "text-white/70" : "text-foreground"
            }`}
          >
            {text}
          </p>

          {/* Source */}
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
