/* ══════════════════════════════════════════════════════════
   LegalContent — prose renderer for legal text
   Single-column max-width container with styled headings,
   paragraphs, lists, and bold defined terms.
   Accepts children (MDX/HTML from Payload CMS).
   Used on /privacy-policy and /terms-of-service.
   ══════════════════════════════════════════════════════════ */

import { ReactNode } from "react";

interface LegalContentProps {
  /** Last updated date string */
  lastUpdated?: string;
  children: ReactNode;
}

export { type LegalContentProps };

export default function LegalContent({
  lastUpdated,
  children,
}: LegalContentProps) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
      {lastUpdated && (
        <p className="mb-8 text-[13px] text-text-3">
          Last updated: {lastUpdated}
        </p>
      )}

      <div
        className={[
          /* Headings */
          "[&_h1]:mb-6 [&_h1]:mt-12 [&_h1]:text-[24px] [&_h1]:font-extrabold [&_h1]:tracking-tight [&_h1]:text-foreground",
          "[&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:text-foreground",
          "[&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-[16px] [&_h3]:font-bold [&_h3]:text-foreground",
          /* Paragraphs */
          "[&_p]:mb-4 [&_p]:text-[15px] [&_p]:leading-[1.8] [&_p]:text-text-2",
          /* Lists */
          "[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-[15px] [&_ul]:leading-[1.8] [&_ul]:text-text-2",
          "[&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-[15px] [&_ol]:leading-[1.8] [&_ol]:text-text-2",
          "[&_li]:mb-1.5",
          /* Links */
          "[&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:decoration-primary/30 [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-primary-light hover:[&_a]:decoration-primary/50",
          /* Bold / defined terms */
          "[&_strong]:font-bold [&_strong]:text-foreground",
          /* Tables */
          "[&_table]:my-6 [&_table]:w-full [&_table]:text-[14px]",
          "[&_th]:border-b [&_th]:border-border [&_th]:pb-2 [&_th]:text-left [&_th]:font-bold [&_th]:text-foreground",
          "[&_td]:border-b [&_td]:border-border [&_td]:py-2.5 [&_td]:text-text-2",
          /* Horizontal rule */
          "[&_hr]:my-10 [&_hr]:border-border",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}
