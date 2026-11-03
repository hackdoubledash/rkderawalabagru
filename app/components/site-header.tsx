"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BrandMark } from "./brand-mark";
import { whatsapp } from "../lib/site-data";

const links = [
  { href: "/#story", label: "Bagru" },
  { href: "/#legacy", label: "The artisan" },
  { href: "/#process", label: "The making" },
  { href: "/#textiles", label: "Textiles" },
  { href: "/#journal", label: "Craft journal" },
  { href: "/#contact", label: "Get in touch" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <a className="brand" href="/#top" onClick={() => setMenuOpen(false)}>
        <BrandMark size={42} />
        <span className="brand-name">RK Derawala<small>Bagru · Rajasthan</small></span>
      </a>
      <span className="header-place">Hand printed in Bagru <span aria-hidden="true">✳</span> Made to be held</span>
      <div className="header-actions">
        <a className="header-enquire" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire <span aria-hidden="true">↗</span></a>
        <button className={`menu-toggle${menuOpen ? " is-open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span className="menu-label">{menuOpen ? "Close" : "Menu"}</span><span className="menu-lines" aria-hidden="true"><i /><i /></span>
        </button>
      </div>
      <nav id="site-navigation" className={`site-navigation${menuOpen ? " is-open" : ""}`} aria-label="Main navigation" inert={!menuOpen}>
        <div className="navigation-intro"><span>RK Derawala / Bagru</span><p>A place where cloth keeps the memory of the hand.</p><Image src="/media/printed-textile.jpg" alt="Earth-toned hand printed cloth hanging against stone" width={460} height={600} sizes="(max-width: 700px) 28vw, 24vw" /></div>
        <div className="navigation-links">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}<span aria-hidden="true">↗</span></a>)}<a className="navigation-enquiry" href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Begin an enquiry <span aria-hidden="true">↗</span></a></div>
        <span className="navigation-footnote">From Bagru, Rajasthan · Since generations</span>
      </nav>
      <span className="scroll-progress" aria-hidden="true" />
    </header>
  );
}
