import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  const isPublic = Boolean(siteUrl && !siteUrl.includes("example.com"));

  return {
    rules: isPublic ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: isPublic ? `${siteUrl}/sitemap.xml` : undefined,
  };
}
