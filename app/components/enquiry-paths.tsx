"use client";

import Image from "next/image";
import { useState } from "react";
import { enquiryUrl } from "../lib/site-data";
import "./enquiry-paths.css";

const paths = [
  {
    title: "A piece for me",
    copy: "Ask about the fabrics, sarees, dupattas or stoles currently available from the workshop.",
    image: "/media/printed-textile.jpg",
    alt: "Earth-toned hand block printed textile hanging against stone",
    message: "Namaste, I would like to enquire about RK Derawala textiles for myself. Could you share what is currently available?",
  },
  {
    title: "A creative project",
    copy: "Have a textile brief in mind? Share the cloth, pattern and quantity you are considering so the workshop can respond.",
    image: "/media/workshop-printing.jpg",
    alt: "Artisan printing cloth by hand at the workshop",
    message: "Namaste, I have a textile project enquiry for RK Derawala. I would like to discuss a brief and possible quantities.",
  },
  {
    title: "From outside India",
    copy: "Tell the workshop your location and what you are looking for. Availability and delivery arrangements can be confirmed directly.",
    image: "/media/derawala-family.jpg",
    alt: "Derawala family with indigo printed textile in Bagru",
    message: "Namaste, I am enquiring from outside India about RK Derawala textiles. Could you confirm availability and possible delivery arrangements?",
  },
] as const;

export function EnquiryPaths() {
  const [active, setActive] = useState(0);
  const selected = paths[active];

  return <section className="enquiry-paths section-space" id="enquiries" aria-labelledby="enquiries-title">
    <div className="enquiry-paths-heading"><h2 id="enquiries-title" data-reveal>Begin in Bagru.</h2></div>
    <div className="enquiry-paths-grid">
      <div className="enquiry-paths-options" aria-label="Choose an enquiry type">
        {paths.map((path, index) => <button key={path.title} type="button" className={active === index ? "is-active" : ""} aria-pressed={active === index} onClick={() => setActive(index)}><strong>{path.title}</strong><span aria-hidden="true">↗</span></button>)}
      </div>
      <div className="enquiry-paths-panel" key={selected.title}>
        <Image src={selected.image} alt={selected.alt} fill sizes="(max-width: 800px) 100vw, 53vw" />
        <div className="enquiry-paths-shade" aria-hidden="true" />
        <div className="enquiry-paths-panel-content"><p>{selected.copy}</p><a className="circle-fill-link" href={enquiryUrl(selected.message)} target="_blank" rel="noopener noreferrer"><span className="circle-fill-icon" aria-hidden="true">↗</span><span className="circle-fill-label">Ask on WhatsApp</span></a></div>
      </div>
    </div>
  </section>;
}
