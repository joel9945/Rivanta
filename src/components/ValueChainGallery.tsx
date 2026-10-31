"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

interface GallerySlide {
  id: string;
  category: string;
  title: string;
  desc: string;
  short: string;
  img: string;
  href: string;
}

const SLIDES: GallerySlide[] = [
  {
    id: "01",
    category: "01 / RAW MATERIALS",
    title: "It starts with agricultural residues.",
    desc: "Rice husk, straw and sugarcane residues form the foundation of our proposed biorefinery.",
    short: "Agricultural residues",
    img: "/images/gallery/01-raw-materials.jpg",
    href: "/feedstock",
  },
  {
    id: "02",
    category: "02 / RENEWABLE GAS",
    title: "Turning organic matter into CBG.",
    desc: "Developing biomass conversion pathways for compressed biogas and useful co-products.",
    short: "Compressed biogas",
    img: "/images/gallery/02-renewable-gas.jpg",
    href: "/cbg",
  },
  {
    id: "03",
    category: "03 / ENERGY INTEGRATION",
    title: "Recovering value from process energy.",
    desc: "Integrating controlled thermal processing and energy recovery into the wider plant design.",
    short: "Energy recovery",
    img: "/images/gallery/03-energy-integration.jpg",
    href: "/projects",
  },
  {
    id: "04",
    category: "04 / ADVANCED MATERIALS",
    title: "From rice husk ash to bio-silica.",
    desc: "Exploring high-value silica production from processed agricultural ash.",
    short: "Bio-silica",
    img: "/images/gallery/04-bio-silica.jpg",
    href: "/bio-silica",
  },
  {
    id: "05",
    category: "05 / FUTURE FUELS",
    title: "Developing pathways for cleaner flight.",
    desc: "Advancing a sustainable aviation fuel workstream within our integrated platform.",
    short: "Aviation fuel",
    img: "/images/gallery/05-future-fuels.jpg",
    href: "/saf",
  },
  {
    id: "06",
    category: "06 / CIRCULAR PRODUCTS",
    title: "Finding value in the remaining material.",
    desc: "Assessing biochar and soil-product applications for suitable residual streams.",
    short: "Biochar & soil products",
    img: "/images/gallery/06-circular-products.jpg",
    href: "/sustainability",
  },
];

export default function ValueChainGallery() {
  const [current, setCurrent] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  const activeSlide = SLIDES[current];

  return (
    <section
      id="value-chain"
      className="py-20 md:py-32 bg-[#f7f7f3] border-t border-[#13271e]/10 relative z-10"
      aria-label="Planned Value Chain & Technologies"
    >
      <div className="u-container u-container--1 u-container--pad">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-10 md:mb-12 border-t border-[#13271e]/15 pt-7">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e06425] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#737d71] font-bold">
                04 / Inside Rivanta / Planned value chain
              </span>
            </div>
            <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.04em] leading-[1.08] text-[#18251f] max-w-3xl">
              From agricultural residue{" "}
              <span className="font-normal italic text-[#18251f]">
                to industrial value.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-[#687168] leading-relaxed max-w-sm font-light">
            A closer look at the processes, technologies and industrial outputs
            envisioned for Rivanta&apos;s integrated bio-manufacturing ecosystem.
          </p>
        </div>

        {/* Interactive Main Stage */}
        <div className="relative h-[480px] sm:h-[520px] md:h-[560px] lg:h-[580px] rounded-2xl md:rounded-3xl overflow-hidden bg-[#25352e] shadow-xl">
          {/* Layered Crossfading Photos */}
          {SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                idx === current ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1350px"
              />
            </div>
          ))}

          {/* Cinematic Dark Gradient Shade */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#081512]/95 via-[#081512]/40 to-[#081512]/15 pointer-events-none" />

          {/* Top Info Bar */}
          <div className="absolute left-6 right-6 sm:left-10 sm:right-10 top-6 sm:top-8 z-20 flex justify-between items-center text-[#f4f3eb] font-mono text-[11px] font-semibold uppercase tracking-[0.15em]">
            <span>Rivanta Green / Technology portfolio</span>
            <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
              {String(current + 1).padStart(2, "0")} / 06
            </span>
          </div>

          {/* Bottom Active Information & Navigation Controls */}
          <div className="absolute left-6 right-6 sm:left-10 sm:right-10 bottom-6 sm:bottom-10 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-10">
            {/* Active Workstream Text Callout */}
            <div className="flex-1 max-w-2xl text-white">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#d6b97a] font-bold block mb-2">
                {activeSlide.category}
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-normal leading-[1.12] tracking-[-0.03em] mb-2 sm:mb-3">
                {activeSlide.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#e9e9e5] font-light leading-relaxed max-w-xl">
                {activeSlide.desc}
              </p>
              <div className="mt-4 sm:mt-5">
                <Link
                  href={activeSlide.href}
                  className="group inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm text-white font-medium border-b border-[#a5b3aa] pb-0.5 hover:border-[#d6b97a] hover:text-[#d6b97a] transition-all"
                >
                  <span>Explore this workstream</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Stage Left/Right Tactile Controls */}
            <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous workstream"
                className="w-11 h-11 rounded-xl border border-white/40 hover:border-white bg-white/5 hover:bg-white text-white hover:text-[#18251f] flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next workstream"
                className="w-11 h-11 rounded-xl border border-white/40 hover:border-white bg-white/5 hover:bg-white text-white hover:text-[#18251f] flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Track / Rail (6 Workstream Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-4 sm:mt-5">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrent(idx)}
                className={`text-left transition-all duration-300 group cursor-pointer ${
                  isActive ? "opacity-100" : "opacity-65 hover:opacity-90"
                }`}
                aria-label={`Go to slide ${idx + 1}: ${slide.short}`}
              >
                {/* Thumbnail Image Box */}
                <div
                  className={`relative h-20 sm:h-24 md:h-26 rounded-xl overflow-hidden bg-[#78877e] transition-all duration-300 ${
                    isActive
                      ? "ring-2 ring-[#bca16b] shadow-md ring-offset-2 ring-offset-[#f7f7f3]"
                      : "group-hover:scale-[1.02]"
                  }`}
                >
                  <Image
                    src={slide.img}
                    alt={slide.short}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  {isActive && (
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-[#c4aa72]" />
                  )}
                </div>

                {/* Number & Short Label */}
                <div className="flex items-baseline gap-2 mt-2.5">
                  <span className="font-mono text-[11px] text-[#9aa096] font-semibold">
                    {slide.id}
                  </span>
                  <span
                    className={`font-sans text-xs sm:text-sm font-semibold leading-tight line-clamp-1 transition-colors ${
                      isActive ? "text-[#18251f]" : "text-[#788075]"
                    }`}
                  >
                    {slide.short}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Clarifying Disclaimer Footnote */}
        <p className="font-sans text-[11px] sm:text-xs text-[#838982] mt-6 md:mt-8 font-light leading-relaxed">
          * Planned industrial workstreams within our integrated ecosystem evaluation. Photography reflects representative process environments and technology directions.
        </p>
      </div>
    </section>
  );
}
