"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lenis with fast, responsive, buttery-smooth momentum (zero lag, zero sluggish drag)
    const lenis = new Lenis({
      lerp: 0.12,          // Responsive, fluid linear interpolation without sluggish inertia drag
      wheelMultiplier: 1.0, // Natural 1:1 wheel response
      touchMultiplier: 1.0, // Clean 1:1 touch response
      smoothWheel: true,
      syncTouch: false,    // Keep native 120Hz touch gestures on mobile/tablets
      autoRaf: true,       // Optimized internal RAF lifecycle that sleeps when idle
      orientation: "vertical",
      gestureOrientation: "vertical",
      infinite: false,
    });

    lenisRef.current = lenis;

    // Attach to global window for interoperability
    // @ts-expect-error global lenis attachment
    window.lenis = lenis;

    // Smoothly handle all hash anchor clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80,
            duration: 1.0,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  // Instant clean reset on route changes across pages
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        immediate: true,
      });
    }
  }, [pathname]);

  return <>{children}</>;
}
