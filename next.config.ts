import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: { root: process.cwd() },
  images: { qualities: [55, 75], formats: ["image/avif", "image/webp"] },
  outputFileTracingIncludes: { "/archive-media/*": ["./assets/archive/*.jpg"] },
  async redirects() {
    return [
      { source: "/textiles", destination: "/collections/textiles", permanent: true },
      { source: "/textiles/:slug", destination: "/collections/textiles/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
