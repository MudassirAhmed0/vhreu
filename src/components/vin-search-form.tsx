/* ══════════════════════════════════════════════════════════
   VinSearchForm — VIN input + search CTA
   Simple form: VIN input field + submit button.
   No tabs, no email, no phone — EU site is VIN-only.
   Follows design system: rounded-xl, border-white/[0.06],
   hero-up entrance animation, accent CTA with glow.
   ══════════════════════════════════════════════════════════ */

"use client";

import { useState } from "react";

interface VinSearchFormProps {
  buttonText?: string;
  dark?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
}

export { type VinSearchFormProps };

export default function VinSearchForm({
  buttonText = "Search VIN",
  dark = true,
  delay = 0,
}: VinSearchFormProps) {
  const [vin, setVin] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
      style={{
        animation: delay
          ? `hero-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
          : undefined,
      }}
    >
      <div className="space-y-3">
        <label htmlFor="vin-input" className="sr-only">
          Vehicle Identification Number (VIN)
        </label>
        <input
          id="vin-input"
          type="text"
          value={vin}
          onChange={(e) => setVin(e.target.value.toUpperCase())}
          placeholder="Enter VIN"
          className={`w-full rounded-xl border px-5 py-4 font-mono text-[15px] tracking-wider transition-colors focus:outline-none focus:ring-2 ${
            dark
              ? "border-white/[0.06] bg-white/[0.05] text-white placeholder-white/30 backdrop-blur-sm focus:border-accent/30 focus:bg-white/[0.07] focus:ring-accent/20"
              : "border-border bg-white text-foreground placeholder-text-3 shadow-sm focus:border-accent/30 focus:ring-accent/20"
          }`}
          maxLength={17}
        />
        <button
          type="submit"
          className={`w-full rounded-xl py-4 text-[15px] font-bold transition-all hover:-translate-y-0.5 ${
            dark
              ? "bg-accent text-hero-dark shadow-[0_4px_20px_rgba(255,204,0,0.2)] hover:shadow-[0_6px_28px_rgba(255,204,0,0.3)]"
              : "bg-primary text-white shadow-[0_4px_20px_rgba(26,54,92,0.15)] hover:bg-primary-light hover:shadow-[0_6px_28px_rgba(26,54,92,0.2)]"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}
