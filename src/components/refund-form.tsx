/* ══════════════════════════════════════════════════════════
   RefundForm — refund request form
   Fields: VIN, Email, First/Last name, Phone, Product type,
   Reason, Date of purchase, Additional details.
   Used on /request-a-refund page.
   ══════════════════════════════════════════════════════════ */

"use client";

import { FormEvent, useState } from "react";

interface RefundFormProps {
  dark?: boolean;
  card?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
  onSubmit?: (data: RefundFormData) => void;
}

interface RefundFormData {
  vin: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  productType: string;
  reason: string;
  purchaseDate: string;
  details: string;
}

export { type RefundFormProps, type RefundFormData };

const PRODUCT_TYPES = ["History report"];
const REASONS = [
  "Incorrect Information",
  "Insufficient Information",
  "Other (Specify)",
];

export default function RefundForm({
  dark = false,
  card = true,
  delay = 0,
  onSubmit,
}: RefundFormProps) {
  const [form, setForm] = useState<RefundFormData>({
    vin: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    productType: "",
    reason: "",
    purchaseDate: "",
    details: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  const set = (field: keyof RefundFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [field]: e.target.value });

  const inputBase = `w-full rounded-xl px-5 py-4 text-[14px] outline-none transition-all duration-200 ${
    dark
      ? "bg-white/[0.06] text-white placeholder:text-white/25 focus:bg-white/[0.1] focus:ring-2 focus:ring-accent/15"
      : "bg-muted text-foreground placeholder:text-text-3 focus:bg-muted-dark focus:ring-2 focus:ring-primary/10"
  }`;

  const labelClass = `mb-1.5 block text-[12px] font-bold uppercase tracking-[0.15em] ${
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
      <div className="space-y-7">
        {/* VIN */}
        <div>
          <label className={labelClass}>VIN</label>
          <input
            type="text"
            placeholder="e.g. WVWZZZ3CZWE123456"
            required
            maxLength={17}
            value={form.vin}
            onChange={(e) =>
              setForm({ ...form, vin: e.target.value.toUpperCase() })
            }
            className={`${inputBase} font-mono tracking-wider`}
          />
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            required
            value={form.email}
            onChange={set("email")}
            className={inputBase}
          />
        </div>

        {/* First + Last name */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>First Name</label>
            <input
              type="text"
              placeholder="John"
              required
              value={form.firstName}
              onChange={set("firstName")}
              className={inputBase}
            />
          </div>
          <div>
            <label className={labelClass}>Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              required
              value={form.lastName}
              onChange={set("lastName")}
              className={inputBase}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            type="tel"
            placeholder="+49 123 456 7890"
            required
            value={form.phone}
            onChange={set("phone")}
            className={inputBase}
          />
        </div>

        {/* Product type + Reason */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Product Type</label>
            <div className="relative">
              <select
                required
                value={form.productType}
                onChange={set("productType")}
                className={`${inputBase} appearance-none pr-11`}
              >
                <option value="" disabled>
                  Select product
                </option>
                {PRODUCT_TYPES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <Chevron dark={dark} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Reason for Refund</label>
            <div className="relative">
              <select
                required
                value={form.reason}
                onChange={set("reason")}
                className={`${inputBase} appearance-none pr-11`}
              >
                <option value="" disabled>
                  Select reason
                </option>
                {REASONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <Chevron dark={dark} />
            </div>
          </div>
        </div>

        {/* Date of purchase */}
        <div>
          <label className={labelClass}>Date of Purchase</label>
          <input
            type="date"
            required
            value={form.purchaseDate}
            onChange={set("purchaseDate")}
            className={inputBase}
          />
        </div>

        {/* Additional details */}
        <div>
          <label className={labelClass}>Additional Details</label>
          <textarea
            placeholder="Please provide any additional information..."
            rows={4}
            value={form.details}
            onChange={set("details")}
            className={`${inputBase} resize-none`}
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className={`mt-8 w-full rounded-xl py-4 text-[15px] font-bold transition-colors duration-200 ${
          dark
            ? "bg-accent text-hero-dark hover:bg-accent-hover"
            : "bg-primary text-white hover:bg-primary-light"
        }`}
      >
        Submit Request
      </button>
    </form>
  );
}

function Chevron({ dark }: { dark: boolean }) {
  return (
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
  );
}
