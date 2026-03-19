"use client";

import { lazy, Suspense, useMemo } from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

type IconKey = keyof typeof dynamicIconImports;

interface Props {
  name: string;
  className?: string;
  strokeWidth?: number;
  size?: number;
}

function toKey(name: string): IconKey | null {
  const kebab = name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[_\s]+/g, "-")
    .toLowerCase();
  return kebab in dynamicIconImports ? (kebab as IconKey) : null;
}

export default function DynamicIconImpl({ name, ...props }: Props) {
  const key = toKey(name);

  const Icon = useMemo(() => {
    if (!key) return null;
    return lazy(dynamicIconImports[key]);
  }, [key]);

  if (!Icon) return <span className={props.className} />;

  return (
    <Suspense fallback={<span className={props.className} />}>
      <Icon {...props} />
    </Suspense>
  );
}
