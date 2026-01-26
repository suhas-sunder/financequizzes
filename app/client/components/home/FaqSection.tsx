import React from "react";
import { JsonLd } from "./JsonLd";

export type FaqItem = { q: string; a: string };

type FaqSectionProps = {
  faqs: FaqItem[];
};

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <h2 className="text-3xl font-extrabold text-[#0B1B2B] mb-4 text-center">
        Finance quiz FAQ
      </h2>
      <p className="text-slate-700 text-center max-w-2xl mx-auto mb-10">
        Short answers to common questions about how the quizzes work.
      </p>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-200">
        {faqs.map((f, i) => (
          <div key={i} className="p-6">
            <p className="font-semibold text-lg text-[#0B1B2B] mb-2">{f.q}</p>
            <p className="text-slate-700">{f.a}</p>
          </div>
        ))}
      </div>

      {/* Structured data: WebSite + FAQPage */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "FinanceQuizzes",
          url: "https://www.financequizzes.com/",
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }}
      />
    </section>
  );
}
