"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { BrandMark } from "./brand-mark";
import { navigation } from "../lib/site-data";

export function SiteHeader() {
  const path = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    dialog.current?.close();
  }, [path]);

  const active = (href: string) => href === "/" ? path === href : path === href || path.startsWith(href + "/");

  return (
    <header className="site-header">
      <div className="header-inner frame">
        <Link className="wordmark" href="/" aria-label="RK Derawala home">
          <BrandMark />
          <span>RK Derawala<small>Bagru, Rajasthan</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={active(href) ? "page" : undefined}>{label}</Link>
          ))}
        </nav>
        <Link className="button header-enquire" href="/contact#enquiry">Enquire</Link>
        <button ref={trigger} className="menu-trigger" aria-haspopup="dialog" aria-controls="mobile-navigation"
          onClick={() => dialog.current?.showModal()}>Menu<Menu aria-hidden="true" /></button>
      </div>
      <dialog id="mobile-navigation" className="mobile-nav" ref={dialog} aria-labelledby="mobile-menu-title"
        onClose={() => trigger.current?.focus()}>
        <div className="mobile-nav-top">
          <p id="mobile-menu-title" className="wordmark"><BrandMark />RK Derawala</p>
          <button className="menu-trigger" onClick={() => dialog.current?.close()} autoFocus>Close<X aria-hidden="true" /></button>
        </div>
        <nav aria-label="Mobile navigation">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={active(href) ? "page" : undefined} onClick={() => dialog.current?.close()}>{label}</Link>
          ))}
          <Link className="button" href="/contact#enquiry" onClick={() => dialog.current?.close()}>Enquire</Link>
        </nav>
      </dialog>
    </header>
  );
}
