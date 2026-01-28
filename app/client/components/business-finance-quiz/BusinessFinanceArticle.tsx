import {
  BUSINESS_FINANCE_QUIZ_CATEGORIES,
  BUSINESS_FINANCE_QUIZ_INTENT,
} from "./businessFinanceQuizData";

export function BusinessFinanceArticle() {
  const { topicLabel, focus } = BUSINESS_FINANCE_QUIZ_INTENT;
  const chips = BUSINESS_FINANCE_QUIZ_CATEGORIES.slice(0, 8).map((c) => c.label);

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
            A quick check of business finance terminology used in company and
            corporate settings, focused on meaning and relationships.
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
                  This quiz evaluates your ability to interpret common business
                  and corporate finance terms as they are used in real company
                  discussions. The focus is on recognition and understanding,
                  not calculation, forecasting, or decision-making.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Each question checks whether a label or phrase registers
                  correctly based on context, similar to how it appears on
                  dashboards, reports, P&amp;L summaries, and internal finance
                  discussions.
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
                  Core business finance concepts covered
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Business finance relies on precise language. Small wording
                  differences can change meaning, such as revenue vs profit,
                  profit vs cash flow, and fixed vs variable costs.
                </p>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Profit vs cash flow
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Timing, collection, and why profit is not always cash.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Costs and margins
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Fixed vs variable costs, gross margin, contribution margin.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Break-even language
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Break-even point and how costs relate to sales level.
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
                      Treating revenue as profit
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Revenue is sales. Profit accounts for costs and expenses.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Assuming profit equals cash
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Cash timing can differ from accounting timing.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Mixing up cost types
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Fixed costs do not move with volume the same way variable costs do.
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
                  Improve by reading definitions carefully and connecting terms
                  to their role in a business model. Focus on what a metric
                  represents (rate vs level, cash vs accounting) rather than
                  memorizing formulas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
