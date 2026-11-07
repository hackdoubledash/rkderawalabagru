import Image from "next/image";
import { CraftFaq } from "./components/craft-faq";
import { CraftBook } from "./components/craft-book";
import { DetailStudy } from "./components/detail-study";
import { EnquiryPaths } from "./components/enquiry-paths";
import { ProcessExplorer } from "./components/process-explorer";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { categories, instagram, phone, whatsapp } from "./lib/site-data";

const publicUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "RK Derawala",
  description: "Hand block printed textiles from Bagru, Rajasthan.",
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
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <Image src="/video/bagru-block-printing-poster.jpg" alt="" fill fetchPriority="high" sizes="100vw" className="cover-image" />
            <video autoPlay muted loop playsInline preload="metadata" poster="/video/bagru-block-printing-poster.jpg"><source src="/video/bagru-block-printing.mp4" type="video/mp4" /></video>
          </div>
          <div className="hero-copy">
            <h1 id="hero-title">RK<br />Derawala</h1>
            <div className="hero-summary"><p>Hand block printed textiles from Bagru, Rajasthan.</p><a className="action action-light" href="#story">Explore the craft</a></div>
          </div>
        </section>

        <section className="story" id="story" aria-labelledby="story-title">
          <div className="story-hold"><h2 id="story-title">Bagru</h2><p>A carved block meets cloth, colour, and the practiced hand.</p></div>
          <div className="story-pictures">
            <figure className="story-picture story-picture-first"><Image src="/media/hand-printing.jpg" alt="Artisan placing a carved printing block on cloth" fill sizes="(max-width: 700px) 68vw, 30vw" className="cover-image" /><figcaption>Printing by hand</figcaption></figure>
            <figure className="story-picture story-picture-second"><Image src="/media/indigo-drying.jpg" alt="Indigo printed cloth drying outdoors in Bagru" fill sizes="(max-width: 700px) 78vw, 42vw" className="cover-image" /><figcaption>Colour and sunlight</figcaption></figure>
            <figure className="story-picture story-picture-third"><Image src="/media/printed-cloth-detail.jpg" alt="Close view of repeating hand block printed motifs" fill sizes="(max-width: 700px) 58vw, 24vw" className="cover-image" /><figcaption>Variations in the print</figcaption></figure>
          </div>
        </section>

        <section className="about section-pad" id="about" aria-labelledby="about-title">
          <div className="about-heading"><h2 id="about-title">A family practice</h2><p>RK Derawala carries Bagru hand block printing through daily work with wood, cloth, natural colour, and Dabu mud resist.</p></div>
          <div className="about-composition">
            <figure className="about-photo"><Image src="/media/derawala-family.jpg" alt="Ram Kishore Chhipa seated with members of the Derawala family before indigo printed cloth" fill sizes="(max-width: 700px) 100vw, 64vw" className="cover-image" /></figure>
            <div className="about-place"><strong>Bagru</strong><p>Bypass Road, Meeno ka Mohalla<br />Jaipur, Rajasthan</p></div>
          </div>
          <p className="about-note">Each repeat holds the pressure of a hand.</p>
        </section>

        <section className="recognition section-pad" id="legacy" aria-labelledby="legacy-title">
          <div className="recognition-intro"><h2 id="legacy-title">The artisan honoured</h2><p>These honours recognise Ram Kishore Chhipa (Derawala) and his contribution to hand block printing.</p></div>
          <figure className="recognition-photo"><Image src="/media/padma-shri-ceremony.jpg" alt="Ram Kishore Chhipa receiving the Padma Shri at a formal ceremony" fill sizes="(max-width: 700px) 100vw, 40vw" className="cover-image" /><figcaption>Ram Kishore Chhipa at the Padma Shri ceremony</figcaption></figure>
          <div className="recognition-list"><div><strong>2009</strong><span>Padma Shri</span></div><div><strong>1987</strong><span>National Award</span></div><a href="https://handmadeinrajasthan.rajasthan.gov.in/content/industries/handmadeinrajasthandepartment/mastercrafts/padmaawardees/list/ramkishorechhipa.html" target="_blank" rel="noopener noreferrer">Read the Rajasthan government artisan profile</a></div>
        </section>

        <section className="making section-pad" id="process" aria-labelledby="process-title"><div className="section-heading"><h2 id="process-title">From block to cloth</h2><p>Select a moment to see how the print takes shape.</p></div><ProcessExplorer /></section>

        <section className="textiles section-pad" id="textiles" aria-labelledby="textiles-title">
          <div className="section-heading"><h2 id="textiles-title">The textiles</h2><p>Explore four forms of cloth, then ask the workshop what is currently available.</p></div>
          <div className="textile-gallery">{categories.map((category, index) => <a className={`textile-piece textile-piece-${index + 1}`} href={`/textiles/${category.slug}`} key={category.slug}><figure><Image src={category.image} alt={category.alt} fill sizes="(max-width: 700px) 88vw, 42vw" className="cover-image" /></figure><div><h3>{category.name}</h3><span>View textile</span></div></a>)}</div>
        </section>

        <DetailStudy />
        <section className="journal section-pad" id="journal" aria-labelledby="journal-title"><div className="section-heading"><h2 id="journal-title">The craft journal</h2><p>Turn the pages to follow the tools, colour, and cloth.</p></div><CraftBook /></section>
        <EnquiryPaths />

        <section className="contact section-pad" id="contact" aria-labelledby="contact-title"><h2 id="contact-title">Begin with the cloth</h2><p>Ask about a piece, a project, or a visit to the Bagru workshop.</p><div className="contact-photo"><Image src="/media/red-textile.jpg" alt="Red floral hand printed textile hanging outdoors" fill sizes="(max-width: 700px) 28vw, 12vw" className="cover-image" /></div><div className="contact-links"><a className="action" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a><a href={`tel:${phone}`}>Call +91 98290 65347</a><a href={instagram} target="_blank" rel="noopener noreferrer">See the Instagram archive</a></div></section>

        <CraftFaq />
      </main>
      <SiteFooter />
    </>
  );
}
