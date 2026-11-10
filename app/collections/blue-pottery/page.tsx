import { notFound } from "next/navigation";
import { ArchiveGallery } from "../../components/archive-gallery";
import { Breadcrumbs, PageTitle } from "../../components/editorial";
import { pageMetadata, visible } from "../../lib/site";
import { pottery } from "../../lib/site-data";

export const metadata = {
  ...pageMetadata("/collections/blue-pottery", "Blue Pottery", "Explore the RK Derawala blue pottery collection."),
  robots: { index: pottery.published, follow: pottery.published },
};

export default function BluePottery() {
  const objects = pottery.objects.filter(({ image }) => visible(image));
  if (!pottery.published || !objects.length) notFound();

  return (
    <div className="pottery-page">
      <Breadcrumbs items={[{ name: "Collections", href: "/collections" }, { name: "Blue pottery" }]} />
      <PageTitle title="Blue pottery" description="Explore the collection by object." photo={objects[0].image} />
      <section className="chapter frame" aria-labelledby="pottery-gallery">
        <h2 id="pottery-gallery">The objects</h2>
        <ArchiveGallery images={objects.map(({ name, dimensions, material, image }) => ({
          ...image, caption: [name, material, dimensions].filter(Boolean).join(" · "),
        }))} layout="objects" />
      </section>
    </div>
  );
}
