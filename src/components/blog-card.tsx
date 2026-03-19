/* ══════════════════════════════════════════════════════════
   BlogCard — article preview card
   Used on: homepage blog section, blog listing, country pages.
   Hover: image zooms (overflow hidden), "Read more >"
   text + chevron change color, chevron slides right.
   NO card-level scale/lift/shadow-growth.
   ══════════════════════════════════════════════════════════ */

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  /** Featured image URL — shows placeholder if omitted */
  image?: string;
  author: string;
  /** Author avatar URL — shows initials circle if omitted */
  avatar?: string;
  date: string;
  excerpt?: string;
  dark?: boolean;
  /** Entrance animation delay in seconds */
  delay?: number;
}

export { type BlogCardProps };

export default function BlogCard({
  title,
  slug,
  image,
  author,
  avatar,
  date,
  excerpt,
  dark = false,
  delay = 0,
}: BlogCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className={`group block overflow-hidden rounded-2xl border transition-all duration-200 ${
        dark
          ? "border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10"
          : "border-border bg-white hover:border-primary/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
      }`}
      style={{
        animation: delay
          ? `hero-up 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
          : undefined,
      }}
    >
      {/* Featured image — zooms on hover, overflow hidden */}
      <div className="aspect-[3/2] overflow-hidden">
        <Image
          src={image || "/blog-fallback.svg"}
          alt={title}
          width={600}
          height={400}
          className={`h-full w-full object-cover ${image ? "transition-transform duration-500 ease-out group-hover:scale-[1.04]" : ""}`}
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3
          className={`text-[17px] font-bold leading-snug ${
            dark ? "text-white/90" : "text-foreground"
          }`}
        >
          {title}
        </h3>

        {/* Author + date */}
        <div
          className={`mt-3 flex items-center gap-2.5 text-[13px] ${
            dark ? "text-white/30" : "text-text-3"
          }`}
        >
          {avatar ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={avatar}
              alt={author}
              className="h-5 w-5 rounded-full object-cover"
            />
          ) : (
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold ${
                dark
                  ? "bg-white/[0.06] text-white/40"
                  : "bg-primary/10 text-primary/60"
              }`}
            >
              {author.charAt(0)}
            </div>
          )}
          <span className="font-medium">{author}</span>
          <span>·</span>
          <span>{date}</span>
        </div>

        {/* Excerpt */}
        {excerpt && (
          <p
            className={`mt-3 line-clamp-2 text-[14px] leading-relaxed ${
              dark ? "text-white/40" : "text-text-2"
            }`}
          >
            {excerpt}
          </p>
        )}

        {/* Read more + chevron */}
        {dark ? (
          <div className="mt-4 flex items-center gap-1 text-[13px] font-semibold text-[rgba(255,255,255,0.3)] transition-colors duration-200 group-hover:text-accent">
            <span>Read more</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"><path d="M4.5 2.5l3.5 3.5-3.5 3.5" /></svg>
          </div>
        ) : (
          <div className="mt-4 flex items-center gap-1 text-[13px] font-semibold text-[#8A96A8] transition-colors duration-200 group-hover:text-primary">
            <span>Read more</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"><path d="M4.5 2.5l3.5 3.5-3.5 3.5" /></svg>
          </div>
        )}
      </div>
    </Link>
  );
}
