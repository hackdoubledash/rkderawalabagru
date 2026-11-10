"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Photo } from "../lib/site-data";

export function ArchiveGallery({ images, layout = "length" }: { images: readonly Photo[]; layout?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [open, setOpen] = useState(false);
  const photo = images[index];

  function step(delta: number) {
    setZoom(false);
    setIndex((value) => (value + delta + images.length) % images.length);
  }

  if (!photo) return null;
  return (
    <>
      <div className={`archive-gallery gallery-${layout}`}>
        {images.map((item, i) => (
          <figure className="print" key={item.src}>
            <button className="print-frame" aria-label={`Enlarge: ${item.caption}`}
              onClick={(event) => {
                opener.current = event.currentTarget;
                setIndex(i);
                setZoom(false);
                setOpen(true);
                dialog.current?.showModal();
              }}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 720px) 92vw, 49vw" style={{ objectPosition: item.position }} />
              <span aria-hidden="true" className="gallery-expand">＋</span>
            </button>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
      <dialog ref={dialog} className="gallery-dialog" aria-label="Enlarged archive photograph"
        onClose={() => { setOpen(false); opener.current?.focus(); }}
        onKeyDown={(event) => {
          if (zoom && (event.target as HTMLElement).closest(".gallery-view")) return;
          if (event.key === "ArrowLeft") { event.preventDefault(); step(-1); }
          if (event.key === "ArrowRight") { event.preventDefault(); step(1); }
        }}>
        <div className="gallery-controls">
          <button onClick={() => dialog.current?.close()} autoFocus>Close ×</button>
          {images.length > 1 && <>
            <button onClick={() => step(-1)} aria-label="Previous photo">←</button>
            <button onClick={() => step(1)} aria-label="Next photo">→</button>
          </>}
          <button onClick={() => setZoom(!zoom)} aria-pressed={zoom}>{zoom ? "Fit image" : "Zoom in"}</button>
        </div>
        {open && <div className={`gallery-view ${zoom ? "is-zoomed" : ""}`} tabIndex={0} aria-label="Image area">
          <div><Image src={photo.src} alt={photo.alt} fill sizes="90vw" /></div>
        </div>}
        <p aria-live="polite">{photo.caption} {images.length > 1 && `(${index + 1} of ${images.length})`}</p>
      </dialog>
    </>
  );
}
