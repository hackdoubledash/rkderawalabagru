import { ArrowUpRight } from "lucide-react";
import { ArrowLink, Breadcrumbs, PageTitle, Print } from "../components/editorial";
import { InquiryForm } from "../components/inquiry-form";
import { textileOptions } from "../lib/collections";
import { pageMetadata } from "../lib/site";
import { address, directions, instagram, phone, phoneLabel, photos, whatsapp } from "../lib/site-data";

const description = "Contact the RK Derawala workshop in Bagru about textiles, visits or a project.";
export const metadata = pageMetadata("/contact", "Contact", description);

export default async function Contact({ searchParams }: { searchParams: Promise<{ collection?: string; audience?: string }> }) {
  const query = await searchParams;
  const collection = textileOptions.find(({ slug }) => slug === query.collection)?.name;
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact" }]} />
      <PageTitle title="Write to Bagru" description={description} variant="contact-title" />
      <section className="contact-chapter chapter" aria-labelledby="enquiry-title">
        <div className="frame contact-grid">
          <div className="contact-info">
            <h2 id="enquiry-title">Begin an enquiry</h2>
            <p>Ask about a piece, bring a project to the table, or check with the workshop before visiting.</p>
            <address>{address}</address>
            <ul>
              <li><a className="text-link" href={`tel:${phone}`}>{phoneLabel}</a></li>
              <li><a className="text-link" href={whatsapp}>Open WhatsApp <ArrowUpRight aria-hidden="true" /></a></li>
              <li><a className="text-link" href={directions}>Get directions <ArrowUpRight aria-hidden="true" /></a></li>
              <li><a className="text-link" href={instagram}>Instagram <ArrowUpRight aria-hidden="true" /></a></li>
            </ul>
            <Print photo={photos.red} caption={false} />
          </div>
          <InquiryForm id="enquiry" key={`${collection}-${query.audience === "visit"}`} audience={query.audience === "visit" ? "visit" : "individual"} collection={collection} collections={textileOptions} />
        </div>
      </section>
      <section className="frame chapter editorial-reading" id="questions" aria-labelledby="questions-title">
        <h2 id="questions-title">Before you write</h2>
        <div className="faq">
          <details><summary>Can I visit the workshop?</summary><p>Message or call before travelling to check when someone can receive you and confirm the directions.</p></details>
          <details><summary>Can I enquire from outside India?</summary><p>Yes. Share your destination and the cloth you’re interested in so the workshop can discuss current availability and delivery options.</p></details>
          <details><summary>Can I ask for current textile photographs?</summary><p>Yes. Mention the category, any colours you have in mind and how you would like to use the cloth.</p></details>
          <ArrowLink href="/trade">For project and wholesale enquiries</ArrowLink>
        </div>
      </section>
    </>
  );
}
