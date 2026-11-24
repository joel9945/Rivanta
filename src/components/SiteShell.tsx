"use client";

import React from "react";
import { usePathname } from "next/navigation";
import "@/components/site/shared-chrome.css";

interface SiteShellProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer: React.ReactNode;
}

export default function SiteShell({ children, header, footer }: SiteShellProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const activeSection = ["/bio-silica", "/saf", "/edsp-eocm"].includes(pathname)
    ? "products"
    : ["/feedstock", "/projects", "/sustainability"].includes(pathname)
      ? "ecosystem"
      : ["/about", "/vision"].includes(pathname) ? "about" : undefined;

  if (isHomePage) {
    return <>{children}</>;
  }

  return (
    <div id="page-top" data-active-section={activeSection} className="rivanta-subpage-shell relative min-h-screen bg-[#f6f8f6] text-[#13271e] font-sans selection:bg-[#e06425]/20 selection:text-[#13271e]">
      {header}

      <main id="page-main" className="page-main">
        <div id="page-content" className="page-content">
          {children}
        </div>
      </main>
      {footer}
    </div>
  );
}
