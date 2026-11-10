import { ArrowLink, Breadcrumbs, PageTitle, Print } from "../components/editorial";
import { publishedArticles } from "../lib/journal";
import { pageMetadata } from "../lib/site";
import { photos } from "../lib/site-data";

const description = "Short, sourced essays on the marks, materials and methods behind Bagru printed cloth.";
export const metadata = pageMetadata("/journal", "Journal", description);

export default function Journal() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Journal" }]} />
      <PageTitle title="Notes from the archive" description={description} photo={photos.garden} variant="journal-title" />
      <section className="frame chapter journal-list" aria-labelledby="essays">
        <h2 id="essays">Craft essays</h2>
        {publishedArticles.map((article) => <article key={article.slug}>
          <Print photo={article.photo} caption={false} />
          <div><h3>{article.title}</h3><p>{article.description}</p><ArrowLink href={`/journal/${article.slug}`}>Read the essay</ArrowLink></div>
        </article>)}
      </section>
    </>
  );
}
