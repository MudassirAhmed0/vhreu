/* ══════════════════════════════════════════════════════════
   VinLocationDiagram — where to find the VIN on a car
   4-card grid: Dashboard, Driver's Door, Documents, Under Bonnet.
   Each card has an icon + location name + description.
   Used on window sticker, brand decoder, and VIN decoder pages.
   ══════════════════════════════════════════════════════════ */

interface VinLocationDiagramProps {
  dark?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
}

export { type VinLocationDiagramProps };

const LOCATIONS = [
  {
    name: "Dashboard",
    description: "Look through the windshield at the base of the dashboard on the driver's side.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="10" rx="2" />
        <path d="M6 17v2M18 17v2M2 12h20" />
      </svg>
    ),
  },
  {
    name: "Driver's Door",
    description: "Open the driver's door and check the jamb area where the door latches.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="14" height="20" rx="2" />
        <circle cx="13" cy="12" r="1.5" />
        <path d="M20 6v12" />
      </svg>
    ),
  },
  {
    name: "Documents",
    description: "Found on vehicle registration, insurance cards, and the original title document.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M8 6h8M8 10h8M8 14h5" />
      </svg>
    ),
  },
  {
    name: "Under Bonnet",
    description: "Check the front of the engine block or on a sticker inside the engine bay.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14l2-8h12l2 8" />
        <rect x="2" y="14" width="20" height="4" rx="1" />
        <circle cx="7" cy="21" r="2" />
        <circle cx="17" cy="21" r="2" />
        <path d="M5 19h2M17 19h2M9 21h6" />
      </svg>
    ),
  },
];

export default function VinLocationDiagram({
  dark = false,
  delay = 0,
}: VinLocationDiagramProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {LOCATIONS.map((loc, i) => (
        <div
          key={loc.name}
          className={`flex gap-4 rounded-2xl border p-5 ${
            dark
              ? "border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
              : "border-border bg-white"
          }`}
          style={{
            animation: delay
              ? `hero-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay + i * 0.04}s both`
              : undefined,
          }}
        >
          {/* Icon */}
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              dark
                ? "bg-white/[0.06] text-white/50"
                : "bg-primary/8 text-primary"
            }`}
          >
            {loc.icon}
          </div>

          {/* Text */}
          <div>
            <p
              className={`text-[14px] font-bold ${
                dark ? "text-white" : "text-foreground"
              }`}
            >
              {loc.name}
            </p>
            <p
              className={`mt-1 text-[13px] leading-relaxed ${
                dark ? "text-white/40" : "text-text-2"
              }`}
            >
              {loc.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
