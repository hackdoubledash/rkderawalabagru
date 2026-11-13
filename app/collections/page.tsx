import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CollectionIndex } from "../components/collection-index";
import { Breadcrumbs, PageTitle, Print } from "../components/editorial";
import { textileEntries } from "../lib/collections";
import { pageMetadata, visible } from "../lib/site";
import { photos, pottery } from "../lib/site-data";

const description = "Explore the RK Derawala textile collections from Bagru, with fabrics, sarees, dupattas and stoles.";
export const metadata = pageMetadata("/collections", "Collections", description);

export default function Collections() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Collections" }]} />
      <PageTitle title="Collections" description={description} variant="collections-title">
        <Link href="/collections/textiles" className="button">Explore textiles <ArrowUpRight aria-hidden="true" /></Link>
      </PageTitle>
      <div className="collection-banner"><Print photo={visible(photos.red) ? photos.red : photos.film} caption={false} /></div>
      <section className="chapter frame" aria-labelledby="cloth-title">
        <div className="chapter-heading"><h2 id="cloth-title">Cloth in four forms</h2><p>Choose a category to look at its patterns, uses and details.</p></div>
        <CollectionIndex entries={textileEntries} />
        {pottery.published && pottery.objects.length > 0 && <Link className="arrow-link" href="/collections/blue-pottery">Explore blue pottery</Link>}
      </section>
    </>
  );
}
