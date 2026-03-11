"use client";

import { useState } from "react";

export default function VinSearchForm() {
  const [tab, setTab] = useState<"vin" | "plate">("vin");
  const [vin, setVin] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      {/* Tabs */}
      <div className="flex overflow-hidden rounded-t-xl border border-b-0 border-slate-200 bg-white">
        <button
          type="button"
          onClick={() => setTab("vin")}
          className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
            tab === "vin"
              ? "bg-primary text-white"
              : "text-slate-500 hover:bg-slate-50"
          }`}
        >
          By VIN
        </button>
        <button
          type="button"
          onClick={() => setTab("plate")}
          className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
            tab === "plate"
              ? "bg-primary text-white"
              : "text-slate-500 hover:bg-slate-50"
          }`}
        >
          By US License Plate
        </button>
      </div>

      {/* Fields */}
      <div className="space-y-3 rounded-b-xl border border-slate-200 bg-white p-5 shadow-lg">
        <input
          type="text"
          value={vin}
          onChange={(e) => setVin(e.target.value.toUpperCase())}
          placeholder={tab === "vin" ? "Enter 17-digit VIN number" : "Enter license plate"}
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-sm tracking-wider text-slate-900 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          maxLength={17}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <div className="relative">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number (optional)"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700">
            10% OFF
          </span>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-accent py-3.5 text-sm font-bold text-primary transition-colors hover:bg-accent-hover"
        >
          Search VIN
        </button>
      </div>
    </form>
  );
}
