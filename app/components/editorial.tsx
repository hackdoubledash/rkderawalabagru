import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Photo } from "../lib/site-data";
import { visible } from "../lib/site";

export function Picture({ photo, sizes = "(max-width: 720px) 100vw, 50vw", eager = false }: {
  photo: Photo;
  sizes?: string;
  eager?: boolean;
}) {
  return <Image src={photo.src} alt={photo.alt} fill sizes={sizes} preload={eager}
    style={{ objectPosition: photo.position }} />;
}

export function Print({ photo, className = "", caption = true }: {
  photo: Photo;
  className?: string;
  caption?: boolean;
}) {
  if (!visible(photo)) return null;
  return (
    <figure className={`print ${className}`}>
      <div className="print-frame"><Picture photo={photo} /></div>
      {caption && <figcaption>{photo.caption}</figcaption>}
    </figure>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs frame" aria-label="Breadcrumb">
      <ol>
        <li><Link href="/">Home</Link></li>
        {items.map(({ name, href }) => (
          <li key={name}>{href ? <Link href={href}>{name}</Link> : <span aria-current="page">{name}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}

export function ArrowLink({ href, children, className = "" }: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return <Link href={href} className={`arrow-link ${className}`}>{children}<ArrowUpRight aria-hidden="true" /></Link>;
}

export function PageTitle({ title, description, photo, children, variant = "" }: {
  title: string;
  description: string;
  photo?: Photo;
  children?: React.ReactNode;
  variant?: string;
}) {
  const showPhoto = photo && visible(photo);
  return (
    <header className={`page-title frame ${showPhoto ? "has-photo" : ""} ${variant}`}>
      <div className="page-title-copy">
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
      {showPhoto && <figure className="print">
        <div className="print-frame"><Picture photo={photo} eager /></div>
        <figcaption>{photo.caption}</figcaption>
      </figure>}
    </header>
  );
}
