import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bio-Silica & Advanced Materials — Biogenic Silica & Industrial Silicon Precursors",
  description:
    "Developing high-purity biogenic silica (SiO₂) from agricultural residues and evaluating downstream green silicon precursor pathways for rubber, green concrete, and advanced industrial materials.",
  alternates: {
    canonical: "https://rivantagreen.com/bio-silica",
  },
  openGraph: {
    title: "Bio-Silica & Advanced Materials | Rivanta Green",
    description:
      "Developing high-purity biogenic silica (SiO₂) and evaluating downstream green silicon precursor pathways from agricultural residues.",
    url: "https://rivantagreen.com/bio-silica",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "Rivanta Green Bio-Silica & Advanced Materials Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bio-Silica & Advanced Materials | Rivanta Green",
    description:
      "Developing high-purity biogenic silica (SiO₂) and evaluating downstream green silicon precursor pathways from agricultural residues.",
    images: ["/images/og-rivanta.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rivantagreen.com/bio-silica#webpage",
      url: "https://rivantagreen.com/bio-silica",
      name: "Bio-Silica & Advanced Materials — Biogenic Silica & Industrial Silicon Precursors",
      description:
        "Developing biogenic silica (SiO2) from agricultural residues and evaluating green silicon precursor pathways for domestic manufacturing.",
      isPartOf: {
        "@id": "https://rivantagreen.com/#website",
      },
      about: {
        "@id": "https://rivantagreen.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rivantagreen.com/bio-silica#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://rivantagreen.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Bio-Silica & Silicon",
          item: "https://rivantagreen.com/bio-silica",
        },
      ],
    },
  ],
};

export default function BioSilicaLayout({
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

