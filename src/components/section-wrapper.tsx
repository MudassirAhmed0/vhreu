/* ══════════════════════════════════════════════════════════
   SectionWrapper — universal section container
   Every content block on every page sits inside this.
   Handles: background, padding, tag, heading, subtitle, edge
   lines, entrance animation, and width constraints.
   ══════════════════════════════════════════════════════════ */

import { ReactNode } from "react";
import SectionBackground, { type Scene } from "./shared/backgrounds";
import {
  type BgVariant,
  HEADING_CLASSES,
  SUBTITLE_CLASSES,
  entranceAnimation,
} from "./shared/constants";

interface SectionWrapperProps {
  children: ReactNode;
  /** Background style */
  bg?: BgVariant;
  /** Decorative scene: "default" | "glow" | "rings" | "grid" | "waves" | "minimal" */
  scene?: Scene;
  /** Tagline above heading — decorative gold-line label */
  tag?: string;
  /** Section heading (h2) — light weight portion */
  heading?: string;
  /** Bold gradient portion of heading (renders on new line) */
  highlight?: string;
  /** Subtitle below heading */
  subtitle?: string;
  /** Anchor link target */
  id?: string;
  /** Narrow container (max-w-3xl) for focused content like FAQ */
  narrow?: boolean;
  /** Entrance animation delay for heading */
  delay?: number;
}

export { type BgVariant, type Scene, type SectionWrapperProps };

export default function SectionWrapper({
  children,
  bg = "white",
  scene,
  tag,
  heading,
  highlight,
  subtitle,
  id,
  narrow = false,
  delay = 0,
}: SectionWrapperProps) {
  const isDark = bg === "dark";

  return (
    <section id={id} className="relative overflow-hidden py-20 sm:py-28">
      <SectionBackground bg={bg} scene={scene} />

      {/* ── Content ── */}
      <div
        className={`relative mx-auto px-5 sm:px-8 ${
          narrow ? "max-w-3xl" : "max-w-7xl"
        }`}
      >
        <div data-reveal>
          {/* Heading block */}
          {(tag || heading) && (
            <div
              className="mx-auto max-w-3xl text-center"
              style={entranceAnimation(0.9, delay)}
            >
              {/* Tagline */}
              {tag && (
                <div
                  className={`mb-5 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] ${
                    isDark ? "text-white/60" : "text-primary/60"
                  }`}
                >
                  <span
                    className="inline-block h-px w-8"
                    style={{
                      background: isDark
                        ? "linear-gradient(90deg, transparent, rgba(255,204,0,0.6))"
                        : "linear-gradient(90deg, transparent, rgba(26,54,92,0.3))",
                    }}
                  />
                  {tag}
                  <span
                    className="inline-block h-px w-8"
                    style={{
                      background: isDark
                        ? "linear-gradient(90deg, rgba(255,204,0,0.6), transparent)"
                        : "linear-gradient(90deg, rgba(26,54,92,0.3), transparent)",
                    }}
                  />
                </div>
              )}

              {heading && (
                <h2
                  className={`text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] leading-[1.15] ${HEADING_CLASSES[bg]}`}
                >
                  {heading}{" "}
                  {highlight && (
                    <>
                      <span
                        className="font-extrabold"
                        style={{
                          background: isDark
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
              {subtitle && (
                <p
                  className={`mt-4 text-[17px] leading-relaxed ${SUBTITLE_CLASSES[bg]}`}
                >
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Children — with top margin when heading present */}
          <div className={tag || heading ? "mt-12" : undefined}>{children}</div>
        </div>
      </div>
    </section>
  );
}
