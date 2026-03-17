/* ══════════════════════════════════════════════════════════
   Breadcrumbs — breadcrumb trail with JSON-LD schema
   Renders breadcrumb links with > separators.
   Outputs BreadcrumbList structured data for SEO.
   Used on blog posts, brand pages, country pages, inner pages.
   ══════════════════════════════════════════════════════════ */

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export { type BreadcrumbsProps, type BreadcrumbItem };

export default function Breadcrumbs({ items, dark = false }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  /* JSON-LD BreadcrumbList schema */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`text-[13px] ${dark ? "text-white/40" : "text-text-3"}`}
      >
        <ol className="flex items-center gap-1.5 overflow-hidden">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {i > 0 && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="opacity-40"
                  >
                    <path d="M3.5 2l3.5 3-3.5 3" />
                  </svg>
                )}
                {isLast ? (
                  <span
                    className={`min-w-0 truncate font-medium ${
                      dark ? "text-white/70" : "text-foreground"
                    }`}
                    aria-current="page"
                    title={item.label}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 ${
                      dark
                        ? "hover:text-white/60"
                        : "hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
