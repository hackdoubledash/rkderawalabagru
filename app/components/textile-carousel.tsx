"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { categories } from "../lib/site-data";

export function TextileCarousel() {
  const rail = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ start: true, end: false });

  useEffect(() => {
    const node = rail.current;
    if (!node) return;
    const update = () => setPosition({ start: node.scrollLeft < 8, end: node.scrollLeft + node.clientWidth >= node.scrollWidth - 8 });
    update();
    node.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { node.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  const move = (direction: number) => {
    const node = rail.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>(".textile-card");
    node.scrollBy({ left: direction * ((card?.offsetWidth ?? 350) + 18), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  return (
    <div className="carousel-shell">
      <div className="carousel-actions" aria-label="Textile gallery controls">
        <span>Explore the cloth</span>
        <div><button type="button" aria-label="Previous textiles" disabled={position.start} onClick={() => move(-1)}>←</button><button type="button" aria-label="Next textiles" disabled={position.end} onClick={() => move(1)}>→</button></div>
      </div>
      <div className="textile-rail" ref={rail}>
        {categories.map((item) => <Link className="textile-card" href={`/textiles/${item.slug}`} key={item.slug}>
          <div className="textile-card-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 78vw, 32vw" className="cover-image" /></div>
          <div className="textile-card-info"><h3>{item.name}</h3><span aria-hidden="true">↗</span></div>
        </Link>)}
      </div>
    </div>
  );
}
