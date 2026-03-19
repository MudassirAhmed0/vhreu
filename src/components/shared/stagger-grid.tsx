"use client";

import { Children, ReactNode, cloneElement, isValidElement } from "react";
import { useInView } from "@/hooks/use-in-view";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
}

export default function StaggerGrid({ children, className }: StaggerGridProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`stagger-grid ${className ?? ""}`} data-visible={inView || undefined}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        return cloneElement(child as React.ReactElement<Record<string, unknown>>, {
          style: { ...((child.props as Record<string, unknown>).style as object), "--stagger-index": i } as React.CSSProperties,
        });
      })}
    </div>
  );
}
