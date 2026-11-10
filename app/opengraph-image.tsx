import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { brand } from "./lib/brand";

export const alt = "RK Derawala. Hand block printed textiles from Bagru, Rajasthan.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [logo, art] = await Promise.all([
    readFile(new URL("../public/brand/rk-derawala-logo.jpg", import.meta.url)),
    readFile(new URL("../public/art/bagru-garden-border.jpg", import.meta.url)),
  ]);
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: brand.ink, color: brand.ivory }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 610, padding: 62 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/jpeg;base64,${logo.toString("base64")}`} width={112} height={112} alt="" style={{ borderRadius: 56 }} />
        <div style={{ fontSize: 73, lineHeight: 1.02, letterSpacing: -4, marginTop: 26 }}>RK Derawala</div>
        <div style={{ fontSize: 27, marginTop: 22 }}>Hand block printed textiles from Bagru, Rajasthan.</div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`data:image/jpeg;base64,${art.toString("base64")}`} width={590} height={630} alt="" style={{ objectFit: "cover", objectPosition: "right center" }} />
    </div>, size,
  );
}
