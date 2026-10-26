"use client";

import React from "react";
import { ArrowRight, ArrowUp } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function FooterPartnerButton() {
  const { openPartnerModal } = useModal();

  return (
    <button
      type="button"
      onClick={openPartnerModal}
      className="u-btn--1 cursor-pointer"
      aria-label="Work with us - Open project inquiry"
    >
      <span className="btn_label">
        Work with us
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
    </button>
  );
}

export function ScrollToTopButton() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#e06425] text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer w-fit"
      aria-label="Scroll back to top of page"
    >
      <span>Scroll Top</span>
      <ArrowUp className="w-3.5 h-3.5" />
    </button>
  );
}
