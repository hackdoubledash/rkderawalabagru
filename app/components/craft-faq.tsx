"use client";

import { useState } from "react";
import "./craft-faq.css";

const questions = [
  { question: "What is Bagru hand block printing?", answer: "It is a textile printing practice rooted in Bagru, Rajasthan. Carved wooden blocks are placed by hand onto cloth to build a repeated motif. RK Derawala also works within the Dabu mud-resist tradition." },
  { question: "Are the pieces handmade?", answer: "The printing process shown by RK Derawala is carried out by hand. Small differences from one impression to the next are part of the character of the cloth." },
  { question: "What textiles can I ask about?", answer: "You can enquire about fabrics, sarees, dupattas and stoles. Ask the workshop directly for current pieces, colours and availability." },
  { question: "Can I discuss a larger project?", answer: "Yes. Share the textile type, approximate quantity, timing and any design brief. The workshop can then tell you what may be possible." },
  { question: "Can I enquire from outside India?", answer: "Yes. Include your country and what you are looking for in your message. Availability, shipping and export arrangements should be confirmed directly before making plans." },
] as const;

export function CraftFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="craft-faq section-space" id="questions" aria-labelledby="questions-title">
    <div className="craft-faq-grid">
      <div className="craft-faq-intro"><h2 id="questions-title">Good to know.</h2></div>
      <div className="craft-faq-list">
        {questions.map((item, index) => <div className="craft-faq-item" key={item.question}>
          <h3><button type="button" id={`question-${index}`} aria-expanded={open === index} aria-controls={`answer-${index}`} onClick={() => setOpen(current => current === index ? null : index)}>{item.question}<span className="craft-faq-sign" aria-hidden="true">{open === index ? "−" : "+"}</span></button></h3>
          <div className={`craft-faq-answer${open === index ? " is-open" : ""}`} id={`answer-${index}`} role="region" aria-labelledby={`question-${index}`} inert={open !== index}><div><p>{item.answer}</p></div></div>
        </div>)}
      </div>
    </div>
  </section>;
}
