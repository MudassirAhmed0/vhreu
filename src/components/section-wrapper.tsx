/* ══════════════════════════════════════════════════════════
   SectionWrapper — universal section container
   Every content block on every page sits inside this.
   Handles: background, padding, heading, subtitle, edge
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
  /** Section heading (h2) */
  heading?: string;
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
  heading,
  subtitle,
  id,
  narrow = false,
  delay = 0,
}: SectionWrapperProps) {
  return (
    <section id={id} className="relative overflow-hidden py-20 sm:py-28">
      <SectionBackground bg={bg} scene={scene} />

      {/* ── Content ── */}
      <div
        className={`relative mx-auto px-5 sm:px-8 ${
          narrow ? "max-w-3xl" : "max-w-7xl"
        }`}
      >
        {/* Heading block */}
        {heading && (
          <div
            className="mx-auto max-w-3xl text-center"
            style={entranceAnimation(0.9, delay)}
          >
            <h2
              className={`text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.02em] ${HEADING_CLASSES[bg]}`}
            >
              {heading}
            </h2>
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
        <div className={heading ? "mt-12" : undefined}>{children}</div>
      </div>
    </section>
  );
}
