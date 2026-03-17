/* ══════════════════════════════════════════════════════════
   Modal — shared dialog with backdrop, close button,
   entrance animation. Used by ExitIntentPopup and
   CheckoutModal.
   ══════════════════════════════════════════════════════════ */

"use client";

import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
}

export { type ModalProps };

export default function Modal({
  open,
  onClose,
  children,
  maxWidth = "max-w-md",
}: ModalProps) {
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
        className={`relative w-full ${maxWidth} overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]`}
        style={{ animation: "hero-up 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        {/* Close button */}
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

        {children}
      </div>
    </dialog>
  );
}
