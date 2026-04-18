import { useEffect, useRef } from "react";

/**
 * Adds the `is-visible` class once the element enters the viewport.
 * Pair with the `.reveal-up` utility in styles.css.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}

/**
 * Lightweight parallax: translates the element on Y axis based on its
 * position within the viewport. `speed` between 0 and 1 (smaller = subtler).
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 0.18) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      // distance from viewport center, normalized
      const offset = rect.top + rect.height / 2 - viewport / 2;
      el.style.transform = `translate3d(0, ${(-offset * speed).toFixed(2)}px, 0)`;
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
