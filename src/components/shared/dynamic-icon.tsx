"use client";

import { lazy, Suspense } from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import type { LucideProps } from "lucide-react";

export type IconName = keyof typeof dynamicIconImports;

interface DynamicIconProps extends LucideProps {
  name: IconName;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={<span className={props.className} />}>
      <LucideIcon {...props} />
    </Suspense>
  );
}
