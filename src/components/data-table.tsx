/* ══════════════════════════════════════════════════════════
   DataTable — responsive data grid
   Single <table> at all breakpoints. On small screens the
   wrapper scrolls horizontally and the first column sticks
   so the row context is never lost.
   Supports boolean (check/x), string, aligned columns,
   highlighted columns, zebra striping, dark mode.
   Non-actionable — no hover effects.
   ══════════════════════════════════════════════════════════ */

interface Column {
  key: string;
  label: string;
  /** Visual emphasis — accent badge in header, bold values */
  highlight?: boolean;
  /** Text alignment — defaults to "center" */
  align?: "left" | "center" | "right";
}

interface DataTableProps {
  columns: Column[];
  /** Each row must have a `name` key + keys matching column definitions */
  rows: Record<string, boolean | string>[];
  /** Header label for the row name column (default: "Feature") */
  rowLabel?: string;
  dark?: boolean;
}

export { type Column, type DataTableProps };

/* ── Alignment ── */

const ALIGN_CLASS = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

/* ── Icons ── */

function CheckIcon() {
  return (
    <svg className="mx-auto h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="mx-auto h-5 w-5 text-red-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

/* ── Cell renderer ── */

function CellValue({
  value,
  highlight,
  dark,
  align,
}: {
  value: boolean | string;
  highlight: boolean;
  dark: boolean;
  align: "left" | "center" | "right";
}) {
  if (value === true)
    return (
      <span className={align === "center" ? "flex justify-center" : ""}>
        <CheckIcon />
      </span>
    );
  if (value === false)
    return (
      <span className={align === "center" ? "flex justify-center" : ""}>
        <XIcon />
      </span>
    );

  return (
    <span
      className={`text-[14px] leading-relaxed ${
        highlight
          ? dark
            ? "font-bold text-accent"
            : "font-bold text-primary"
          : dark
            ? "text-white/60"
            : "text-text-2"
      }`}
    >
      {value}
    </span>
  );
}

/* ── Sticky column shadow (fades out so you see the scroll edge) ── */

const STICKY_SHADOW = "after:pointer-events-none after:absolute after:right-[-6px] after:top-0 after:h-full after:w-[6px] after:bg-gradient-to-r after:from-black/[0.04] after:to-transparent";
const STICKY_SHADOW_DARK = "after:pointer-events-none after:absolute after:right-[-6px] after:top-0 after:h-full after:w-[6px] after:bg-gradient-to-r after:from-white/[0.06] after:to-transparent";

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════ */

export default function DataTable({
  columns,
  rows,
  rowLabel = "Feature",
  dark = false,
}: DataTableProps) {
  const highlightKey = columns.find((c) => c.highlight)?.key;
  const stickyAfter = dark ? STICKY_SHADOW_DARK : STICKY_SHADOW;

  return (
    <div
      className={`overflow-hidden rounded-2xl border ${
        dark ? "border-white/[0.06]" : "border-border"
      }`}
      style={{ animation: "hero-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
    >
      {/* Horizontal scroll wrapper — only activates when table overflows */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px]">
          <thead>
            <tr
              className={
                dark
                  ? "bg-white/[0.04]"
                  : "bg-primary"
              }
            >
              {/* Sticky row-label header */}
              <th
                className={`sticky left-0 z-10 whitespace-nowrap px-4 py-4 text-left text-[13px] font-semibold tracking-wide sm:px-6 ${
                  dark ? "bg-hero-dark text-white/50" : "bg-primary text-white/80"
                } relative ${stickyAfter}`}
              >
                {rowLabel}
              </th>

              {/* Column headers */}
              {columns.map((col) => {
                const align = col.align ?? "center";
                return (
                  <th
                    key={col.key}
                    className={`whitespace-nowrap px-4 py-4 ${ALIGN_CLASS[align]} text-[13px] font-semibold tracking-wide sm:px-6 ${
                      dark ? "text-white/50" : "text-white/80"
                    }`}
                  >
                    {col.highlight ? (
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                          dark
                            ? "bg-accent/20 text-accent"
                            : "bg-accent text-white"
                        }`}
                      >
                        {col.label}
                      </span>
                    ) : (
                      col.label
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => {
              const stripeBg = dark
                ? i % 2 === 0
                  ? "bg-white/[0.01]"
                  : "bg-white/[0.03]"
                : i % 2 === 0
                  ? "bg-white"
                  : "bg-surface";

              /* Sticky cell needs the same stripe bg so it doesn't look transparent */
              const stickyBg = dark
                ? i % 2 === 0
                  ? "bg-hero-dark"
                  : "bg-[#0f2440]"
                : i % 2 === 0
                  ? "bg-white"
                  : "bg-surface";

              return (
                <tr key={row.name as string} className={stripeBg}>
                  {/* Sticky row name */}
                  <td
                    className={`sticky left-0 z-10 whitespace-nowrap px-4 py-3.5 text-[14px] font-medium sm:px-6 ${
                      dark ? "text-white/70" : "text-foreground"
                    } ${stickyBg} relative ${stickyAfter}`}
                  >
                    {row.name as string}
                  </td>

                  {/* Column values */}
                  {columns.map((col) => {
                    const isHighlight = col.key === highlightKey;
                    const align = col.align ?? "center";
                    return (
                      <td
                        key={col.key}
                        className={`px-4 py-3.5 sm:px-6 ${ALIGN_CLASS[align]} ${
                          isHighlight
                            ? dark
                              ? "bg-accent/[0.04]"
                              : "bg-primary/[0.03]"
                            : ""
                        }`}
                      >
                        <CellValue
                          value={row[col.key]}
                          highlight={isHighlight}
                          dark={dark}
                          align={align}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
