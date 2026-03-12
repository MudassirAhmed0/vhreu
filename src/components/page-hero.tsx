"use client";

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
  dark?: boolean;
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
  dark = true,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <style>{`
        @keyframes hero-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-scale {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes hero-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes orb-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(25px, -18px) scale(1.04); }
          66% { transform: translate(-18px, 12px) scale(0.96); }
        }
        @keyframes vin-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ring-pulse {
          0% { transform: scale(0.85); opacity: 0.06; }
          50% { opacity: 0.03; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        @keyframes line-draw {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* ══════════════════════════════
          BACKGROUNDS
          ══════════════════════════════ */}

      {dark ? (
        <DarkBackground variant={variant} backgroundImage={backgroundImage} />
      ) : (
        <LightBackground variant={variant} />
      )}

      {/* ══════════════════════════════
          CENTERED
          ══════════════════════════════ */}
      {variant === "centered" && (
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
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
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Left — text */}
            <div style={{ animation: "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
              <HeroTag dark={dark}>{tag}</HeroTag>
              <HeroTitle dark={dark} title={title} highlight={highlight} size="split" />
              <HeroSubtitle dark={dark}>{subtitle}</HeroSubtitle>
              <HeroBullets items={bullets} dark={dark} delay={0.18} />
            </div>

            {/* Right — form */}
            <div
              className="relative flex justify-center md:justify-end"
              style={{ animation: "hero-scale 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}
            >
              {/* Glow frame behind form */}
              {dark && children && (
                <>
                  <div className="absolute -inset-6 rounded-[24px] bg-accent/[0.04] blur-2xl" />
                  <div
                    className="absolute -inset-px rounded-[16px]"
                    style={{
                      background: "linear-gradient(145deg, rgba(26,74,92,0.25) 0%, rgba(232,92,58,0.12) 50%, transparent 100%)",
                      animation: "glow-pulse 5s ease-in-out infinite",
                    }}
                  />
                </>
              )}
              <div className="relative w-full max-w-xl">{children}</div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════
          STACKED
          ══════════════════════════════ */}
      {variant === "stacked" && (
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          {/* Heading — full width, not crammed */}
          <div
            className="max-w-3xl"
            style={{ animation: "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <HeroTag dark={dark}>{tag}</HeroTag>
            <HeroTitle dark={dark} title={title} highlight={highlight} size="split" />
            <HeroSubtitle dark={dark}>{subtitle}</HeroSubtitle>
            <HeroBullets items={bullets} dark={dark} delay={0.18} />
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

          {/* Children — full width, prominent */}
          {children && (
            <div
              style={{ animation: "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
            >
              <div className="relative">
                {dark && <div className="absolute -inset-6 rounded-3xl bg-accent/[0.02] blur-xl" />}
                <div className="relative max-w-2xl">{children}</div>
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
      <div className="absolute inset-0 bg-[#0B2230]" />

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
          {/* Central teal glow — behind text */}
          <div
            className="absolute left-1/2 top-[38%] h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[130px]"
            style={{
              background: "radial-gradient(ellipse, #1A4A5C 0%, transparent 70%)",
              animation: "orb-drift 16s ease-in-out infinite",
            }}
          />
          {/* Coral whisper bottom center */}
          <div
            className="absolute bottom-[-5%] left-1/2 h-[200px] w-[400px] -translate-x-1/2 rounded-full opacity-[0.12] blur-[90px]"
            style={{ background: "radial-gradient(circle, #E85C3A 0%, transparent 70%)" }}
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
              background: "radial-gradient(circle, #1A4A5C 0%, transparent 70%)",
              animation: "orb-drift 13s ease-in-out infinite",
            }}
          />
          {/* Coral orb — form side */}
          <div
            className="absolute -right-[3%] bottom-[5%] h-[380px] w-[420px] rounded-full opacity-[0.14] blur-[100px]"
            style={{
              background: "radial-gradient(circle, #E85C3A 0%, transparent 70%)",
              animation: "orb-drift 10s ease-in-out infinite reverse",
            }}
          />
          {/* Diagonal energy line */}
          <div
            className="absolute left-[48%] top-0 hidden h-full w-px origin-top lg:block"
            style={{
              background: "linear-gradient(180deg, transparent 8%, rgba(232,92,58,0.12) 45%, rgba(232,92,58,0.06) 65%, transparent 92%)",
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
          {/* Wide teal wash top */}
          <div
            className="absolute -left-[5%] -top-[15%] h-[350px] w-[110%] rounded-[50%] opacity-20 blur-[110px]"
            style={{
              background: "linear-gradient(90deg, transparent 5%, #1A4A5C 35%, #2E6B82 65%, transparent 95%)",
              animation: "orb-drift 18s ease-in-out infinite",
            }}
          />
          {/* Coral hint right */}
          <div
            className="absolute -right-[5%] bottom-[15%] h-[300px] w-[300px] rounded-full opacity-[0.08] blur-[80px]"
            style={{
              background: "radial-gradient(circle, #E85C3A 0%, transparent 70%)",
              animation: "orb-drift 11s ease-in-out infinite reverse",
            }}
          />
          {/* Left accent bar — technical edge */}
          <div
            className="absolute bottom-0 left-6 top-0 w-px sm:left-10 lg:left-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))]"
            style={{
              background: "linear-gradient(180deg, transparent 5%, rgba(232,92,58,0.1) 25%, rgba(232,92,58,0.06) 75%, transparent 95%)",
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
      <div className="absolute inset-0 bg-[#FAFAF8]" />
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(26,74,92,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft teal glow */}
      <div
        className={`absolute h-[400px] w-[500px] rounded-full opacity-[0.05] blur-[100px] ${
          variant === "centered"
            ? "left-1/2 top-[20%] -translate-x-1/2"
            : "-left-[8%] top-[10%]"
        }`}
        style={{
          background: "radial-gradient(ellipse, #1A4A5C 0%, transparent 70%)",
          animation: "orb-drift 15s ease-in-out infinite",
        }}
      />
      {/* Coral warmth */}
      <div
        className="absolute -bottom-[8%] -right-[8%] h-[300px] w-[350px] rounded-full opacity-[0.03] blur-[80px]"
        style={{ background: "radial-gradient(circle, #E85C3A 0%, transparent 70%)" }}
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
        dark ? "text-white/40" : "text-primary/50"
      }`}
    >
      <span
        className="inline-block h-px w-8"
        style={{
          background: dark
            ? "linear-gradient(90deg, transparent, rgba(232,92,58,0.7))"
            : "linear-gradient(90deg, transparent, rgba(232,92,58,0.5))",
        }}
      />
      {children}
      <span
        className="inline-block h-px w-8"
        style={{
          background: dark
            ? "linear-gradient(90deg, rgba(232,92,58,0.7), transparent)"
            : "linear-gradient(90deg, rgba(232,92,58,0.5), transparent)",
        }}
      />
    </div>
  );
}

function HeroTitle({
  title,
  highlight,
  dark,
  size,
}: {
  title: string;
  highlight?: string;
  dark: boolean;
  size?: "split";
}) {
  const fontSize = size === "split"
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
          <span
            className="font-extrabold"
            style={{
              background: "linear-gradient(135deg, #E85C3A 0%, #FF8A65 40%, #FFAB91 55%, #E85C3A 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "hero-gradient 5s ease infinite",
            }}
          >
            {highlight}
          </span>
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
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(232,92,58,0.5)]" />
          </span>
          {b}
        </span>
      ))}
    </div>
  );
}
