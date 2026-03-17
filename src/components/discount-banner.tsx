/* ══════════════════════════════════════════════════════════
   DiscountBanner — fixed top bar discount notification
   "You've received DISCOUNT!" with close button.
   Shown conditionally on all pages.
   ══════════════════════════════════════════════════════════ */

"use client";

import { useState } from "react";

interface DiscountBannerProps {
  /** The discount message */
  message: string;
  /** Optional code to highlight */
  code?: string;
  onDismiss?: () => void;
}

export { type DiscountBannerProps };

export default function DiscountBanner({
  message,
  code,
  onDismiss,
}: DiscountBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div className="relative z-50 bg-primary px-5 py-2.5 text-center">
      <p className="text-[13px] font-medium text-white/90">
        {message}
        {code && (
          <>
            {" "}
            Use code{" "}
            <span className="font-bold text-accent">{code}</span>
          </>
        )}
      </p>

      {/* Dismiss */}
      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 transition-colors duration-200 hover:text-white/80"
        aria-label="Dismiss"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 4l8 8M12 4l-8 8" />
        </svg>
      </button>
    </div>
  );
}
