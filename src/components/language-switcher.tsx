/* ══════════════════════════════════════════════════════════
   LanguageSwitcher — dropdown for 8 language versions
   Used in the Header. Shows current language flag + code,
   dropdown list of all languages with paths.
   ══════════════════════════════════════════════════════════ */

"use client";

import { useState, useRef, useEffect } from "react";

interface Language {
  code: string;
  label: string;
  path: string;
  flag: string;
}

interface LanguageSwitcherProps {
  /** Current language code (e.g. "en") */
  current?: string;
  dark?: boolean;
}

export { type LanguageSwitcherProps };

const LANGUAGES: Language[] = [
  { code: "en", label: "English", path: "/", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", path: "/de/", flag: "🇩🇪" },
  { code: "uk", label: "Українська", path: "/uk/", flag: "🇺🇦" },
  { code: "pl", label: "Polski", path: "/pl/", flag: "🇵🇱" },
  { code: "it", label: "Italiano", path: "/it/", flag: "🇮🇹" },
  { code: "ru", label: "Русский", path: "/ru/", flag: "🇷🇺" },
  { code: "fr", label: "Français", path: "/fr/", flag: "🇫🇷" },
  { code: "es", label: "Español", path: "/es/", flag: "🇪🇸" },
];

export default function LanguageSwitcher({
  current = "en",
  dark = false,
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const active = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0];

  /* Close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-colors duration-200 ${
          dark
            ? "text-white/60 hover:bg-white/[0.06] hover:text-white/80"
            : "text-text-2 hover:bg-muted hover:text-foreground"
        }`}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="text-[14px]">{active.flag}</span>
        <span className="uppercase">{active.code}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M3 4.5l3 3 3-3" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute right-0 top-full z-50 mt-1.5 min-w-[160px] overflow-hidden rounded-xl border py-1 shadow-lg ${
            dark
              ? "border-white/[0.08] bg-hero-dark shadow-black/30"
              : "border-border bg-white shadow-black/8"
          }`}
          role="listbox"
        >
          {LANGUAGES.map((lang) => (
            <a
              key={lang.code}
              href={lang.path}
              role="option"
              aria-selected={lang.code === current}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2.5 px-3.5 py-2 text-[13px] transition-colors duration-150 ${
                lang.code === current
                  ? dark
                    ? "bg-white/[0.06] font-semibold text-white"
                    : "bg-primary/5 font-semibold text-primary"
                  : dark
                    ? "text-white/50 hover:bg-white/[0.04] hover:text-white/70"
                    : "text-text-2 hover:bg-muted hover:text-foreground"
              }`}
            >
              <span className="text-[15px]">{lang.flag}</span>
              <span>{lang.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
