/* ══════════════════════════════════════════════════════════
   AuthorBox — author bio card for blog posts
   Shows avatar, name, bio, and optional social links.
   Placed below the post title on single blog pages.
   ══════════════════════════════════════════════════════════ */

import Image from "next/image";

interface AuthorBoxProps {
  name: string;
  /** Avatar image URL */
  avatar?: string;
  bio: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
  dark?: boolean;
}

export { type AuthorBoxProps };

export default function AuthorBox({
  name,
  avatar,
  bio,
  socials,
  dark = false,
}: AuthorBoxProps) {
  const hasSocials =
    socials && (socials.facebook || socials.twitter || socials.linkedin);

  return (
    <div className="flex gap-4">
      {/* Avatar */}
      {avatar ? (
        <Image
          src={avatar}
          alt={name}
          width={48}
          height={48}
          className="h-12 w-12 shrink-0 rounded-full object-cover"
        />
      ) : (
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[16px] font-bold ${
            dark
              ? "bg-white/[0.06] text-white/50"
              : "bg-primary/8 text-primary"
          }`}
        >
          {name.charAt(0).toUpperCase()}
        </div>
      )}

      {/* Info */}
      <div className="min-w-0">
        <p
          className={`text-[14px] font-bold ${
            dark ? "text-white" : "text-foreground"
          }`}
        >
          {name}
        </p>
        <p
          className={`mt-0.5 text-[13px] leading-relaxed ${
            dark ? "text-white/40" : "text-text-2"
          }`}
        >
          {bio}
        </p>

        {/* Socials */}
        {hasSocials && (
          <div className="mt-2 flex gap-3">
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-200 ${
                  dark
                    ? "text-white/30 hover:text-white/60"
                    : "text-text-3 hover:text-primary"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {socials.facebook && (
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-200 ${
                  dark
                    ? "text-white/30 hover:text-white/60"
                    : "text-text-3 hover:text-primary"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
                </svg>
              </a>
            )}
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-200 ${
                  dark
                    ? "text-white/30 hover:text-white/60"
                    : "text-text-3 hover:text-primary"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
