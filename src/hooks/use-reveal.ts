import { useEffect } from "react";

/**
 * Adds `reveal-in` to any element carrying the `reveal` class once it scrolls
 * into view. Respects prefers-reduced-motion by revealing immediately.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.classList.add("reveal-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}
