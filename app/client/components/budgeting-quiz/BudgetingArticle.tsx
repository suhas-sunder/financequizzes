import {
  BUDGETING_QUIZ_CATEGORIES,
  BUDGETING_QUIZ_INTENT,
} from "./budgetingQuizData";

export function BudgetingArticle() {
  const { topicLabel, focus } = BUDGETING_QUIZ_INTENT;

  const chips = BUDGETING_QUIZ_CATEGORIES.slice(0, 8).map((c) => c.label);

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
            A fast, practical check of budgeting language. Take the quiz, then
            use this section to understand what is being tested and how to
            improve.
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
                  budgeting terms as they are used in realistic budgeting
                  contexts. The focus is on recognition and understanding, not
                  calculations, tools, or strategy.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Each question checks whether a budgeting label or phrase
                  registers correctly based on context, similar to how it
                  appears in category breakdowns, plan summaries, spending
                  trackers, and monthly budget views.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  It is designed for learners who want to verify that core
                  budgeting language is clear and consistent. The quiz does not
                  teach methods, provide templates, or recommend actions. It
                  strictly measures comprehension of commonly used budgeting
                  terminology.
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
                  Core budgeting concepts covered
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Budgeting relies on precise wording to describe plans, limits,
                  and constraints over time. Small differences in terminology
                  can change what a number means and how it should be used.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This quiz emphasizes foundational budgeting distinctions that
                  frequently cause confusion, such as planning vs tracking,
                  categories vs totals, and short-term limits vs ongoing
                  allocations. Focus:{" "}
                  <span className="font-semibold text-[#0B1B2B]">{focus}</span>
                </p>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Structure
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Categories, totals, allocations, fixed vs variable groups.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Plan vs actual
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Planned amount, actual spending, remaining, over/under.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Time constraints
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Monthly limits, recurring budgets, one-time allocations.
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
                  Misinterpreting budgeting terms can lead to incorrect
                  assumptions about what you can spend, what you already spent,
                  and what is left. Confusing a plan with a tracked result can
                  make a budget feel “wrong” even when the numbers are accurate.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Understanding whether a value is a category limit, a category
                  total, or a remaining amount helps you read budget summaries
                  correctly and keep your budget consistent over time.
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
                  Many people use informal definitions for budgeting words, which
                  often leads to confusion. Labels that sound similar can mean
                  different things depending on whether you are planning,
                  tracking, or reviewing a budget.
                </p>

                <ul className="space-y-3">
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Mixing up “planned” vs “actual”
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      A planned amount is a target. Actual spending is what
                      happened. Confusing the two makes it hard to tell whether
                      you are over or under budget.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Treating category totals as category limits
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      A total is what you have spent so far. A limit is what you
                      intended to spend. The label tells you whether the number
                      is a cap, a sum, or a remaining amount.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Missing the time frame
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      “Monthly” vs “one-time” changes the meaning of a budget
                      line completely. Many misunderstandings come from ignoring
                      whether a constraint resets or continues.
                    </div>
                  </li>
                </ul>

                <p className="text-slate-700 leading-relaxed">
                  This quiz highlights those problem areas by presenting
                  budgeting terms in context. Identifying where confusion occurs
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
                  Improving on this quiz usually comes from slowing down and
                  reading what each label is actually describing. Pay attention
                  to whether the term refers to a plan, a tracked outcome, a
                  category grouping, or a time-based limit.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Retaking the quiz after reviewing basic budgeting definitions
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
                  Exploring related budgeting topics
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Budgeting language shows up across expense tracking, cash-flow
                  planning, and goal setting. Building familiarity across these
                  related areas improves how quickly you can interpret budget
                  summaries and category views without second-guessing labels.
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
                      If a term felt unclear, look it up with budgeting context
                      in mind (plan vs tracking labels can differ).
                    </li>
                    <li>
                      Explore more topic-specific quizzes to build depth one
                      budgeting concept at a time.
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
