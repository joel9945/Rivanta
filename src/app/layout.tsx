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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rivantagreen.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RIVANTA — Green Innovative Venture Private Limited",
    template: "%s | Rivanta Green",
  },
  description:
    "Rivanta Green Innovative Venture Private Limited engineers utility-scale renewable energy infrastructure, industrial decarbonization, flagship Green Silicon For Chips (9N purity), and circular bio-ventures.",
  keywords: [
    "Rivanta Green",
    "Rivanta Green Innovative Venture",
    "Green Silicon For Chips",
    "Green Silicon Purity 9N",
    "Semiconductor Silicon 9N",
    "Compressed Biogas",
    "CBG",
    "Sustainable Aviation Fuel",
    "SAF",
    "Biomass Circular Economy",
    "Industrial Decarbonization",
  ],
  authors: [{ name: "Rivanta Green Innovative Venture Pvt. Ltd." }],
  creator: "Rivanta Green Innovative Venture Pvt. Ltd.",
  publisher: "Rivanta Green Innovative Venture Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RIVANTA — Green Innovative Venture Private Limited",
    description:
      "Engineering the future for clean innovation. Developing high-value Green Silicon For Chips (9N purity), compressed biogas (CBG), and sustainable aviation fuel (SAF).",
    url: siteUrl,
    siteName: "Rivanta Green Innovative Venture",
    images: [
      {
        url: "/images/hero-facility.png",
        width: 1200,
        height: 630,
        alt: "Rivanta Clean Energy Infrastructure Facility",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIVANTA — Green Innovative Venture Private Limited",
    description:
      "Engineering the future for clean innovation. Flagship Green Silicon For Chips (9N purity), compressed biogas, and sustainable aviation fuel pathways.",
    images: ["/images/hero-facility.png"],
  },
  icons: {
    icon: [
      { url: "/logo/logo-icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo/logo-icon.svg", type: "image/svg+xml" },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "Rivanta Green Innovative Venture Private Limited",
  alternateName: "Rivanta Green",
  url: siteUrl,
  logo: `${siteUrl}/logo/logo-icon.svg`,
  description:
    "Industrial manufacturing venture operating in agricultural biomass valorization, Green Silicon For Chips (9N purity), compressed biogas, and sustainable aviation fuel pathways.",
  email: "contact@rivantagreen.com",
  sameAs: ["https://linkedin.com", "https://x.com"],
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
