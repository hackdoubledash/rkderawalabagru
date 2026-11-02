"use client";

import Image from "next/image";
import { useState } from "react";
import { enquiryUrl } from "../lib/site-data";
import "./enquiry-paths.css";

const paths = [
  {
    title: "A piece for me",
    label: "Personal enquiries",
    copy: "Ask about the fabrics, sarees, dupattas or stoles currently available from the workshop.",
    image: "/media/printed-textile.jpg",
    alt: "Earth-toned hand block printed textile hanging against stone",
    message: "Namaste, I would like to enquire about RK Derawala textiles for myself. Could you share what is currently available?",
  },
  {
    title: "A creative project",
    label: "Design & sourcing",
    copy: "Have a textile brief in mind? Share the cloth, pattern and quantity you are considering so the workshop can respond.",
    image: "/media/workshop-printing.jpg",
    alt: "Artisan printing cloth by hand at the workshop",
    message: "Namaste, I have a textile project enquiry for RK Derawala. I would like to discuss a brief and possible quantities.",
  },
  {
    title: "From outside India",
    label: "International enquiries",
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
    <div className="section-index"><span>06 / Work with us</span><span>Begin with a conversation</span></div>
    <div className="enquiry-paths-heading"><h2 id="enquiries-title" data-reveal>However you find us,<br /><em>begin in Bagru.</em></h2><p>Every enquiry starts with a conversation about the cloth.</p></div>
    <div className="enquiry-paths-grid">
      <div className="enquiry-paths-options" aria-label="Choose an enquiry type">
        {paths.map((path, index) => <button key={path.title} type="button" className={active === index ? "is-active" : ""} aria-pressed={active === index} onClick={() => setActive(index)}><span>0{index + 1}</span><strong>{path.title}</strong><span aria-hidden="true">↗</span></button>)}
      </div>
      <div className="enquiry-paths-panel" key={selected.title}>
        <Image src={selected.image} alt={selected.alt} fill sizes="(max-width: 800px) 100vw, 53vw" />
        <div className="enquiry-paths-shade" aria-hidden="true" />
        <div className="enquiry-paths-panel-content"><span className="eyebrow">{selected.label}</span><p>{selected.copy}</p><a className="circle-fill-link" href={enquiryUrl(selected.message)} target="_blank" rel="noopener noreferrer"><span className="circle-fill-icon" aria-hidden="true">↗</span><span className="circle-fill-label">Ask on WhatsApp</span></a></div>
      </div>
    </div>
  </section>;
}
