import SectionBackground from "./shared/backgrounds";
import { entranceAnimation } from "./shared/constants";
import DynamicIcon, { type IconName } from "./shared/dynamic-icon";

/* ══════════════════════════════════════════════════════════
   HowItWorks — step-by-step process component
   Uses SectionBackground for background layers.
   Pass any lucide icon name as step.icon (e.g. "search", "mail").
   ══════════════════════════════════════════════════════════ */

interface Step {
  /** Any lucide icon name (e.g. "search", "mail", "file-text") */
  icon: string;
  description: string;
}

interface HowItWorksProps {
  tag?: string;
  heading?: string;
  highlight?: string;
  closingText?: string;
  steps: Step[];
  dark?: boolean;
}

export default function HowItWorks({
  tag,
  heading,
  highlight,
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
        <div data-reveal>
          {/* ── Tag + Heading ── */}
          {(tag || heading) && (
            <div className="text-center" style={entranceAnimation(0.9)}>
              {tag && (
                <div
                  className={`mb-5 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] ${
                    dark ? "text-white/60" : "text-primary/60"
                  }`}
                >
                  <span
                    className="inline-block h-px w-8"
                    style={{
                      background: dark
                        ? "linear-gradient(90deg, transparent, rgba(255,204,0,0.6))"
                        : "linear-gradient(90deg, transparent, rgba(26,54,92,0.3))",
                    }}
                  />
                  {tag}
                  <span
                    className="inline-block h-px w-8"
                    style={{
                      background: dark
                        ? "linear-gradient(90deg, rgba(255,204,0,0.6), transparent)"
                        : "linear-gradient(90deg, rgba(26,54,92,0.3), transparent)",
                    }}
                  />
                </div>
              )}
              {heading && (
                <h2
                  className={`text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] leading-[1.15] ${
                    dark ? "text-white" : "text-foreground"
                  }`}
                >
                  <span className={highlight ? "font-light" : "font-extrabold"}>{heading}</span>
                  {highlight && (
                    <>
                      <br />
                      <span
                        className="font-extrabold"
                        style={{
                          background: dark
                            ? "linear-gradient(135deg, #FFCC00 0%, #FFE566 40%, #FFF0A0 55%, #FFCC00 100%)"
                            : "linear-gradient(135deg, #1A365C 0%, #2C5A8C 35%, #4A7FBF 55%, #2C5A8C 100%)",
                          backgroundSize: "200% 200%",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          color: "transparent",
                          animation: "hero-gradient 5s ease infinite",
                        }}
                      >
                        {highlight}
                      </span>
                    </>
                  )}
                </h2>
              )}
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
                    <DynamicIcon name={step.icon as IconName} className="h-6 w-6" strokeWidth={1.5} />
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
      </div>
    </section>
  );
}
