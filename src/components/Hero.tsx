"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PILLARS = [
  {
    index: "01",
    title: "Green Silicon For Chips",
    subtitle:
      "Ultra-high purity 9N (99.9999999%) green silicon engineered for semiconductor chips, microelectronics, and clean tech.",
  },
  {
    index: "02",
    title: "Compressed Biogas (CBG)",
    subtitle:
      "Anaerobic biomethane enrichment supplying clean fuel for industrial off-take and transport.",
  },
  {
    index: "03",
    title: "Sustainable Aviation Fuel (SAF)",
    subtitle:
      "Synthetic drop-in hydrocarbon pathways advancing the decarbonization of commercial aviation.",
  },
];

interface HeroProps {
  onExploreVentures?: () => void;
}

export default function Hero({ onExploreVentures }: HeroProps = {}) {
  const [activePillar, setActivePillar] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % PILLARS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full pt-2 md:pt-3">
      {/* 100vh Framed Canvas matching Integrated Bio's layout */}
      <div className="hero-frame-canvas relative flex flex-col justify-between text-white shadow-2xl">
        {/* Background Image with Dark Forest & Warm Amber Horizon Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero-facility.jpg"
            alt="Rivanta Clean Energy Facility"
            fill
            className="object-cover scale-105 transition-transform duration-1000 ease-out animate-ken-burns"
            priority
          />
          {/* Subtle nature-tech dark green vignette & warm bottom gradient (No neon!) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e2219]/95 via-[#0e2219]/45 to-[#0e2219]/35" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(224,100,37,0.28),_transparent_65%)]" />
          {/* Animated floating luminous backdrops */}
          <div className="absolute -top-24 -right-24 w-[450px] h-[450px] rounded-full bg-[#ea6e2d]/25 blur-3xl pointer-events-none animate-float-1" />
          <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] rounded-full bg-[#2d7a54]/30 blur-3xl pointer-events-none animate-float-2" />
        </div>

        {/* Content Inner Container */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-[1524px] mx-auto">
          {/* Top Spacing to clear floating header */}
          <div className="pt-20 md:pt-24 flex items-center justify-between animate-hero-1">
            {/* Tagline Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/15 backdrop-blur-md font-mono text-[11px] uppercase tracking-wider text-white/90">
              <span className="w-2 h-2 rounded-full bg-[#ea6e2d] radar-dot"></span>
              <span>Green Innovative Venture Private Limited</span>
            </div>

            {/* Pillar Counter */}
            <div className="hidden sm:flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white/70">
              <span className="text-white font-medium text-sm">
                {PILLARS[activePillar].index}
              </span>
              <span className="w-8 h-[1px] bg-white/30"></span>
              <span>03</span>
            </div>
          </div>

          {/* Main Display Typography */}
          <div className="my-auto py-8 animate-hero-2">
            <h1 className="font-sans font-light tracking-[-0.035em] text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[0.98] text-white max-w-[1100px]">
              Engineering the future of{" "}
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#f9a65c] shimmer-headline">
                clean innovation.
              </span>
            </h1>
          </div>

          {/* Bottom Area: Subtitle + Signature Integrated Bio Notched Button */}
          <div className="pt-6 border-t border-white/15 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div className="max-w-xl animate-hero-3">
              <p className="font-sans text-base md:text-lg text-white/85 leading-relaxed font-light">
                Developing an integrated biomass-to-value manufacturing ecosystem: producing ultra-pure Green Silicon For Chips (9N purity), alongside compressed biogas and sustainable aviation fuel pathways.
              </p>

              {/* Dynamic Pillar Highlight */}
              <div className="mt-4 flex items-center gap-2">
                {PILLARS.map((p, idx) => (
                  <button
                    key={p.index}
                    type="button"
                    onClick={() => setActivePillar(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                      activePillar === idx
                        ? "w-10 bg-[#ea6e2d]"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Select pillar ${p.index}`}
                  />
                ))}
                <span className="ml-3 font-mono text-xs text-white/60 truncate">
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
