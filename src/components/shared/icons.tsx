/* ══════════════════════════════════════════════════════════
   Shared icons — deduplicated from multiple components
   ══════════════════════════════════════════════════════════ */

export function CheckIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function CloseIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <path d={`M${size * 0.25} ${size * 0.25}l${size * 0.5} ${size * 0.5}M${size * 0.75} ${size * 0.25}l-${size * 0.5} ${size * 0.5}`} />
    </svg>
  );
}

export function StarIcon({
  filled,
  className,
}: {
  filled: boolean;
  className: string;
}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.2"
      className={className}
    >
      <path d="M8 1.5l1.85 3.75 4.15.6-3 2.93.71 4.12L8 10.88 4.29 12.9l.71-4.12-3-2.93 4.15-.6L8 1.5z" />
    </svg>
  );
}
