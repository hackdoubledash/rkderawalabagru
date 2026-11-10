"use client";

import { useState, type FormEvent } from "react";
import { enquiryUrl, whatsapp } from "../lib/site-data";

export const audienceLabels = {
  individual: "A piece for me",
  designer: "Designer or studio",
  wholesale: "Boutique or wholesale",
  international: "International buyer",
  visit: "Workshop visit",
} as const;

type Audience = keyof typeof audienceLabels;

export function InquiryForm({ audience = "individual", collection = "", collections, id }: {
  id?: string;
  audience?: Audience;
  collection?: string;
  collections: { slug: string; name: string }[];
}) {
  const [intent, setIntent] = useState<Audience>(audience);
  const isTrade = intent === "designer" || intent === "wholesale" || intent === "international";

  function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    for (const name of ["name", "details"]) {
      if (String(values.get(name) ?? "").trim()) continue;
      const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      field.setCustomValidity(name === "name" ? "Enter your name." : "Add a short message.");
      field.reportValidity();
      return;
    }
    const lines = [
      "Hello RK Derawala,",
      "I’d like to make an enquiry.",
      `Enquiry type: ${audienceLabels[intent]}`,
    ];
    const fields = [
      ["name", "Name"], ["email", "Email"], ["organisation", "Organisation"],
      ["country", "Country"], ["collection", "Collection"], ["quantity", "Approximate quantity"],
      ["timeline", "Timeline"], ["details", "Details"],
    ];
    for (const [key, label] of fields) {
      const value = values.get(key);
      if (typeof value === "string" && value.trim()) lines.push(`${label}: ${value.trim()}`);
    }
    window.location.assign(enquiryUrl(lines.join("\n")));
  }

  return (
    <form id={id} className="inquiry-form" aria-label="Prepare an enquiry" method="post" onSubmit={send} aria-describedby="inquiry-privacy">
      <label className="wide">I’m enquiring about
        <select name="audience" value={intent} onChange={(event) => setIntent(event.target.value as Audience)}>
          {Object.entries(audienceLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
      </label>
      <label>Name<input name="name" autoComplete="name" maxLength={90} onInput={(event) => event.currentTarget.setCustomValidity("")} required /></label>
      <label>Email (optional)<input name="email" type="email" autoComplete="email" maxLength={120} /></label>
      {isTrade && <>
        <label>Organisation (optional)<input name="organisation" autoComplete="organization" maxLength={100} /></label>
        <label>Country{intent !== "international" && " (optional)"}<input name="country" autoComplete="country-name" maxLength={80} required={intent === "international"} /></label>
      </>}
      {intent !== "visit" && <label className="wide">Collection
        <select name="collection" defaultValue={collection}>
          <option value="">Help me choose</option>
          {collections.map((item) => <option value={item.name} key={item.slug}>{item.name}</option>)}
        </select>
      </label>}
      {isTrade && <>
        <label>Approximate quantity (optional)<input name="quantity" maxLength={80} /></label>
        <label>Timeline (optional)<input name="timeline" maxLength={100} /></label>
      </>}
      <label className="wide">{intent === "visit" ? "When would you like to visit?" : "What do you have in mind?"}
        <textarea name="details" rows={4} maxLength={800} onInput={(event) => event.currentTarget.setCustomValidity("")} required />
      </label>
      <div className="form-action wide">
        <button className="button" type="submit">Continue in WhatsApp <span aria-hidden="true">↗</span></button>
        <p id="inquiry-privacy">Review your draft in WhatsApp before sending. This website doesn’t store these details.</p>
        <noscript><p><a href={whatsapp}>Open WhatsApp directly</a></p></noscript>
      </div>
    </form>
  );
}
