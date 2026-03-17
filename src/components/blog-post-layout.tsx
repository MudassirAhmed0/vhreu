/* ══════════════════════════════════════════════════════════
   BlogPostLayout — single blog post template
   Full-width featured image, title, author, content area
   with prose styling, and optional sidebar slot.
   Used on all 39 blog post pages.
   ══════════════════════════════════════════════════════════ */

import { ReactNode } from "react";
import Image from "next/image";
import AuthorBox, { type AuthorBoxProps } from "./author-box";

interface BlogPostLayoutProps {
  /** Post title */
  title: string;
  /** Featured image URL */
  featuredImage?: string;
  featuredImageAlt?: string;
  /** Publication date string (e.g. "Nov 27, 2024") */
  date?: string;
  /** Reading time (e.g. "5 min read") */
  readTime?: string;
  /** Author data */
  author?: AuthorBoxProps;
  /** Post body content (MDX/HTML) */
  children: ReactNode;
  /** Sidebar content (e.g. SidebarCTA) */
  sidebar?: ReactNode;
}

export { type BlogPostLayoutProps };

export default function BlogPostLayout({
  title,
  featuredImage,
  featuredImageAlt = "",
  date,
  readTime,
  author,
  children,
  sidebar,
}: BlogPostLayoutProps) {
  return (
    <article>
      {/* Featured image */}
      {featuredImage && (
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted">
          <Image
            src={featuredImage}
            alt={featuredImageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-16">
        <div
          className={`${
            sidebar
              ? "grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-16"
              : "mx-auto max-w-3xl"
          }`}
        >
          {/* Main content */}
          <div className="min-w-0">
            {/* Title */}
            <h1 className="text-[clamp(1.8rem,4vw,2.75rem)] font-[900] leading-[1.12] tracking-[-0.02em] text-foreground">
              {title}
            </h1>

            {/* Meta + Author */}
            <div className="mt-6 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
              {author && <AuthorBox {...author} />}
              {(date || readTime) && (
                <div className="flex items-center gap-3 text-[13px] text-text-3">
                  {date && <span>{date}</span>}
                  {date && readTime && (
                    <span className="h-1 w-1 rounded-full bg-text-4" />
                  )}
                  {readTime && <span>{readTime}</span>}
                </div>
              )}
            </div>

            {/* Post body — prose styling */}
            <div
              className={[
                "mt-10",
                /* Headings */
                "[&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-[22px] [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-foreground",
                "[&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-[18px] [&_h3]:font-bold [&_h3]:text-foreground",
                /* Paragraphs */
                "[&_p]:mb-5 [&_p]:text-[15px] [&_p]:leading-[1.8] [&_p]:text-text-2",
                /* Lists */
                "[&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-[15px] [&_ul]:leading-[1.8] [&_ul]:text-text-2",
                "[&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-[15px] [&_ol]:leading-[1.8] [&_ol]:text-text-2",
                "[&_li]:mb-1.5",
                /* Links */
                "[&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:decoration-primary/30 [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-primary-light hover:[&_a]:decoration-primary/50",
                /* Images */
                "[&_img]:my-8 [&_img]:rounded-xl",
                /* Blockquote */
                "[&_blockquote]:my-6 [&_blockquote]:border-l-3 [&_blockquote]:border-accent/40 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-text-2",
                /* Code */
                "[&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[13px]",
                "[&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-hero-dark [&_pre]:p-5 [&_pre]:text-[13px]",
                "[&_pre_code]:bg-transparent [&_pre_code]:p-0",
              ].join(" ")}
            >
              {children}
            </div>
          </div>

          {/* Sidebar */}
          {sidebar && (
            <aside className="hidden lg:block">
              <div className="sticky top-8">{sidebar}</div>
            </aside>
          )}
        </div>
      </div>
    </article>
  );
}
