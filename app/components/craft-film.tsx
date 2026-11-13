"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CraftFilm({ className = "", mobileAutoplay = true }: { className?: string; mobileAutoplay?: boolean }) {
  const container = useRef<HTMLDivElement>(null);
  const player = useRef<HTMLVideoElement>(null);
  const manual = useRef<boolean | null>(null);
  const [playing, setPlaying] = useState(false);
  const [hasFrame, setHasFrame] = useState(false);

  useEffect(() => {
    const video = player.current;
    const target = container.current;
    if (!video || !target) return;

    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = matchMedia("(max-width: 720px)");
    const reducedData = matchMedia("(prefers-reduced-data: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    let inView = false;
    let ready = false;
    let startTimer: ReturnType<typeof setTimeout>;
    const update = () => {
      const enabled = manual.current ?? (!reducedMotion.matches && !reducedData.matches && !connection?.saveData && (mobileAutoplay || !smallScreen.matches));
      if (inView && ready && enabled && !document.hidden) {
        if (!video.getAttribute("src")) video.src = "/video/bagru-block-printing.mp4#t=2.8";
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    }, { threshold: 0.18 });
    const onLoad = () => {
      startTimer = setTimeout(() => { ready = true; update(); }, 1200);
    };
    if (document.readyState === "complete") onLoad();
    observer.observe(target);
    window.addEventListener("load", onLoad);
    document.addEventListener("visibilitychange", update);
    reducedMotion.addEventListener("change", update);
    reducedData.addEventListener("change", update);
    smallScreen.addEventListener("change", update);
    return () => {
      clearTimeout(startTimer);
      observer.disconnect();
      window.removeEventListener("load", onLoad);
      document.removeEventListener("visibilitychange", update);
      reducedMotion.removeEventListener("change", update);
      reducedData.removeEventListener("change", update);
      smallScreen.removeEventListener("change", update);
      video.pause();
    };
  }, [mobileAutoplay]);

  function toggle() {
    const video = player.current;
    if (!video) return;
    manual.current = video.paused;
    if (!manual.current) {
      video.pause();
      return;
    }
    if (!video.getAttribute("src")) video.src = "/video/bagru-block-printing.mp4#t=2.8";
    void video.play().catch(() => {});
  }

  return (
    <div ref={container} className={`craft-film ${className}`}>
      <video ref={player} muted playsInline loop preload="none" poster="/video/bagru-impression.jpg" aria-hidden="true"
        className={hasFrame ? "has-frame" : ""} onPlaying={() => { setHasFrame(true); setPlaying(true); }} onPause={() => setPlaying(false)} />
      <button type="button" className="film-control" onClick={toggle}>
        {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />} {playing ? "Pause film" : "Play film"}
      </button>
    </div>
  );
}
