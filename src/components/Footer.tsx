import Link from "next/link";
import Image from "next/image";
import { FooterPartnerButton, ScrollToTopButton } from "./FooterInteractions";

async function getCopyrightYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCopyrightYear();

  return (
    <footer className="relative bg-[#0e2219] text-white pt-12 sm:pt-16 md:pt-28 lg:pt-32 pb-10 sm:pb-12 overflow-hidden border-t border-white/10">
      {/* Ambient Green & Terracotta Orange Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(45,122,84,0.18),_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,_rgba(224,100,37,0.12),_transparent_70%)] pointer-events-none" />

      <div className="u-container u-container--1 u-container--pad relative z-10">
        {/* Main Upper Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-10 sm:pb-14 md:pb-24 border-b border-white/10 items-start">
          {/* Left Callout */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md w-fit font-mono text-xs uppercase tracking-wider text-white/80">
              <span className="w-2 h-2 rounded-full bg-[#ea6e2d]"></span>
              <span>Industrial Bio-Value Ecosystem</span>
            </div>

            <h3 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] tracking-tight leading-[1.08] text-white max-w-xl">
              From agricultural residue to{" "}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#f9a65c]">
                industrial value.
              </span>
            </h3>

            <p className="font-sans text-sm md:text-base text-white/70 font-light max-w-md leading-relaxed">
              Rivanta Green Innovative Ventures Private Limited is an emerging
              Indian industrial enterprise developing an integrated portfolio
              across renewable energy, advanced materials, sustainable fuels,
              and circular manufacturing.
            </p>

            <div>
              <FooterPartnerButton />
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            {/* Column 1: Our Businesses */}
            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                Our Businesses
              </span>
              <ul className="space-y-3 font-sans font-light text-white/80 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/bio-silica"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Advanced Materials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cbg"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Compressed Biogas (CBG)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/saf"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Sustainable Aviation Fuels
                  </Link>
                </li>
                <li>
                  <Link
                    href="/feedstock"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Circular Materials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Strategy & Operations */}
            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                Strategy & Operations
              </span>
              <ul className="space-y-3 font-sans font-light text-white/80 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/sustainability"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Environmental Stewardship
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Industrial Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Institutional */}
            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                Institutional
              </span>
              <ul className="space-y-3 font-sans font-light text-white/80 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/vision"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Vision & Purpose
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Commercial Off-Take Desk
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Corporate Directory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Connect & Scroll Top */}
            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                Connect
              </span>
              <ul className="space-y-3 font-sans font-light text-white/80 text-xs sm:text-sm">
                <li>
                  <a
                    href="tel:+919893025375"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    +91 98930 25375
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@rivantagreen.com"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    info@rivantagreen.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@rivantagreen.com"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    support@rivantagreen.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
              </ul>

              <div className="pt-2">
                <ScrollToTopButton />
              </div>
            </div>
          </div>
        </div>

        {/* Registered Office & Coordinates Bar */}
        <div className="py-8 sm:py-10 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-xs text-white/70">
          {/* Corporate & Operations Office */}
          <div className="space-y-2">
            <div className="font-mono uppercase tracking-wider text-[#f9a65c] font-semibold text-[11px]">
              Corporate & Operations Office
            </div>
            <div className="font-sans font-medium text-white text-sm">
              Rivanta Green Innovative Ventures Private Limited
            </div>
            <p className="font-light leading-relaxed text-white/75">
              B-29, 3rd Floor, Kasturba Nagar,
              <br />
              Next to Lake City Hospital, Chetak Bridge,
              <br />
              Bhopal, Madhya Pradesh, 462023 - India.
            </p>
          </div>

          {/* Registered Office (MCA) */}
          <div className="space-y-2">
            <div className="font-mono uppercase tracking-wider text-[#f9a65c] font-semibold text-[11px]">
              Registered Office
            </div>
            <p className="font-light leading-relaxed text-white/75 pt-1">
              E4/271 Arera Colony, Huzur,
              <br />
              Bhopal, Madhya Pradesh, 462016 - India.
            </p>
          </div>

          {/* Direct Contact Coordinates */}
          <div className="space-y-2">
            <div className="font-mono uppercase tracking-wider text-[#f9a65c] font-semibold text-[11px]">
              Direct Corporate Desk
            </div>
            <div className="space-y-1.5 font-sans">
              <div>
                <span className="text-white/50 font-mono text-[11px] block">
                  Direct Line:
                </span>
                <a
                  href="tel:+919893025375"
                  className="text-white hover:text-[#f9a65c] transition-colors font-medium text-sm"
                >
                  +91 98930 25375
                </a>
              </div>
              <div>
                <span className="text-white/50 font-mono text-[11px] block">
                  Corporate Inquiries:
                </span>
                <a
                  href="mailto:info@rivantagreen.com"
                  className="text-white hover:text-[#f9a65c] transition-colors font-medium text-sm"
                >
                  info@rivantagreen.com
                </a>
              </div>
              <div>
                <span className="text-white/50 font-mono text-[11px] block">
                  Partner Support:
                </span>
                <a
                  href="mailto:support@rivantagreen.com"
                  className="text-white hover:text-[#f9a65c] transition-colors font-medium text-sm"
                >
                  support@rivantagreen.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Identity & Copyright Row */}
        <div className="pt-8 sm:pt-10 pb-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-block group" aria-label="Rivanta Green Home">
              <Image
                src="/logo/logo-brand-lockup-light.svg"
                alt="Rivanta Green Innovative Ventures Private Limited"
                width={360}
                height={85}
                className="h-11 md:h-13 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(242,178,36,0.3)] transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-6 text-center sm:text-right font-mono text-xs text-white/50">
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3">
              <Link
                href="/privacy-policy"
                className="hover:text-[#f9a65c] transition-colors underline decoration-white/20 underline-offset-4"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <span>© {currentYear} Rivanta Green Innovative Ventures Pvt. Ltd. All rights reserved.</span>
            </div>
            <div className="text-[11px] text-white/40 uppercase tracking-wider">
              Bhopal, Madhya Pradesh, India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
