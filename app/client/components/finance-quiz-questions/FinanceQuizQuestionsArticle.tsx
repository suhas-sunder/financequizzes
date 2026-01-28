import {
  FINANCE_QUIZ_QUESTIONS_CATEGORIES,
  FINANCE_QUIZ_QUESTIONS_INTENT,
} from "./financeQuizQuestionsData";

export function FinanceQuizQuestionsArticle() {
  const { topicLabel, focus, usage } = FINANCE_QUIZ_QUESTIONS_INTENT;

  const chips = FINANCE_QUIZ_QUESTIONS_CATEGORIES.map((c) => c.label);

  return (
    <section
      id="about-this-page"
      className="mx-auto border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <header className="mx-auto max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
            <span className="font-semibold">{topicLabel}</span>
            <span className="text-slate-400">•</span>
            <span>Mixed Q&A bank</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1B2B]">
            What this question bank covers
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            {focus}
          </p>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            {usage}
          </p>
        </header>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {chips.map((label) => (
            <span
              key={label}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-12">
          {FINANCE_QUIZ_QUESTIONS_CATEGORIES.map((c) => (
            <div
              key={c.key}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-[#0B1B2B]">{c.label}</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">
                {c.whatItCovers}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
