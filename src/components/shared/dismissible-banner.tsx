/* ══════════════════════════════════════════════════════════
   DismissibleBanner — shared dismiss state + close button
   Used by NotificationBanner and DiscountBanner.
   ══════════════════════════════════════════════════════════ */

"use client";

import { ReactNode, useState } from "react";

interface DismissibleBannerProps {
  children: (handleDismiss: () => void) => ReactNode;
  onDismiss?: () => void;
}

export { type DismissibleBannerProps };

export default function DismissibleBanner({
  children,
  onDismiss,
}: DismissibleBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return <>{children(handleDismiss)}</>;
}
