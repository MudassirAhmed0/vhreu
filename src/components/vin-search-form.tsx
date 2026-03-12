"use client";

import { useState } from "react";

interface VinSearchFormProps {
  buttonText?: string;
  dark?: boolean;
}

export default function VinSearchForm({ buttonText = "Search VIN", dark = true }: VinSearchFormProps) {
  const [vin, setVin] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
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
          className={`w-full rounded-xl border px-5 py-4 font-mono text-[15px] tracking-wider transition-colors focus:outline-none focus:ring-1 ${
            dark
              ? "border-white/[0.1] bg-white/[0.07] text-white placeholder-white/30 focus:border-accent/40 focus:bg-white/[0.1] focus:ring-accent/20"
              : "border-border bg-white text-foreground placeholder-text-3 focus:border-accent/40 focus:ring-accent/20"
          }`}
          maxLength={17}
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-accent py-4 text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(232,92,58,0.3)] transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_6px_28px_rgba(232,92,58,0.4)]"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}
