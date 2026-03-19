/* ══════════════════════════════════════════════════════════
   DynamicIcon — lazy-loaded lucide icon by name
   The heavy dynamicIconImports map lives in _dynamic-icon-impl
   and is code-split into its own async chunk via next/dynamic.
   ══════════════════════════════════════════════════════════ */

"use client";

import dynamic from "next/dynamic";

export type IconName = string;

const DynamicIconLazy = dynamic(() => import("./_dynamic-icon-impl"), {
  ssr: false,
  loading: () => null,
});

export default function DynamicIcon(props: {
  name: string;
  className?: string;
  strokeWidth?: number;
  size?: number;
}) {
  return <DynamicIconLazy {...props} />;
}
