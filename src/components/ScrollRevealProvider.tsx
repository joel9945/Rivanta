"use client";

import React, { useEffect } from "react";

/**
 * ScrollRevealProvider
 * High-performance, production-ready reveal engine.
 * - Immediately reveals any element already in viewport on mount (no blank screen)
 * - Observes elements entering the viewport on scroll
 * - Safety fallback reveals all elements after a grace period
 */
export default function ScrollRevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let isDestroyed = false;
    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const revealSelector =
      ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-fade, .reveal-scale, .reveal-stagger";

    const initEngine = () => {
      if (isDestroyed) return;

      if (!("IntersectionObserver" in window)) {
        document.querySelectorAll(revealSelector).forEach((el) => {
          el.classList.add("is-revealed");
        });
        return;
      }

      // Native IntersectionObserver handles initial-in-viewport elements asynchronously
      // without layout thrashing from getBoundingClientRect() loops
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -20px 0px",
        }
      );

      const observeElements = () => {
        if (isDestroyed || !observer) return;
        const targets = document.querySelectorAll(revealSelector);
        targets.forEach((el) => {
          if (!el.classList.contains("is-revealed")) {
            observer?.observe(el);
          }
        });
      };

      // Start observing targets asynchronously
      observeElements();

      // Observe future route transitions/mutations asynchronously without layout thrashing
      let mutationRaf: number | null = null;
      mutationObserver = new MutationObserver(() => {
        if (mutationRaf) cancelAnimationFrame(mutationRaf);
        mutationRaf = requestAnimationFrame(() => {
          observeElements();
        });
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    };

    // Wait until React hydration has completely settled before attaching DOM observers
    const initTimer = setTimeout(initEngine, 100);

    // Safety fallback: ensure everything is visible
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll(revealSelector).forEach((el) => {
        el.classList.add("is-revealed");
      });
    }, 1800);

    return () => {
      isDestroyed = true;
      clearTimeout(initTimer);
      clearTimeout(safetyTimer);
      observer?.disconnect();
      mutationObserver?.disconnect();
    };
  }, []);

  return <>{children}</>;
}
