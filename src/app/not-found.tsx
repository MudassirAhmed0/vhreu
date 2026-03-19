import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-hero-dark">
      {/* ── Background decoration ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial glow */}
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,204,0,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Pulsing rings */}
        <div
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]"
          style={{ animation: "ring-pulse 4s ease-out infinite" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]"
          style={{ animation: "ring-pulse 4s ease-out 1s infinite" }}
        />

        {/* Scrolling VIN strip */}
        <div className="absolute bottom-[20%] left-0 w-full overflow-hidden opacity-[0.03]">
          <div
            className="flex whitespace-nowrap font-mono text-[14px] font-bold tracking-[0.3em] text-white"
            style={{ animation: "vin-scroll 25s linear infinite" }}
          >
            {"WBA3A5G59DNP26842 · WVWZZZ3CZWE123456 · TMBJB9NE1F0123456 · ZFA31200001234567 · VF1RFB00854321098 · WBA3A5G59DNP26842 · WVWZZZ3CZWE123456 · TMBJB9NE1F0123456 · ZFA31200001234567 · VF1RFB00854321098 · "}
          </div>
        </div>

        {/* Dashed road line */}
        <div className="absolute bottom-[12%] left-0 flex w-full items-center justify-center gap-3">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="h-[3px] w-10 rounded-full bg-white/[0.04]"
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
        {/* 404 number */}
        <div className="relative mb-6">
          <span
            className="block text-[clamp(8rem,20vw,14rem)] font-extrabold leading-none tracking-tighter"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            404
          </span>

          {/* Shield icon floating over the 0 */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ animation: "badge-float 3s ease-in-out infinite" }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 shadow-lg shadow-accent/5 backdrop-blur-sm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 text-accent"
              >
                <path d="M12 9v4" />
                <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.87L13.637 3.59a1.914 1.914 0 0 0-3.274 0z" />
                <path d="M12 16h.01" />
              </svg>
            </div>
          </div>
        </div>

        {/* Tag */}
        <div className="mb-5 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
          <span
            className="inline-block h-px w-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,204,0,0.4))",
            }}
          />
          Wrong Turn
          <span
            className="inline-block h-px w-8"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,204,0,0.4), transparent)",
            }}
          />
        </div>

        <h1 className="text-[clamp(1.5rem,3.5vw,2.2rem)] font-extrabold leading-tight text-white/90">
          This page has left the road
        </h1>

        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-white/40">
          The page you're looking for doesn't exist, was moved, or took a
          detour. Let's get you back on track.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{
            animation: "hero-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s both",
          }}
        >
          <Link
            href="/"
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
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Back to Home
          </Link>

          <Link
            href="/#hero"
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
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            Run a VIN Check
          </Link>
        </div>
      </div>
    </section>
  );
}
