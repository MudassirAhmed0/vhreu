"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  /** Only trigger once (default: true) */
  once?: boolean;
  /** IntersectionObserver rootMargin (default: "0px 0px -60px 0px") */
  rootMargin?: string;
  /** Skip observer — immediately visible (default: false) */
  disabled?: boolean;
}

export function useInView<T extends HTMLElement = HTMLDivElement>({
  once = true,
  rootMargin = "0px 0px -60px 0px",
  disabled = false,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  // Start true so SSR renders content visible (no reveal-pending).
  // Effect below will hide below-fold elements after hydration.
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;

    // After hydration: check if element is already in viewport.
    // If yes, keep visible (animations already ran or will run naturally).
    // If no, hide it and let IntersectionObserver trigger the reveal.
    const rect = el.getBoundingClientRect();
    const aboveFold = rect.top < window.innerHeight;

    if (aboveFold) {
      // Already visible — no need to observe
      setInView(true);
      if (once) return;
    } else {
      // Below viewport — hide until scrolled into view
      setInView(false);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin, disabled]);

  return { ref, inView };
}
