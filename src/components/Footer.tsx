import Link from "next/link";
import { FooterPartnerButton, ScrollToTopButton } from "./FooterInteractions";

async function getCopyrightYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCopyrightYear();

  return (
    <footer className="relative bg-[#0e2219] text-white pt-20 md:pt-32 pb-12 overflow-hidden border-t border-white/10">
      {/* Ambient Green & Terracotta Orange Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(45,122,84,0.18),_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,_rgba(224,100,37,0.12),_transparent_70%)] pointer-events-none" />

      <div className="u-container u-container--1 u-container--pad relative z-10">
        {/* Main Upper Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 md:pb-24 border-b border-white/10 items-start">
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
              Rivanta Green Innovative Venture Private Limited is an emerging
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

        {/* Corporate Offices & Registered Coordinates Bar */}
        <div className="py-10 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-xs text-white/70">
          {/* Head & Registered Office */}
          <div className="space-y-2">
            <div className="font-mono uppercase tracking-wider text-[#f9a65c] font-semibold text-[11px]">
              Head & Registered Office
            </div>
            <div className="font-sans font-medium text-white text-sm">
              Rivanta Green Innovative Venture Private Limited
            </div>
            <p className="font-light leading-relaxed text-white/75">
              B-29, 3rd Floor, Kasturba Nagar,
              <br />
              Next to Lake City Hospital, Chetak Bridge,
              <br />
              Bhopal, Madhya Pradesh, India.
            </p>
          </div>

          {/* Corporate Office */}
          <div className="space-y-2">
            <div className="font-mono uppercase tracking-wider text-[#f9a65c] font-semibold text-[11px]">
              Corporate Office
            </div>
            <div className="font-sans font-medium text-white text-sm">
              Golden Soil Ventures Private Limited
            </div>
            <p className="font-light leading-relaxed text-white/75">
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
                  Official Email:
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
                  Portal:
                </span>
                <span className="text-white/90">www.rivantagreen.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Copyright Row */}
        <div className="pt-10 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <div className="font-mono text-xs text-white/50 text-center sm:text-left">
            © {currentYear} Rivanta Green Innovative Venture Pvt. Ltd. All
            rights reserved.
          </div>
          <div className="font-mono text-[11px] text-white/40 text-center sm:text-right uppercase tracking-wider">
            Bhopal, Madhya Pradesh, India
          </div>
        </div>

        {/* Massive Watermark Typography with Exact Authentic Logo Font */}
        <div className="mt-8 md:mt-12 select-none pointer-events-none opacity-[0.08] flex items-center justify-center overflow-hidden px-4 md:px-8">
          <svg
            viewBox="10 0 1115 113"
            className="w-full max-w-[1500px] h-auto fill-current text-white"
            aria-hidden="true"
          >
            <path d="M530 1c0,2 -28,47 -54,88 -7,12 -13,21 -13,22 0,0 3,0 7,0l6 0 6 -9c26,-44 44,-71 45,-71 1,0 6,7 11,16 13,21 30,50 35,58l4 6 11 0c6,0 11,0 11,0 1,-1 -6,-12 -14,-26 -8,-13 -23,-38 -33,-54 -16,-26 -22,-34 -22,-30l0 0zm143 55l-1 55 7 0 6 0 1 -38c0,-24 0,-38 1,-38 1,0 4,2 7,5 5,4 41,34 75,61 8,7 15,12 15,12 1,0 1,-25 1,-56l0 -56 -6 1 -6 0 0 38 -1 38 -15 -12c-49,-40 -81,-66 -82,-66 -1,0 -2,25 -2,56l0 0zm380 -48c-11,19 -56,91 -59,96 -2,3 -3,6 -3,6 0,1 3,1 6,1l7 0 21 -35c12,-20 23,-38 25,-40 1,-3 3,-5 4,-5 1,0 14,21 38,63l11 17 11 0c6,0 11,0 11,-1 0,-1 -11,-19 -29,-50 -6,-9 -12,-20 -14,-24 -9,-15 -22,-36 -23,-36 -1,0 -3,4 -6,8l0 0zm-1043 49l0 54 11 0 11 0 0 -49 1 -49 24 0c21,0 26,0 30,2 14,7 19,22 11,33 -6,7 -13,10 -31,10l-16 1 10 10c6,5 18,17 27,26l16 16 12 0c7,0 12,0 12,-1 0,0 -9,-10 -21,-22 -15,-15 -20,-21 -18,-21 5,0 16,-5 22,-9 9,-6 12,-14 12,-23 0,-9 -2,-15 -9,-21 -13,-11 -22,-12 -68,-12l-36 0 0 55 0 0zm195 -55c0,0 0,25 -1,54l0 55 11 0 11 0 -1 -54 0 -55 -10 0c-6,0 -10,0 -10,0l0 0zm83 1c0,1 4,7 8,14 4,7 20,31 34,54 14,22 26,41 27,41 2,0 69,-108 69,-110 0,0 -3,0 -7,0l-7 0 -23 38c-13,21 -24,40 -25,41 -2,3 -3,2 -11,-11 -18,-29 -27,-43 -34,-56l-8 -12 -11 0c-7,0 -12,0 -12,1l0 0zm561 4c0,3 0,6 0,6 0,1 10,1 21,1l21 0 0 48 0 49 11 0 10 0 1 -49 0 -48 21 0 21 -1 1 -5 0 -6 -53 0 -54 0 0 5z" />
          </svg>
        </div>
      </div>
    </footer>
  );
}
