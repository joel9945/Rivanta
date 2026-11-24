import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  experimental: {
    agentUpgrade: "security",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/cbg",
        destination: "/edsp-eocm",
        permanent: true,
      },
      {
        source: "/green-silicon",
        destination: "/bio-silica",
        permanent: true,
      },
      {
        source: "/investors",
        destination: "/vision",
        permanent: true,
      },
      {
        source: "/newsroom",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/technology",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/wp-content/themes/citadel-construction-group/:path*",
        destination: "/wp-content/themes/rivanta/:path*",
      },
      {
        source: "/wp-content/uploads/2026/07/Citadel-Hero-v2.mp4",
        destination: "/wp-content/uploads/2026/07/rivanta-hero-v2.mp4",
      },
      {
        source: "/wp-content/uploads/2026/07/Citadel-Hero-v2-scaled.webp",
        destination: "/wp-content/uploads/2026/07/rivanta-hero-scaled.webp",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
