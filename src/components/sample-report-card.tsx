/* ══════════════════════════════════════════════════════════
   SampleReportCard — decoded vehicle example card
   Shows vehicle photo, brand logo, and key specs table.
   Used on sample report page and brand decoder pages.
   ══════════════════════════════════════════════════════════ */

import Image from "next/image";

interface SampleReportCardProps {
  /** Vehicle photo URL */
  image: string;
  /** Brand logo URL (optional) */
  brandLogo?: string;
  year: number;
  model: string;
  vin: string;
  bodyStyle: string;
  engine: string;
  country: string;
  dark?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
}

export { type SampleReportCardProps };

export default function SampleReportCard({
  image,
  brandLogo,
  year,
  model,
  vin,
  bodyStyle,
  engine,
  country,
  dark = false,
  delay = 0,
}: SampleReportCardProps) {
  const specs = [
    { label: "Year", value: String(year) },
    { label: "Model", value: model },
    { label: "VIN", value: vin, mono: true },
    { label: "Body Style", value: bodyStyle },
    { label: "Engine", value: engine },
    { label: "Country", value: country },
  ];

  return (
    <div
      className={`overflow-hidden rounded-2xl border ${
        dark
          ? "border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
          : "border-border bg-white"
      }`}
      style={{
        animation: delay
          ? `hero-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
          : undefined,
      }}
    >
      {/* Vehicle image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={`${year} ${model}`}
          fill
          className="object-cover"
        />
        {/* Brand logo */}
        {brandLogo && (
          <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 shadow-sm backdrop-blur-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={brandLogo} alt="" className="h-6 w-6 object-contain" />
          </div>
        )}
      </div>

      {/* Specs table */}
      <div className="p-5">
        {/* Title */}
        <p
          className={`text-[16px] font-bold ${
            dark ? "text-white" : "text-foreground"
          }`}
        >
          {year} {model}
        </p>

        {/* Table */}
        <div className="mt-4 space-y-0">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className={`flex items-baseline justify-between border-b py-2.5 ${
                dark ? "border-white/[0.06]" : "border-border"
              }`}
            >
              <span
                className={`text-[12px] font-medium ${
                  dark ? "text-white/35" : "text-text-3"
                }`}
              >
                {spec.label}
              </span>
              <span
                className={`text-[13px] font-semibold ${
                  spec.mono ? "font-mono tracking-wider" : ""
                } ${dark ? "text-white/70" : "text-foreground"}`}
              >
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
