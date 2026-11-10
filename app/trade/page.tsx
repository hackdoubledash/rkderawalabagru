import { ArrowLink, Breadcrumbs, PageTitle } from "../components/editorial";
import { InquiryForm } from "../components/inquiry-form";
import { textileOptions } from "../lib/collections";
import { pageMetadata, visible } from "../lib/site";
import { photos } from "../lib/site-data";

const description = "Discuss Bagru textiles with RK Derawala for a design, interiors, boutique or international buying enquiry.";
export const metadata = pageMetadata("/trade", "Trade & Collaborations", description);

const pathways = [
  { title: "Designers and studios", text: "Describe what you’re making, where the cloth will be used and any preferences for pattern, ground colour or scale." },
  { title: "Boutiques and buyers", text: "Share the categories you want to see, an approximate quantity and your preferred timing. The workshop can respond with current options." },
  { title: "From outside India", text: "Include the destination country and what you’re considering. Discuss availability, delivery and timing directly with the workshop." },
];

export default async function Trade({ searchParams }: { searchParams: Promise<{ audience?: string }> }) {
  const { audience } = await searchParams;
  const intent = audience === "international" || audience === "wholesale" ? audience : "designer";
  return (
    <>
      <Breadcrumbs items={[{ name: "Trade & Collaborations" }]} />
      <PageTitle title="Trade & collaborations" description={description} photo={visible(photos.fabric) ? photos.fabric : photos.worktable} variant="trade-title">
        <ArrowLink href="#enquiry">Tell us about your project</ArrowLink>
      </PageTitle>
      <section className="chapter pathways" aria-labelledby="work-together">
        <div className="frame"><h2 id="work-together">Bring a brief</h2>
          <div className="trade-pathways">{pathways.map(({ title, text }) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
        </div>
      </section>
      <section className="frame chapter contact-grid" id="enquiry" aria-labelledby="trade-enquiry">
        <div><h2 id="trade-enquiry">Tell us what you need</h2><p>Requests are discussed individually. A few details about your project help the workshop respond.</p></div>
        <InquiryForm key={intent} audience={intent} collections={textileOptions} />
      </section>
    </>
  );
}
