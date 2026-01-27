import React from "react";

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
          <details key={`${i}-${f.q}`} className="group">
            <summary className="cursor-pointer list-none p-6 outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2">
              <div className="flex items-start justify-between gap-4">
                <span
                  className="font-semibold text-lg text-[#0B1B2B]"
                  role="heading"
                  aria-level={3}
                >
                  {f.q}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-600 group-open:rotate-45 transition"
                >
                  +
                </span>
              </div>
            </summary>
            <div className="px-6 pb-6 pt-0">
              <p className="text-slate-700">{f.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
