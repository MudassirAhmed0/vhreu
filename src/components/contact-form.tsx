/* ══════════════════════════════════════════════════════════
   ContactForm — contact page form
   Fields: Full Name, Email, Concern (dropdown), Message.
   Design system consistent: rounded-2xl, border tokens,
   accent CTA, dark mode glass variant.
   ══════════════════════════════════════════════════════════ */

"use client";

import { FormEvent, useState } from "react";

interface ContactFormProps {
  dark?: boolean;
  /** Wrap in a card (border + bg + padding). Default true.
   *  Set false to get bare fields — for embedding in a section layout. */
  card?: boolean;
  /** Show heading ("Get in Touch" + subtitle). Default true. */
  heading?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
  /** Form submit handler — receives form data */
  onSubmit?: (data: ContactFormData) => void;
}

interface ContactFormData {
  name: string;
  email: string;
  concern: string;
  message: string;
}

export { type ContactFormProps, type ContactFormData };

const CONCERNS = ["Support", "Decode Error", "Marketing", "Business", "Others"];

export default function ContactForm({
  dark = false,
  card = true,
  heading = true,
  delay = 0,
  onSubmit,
}: ContactFormProps) {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    concern: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  /* Borderless inputs — tinted bg provides the field definition */
  const inputBase = `w-full rounded-xl px-5 py-4 text-[14px] outline-none transition-all duration-200 ${
    dark
      ? "bg-white/[0.06] text-white placeholder:text-white/25 focus:bg-white/[0.1] focus:ring-2 focus:ring-accent/15"
      : "bg-muted text-foreground placeholder:text-text-3 focus:bg-muted-dark focus:ring-2 focus:ring-primary/10"
  }`;

  const labelClass = `mb-2.5 block text-[12px] font-bold uppercase tracking-[0.15em] ${
    dark ? "text-white/40" : "text-text-3"
  }`;

  const cardClass = card
    ? `rounded-2xl border p-8 sm:p-10 ${
        dark
          ? "border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
          : "border-border bg-white"
      }`
    : "";

  return (
    <form
      onSubmit={handleSubmit}
      className={cardClass}
      style={{
        animation: delay
          ? `hero-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
          : undefined,
      }}
    >
      {/* Heading */}
      {heading && (
        <div className="mb-10">
          <h3
            className={`text-[22px] font-extrabold tracking-tight ${
              dark ? "text-white" : "text-foreground"
            }`}
          >
            Get in Touch
          </h3>
          <p
            className={`mt-2 text-[14px] leading-relaxed ${
              dark ? "text-white/40" : "text-text-2"
            }`}
          >
            Fill out the form below and we&apos;ll get back to you within a few
            hours.
          </p>
        </div>
      )}

      {/* Fields */}
      <div className="space-y-6">
        {/* Name + Email */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputBase}
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputBase}
            />
          </div>
        </div>

        {/* Concern */}
        <div>
          <label className={labelClass}>Concern</label>
          <div className="relative">
            <select
              required
              value={form.concern}
              onChange={(e) => setForm({ ...form, concern: e.target.value })}
              className={`${inputBase} appearance-none pr-11`}
            >
              <option value="" disabled>
                Select a concern
              </option>
              {CONCERNS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 ${
                dark ? "text-white/30" : "text-text-3"
              }`}
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className={labelClass}>Message</label>
          <textarea
            placeholder="Describe your question or issue..."
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputBase} resize-none`}
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className={`mt-10 w-full rounded-xl py-4 text-[15px] font-bold transition-colors duration-200 ${
          dark
            ? "bg-accent text-hero-dark hover:bg-accent-hover"
            : "bg-primary text-white hover:bg-primary-light"
        }`}
      >
        Send Message
      </button>
    </form>
  );
}
