"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

interface RevealProps {
  children: ReactNode;
  /** Only trigger once (default: true) */
  once?: boolean;
  /** IntersectionObserver rootMargin */
  rootMargin?: string;
  /** Skip observer — show immediately (Storybook, above-fold) */
  disabled?: boolean;
  className?: string;
}

export default function Reveal({
  children,
  once = true,
  rootMargin,
  disabled = false,
  className,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ once, rootMargin, disabled });

  return (
    <div
      ref={ref}
      className={`${!inView ? "reveal-pending" : ""} ${className ?? ""}`.trim() || undefined}
    >
      {children}
    </div>
  );
}
