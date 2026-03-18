import { ReactNode } from "react";
import SectionWrapper from "./section-wrapper";
import { type BgVariant, HEADING_CLASSES, entranceAnimation } from "./shared/constants";
import { PrimaryCTA, SecondaryCTA } from "./shared/cta-buttons";

/* ══════════════════════════════════════════════════════════
   SplitContent — 2-column layout (text + media)
   Composes SectionWrapper for background layers.
   ══════════════════════════════════════════════════════════ */

const DESC_CLASSES: Record<BgVariant, string> = {
  white: "text-text-2",
  muted: "text-text-2",
  dark: "text-white/50",
};

interface SplitContentProps {
  heading: string;
  /** Body text below heading — string or array of paragraphs */
  description?: string | string[];
  /** Extra content below description (warnings, bullets, stats, etc.) */
  children?: ReactNode;
  /** Media side — image, graphic, or any ReactNode */
  media?: ReactNode;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  bg?: BgVariant;
  /** Swap columns — media on left, text on right */
  reverse?: boolean;
}

export default function SplitContent({
  heading,
  description,
  children,
  media,
  cta,
  secondaryCta,
  bg = "white",
  reverse = false,
}: SplitContentProps) {
  const isDark = bg === "dark";
  const paragraphs = description
    ? Array.isArray(description) ? description : [description]
    : [];

  return (
    <SectionWrapper bg={bg}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ── Text column ── */}
        <div
          className={reverse ? "order-2 lg:order-2" : "order-1"}
          style={entranceAnimation(0.9)}
        >
          <h2
            className={`text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.02em] leading-[1.15] ${HEADING_CLASSES[bg]}`}
          >
            {heading}
          </h2>

          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={`mt-4 text-[17px] leading-relaxed ${DESC_CLASSES[bg]}`}
            >
              {p}
            </p>
          ))}

          {/* Extra content (warnings, bullets, etc.) */}
          {children && (
            <div
              className="mt-8"
              style={entranceAnimation(0.8, 0.15)}
            >
              {children}
            </div>
          )}

          {/* CTAs */}
          {(cta || secondaryCta) && (
            <div
              className="mt-8 flex flex-wrap gap-3"
              style={entranceAnimation(0.7, 0.3)}
            >
              {secondaryCta && (
                <SecondaryCTA href={secondaryCta.href} label={secondaryCta.label} dark={isDark} />
              )}
              {cta && <PrimaryCTA href={cta.href} label={cta.label} dark={isDark} />}
            </div>
          )}
        </div>

        {/* ── Media column ── */}
        <div
          className={`flex justify-center ${reverse ? "order-1 lg:order-1" : "order-2"}`}
          style={entranceAnimation(0.9, 0.2)}
        >
          {media || <MediaPlaceholder dark={isDark} />}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Default placeholder when no media is provided ── */
function MediaPlaceholder({ dark }: { dark: boolean }) {
  return (
    <div
      className={`relative h-80 w-full max-w-md rounded-2xl p-8 ${
        dark
          ? "border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
          : "border border-border bg-gradient-to-br from-surface to-white"
      }`}
    >
      <div className="flex h-full flex-col items-center justify-center text-center">
        <svg
          className={`h-16 w-16 ${dark ? "text-white/10" : "text-primary/15"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={0.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z"
          />
        </svg>
        <p className={`mt-3 text-[13px] ${dark ? "text-white/20" : "text-text-3"}`}>
          Image or graphic
        </p>
      </div>
    </div>
  );
}
