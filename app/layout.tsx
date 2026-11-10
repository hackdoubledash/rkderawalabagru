import type { Metadata, Viewport } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { pageMetadata, publicUrl } from "./lib/site";
import { brand } from "./lib/brand";
import { address, instagram, phone } from "./lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  ...pageMetadata("/", "RK Derawala | Hand block printing from Bagru",
    "Discover RK Derawala’s hand block printed textiles, the people behind the cloth, and Bagru’s Dabu tradition."),
  metadataBase: new URL(publicUrl ?? "http://localhost:3000"),
  applicationName: "RK Derawala",
  robots: { index: Boolean(publicUrl), follow: Boolean(publicUrl) },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: brand.paper };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organisation = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RK Derawala",
    logo: publicUrl ? new URL(brand.logo, publicUrl).href : undefined,
    url: publicUrl,
    sameAs: [instagram],
    telephone: phone,
    address: { "@type": "PostalAddress", streetAddress: address, addressCountry: "IN" },
  };
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
