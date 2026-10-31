"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SubpageHeroProps {
  badge: string;
  title: string;
  highlightedText?: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  breadcrumbs: BreadcrumbItem[];
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  telemetryTag?: string;
}

export default function SubpageHero({
  badge,
  title,
  highlightedText,
  description,
  imageSrc,
  imageAlt = "Rivanta Green Industrial Infrastructure",
  breadcrumbs,
  primaryCtaText = "Explore specifications",
  primaryCtaHref = "#details",
  secondaryCtaText,
  secondaryCtaHref,
  telemetryTag = "Operational Target • ISO 14064 Aligned",
}: SubpageHeroProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const threshold = 180;
      const progress = Math.min(1, Math.max(0, scrollY / threshold));

      const isMobile = window.innerWidth <= 1024;
      const initialMargin = isMobile ? 10 : 14;
      const baseRadius = isMobile ? 20 : 28;

      const currentMargin = Math.max(0, initialMargin * (1 - progress));

      if (canvasRef.current) {
        canvasRef.current.style.setProperty("--subpage-canvas-margin", `${currentMargin.toFixed(1)}px`);
        canvasRef.current.style.setProperty("--subpage-canvas-radius", `${baseRadius}px`);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateScrollState();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section id="subpage-hero" ref={sectionRef} className="relative w-full p-0">
      {/* Framed Canvas matching Homepage Hero Aesthetics with Permanent Rounded Corners */}
      <div
        ref={canvasRef}
        className="subpage-frame-canvas relative flex flex-col justify-between text-white shadow-2xl bg-[#0e2219] rounded-[20px] lg:rounded-[28px] overflow-hidden"
      >
        {/* Background Image / Ambient Gradients */}
        {imageSrc ? (
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded-[inherit] scale-105 transition-transform duration-1000 ease-out animate-ken-burns"
              priority
            />
            {/* Dark nature-tech forest overlay with warm terracotta spotlight */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e2219]/95 via-[#0e2219]/75 to-[#0e2219]/55" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(224,100,37,0.22),_transparent_65%)]" />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e2219] via-[#0e2219]/90 to-[#0e2219]/80" />
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(45,122,84,0.4),_transparent_70%)] animate-float-1" />
            <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,_rgba(224,100,37,0.3),_transparent_70%)] animate-float-2" />
          </div>
        )}

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 max-w-[1524px] mx-auto">
          {/* Top Row: Breadcrumb Navigation & Real-Time Badge */}
          <div className="pt-16 sm:pt-20 md:pt-24 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-hero-1">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-white/60 flex-wrap"
            >
              <Link
                href="/"
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/95 font-medium">
                      {crumb.label}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </nav>

            {/* Industrial Telemetry Tag matching Homepage Hero */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/15 backdrop-blur-md font-mono text-[11px] uppercase tracking-wider text-white/90">
              <span className="w-2 h-2 rounded-full bg-[#ea6e2d] radar-dot" />
              <span>{telemetryTag}</span>
            </div>
          </div>

          {/* Main Headline Area */}
          <div className="my-auto py-8 md:py-12 animate-hero-2">
            {/* Category Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md font-mono text-xs uppercase tracking-wider text-white/90 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ea6e2d] radar-dot" />
              <span>{badge}</span>
            </div>

            {/* Large Display Typography */}
            <h1 className="font-sans font-light text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] tracking-tight leading-[1.05] text-white max-w-5xl">
              {title}{" "}
              {highlightedText && (
                <span className="italic font-normal shimmer-headline">
                  {highlightedText}
                </span>
              )}
            </h1>
          </div>

          {/* Bottom Area: Subtitle & Signature Buttons */}
          <div className="pt-8 border-t border-white/15 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div className="max-w-2xl animate-hero-3">
              <p className="font-sans text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-light">
                {description}
              </p>
            </div>

            {/* Action Buttons: Signature Notched Button (.u-btn--1) & Pill Button (.u-btn--3) */}
            <div className="flex items-center gap-4 flex-wrap flex-shrink-0 animate-hero-4">
              {primaryCtaHref && (
                <Link
                  href={primaryCtaHref}
                  className="u-btn--1"
                  aria-label={primaryCtaText}
                >
                  <span className="btn_label">
                    {primaryCtaText}
                    <div className="label_corner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="48"
                        fill="none"
                        viewBox="0 0 18 48"
                      >
                        <path
                          fill="currentColor"
                          d="M0 0h5.63c7.808 0 13.536 7.337 11.642 14.91l-6.09 24.359A11.527 11.527 0 0 1 0 48V0Z"
                        />
                      </svg>
                    </div>
                  </span>
                  <i className="btn_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="51"
                      height="48"
                      fill="none"
                      viewBox="0 0 51 48"
                    >
                      <path
                        fill="currentColor"
                        d="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z"
                      />
                    </svg>
                    <ArrowRight className="w-4 h-4 btn_icon_arrow" />
                  </i>
                </Link>
              )}

              {secondaryCtaHref && secondaryCtaText && (
                <Link
                  href={secondaryCtaHref}
                  className="u-btn--3"
                  data-label={secondaryCtaText}
                >
                  <span className="btn_label">{secondaryCtaText}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
