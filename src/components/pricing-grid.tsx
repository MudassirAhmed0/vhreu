/* ══════════════════════════════════════════════════════════
   PricingGrid — responsive grid wrapper for PricingCard
   Arranges pricing tiers in a responsive 3-column grid.
   ══════════════════════════════════════════════════════════ */

import { ReactNode } from "react";

interface PricingGridProps {
  children: ReactNode;
}

export { type PricingGridProps };

export default function PricingGrid({ children }: PricingGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
