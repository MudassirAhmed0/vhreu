/* ══════════════════════════════════════════════════════════
   TrustBadges — inline trust signal row
   "View Sample Report" link + "Pan-European Coverage" +
   checkmarks: Reliable, Detailed, Accurate, Affordable.
   Placed below hero form on homepage + country pages.
   ══════════════════════════════════════════════════════════ */

import Link from "next/link";

interface TrustBadgesProps {
  dark?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
}

export { type TrustBadgesProps };

const BADGES = ["Reliable", "Detailed", "Accurate", "Affordable"];

export default function TrustBadges({
  dark = true,
  delay = 0,
}: TrustBadgesProps) {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3"
      style={{
        animation: delay
          ? `hero-up 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
          : undefined,
      }}
    >
      {/* Sample report link */}
      <Link
        href="/sample-report"
        className={`flex items-center gap-1.5 text-[13px] font-semibold transition-colors duration-200 ${
          dark
            ? "text-accent/70 hover:text-accent"
            : "text-primary hover:text-primary-light"
        }`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <rect x="2" y="1.5" width="10" height="11" rx="1.5" />
          <path d="M5 5h4M5 7.5h4M5 10h2" />
        </svg>
        View Sample Report
      </Link>

      {/* Divider */}
      <span
        className={`hidden h-4 w-px sm:block ${
          dark ? "bg-white/10" : "bg-border"
        }`}
      />

      {/* Coverage */}
      <span
        className={`flex items-center gap-1.5 text-[13px] font-medium ${
          dark ? "text-white/40" : "text-text-2"
        }`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 ${dark ? "text-accent/50" : "text-primary/50"}`}
        >
          <circle cx="7" cy="7" r="5.5" />
          <path d="M1.5 7h11M7 1.5c-1.5 1.5-2.3 3.5-2.3 5.5s.8 4 2.3 5.5c1.5-1.5 2.3-3.5 2.3-5.5s-.8-4-2.3-5.5z" />
        </svg>
        Pan-European Coverage
      </span>

      {/* Divider */}
      <span
        className={`hidden h-4 w-px sm:block ${
          dark ? "bg-white/10" : "bg-border"
        }`}
      />

      {/* Checkmarks */}
      {BADGES.map((badge) => (
        <span
          key={badge}
          className={`flex items-center gap-1.5 text-[13px] font-medium ${
            dark ? "text-white/40" : "text-text-2"
          }`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`shrink-0 ${dark ? "text-accent/50" : "text-accent"}`}
          >
            <path d="M2.5 6l2.5 2.5 4.5-5" />
          </svg>
          {badge}
        </span>
      ))}
    </div>
  );
}
