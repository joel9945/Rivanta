"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PILLARS = [
  {
    index: "01",
    tag: "Semiconductor & Clean Tech",
    title: "Green Silicon For Chips",
    badge: "9N Purity",
    headlinePrefix: "Engineering the future for",
    headlineHighlight: "clean innovation.",
    description:
      "RIVANTA pioneers ultra-pure 9N (99.9999999%) green silicon from circular agricultural biomass, delivering domestic strategic feedstock for semiconductor chips, microelectronics, and advanced photovoltaics.",
    image: "/images/hero-facility.png",
    alt: "RIVANTA Green Silicon & Advanced Clean Energy Infrastructure Facility",
  },
  {
    index: "02",
    tag: "Bio-Energy & Mobility",
    title: "Compressed Biogas (CBG)",
    badge: "Industrial Biomethane",
    headlinePrefix: "Powering green mobility with",
    headlineHighlight: "compressed biogas.",
    description:
      "RIVANTA powers industrial-scale anaerobic digestion and biomethane enrichment, transforming agricultural residues into premium commercial CBG to decarbonize heavy transport, city gas distribution, and industrial power grids.",
    image: "/images/biogas-plant-golden-hour.png",
    alt: "RIVANTA Biogas Industrial Refinery Plant at Golden Hour",
  },
  {
    index: "03",
    tag: "Aviation Decarbonization",
    title: "Sustainable Aviation Fuel (SAF)",
    badge: "Drop-in Bio-Fuel",
    headlinePrefix: "Decarbonizing global aviation with",
    headlineHighlight: "sustainable aviation fuel.",
    description:
      "RIVANTA refines next-generation synthetic drop-in SAF from renewable agricultural feedstocks, engineered to ASTM standards to slash lifecycle flight emissions by up to 80% across commercial aviation corridors.",
    image: "/images/golden-hour-saf-refinery.png",
    alt: "RIVANTA Golden Hour Renewable Fuel & SAF Refinery",
  },
];

interface HeroProps {
  onExploreVentures?: () => void;
}

export default function Hero({ onExploreVentures }: HeroProps = {}) {
  const [activePillar, setActivePillar] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % PILLARS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Smooth Scroll Expansion: expands canvas to touch screen edges as user scrolls down
  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const threshold = 160; // Complete edge touch within 160px of scroll
      const progress = Math.min(1, Math.max(0, scrollY / threshold));

      const isMobile = window.innerWidth <= 1024;
      const initialMargin = isMobile ? 8 : 12;
      const initialRadius = isMobile ? 18 : 24;
      const initialPt = 0;

      const currentMargin = Math.max(0, initialMargin * (1 - progress));
      const currentRadius = Math.max(0, initialRadius * (1 - progress));
      const currentPt = 0;

      if (heroRef.current) {
        heroRef.current.style.setProperty("--hero-canvas-margin", `${currentMargin.toFixed(1)}px`);
        heroRef.current.style.setProperty("--hero-canvas-radius", `${currentRadius.toFixed(1)}px`);
      }
      if (sectionRef.current) {
        sectionRef.current.style.paddingTop = "0px";
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
    <section id="hero" ref={sectionRef} className="relative w-full pt-0 transition-[padding] duration-200">
      {/* 100vh Framed Canvas that expands to touch screen edges on scroll */}
      <div
        ref={heroRef}
        className="hero-frame-canvas relative flex flex-col justify-between text-white shadow-2xl"
      >
        {/* Background Image Carousel with Smooth Cross-Fade Across All 3 Pillars */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {PILLARS.map((p, idx) => (
            <div
              key={p.index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activePillar === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="100vw"
                className={`object-cover transition-transform duration-[12000ms] ease-out ${
                  activePillar === idx ? "scale-110" : "scale-105"
                }`}
                priority
                loading="eager"
              />
            </div>
          ))}

          {/* Natural industrial dark evergreen vignette & subtle horizon illumination */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0e2219]/95 via-[#0e2219]/45 to-[#0e2219]/35 pointer-events-none" />
          <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_top_right,_rgba(224,100,37,0.22),_transparent_65%)] pointer-events-none" />
        </div>

        {/* Content Inner Container */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-[1524px] mx-auto">
          {/* Top Spacing to clear floating header */}
          <div className="pt-20 md:pt-24 flex items-center justify-end animate-hero-1">
            {/* Pillar Counter */}
            <div className="hidden sm:flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white/70">
              <span className="text-white font-medium text-sm">
                {PILLARS[activePillar].index}
              </span>
              <span className="w-8 h-[1px] bg-white/30"></span>
              <span>03</span>
            </div>
          </div>

          {/* Main Display Typography (Dynamic per Pillar with Smooth Transition, No Letter Clipping) */}
          <div className="my-auto py-8 animate-hero-2 min-h-[14rem] sm:min-h-[18rem] md:min-h-[22rem] flex items-center">
            <h1
              key={`headline-${activePillar}`}
              className="font-sans font-light tracking-[-0.02em] text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[1.08] sm:leading-[1.06] text-white max-w-[1100px] animate-in fade-in duration-700"
            >
              {PILLARS[activePillar].headlinePrefix}{" "}
              <span className="font-normal italic text-[#f9a65c] inline-block pr-2 py-0.5">
                {PILLARS[activePillar].headlineHighlight}
              </span>
            </h1>
          </div>

          {/* Bottom Area: Dynamic Pillar Description + Signature Integrated Bio Notched Button */}
          <div className="pt-6 border-t border-white/15 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div className="max-w-xl animate-hero-3">
              {/* Category Tag & Badge */}
              <div className="flex items-center gap-2 mb-2 font-mono text-[11px] uppercase tracking-wider text-[#f9a65c]">
                <span>{PILLARS[activePillar].tag}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea6e2d]" />
                <span className="text-white/60">{PILLARS[activePillar].badge}</span>
              </div>

              {/* Dynamic Description with smooth transition */}
              <p
                key={`desc-${activePillar}`}
                className="font-sans text-base md:text-lg text-white/90 leading-relaxed font-light min-h-[4.5rem] animate-in fade-in duration-500"
              >
                {PILLARS[activePillar].description}
              </p>

              {/* Dynamic Pillar Navigation Highlight */}
              <div className="mt-4 flex items-center gap-2">
                {PILLARS.map((p, idx) => (
                  <button
                    key={p.index}
                    type="button"
                    onClick={() => setActivePillar(idx)}
                    className={`h-2 rounded-full transition-all duration-500 cursor-pointer border-0 ${
                      activePillar === idx
                        ? "w-12 bg-[#ea6e2d]"
                        : "w-2.5 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Select pillar ${p.index}: ${p.title}`}
                  />
                ))}
                <span
                  key={`title-${activePillar}`}
                  className="ml-3 font-mono text-xs text-white/80 font-medium truncate animate-in fade-in duration-300"
                >
                  {PILLARS[activePillar].title}
                </span>
              </div>
            </div>

            {/* Integrated Bio's Exact Signature Notched Cutout Button (.u-btn--1) */}
            <div className="flex-shrink-0 animate-hero-4">
              <Link
                href="#ventures"
                onClick={onExploreVentures}
                className="u-btn--1"
                aria-label="Discover our ventures"
              >
                <span className="btn_label">
                  Discover our ventures
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
