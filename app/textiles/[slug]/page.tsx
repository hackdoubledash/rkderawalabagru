import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { categories, whatsapp } from "../../lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) return {};
  return {
    title: `${category.name} | RK Derawala Bagru`,
    description: `${category.description} Explore ${category.name.toLowerCase()} and the hand block printing craft of RK Derawala in Bagru, Rajasthan.`,
    alternates: process.env.NEXT_PUBLIC_SITE_URL && !process.env.NEXT_PUBLIC_SITE_URL.includes("example.com") ? { canonical: `/textiles/${slug}` } : undefined,
  };
}

export default async function TextilePage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  const next = categories[(categories.findIndex((item) => item.slug === slug) + 1) % categories.length];

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="category-hero" id="top" aria-labelledby="category-title">
          <Image src={category.image} alt={category.alt} fill loading="eager" fetchPriority="high" sizes="100vw" className="cover-image" />
          <div className="category-hero-inner"><h1 id="category-title">{category.name}</h1><div className="category-hero-bottom"><p>{category.description}</p><a href="/#textiles">← All textiles</a></div></div>
        </section>
        <section className="category-story section-space" aria-labelledby="category-story-title">
          <h2 id="category-story-title">Marked by hand.</h2>
          <div className="category-story-copy"><p>{category.detail}</p><a className="text-link" href={whatsapp} target="_blank" rel="noopener noreferrer">Ask about {category.name.toLowerCase()} <span aria-hidden="true">↗</span></a></div>
        </section>
        <div className="category-photos section-space"><figure><Image src={category.companion} alt={category.companionAlt} fill sizes="(max-width: 700px) 50vw, 42vw" className="cover-image" /><figcaption>From the RK Derawala archive</figcaption></figure><figure><Image src="/media/workshop-printing.jpg" alt="Hand printing a striped motif onto cloth in the workshop" fill sizes="(max-width: 700px) 50vw, 42vw" className="cover-image" /><figcaption>The making / Bagru</figcaption></figure><figure><Image src="/media/derawala-family.jpg" alt="Ram Kishore Chhipa with the Derawala family before indigo printed cloth" fill sizes="(max-width: 700px) 100vw, 80vw" className="cover-image" /><figcaption>The Derawala family</figcaption></figure></div>
        <figure className="category-film"><Image src="/video/bagru-block-printing-poster.jpg" alt="" fill sizes="100vw" className="cover-image" /><video autoPlay muted loop playsInline preload="metadata" poster="/video/bagru-block-printing-poster.jpg"><source src="/video/bagru-block-printing.mp4" type="video/mp4" /></video><figcaption>Hand block printing in Bagru. Film: <a href="https://commons.wikimedia.org/wiki/File:Blockprinting_in_Bagru_-_India.webm" target="_blank" rel="noopener noreferrer">Incredible India</a>. Filmed at a separate workshop.</figcaption></figure>
        <div className="category-next section-space"><a href={`/textiles/${next.slug}`}>Explore {next.name.toLowerCase()}</a></div>
      </main>
      <SiteFooter />
    </>
  );
}
