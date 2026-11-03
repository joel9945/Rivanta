import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/context/ModalContext";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import SmoothScroll from "@/components/SmoothScroll";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.rivantagreen.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rivanta Green | Sustainable Industrial Innovation",
    template: "%s | Rivanta Green",
  },
  description:
    "Rivanta Green is developing integrated industrial initiatives across bio-silica, compressed biogas, sustainable aviation fuel and biomass valorisation in India.",
  keywords: [
    "Rivanta Green",
    "Rivanta Green Innovative Venture Private Limited",
    "Indian Industrial Enterprise",
    "Sustainable Industrial Innovation",
    "Advanced Materials",
    "Biogenic Silica",
    "Bio-Silica",
    "Compressed Biogas",
    "CBG India",
    "Sustainable Aviation Fuels",
    "SAF",
    "Biomass Valorisation",
    "Agricultural Residue Utilization",
    "Circular Industrial Materials",
    "Industrial Infrastructure India",
  ],
  authors: [{ name: "Rivanta Green Innovative Venture Pvt. Ltd." }],
  creator: "Rivanta Green Innovative Venture Pvt. Ltd.",
  publisher: "Rivanta Green Innovative Venture Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rivanta Green | Sustainable Industrial Innovation",
    description:
      "Rivanta Green is developing integrated industrial initiatives across bio-silica, compressed biogas, sustainable aviation fuel and biomass valorisation in India.",
    url: siteUrl,
    siteName: "Rivanta Green",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "Rivanta Green Industrial Development Facility Concept",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rivanta Green | Sustainable Industrial Innovation",
    description:
      "Rivanta Green is developing integrated industrial initiatives across bio-silica, compressed biogas, sustainable aviation fuel and biomass valorisation in India.",
    images: ["/images/og-rivanta.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Corporation", "Organization"],
      "@id": `${siteUrl}/#organization`,
      name: "Rivanta Green Innovative Venture Private Limited",
      legalName: "Rivanta Green Innovative Venture Private Limited",
      alternateName: [
        "Rivanta Green",
        "Rivanta",
        "Rivanta Green Innovative Ventures Private Limited",
        "Rivanta Green Innovative Ventures",
      ],
      identifier: "U32900MP2026PTC087753",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo/logo-brand-lockup.svg`,
        caption: "Rivanta Green Innovative Venture Private Limited",
      },
      image: `${siteUrl}/images/og-rivanta.jpg`,
      description:
        "Rivanta Green is developing integrated industrial initiatives across bio-silica, compressed biogas, sustainable aviation fuel and biomass valorisation in India.",
      email: "info@rivantagreen.com",
      telephone: "+91 98930 25375",
      foundingLocation: {
        "@type": "Place",
        name: "Bhopal, Madhya Pradesh, India",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "E4/271 Arera Colony, Huzur",
        addressLocality: "Bhopal",
        addressRegion: "Madhya Pradesh",
        postalCode: "462016",
        addressCountry: "IN",
      },
      location: [
        {
          "@type": "Place",
          name: "Corporate & Operations Office",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "B-29, 3rd Floor, Kasturba Nagar, Next to Lake City Hospital, Chetak Bridge",
            addressLocality: "Bhopal",
            addressRegion: "Madhya Pradesh",
            postalCode: "462023",
            addressCountry: "IN",
          },
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "corporate communications",
        telephone: "+91 98930 25375",
        email: "info@rivantagreen.com",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      knowsAbout: [
        "Biogenic Silica",
        "Bio-Silica",
        "Compressed Biogas (CBG)",
        "Sustainable Aviation Fuel (SAF)",
        "Biomass Valorisation",
        "Agricultural Residue Utilization",
        "Circular Industrial Materials",
        "Industrial Infrastructure",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Rivanta Green",
      alternateName: ["Rivanta Green Innovative Venture", "Rivanta"],
      inLanguage: "en-IN",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${robotoMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased selection:bg-[#e06425]/20 selection:text-[#13271e]">
        <a
          href="#page-main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#e06425] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none font-mono text-xs uppercase tracking-wider"
        >
          Skip to main content
        </a>
        <ModalProvider>
          <SmoothScroll>
            <ScrollRevealProvider>
              <div className="relative min-h-screen bg-[#f6f8f6] text-[#13271e] font-sans selection:bg-[#e06425]/20 selection:text-[#13271e]">
                {/* Shared Floating Corporate Header */}
                <Header />

                {/* Shared Framed Main Page Content & Evergreen Footer */}
                <main id="page-main" className="page-main">
                  <div id="page-content" className="page-content">
                    {children}
                  </div>
                  <Footer />
                </main>
              </div>
            </ScrollRevealProvider>
          </SmoothScroll>
        </ModalProvider>
      </body>
    </html>
  );
}
