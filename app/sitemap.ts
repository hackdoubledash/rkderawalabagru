import type { MetadataRoute } from "next";
import { publishedTextiles } from "./lib/collections";
import { publishedArticles } from "./lib/journal";
import { publicUrl, visible } from "./lib/site";
import { navigation, pottery } from "./lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!publicUrl) return [];
  const paths = [
    ...navigation.map(({ href }) => href),
    "/collections/textiles",
    ...publishedTextiles.map(({ slug }) => `/collections/textiles/${slug}`),
    ...(pottery.published && pottery.objects.some(({ image }) => visible(image)) ? ["/collections/blue-pottery"] : []),
    "/journal",
    ...publishedArticles.map(({ slug }) => `/journal/${slug}`),
  ];
  return paths.map((path) => ({ url: `${publicUrl}${path === "/" ? "" : path}` }));
}
