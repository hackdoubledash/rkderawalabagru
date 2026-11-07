import { instagram, phone, whatsapp } from "../lib/site-data";

export function SiteFooter() {
  return <footer className="site-footer">
    <a href="/#top" className="footer-name" aria-label="RK Derawala, back to top">RK Derawala</a>
    <div className="footer-content">
      <div className="footer-reach"><p>Bagru, Rajasthan</p><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href={`tel:${phone}`}>+91 98290 65347</a></div>
      <nav aria-label="Footer navigation"><a href="/#story">Bagru</a><a href="/#legacy">The artisan</a><a href="/#process">The making</a><a href="/#textiles">Textiles</a><a href="/#questions">Questions</a><a href="/#contact">Contact</a></nav>
      <div className="footer-address"><address>Bypass Road, Meeno ka Mohalla<br />Bagru, Jaipur, Rajasthan 303007</address><a href="https://www.google.com/maps/search/?api=1&query=Bypass+Road+Meeno+ka+Mohalla+Bagru+Jaipur+Rajasthan+303007" target="_blank" rel="noopener noreferrer">Directions</a><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a></div>
    </div>
    <div className="footer-end"><p>© {new Date().getFullYear()} RK Derawala</p><p>Bagru film: <a href="https://commons.wikimedia.org/wiki/File:Blockprinting_in_Bagru_-_India.webm" target="_blank" rel="noopener noreferrer">Incredible India</a>, edited under <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a></p><a href="/#top">Back to top</a></div>
  </footer>;
}
