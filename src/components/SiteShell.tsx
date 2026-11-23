"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";

interface SiteShellProps {
  children: React.ReactNode;
  footer: React.ReactNode;
}

export default function SiteShell({ children, footer }: SiteShellProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-screen bg-[#f6f8f6] text-[#13271e] font-sans selection:bg-[#e06425]/20 selection:text-[#13271e]">
      {/* Shared Floating Corporate Header for Subpages */}
      <Header />

      {/* Shared Framed Main Page Content & Evergreen Footer for Subpages */}
      <main id="page-main" className="page-main">
        <div id="page-content" className="page-content">
          {children}
        </div>
        {footer}
      </main>
    </div>
  );
}
