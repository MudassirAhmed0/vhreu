/* ══════════════════════════════════════════════════════════
   BlogGrid — responsive grid wrapper for BlogCard children
   Used on: homepage blog section, blog listing page.
   Optional "More Posts" CTA link at bottom.
   Follows design system: hero-up animation, gap-6.
   ══════════════════════════════════════════════════════════ */

import { ReactNode } from "react";
import Link from "next/link";

interface BlogGridProps {
  children: ReactNode;
  /** "More Posts" link href — omit to hide */
  moreHref?: string;
  /** "More Posts" link text (default: "More Posts") */
  moreLabel?: string;
  dark?: boolean;
}

export { type BlogGridProps };

export default function BlogGrid({
  children,
  moreHref,
  moreLabel = "More Posts",
  dark = false,
}: BlogGridProps) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>

      {moreHref && (
        <div
          className="mt-10 text-center"
          style={{
            animation:
              "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both",
          }}
        >
          <Link
            href={moreHref}
            className={`inline-flex rounded-xl px-8 py-3.5 text-[14px] font-bold transition-colors duration-200 ${
              dark
                ? "border border-white/[0.06] bg-white/[0.03] text-white/70 backdrop-blur-sm hover:bg-white/[0.06] hover:text-white"
                : "bg-primary text-white hover:bg-primary-light"
            }`}
          >
            {moreLabel}
          </Link>
        </div>
      )}
    </div>
  );
}
