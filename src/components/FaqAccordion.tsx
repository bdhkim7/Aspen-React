"use client";

import { useState } from "react";
import type { FaqSection } from "@/data/faqs";

type FaqAccordionProps = {
  sections: FaqSection[];
};

export function FaqAccordion({ sections }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="faq-compact">
      {sections.map((section) => (
        <section key={section.title} className="faq-compact__section">
          <h4 className="faq-compact__heading">{section.title}</h4>
          <ul className="faq-compact__list">
            {section.items.map((item) => {
              const isOpen = openId === item.id;
              return (
                <li key={item.id} className="faq-compact__item">
                  <button
                    type="button"
                    className="faq-compact__question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span>{item.question}</span>
                    <i className={`faq-compact__chevron fas fa-chevron-down${isOpen ? " is-open" : ""}`} />
                  </button>
                  {isOpen ? (
                    <div id={`faq-${item.id}`} className="faq-compact__answer">
                      {item.answer}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
