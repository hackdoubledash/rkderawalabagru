"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Photo } from "../lib/site-data";

type Entry = { name: string; href: string; description: string; image?: Photo };

export function CollectionIndex({ entries }: { entries: Entry[] }) {
  const [active, setActive] = useState(0);
  const hasPhotos = entries.some((entry) => entry.image);
  return (
    <div className={`collection-index ${hasPhotos ? "" : "without-photos"}`}>
      <ul>
        {entries.map((entry, index) => (
          <li key={entry.href}>
            <Link href={entry.href} onPointerEnter={() => setActive(index)} onFocus={() => setActive(index)}>
              {entry.image && <div className="index-mobile-image">
                <Image src={entry.image.src} alt={entry.image.alt} fill sizes="(max-width: 720px) 27vw, 0px" style={{ objectPosition: entry.image.position }} />
              </div>}
              <span className="index-label"><strong>{entry.name}</strong><span>{entry.description}</span></span>
              <span className="index-arrow" aria-hidden="true">↗</span>
            </Link>
          </li>
        ))}
      </ul>
      {hasPhotos && <div className="collection-preview" aria-hidden="true">
        {entries.map((entry, index) => entry.image && (
          <div key={entry.href} className={index === active ? "is-current" : ""}>
            <Image src={entry.image.src} alt="" fill sizes="(min-width: 721px) 43vw, 0px" style={{ objectPosition: entry.image.position }} />
          </div>
        ))}
      </div>}
    </div>
  );
}
