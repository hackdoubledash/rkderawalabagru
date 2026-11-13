import { ArrowUpRight } from "lucide-react";
import { ArchiveGallery } from "../components/archive-gallery";
import { CraftFilm } from "../components/craft-film";
import { CraftScrollStory } from "../components/craft-scroll-story";
import { ArrowLink, Breadcrumbs, PageTitle, Picture } from "../components/editorial";
import { craftStageImage, pageMetadata, visible } from "../lib/site";
import { craftSource, dabuSource, filmSource, photos, processSteps } from "../lib/site-data";

const description = "Follow Bagru hand block printing from carved wood to the finished repeat, and see where Dabu mud resist fits into the process.";
export const metadata = pageMetadata("/the-craft", "The Craft", description);

const glossary = [
  ["Block", "A carved piece of wood that carries a design in relief."],
  ["Motif", "The individual form, such as a flower or a geometric shape, printed from the block."],
  ["Repeat", "The pattern created by placing a motif again and again across the cloth."],
  ["Resist", "A material that limits where dye can reach the cloth. Dabu uses a paste made with mud."],
  ["Dye", "A colourant used to give the fabric colour."],
];

export default function Craft() {
  const steps = processSteps.map((step) => ({ ...step, image: craftStageImage(step) }));
  const detail = visible(photos.detail) ? photos.detail : photos.repeat;

  return (
    <>
      <Breadcrumbs items={[{ name: "The Craft" }]} />
      <PageTitle title="The work of a print" description={description} photo={visible(photos.print) ? photos.print : photos.film}
        variant="craft-title" />
      <section className="making chapter" aria-labelledby="process-title">
        <div className="frame chapter-heading">
          <h2 id="process-title">Wood, colour, cloth</h2>
          <p>Direct printing applies colour with the block. Dabu adds a resist and dyeing stage. The sequence varies with the design and the maker.</p>
        </div>
        <CraftScrollStory steps={steps} idPrefix="craft" />
        <div className="frame chapter-end inline-links">
          <a href={craftSource} className="text-link">Hand block printing source <ArrowUpRight aria-hidden="true" /></a>
          <a href={dabuSource} className="text-link">Dabu process source <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>
      <section className="frame chapter film-chapter" aria-labelledby="film-title">
        <div className="chapter-heading"><h2 id="film-title">At the worktable</h2><p>Watch how a printer positions each impression.</p></div>
        <figure className="film-feature"><div className="print-frame"><Picture photo={photos.film} sizes="95vw" /><CraftFilm /></div>
          <figcaption>Hand block printing at a Bagru workshop. <a href={filmSource}>Incredible India</a>, <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.</figcaption></figure>
      </section>
      <section className="material chapter" aria-labelledby="detail-title">
        <div className="frame material-grid">
          <div><h2 id="detail-title">Read a repeat</h2><p>Compare the edge of the motif with the space around it. Slight variations are easier to see when you enlarge the cloth.</p></div>
          <ArchiveGallery images={[detail]} layout="macro" />
        </div>
      </section>
      <section className="frame chapter editorial-reading" aria-labelledby="glossary-title">
        <h2 id="glossary-title">Words at the table</h2>
        <dl className="glossary">{glossary.map(([term, definition]) => <div key={term}><dt>{term}</dt><dd>{definition}</dd></div>)}</dl>
        <ArrowLink href="/collections/textiles">See the textiles</ArrowLink>
      </section>
    </>
  );
}
