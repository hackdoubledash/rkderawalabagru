import Image from "next/image";
import { CraftBook } from "./components/craft-book";
import { CraftFaq } from "./components/craft-faq";
import { DetailStudy } from "./components/detail-study";
import { EnquiryPaths } from "./components/enquiry-paths";
import { ProcessExplorer } from "./components/process-explorer";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { TextileCarousel } from "./components/textile-carousel";
import { instagram, phone } from "./lib/site-data";

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
          <div className="hero-video-stage" aria-hidden="true">
            <Image src="/video/bagru-block-printing-poster.jpg" alt="" fill fetchPriority="high" sizes="100vw" className="cover-image" />
            <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/video/bagru-block-printing-poster.jpg">
              <source src="/video/bagru-block-printing.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <figure className="hero-float hero-float-one"><Image src="/media/printed-cloth-detail.jpg" alt="Close view of hand printed floral motifs on cloth" fill sizes="(max-width: 700px) 32vw, 16vw" /></figure>
          <figure className="hero-float hero-float-two"><Image src="/media/red-textile.jpg" alt="Red hand printed textile hanging among leaves" fill sizes="(max-width: 700px) 30vw, 15vw" /></figure>
          <figure className="hero-float hero-float-three"><Image src="/media/indigo-drying.jpg" alt="Indigo printed cloth drying in Bagru" fill sizes="(max-width: 700px) 34vw, 17vw" /></figure>
          <div className="hero-main"><h1 id="hero-title"><span>RK</span><span>Derawala</span></h1><div className="hero-intro"><p>Hand block printed textiles, made within the living craft tradition of Bagru.</p><a className="light-link" href="#story">Discover the story <span aria-hidden="true">↗</span></a></div></div>
          <div className="hero-bottomline"><span>Wood · Cloth · Colour · Hand</span><a href="#story">Scroll to explore <span aria-hidden="true">↓</span></a><span className="hero-video-credit">Bagru film: <a href="https://commons.wikimedia.org/wiki/File:Blockprinting_in_Bagru_-_India.webm" target="_blank" rel="noopener noreferrer">Incredible India</a> · edited excerpt · <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a></span></div>
        </section>

        <div className="moving-line" aria-hidden="true"><div>WOODEN BLOCKS <span>·</span> NATURAL COLOUR <span>·</span> DABU RESIST <span>·</span> HAND PRINTED CLOTH <span>·</span> WOODEN BLOCKS <span>·</span> NATURAL COLOUR <span>·</span> DABU RESIST <span>·</span> HAND PRINTED CLOTH <span>·</span></div></div>

        <section className="story-v3 bagru-scene" id="story" aria-labelledby="story-title">
          <div className="bagru-pin"><h2 id="story-title">Bagru</h2><p>Where the cloth remembers the hand.</p></div>
          <div className="bagru-frames">
            <figure className="bagru-frame bagru-frame-one"><div className="bagru-photo"><Image src="/media/derawala-family.jpg" alt="Ram Kishore Chhipa seated with members of the Derawala family before indigo printed fabric" fill sizes="(max-width: 700px) 84vw, 43vw" className="cover-image" /></div><figcaption><strong>The people</strong><span>The Derawala family carries this craft through daily practice.</span></figcaption></figure>
            <figure className="bagru-frame bagru-frame-two"><div className="bagru-photo"><Image src="/media/hand-printing.jpg" alt="Artisan positioning a carved block on striped cloth" fill sizes="(max-width: 700px) 84vw, 43vw" className="cover-image" /></div><figcaption><strong>The practice</strong><span>Each impression is placed by hand, with patience and precision.</span></figcaption></figure>
            <figure className="bagru-frame bagru-frame-three"><div className="bagru-photo"><Image src="/media/indigo-drying.jpg" alt="Indigo printed cloth drying in Bagru" fill sizes="(max-width: 700px) 84vw, 43vw" className="cover-image" /></div><figcaption><strong>The place</strong><span>Wood, earth, colour and sunlight belong to the making.</span></figcaption></figure>
          </div>
        </section>

        <section className="legacy-v3 honours-scene section-space" id="legacy" aria-labelledby="legacy-title">
          <div className="legacy-grid">
            <div className="legacy-copy" data-reveal><h2 id="legacy-title">The artisan<br />honoured.</h2><p>Ram Kishore Chhipa (Derawala) helped carry Bagru hand block printing into national recognition.</p><a className="text-link" href="https://handmadeinrajasthan.rajasthan.gov.in/content/industries/handmadeinrajasthandepartment/mastercrafts/padmaawardees/list/ramkishorechhipa.html" target="_blank" rel="noopener noreferrer">Government artisan profile <span aria-hidden="true">↗</span></a></div>
            <figure className="legacy-photo" data-reveal><Image src="/media/padma-shri-ceremony.jpg" alt="Ram Kishore Chhipa receiving the Padma Shri at a formal ceremony" fill sizes="(max-width: 900px) 100vw, 42vw" className="cover-image" /><figcaption>Ram Kishore Chhipa receiving the Padma Shri</figcaption></figure>
            <div className="legacy-awards"><div data-reveal><strong>2009</strong><span>Padma Shri<br />Ram Kishore Chhipa (Derawala)</span></div><div data-reveal><strong>1987</strong><span>National Award<br />Ram Kishore Chhipa (Derawala)</span></div></div>
          </div>
        </section>

        <section className="process-v3 section-space" id="process" aria-labelledby="process-title">
          <div className="process-heading"><h2 id="process-title" data-reveal>From block<br />to cloth.</h2><p data-reveal>Choose a stage and follow the hand.</p></div>
          <ProcessExplorer />
        </section>

        <section className="heritage-v3" aria-labelledby="heritage-title">
          <Image src="/media/heritage-illustration.jpg" alt="" fill sizes="100vw" className="cover-image heritage-art" />
          <div className="heritage-content" data-reveal><h2 id="heritage-title">Each mark<br />is different.</h2><p>The small variation is a trace of the maker.</p></div>
        </section>

        <section className="textiles-v3 section-space" id="textiles" aria-labelledby="textiles-title">
          <div className="textiles-heading" data-reveal><h2 id="textiles-title">The textiles.</h2><p>Fabrics, sarees, dupattas and stoles. Explore each form, then ask about what is available.</p></div>
          <TextileCarousel />
        </section>

        <DetailStudy />

        <section className="journal-v3 section-space" id="journal" aria-labelledby="journal-title">
          <div className="journal-heading" data-reveal><h2 id="journal-title">A book of<br />impressions.</h2><p>Turn the pages to see the hands, tools and cloth.</p></div>
          <CraftBook />
          <p className="journal-hint">Tap or drag a page · Use the arrows below</p>
        </section>

        <section className="workshop-v3 section-space" aria-labelledby="workshop-title">
          <div className="workshop-title" data-reveal><h2 id="workshop-title">At the table.</h2></div>
          <div className="workshop-grid">
            <a className="workshop-reel workshop-reel-one" href="https://www.instagram.com/rkderawala_bagru/reel/DX6qfSFs-G2/" target="_blank" rel="noopener noreferrer" data-reveal><div className="reel-image"><Image src="/media/hand-printing.jpg" alt="Hands positioning a printing block on striped cloth" fill sizes="(max-width: 700px) 100vw, 45vw" className="cover-image" /></div><span>The human rhythm <i>Watch reel ↗</i></span></a>
            <a className="workshop-reel workshop-reel-two" href="https://www.instagram.com/rkderawala_bagru/reel/DWYxGp0CTgq/" target="_blank" rel="noopener noreferrer" data-reveal><div className="reel-image"><Image src="/media/printing-blocks.jpg" alt="Carved wooden blocks arranged on a workshop floor" fill sizes="(max-width: 700px) 100vw, 35vw" className="cover-image" /></div><span>Tools of the trade <i>Watch reel ↗</i></span></a>
          </div>
        </section>

        <EnquiryPaths />
        <CraftFaq />
      </main>
      <SiteFooter />
    </>
  );
}
