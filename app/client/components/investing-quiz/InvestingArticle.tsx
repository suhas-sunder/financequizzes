import {
  INVESTING_QUIZ_CATEGORIES,
  INVESTING_QUIZ_INTENT,
} from "./investingQuizData";

export function InvestingArticle() {
  const { focus } = INVESTING_QUIZ_INTENT;

  const chips = INVESTING_QUIZ_CATEGORIES.slice(0, 8).map((c) => c.label);

  return (
    <section
      id="about-this-quiz"
      className="mx-auto border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-6 pt-12">
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            FinanceQuizzes
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1B2B] tracking-tight">
            About this investing quiz
          </h2>

          <p className="mx-auto max-w-2xl text-slate-600">
            A fast, principle-first check of how you think about investing.
            Take the quiz, then use this section to understand what is being
            tested and how to sharpen your mental models.
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

        {/* Content grid */}
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
                  This quiz checks conceptual understanding of investing ideas
                  that apply across markets and asset types. The focus is on
                  principles, not instruments. Questions are designed to see if
                  you can reason about uncertainty, risk, time horizon, and how
                  markets behave as systems.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  It is not a performance test and it does not provide advice,
                  recommendations, or comparisons. If a prompt feels like a
                  tactic, the correct answer will still be the one that reflects
                  a broad mental model rather than a specific action.
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
                  Core investing concepts covered
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Investing is mostly about decision quality under uncertainty.
                  That means using the right concepts at the right time. This
                  quiz emphasizes a handful of mental models that show up in
                  almost every investing conversation, even when the details
                  change.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The goal is simple: recognize what a concept means, what it
                  does and does not imply, and how it interacts with other
                  concepts like diversification, volatility, and time.
                </p>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Risk and uncertainty
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Volatility, drawdowns, permanent loss, risk capacity vs
                      risk tolerance.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Diversification
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Correlation, concentration, spreading exposures, reducing
                      single-point failure.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Time horizon
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Compounding intuition, staying power, and matching
                      decisions to timelines.
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-bold text-[#0B1B2B]">
                    Quiz focus
                  </div>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {focus}
                  </p>
                </div>
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
                  How to use your score
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  If you miss a question, treat it as a concept label that needs
                  a clearer definition. Ask yourself: what is the core idea, and
                  what common confusion does it prevent? Many investing mistakes
                  come from mixing up similar-sounding ideas, like volatility
                  and risk, or price moves and value.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  A high score means you can translate investing language into
                  clean concepts. A lower score usually means a small set of
                  definitions are still fuzzy. The fastest improvement comes
                  from writing a one-sentence definition for each missed concept
                  and checking it against a simple example.
                </p>

                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h4 className="text-sm font-bold text-[#0B1B2B]">
                    What this page is not
                  </h4>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-slate-700">
                    <li>No trading tips or tactics</li>
                    <li>No product or asset recommendations</li>
                    <li>No claims about future performance</li>
                    <li>No guarantees or personalized guidance</li>
                  </ul>
                </div>
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
                  Common concept traps
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Many wrong answers come from the same predictable traps. This
                  quiz includes questions that look familiar on purpose, so you
                  can practice separating the idea from the story around it.
                </p>

                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Volatility vs risk
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Volatility is movement. Risk is the chance your outcome is
                      worse than you can tolerate, including the risk of
                      permanent loss.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Price vs value
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Price is what you can pay today. Value is what something
                      is worth based on underlying economics and assumptions.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Certainty stories
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Good decisions can have bad outcomes. Bad decisions can
                      have good outcomes. Focus on process, not one result.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Overconfidence
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Being sure is not the same as being right. Wide
                      uncertainty requires wider margins for error.
                    </div>
                  </div>
                </div>

                <p className="pt-2 text-slate-700 leading-relaxed">
                  If you want to track improvement, run the quiz a few times on
                  different days. The question set is randomized, so repeated
                  runs help separate memorization from genuine understanding.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-14" />
      </div>
    </section>
  );
}
