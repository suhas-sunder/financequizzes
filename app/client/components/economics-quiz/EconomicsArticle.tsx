import {
  ECONOMICS_QUIZ_CATEGORIES,
  ECONOMICS_QUIZ_INTENT,
} from "./economicsQuizData";

export function EconomicsArticle() {
  const { topicLabel, focus } = ECONOMICS_QUIZ_INTENT;
  const chips = ECONOMICS_QUIZ_CATEGORIES.slice(0, 8).map((c) => c.label);

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
            A quick check of core economics vocabulary and cause-effect
            relationships used in everyday discussions of the economy.
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
                  This quiz evaluates basic economic awareness: understanding
                  common terms (like scarcity, inflation, GDP, and unemployment)
                  and recognizing typical cause-effect relationships (like how
                  changes in supply and demand influence prices).
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The focus is on meaning and directionality, not math, graph
                  reading, or prediction. It is also distinct from personal
                  finance. It does not test budgeting, investing decisions, or
                  product selection.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Focus: <span className="font-semibold text-[#0B1B2B]">{focus}</span>
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
                  Core economic concepts covered
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Economics is a language of tradeoffs and systems. Many terms
                  describe relationships: incentives affect behavior, supply and
                  demand affect prices, and economy-wide indicators reflect
                  broad conditions.
                </p>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">Micro basics</div>
                    <div className="mt-1 text-sm text-slate-700">
                      Scarcity, opportunity cost, incentives, markets.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">Macro basics</div>
                    <div className="mt-1 text-sm text-slate-700">
                      Inflation, GDP, unemployment, recessions.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">Structures</div>
                    <div className="mt-1 text-sm text-slate-700">
                      Competition, monopoly/oligopoly, externalities, public goods.
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
                <p className="text-slate-700 leading-relaxed">
                  A common issue is mixing up directionality: what typically
                  rises or falls when something changes. Another is confusing a
                  term’s definition (like GDP) with what it does not measure.
                </p>

                <ul className="space-y-3">
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Treating cause-effect as a guarantee
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Economics often describes tendencies, not promises.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Mixing up “rate” and “level” terms
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Some terms are levels (GDP), others are rates (inflation).
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Confusing economics with personal finance
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      This quiz is about how the economy is discussed, not how to choose financial products.
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
                  Improve by focusing on definitions and “what changes when X changes” thinking.
                  Pay attention to whether a question is about prices, quantities, incentives, or economy-wide indicators.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Retake the quiz after reviewing basic economics vocabulary.
                  The goal is consistent interpretation, not memorization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
