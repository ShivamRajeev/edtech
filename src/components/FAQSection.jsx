import { useState } from "react";
import { faqs } from "../data/siteData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faqs" className="section faq-section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">FAQs</p>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const active = openIndex === index;
            return (
              <article className={`faq-item reveal ${active ? "active" : ""}`} key={faq.question}>
                <button
                  className="faq-question"
                  aria-expanded={active}
                  onClick={() => setOpenIndex(active ? null : index)}
                >
                  {faq.question}
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
