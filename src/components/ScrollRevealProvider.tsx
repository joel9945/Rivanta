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

    const revealSelector =
      ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-fade, .reveal-scale, .reveal-stagger";

    // Immediate check for elements currently visible in viewport
    const checkVisible = () => {
      const targets = document.querySelectorAll(revealSelector);
      const windowHeight = window.innerHeight;

      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in viewport or near viewport top
        if (rect.top <= windowHeight * 0.95 && rect.bottom >= 0) {
          el.classList.add("is-revealed");
        }
      });
    };

    // Run immediately
    checkVisible();

    if (!("IntersectionObserver" in window)) {
      // Fallback: reveal all if IntersectionObserver unsupported
      document.querySelectorAll(revealSelector).forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    const observeElements = () => {
      const targets = document.querySelectorAll(revealSelector);
      targets.forEach((el) => {
        if (!el.classList.contains("is-revealed")) {
          observer.observe(el);
        }
      });
    };

    observeElements();

    // Re-check on dynamic mutations (e.g. Next.js page transitions)
    const mutationObserver = new MutationObserver(() => {
      checkVisible();
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Safety fallback: after 1.8s ensure everything is visible
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll(revealSelector).forEach((el) => {
        el.classList.add("is-revealed");
      });
    }, 1800);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(safetyTimer);
    };
  }, []);

  return <>{children}</>;
}
