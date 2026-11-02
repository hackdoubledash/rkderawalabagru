"use client";

import Image from "next/image";
import { useState } from "react";
import { processSteps } from "../lib/site-data";

export function ProcessExplorer() {
  const [active, setActive] = useState(0);
  const step = processSteps[active];

  return (
    <div className="process-explorer">
      <div className="process-stage" key={step.number}>
        <Image src={step.image} alt={step.alt} fill sizes="(max-width: 900px) 100vw, 55vw" className="cover-image" />
        <a className="process-stage-link" href={step.source} target="_blank" rel="noopener noreferrer"><span className="process-stage-bottom"><span>{step.number} / 04</span><span>View source post ↗</span></span></a>
      </div>
      <div className="process-controls">
        <div className="process-steps" aria-label="Explore the printing process">
          {processSteps.map((item, index) => <button key={item.number} type="button" aria-pressed={active === index} className={active === index ? "is-active" : ""} onClick={() => setActive(index)}><span>{item.number}</span><strong>{item.name}</strong><span aria-hidden="true">↗</span></button>)}
        </div>
        <div className="process-detail" key={step.verb} aria-live="polite">
          <span className="eyebrow">{step.verb} / Bagru</span>
          <p>{step.text}</p>
        </div>
      </div>
    </div>
  );
}
