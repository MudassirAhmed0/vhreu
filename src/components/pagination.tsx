/* ══════════════════════════════════════════════════════════
   Pagination — numbered page navigation
   Shows page numbers with prev/next arrows.
   Used on blog listing page.
   ══════════════════════════════════════════════════════════ */

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  /** Base path for page links (e.g. "/blog") — appends /page/N */
  basePath: string;
  dark?: boolean;
}

export { type PaginationProps };

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  dark = false,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages);

  const pageHref = (page: number) =>
    page === 1 ? basePath : `${basePath}/page/${page}`;

  const baseClass = `flex h-10 w-10 items-center justify-center rounded-xl text-[14px] font-semibold transition-colors duration-200`;

  const activeClass = dark
    ? "bg-white/[0.1] text-white"
    : "bg-primary text-white";

  const inactiveClass = dark
    ? "text-white/40 hover:bg-white/[0.06] hover:text-white/70"
    : "text-text-2 hover:bg-muted hover:text-foreground";

  const disabledClass = dark ? "text-white/15" : "text-text-4";

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1">
      {/* Prev */}
      {currentPage > 1 ? (
        <Link
          href={pageHref(currentPage - 1)}
          className={`${baseClass} ${inactiveClass}`}
          aria-label="Previous page"
        >
          <ChevronLeft />
        </Link>
      ) : (
        <span className={`${baseClass} ${disabledClass}`} aria-hidden>
          <ChevronLeft />
        </span>
      )}

      {/* Page numbers */}
      {pages.map((page, i) =>
        page === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className={`${baseClass} ${dark ? "text-white/20" : "text-text-4"}`}
          >
            &hellip;
          </span>
        ) : (
          <Link
            key={page}
            href={pageHref(page as number)}
            className={`${baseClass} ${
              page === currentPage ? activeClass : inactiveClass
            }`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </Link>
        )
      )}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={pageHref(currentPage + 1)}
          className={`${baseClass} ${inactiveClass}`}
          aria-label="Next page"
        >
          <ChevronRight />
        </Link>
      ) : (
        <span className={`${baseClass} ${disabledClass}`} aria-hidden>
          <ChevronRight />
        </span>
      )}
    </nav>
  );
}

/* ── Build page number array with ellipsis ── */
function getPageNumbers(
  current: number,
  total: number
): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "...")[] = [1];

  if (current > 3) pages.push("...");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) pages.push("...");

  pages.push(total);

  return pages;
}

/* ── Icons ── */
function ChevronLeft() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M10 4l-4 4 4 4" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 4l4 4-4 4" />
    </svg>
  );
}
