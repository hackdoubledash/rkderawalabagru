"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function PrintReveals() {
  const path = usePathname();

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("print-arrived");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12 });

    for (const frame of document.querySelectorAll("figure.print > .print-frame")) {
      if (frame.getBoundingClientRect().top >= window.innerHeight) observer.observe(frame);
    }

    return () => observer.disconnect();
  }, [path]);

  return null;
}
