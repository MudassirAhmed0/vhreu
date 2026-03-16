/* ══════════════════════════════════════════════════════════
   FaqAccordion — collapsible Q&A list
   Animated +/× toggle, smooth grid-rows expand/collapse.
   Accepts any FAQ data via items prop — reusable across
   homepage, country pages, brand pages, pricing, etc.
   ══════════════════════════════════════════════════════════ */

"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  /** Start with first item open (default: true) */
  defaultOpen?: boolean;
  dark?: boolean;
}

export { type FaqItem, type FaqAccordionProps };

export default function FaqAccordion({
  items,
  defaultOpen = true,
  dark = false,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpen ? 0 : null,
  );

  return (
    <div className="space-y-3">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className={`overflow-hidden rounded-xl border ${
              dark
                ? `border-white/[0.06] ${isOpen ? "bg-white/[0.03]" : "bg-white/[0.01]"}`
                : `border-border ${isOpen ? "bg-white" : "bg-white"}`
            }`}
            style={{
              animation: `hero-up 0.5s cubic-bezier(0.16,1,0.3,1) ${0.05 + i * 0.06}s both`,
            }}
          >
            {/* Question button */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left sm:px-6 sm:py-5"
              aria-expanded={isOpen}
            >
              <span
                className={`pr-4 text-[15px] font-semibold leading-snug sm:text-base ${
                  dark
                    ? isOpen
                      ? "text-white/90"
                      : "text-white/70"
                    : "text-primary"
                }`}
              >
                {faq.question}
              </span>

              {/* +/× toggle icon */}
              <span
                className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                  dark
                    ? isOpen
                      ? "bg-accent/20"
                      : "bg-white/[0.06]"
                    : isOpen
                      ? "bg-primary/10"
                      : "bg-muted"
                }`}
              >
                {/* Horizontal bar (always visible) */}
                <span
                  className={`absolute h-[1.5px] w-2.5 rounded-full transition-colors duration-200 ${
                    dark
                      ? isOpen
                        ? "bg-accent"
                        : "bg-white/40"
                      : isOpen
                        ? "bg-primary"
                        : "bg-text-3"
                  }`}
                />
                {/* Vertical bar (rotates to 0 when open → forms ×) */}
                <span
                  className={`absolute h-[1.5px] w-2.5 rounded-full transition-all duration-300 ${
                    dark
                      ? isOpen
                        ? "bg-accent"
                        : "bg-white/40"
                      : isOpen
                        ? "bg-primary"
                        : "bg-text-3"
                  }`}
                  style={{
                    transform: isOpen ? "rotate(0deg)" : "rotate(90deg)",
                    transitionTimingFunction: "cubic-bezier(0.25,0.74,0.22,0.99)",
                  }}
                />
              </span>
            </button>

            {/* Answer (animated expand/collapse via grid-rows) */}
            <div
              className="grid transition-[grid-template-rows] duration-300"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <div className="overflow-hidden">
                <div
                  className={`px-5 pb-5 pt-0 sm:px-6 sm:pb-6 ${
                    dark ? "border-white/[0.04]" : "border-border/50"
                  }`}
                >
                  <p
                    className={`text-[14px] leading-relaxed sm:text-[15px] ${
                      dark ? "text-white/50" : "text-text-2"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
