/* ══════════════════════════════════════════════════════════
   EmailCaptureForm — email input + CTA
   Used inside CheckoutModal on the pricing page.
   Single email field with "Proceed to Checkout" button.
   ══════════════════════════════════════════════════════════ */

"use client";

import { FormEvent, useState } from "react";

interface EmailCaptureFormProps {
  dark?: boolean;
  /** CTA button text */
  buttonText?: string;
  /** Entrance animation delay in seconds */
  delay?: number;
  onSubmit?: (email: string) => void;
}

export { type EmailCaptureFormProps };

export default function EmailCaptureForm({
  dark = false,
  buttonText = "Proceed to Checkout",
  delay = 0,
  onSubmit,
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    onSubmit?.(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        animation: delay
          ? `hero-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
          : undefined,
      }}
    >
      <div>
        <label
          className={`mb-2.5 block text-[12px] font-bold uppercase tracking-[0.15em] ${
            dark ? "text-white/40" : "text-text-3"
          }`}
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          className={`w-full rounded-xl px-5 py-4 text-[14px] outline-none transition-all duration-200 ${
            dark
              ? "bg-white/[0.06] text-white placeholder:text-white/25 focus:bg-white/[0.1] focus:ring-2 focus:ring-accent/15"
              : "bg-muted text-foreground placeholder:text-text-3 focus:bg-muted-dark focus:ring-2 focus:ring-primary/10"
          } ${error ? (dark ? "ring-2 ring-danger/30" : "ring-2 ring-danger/30") : ""}`}
        />
        {error && (
          <p className="mt-2 text-[12px] font-medium text-danger">{error}</p>
        )}
      </div>

      <button
        type="submit"
        className={`mt-5 w-full rounded-xl py-4 text-[15px] font-bold transition-colors duration-200 ${
          dark
            ? "bg-accent text-hero-dark hover:bg-accent-hover"
            : "bg-accent text-hero-dark hover:bg-accent-hover"
        }`}
      >
        {buttonText}
      </button>
    </form>
  );
}
