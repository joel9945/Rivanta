"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PillarItem {
  readonly index: string;
  readonly tag: string;
  readonly title: string;
  readonly badge: string;
  readonly line1: string;
  readonly line2Prefix: string;
  readonly line2Highlight: string;
  readonly fontSizeClass: string;
  readonly description: string;
  readonly image: string;
  readonly alt: string;
}

const PILLARS: readonly PillarItem[] = [
  {
    index: "01",
    tag: "Diversified Industrial Enterprise",
    title: "Corporate Vision",
    badge: "National Purpose",
    line1: "Building Industrial Value",
    line2Prefix: "From ",
    line2Highlight: "India's Resources.",
    fontSizeClass: "text-[1.85rem] xs:text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[5.25rem] xl:text-[5.75rem]",
    description:
      "Developing integrated industrial initiatives across bio-silica, compressed biogas, sustainable aviation fuel and biomass valorisation in India.",
    image: "/images/hero-facility.png",
    alt: "Rivanta Green Industrial Development Facility Concept",
  },
  {
    index: "02",
    tag: "Domestic Manufacturing",
    title: "Bio-Silica & Silicon",
    badge: "Silicon & Biogenic Materials",
    line1: "Engineering Bio-Silica &",
    line2Prefix: "Green ",
    line2Highlight: "Silicon.",
    fontSizeClass: "text-[1.85rem] xs:text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[5.25rem] xl:text-[5.75rem]",
    description:
      "Developing high-purity biogenic silica and evaluating downstream green silicon materials to strengthen domestic manufacturing and clean technology supply chains.",
    image: "/images/green-silicon-refinery.jpg",
    alt: "Rivanta Biogenic Silica & Green Silicon Development Concept",
  },
  {
    index: "03",
    tag: "Clean Energy Transition",
    title: "Compressed Biogas",
    badge: "Commercial Biomethane",
    line1: "Powering Green Mobility",
    line2Prefix: "With ",
    line2Highlight: "Compressed Biogas.",
    fontSizeClass: "text-[1.85rem] xs:text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[5.25rem] xl:text-[5.75rem]",
    description:
      "Developing commercial anaerobic digestion and biomethane enrichment facilities to convert agricultural residues into clean Compressed Biogas for transportation and industrial grids.",
    image: "/images/biogas-plant-golden-hour.png",
    alt: "Rivanta Biogas Industrial Processing Concept",
  },
  {
    index: "04",
    tag: "Aviation Decarbonization",
    title: "Sustainable Aviation Fuels",
    badge: "Strategic Development",
    line1: "Exploring The Future Of",
    line2Prefix: "Clean ",
    line2Highlight: "Aviation Fuels.",
    fontSizeClass: "text-[1.65rem] xs:text-[1.95rem] sm:text-4xl md:text-[3.25rem] lg:text-[4.15rem] xl:text-[4.65rem]",
    description:
      "Evaluating sustainable aviation fuel pathways from agricultural residues to support long-term decarbonization across domestic and international aviation corridors.",
    image: "/images/golden-hour-saf-refinery.png",
    alt: "Rivanta Renewable Fuels Development Concept",
  },
];

interface HeroProps {
  onExploreVentures?: () => void;
}

export default function Hero({ onExploreVentures }: HeroProps = {}) {
  const [activePillar, setActivePillar] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % PILLARS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative w-full p-0">
      {/* 100vh Framed Canvas with Permanent Rounded Corners on Top and Bottom */}
      <div
        className="hero-frame-canvas relative flex flex-col justify-between text-white shadow-2xl rounded-[20px] lg:rounded-[28px] overflow-hidden"
      >
        {/* Background Image Carousel with Smooth Cross-Fade Across All 3 Pillars */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
          {PILLARS.map((p, idx) => (
            <div
              key={p.index}
              className={`absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-1000 ease-in-out ${
                activePillar === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="100vw"
                className={`object-cover rounded-[inherit] transition-transform duration-[12000ms] ease-out ${
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
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-5 sm:p-8 md:p-12 lg:p-16 max-w-[1524px] mx-auto">
          {/* Top Spacing to clear floating header */}
          <div className="pt-16 sm:pt-20 md:pt-24 flex items-center justify-end animate-hero-1">
            {/* Pillar Counter */}
            <div className="hidden sm:flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white/70">
              <span className="text-white font-medium text-sm">
                {PILLARS[activePillar].index}
              </span>
              <span className="w-8 h-[1px] bg-white/30"></span>
              <span>{String(PILLARS.length).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Main Display Typography (Dynamic per Pillar with Smooth Transition, No Letter Clipping) */}
          <div className="my-auto py-4 sm:py-8 animate-hero-2 min-h-[9.5rem] sm:min-h-[14rem] md:min-h-[20rem] flex items-center">
            <h1
              key={`headline-${activePillar}`}
              className={`font-sans font-light tracking-[-0.02em] leading-[1.08] sm:leading-[1.06] text-white max-w-[1360px] w-full animate-in fade-in duration-700 ${PILLARS[activePillar].fontSizeClass}`}
            >
              <span className="block">
                {PILLARS[activePillar].line1}
              </span>
              <span className="block">
                {PILLARS[activePillar].line2Prefix}
                <span className="font-bold text-[#f9a65c] inline pr-2 py-0.5">
                  {PILLARS[activePillar].line2Highlight}
                </span>
              </span>
            </h1>
          </div>

          {/* Bottom Area: Dynamic Pillar Description + Signature Integrated Bio Notched Button */}
          <div className="pt-5 sm:pt-6 border-t border-white/15 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
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
                className="font-sans text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-light min-h-[3.75rem] sm:min-h-[4.5rem] animate-in fade-in duration-500"
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
                  Discover Our Ventures
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
