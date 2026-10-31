"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RotateCcw, Home } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error securely without exposing raw trace to the client DOM
    console.error("[Application Error Boundary]", {
      message: error.message,
      digest: error.digest,
    });
  }, [error]);

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

      {/* Main Error Notice */}
      <div className="max-w-xl mx-auto my-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md font-mono text-xs uppercase tracking-wider text-white/80">
          <span className="w-2 h-2 rounded-full bg-[#ea6e2d]"></span>
          <span>System Notice</span>
        </div>

        <h1 className="font-sans font-light text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight">
          An operational interruption occurred.
        </h1>

        <p className="font-sans text-white/70 text-base font-light leading-relaxed">
          The requested system node encountered an unexpected condition. Our technical desk has recorded the telemetry digest.
        </p>

        {error.digest && (
          <div className="font-mono text-xs text-white/40 bg-white/5 py-2 px-4 rounded-lg w-fit mx-auto border border-white/10">
            Digest Ref: {error.digest}
          </div>
        )}

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e06425] hover:bg-[#ea6e2d] text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto justify-center"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retry Connection</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto justify-center"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center font-mono text-xs text-white/40">
        Rivanta Green Innovative Venture Private Limited • Desk: contact@rivantagreen.com
      </div>
    </div>
  );
}
