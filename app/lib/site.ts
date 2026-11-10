import type { Metadata } from "next";
import { photos, type Photo } from "./site-data";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
export const publicUrl = configuredUrl && !configuredUrl.includes("example.com") ? configuredUrl : undefined;

// Existing Instagram copies are for review until their permissions are cleared.
export const archiveMedia = process.env.RK_APPROVED_ARCHIVE_MEDIA === "1"
  || (!publicUrl && process.env.VERCEL_ENV !== "production");

export function visible(photo: Photo) {
  return photo.approval !== "pending" || archiveMedia;
}

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const fullTitle = path === "/" ? title : `${title} | RK Derawala`;
  const image = { url: "/opengraph-image", width: 1200, height: 630,
    alt: "RK Derawala. Hand block printed textiles from Bagru, Rajasthan." };
  return {
    title: fullTitle,
    description,
    alternates: publicUrl ? { canonical: path } : undefined,
    openGraph: {
      title: fullTitle, description, url: publicUrl ? path : undefined, siteName: "RK Derawala",
      type: "website", locale: "en_IN", images: [image],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}


export function craftStageImage(step: { id: string; image: Photo }) {
  if (visible(step.image)) return step.image;
  if (step.id === "impression") return photos.film;
  if (step.id === "finish") return photos.repeat;
  return undefined;
}
