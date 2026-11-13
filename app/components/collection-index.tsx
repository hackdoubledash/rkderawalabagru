import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Picture } from "./editorial";
import type { Photo } from "../lib/site-data";

type Entry = { name: string; href: string; description: string; image?: Photo };

export function CollectionIndex({ entries }: { entries: Entry[] }) {
  return (
    <ul className="collection-index">
      {entries.map((entry) => (
        <li key={entry.href}>
          <Link href={entry.href}>
            <div className={entry.image ? "print-frame" : "print-frame index-pattern"} aria-hidden="true">
              {entry.image && <Picture photo={{ ...entry.image, alt: "" }}
                sizes="(max-width: 580px) 92vw, (max-width: 1050px) 46vw, 23vw" />}
            </div>
            <span className="index-label">
              <strong>{entry.name}</strong>
              <span>{entry.description}</span>
            </span>
            <ArrowUpRight className="index-arrow" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
