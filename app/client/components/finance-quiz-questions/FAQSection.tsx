import { useState } from "react";

import { FINANCE_QUIZ_QUESTIONS_INTENT } from "./financeQuizQuestionsData";

type FAQItem = { q: string; a: string };

export function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { topicLabel } = FINANCE_QUIZ_QUESTIONS_INTENT;

  return (
    <section id="faq" className="mx-auto max-w-5xl px-6 pt-12 pb-20">
      <h2 className="text-3xl font-bold text-[#0B1B2B] mb-6 text-center">
        {topicLabel} Quiz Questions FAQs
      </h2>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-200">
        {faqs.map((item, idx) => {
          const isOpen = idx === openIndex;
          return (
            <div key={item.q}>
              <button
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-[#0B1B2B]">{item.q}</span>
                <span className="text-slate-500 select-none">
                  {isOpen ? "–" : "+"}
                </span>
              </button>

              {isOpen ? (
                <div className="px-6 pb-6 text-slate-700 leading-relaxed">
                  {item.a}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
