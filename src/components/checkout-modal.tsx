/* ══════════════════════════════════════════════════════════
   CheckoutModal — email capture modal for pricing page
   Wraps EmailCaptureForm in a modal overlay with close
   button and semi-transparent backdrop.
   Triggered on "Get Credits" click on pricing page.
   ══════════════════════════════════════════════════════════ */

"use client";

import { useEffect, useRef } from "react";
import EmailCaptureForm from "./email-capture-form";

interface CheckoutModalProps {
  open: boolean;
  /** Plan name to display (e.g. "Gold — 5 Credits") */
  planName?: string;
  /** Price to display (e.g. "€40") */
  price?: string;
  onSubmit?: (email: string) => void;
  onClose: () => void;
}

export { type CheckoutModalProps };

export default function CheckoutModal({
  open,
  planName,
  price,
  onSubmit,
  onClose,
}: CheckoutModalProps) {
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
      onClose={onClose}
      className="fixed inset-0 z-50 m-0 flex h-full w-full items-center justify-center bg-transparent p-5 backdrop:bg-hero-dark/60 backdrop:backdrop-blur-sm"
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
        style={{ animation: "hero-up 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
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

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6 text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-text-3">
              Checkout
            </p>
            {planName && (
              <p className="mt-2 text-[18px] font-extrabold text-foreground">
                {planName}
              </p>
            )}
            {price && (
              <p className="mt-1 text-[14px] font-medium text-text-2">
                {price}
              </p>
            )}
          </div>

          {/* Email form */}
          <EmailCaptureForm onSubmit={onSubmit} />
        </div>
      </div>
    </dialog>
  );
}
