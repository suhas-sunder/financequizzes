import {
  MONEY_BASICS_QUIZ_CATEGORIES,
  MONEY_BASICS_QUIZ_INTENT,
} from "./moneyBasicsQuizData";

export function MoneyBasicsArticle() {
  const { topicLabel, focus } = MONEY_BASICS_QUIZ_INTENT;
  const chips = MONEY_BASICS_QUIZ_CATEGORIES.slice(0, 8).map((c) => c.label);

  return (
    <section
      id="about-this-quiz"
      className="mx-auto border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <header className="mx-auto max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            FinanceQuizzes
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1B2B] tracking-tight">
            About this {topicLabel.toLowerCase()} quiz
          </h2>

          <p className="mx-auto max-w-2xl text-slate-600">
            A quick check of beginner-friendly money terms you see in paychecks,
            budgets, and everyday conversations.
          </p>

          <div className="mx-auto mt-2 flex max-w-3xl flex-wrap justify-center gap-2">
            {chips.map((label) => (
              <span
                key={label}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </header>

        <div className="mx-auto mt-14 max-w-5xl grid grid-cols-1 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start gap-4 p-8">
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#0B1B2B]">
                  What this quiz tests
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  This quiz evaluates your ability to recognize and interpret
                  everyday money terms: pay language (gross vs net), common
                  spending categories, saving goals, and the meaning of inflation
                  and purchasing power.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  It is intentionally beginner-friendly and conceptual. It does
                  not test long-term financial planning strategy or give advice.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Focus:{" "}
                  <span className="font-semibold text-[#0B1B2B]">{focus}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start gap-4 p-8">
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#0B1B2B]">
                  Core money concepts covered
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Everyday money decisions depend on clear language. Small
                  wording differences can change meaning, like gross vs net pay,
                  recurring vs one-time costs, and simple vs compound interest.
                </p>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Pay basics
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Income vs wage, gross vs net, take-home pay language.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Spending and saving
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Categories, recurring costs, saving goals, emergency funds.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Prices over time
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Inflation and purchasing power as real-world concepts.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start gap-4 p-8">
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0B1B2B]">
                  Common mistakes and misconceptions
                </h3>

                <ul className="space-y-3">
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Gross vs net confusion
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Gross is before deductions. Net is take-home pay.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Mixing up recurring vs one-time costs
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Some costs repeat predictably. Others happen once or rarely.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Treating rates as outcomes
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Interest rates describe growth over time, not a one-time amount.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start gap-4 p-8">
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#0B1B2B]">
                  How to improve your results
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Improve by slowing down and reading labels carefully. Pay
                  attention to time references (weekly vs monthly), units (percent
                  vs dollars), and whether a term describes a category, a rate,
                  or a total amount.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Retake the quiz after reviewing basic definitions. Progress
                  typically comes from repeated exposure to consistent terminology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
