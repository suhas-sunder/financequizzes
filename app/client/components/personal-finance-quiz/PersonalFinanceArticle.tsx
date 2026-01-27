import {
  PERSONAL_FINANCE_QUIZ_CATEGORIES,
  PERSONAL_FINANCE_QUIZ_INTENT,
  PERSONAL_FINANCE_QUIZ_SCORE_BANDS,
} from "./personalFinanceQuizData";

export function PersonalFinanceArticle() {
  const { topicLabel, focus } = PERSONAL_FINANCE_QUIZ_INTENT;

  const chips = PERSONAL_FINANCE_QUIZ_CATEGORIES.map((c) => c.label);

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
            About this {topicLabel} quiz
          </h2>

          <p className="mx-auto max-w-2xl text-slate-600">
            {focus}
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
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <span className="text-emerald-700 font-extrabold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#0B1B2B]">
                  What this quiz is testing
                </h3>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  This page focuses on everyday personal finance language: budgets, bills, saving, debt, and basic credit terms. It avoids abstract market concepts and sticks to the words and decisions people use in ordinary household contexts.
                  
                  The questions are designed to check whether you recognize common phrases you will see on a bank statement, a credit card statement, or a bill: things like interest, principal, annual percentage rate (APR), minimum payment, and automatic payments.
                  
                  You will also see practical tradeoffs that come up in real life, like prioritizing an emergency fund, understanding how credit utilization works, and knowing when a late fee or interest charge is likely to apply.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start gap-4 p-8">
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <span className="text-emerald-700 font-extrabold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#0B1B2B]">
                  How to improve fast
                </h3>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  If you want a quick improvement in a single afternoon, focus on the parts of money management that show up every week and every month: bills, statements, due dates, and the basic math behind interest.
                </p>

                <ul className="mt-3 space-y-2 text-slate-700 leading-relaxed list-disc pl-6">
                  <li>Read your bank and card statements and look up any unfamiliar line items (fees, interest, categories).</li>
                  <li>Learn the difference between statement balance, current balance, and minimum payment.</li>
                  <li>Practice writing a simple monthly budget: needs, wants, and saving or debt payoff.</li>
                  <li>Understand what affects credit scores at a basic level (payment history and utilization).</li>
                  <li>Set up reminders or autopay for at least the minimum payment to avoid late marks and fees.</li>
                  <li>Learn how to read an APR and what it means for the cost of carrying a balance from month to month.</li>
                  <li>If a question surprises you, write down the term and look for it on your own statements so it becomes familiar.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start gap-4 p-8">
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <span className="text-emerald-700 font-extrabold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#0B1B2B]">
                  How to interpret your score
                </h3>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  Your score reflects practical recognition of terms you see in real life. Use the bands below as a quick read, then use your missed questions as a study list.
                  
                  The timer starts when you answer the first question, so your completion time reflects decision speed, not how long the tab sat open. If you care about the "Best time" stat, try a second run after you are warmed up and aiming for fewer hesitations rather than rushing.
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PERSONAL_FINANCE_QUIZ_SCORE_BANDS.map((b) => (
                    <div
                      key={b.key}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                    >
                      <div className="text-sm font-extrabold text-[#0B1B2B]">
                        {b.label}
                      </div>
                      <div className="mt-1 text-sm text-slate-700">
                        {b.meaning}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-slate-700 leading-relaxed">
                  A useful way to practice is to retake the quiz and intentionally explain each correct answer in one sentence. If you cannot explain it, that is the gap to review. Focus on the handful of core ideas that compound over time: spending less than you earn, paying high-interest debt down aggressively, keeping utilization low when possible, and building a buffer for surprises.
                </p>

                <p className="mt-5 text-xs text-slate-500">
                  Note: This quiz is informational and not financial advice.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-12" />
      </div>
    </section>
  );
}
