/* ══════════════════════════════════════════════════════════
   Shared constants — NOISE, class maps, animation helpers
   ══════════════════════════════════════════════════════════ */

export const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

export const ENTRANCE_EASING = "cubic-bezier(0.16,1,0.3,1)";

export function entranceAnimation(duration = 0.9, delay = 0) {
  return {
    animation: `hero-up ${duration}s ${ENTRANCE_EASING} ${delay}s both`,
  };
}

export type BgVariant = "white" | "muted" | "dark";

export const BG_CLASSES: Record<BgVariant, string> = {
  white: "bg-white",
  muted: "bg-surface",
  dark: "bg-hero-dark",
};

export const HEADING_CLASSES: Record<BgVariant, string> = {
  white: "text-foreground",
  muted: "text-foreground",
  dark: "text-white",
};

export const SUBTITLE_CLASSES: Record<BgVariant, string> = {
  white: "text-text-2",
  muted: "text-text-2",
  dark: "text-white/50",
};

export const EDGE_CLASSES: Record<BgVariant, string> = {
  white: "via-primary/8",
  muted: "via-primary/8",
  dark: "via-accent/20",
};
