/* ══════════════════════════════════════════════════════════
   ExitIntentPopup — exit-intent discount modal
   Uses shared Modal for dialog/backdrop/close pattern.
   ══════════════════════════════════════════════════════════ */

"use client";

import Modal from "./shared/modal";

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
  return (
    <Modal open={open} onClose={onDismiss}>
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
    </Modal>
  );
}
