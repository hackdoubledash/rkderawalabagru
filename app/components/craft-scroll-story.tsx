"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "./brand-mark";
import type { Photo } from "../lib/site-data";

type Step = { id: string; title: string; text: string; image?: Photo };

function StageImage({ photo }: { photo: Photo }) {
  return <Image src={photo.src} alt={photo.alt} sizes="(max-width: 850px) 100vw, 55vw"
    fill style={{ objectPosition: photo.position }} />;
}

export function CraftScrollStory({ steps, idPrefix }: { steps: readonly Step[]; idPrefix: string }) {
  const list = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const items = Array.from(list.current?.querySelectorAll<HTMLLIElement>("li") ?? []);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries.find((candidate) => candidate.isIntersecting);
      if (entry) setActive(items.indexOf(entry.target as HTMLLIElement));
    }, { rootMargin: "-38% 0px -44% 0px" });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="craft-story frame">
      <noscript><style>{".craft-story{display:block}.craft-stage{display:none}.craft-steps li,.craft-steps li:last-child{min-height:0;display:block}.craft-step-photo{display:block;max-width:640px}"}</style></noscript>
      <div className="craft-stage" aria-hidden="true">
        <div className="craft-stage-picture">
          {steps.map((step, index) => (
            <div className={index === active ? "is-current" : ""} key={step.id}>
              {step.image ? <StageImage photo={step.image} /> : <BrandMark size={160} />}
            </div>
          ))}
        </div>
        <div className="craft-progress">
          <span>{active + 1} of {steps.length}</span>
          <span className="craft-progress-track"><i style={{ transform: `scaleX(${(active + 1) / steps.length})` }} /></span>
          <span>{steps[active].title}</span>
        </div>
        {steps[active].image && <p className="craft-stage-caption">{steps[active].image.caption}</p>}
      </div>
      <ol className="craft-steps" ref={list}>
        {steps.map((step, index) => (
          <li id={`${idPrefix}-${step.id}`} key={step.id} className={index === active ? "is-current" : ""}>
            <div>
              <h3>{step.title}</h3>
              {step.image && <figure className="craft-step-photo"><div><StageImage photo={step.image} /></div><figcaption>{step.image.caption}</figcaption></figure>}
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
