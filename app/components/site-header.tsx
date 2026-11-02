"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./brand-mark";
import { whatsapp } from "../lib/site-data";

const links = [
  { href: "/#story", label: "Our story" },
  { href: "/#process", label: "The process" },
  { href: "/#textiles", label: "Textiles" },
  { href: "/#legacy", label: "Legacy" },
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
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <a className="brand" href="/#top" onClick={() => setMenuOpen(false)}>
        <BrandMark size={46} />
        <span className="brand-name">RK Derawala<small>Bagru · Rajasthan</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <a className="header-enquire" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire <span aria-hidden="true">↗</span></a>
      <button className={`menu-toggle${menuOpen ? " is-open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
        <span aria-hidden="true" /><span aria-hidden="true" />
      </button>
      <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-label="Mobile navigation" inert={!menuOpen}>
        {links.map((link, index) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{link.label}<b aria-hidden="true">↗</b></a>)}
        <a className="mobile-contact" href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Begin an enquiry <b aria-hidden="true">↗</b></a>
      </nav>
      <span className="scroll-progress" aria-hidden="true" />
    </header>
  );
}
