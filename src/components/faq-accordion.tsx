"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-sm"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <span className="pr-4 text-base font-semibold text-primary">
              {faq.question}
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`grid transition-all duration-200 ${
              openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-slate-100 px-6 pb-5 pt-4">
                <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
