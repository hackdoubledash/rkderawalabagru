"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import "./craft-book.css";

const pages = [
  { title: "The family", copy: "The practice lives through the Derawala family in Bagru and the work they do each day.", image: "/media/derawala-family.jpg", alt: "Derawala family with indigo printed cloth", source: "https://www.instagram.com/rkderawala_bagru/p/C5qOO55SAPu/" },
  { title: "The block", copy: "A motif begins in carved wood. Its placement sets the rhythm of the cloth.", image: "/media/printing-blocks.jpg", alt: "Carved wooden printing blocks in the workshop", source: "https://www.instagram.com/rkderawala_bagru/reel/DWYxGp0CTgq/" },
  { title: "The colour", copy: "Dabu resist and natural colour deepen the pattern before washing and sunlight reveal it.", image: "/media/indigo-drying.jpg", alt: "Indigo printed cloth drying outdoors", source: "https://www.instagram.com/rkderawala_bagru/p/DW1O2bxEa1K/" },
  { title: "The cloth", copy: "The finished length keeps the trace of each hand, block, and passage through colour.", image: "/media/printed-cloth-detail.jpg", alt: "Hand block printed motifs on pale cloth", source: "https://www.instagram.com/rkderawala_bagru/reel/DOVfTxLkVVC/" },
] as const;

export function CraftBook() {
  const [current, setCurrent] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const page = pages[current];
  const show = (index: number) => setCurrent(Math.max(0, Math.min(pages.length - 1, index)));
  const onKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") { show(current + 1); event.preventDefault(); }
    if (event.key === "ArrowLeft") { show(current - 1); event.preventDefault(); }
  };
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => { pointerStart.current = event.clientX; };
  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) > 50) show(current + (distance < 0 ? 1 : -1));
  };
  return <div className="craft-book" role="group" aria-label="RK Derawala craft journal" tabIndex={0} onKeyDown={onKey} onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
    <div className="craft-book-page" key={page.title}><div className="craft-book-picture"><Image src={page.image} alt={page.alt} fill sizes="(max-width: 700px) 100vw, 52vw" className="cover-image" /></div><div className="craft-book-story"><h3>{page.title}</h3><p>{page.copy}</p><a href={page.source} target="_blank" rel="noopener noreferrer">See the original post</a></div></div>
    <div className="craft-book-controls"><button type="button" onClick={() => show(current - 1)} disabled={current === 0} aria-label="Previous journal page">←</button><span aria-live="polite">{page.title}</span><button type="button" onClick={() => show(current + 1)} disabled={current === pages.length - 1} aria-label="Next journal page">→</button></div>
  </div>;
}
