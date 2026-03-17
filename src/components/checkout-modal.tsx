/* ══════════════════════════════════════════════════════════
   CheckoutModal — email capture modal for pricing page
   Uses shared Modal for dialog/backdrop/close pattern.
   ══════════════════════════════════════════════════════════ */

"use client";

import Modal from "./shared/modal";
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
  return (
    <Modal open={open} onClose={onClose}>
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
    </Modal>
  );
}
