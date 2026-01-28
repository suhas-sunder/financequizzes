import {
  FINANCIAL_PLANNING_QUIZ_CATEGORIES,
  FINANCIAL_PLANNING_QUIZ_INTENT,
} from "./financialPlanningQuizData";

export function FinancialPlanningArticle() {
  const { topicLabel, focus } = FINANCIAL_PLANNING_QUIZ_INTENT;

  const chips = FINANCIAL_PLANNING_QUIZ_CATEGORIES.slice(0, 8).map((c) => c.label);

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
            A fast, high-level check of planning language. Take the quiz, then
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
                  This quiz evaluates your ability to recognize and interpret
                  common financial planning terms as they are used in everyday
                  conversations about goals and priorities. The focus is on
                  understanding language and intent, not producing or evaluating
                  plans.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Each question checks whether a planning label or phrase
                  registers correctly based on context, similar to how it shows
                  up in goal-setting discussions, life-stage transitions, and
                  high-level decision framing.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  It is designed for learners who want to verify that core
                  planning language is clear and consistent. The quiz avoids
                  calculations, projections, and domain-specific rules. It
                  strictly measures comprehension.
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
                  Core planning concepts covered
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Planning is often about framing: what matters, what comes
                  first, and how choices change over time. Small wording
                  differences can signal a different horizon, a different
                  priority, or a different constraint.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This quiz emphasizes foundational planning distinctions such
                  as goals vs methods, prioritization, time horizons, and
                  tradeoffs across life stages. Focus:{" "}
                  <span className="font-semibold text-[#0B1B2B]">{focus}</span>
                </p>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Goals
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Outcomes, milestones, and what “success” means.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Priorities
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Sequencing, constraints, and competing objectives.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Horizons
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Short-, medium-, and long-term framing over life stages.
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
                  Planning language shapes decisions before any numbers are
                  involved. Misreading a time horizon or priority can cause
                  choices that conflict with what a person actually wants.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  When planning terms register correctly, it becomes easier to
                  communicate priorities, recognize tradeoffs, and keep decisions
                  aligned across changing life stages.
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
                  People often treat planning words as interchangeable. In
                  practice, they signal different intent: a goal vs a method, a
                  priority vs a preference, or a horizon vs a deadline.
                </p>

                <ul className="space-y-3">
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Confusing goals with tactics
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      A goal describes an outcome. A tactic is one way to move
                      toward it. This quiz tests the language, not the tactics.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Ignoring the time horizon
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Short-term and long-term framing can change what a choice
                      implies, even with the same objective.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Treating priorities as fixed forever
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Priorities often shift across life stages. Planning is
                      partly about recognizing when the order should change.
                    </div>
                  </li>
                </ul>

                <p className="text-slate-700 leading-relaxed">
                  This quiz highlights those problem areas by presenting terms
                  in realistic planning contexts. Identifying confusion points
                  helps reveal gaps that are easy to overlook.
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
                  Improve by reading for intent: what is being prioritized, what
                  the horizon implies, and what tradeoff is being described.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Retake the quiz after reviewing common planning definitions.
                  Progress tends to come from repeated exposure to consistent
                  language rather than memorization.
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
                  Exploring related topics
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Planning connects to budgeting, saving, and investing, but
                  this page stays intentionally abstract. It focuses on how
                  planning is framed conceptually rather than how plans are
                  executed.
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
                      If a term felt unclear, look it up with planning intent in
                      mind (goal vs method and horizon language can differ).
                    </li>
                    <li>
                      Explore more topic-specific quizzes to build depth one
                      concept at a time.
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
