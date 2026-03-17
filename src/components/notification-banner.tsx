/* ══════════════════════════════════════════════════════════
   NotificationBanner — VIN lookup result notification
   Shows car image, VIN, vehicle Year/Make/Model, discount
   badge, and CTA button. Dismissible.
   Triggered after VIN search on all pages.
   ══════════════════════════════════════════════════════════ */

"use client";

import { useState } from "react";

interface NotificationBannerProps {
  /** Vehicle image URL */
  image?: string;
  /** VIN that was searched */
  vin: string;
  /** Vehicle description (e.g. "2019 Volkswagen Golf") */
  vehicle: string;
  /** Discount badge text (e.g. "15% OFF") */
  discount?: string;
  /** CTA button text */
  ctaLabel?: string;
  onCtaClick?: () => void;
  onDismiss?: () => void;
}

export { type NotificationBannerProps };

export default function NotificationBanner({
  image,
  vin,
  vehicle,
  discount,
  ctaLabel = "Get Full Report",
  onCtaClick,
  onDismiss,
}: NotificationBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div
      className="fixed bottom-5 left-5 right-5 z-50 mx-auto max-w-lg overflow-hidden rounded-2xl border border-border bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
      style={{ animation: "hero-up 0.5s cubic-bezier(0.16,1,0.3,1) both" }}
    >
      <div className="flex items-center gap-4 p-4">
        {/* Vehicle image */}
        {image && (
          <div className="hidden h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-muted sm:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={vehicle}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Info */}
        <div className="min-w-0 flex-1">
          <p className="text-[14px] font-bold text-foreground">{vehicle}</p>
          <p className="mt-0.5 truncate font-mono text-[12px] tracking-wider text-text-3">
            {vin}
          </p>
        </div>

        {/* Discount badge */}
        {discount && (
          <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold text-accent-hover">
            {discount}
          </span>
        )}

        {/* CTA */}
        <button
          onClick={onCtaClick}
          className="shrink-0 rounded-xl bg-primary px-5 py-2.5 text-[13px] font-bold text-white transition-colors duration-200 hover:bg-primary-light"
        >
          {ctaLabel}
        </button>

        {/* Dismiss */}
        <button
          onClick={handleDismiss}
          className="shrink-0 text-text-4 transition-colors duration-200 hover:text-text-2"
          aria-label="Dismiss"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M5 5l8 8M13 5l-8 8" />
          </svg>
        </button>
      </div>
    </div>
  );
}
