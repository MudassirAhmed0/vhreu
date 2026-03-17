import { ReactNode } from "react";
import SectionBackground from "./shared/backgrounds";
import { entranceAnimation } from "./shared/constants";

/* ══════════════════════════════════════════════════════════
   HowItWorks — step-by-step process component
   Uses SectionBackground for background layers.
   ══════════════════════════════════════════════════════════ */

interface Step {
  icon: string;
  description: string;
}

interface HowItWorksProps {
  heading?: string;
  closingText?: string;
  steps: Step[];
  dark?: boolean;
}

/* ── Step icons ── */

const ICONS: Record<string, ReactNode> = {
  search: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  mail: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  click: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
    </svg>
  ),
  document: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  check: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function HowItWorks({
  heading,
  closingText,
  steps,
  dark = false,
}: HowItWorksProps) {
  const bg = dark ? "dark" as const : "muted" as const;

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <SectionBackground bg={bg} />

      {/* HowItWorks dark variant has extra top edge + wider glow */}
      {dark && (
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      )}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* ── Heading ── */}
        {heading && (
          <div className="overflow-hidden">
            <h2
              className={`text-center text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.02em] ${
                dark ? "text-white" : "text-foreground"
              }`}
              style={entranceAnimation(0.9)}
            >
              {heading}
            </h2>
          </div>
        )}

        {/* ── Steps ── */}
        <div className="relative mt-16 lg:mt-20">
          {/* Horizontal connector — desktop only */}
          <div
            className={`absolute left-0 right-0 top-7 hidden h-px origin-left ${steps.length > 3 ? "lg:block" : "sm:block"}`}
            style={{
              background: dark
                ? "linear-gradient(90deg, transparent 5%, rgba(232,92,58,0.2) 20%, rgba(46,107,130,0.12) 50%, rgba(232,92,58,0.2) 80%, transparent 95%)"
                : "linear-gradient(90deg, transparent 5%, rgba(232,92,58,0.12) 20%, rgba(26,74,92,0.06) 50%, rgba(232,92,58,0.12) 80%, transparent 95%)",
              animation: "line-draw 1.4s cubic-bezier(0.16,1,0.3,1) 0.3s both",
            }}
          />

          <div className={`grid grid-cols-1 gap-12 sm:grid-cols-3 lg:gap-8 ${
            steps.length > 3 ? "lg:grid-cols-5" : "mx-auto max-w-3xl"
          }`}>
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center"
                style={entranceAnimation(0.8, 0.2 + i * 0.12)}
              >
                {/* Icon container */}
                <div
                  className={`group relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ${
                    dark
                      ? "border border-white/[0.08] bg-white/[0.05] text-white/70 backdrop-blur-sm hover:border-accent/30 hover:bg-white/[0.08] hover:text-accent hover:shadow-[0_0_24px_rgba(232,92,58,0.12)]"
                      : "border border-primary/10 bg-primary/[0.05] text-primary/70 hover:border-accent/25 hover:bg-accent/[0.06] hover:text-accent hover:shadow-[0_4px_20px_rgba(232,92,58,0.08)]"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.25,0.74,0.22,0.99)" }}
                >
                  {ICONS[step.icon] || ICONS.check}
                </div>

                {/* Step label */}
                <span
                  className={`mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] ${
                    dark ? "text-accent/35" : "text-accent/50"
                  }`}
                >
                  Step {i + 1}
                </span>

                {/* Description */}
                <p
                  className={`mt-2.5 max-w-[220px] text-[14px] leading-relaxed ${
                    dark ? "text-white/45" : "text-text-2"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Closing text ── */}
        {closingText && (
          <p
            className={`mx-auto mt-14 max-w-lg text-center text-[15px] leading-relaxed ${
              dark ? "text-white/35" : "text-text-3"
            }`}
            style={entranceAnimation(0.7, 0.9)}
          >
            {closingText}
          </p>
        )}
      </div>
    </section>
  );
}
