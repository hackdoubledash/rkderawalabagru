"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { processSteps } from "../lib/site-data";

export function ProcessExplorer() {
  const [active, setActive] = useState(0);
  const cardsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const step = processSteps[active];

  const select = (index: number) => {
    const next = Math.max(0, Math.min(processSteps.length - 1, index));
    setActive(next);
    cardsRef.current[next]?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "nearest", inline: "center" });
  };

  return <div className="process-explorer">
    <div className="process-toolbar"><div className="process-progress" role="progressbar" aria-label="Printing process" aria-valuenow={active + 1} aria-valuemin={1} aria-valuemax={processSteps.length}><span style={{ width: `${((active + 1) / processSteps.length) * 100}%` }} /></div><div className="process-arrows"><button type="button" onClick={() => select(active - 1)} disabled={active === 0} aria-label="Previous stage">←</button><button type="button" onClick={() => select(active + 1)} disabled={active === processSteps.length - 1} aria-label="Next stage">→</button></div></div>
    <div className="process-track" aria-label="Explore the printing process">{processSteps.map((item, index) => <button ref={el => { cardsRef.current[index] = el; }} className={`process-card${active === index ? " is-active" : ""}`} key={item.name} type="button" aria-pressed={active === index} onClick={() => select(index)}><strong>{item.name}</strong><p>{item.text}</p><span className="process-card-photo"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 75vw, 24vw" className="cover-image" /></span></button>)}</div>
    <div className="process-selected" aria-live="polite"><p>{step.name}: {step.text}</p><a href={step.source} target="_blank" rel="noopener noreferrer">See this moment on Instagram</a></div>
  </div>;
}
