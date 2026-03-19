/* ══════════════════════════════════════════════════════════
   Header — site navigation
   CSS-only mobile menu via checkbox toggle — zero JavaScript.
   ══════════════════════════════════════════════════════════ */

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Vehicle History Europe"
            width={180}
            height={57}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-text-2 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/members/login"
            className="text-[14px] font-medium text-text-2 transition-colors hover:text-primary"
          >
            Login
          </Link>
          <Link
            href="/members/login"
            className="rounded-xl bg-primary px-5 py-2.5 text-[14px] font-bold text-white shadow-[0_2px_12px_rgba(26,54,92,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-[0_4px_20px_rgba(26,54,92,0.25)]"
          >
            Sign Up
          </Link>
        </div>

        {/* CSS-only mobile toggle */}
        <label htmlFor="mobile-menu" className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-text-2 hover:bg-surface lg:hidden" aria-label="Toggle menu">
          <svg className="h-6 w-6 peer-checked:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </label>
      </div>

      {/* Hidden checkbox drives the mobile menu */}
      <input type="checkbox" id="mobile-menu" className="peer sr-only" />
      <div className="hidden border-t border-border bg-white px-5 py-4 peer-checked:block lg:!hidden">
        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-2.5 text-[14px] font-medium text-text-2 hover:bg-surface hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <hr className="my-2 border-border" />
          <Link
            href="/members/login"
            className="rounded-xl px-3 py-2.5 text-[14px] font-medium text-text-2 hover:bg-surface"
          >
            Login / Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
