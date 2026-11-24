"use client";

import { useEffect, useRef, useState } from "react";
import "./MobileNavigation.css";

interface MobileNavigationProps {
  links: Record<"home" | "about" | "products" | "ecosystem" | "people" | "contact", string>;
}

export default function MobileNavigation({ links }: MobileNavigationProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.documentElement.style.overflow;
    const lenis = (window as unknown as { lenis?: { stop(): void; start(): void } }).lenis;
    document.documentElement.style.overflow = "hidden";
    lenis?.stop();

    const desktop = window.matchMedia("(min-width: 1025px)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialogRef.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      lenis?.start();
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  const close = () => {
    dialogRef.current?.close();
    // Resume before the shared anchor handler processes the link's click.
    (window as unknown as { lenis?: { start(): void } }).lenis?.start();
  };
  const items = [
    ["Home", links.home],
    ["About", links.about],
    ["Products", links.products],
    ["Ecosystem", links.ecosystem],
    ["People", links.people],
  ];

  return (
    <div className="rivanta-mobile-navigation">
      <button
        type="button"
        className="rivanta-menu-toggle"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="rivanta-mobile-menu"
        aria-haspopup="dialog"
        onClick={() => {
          dialogRef.current?.showModal();
          setOpen(true);
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
      <dialog
        id="rivanta-mobile-menu"
        ref={dialogRef}
        className="rivanta-menu-panel"
        aria-labelledby="rivanta-mobile-menu-title"
        onClose={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const focusable = event.currentTarget.querySelectorAll<HTMLElement>("a[href], button");
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const bounds = event.currentTarget.getBoundingClientRect();
            if (event.clientX < bounds.left || event.clientX > bounds.right) close();
          }
        }}
      >
        <div className="rivanta-menu-heading">
          <span id="rivanta-mobile-menu-title">Explore Rivanta</span>
          <button type="button" className="rivanta-menu-toggle" aria-label="Close navigation menu" onClick={close}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <path d="m6 6 12 12M6 18 18 6" />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile primary" className="rivanta-menu-links">
          {items.map(([label, href]) => <a key={label} href={href} onClick={close}>{label}</a>)}
        </nav>
        <a href={links.contact} className="rivanta-menu-contact" onClick={close}>Contact Rivanta</a>
        <a href="mailto:info@rivantagreen.com" className="rivanta-menu-email">info@rivantagreen.com</a>
      </dialog>
    </div>
  );
}
