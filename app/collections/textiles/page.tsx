import { CollectionIndex } from "../../components/collection-index";
import { ArrowLink, Breadcrumbs, PageTitle } from "../../components/editorial";
import { textileEntries } from "../../lib/collections";
import { pageMetadata } from "../../lib/site";
import { photos } from "../../lib/site-data";

const description = "Four ways to explore the printed cloth of RK Derawala. Browse fabrics, sarees, dupattas and stoles.";
export const metadata = pageMetadata("/collections/textiles", "Textiles", description);

export default function Textiles() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Collections", href: "/collections" }, { name: "Textiles" }]} />
      <PageTitle title="The textiles" description={description} photo={photos.detail} variant="textiles-title" />
      <section className="chapter collection-chapter" aria-labelledby="textile-index">
        <div className="frame">
          <div className="chapter-heading"><h2 id="textile-index">Find your cloth</h2><p>Archive photographs show the workshop’s print language. Ask about current pieces directly.</p></div>
          <CollectionIndex entries={textileEntries} />
        </div>
      </section>
      <section className="chapter frame editorial-reading" aria-labelledby="cloth-detail">
        <h2 id="cloth-detail">Look at the edges</h2>
        <div><p>A whole length tells you how the pattern repeats. A detail shows the edge of an impression, the ground colour and how a border meets the print. Ask the workshop for both views if you are choosing cloth for a particular project.</p><ArrowLink href="/contact#enquiry">Ask about a textile</ArrowLink></div>
      </section>
    </>
  );
}
