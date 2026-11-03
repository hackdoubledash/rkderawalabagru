import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "RK Derawala — Hand block printing from Bagru, Rajasthan";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f8f1e8",
        color: "#1e173c",
        padding: "62px 72px",
        border: "20px solid #e5d5c3",
      }}
    >
      <div style={{ fontSize: 24, letterSpacing: 8, textTransform: "uppercase" }}>Bagru · Rajasthan</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontFamily: "Georgia", fontSize: 100, lineHeight: 1 }}>RK Derawala</div>
        <div style={{ fontFamily: "Georgia", fontSize: 44, fontStyle: "italic" }}>Printed by hand. Held in memory.</div>
      </div>
      <div style={{ fontSize: 24, letterSpacing: 3, textTransform: "uppercase" }}>Hand block printed textiles</div>
    </div>,
    size,
  );
}
