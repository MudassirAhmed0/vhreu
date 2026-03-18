"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-[11px] font-black tracking-tight text-white">
            VH
          </div>
          <div className="hidden sm:block">
            <span className="text-[15px] font-bold text-primary">Vehicle History</span>
            <span className="ml-1 text-[11px] font-semibold text-text-3">EUROPE</span>
          </div>
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
            className="rounded-xl bg-accent px-5 py-2.5 text-[14px] font-bold text-hero-dark shadow-[0_2px_12px_rgba(255,204,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_4px_20px_rgba(255,204,0,0.25)]"
          >
            Sign Up
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl text-text-2 hover:bg-surface lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={2} />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-[14px] font-medium text-text-2 hover:bg-surface hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-border" />
            <Link
              href="/members/login"
              className="rounded-xl px-3 py-2.5 text-[14px] font-medium text-text-2 hover:bg-surface"
              onClick={() => setMobileOpen(false)}
            >
              Login / Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
