import type { MetadataRoute } from "next";
import { categories } from "./lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!siteUrl || siteUrl.includes("example.com")) return [];

  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...categories.map(({ slug }) => ({ url: `${siteUrl}/textiles/${slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
