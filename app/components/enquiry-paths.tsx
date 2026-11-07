"use client";

import Image from "next/image";
import { useState } from "react";
import { enquiryUrl } from "../lib/site-data";
import "./enquiry-paths.css";

const paths = [
  { title: "A piece for me", copy: "Ask about fabrics, sarees, dupattas or stoles currently available from the workshop.", image: "/media/printed-textile.jpg", alt: "Earth-toned hand printed textile hanging against stone", message: "Namaste, I would like to enquire about RK Derawala textiles for myself. Could you share what is currently available?" },
  { title: "A creative project", copy: "Share the cloth, pattern and approximate quantity you are considering so the workshop can respond.", image: "/media/workshop-printing.jpg", alt: "Artisan printing cloth by hand at the workshop", message: "Namaste, I have a textile project enquiry for RK Derawala. I would like to discuss a brief and possible quantities." },
  { title: "From outside India", copy: "Tell the workshop your location and what you are looking for. Confirm availability and delivery arrangements directly.", image: "/media/derawala-family.jpg", alt: "Derawala family with indigo printed textile in Bagru", message: "Namaste, I am enquiring from outside India about RK Derawala textiles. Could you confirm availability and possible delivery arrangements?" },
] as const;

export function EnquiryPaths() {
  const [active, setActive] = useState(0);
  const selected = paths[active];
  return <section className="enquiry-paths section-pad" id="enquiries" aria-labelledby="enquiries-title"><div className="enquiry-paths-heading"><h2 id="enquiries-title">Your enquiry</h2><p>Choose what you have in mind. The message will open in WhatsApp for you to send.</p></div><div className="enquiry-paths-layout"><div className="enquiry-paths-options" aria-label="Choose an enquiry type">{paths.map((path, index) => <button key={path.title} type="button" className={active === index ? "is-active" : ""} aria-pressed={active === index} onClick={() => setActive(index)}>{path.title}</button>)}</div><div className="enquiry-paths-panel" key={selected.title}><div className="enquiry-paths-photo"><Image src={selected.image} alt={selected.alt} fill sizes="(max-width: 700px) 100vw, 45vw" className="cover-image" /></div><div className="enquiry-paths-response" aria-live="polite"><p>{selected.copy}</p><a className="action" href={enquiryUrl(selected.message)} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a></div></div></div></section>;
}
