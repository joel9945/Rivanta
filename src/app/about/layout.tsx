import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Corporate Identity, Leadership & Industrial Ambition",
  description:
    "Rivanta Green is an Indian industrial enterprise developing a diversified portfolio of strategic manufacturing and clean-energy initiatives.",
  alternates: {
    canonical: "https://rivantagreen.com/about",
  },
  openGraph: {
    title: "About Us — Corporate Identity & Industrial Ambition | Rivanta Green",
    description:
      "Rivanta Green is an Indian industrial enterprise developing a diversified portfolio of strategic manufacturing and clean-energy initiatives.",
    url: "https://rivantagreen.com/about",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "About Rivanta Green Innovative Venture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Corporate Identity & Industrial Ambition | Rivanta Green",
    description:
      "Rivanta Green is an Indian industrial enterprise developing a diversified portfolio of strategic manufacturing and clean-energy initiatives.",
    images: ["/images/og-rivanta.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://rivantagreen.com/about#webpage",
      url: "https://rivantagreen.com/about",
      name: "About Rivanta Green — Corporate Identity & Industrial Ambition",
      description:
        "Corporate identity, governance, and long-term industrial ambition of Rivanta Green Innovative Venture Private Limited.",
      isPartOf: {
        "@id": "https://rivantagreen.com/#website",
      },
      about: {
        "@id": "https://rivantagreen.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rivantagreen.com/about#breadcrumb",
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
          name: "About Us",
          item: "https://rivantagreen.com/about",
        },
      ],
    },
  ],
};

export default function AboutLayout({
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

