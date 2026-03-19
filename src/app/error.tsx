"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-hero-dark">
      {/* ── Background decoration ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Red-tinted glow for error state */}
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(217,64,64,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Subtle secondary glow */}
        <div
          className="absolute right-[20%] top-[30%] h-[300px] w-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,204,0,0.04) 0%, transparent 70%)",
            animation: "orb-drift 8s ease-in-out infinite",
          }}
        />
        {/* Pulsing ring */}
        <div
          className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-danger/[0.06]"
          style={{ animation: "ring-pulse 3s ease-out infinite" }}
        />

        {/* Glitch scanlines */}
        <div className="absolute inset-0 opacity-[0.015]">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="h-px w-full bg-white"
              style={{ marginTop: `${20 + i * 20}px` }}
            />
          ))}
        </div>
      </div>

      {/* ── Content ── */}
      <div
        className="relative z-10 mx-auto max-w-2xl px-5 text-center"
        style={{
          animation: "hero-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both",
        }}
      >
        {/* Engine icon */}
        <div
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-danger/20 bg-danger/10 shadow-lg shadow-danger/5 backdrop-blur-sm"
          style={{ animation: "badge-float 3s ease-in-out infinite" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-9 w-9 text-danger"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </div>

        {/* Tag */}
        <div className="mb-5 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
          <span
            className="inline-block h-px w-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(217,64,64,0.4))",
            }}
          />
          Engine Trouble
          <span
            className="inline-block h-px w-8"
            style={{
              background:
                "linear-gradient(90deg, rgba(217,64,64,0.4), transparent)",
            }}
          />
        </div>

        <h1 className="text-[clamp(1.5rem,3.5vw,2.2rem)] font-extrabold leading-tight text-white/90">
          Something went wrong
        </h1>

        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-white/40">
          We hit an unexpected bump in the road. Our team has been notified.
          Try again or head back to the homepage.
        </p>

        {/* Error digest for debugging */}
        {error.digest && (
          <p className="mt-4 font-mono text-[12px] text-white/15">
            Error ID: {error.digest}
          </p>
        )}

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{
            animation: "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s both",
          }}
        >
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-[14px] font-bold text-hero-dark transition-all duration-200 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
            </svg>
            Try Again
          </button>

          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-7 py-3.5 text-[14px] font-bold text-white/60 backdrop-blur-sm transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white/90"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}
