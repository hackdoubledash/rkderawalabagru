import { BrandMark } from "./brand-mark";
import { instagram, phone, whatsapp } from "../lib/site-data";

export function SiteFooter() {
  return (
    <>
      <section className="contact-panel" id="contact" aria-labelledby="contact-title">
        <div className="contact-top"><span className="eyebrow">An open invitation</span><span>Bagru, Rajasthan / India</span></div>
        <h2 id="contact-title" data-reveal>Let&apos;s begin with<br /><em>a conversation.</em></h2>
        <div className="contact-bottom"><p>Ask about the craft, the cloth, or a visit to the workshop.</p><a className="round-link" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Enquire on WhatsApp">↗</a></div>
      </section>
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-identity"><BrandMark size={74} /><p>Hand block printed textiles<br />from Bagru, Rajasthan.</p></div>
          <div className="footer-column"><span>Explore</span><a href="/#story">Our story</a><a href="/#process">The process</a><a href="/#journal">Craft journal</a><a href="/#textiles">Textiles</a><a href="/#detail">In detail</a><a href="/#legacy">Artisan archive</a></div>
          <div className="footer-column"><span>Connect</span><a href="/#enquiries">Make an enquiry</a><a href="/#questions">Good to know</a><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a><a href={`tel:${phone}`}>+91 98290 65347</a><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a></div>
          <div className="footer-address"><span>Find the workshop</span><address>Bypass Road, Meeno ka Mohalla<br />Bagru, Jaipur, Rajasthan 303007</address><a href="https://www.google.com/maps/search/?api=1&query=Bypass+Road+Meeno+ka+Mohalla+Bagru+Jaipur+Rajasthan+303007" target="_blank" rel="noopener noreferrer">Get directions ↗</a></div>
        </div>
        <a href="/#top" className="footer-monogram" aria-label="RK Derawala, back to top">RK Derawala<span aria-hidden="true">↑</span></a>
        <div className="footer-base"><span>© {new Date().getFullYear()} RK Derawala</span><span>Made by hand · Rooted in Bagru</span><a href="/#top">Back to top ↑</a></div>
      </footer>
    </>
  );
}
