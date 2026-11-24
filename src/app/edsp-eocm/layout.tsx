import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EDSP / EOCM — Renewable Energy Solutions | Rivanta Green",
  description:
    "Transforming agricultural residues through Exothermal Drying and Sorting Process / Extracting Organic Carbon as Methane (EDSP/EOCM) into purified, methane-rich renewable gas.",
  alternates: {
    canonical: "https://www.rivantagreen.com/edsp-eocm",
  },
  openGraph: {
    title: "EDSP / EOCM — Renewable Energy Solutions | Rivanta Green",
    description:
      "Transforming agricultural residues through Exothermal Drying and Sorting Process / Extracting Organic Carbon as Methane (EDSP/EOCM) into purified, methane-rich renewable gas.",
    url: "https://www.rivantagreen.com/edsp-eocm",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "Rivanta Green EDSP / EOCM Renewable Energy Facility Concept",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EDSP / EOCM — Renewable Energy Solutions | Rivanta Green",
    description:
      "Transforming agricultural residues through Exothermal Drying and Sorting Process / Extracting Organic Carbon as Methane (EDSP/EOCM) into purified, methane-rich renewable gas.",
    images: ["/images/og-rivanta.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.rivantagreen.com/edsp-eocm#webpage",
      url: "https://www.rivantagreen.com/edsp-eocm",
      name: "EDSP / EOCM — Renewable Energy Solutions",
      description:
        "Developing commercial EDSP/EOCM renewable energy infrastructure utilizing anaerobic digestion of agricultural residues to support domestic energy diversification.",
      isPartOf: {
        "@id": "https://www.rivantagreen.com/#website",
      },
      about: {
        "@id": "https://www.rivantagreen.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rivantagreen.com/edsp-eocm#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.rivantagreen.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "EDSP / EOCM",
          item: "https://www.rivantagreen.com/edsp-eocm",
        },
      ],
    },
  ],
};

export default function EdspEocmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
