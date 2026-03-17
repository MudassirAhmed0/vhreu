import { ReactNode } from "react";
import SectionWrapper from "./section-wrapper";
import { type BgVariant } from "./shared/constants";
import { PrimaryCTA, SecondaryCTA } from "./shared/cta-buttons";
import { entranceAnimation } from "./shared/constants";

/* ══════════════════════════════════════════════════════════
   CardSection — section wrapper with heading, grid, CTA
   Composes SectionWrapper for background, layout, grid.
   ══════════════════════════════════════════════════════════ */

type GridCols = 2 | 3 | 4;

interface CardSectionProps {
  heading: string;
  subtitle?: string;
  children: ReactNode;
  bg?: BgVariant;
  /** Max columns on desktop (default: 3) */
  columns?: GridCols;
  cta?: { label: string; href: string; variant?: "primary" | "accent" };
  secondaryCta?: { label: string; href: string };
}

const GRID_COLS: Record<GridCols, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export default function CardSection({
  heading,
  subtitle,
  children,
  bg = "white",
  columns = 3,
  cta,
  secondaryCta,
}: CardSectionProps) {
  const isDark = bg === "dark";

  return (
    <SectionWrapper bg={bg} heading={heading} subtitle={subtitle}>
      {/* Card grid */}
      <div className={`grid grid-cols-1 gap-6 ${GRID_COLS[columns]}`}>
        {children}
      </div>

      {/* CTA */}
      {(cta || secondaryCta) && (
        <div
          className="mt-12 flex flex-wrap justify-center gap-3"
          style={entranceAnimation(0.7, 0.5)}
        >
          {secondaryCta && (
            <SecondaryCTA href={secondaryCta.href} label={secondaryCta.label} dark={isDark} />
          )}
          {cta && <PrimaryCTA href={cta.href} label={cta.label} />}
        </div>
      )}
    </SectionWrapper>
  );
}
