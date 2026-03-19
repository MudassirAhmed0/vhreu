/* ══════════════════════════════════════════════════════════
   FaqAccordion — collapsible Q&A list
   Pure HTML <details>/<summary> — zero JavaScript.
   CSS handles the +/× toggle rotation and smooth expand.
   ══════════════════════════════════════════════════════════ */

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
  return (
    <div className="space-y-3">
      {items.map((faq, i) => (
        <details
          key={i}
          className={`group overflow-hidden rounded-xl border ${
            dark
              ? "border-white/[0.06] bg-white/[0.01] open:bg-white/[0.03]"
              : "border-border bg-white"
          }`}
          open={defaultOpen && i === 0 ? true : undefined}
          name="faq"
          style={{
            animation: `hero-up 0.5s cubic-bezier(0.16,1,0.3,1) ${0.05 + i * 0.06}s both`,
          }}
        >
          <summary
            className="flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden"
          >
            <span
              className={`pr-4 text-[15px] font-semibold leading-snug sm:text-base ${
                dark ? "text-white/70 group-open:text-white/90" : "text-primary"
              }`}
            >
              {faq.question}
            </span>

            {/* +/× toggle icon */}
            <span
              className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                dark
                  ? "bg-white/[0.06] group-open:bg-accent/20"
                  : "bg-muted group-open:bg-primary/10"
              }`}
            >
              <span
                className={`absolute h-[1.5px] w-2.5 rounded-full transition-colors duration-200 ${
                  dark
                    ? "bg-white/40 group-open:bg-accent"
                    : "bg-text-3 group-open:bg-primary"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-2.5 rounded-full transition-all duration-300 ${
                  dark
                    ? "bg-white/40 group-open:bg-accent"
                    : "bg-text-3 group-open:bg-primary"
                }`}
                style={{
                  transform: "rotate(90deg)",
                  transitionTimingFunction: "cubic-bezier(0.25,0.74,0.22,0.99)",
                }}
              />
            </span>
          </summary>

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
        </details>
      ))}
    </div>
  );
}
