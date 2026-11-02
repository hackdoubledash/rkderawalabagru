"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import "./craft-book.css";

type Leaf = { front: ReactNode; back: ReactNode };

function Page({ number, title, copy, image, alt, note, source }: { number: string; title: string; copy: string; image: string; alt: string; note: string; source?: string }) {
  const picture = <Image src={image} alt={alt} fill sizes="(max-width: 700px) 42vw, 25vw" />;
  return <div className="craft-page"><div className="craft-page-top"><span>RK Derawala / Bagru</span><span>{number}</span></div><h3>{title}</h3>{source ? <a className="craft-page-image" href={source} target="_blank" rel="noopener noreferrer" aria-label={`Watch RK Derawala's reel about ${title.toLowerCase()}`}>{picture}</a> : <div className="craft-page-image">{picture}</div>}<p>{copy}</p><span className="craft-page-note">{note}</span></div>;
}

const leaves: Leaf[] = [
  {
    front: <div className="craft-cover"><span>The craft journal · 01</span><h3>From hand<br /><em>to cloth.</em></h3><div className="craft-cover-mark" aria-hidden="true">✳</div><div><span>RK Derawala</span><span>Open to explore ↗</span></div></div>,
    back: <Page number="01" title="A place called Bagru" copy="Here, the language of print is learned by doing, then carried from one generation to the next." image="/media/derawala-family.jpg" alt="Derawala family with indigo printed cloth" note="Place / People" />,
  },
  {
    front: <Page number="02" title="The carved block" copy="A motif begins in wood. Each placement leaves a small record of the hand behind it." image="/media/printing-blocks.jpg" alt="Carved wooden printing blocks in the workshop" note="Wood / Motif" source="https://www.instagram.com/rkderawala_bagru/reel/DWYxGp0CTgq/" />,
    back: <Page number="03" title="Colour from nature" copy="Natural colours and vegetable dyes are part of Bagru's established printing practice." image="/media/indigo-drying.jpg" alt="Indigo printed cloth drying outdoors" note="Earth / Colour" />,
  },
  {
    front: <Page number="04" title="The finished cloth" copy="Fabric, sarees, dupattas and stoles make room for the marks and variations of handmade work." image="/media/printed-cloth-detail.jpg" alt="Hand block printed motifs on pale cloth" note="Cloth / Memory" />,
    back: <div className="craft-cover craft-cover-back"><span>End of the journal</span><h3>The story<br /><em>continues.</em></h3><div className="craft-cover-mark" aria-hidden="true">✳</div><div><span>Bagru, Rajasthan</span><span>RK Derawala</span></div></div>,
  },
];

const duration = 850;
const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const clamp = (n: number) => Math.max(0, Math.min(1, n));

export function CraftBook() {
  const [spread, setSpread] = useState(0);
  const target = useRef(0);
  const progress = useRef([0, 0, 0]);
  const leavesRef = useRef<(HTMLDivElement | null)[]>([]);
  const bookRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const drag = useRef<{ id: number; startX: number; side: 1 | -1; leaf: number; width: number; moved: boolean } | null>(null);
  const reduced = useRef(false);

  const paint = useCallback(() => {
    progress.current.forEach((value, index) => {
      const leaf = leavesRef.current[index];
      if (!leaf) return;
      const lift = reduced.current ? 0 : Math.sin(value * Math.PI) * 28;
      leaf.style.transform = `translateZ(${(lift + (value < .5 ? 3 - index : index) * .8).toFixed(1)}px) rotateY(${-180 * value}deg)`;
      leaf.style.setProperty("--turn", String(Math.sin(value * Math.PI)));
    });
    if (bookRef.current) {
      const first = progress.current[0];
      const last = progress.current[2];
      const shift = -25 * (1 - ease(clamp(first / .55))) + 25 * ease(clamp((last - .45) / .55));
      bookRef.current.style.transform = `translateX(${shift}%) rotateX(6deg)`;
    }
  }, []);

  const goTo = useCallback((next: number) => {
    const end = Math.max(0, Math.min(leaves.length, Math.round(next)));
    const previous = target.current;
    target.current = end;
    setSpread(end);
    cancelAnimationFrame(frame.current);
    if (reduced.current) {
      progress.current = progress.current.map((_, i) => Number(i < end));
      paint();
      return;
    }
    const from = [...progress.current];
    const start = performance.now();
    const tick = (now: number) => {
      let active = false;
      progress.current = from.map((value, i) => {
        const goal = Number(i < end);
        if (Math.abs(goal - value) < .001) return goal;
        const delay = end > previous ? Math.max(0, i - previous) * 80 : Math.max(0, previous - 1 - i) * 80;
        const t = clamp((now - start - delay) / duration);
        if (t < 1) active = true;
        return value + (goal - value) * ease(t);
      });
      paint();
      if (active) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  }, [paint]);

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = media.matches;
    const update = () => { reduced.current = media.matches; };
    media.addEventListener("change", update);
    paint();
    return () => { cancelAnimationFrame(frame.current); media.removeEventListener("change", update); };
  }, [paint]);

  const down = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if ((event.target as HTMLElement).closest("a, button")) return;
    const rect = bookRef.current?.getBoundingClientRect();
    if (!rect) return;
    let side: 1 | -1 = event.clientX > rect.left + rect.width / 2 ? 1 : -1;
    if (target.current === 0) side = 1;
    if (target.current === leaves.length) side = -1;
    cancelAnimationFrame(frame.current);
    drag.current = { id: event.pointerId, startX: event.clientX, side, leaf: side === 1 ? target.current : target.current - 1, width: rect.width / 2, moved: false };
    stageRef.current?.setPointerCapture(event.pointerId);
  };
  const move = (event: PointerEvent<HTMLDivElement>) => {
    const current = drag.current;
    if (!current || current.id !== event.pointerId) return;
    const dx = event.clientX - current.startX;
    if (!current.moved && Math.abs(dx) < 7) return;
    current.moved = true;
    progress.current[current.leaf] = current.side === 1 ? clamp(-dx / (current.width * 1.1)) : clamp(1 - dx / (current.width * 1.1));
    paint();
  };
  const up = (event: PointerEvent<HTMLDivElement>) => {
    const current = drag.current;
    if (!current || current.id !== event.pointerId) return;
    drag.current = null;
    if (!current.moved) return goTo(target.current + current.side);
    const value = progress.current[current.leaf];
    goTo(current.side === 1 ? target.current + Number(value > .3) : target.current - Number(value < .7));
  };
  const key = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") goTo(target.current + 1);
    else if (event.key === "ArrowLeft") goTo(target.current - 1);
    else if (event.key === "Home") goTo(0);
    else if (event.key === "End") goTo(leaves.length);
    else return;
    event.preventDefault();
  };

  const status = spread === 0 ? "Cover" : spread === leaves.length ? "Back cover" : `Pages ${spread * 2}–${spread * 2 + 1}`;
  return <div className="craft-book" role="group" aria-roledescription="book" aria-label="RK Derawala craft journal" tabIndex={0} onKeyDown={key}>
    <div className="craft-book-stage" ref={stageRef} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={() => goTo(target.current)}>
      <div className="craft-book-body" ref={bookRef}>
        <div className="craft-book-shadow" aria-hidden="true" />
        {leaves.map((leaf, index) => <div className="craft-book-leaf" key={index} ref={node => { leavesRef.current[index] = node; }}>
          <div className="craft-book-face craft-book-front" inert={spread !== index}>{leaf.front}</div>
          <div className="craft-book-face craft-book-back" inert={spread !== index + 1}>{leaf.back}</div>
        </div>)}
      </div>
    </div>
    <div className="craft-book-controls"><button type="button" onClick={() => goTo(spread - 1)} disabled={spread === 0} aria-label="Previous journal page">←</button><span aria-live="polite">{status}</span><button type="button" onClick={() => goTo(spread + 1)} disabled={spread === leaves.length} aria-label="Next journal page">→</button></div>
  </div>;
}
