import { notFound } from "next/navigation";
import { ArrowLink, Breadcrumbs, PageTitle } from "../../components/editorial";
import { publishedArticles } from "../../lib/journal";
import { pageMetadata } from "../../lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = publishedArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  return pageMetadata(`/journal/${slug}`, article.title, article.description);
}

export default async function Article({ params }: Props) {
  const { slug } = await params;
  const article = publishedArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <>
      <Breadcrumbs items={[{ name: "Journal", href: "/journal" }, { name: article.title }]} />
      <article>
        <PageTitle title={article.title} description={article.description} photo={article.photo} variant="article-title" />
        <div className="article-body frame">
          {article.sections.map(({ title, paragraphs }) => <section key={title}>
            <h2>{title}</h2>
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>)}
          <p><a className="text-link" href={article.source.url}>{article.source.name} ↗</a></p>
          <ArrowLink href="/journal">All journal essays</ArrowLink>
        </div>
      </article>
    </>
  );
}
