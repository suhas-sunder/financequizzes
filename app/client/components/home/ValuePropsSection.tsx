import React from "react";

type ValuePropsSectionProps = {
  generalHref: string;
  allCategoriesAnchorHref: string;
};

export function ValuePropsSection({
  generalHref,
  allCategoriesAnchorHref,
}: ValuePropsSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 border-b border-slate-200">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-extrabold mb-4 text-[#0B1B2B]">
            One goal: a clean self-assessment
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-5">
            FinanceQuizzes is built for fast feedback. You answer questions, get a simple score summary,
            and you are done. No long articles and no calculators.
          </p>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            If you want to go deeper, take a more specific quiz category.
            The most lucrative intent areas are personal finance, credit, investing basics, saving, budgeting,
            and retirement concepts.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-[#F9FBFD] p-8">
          <h3 className="text-xl font-bold mb-4 text-[#0B1B2B]">What you can expect</h3>
          <ul className="space-y-3 text-slate-700 text-base">
            <li className="flex gap-3">
              <span className="mt-0.5">✅</span>
              <span>Short quizzes with quick scoring</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">✅</span>
              <span>Beginner-friendly questions with clear wording</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">✅</span>
              <span>No signup and no personal data required</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">✅</span>
              <span>Educational only, not advice or recommendations</span>
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={generalHref}
              className="rounded-xl bg-teal-700 px-5 py-2.5 text-white font-semibold text-base hover:bg-teal-800 transition text-center"
            >
              Take the General Finance Quiz
            </a>
            <a
              href={allCategoriesAnchorHref}
              className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-[#0B1B2B] font-semibold text-base hover:bg-slate-50 transition text-center"
            >
              Browse all categories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
