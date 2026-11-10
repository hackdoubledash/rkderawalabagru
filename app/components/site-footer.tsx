import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { address, directions, filmSource, instagram, phone, phoneLabel, whatsapp } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="frame footer-inner">
        <div className="footer-top">
          <div><div className="footer-brand"><BrandMark size={64} /></div><p className="footer-line">Begin with the cloth.</p><Link className="button button-paper" href="/contact#enquiry">Enquire with us <span aria-hidden="true">↗</span></Link></div>
          <address>{address}<br /><a href={directions}>Directions ↗</a><br /><a href={`tel:${phone}`}>{phoneLabel}</a></address>
          <nav aria-label="Footer">
            <Link href="/our-story">Our Story</Link><Link href="/the-craft">The Craft</Link>
            <Link href="/collections">Collections</Link><Link href="/trade">Trade & Collaborations</Link>
            <Link href="/journal">Journal</Link><a href={instagram}>Instagram ↗</a><a href={whatsapp}>WhatsApp ↗</a>
          </nav>
        </div>
        <p className="footer-wordmark">RK Derawala</p>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} RK Derawala</span>
          <span>Bagru film and stills: <a href={filmSource}>Incredible India</a>, edited under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a></span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
