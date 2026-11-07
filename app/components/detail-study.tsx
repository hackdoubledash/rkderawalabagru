"use client";

import Image from "next/image";
import { useState, type PointerEvent } from "react";
import "./detail-study.css";

export function DetailStudy() {
  const [zoomed, setZoomed] = useState(false);
  const move = (event: PointerEvent<HTMLButtonElement>) => {
    if (!zoomed) return;
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--focus-x", `${((event.clientX - box.left) / box.width) * 100}%`);
    event.currentTarget.style.setProperty("--focus-y", `${((event.clientY - box.top) / box.height) * 100}%`);
  };
  return <section className="detail-study section-pad" id="detail" aria-labelledby="detail-title"><div className="detail-study-copy"><h2 id="detail-title">Look closer</h2><p>Small shifts of pressure and placement remain visible in every repeat. Tap the cloth to see the motif at its own scale.</p><a href="https://www.instagram.com/rkderawala_bagru/reel/DOVfTxLkVVC/" target="_blank" rel="noopener noreferrer">See the original textile</a></div><button className={`detail-zoom${zoomed ? " is-zoomed" : ""}`} type="button" aria-pressed={zoomed} aria-label={zoomed ? "Show full textile detail" : "Zoom into textile detail"} onClick={() => setZoomed(value => !value)} onPointerMove={move}><Image src="/media/printed-cloth-detail.jpg" alt="Close view of repeating hand block printed motifs on pale cloth" fill sizes="(max-width: 700px) 100vw, 55vw" /><span>{zoomed ? "Show full cloth" : "Look closer"}</span></button></section>;
}
