"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

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
    title: "Sustained by agricultural residues.",
    desc: "Rice husk, straw, and sugarcane residues form the feedstock foundation for Rivanta's integrated bio-refining infrastructure.",
    short: "Agricultural residues",
    img: "/images/gallery/01-raw-materials.jpg",
    href: "/feedstock",
  },
  {
    id: "02",
    category: "02 / RENEWABLE GAS",
    title: "Converting organic matter into CBG.",
    desc: "Industrial anaerobic digestion and gas upgrading delivering commercial-grade Compressed Biogas and nutrient-rich bio-fertilizer.",
    short: "Compressed biogas",
    img: "/images/gallery/02-renewable-gas.jpg",
    href: "/cbg",
  },
  {
    id: "03",
    category: "03 / ENERGY RECOVERY",
    title: "Capturing thermodynamic plant synergy.",
    desc: "Integrated closed-loop cogeneration and heat recovery engineered to maximize thermal efficiency across manufacturing streams.",
    short: "Energy recovery",
    img: "/images/gallery/03-energy-integration.jpg",
    href: "/projects",
  },
  {
    id: "04",
    category: "04 / ADVANCED MATERIALS",
    title: "High-purity bio-silica & green silicon.",
    desc: "Specialized extraction refining biogenic silica into high-purity industrial materials and 6N green silicon (99.999%).",
    short: "Bio-silica & silicon",
    img: "/images/gallery/04-bio-silica.jpg",
    href: "/bio-silica",
  },
  {
    id: "05",
    category: "05 / CLEAN FUELS",
    title: "Drop-in sustainable aviation fuel.",
    desc: "Synthetic paraffinic kerosene pathways engineered to ASTM D7566 standards for direct blending into commercial aviation infrastructure.",
    short: "Aviation fuel (SAF)",
    img: "/images/gallery/05-future-fuels.jpg",
    href: "/saf",
  },
  {
    id: "06",
    category: "06 / CIRCULAR CO-PRODUCTS",
    title: "Zero-waste circular mineral products.",
    desc: "Biochar and mineral coproducts returning organic carbon to agricultural soils and industrial supply chains.",
    short: "Biochar & minerals",
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
      aria-label="Integrated Bio-Value Chain"
    >
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 md:mb-10 border-t border-[#13271e]/15 pt-7">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e06425] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#737d71] font-bold">
                04 / VALUE CHAIN & INFRASTRUCTURE
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
            An overview of the advanced processes, refining streams, and
            high-value materials engineered across Rivanta&apos;s
            bio-manufacturing ecosystem.
          </p>
        </div>

        {/* Interactive Main Stage (Expansive Cinematic Dimension) */}
        <div className="relative h-[600px] sm:h-[680px] md:h-[760px] lg:h-[820px] xl:h-[860px] rounded-2xl md:rounded-[32px] overflow-hidden bg-[#25352e] shadow-2xl">
          {/* Layered Crossfading Photos */}
          {SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                idx === current
                  ? "opacity-100 z-0"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
                sizes="(max-width: 1680px) 100vw, 1680px"
              />
            </div>
          ))}

          {/* Cinematic Dark Gradient Shade — concentrated only at the base so top 60% of image is completely clear */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#081512]/95 via-[#081512]/35 via-45% to-transparent pointer-events-none" />

          {/* Top Info Bar */}
          <div className="absolute left-6 right-6 sm:left-10 sm:right-10 md:left-12 md:right-12 top-6 sm:top-8 md:top-10 z-20 flex justify-between items-center text-[#f4f3eb] font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em]">
            <span className="drop-shadow-md">Rivanta Green / Industrial Ecosystem</span>
            <span className="px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 shadow-md">
              {String(current + 1).padStart(2, "0")} / 06
            </span>
          </div>

          {/* Bottom Active Information & Navigation Controls */}
          <div className="absolute left-6 right-6 sm:left-10 sm:right-10 md:left-12 md:right-12 bottom-6 sm:bottom-10 md:bottom-12 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-10">
            {/* Active Workstream Text Callout */}
            <div className="flex-1 max-w-2xl text-white">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#d6b97a] font-bold block mb-2">
                {activeSlide.category}
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-normal leading-[1.12] tracking-[-0.03em] mb-2 sm:mb-3 drop-shadow-md">
                {activeSlide.title}
              </h3>
              <p className="font-sans text-sm sm:text-base md:text-lg text-[#e9e9e5] font-light leading-relaxed max-w-xl">
                {activeSlide.desc}
              </p>
              <div className="mt-5 sm:mt-6">
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
            <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous workstream"
                className="w-12 h-12 rounded-2xl border border-white/40 hover:border-white bg-black/30 hover:bg-white text-white hover:text-[#18251f] backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 shadow-md"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next workstream"
                className="w-12 h-12 rounded-2xl border border-white/40 hover:border-white bg-black/30 hover:bg-white text-white hover:text-[#18251f] backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 shadow-md"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Track / Rail (6 Workstream Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 mt-5 sm:mt-6">
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
                  className={`relative h-28 sm:h-32 md:h-36 rounded-2xl overflow-hidden bg-[#78877e] transition-all duration-300 ${
                    isActive
                      ? "ring-2 ring-[#bca16b] shadow-xl ring-offset-2 ring-offset-[#f7f7f3] scale-[1.02]"
                      : "group-hover:scale-[1.02] shadow-sm"
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
                <div className="flex items-baseline gap-2 mt-3">
                  <span className="font-mono text-xs text-[#9aa096] font-semibold">
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
      </div>
    </section>
  );
}
