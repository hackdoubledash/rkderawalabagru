import { ArrowLink, Print } from "./editorial";
import { visible } from "../lib/site";
import { artisan, padma, photos } from "../lib/site-data";

export function Recognition({ full = false }: { full?: boolean }) {
  const hasPortrait = visible(photos.award);
  return (
    <section id="legacy" className="recognition chapter" aria-labelledby="legacy-title">
      <div className={`frame recognition-grid ${hasPortrait ? "" : "without-portrait"}`}>
        <div className="recognition-text">
          <h2 id="legacy-title">The artisan honoured</h2>
          <p>Ram Kishore Chhipa (Derawala) received these honours for his work in hand block printing.</p>
          <dl className="awards">
            <div><dt><a href={padma}>Padma Shri</a></dt><dd>2009</dd></div>
            <div><dt>National Award</dt><dd>1987</dd></div>
          </dl>
          <div className="inline-links">
            <a className="text-link" href={artisan}>Rajasthan artisan profile ↗</a>
            {!full && <ArrowLink href="/our-story">Read his story</ArrowLink>}
          </div>
        </div>
        {hasPortrait && <Print photo={photos.award} />}
      </div>
    </section>
  );
}
