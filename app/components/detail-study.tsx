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

  return <section className="detail-study section-space" id="detail" aria-labelledby="detail-title">
    <div className="section-index"><span>04 / A closer look</span><span>The detail is the difference</span></div>
    <div className="detail-study-grid">
      <div className="detail-study-copy">
        <span className="eyebrow">Made visible</span>
        <h2 id="detail-title" className="ink-wipe-title"><span>Look closer.</span><span><em>See the hand.</em></span></h2>
        <p>In every repeat, small shifts of pressure and placement remain visible. Move across the cloth to see the motif at its own scale.</p>
        <a className="text-link" href="https://www.instagram.com/rkderawala_bagru/reel/DOVfTxLkVVC/" target="_blank" rel="noopener noreferrer">See the original textile <span aria-hidden="true">↗</span></a>
      </div>
      <div className="detail-study-visual">
        <button className={`detail-zoom${zoomed ? " is-zoomed" : ""}`} type="button" aria-pressed={zoomed} aria-label={zoomed ? "Full view of textile detail" : "Look closer at textile detail"} onClick={() => setZoomed(value => !value)} onPointerMove={move}>
          <Image src="/media/printed-cloth-detail.jpg" alt="Close view of repeating hand block printed motifs on pale cloth" fill sizes="(max-width: 800px) 100vw, 52vw" />
          <span className="detail-zoom-control" aria-hidden="true">{zoomed ? "−" : "+"}<small>{zoomed ? "Full view" : "Look closer"}</small></span>
        </button>
        <div className="detail-study-caption"><span>Motif study / 01</span><span>Tap to explore the surface</span></div>
      </div>
    </div>
  </section>;
}
