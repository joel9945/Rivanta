import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precipitated Silica & Silicon — Advanced Industrial Materials | Rivanta Green",
  description:
    "Developing precipitated silica recovered from rice husk ash for tyres, rubber compounding, coatings, and specialty products, and researching green silicon materials for solar energy and electronics.",
  alternates: {
    canonical: "https://www.rivantagreen.com/bio-silica",
  },
  openGraph: {
    title: "Precipitated Silica & Silicon — Advanced Industrial Materials | Rivanta Green",
    description:
      "Developing precipitated silica recovered from rice husk ash for tyres, rubber compounding, coatings, and specialty products, and researching green silicon materials for solar energy and electronics.",
    url: "https://www.rivantagreen.com/bio-silica",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "Rivanta Green Precipitated Silica & Silicon Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precipitated Silica & Silicon — Advanced Industrial Materials | Rivanta Green",
    description:
      "Developing precipitated silica recovered from rice husk ash for tyres, rubber compounding, coatings, and specialty products, and researching green silicon materials for solar energy and electronics.",
    images: ["/images/og-rivanta.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.rivantagreen.com/bio-silica#webpage",
      url: "https://www.rivantagreen.com/bio-silica",
      name: "Precipitated Silica & Silicon — Advanced Industrial Materials | Rivanta Green",
      description:
        "Developing precipitated silica recovered from rice husk ash for tyres, rubber compounding, coatings, and specialty products, and researching green silicon materials for solar energy and electronics.",
      isPartOf: {
        "@id": "https://www.rivantagreen.com/#website",
      },
      about: {
        "@id": "https://www.rivantagreen.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rivantagreen.com/bio-silica#breadcrumb",
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
          name: "Precipitated Silica & Silicon",
          item: "https://www.rivantagreen.com/bio-silica",
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

