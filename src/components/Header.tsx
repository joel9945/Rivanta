"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  X,
} from "lucide-react";

interface HeaderProps {
  onOpenPartnerModal?: () => void;
}

export default function Header({ onOpenPartnerModal }: HeaderProps = {}) {
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"manufacturing" | "company" | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown and drawer upon route transition
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const heroEl =
        document.getElementById("hero") ||
        document.getElementById("subpage-hero");

      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        // The navbar remains transparent while the hero image/section is visible.
        // It only transitions to the solid white frosted state once the hero scrolls completely past the header (~85px).
        setScrolled(rect.bottom <= 85);
      } else {
        setScrolled(window.scrollY > 85);
      }
    };

    handleScroll();
    const rafId = requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Also sync with smooth-scroll (Lenis) if available
    const win = typeof window !== "undefined" ? (window as unknown as { lenis?: { on?: (event: string, cb: () => void) => void; off?: (event: string, cb: () => void) => void } }) : null;
    const lenis = win?.lenis;
    if (lenis && typeof lenis.on === "function") {
      lenis.on("scroll", handleScroll);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (lenis && typeof lenis.off === "function") {
        lenis.off("scroll", handleScroll);
      }
    };
  }, [pathname]);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);



  const isManufacturingActive =
    pathname?.startsWith("/green-silicon") ||
    pathname?.startsWith("/cbg") ||
    pathname?.startsWith("/saf") ||
    pathname?.startsWith("/technology");

  const isCompanyActive =
    pathname === "/about" ||
    pathname === "/investors";

  const isTransparent = !scrolled;

  const getNavLinkClass = (isActive: boolean) =>
    `px-3 xl:px-3.5 py-1.5 rounded-full font-sans text-[13px] xl:text-[13.5px] tracking-[-0.01em] transition-all duration-200 ${
      isActive
        ? isTransparent
          ? "text-[#f9a65c] bg-white/15 font-semibold"
          : "text-[#13271e] bg-[#13271e]/[0.08] font-semibold"
        : isTransparent
        ? "text-white/90 hover:text-white hover:bg-white/10 font-medium"
        : "text-[#13271e]/75 hover:text-[#13271e] hover:bg-[#13271e]/[0.04] font-medium"
    }`;

  const getDropdownTriggerClass = (isOpenOrActive: boolean) =>
    `px-3 xl:px-3.5 py-1.5 rounded-full font-sans text-[13px] xl:text-[13.5px] tracking-[-0.01em] flex items-center gap-1.5 transition-all duration-200 cursor-pointer border-0 ${
      isOpenOrActive
        ? isTransparent
          ? "text-[#f9a65c] bg-white/15 font-semibold"
          : "text-[#e06425] bg-[#e06425]/10 font-semibold"
        : isTransparent
        ? "text-white/90 hover:text-white hover:bg-white/10 font-medium"
        : "text-[#13271e]/75 hover:text-[#13271e] hover:bg-[#13271e]/[0.04] font-medium"
    }`;

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-0 outline-none ${
          isTransparent
            ? "bg-gradient-to-b from-black/80 via-black/45 to-transparent backdrop-blur-none shadow-none py-4 sm:py-5 lg:py-6"
            : "bg-white/95 backdrop-blur-2xl shadow-[0_4px_24px_rgba(19,39,30,0.07)] py-2.5 sm:py-3"
        }`}
      >
        <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 flex items-center justify-between">
          {/* 1. Left Zone: Brand Lockup */}
          <div className="flex-1 flex items-center justify-start min-w-0">
            <Link
              href="/"
              className="group flex items-center transition-all duration-300 flex-shrink-0 select-none ml-1 sm:ml-2 md:ml-4"
              aria-label="RIVANTA - Green Innovative Venture Private Limited"
            >
              <div
                className={`relative w-auto flex-shrink-0 flex items-center transition-all duration-300 ${
                  isTransparent
                    ? "h-14 sm:h-16 md:h-18 lg:h-20"
                    : "h-10 sm:h-11 md:h-12 lg:h-12.5"
                }`}
              >
                <Image
                  src={isTransparent ? "/logo/logo-brand-lockup-light.svg" : "/logo/logo-brand-lockup.svg"}
                  alt="RIVANTA - Green Innovative Venture Private Limited"
                  width={300}
                  height={72}
                  className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
                    isTransparent
                      ? "h-13 sm:h-15 md:h-17 lg:h-18 filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
                      : "h-9.5 sm:h-10.5 md:h-11.5 lg:h-12"
                  }`}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* 2. Middle Zone: Centered Desktop Navigation (Zero Borders, Tactile Pills, Active Indicators) */}
          <div className="flex-shrink-0 hidden lg:flex items-center justify-center">
            <nav
              ref={navRef}
              className="flex items-center gap-1 xl:gap-2"
              aria-label="Main Navigation"
            >
              {/* 1. Manufacturing Dropdown Console */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("manufacturing")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown((prev) =>
                      prev === "manufacturing" ? null : "manufacturing"
                    )
                  }
                  className={getDropdownTriggerClass(
                    activeDropdown === "manufacturing" || isManufacturingActive
                  )}
                  aria-expanded={activeDropdown === "manufacturing"}
                  aria-haspopup="true"
                >
                  <span>Manufacturing</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === "manufacturing"
                        ? isTransparent
                          ? "rotate-180 text-[#f9a65c]"
                          : "rotate-180 text-[#e06425]"
                        : isTransparent
                        ? "text-white/70"
                        : "text-[#13271e]/60"
                    }`}
                  />
                </button>

                {/* Sleek Minimalist Dropdown Panel (No AI-template clutter, zero borders) */}
                {activeDropdown === "manufacturing" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-68 rounded-2xl p-1.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50 text-left bg-white/95 backdrop-blur-2xl shadow-[0_12px_36px_rgba(19,39,30,0.12)] border-0">
                    <div className="flex flex-col gap-0.5">
                      <Link
                        href="/green-silicon"
                        onClick={() => setActiveDropdown(null)}
                        className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-150 ${
                          pathname === "/green-silicon"
                            ? "bg-[#fae9dc]/70 text-[#e06425]"
                            : "text-[#13271e] hover:bg-[#13271e]/[0.04] hover:text-[#e06425]"
                        }`}
                      >
                        <span className="font-sans text-[13px] font-medium tracking-tight">
                          Green Silicon
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#e06425]" />
                      </Link>

                      <Link
                        href="/cbg"
                        onClick={() => setActiveDropdown(null)}
                        className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-150 ${
                          pathname === "/cbg"
                            ? "bg-[#d6e8dc]/70 text-[#2d7a54]"
                            : "text-[#13271e] hover:bg-[#13271e]/[0.04] hover:text-[#e06425]"
                        }`}
                      >
                        <span className="font-sans text-[13px] font-medium tracking-tight">
                          Compressed Biogas (CBG)
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#e06425]" />
                      </Link>

                      <Link
                        href="/saf"
                        onClick={() => setActiveDropdown(null)}
                        className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-150 ${
                          pathname === "/saf"
                            ? "bg-[#e1e4de]/70 text-[#13271e]"
                            : "text-[#13271e] hover:bg-[#13271e]/[0.04] hover:text-[#e06425]"
                        }`}
                      >
                        <span className="font-sans text-[13px] font-medium tracking-tight">
                          Sustainable Aviation Fuel (SAF)
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#e06425]" />
                      </Link>

                      <div className="my-1 h-[1px] bg-[#13271e]/[0.06]" />

                      <Link
                        href="/technology"
                        onClick={() => setActiveDropdown(null)}
                        className={`group flex items-center justify-between px-3.5 py-2 rounded-xl transition-all duration-150 ${
                          pathname === "/technology"
                            ? "bg-[#fae9dc]/70 text-[#e06425]"
                            : "text-[#13271e]/75 hover:bg-[#13271e]/[0.04] hover:text-[#e06425]"
                        }`}
                      >
                        <span className="font-sans text-[12px] font-normal tracking-normal">
                          Process Technology Flow
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#e06425]" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Feedstock */}
              <Link
                href="/feedstock"
                className={getNavLinkClass(pathname === "/feedstock")}
              >
                Feedstock
              </Link>

              {/* 3. Sustainability */}
              <Link
                href="/sustainability"
                className={getNavLinkClass(pathname === "/sustainability")}
              >
                Sustainability
              </Link>

              {/* 4. Projects */}
              <Link
                href="/projects"
                className={getNavLinkClass(pathname === "/projects")}
              >
                Projects
              </Link>

              {/* 5. Investors (Dedicated Direct Link) */}
              <Link
                href="/investors"
                className={getNavLinkClass(pathname === "/investors")}
              >
                Investors
              </Link>

              {/* 6. Company Dropdown Console */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("company")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown((prev) => (prev === "company" ? null : "company"))
                  }
                  className={getDropdownTriggerClass(
                    activeDropdown === "company" || isCompanyActive
                  )}
                  aria-expanded={activeDropdown === "company"}
                  aria-haspopup="true"
                >
                  <span>Company</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === "company"
                        ? isTransparent
                          ? "rotate-180 text-[#f9a65c]"
                          : "rotate-180 text-[#e06425]"
                        : isTransparent
                        ? "text-white/70"
                        : "text-[#13271e]/60"
                    }`}
                  />
                </button>

                {/* Sleek Minimalist Dropdown Panel (No AI-template clutter, zero borders) */}
                {activeDropdown === "company" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl p-1.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50 text-left bg-white/95 backdrop-blur-2xl shadow-[0_12px_36px_rgba(19,39,30,0.12)] border-0">
                    <div className="flex flex-col gap-0.5">
                      <Link
                        href="/about"
                        onClick={() => setActiveDropdown(null)}
                        className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-150 ${
                          pathname === "/about"
                            ? "bg-[#fae9dc]/70 text-[#e06425]"
                            : "text-[#13271e] hover:bg-[#13271e]/[0.04] hover:text-[#e06425]"
                        }`}
                      >
                        <span className="font-sans text-[13px] font-medium tracking-tight">
                          About Rivanta
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#e06425]" />
                      </Link>

                      <Link
                        href="/investors"
                        onClick={() => setActiveDropdown(null)}
                        className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-150 ${
                          pathname === "/investors"
                            ? "bg-[#d6e8dc]/70 text-[#2d7a54]"
                            : "text-[#13271e] hover:bg-[#13271e]/[0.04] hover:text-[#e06425]"
                        }`}
                      >
                        <span className="font-sans text-[13px] font-medium tracking-tight">
                          Investors & Capital
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#e06425]" />
                      </Link>

                      <Link
                        href="/contact"
                        onClick={() => setActiveDropdown(null)}
                        className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-150 ${
                          pathname === "/contact"
                            ? "bg-[#e1e4de]/70 text-[#13271e]"
                            : "text-[#13271e] hover:bg-[#13271e]/[0.04] hover:text-[#e06425]"
                        }`}
                      >
                        <span className="font-sans text-[13px] font-medium tracking-tight">
                          Corporate Desk
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#e06425]" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* 3. Right Zone: Contact Us Action Button & Mobile Drawer Toggle (Shifted comfortably inward to the left) */}
          <div className="flex-1 flex items-center justify-end gap-3 min-w-0 mr-2 sm:mr-4 md:mr-6 lg:mr-8">
            {onOpenPartnerModal ? (
              <button
                type="button"
                onClick={onOpenPartnerModal}
                className={`group hidden sm:inline-flex items-center gap-2 px-5 sm:px-5.5 py-2 sm:py-2.5 rounded-full font-sans text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border-0 ${
                  isTransparent
                    ? "bg-white text-[#13271e] hover:bg-[#e06425] hover:text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)]"
                    : "bg-[#13271e] hover:bg-[#e06425] text-white shadow-[0_2px_10px_rgba(19,39,30,0.1)] hover:shadow-[0_6px_20px_rgba(224,100,37,0.28)]"
                }`}
                aria-label="Contact Us"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#e06425] group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            ) : (
              <Link
                href="/contact"
                className={`group hidden sm:inline-flex items-center gap-2 px-5 sm:px-5.5 py-2 sm:py-2.5 rounded-full font-sans text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border-0 ${
                  pathname === "/contact"
                    ? "bg-[#e06425] text-white shadow-[0_4px_16px_rgba(224,100,37,0.3)]"
                    : isTransparent
                    ? "bg-white text-[#13271e] hover:bg-[#e06425] hover:text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)]"
                    : "bg-[#13271e] hover:bg-[#e06425] text-white shadow-[0_2px_10px_rgba(19,39,30,0.1)] hover:shadow-[0_6px_20px_rgba(224,100,37,0.28)]"
                }`}
                aria-label="Contact Us"
              >
                <span>Contact Us</span>
                <ArrowUpRight
                  className={`w-3.5 h-3.5 transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    pathname === "/contact" ? "text-white" : "text-[#e06425] group-hover:text-white"
                  }`}
                />
              </Link>
            )}

            {/* Mobile Menu Hamburger (Zero Borders) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors cursor-pointer border-0 ${
                isTransparent
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-[#13271e]/5 hover:bg-[#13271e]/10 text-[#13271e]"
              }`}
              aria-label="Open mobile navigation menu"
            >
              <div className="flex flex-col gap-1.5 items-center justify-center">
                <span className={`w-5 h-[2px] rounded-full transition-colors ${isTransparent ? "bg-white" : "bg-[#13271e]"}`}></span>
                <span className={`w-5 h-[2px] rounded-full transition-colors ${isTransparent ? "bg-white" : "bg-[#13271e]"}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer (Zero Borders) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#13271e] text-white flex flex-col p-6 sm:p-8 overflow-y-auto animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Header Bar (Zero Borders) */}
          <div className="flex items-center justify-between pb-6">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
              aria-label="RIVANTA Home"
            >
              <div className="relative h-13 sm:h-15 w-auto flex-shrink-0 flex items-center">
                <Image
                  src="/logo/logo-brand-lockup-light.svg"
                  alt="RIVANTA - Green Innovative Venture Private Limited"
                  width={340}
                  height={64}
                  className="h-12 sm:h-14 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                  priority
                />
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer border-0"
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
                Strategic Manufacturing
              </span>
              <div className="grid grid-cols-1 gap-2.5 text-left">
                <Link
                  href="/green-silicon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-xl font-light hover:text-[#ea6e2d] transition-colors flex items-center justify-between py-1"
                >
                  <span>Green Silicon</span>
                  <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#e06425] text-white">
                    6N Purity
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
                Operations & Impact
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
                  Sustainability & Carbon LCA
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
                Company & Governance
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
                  Investors & Capital
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

          {/* Bottom Action (Zero Borders) */}
          <div className="mt-auto pt-6 flex flex-col items-center gap-4">
            {onOpenPartnerModal ? (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPartnerModal();
                }}
                className="w-full py-4 rounded-full bg-[#e06425] hover:bg-[#ea6e2d] text-white font-sans text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors border-0"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-[#e06425] hover:bg-[#ea6e2d] text-white font-sans text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors border-0"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
            <span className="font-mono text-xs text-white/50">
              contact@rivantagreen.com
            </span>
          </div>
        </div>
      )}
    </>
  );
}
