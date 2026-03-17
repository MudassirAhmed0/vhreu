/* ══════════════════════════════════════════════════════════
   TrustSection — trust block for pricing page
   TRUSTe badge + 3 icon-box features: Comprehensive Reports,
   Exceptional Accuracy, Real-time Information.
   ══════════════════════════════════════════════════════════ */

import { ReactNode } from "react";

interface TrustFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface TrustSectionProps {
  /** Optional TRUSTe badge image URL */
  badgeUrl?: string;
  /** Override default features */
  features?: TrustFeature[];
  dark?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
}

export { type TrustSectionProps, type TrustFeature };

const DEFAULT_FEATURES: TrustFeature[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6M12 9v6" />
        <rect x="3" y="3" width="18" height="18" rx="3" />
      </svg>
    ),
    title: "Comprehensive Reports",
    description: "Detailed vehicle history covering accidents, mileage, ownership, and more across all European markets.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Exceptional Accuracy",
    description: "Data sourced from official government registries, insurance databases, and manufacturer records.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Real-time Information",
    description: "Reports generated instantly with up-to-date data. No waiting — get results in seconds.",
  },
];

export default function TrustSection({
  badgeUrl,
  features = DEFAULT_FEATURES,
  dark = false,
  delay = 0,
}: TrustSectionProps) {
  return (
    <div
      style={{
        animation: delay
          ? `hero-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
          : undefined,
      }}
    >
      {/* TRUSTe badge */}
      {badgeUrl && (
        <div className="mb-10 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={badgeUrl}
            alt="TRUSTe Verified"
            className="h-16 w-auto opacity-60"
          />
        </div>
      )}

      {/* Features grid */}
      <div className="grid gap-6 sm:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className={`flex flex-col items-center rounded-2xl border p-6 text-center ${
              dark
                ? "border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
                : "border-border bg-white"
            }`}
            style={{
              animation: delay
                ? `hero-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay + 0.06 + i * 0.04}s both`
                : undefined,
            }}
          >
            {/* Icon */}
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                dark ? "bg-accent/10 text-accent" : "bg-primary/8 text-primary"
              }`}
            >
              {feature.icon}
            </div>

            {/* Title */}
            <p
              className={`mt-4 text-[14px] font-bold ${
                dark ? "text-white" : "text-foreground"
              }`}
            >
              {feature.title}
            </p>

            {/* Description */}
            <p
              className={`mt-2 text-[13px] leading-relaxed ${
                dark ? "text-white/40" : "text-text-2"
              }`}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
