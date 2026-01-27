import { useState } from "react";

import { FINANCE_QUIZ_INTENT } from "./financeQuizData";

type FAQItem = { q: string; a: string };

export function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-5xl px-6 pt-16 pb-20">
      <h2 className="text-3xl font-bold text-[#0B1B2B] mb-6 text-center">
        Banking, Credit, & Investing Quiz FAQs
      </h2>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-200">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          const panelId = `faq-panel-${i}`;
          const buttonId = `faq-button-${i}`;
          return (
            <div key={i} className="p-6 cursor-pointer">
              <button
                type="button"
                id={buttonId}
                className="w-full text-left cursor-pointer select-none"
                onClick={() => setOpenIndex((prev) => (prev === i ? null : i))}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-semibold text-lg text-[#0B1B2B]">
                    {f.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-slate-500 font-bold leading-none mt-1"
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </div>
              </button>

              {isOpen ? (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="mt-3"
                >
                  <p className="text-slate-700 leading-relaxed">{f.a}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
