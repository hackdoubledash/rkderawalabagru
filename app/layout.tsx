import type { Metadata, Viewport } from "next";
import "./globals.css";

const publicUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const isPublic = Boolean(publicUrl && !publicUrl.includes("example.com"));

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl ?? "http://localhost:3000"),
  title: "RK Derawala | Hand Block Printing from Bagru",
  description:
    "Discover RK Derawala's hand block printed textiles, natural colours and Dabu craft from Bagru, Rajasthan. Explore the people, process and textiles behind every print.",
  applicationName: "RK Derawala",
  keywords: [
    "RK Derawala",
    "Bagru hand block printing",
    "Dabu printing",
    "natural dye textiles",
    "hand block printed textiles",
    "Bagru Jaipur",
  ],
  alternates: isPublic ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    title: "RK Derawala | Printed by hand in Bagru",
    description:
      "A living textile tradition shaped by colour, skilled hands and the heritage of Bagru.",
    siteName: "RK Derawala",
    locale: "en_IN",
    url: isPublic ? publicUrl : undefined,
  },
  twitter: { card: "summary_large_image" },
  robots: isPublic
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f1e8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
