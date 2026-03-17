/* ══════════════════════════════════════════════════════════
   ExitIntentPopup — exit-intent discount modal
   Report preview image, "15% OFF" headline, subtext,
   CTA + dismiss. Semi-transparent overlay.
   Triggered on mouse exit intent on all pages.
   ══════════════════════════════════════════════════════════ */

"use client";

import { useEffect, useRef } from "react";

interface ExitIntentPopupProps {
  /** Discount headline (e.g. "15% OFF") */
  headline?: string;
  /** Subtext */
  subtext?: string;
  /** CTA button text */
  ctaLabel?: string;
  /** Dismiss button text */
  dismissLabel?: string;
  /** Report preview image URL */
  image?: string;
  open: boolean;
  onCtaClick?: () => void;
  onDismiss: () => void;
}

export { type ExitIntentPopupProps };

export default function ExitIntentPopup({
  headline = "15% OFF",
  subtext = "Don't leave the history behind",
  ctaLabel = "Take 15% off",
  dismissLabel = "No Thanks",
  image,
  open,
  onCtaClick,
  onDismiss,
}: ExitIntentPopupProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    else if (!open && el.open) el.close();
  }, [open]);

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onDismiss}
      className="fixed inset-0 z-50 m-0 flex h-full w-full items-center justify-center bg-transparent p-5 backdrop:bg-hero-dark/60 backdrop:backdrop-blur-sm"
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
        style={{ animation: "hero-up 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        {/* Close */}
        <button
          onClick={onDismiss}
          className="absolute right-4 top-4 z-10 text-text-4 transition-colors duration-200 hover:text-text-2"
          aria-label="Close"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M5 5l10 10M15 5l-10 10" />
          </svg>
        </button>

        {/* Preview image */}
        {image && (
          <div className="flex justify-center bg-muted px-8 pb-4 pt-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt="Report preview"
              className="h-auto w-full max-w-[200px] drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-8 text-center">
          {/* Headline */}
          <p
            className="text-[36px] font-extrabold leading-none tracking-tight"
            style={{
              background:
                "linear-gradient(135deg, #E6B800 0%, #FFCC00 40%, #FFE566 70%, #FFCC00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {headline}
          </p>

          {/* Subtext */}
          <p className="mt-3 text-[15px] text-text-2">{subtext}</p>

          {/* CTA */}
          <button
            onClick={onCtaClick}
            className="mt-6 w-full rounded-xl bg-primary py-4 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-primary-light"
          >
            {ctaLabel}
          </button>

          {/* Dismiss */}
          <button
            onClick={onDismiss}
            className="mt-3 text-[13px] text-text-3 transition-colors duration-200 hover:text-text-2"
          >
            {dismissLabel}
          </button>
        </div>
      </div>
    </dialog>
  );
}
