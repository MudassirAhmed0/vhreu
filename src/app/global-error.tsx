"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#0B1D33",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 480, padding: "0 20px" }}>
          <div
            style={{
              width: 64,
              height: 64,
              margin: "0 auto 24px",
              borderRadius: 16,
              background: "rgba(217,64,64,0.1)",
              border: "1px solid rgba(217,64,64,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D94040"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              width={32}
              height={32}
            >
              <path d="M12 9v4" />
              <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.87L13.637 3.59a1.914 1.914 0 0 0-3.274 0z" />
              <path d="M12 16h.01" />
            </svg>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "rgba(255,255,255,0.9)",
              margin: "0 0 12px",
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.6,
              margin: "0 0 32px",
            }}
          >
            A critical error occurred. Please try refreshing the page.
          </p>

          {error.digest && (
            <p
              style={{
                fontFamily: "monospace",
                fontSize: 12,
                color: "rgba(255,255,255,0.15)",
                margin: "0 0 24px",
              }}
            >
              Error ID: {error.digest}
            </p>
          )}

          <button
            onClick={reset}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 28px",
              borderRadius: 12,
              border: "none",
              background: "#FFCC00",
              color: "#0B1D33",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
