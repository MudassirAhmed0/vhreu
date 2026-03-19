"use client";

import { useInView } from "@/hooks/use-in-view";
import { useCountUp } from "@/hooks/use-count-up";

interface CountUpProps {
  /** Full stat string, e.g. "697K", "32%", "1.2M" */
  value: string;
}

/** Parse "697K" → { num: 697, suffix: "K" } */
function parseStat(s: string): { num: number; suffix: string } {
  const match = s.match(/^([0-9,.]+)\s*(.*)$/);
  if (!match) return { num: 0, suffix: s };
  const num = parseFloat(match[1].replace(/,/g, ""));
  return { num: isNaN(num) ? 0 : num, suffix: match[2] };
}

export default function CountUp({ value }: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const { num, suffix } = parseStat(value);
  const count = useCountUp(num, inView);

  // Format with commas for large numbers
  const formatted = num >= 1000 && !suffix
    ? count.toLocaleString()
    : count.toString();

  return (
    <span ref={ref}>
      {formatted}{suffix}
    </span>
  );
}
