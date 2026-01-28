import {
  BANKING_AND_CREDIT_QUIZ_CATEGORIES,
  BANKING_AND_CREDIT_QUIZ_INTENT,
} from "./bankingAndCreditQuizData";

export function BankingAndCreditArticle() {
  const { topicLabel, focus } = BANKING_AND_CREDIT_QUIZ_INTENT;

  const chips = BANKING_AND_CREDIT_QUIZ_CATEGORIES.slice(0, 8).map((c) => c.label);

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
            A fast check of everyday banking and credit terminology. Take the
            quiz, then use this section to understand what is being tested and
            how to improve.
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
                  This quiz evaluates your ability to correctly interpret common
                  banking and credit terms as they appear in everyday account
                  usage. The focus is on recognition and understanding, not
                  comparing products or recommending choices.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Each question checks whether a label or phrase registers
                  correctly based on context, similar to how it appears on bank
                  statements, account dashboards, card statements, and basic
                  disclosures.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  It is designed for learners who want core banking language to
                  feel clear and consistent. The quiz does not teach tactics or
                  strategies. It strictly measures comprehension.
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
                  Core banking concepts covered
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Banking relies on precise labels. Small wording differences
                  can change what a number or term actually represents, such as
                  “available” vs “current,” or a rate vs a dollar amount.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This quiz emphasizes foundational vocabulary across accounts,
                  statements, fees, and basic credit obligations. Focus:{" "}
                  <span className="font-semibold text-[#0B1B2B]">{focus}</span>
                </p>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Accounts
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Checking vs savings, deposits, withdrawals, holds.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Statements
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Available vs current balance, statement balance, posted.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Credit basics
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Limit, utilization, minimum payment, APR language.
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
                  Misinterpreting banking terms can lead to incorrect assumptions
                  about what you can spend, what you owe, or when a charge
                  applies. Confusing a balance snapshot with a statement total
                  is a common source of mistakes.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  The ability to read labels accurately is a practical literacy
                  skill for everyday banking. This quiz focuses on strengthening
                  that skill rather than testing advanced knowledge.
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
                  banking, which can cause misunderstandings when the same words
                  are used as formal labels.
                </p>

                <ul className="space-y-3">
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Mixing up “available” vs “current”
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Holds and pending activity can cause these labels to
                      differ. Timing matters.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Treating APR as a total amount
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      APR is a rate over time, not a one-time dollar cost.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Assuming all fees are the same
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Fees can be one-time, recurring, or conditional. Labels
                      and triggers matter.
                    </div>
                  </li>
                </ul>

                <p className="text-slate-700 leading-relaxed">
                  This quiz highlights those problem areas by presenting terms in
                  realistic contexts. Identifying confusion helps reveal gaps
                  that are easy to overlook but important to correct.
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
                  Improve by slowing down and reading labels carefully. Pay
                  attention to time references (statement vs current), units
                  (percent vs dollars), and qualifiers (available vs posted).
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Retake the quiz after reviewing basic banking definitions.
                  Progress tends to come from consistent exposure rather than
                  memorization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
