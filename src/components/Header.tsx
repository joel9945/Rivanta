"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, X, Sparkles, Fuel, Flame, Cpu } from "lucide-react";
import { useModal } from "@/context/ModalContext";

interface HeaderProps {
  onOpenPartnerModal?: () => void;
}

export default function Header({ onOpenPartnerModal }: HeaderProps = {}) {
  const modalContext = useModal();
  const handleOpenPartner = onOpenPartnerModal || modalContext.openPartnerModal;

  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / max) * 100)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className="fixed top-3 md:top-5 left-0 right-0 z-50 transition-all duration-500 pointer-events-none px-3 sm:px-6 md:px-8"
      >
        <div className="max-w-[1524px] mx-auto flex items-center justify-between">
          {/* Logo Capsule with Orange Transparent Phoenix Rule */}
          <div className="pointer-events-auto flex items-center gap-3">
            <Link
              href="/"
              className="logo-orange-glass-capsule group flex items-center gap-3"
              aria-label="RIVANTA - Green Innovative Venture Private Limited"
            >
              {/* Phoenix Bird Emblem in Orange Transparent Mode */}
              <div className="relative w-8 h-8 md:w-9 md:h-9 flex-shrink-0 drop-shadow-[0_2px_8px_rgba(224,100,37,0.35)]">
                <Image
                  src="/logo/logo-orange-transparent.svg"
                  alt="Rivanta Phoenix Emblem"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain filter transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Wordmark & Tagline */}
              <div className="flex flex-col text-left">
                <span className="font-sans font-bold tracking-tight text-[15px] md:text-[17px] leading-none text-[#13271e] group-hover:text-[#e06425] transition-colors duration-300">
                  RIVANTA
                </span>
                <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-wider text-[#e06425] font-medium leading-tight mt-0.5">
                  Green Innovative Venture
                </span>
              </div>
            </Link>
          </div>

          {/* Center / Right Floating Navigation Capsule */}
          <div className="pointer-events-auto flex items-center gap-2">
            <nav
              className={`relative hidden xl:flex items-center gap-1 bg-white/85 backdrop-blur-xl border border-[#13271e]/8 rounded-xl p-1.5 shadow-sm transition-all duration-300 overflow-hidden ${
                scrolled ? "bg-white/95 shadow-md" : ""
              }`}
            >
              {/* Fluid Liquid Water Flow Indicator on Capsule Edge */}
              <div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#ea6e2d] via-[#e06425] to-[#2d7a54] transition-all duration-150 pointer-events-none rounded-full"
                style={{ width: `${scrollProgress}%` }}
              />
              <Link
                href="/about"
                className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-[#13271e]/80 hover:text-[#13271e] hover:bg-[#13271e]/5 transition-all"
              >
                About
              </Link>

              {/* Manufacturing Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setSolutionsDropdownOpen((prev) => !prev)}
                  onMouseEnter={() => setSolutionsDropdownOpen(true)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer ${
                    solutionsDropdownOpen
                      ? "text-[#e06425] bg-[#13271e]/5"
                      : "text-[#13271e]/80 hover:text-[#13271e] hover:bg-[#13271e]/5"
                  }`}
                  aria-expanded={solutionsDropdownOpen}
                >
                  <span>Manufacturing</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      solutionsDropdownOpen ? "rotate-180 text-[#e06425]" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu Panel */}
                {solutionsDropdownOpen && (
                  <div
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl border border-[#13271e]/10 shadow-xl p-2.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50 text-left"
                  >
                    <Link
                      href="/green-silicon"
                      onClick={() => setSolutionsDropdownOpen(false)}
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#f6f8f6] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#fae9dc] text-[#e06425] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-sans font-medium text-xs text-[#13271e] group-hover:text-[#e06425] transition-colors flex items-center gap-1.5">
                          <span>Green Silicon For Chips</span>
                          <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 rounded bg-[#e06425]/10 text-[#e06425] font-semibold">
                            9N Purity
                          </span>
                        </div>
                        <p className="font-sans text-[11px] text-[#13271e]/60 font-light mt-0.5 leading-tight">
                          Ultra-high purity (9N / 99.9999999%) green silicon for semiconductor chips.
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/cbg"
                      onClick={() => setSolutionsDropdownOpen(false)}
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#f6f8f6] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#d6e8dc] text-[#2d7a54] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-sans font-medium text-xs text-[#13271e] group-hover:text-[#e06425] transition-colors">
                          Compressed Biogas (CBG)
                        </div>
                        <p className="font-sans text-[11px] text-[#13271e]/60 font-light mt-0.5 leading-tight">
                          Anaerobic biomethane enrichment for clean mobility and grid.
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/saf"
                      onClick={() => setSolutionsDropdownOpen(false)}
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#f6f8f6] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#e1e4de] text-[#13271e] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Fuel className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-sans font-medium text-xs text-[#13271e] group-hover:text-[#e06425] transition-colors">
                          Sustainable Aviation Fuel (SAF)
                        </div>
                        <p className="font-sans text-[11px] text-[#13271e]/60 font-light mt-0.5 leading-tight">
                          Synthetic drop-in hydrocarbons for aviation decarbonization.
                        </p>
                      </div>
                    </Link>

                    <div className="border-t border-[#13271e]/6 mt-1 pt-1">
                      <Link
                        href="/technology"
                        onClick={() => setSolutionsDropdownOpen(false)}
                        className="group flex items-center gap-2 p-2 rounded-lg hover:bg-[#f6f8f6] font-mono text-[11px] uppercase tracking-wider text-[#13271e]/70 hover:text-[#e06425] transition-colors"
                      >
                        <Cpu className="w-3.5 h-3.5 text-[#e06425]" />
                        <span>Process Technology Flow</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/technology"
                className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-[#13271e]/80 hover:text-[#13271e] hover:bg-[#13271e]/5 transition-all"
              >
                Technology
              </Link>
              <Link
                href="/feedstock"
                className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-[#13271e]/80 hover:text-[#13271e] hover:bg-[#13271e]/5 transition-all"
              >
                Feedstock
              </Link>
              <Link
                href="/sustainability"
                className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-[#13271e]/80 hover:text-[#13271e] hover:bg-[#13271e]/5 transition-all"
              >
                Sustainability
              </Link>
              <Link
                href="/projects"
                className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-[#13271e]/80 hover:text-[#13271e] hover:bg-[#13271e]/5 transition-all"
              >
                Projects
              </Link>
              <Link
                href="/investors"
                className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-[#13271e]/80 hover:text-[#13271e] hover:bg-[#13271e]/5 transition-all"
              >
                Investors
              </Link>
              <Link
                href="/newsroom"
                className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-[#13271e]/80 hover:text-[#13271e] hover:bg-[#13271e]/5 transition-all"
              >
                News
              </Link>
              <Link
                href="/contact"
                className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-[#13271e]/80 hover:text-[#13271e] hover:bg-[#13271e]/5 transition-all"
              >
                Contact
              </Link>
            </nav>

            {/* Signature Pill Action Button (.u-btn--3) */}
            <button
              type="button"
              onClick={handleOpenPartner}
              className="u-btn--3 hidden sm:inline-flex cursor-pointer"
              data-label="Work with us"
              aria-label="Work with us - Open project inquiry"
            >
              <span className="btn_label">Work with us</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden flex flex-col justify-center items-center w-11 h-11 rounded-xl bg-white/85 backdrop-blur-md border border-[#13271e]/10 shadow-sm text-[#13271e] hover:bg-white transition-colors cursor-pointer"
              aria-label="Open mobile navigation menu"
            >
              <span className="w-5 h-[1.5px] bg-[#13271e] mb-1"></span>
              <span className="w-5 h-[1.5px] bg-[#13271e]"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#13271e] text-white flex flex-col p-6 sm:p-8 overflow-y-auto animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <Image
                src="/logo/logo-orange-transparent.svg"
                alt="Rivanta"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="font-sans font-bold tracking-tight text-white text-lg">
                RIVANTA GREEN
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Grouped Navigation Links */}
          <div className="flex flex-col py-8 space-y-8 flex-1">
            {/* Group 1: Strategic Manufacturing */}
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold block mb-3">
                Flagship & Energy Manufacturing
              </span>
              <div className="grid grid-cols-1 gap-2.5 text-left">
                <Link
                  href="/green-silicon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-xl font-light hover:text-[#ea6e2d] transition-colors flex items-center justify-between py-1"
                >
                  <span>Green Silicon For Chips</span>
                  <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#e06425] text-white">
                    9N Purity
                  </span>
                </Link>
                <Link
                  href="/cbg"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-xl font-light hover:text-[#ea6e2d] transition-colors py-1"
                >
                  Compressed Biogas (CBG)
                </Link>
                <Link
                  href="/saf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-xl font-light hover:text-[#ea6e2d] transition-colors py-1"
                >
                  Sustainable Aviation Fuel (SAF)
                </Link>
                <Link
                  href="/technology"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-xl font-light hover:text-[#ea6e2d] transition-colors py-1"
                >
                  Technology & Process Flow
                </Link>
              </div>
            </div>

            {/* Group 2: Operations & Impact */}
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold block mb-3">
                Operations & Sustainability
              </span>
              <div className="grid grid-cols-1 gap-2.5 text-left">
                <Link
                  href="/feedstock"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-lg font-light text-white/90 hover:text-[#ea6e2d] transition-colors"
                >
                  Circular Economy & Feedstock
                </Link>
                <Link
                  href="/sustainability"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-lg font-light text-white/90 hover:text-[#ea6e2d] transition-colors"
                >
                  Sustainability & Impact
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-lg font-light text-white/90 hover:text-[#ea6e2d] transition-colors"
                >
                  Project Infrastructure
                </Link>
              </div>
            </div>

            {/* Group 3: Corporate & Engagement */}
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold block mb-3">
                Corporate Governance & Enquiries
              </span>
              <div className="grid grid-cols-2 gap-2.5 text-left">
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-base font-light text-white/80 hover:text-[#ea6e2d] transition-colors"
                >
                  About Rivanta
                </Link>
                <Link
                  href="/investors"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-base font-light text-white/80 hover:text-[#ea6e2d] transition-colors"
                >
                  Investors
                </Link>
                <Link
                  href="/newsroom"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-base font-light text-white/80 hover:text-[#ea6e2d] transition-colors"
                >
                  News & Insights
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-base font-light text-white/80 hover:text-[#ea6e2d] transition-colors"
                >
                  Official Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-white/10 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenPartner();
              }}
              className="w-full py-4 rounded-xl bg-[#e06425] hover:bg-[#ea6e2d] text-white font-mono uppercase tracking-wider text-sm font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <span>Work with us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-white/50">
              contact@rivantagreen.com
            </span>
          </div>
        </div>
      )}
    </>
  );
}
