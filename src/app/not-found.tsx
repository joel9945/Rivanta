import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0e2219] text-white flex flex-col justify-between p-6 md:p-12 selection:bg-[#e06425]/20 selection:text-white">
      {/* Top Header */}
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 relative flex-shrink-0 drop-shadow-[0_2px_8px_rgba(197,155,39,0.35)]">
            <Image
              src="/logo/logo-icon.svg"
              alt="Rivanta Eagle Emblem"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-sans font-bold tracking-tight text-lg text-white">
            RIVANTA
          </span>
        </Link>
      </div>

      {/* Main 404 Notice */}
      <div className="max-w-xl mx-auto my-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md font-mono text-xs uppercase tracking-wider text-white/80">
          <span className="w-2 h-2 rounded-full bg-[#ea6e2d]"></span>
          <span>404 — Page Not Found</span>
        </div>

        <h1 className="font-sans font-light text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight">
          Resource not located on this node.
        </h1>

        <p className="font-sans text-white/70 text-base font-light leading-relaxed">
          The requested URL does not match any public venture dispatch or document. Please return to the Rivanta platform home.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e06425] hover:bg-[#ea6e2d] text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center font-mono text-xs text-white/40">
        Rivanta Green Innovative Venture Private Limited
      </div>
    </div>
  );
}
