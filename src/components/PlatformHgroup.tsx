import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PlatformHgroup() {
  return (
    <section id="platform" className="py-20 md:py-32 bg-[#f6f8f6]">
      <div className="u-container u-container--1 u-container--pad">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Sidebar Label */}
          <div className="lg:col-span-3">
            <div className="u-ts--1 sticky top-28 reveal-up">
              <span className="indicator-dot"></span>
              <span>The Rivanta Platform</span>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-9 flex flex-col space-y-8 md:space-y-12">
            <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
              Combining clean energy, circular engineering, and capital into an{" "}
              <span className="text-[#a0b0a5]">engine of transformation.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#13271e]/80 text-base md:text-lg font-light leading-relaxed reveal-up delay-200">
              <p>
                We are building a scalable clean-venture engine: utility-grade renewable assets supply zero-carbon energy, closed-loop industrial processes neutralize emissions, and proprietary venture modeling deploys sustainable capital at institutional scale.
              </p>
              <p>
                By combining physical infrastructure with computational efficiency and verified carbon economics, Rivanta accelerates projects from concept to multi-gigawatt realization without ecological compromises.
              </p>
            </div>

            <div className="pt-4 reveal-up delay-300">
              <Link href="#company" className="u-btn--1">
                <span className="btn_label">
                  Explore our model
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
