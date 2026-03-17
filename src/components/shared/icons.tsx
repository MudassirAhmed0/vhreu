/* ══════════════════════════════════════════════════════════
   Shared icons — thin wrappers around lucide-react
   ══════════════════════════════════════════════════════════ */

import { CircleCheck, X, Star } from "lucide-react";

export function CheckIcon({ className }: { className: string }) {
  return <CircleCheck className={className} strokeWidth={1.8} />;
}

export function CloseIcon({ size = 20, className }: { size?: number; className?: string }) {
  return <X size={size} className={className} strokeWidth={2} />;
}

export function StarIcon({
  filled,
  className,
}: {
  filled: boolean;
  className: string;
}) {
  return (
    <Star
      size={16}
      className={className}
      strokeWidth={1.2}
      fill={filled ? "currentColor" : "none"}
    />
  );
}
