import { ReactNode } from "react";

type Variant = "centered" | "split" | "stacked";

interface PageHeroProps {
  variant?: Variant;
  tag?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  bullets?: string[];
  backgroundImage?: string;
  /** Hero image shown on the right side of the split variant (580×660 @2x recommended) */
  heroImage?: string;
  heroImageAlt?: string;
  dark?: boolean;
  /** Disable glow frame around children/image in split variant. Default true.
   *  Turn off for large children like forms where the glow overwhelms. */
  glow?: boolean;
  /** Fill full viewport height. Default true. Set false for shorter heroes. */
  fullHeight?: boolean;
  /** Right-side content for split variant (e.g. ReportPreview component).
   *  When provided with children, children go below text on the left. */
  rightContent?: ReactNode;
  children?: ReactNode;
}

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

export default function PageHero({
  variant = "centered",
  tag,
  title,
  highlight,
  subtitle,
  bullets,
  backgroundImage,
  heroImage,
  heroImageAlt = "Vehicle history report preview",
  dark = true,
  glow = true,
  fullHeight = true,
  rightContent,
  children,
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${fullHeight ? "min-h-dvh" : ""}`}>
      {dark ? (
        <DarkBackground variant={variant} backgroundImage={backgroundImage} />
      ) : (
        <LightBackground variant={variant} />
      )}

      {/* ══════════════════════════════
          CENTERED
          ══════════════════════════════ */}
      {variant === "centered" && (
        <div className={`relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28 ${fullHeight ? "flex min-h-dvh flex-col justify-center" : ""}`}>
          <div
            className="mx-auto max-w-3xl text-center"
            style={{ animation: "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <HeroTag dark={dark}>{tag}</HeroTag>
            <HeroTitle dark={dark} title={title} highlight={highlight} />
            <HeroSubtitle dark={dark} centered>{subtitle}</HeroSubtitle>

            {/* Decorative divider */}
            {(subtitle || highlight) && (
              <div
                className="mx-auto mt-7 flex items-center justify-center gap-3"
                style={{ animation: "hero-up 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
              >
                <span className={`h-px w-14 ${dark ? "bg-gradient-to-r from-transparent to-accent/25" : "bg-gradient-to-r from-transparent to-primary/15"}`} />
                <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-accent/30" : "bg-primary/20"}`} />
                <span className={`h-px w-14 ${dark ? "bg-gradient-to-l from-transparent to-accent/25" : "bg-gradient-to-l from-transparent to-primary/15"}`} />
              </div>
            )}

            <HeroBullets items={bullets} dark={dark} centered delay={0.22} />
          </div>
        </div>
      )}

      {/* ══════════════════════════════
          SPLIT
          ══════════════════════════════ */}
      {variant === "split" && (
        <div className={`relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20 ${fullHeight ? "flex min-h-dvh flex-col justify-center" : ""}`}>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Left — text + optional children below when image is on right */}
            <div style={{ animation: "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
              <HeroTag dark={dark}>{tag}</HeroTag>
              <HeroTitle dark={dark} title={title} highlight={highlight} compact />
              <HeroSubtitle dark={dark}>{subtitle}</HeroSubtitle>
              <HeroBullets items={bullets} dark={dark} delay={0.18} />
              {/* When right content exists, children go below text on the left */}
              {(heroImage || rightContent) && children && (
                <div
                  className="mt-8"
                  style={{ animation: "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.25s both" }}
                >
                  {children}
                </div>
              )}
            </div>

            {/* Right — image or form (form only when no heroImage) */}
            <div
              className="relative flex justify-center md:justify-end"
              style={{ animation: "hero-scale 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}
            >
              {/* Glow frame — disable for large children like forms */}
              {glow && dark && (children || heroImage) && (
                <>
                  <div className="absolute -inset-6 rounded-[24px] bg-accent/[0.04] blur-2xl" />
                  <div
                    className="absolute -inset-px rounded-[16px]"
                    style={{
                      background: "linear-gradient(145deg, rgba(26,54,92,0.25) 0%, rgba(255,204,0,0.08) 50%, transparent 100%)",
                      animation: "glow-pulse 5s ease-in-out infinite",
                    }}
                  />
                </>
              )}
              {rightContent ? (
                <div className="relative w-full max-w-xl">{rightContent}</div>
              ) : heroImage ? (
                <div className="relative w-full max-w-[580px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={heroImage}
                    alt={heroImageAlt}
                    width={580}
                    height={660}
                    className="relative h-auto w-full drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                  />
                </div>
              ) : (
                <div className="relative w-full max-w-xl">{children}</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════
          STACKED
          ══════════════════════════════ */}
      {variant === "stacked" && (
        <div className={`relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24 ${fullHeight ? "flex min-h-dvh flex-col justify-center" : ""}`}>
          {/* Heading — centered vertical flow */}
          <div
            className="mx-auto max-w-3xl text-center"
            style={{ animation: "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <HeroTag dark={dark}>{tag}</HeroTag>
            <HeroTitle dark={dark} title={title} highlight={highlight} compact />
            <HeroSubtitle dark={dark} centered>{subtitle}</HeroSubtitle>
            <HeroBullets items={bullets} dark={dark} centered delay={0.18} />
          </div>

          {/* Divider — VIN motif */}
          {children && dark && (
            <div
              className="my-10 flex items-center gap-4"
              style={{ animation: "hero-up 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
            >
              <div
                className="h-px flex-1 origin-left bg-gradient-to-r from-accent/20 via-white/[0.04] to-transparent"
                style={{ animation: "line-draw 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s both" }}
              />
              <div className="flex gap-1">
                {["W","V","W","Z","Z","Z"].map((ch, i) => (
                  <span
                    key={i}
                    className="flex h-6 w-5 items-center justify-center rounded bg-white/[0.05] font-mono text-[10px] font-bold text-accent/50"
                    style={{ animation: `hero-up 0.4s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.04}s both` }}
                  >
                    {ch}
                  </span>
                ))}
              </div>
              <div
                className="h-px flex-1 origin-right bg-gradient-to-l from-accent/20 via-white/[0.04] to-transparent"
                style={{ animation: "line-draw 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s both" }}
              />
            </div>
          )}
          {children && !dark && <div className="my-10" />}

          {/* Children — centered */}
          {children && (
            <div
              className="mx-auto max-w-xl"
              style={{ animation: "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
            >
              <div className="relative">
                {glow && dark && <div className="absolute -inset-6 rounded-3xl bg-accent/[0.02] blur-xl" />}
                <div className="relative">{children}</div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   DARK BACKGROUND — variant-aware
   ══════════════════════════════════════════════════════════ */
function DarkBackground({ variant, backgroundImage }: { variant: Variant; backgroundImage?: string }) {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 bg-hero-dark" />

      {/* Noise grain */}
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: NOISE }} />

      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.06,
        }}
      />

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* ─── Variant-specific orbs & accents ─── */}

      {variant === "centered" && (
        <>
          {/* Central navy glow — behind text */}
          <div
            className="absolute left-1/2 top-[38%] h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[130px]"
            style={{
              background: "radial-gradient(ellipse, var(--primary) 0%, transparent 70%)",
              animation: "orb-drift 16s ease-in-out infinite",
            }}
          />
          {/* Coral whisper bottom center */}
          <div
            className="absolute bottom-[-5%] left-1/2 h-[200px] w-[400px] -translate-x-1/2 rounded-full opacity-[0.12] blur-[90px]"
            style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
          />
          {/* Pulsing rings */}
          {[260, 400, 560].map((size, i) => (
            <div
              key={size}
              className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]"
              style={{
                width: size,
                height: size,
                animation: `ring-pulse 7s ease-in-out ${i * 2}s infinite`,
              }}
            />
          ))}
        </>
      )}

      {variant === "split" && (
        <>
          {/* Teal orb — text side */}
          <div
            className="absolute -left-[5%] top-[15%] h-[500px] w-[550px] rounded-full opacity-30 blur-[120px]"
            style={{
              background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
              animation: "orb-drift 13s ease-in-out infinite",
            }}
          />
          {/* Coral orb — form side */}
          <div
            className="absolute -right-[3%] bottom-[5%] h-[380px] w-[420px] rounded-full opacity-[0.14] blur-[100px]"
            style={{
              background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
              animation: "orb-drift 10s ease-in-out infinite reverse",
            }}
          />
          {/* Diagonal energy line */}
          <div
            className="absolute left-[48%] top-0 hidden h-full w-px origin-top lg:block"
            style={{
              background: "linear-gradient(180deg, transparent 8%, rgba(255,204,0,0.10) 45%, rgba(255,204,0,0.05) 65%, transparent 92%)",
              transform: "rotate(6deg)",
            }}
          />
          {/* VIN strip */}
          <div className="absolute bottom-12 left-0 right-0 overflow-hidden opacity-[0.025]">
            <div
              className="flex whitespace-nowrap font-mono text-[10px] font-bold tracking-[0.3em] text-white"
              style={{ animation: "vin-scroll 50s linear infinite" }}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="mr-12">
                  WVWZZZ3CZWE123456 &middot; 5YJSA1E26MF123456 &middot;
                  NMTER16RX0R073590 &middot; VF15RE20A55268448 &middot;
                </span>
              ))}
            </div>
          </div>
          {/* Country/brand bg image */}
          {backgroundImage && (
            <div
              className="absolute right-[6%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 opacity-[0.025]"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          )}
        </>
      )}

      {variant === "stacked" && (
        <>
          {/* Wide navy wash top */}
          <div
            className="absolute -left-[5%] -top-[15%] h-[350px] w-[110%] rounded-[50%] opacity-20 blur-[110px]"
            style={{
              background: "linear-gradient(90deg, transparent 5%, var(--primary) 35%, var(--primary-light) 65%, transparent 95%)",
              animation: "orb-drift 18s ease-in-out infinite",
            }}
          />
          {/* Coral hint right */}
          <div
            className="absolute -right-[5%] bottom-[15%] h-[300px] w-[300px] rounded-full opacity-[0.08] blur-[80px]"
            style={{
              background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
              animation: "orb-drift 11s ease-in-out infinite reverse",
            }}
          />
          {/* Left accent bar — technical edge */}
          <div
            className="absolute bottom-0 left-6 top-0 w-px sm:left-10 lg:left-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))]"
            style={{
              background: "linear-gradient(180deg, transparent 5%, rgba(255,204,0,0.08) 25%, rgba(255,204,0,0.04) 75%, transparent 95%)",
            }}
          />
          {backgroundImage && (
            <div
              className="absolute right-[6%] top-[12%] h-[320px] w-[320px] opacity-[0.025]"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          )}
        </>
      )}
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   LIGHT BACKGROUND
   ══════════════════════════════════════════════════════════ */
function LightBackground({ variant }: { variant: Variant }) {
  return (
    <>
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(26,54,92,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft navy glow */}
      <div
        className={`absolute h-[400px] w-[500px] rounded-full opacity-[0.05] blur-[100px] ${
          variant === "centered"
            ? "left-1/2 top-[20%] -translate-x-1/2"
            : "-left-[8%] top-[10%]"
        }`}
        style={{
          background: "radial-gradient(ellipse, var(--primary) 0%, transparent 70%)",
          animation: "orb-drift 15s ease-in-out infinite",
        }}
      />
      {/* Coral warmth */}
      <div
        className="absolute -bottom-[8%] -right-[8%] h-[300px] w-[350px] rounded-full opacity-[0.03] blur-[80px]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   ATOMIC PIECES
   ══════════════════════════════════════════════════════════ */

function HeroTag({ children, dark }: { children?: ReactNode; dark: boolean }) {
  if (!children) return null;
  return (
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
            : "linear-gradient(90deg, transparent, rgba(255,204,0,0.5))",
        }}
      />
      {children}
      <span
        className="inline-block h-px w-8"
        style={{
          background: dark
            ? "linear-gradient(90deg, rgba(255,204,0,0.6), transparent)"
            : "linear-gradient(90deg, rgba(255,204,0,0.5), transparent)",
        }}
      />
    </div>
  );
}

function HeroTitle({
  title,
  highlight,
  dark,
  compact,
}: {
  title: string;
  highlight?: string;
  dark: boolean;
  compact?: boolean;
}) {
  const fontSize = compact
    ? "text-[clamp(2rem,4.5vw,3.8rem)]"
    : "text-[clamp(2.4rem,5.5vw,4.5rem)]";

  return (
    <h1
      className={`${fontSize} leading-[1.06] tracking-[-0.03em] ${
        dark ? "text-white" : "text-foreground"
      }`}
    >
      <span className="font-light">{title}</span>
      {highlight && (
        <>
          <br />
          {dark ? (
            /* Dark bg: gold gradient text — high contrast on navy */
            <span
              className="font-extrabold"
              style={{
                background: "linear-gradient(135deg, #FFCC00 0%, #FFE566 40%, #FFF0A0 55%, #FFCC00 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "hero-gradient 5s ease infinite",
              }}
            >
              {highlight}
            </span>
          ) : (
            /* Light bg: blue gradient text — gold fails contrast on white */
            <span
              className="font-extrabold"
              style={{
                background: "linear-gradient(135deg, #1A365C 0%, #2C5A8C 35%, #4A7FBF 55%, #2C5A8C 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "hero-gradient 5s ease infinite",
              }}
            >
              {highlight}
            </span>
          )}
        </>
      )}
    </h1>
  );
}

function HeroSubtitle({ children, dark, centered }: { children?: ReactNode; dark: boolean; centered?: boolean }) {
  if (!children) return null;
  return (
    <p
      className={`mt-5 text-[17px] leading-relaxed ${
        dark ? "text-white/50" : "text-text-2"
      } ${centered ? "mx-auto max-w-xl" : "max-w-lg"}`}
      style={{ animation: "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
    >
      {children}
    </p>
  );
}

function HeroBullets({
  items,
  dark,
  centered,
  delay = 0,
}: {
  items?: string[];
  dark: boolean;
  centered?: boolean;
  delay?: number;
}) {
  if (!items || items.length === 0) return null;
  return (
    <div
      className={`mt-7 flex flex-wrap gap-2.5 ${centered ? "justify-center" : ""}`}
      style={{ animation: `hero-up 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s both` }}
    >
      {items.map((b, i) => (
        <span
          key={b}
          className={`inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors duration-300 ${
            dark
              ? "border border-white/[0.06] bg-white/[0.04] text-white/65 backdrop-blur-sm hover:border-accent/20 hover:text-white/80"
              : "border border-primary/10 bg-primary/[0.03] text-primary/65 hover:border-accent/20 hover:text-primary/80"
          }`}
          style={{ animation: `hero-up 0.5s cubic-bezier(0.16,1,0.3,1) ${delay + 0.05 + i * 0.06}s both` }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(255,204,0,0.5)]" />
          </span>
          {b}
        </span>
      ))}
    </div>
  );
}
