/* ══════════════════════════════════════════════════════════
   TestimonialCard — customer review card
   Shows reviewer name, star rating, quote, and optional
   location. Used on homepage reviews section.
   ══════════════════════════════════════════════════════════ */

import { StarIcon } from "./shared/icons";

interface TestimonialCardProps {
  /** Reviewer name */
  name: string;
  /** Review text */
  quote: string;
  /** Star rating 1–5 */
  rating: number;
  /** Optional location (e.g. "Berlin, Germany") */
  location?: string;
  dark?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
}

export { type TestimonialCardProps };

export default function TestimonialCard({
  name,
  quote,
  rating,
  location,
  dark = false,
  delay = 0,
}: TestimonialCardProps) {
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
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            filled={i < rating}
            className={
              i < rating
                ? "text-accent"
                : dark
                  ? "text-white/15"
                  : "text-border-hi"
            }
          />
        ))}
      </div>

      {/* Quote */}
      <p
        className={`mt-4 flex-1 text-[14px] leading-relaxed ${
          dark ? "text-white/60" : "text-text-2"
        }`}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Reviewer */}
      <div className="mt-5 flex items-center gap-3">
        {/* Avatar initial */}
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold ${
            dark
              ? "bg-white/[0.06] text-white/50"
              : "bg-primary/8 text-primary"
          }`}
        >
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p
            className={`text-[13px] font-bold ${
              dark ? "text-white" : "text-foreground"
            }`}
          >
            {name}
          </p>
          {location && (
            <p
              className={`text-[12px] ${
                dark ? "text-white/30" : "text-text-3"
              }`}
            >
              {location}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
