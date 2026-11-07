"use client";

import { useEffect, useRef, useState } from "react";
import { BrandMark } from "./brand-mark";
import { whatsapp } from "../lib/site-data";

const links = [
  { href: "/#story", label: "Bagru" },
  { href: "/#legacy", label: "Artisan" },
  { href: "/#process", label: "Process" },
  { href: "/#textiles", label: "Textiles" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 48);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    firstLinkRef.current?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
    <a className="brand" href="/#top" onClick={() => setMenuOpen(false)}><BrandMark size={38} /><span>RK Derawala<small>Bagru, Rajasthan</small></span></a>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}</nav>
    <div className="header-actions"><a className="header-enquire" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire</a><button ref={toggleRef} className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)}>{menuOpen ? "Close" : "Menu"}</button></div>
    <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-label="Mobile navigation" inert={!menuOpen}>{links.map((link, index) => <a ref={index === 0 ? firstLinkRef : undefined} href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}<a className="mobile-enquire" href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Enquire on WhatsApp</a></nav>
  </header>;
}
