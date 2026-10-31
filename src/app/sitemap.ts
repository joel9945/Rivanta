import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rivantagreen.com";
  const lastModified = "2026-10-25T00:00:00.000Z";

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/green-silicon", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/bio-silica", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/cbg", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/saf", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/feedstock", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/sustainability", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/investors", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
