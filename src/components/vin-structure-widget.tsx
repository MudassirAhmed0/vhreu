/* ══════════════════════════════════════════════════════════
   VinStructureWidget — 17-character VIN breakdown
   Color-coded by section: WMI (primary, 1–3), VDS (amber, 4–9),
   VIS (green, 10–17). Compact, never overflows.
   Hover a segment to see its description.
   Used on homepage "What is a VIN" + decoder pages.
   ══════════════════════════════════════════════════════════ */

"use client";

import { useState, useEffect } from "react";

interface VinStructureWidgetProps {
  /** Example VIN to display (default: WVWZZZ3CZWE123456) */
  vin?: string;
  dark?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
}

export { type VinStructureWidgetProps };

const VIN_DEFAULT = "WVWZZZ3CZWE123456";

const SEGMENTS = [
  {
    id: "wmi",
    label: "WMI (1–3)",
    name: "World Manufacturer Identifier",
    range: [0, 3] as const,
    description: "Identifies the country of origin and the vehicle manufacturer.",
    charClass: "bg-primary/10 text-primary",
    charClassDark: "bg-primary/20 text-primary-light",
    labelClass: "text-primary",
    labelClassDark: "text-primary-light",
  },
  {
    id: "vds",
    label: "VDS (4–9)",
    name: "Vehicle Descriptor Section",
    range: [3, 9] as const,
    description: "Describes vehicle attributes: model, body type, engine, and includes a check digit.",
    charClass: "bg-amber/10 text-amber",
    charClassDark: "bg-amber/20 text-amber",
    labelClass: "text-amber",
    labelClassDark: "text-amber",
  },
  {
    id: "vis",
    label: "VIS (10–17)",
    name: "Vehicle Identifier Section",
    range: [9, 17] as const,
    description: "Unique to each vehicle: model year, assembly plant, and sequential serial number.",
    charClass: "bg-success/10 text-success",
    charClassDark: "bg-success/20 text-success",
    labelClass: "text-success",
    labelClassDark: "text-success",
  },
] as const;

function getSegment(index: number) {
  return SEGMENTS.find((s) => index >= s.range[0] && index < s.range[1])!;
}

export default function VinStructureWidget({
  vin = VIN_DEFAULT,
  dark = false,
  delay = 0,
}: VinStructureWidgetProps) {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const chars = vin.slice(0, 17).split("");

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 ${
        dark
          ? "border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
          : "border-border bg-white"
      }`}
      style={{
        animation: delay
          ? `hero-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
          : undefined,
      }}
      onMouseLeave={() => !isTouch && setActiveSegment(null)}
    >
      {/* Title */}
      <div
        className={`mb-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] ${
          dark ? "text-white/30" : "text-text-3"
        }`}
      >
        VIN Structure
      </div>

      {/* Characters — single row, compact */}
      <div className="flex justify-center gap-0.5">
        {chars.map((char, i) => {
          const seg = getSegment(i);
          const isActive = activeSegment === seg.id || activeSegment === null;

          return (
            <span
              key={i}
              className={`flex h-9 w-7 items-center justify-center rounded font-mono text-sm font-bold transition-opacity duration-200 ${
                dark ? seg.charClassDark : seg.charClass
              } ${isActive ? "opacity-100" : "opacity-25"}`}
              onClick={() => isTouch && setActiveSegment(activeSegment === seg.id ? null : seg.id)}
              onMouseEnter={() => !isTouch && setActiveSegment(seg.id)}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Segment labels */}
      <div className="mt-4 flex justify-between px-1">
        {SEGMENTS.map((seg) => {
          const isActive = activeSegment === seg.id || activeSegment === null;

          return (
            <span
              key={seg.id}
              className={`text-[10px] font-semibold transition-opacity duration-200 ${
                dark ? seg.labelClassDark : seg.labelClass
              } ${isActive ? "opacity-100" : "opacity-30"}`}
              onClick={() => isTouch && setActiveSegment(activeSegment === seg.id ? null : seg.id)}
              onMouseEnter={() => !isTouch && setActiveSegment(seg.id)}
            >
              {seg.label}
            </span>
          );
        })}
      </div>

      {/* Hover description */}
      {activeSegment && (
        <div
          className={`mt-5 rounded-xl p-3 text-center ${
            dark ? "bg-white/[0.04]" : "bg-surface"
          }`}
        >
          <p
            className={`text-[12px] font-bold ${
              dark
                ? SEGMENTS.find((s) => s.id === activeSegment)!.labelClassDark
                : SEGMENTS.find((s) => s.id === activeSegment)!.labelClass
            }`}
          >
            {SEGMENTS.find((s) => s.id === activeSegment)!.name}
          </p>
          <p
            className={`mt-1 text-[12px] leading-relaxed ${
              dark ? "text-white/45" : "text-text-2"
            }`}
          >
            {SEGMENTS.find((s) => s.id === activeSegment)!.description}
          </p>
        </div>
      )}
    </div>
  );
}
