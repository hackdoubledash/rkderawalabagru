import Image from "next/image";
import { CraftBook } from "./components/craft-book";
import { CraftFaq } from "./components/craft-faq";
import { DetailStudy } from "./components/detail-study";
import { EnquiryPaths } from "./components/enquiry-paths";
import { ProcessExplorer } from "./components/process-explorer";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { TextileCarousel } from "./components/textile-carousel";
import { instagram, phone, whatsapp } from "./lib/site-data";

const publicUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "RK Derawala",
  description: "Hand block printed textiles in natural colours and vegetable dyes from Bagru, Rajasthan.",
  image: publicUrl ? `${publicUrl}/media/workshop-printing.jpg` : undefined,
  url: publicUrl && !publicUrl.includes("example.com") ? publicUrl : undefined,
  telephone: phone,
  address: { "@type": "PostalAddress", streetAddress: "Bypass Road, Meeno ka Mohalla", addressLocality: "Bagru", addressRegion: "Rajasthan", postalCode: "303007", addressCountry: "IN" },
  sameAs: [instagram],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <div className="site-loader" aria-hidden="true"><div><Image src="/media/instagram-logo.jpg" alt="" width={78} height={78} /><span>RK Derawala</span><i /></div></div>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />

      <main id="main">
        <section className="hero-v3" id="top" aria-labelledby="hero-title">
          <Image className="hero-photo cover-image" src="/media/red-textile.jpg" alt="Red hand printed textile hanging among leaves in Bagru" fill loading="eager" fetchPriority="high" sizes="100vw" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-topline"><span>Hand block printing / Bagru</span><span>Rajasthan, India</span></div>
          <div className="hero-main"><p className="hero-kicker">A living textile tradition</p><h1 id="hero-title"><span>Printed by hand.</span><span><em>Held in memory.</em></span></h1><p>Colour, cloth and generations of knowledge—impressed one block at a time.</p><a className="light-link" href="#story">Enter the story <span aria-hidden="true">↗</span></a></div>
          <div className="hero-bottomline"><span>RK Derawala · Bagru</span><a href="#story">Scroll to discover <span aria-hidden="true">↓</span></a><span>01 / 07</span></div>
        </section>

        <div className="moving-line" aria-hidden="true"><div>WOODEN BLOCKS <span>✳</span> NATURAL COLOUR <span>✳</span> DABU RESIST <span>✳</span> HAND PRINTED CLOTH <span>✳</span> WOODEN BLOCKS <span>✳</span> NATURAL COLOUR <span>✳</span> DABU RESIST <span>✳</span> HAND PRINTED CLOTH <span>✳</span></div></div>

        <section className="story-v3 section-space" id="story" aria-labelledby="story-title">
          <div className="section-index"><span>01 / The story</span><span>Place · People · Practice</span></div>
          <div className="story-grid">
            <div className="story-intro" data-reveal><h2 id="story-title">A pattern begins<br /><em>with a person.</em></h2><p>In Bagru, printing is a conversation between wood, cloth, colour and the hand that brings them together.</p></div>
            <figure className="story-family" data-reveal><Image src="/media/derawala-family.jpg" alt="Ram Kishore Chhipa seated with members of the Derawala family before indigo printed fabric" fill sizes="(max-width: 900px) 100vw, 47vw" className="cover-image" /><figcaption>The Derawala family · Bagru</figcaption></figure>
            <div className="story-text" data-reveal><span className="small-rule" /><p>RK Derawala works within the living tradition of hand block printing and Dabu mud-resist craft. The knowledge is carried through practice: preparing cloth, placing each impression, and allowing colour and sunlight their part.</p><p>These textiles hold the small variations that only human hands can leave.</p><a className="text-link" href="#process">Follow the making <span aria-hidden="true">↗</span></a></div>
            <figure className="story-detail" data-reveal><Image src="/media/floral-archive.jpg" alt="Floral printed textile beside an open craft publication" fill sizes="(max-width: 900px) 42vw, 24vw" className="cover-image" /><figcaption>Motif / Memory</figcaption></figure>
          </div>
        </section>

        <section className="process-v3 section-space" id="process" aria-labelledby="process-title">
          <div className="section-index"><span>02 / The making</span><span>From block to cloth</span></div>
          <div className="process-heading"><h2 id="process-title" data-reveal>Follow<br /><em>the mark.</em></h2><p data-reveal>Choose a stage to see how a motif finds its way onto cloth.</p></div>
          <ProcessExplorer />
        </section>

        <section className="heritage-v3" aria-labelledby="heritage-title">
          <Image src="/media/heritage-illustration.jpg" alt="" fill sizes="100vw" className="cover-image heritage-art" />
          <div className="heritage-content" data-reveal><span>Notes from Bagru</span><h2 id="heritage-title">The beauty lives<br />in <em>the variation.</em></h2><p>No two impressions carry quite the same pressure. That is the trace of the maker, left in the cloth.</p></div>
          <span className="heritage-corner">Wood / Earth / Colour / Time</span>
        </section>

        <section className="journal-v3 section-space" id="journal" aria-labelledby="journal-title">
          <div className="section-index"><span>In the pages</span><span>An interactive craft journal</span></div>
          <div className="journal-heading" data-reveal><h2 id="journal-title">Turn the page.<br /><em>Follow the craft.</em></h2><p>A small look at the hands, tools and cloth behind each impression.</p></div>
          <CraftBook />
          <p className="journal-hint">Tap or drag a page · Use the arrows below</p>
        </section>

        <section className="workshop-v3 section-space" aria-labelledby="workshop-title">
          <div className="section-index"><span>From the workshop</span><span>In motion / On Instagram</span></div>
          <div className="workshop-title" data-reveal><h2 id="workshop-title">Closer to<br /><em>the table.</em></h2><p>Little moments from the making, shared by RK Derawala.</p></div>
          <div className="workshop-grid">
            <a className="workshop-reel workshop-reel-one" href="https://www.instagram.com/rkderawala_bagru/reel/DX6qfSFs-G2/" target="_blank" rel="noopener noreferrer" data-reveal><div className="reel-image"><Image src="/media/hand-printing.jpg" alt="Hands positioning a printing block on striped cloth" fill sizes="(max-width: 700px) 100vw, 45vw" className="cover-image" /></div><span><b>01</b> The human rhythm <i>Watch reel ↗</i></span></a>
            <a className="workshop-reel workshop-reel-two" href="https://www.instagram.com/rkderawala_bagru/reel/DWYxGp0CTgq/" target="_blank" rel="noopener noreferrer" data-reveal><div className="reel-image"><Image src="/media/printing-blocks.jpg" alt="Carved wooden blocks arranged on a workshop floor" fill sizes="(max-width: 700px) 100vw, 35vw" className="cover-image" /></div><span><b>02</b> Tools of the trade <i>Watch reel ↗</i></span></a>
          </div>
        </section>

        <section className="textiles-v3 section-space" id="textiles" aria-labelledby="textiles-title">
          <div className="section-index"><span>03 / The textiles</span><span>An evolving archive</span></div>
          <div className="textiles-heading" data-reveal><h2 id="textiles-title">Cloth for a life<br /><em>in colour.</em></h2><p>Explore the forms this practice takes. Ask the workshop about pieces currently available.</p></div>
          <TextileCarousel />
        </section>

        <DetailStudy />

        <section className="legacy-v3 section-space" id="legacy" aria-labelledby="legacy-title">
          <div className="section-index"><span>05 / The artisan archive</span><span>Ram Kishore Chhipa (Derawala)</span></div>
          <div className="legacy-grid">
            <div className="legacy-copy" data-reveal><h2 id="legacy-title">A life&apos;s work,<br /><em>recognised.</em></h2><p>The Padma Shri and National Award honour Ram Kishore Chhipa (Derawala) and his contribution to hand block printing.</p><a className="text-link" href="https://handmadeinrajasthan.rajasthan.gov.in/content/industries/handmadeinrajasthandepartment/mastercrafts/padmaawardees/list/ramkishorechhipa.html" target="_blank" rel="noopener noreferrer">Read the artisan profile <span aria-hidden="true">↗</span></a></div>
            <figure className="legacy-photo" data-reveal><Image src="/media/padma-shri-ceremony.jpg" alt="Ram Kishore Chhipa receiving the Padma Shri at a formal ceremony" fill sizes="(max-width: 900px) 100vw, 38vw" className="cover-image" /><figcaption>Ram Kishore Chhipa · Padma Shri</figcaption></figure>
            <div className="legacy-awards"><div data-reveal><strong>2009</strong><span>Padma Shri<br />Government of India · Art</span></div><div data-reveal><strong>1987</strong><span>National Award<br />Hand block printing</span></div></div>
          </div>
        </section>

        <EnquiryPaths />
        <CraftFaq />
      </main>
      <SiteFooter />
    </>
  );
}
