import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "./components/brand-mark";
import { ArchiveGallery } from "./components/archive-gallery";
import { CollectionIndex } from "./components/collection-index";
import { CraftFilm } from "./components/craft-film";
import { CraftScrollStory } from "./components/craft-scroll-story";
import { ArrowLink, Picture, Print } from "./components/editorial";
import { Recognition } from "./components/recognition";
import { textileEntries } from "./lib/collections";
import { craftStageImage, visible } from "./lib/site";
import { photos, processSteps } from "./lib/site-data";

export default function Home() {
  const steps = processSteps.filter((step) => step.id !== "prepare" && step.id !== "wash")
    .map((step) => ({ ...step, image: craftStageImage(step) }));
  const material = visible(photos.detail) ? photos.detail : photos.repeat;

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="hero-content">
            <h1 id="hero-title"><span><span>A legacy</span></span><span><span>impressed</span></span><span><span>by hand.</span></span></h1>
            <p>RK Derawala’s hand block printed textiles from Bagru, Rajasthan.</p>
            <div className="hero-actions">
              <Link className="button button-paper" href="/collections">Explore collections <ArrowUpRight aria-hidden="true" /></Link>
              <a className="text-link hero-scroll" href="#story">Discover Bagru <ArrowDown aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-picture"><Picture photo={photos.film} eager sizes="(max-width: 720px) 100vw, 58vw" /></div>
          <CraftFilm className="hero-film" mobileAutoplay={false} />
        </div>
      </section>

      <section className="origin chapter" id="story" aria-labelledby="origin-title">
        <div className="frame origin-grid">
          <div>
            <h2 id="origin-title" className="display-heading">From Bagru,<br />by hand.</h2>
            <p>In Bagru, a pattern starts with the press of a carved wooden block. At RK Derawala, the same gesture carries from one impression to the next, across a length of cloth.</p>
            <ArrowLink href="/our-story">The family in Bagru</ArrowLink>
          </div>
          <Print photo={visible(photos.print) ? photos.print : photos.film} />
        </div>
      </section>

      <Recognition />

      <section className="print-table chapter" aria-labelledby="table-title">
        <div className="frame print-table-grid">
          <div className="table-copy">
            <h2 id="table-title">Flower, leaf, repeat</h2>
            <p>A single sprig can anchor a whole pattern. The spaces between impressions give each leaf and flower room to read.</p>
          </div>
          <Print photo={photos.botanical} className="table-main art-study" />
          <Print photo={visible(photos.detail) ? photos.detail : photos.repeat} className="table-detail" />
        </div>
      </section>

      <section className="making chapter" id="process" aria-labelledby="making-title">
        <div className="frame chapter-heading">
          <h2 id="making-title">From block to cloth</h2>
          <p>The print takes shape through carving, placement, resist and colour.</p>
        </div>
        <CraftScrollStory steps={steps} idPrefix="home" />
        <div className="frame chapter-end"><ArrowLink href="/the-craft">Explore the full process</ArrowLink></div>
      </section>

      <section className="collection-chapter chapter" id="textiles" aria-labelledby="textile-title">
        <div className="frame">
          <div className="chapter-heading">
            <h2 id="textile-title">Made to be lived with</h2>
            <ArrowLink href="/collections">View collections</ArrowLink>
          </div>
          <CollectionIndex entries={textileEntries} />
        </div>
      </section>

      <section className="material chapter" id="detail" aria-labelledby="material-title">
        <div className="frame material-grid">
          <div>
            <h2 id="material-title">Look closer</h2>
            <p>Find where the edge of one impression meets the next. The same block makes marks that differ slightly each time.</p>
          </div>
          <ArchiveGallery images={[material]} layout="macro" />
        </div>
      </section>

      <section className="family-chapter chapter" id="about" aria-labelledby="family-title">
        <div className="frame family-grid">
          {visible(photos.family) ? <Print photo={photos.family} /> : <div className="family-mark"><BrandMark size={208} /></div>}
          <div>
            <h2 id="family-title">A family practice</h2>
            <p>Cloth, tools and people at work come together in the Derawala family’s archive. The practice continues in the daily decisions made at the printing table.</p>
            <ArrowLink href="/our-story">Meet the Derawala family</ArrowLink>
          </div>
        </div>
      </section>

      <section className="pathways chapter" id="enquiries" aria-labelledby="pathways-title">
        <div className="frame">
          <div className="chapter-heading"><h2 id="pathways-title">Start a conversation</h2><p>Tell the workshop what you’re looking for.</p></div>
          <div className="pathway-list">
            <div><ArrowLink href="/contact#enquiry">Find a piece</ArrowLink><p>Ask what’s available or request a closer view.</p></div>
            <div><ArrowLink href="/trade">Discuss a collaboration</ArrowLink><p>Share a brief for a studio, boutique or interiors project.</p></div>
            <div><ArrowLink href="/trade?audience=international#enquiry">International enquiry</ArrowLink><p>Include your location and ask about delivery options.</p></div>
          </div>
          <div className="chapter-end" id="contact"><ArrowLink href="/contact">Contact and directions</ArrowLink></div>
        </div>
      </section>

      <section className="journal-band" id="journal" aria-labelledby="journal-band-title">
        <div className="frame journal-band-grid">
          <div>
            <h2 id="journal-band-title">Notes from the archive</h2>
            <p>Read about the marks, materials and methods behind Bagru printed cloth.</p>
            <ArrowLink href="/journal">Read the journal</ArrowLink>
          </div>
          <Print photo={photos.garden} className="garden-plate" caption={false} />
        </div>
      </section>
      <div id="questions" className="frame legacy-anchor"><Link className="text-link" href="/contact#questions">Questions about enquiries and visits</Link></div>
    </>
  );
}
