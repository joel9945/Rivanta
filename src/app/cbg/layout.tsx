import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compressed Biogas (CBG) — Clean Energy from Regional Agricultural Residues",
  description:
    "Developing commercial Compressed Biogas infrastructure utilizing anaerobic digestion of agricultural residues to support domestic energy diversification and clean mobility in India.",
  alternates: {
    canonical: "https://rivantagreen.com/cbg",
  },
  openGraph: {
    title: "Compressed Biogas (CBG) Infrastructure | Rivanta Green",
    description:
      "Developing commercial Compressed Biogas infrastructure from agricultural residues in alignment with India's clean energy goals.",
    url: "https://rivantagreen.com/cbg",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "Rivanta Green Compressed Biogas Plant Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compressed Biogas (CBG) Infrastructure | Rivanta Green",
    description:
      "Developing commercial Compressed Biogas infrastructure from agricultural residues in alignment with India's clean energy goals.",
    images: ["/images/og-rivanta.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rivantagreen.com/cbg#webpage",
      url: "https://rivantagreen.com/cbg",
      name: "Compressed Biogas (CBG) — Clean Energy from Regional Agricultural Residues",
      description:
        "Developing commercial Compressed Biogas infrastructure utilizing anaerobic digestion of agricultural residues to support domestic energy diversification.",
      isPartOf: {
        "@id": "https://rivantagreen.com/#website",
      },
      about: {
        "@id": "https://rivantagreen.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rivantagreen.com/cbg#breadcrumb",
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
          name: "Compressed Biogas (CBG)",
          item: "https://rivantagreen.com/cbg",
        },
      ],
    },
  ],
};

export default function CbgLayout({
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

