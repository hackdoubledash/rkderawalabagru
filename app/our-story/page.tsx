import { ArrowUpRight } from "lucide-react";
import { ArchiveGallery } from "../components/archive-gallery";
import { ArrowLink, Breadcrumbs, PageTitle, Print } from "../components/editorial";
import { Recognition } from "../components/recognition";
import { pageMetadata, visible } from "../lib/site";
import { artisan, photos } from "../lib/site-data";

const description = "The Derawala family, Ram Kishore Chhipa and a practice rooted in the block printing workshops of Bagru.";
export const metadata = pageMetadata("/our-story", "Our Story", description);

export default function OurStory() {
  const archive = [photos.family, photos.award, photos.print].filter(visible);

  return (
    <>
      <Breadcrumbs items={[{ name: "Our Story" }]} />
      <PageTitle title="A life in print" description={description} photo={photos.family} variant="story-title" />
      <section className="chapter frame editorial-reading" aria-labelledby="roots-title">
        <h2 id="roots-title">Rooted in Bagru</h2>
        <div>
          <p>In Bagru, west of Jaipur, printed cloth is part of the town’s working life. The pattern begins with a carved block and takes shape on a long printing table. The placement of each impression is judged by hand.</p>
          <p>The Rajasthan artisan directory records Ram Kishore Chhipa’s work in hand block printing. His recognition belongs to that practice, from the making of a motif to the finished length of cloth.</p>
          <a className="text-link" href={artisan}>Read the artisan profile <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>
      <Recognition full />
      <section className="chapter frame family-grid" aria-labelledby="working-title">
        <Print photo={visible(photos.print) ? photos.print : photos.film} />
        <div><h2 id="working-title">At the printing table</h2><p>The workshop photographs bring the story back to the work. A printer steadies the block, lines up the next impression and presses. Keeping a repeat coherent over a full length depends on small decisions made over and over.</p><ArrowLink href="/the-craft">Follow the making</ArrowLink></div>
      </section>
      {archive.length > 0 && <section className="chapter archive-section" aria-labelledby="archive-title">
        <div className="frame"><div className="chapter-heading"><h2 id="archive-title">From the archive</h2><p>Family, recognition and work at the table.</p></div><ArchiveGallery images={archive} layout="story" /></div>
      </section>}
    </>
  );
}
