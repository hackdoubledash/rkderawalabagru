import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveGallery } from "../../../components/archive-gallery";
import { ArrowLink, Breadcrumbs, PageTitle } from "../../../components/editorial";
import { publishedTextiles } from "../../../lib/collections";
import { pageMetadata, visible } from "../../../lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedTextiles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = publishedTextiles.find((item) => item.slug === slug);
  if (!category) notFound();
  return pageMetadata(`/collections/textiles/${slug}`, category.name, category.description);
}

export default async function TextileDetail({ params }: Props) {
  const { slug } = await params;
  const position = publishedTextiles.findIndex((item) => item.slug === slug);
  const category = publishedTextiles[position];
  if (!category) notFound();

  const previous = publishedTextiles[(position + publishedTextiles.length - 1) % publishedTextiles.length];
  const next = publishedTextiles[(position + 1) % publishedTextiles.length];
  const photos = category.gallery.filter(visible);
  const contact = `/contact?collection=${category.slug}#enquiry`;

  return (
    <>
      <Breadcrumbs items={[
        { name: "Collections", href: "/collections" },
        { name: "Textiles", href: "/collections/textiles" },
        { name: category.name },
      ]} />
      <PageTitle title={category.name} description={category.description} photo={category.image} variant={`textile-hero hero-${category.layout}`}>
        <Link className="button" href={contact}>Ask about {category.name.toLowerCase()} <ArrowUpRight aria-hidden="true" /></Link>
      </PageTitle>
      <section className={`chapter frame editorial-reading reading-${category.layout}`} aria-labelledby="textile-story">
        <h2 id="textile-story">{category.heading}</h2>
        <div><p>{category.detail}</p><ArrowLink href="/the-craft">See how the print is made</ArrowLink></div>
      </section>
      {photos.length > 0 && <section className="chapter archive-section" aria-labelledby="cloth-archive">
        <div className="frame">
          <div className="chapter-heading"><h2 id="cloth-archive">The print archive</h2><p>Workshop references for pattern and colour. Enquire for photographs of available pieces.</p></div>
          <ArchiveGallery images={photos} layout={category.layout} />
        </div>
      </section>}
      <section className="frame chapter editorial-reading" aria-labelledby="textile-enquiry">
        <h2 id="textile-enquiry">Choose with the workshop</h2>
        <div><p>{category.enquiry}</p><ArrowLink href={contact}>Ask about {category.name.toLowerCase()}</ArrowLink></div>
      </section>
      <nav className="collection-neighbours frame" aria-label="Other textile collections">
        <Link href={`/collections/textiles/${previous.slug}`} aria-label={`Previous collection: ${previous.name}`}><ArrowLeft aria-hidden="true" /> {previous.name}</Link>
        <Link href={`/collections/textiles/${next.slug}`} aria-label={`Next collection: ${next.name}`}>{next.name} <ArrowRight aria-hidden="true" /></Link>
      </nav>
    </>
  );
}
