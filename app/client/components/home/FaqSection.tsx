import React from "react";

export type FaqItem = { q: string; a: string };

type FaqSectionProps = {
  faqs: FaqItem[];
};

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <div className="text-left sm:text-center">
        <h2 className="text-3xl font-extrabold text-[#0B1B2B] mb-4">
          Finance quiz FAQ
        </h2>
        <p className="text-slate-700 max-w-2xl sm:mx-auto mb-10">
          Short answers to common questions about how the quizzes work.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-200">
        {faqs.map((f, i) => (
          <details key={`${i}-${f.q}`} className="group">
            <summary className="cursor-pointer list-none p-6 outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 hover:bg-slate-50 transition">
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-base sm:text-lg font-semibold text-[#0B1B2B]">
                  {f.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-slate-500 group-open:rotate-180 transition-transform"
                >
                  ▾
                </span>
              </div>
            </summary>
            <div className="p-6 pt-0 text-slate-700 text-base sm:text-lg leading-relaxed">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
