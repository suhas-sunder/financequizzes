import {
  FINANCE_QUIZ_CATEGORIES,
  FINANCE_QUIZ_INTENT,
} from "./financeQuizData";

export function FinanceArticle() {
  const { topicLabel, focus } = FINANCE_QUIZ_INTENT;

  const chips = FINANCE_QUIZ_CATEGORIES.slice(0, 8).map((c) => c.label);

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
            About this {topicLabel.toLowerCase()} quiz
          </h2>

          <p className="mx-auto max-w-2xl text-slate-600">
            A fast, practical check of the finance language you see in real
            life. Take the quiz, then use this section to understand what is
            being tested and how to improve.
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
                  This quiz evaluates your ability to correctly interpret common
                  personal finance terms as they are used in real situations.
                  The focus is on recognition and understanding, not calculation
                  or strategy. Each question checks whether a financial label or
                  phrase registers correctly based on context, similar to how it
                  appears on bank statements, account dashboards, loan
                  summaries, and disclosure pages.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  It is designed for learners who want to verify that core
                  finance language is clear and consistent. The quiz does not
                  attempt to teach tactics, provide advice, or recommend
                  actions. It strictly measures comprehension of commonly used
                  financial terms.
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
                  Core finance concepts covered
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Personal finance relies heavily on precise language. Small
                  wording differences can change the meaning of a number or
                  label entirely. This quiz emphasizes foundational concepts
                  that frequently cause confusion, such as the difference
                  between rates and outcomes, balances and totals, or recurring
                  charges versus one-time amounts.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The concepts tested here appear across many financial
                  products. Understanding whether a value represents a
                  percentage, a time-based charge, or a cumulative result is
                  essential for accurately reading financial information. These
                  distinctions form the basis of informed financial awareness.
                </p>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Rates
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      APR, APY, interest rate, yield, inflation rate.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Balances
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Principal, outstanding balance, available balance,
                      statement balance.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Costs
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Fees, minimum payments, compounding, total cost over time.
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
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#0B1B2B]">
                  Why these concepts matter in real life
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Misinterpreting financial terms can lead to incorrect
                  assumptions about cost, growth, or obligation. Confusing an
                  annual rate with a total amount can distort expectations about
                  borrowing or saving. Treating a balance as a final cost rather
                  than a snapshot in time can lead to poor decisions.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The ability to read and understand financial labels accurately
                  is a practical skill that applies across everyday situations.
                  This quiz focuses on strengthening that skill rather than
                  testing advanced financial knowledge. Focus:{" "}
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
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0B1B2B]">
                  Common mistakes and misconceptions
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Many people rely on informal definitions when thinking about
                  finance, which often leads to misunderstandings. Terms that
                  sound similar in conversation can have very different meanings
                  in financial contexts.
                </p>

                <ul className="space-y-3">
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Mixing up “rate” vs “total”
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      A percentage (like APR/APY) describes a rate over time,
                      not a one-time amount. Reading it as a total leads to
                      false expectations.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Misreading balances
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      “Available”, “current”, and “statement” balances can mean
                      different things. The label and timing matter.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Treating fees as interchangeable
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Fees can be one-time, recurring, or conditional. Two
                      products can look similar while charging differently.
                    </div>
                  </li>
                </ul>

                <p className="text-slate-700 leading-relaxed">
                  This quiz highlights those problem areas by presenting terms
                  in realistic contexts. Identifying where confusion occurs
                  helps reveal gaps that are easy to overlook but important to
                  correct.
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
                  How to improve your results
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Improving performance on this quiz usually comes from slowing
                  down and carefully reading how each term is framed. Pay close
                  attention to time references (monthly vs annual), units
                  (percent vs dollars), and qualifiers (fixed vs variable).
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Retaking the quiz after reviewing basic finance definitions
                  can help reinforce accurate interpretation. Progress tends to
                  come from repeated exposure to consistent terminology rather
                  than memorization.
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
                  Exploring related finance topics
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  This quiz draws from multiple areas of personal finance,
                  including saving, banking, credit, and investing fundamentals.
                  Building familiarity across related topics improves
                  recognition across different contexts and reduces costly
                  misunderstandings.
                </p>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-bold text-[#0B1B2B]">
                    Quick next steps
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                    <li>
                      Retake the quiz and aim for consistent scores across runs,
                      not one lucky result.
                    </li>
                    <li>
                      If a term felt unclear, look it up with the product
                      context in mind (banking vs investing labels can differ).
                    </li>
                    <li>
                      Explore more topic-specific quizzes to build depth one
                      category at a time.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
