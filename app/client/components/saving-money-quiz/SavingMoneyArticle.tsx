import {
  SAVING_MONEY_QUIZ_CATEGORIES,
  SAVING_MONEY_QUIZ_INTENT,
} from "./savingMoneyQuizData";

export function SavingMoneyArticle() {
  const { topicLabel, focus } = SAVING_MONEY_QUIZ_INTENT;

  const chips = SAVING_MONEY_QUIZ_CATEGORIES.slice(0, 8).map((c) => c.label);

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
            A fast, conceptual check of saving language and behavioral framing.
            Take the quiz, then use this section to understand what is being
            tested and how to improve.
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
                  This quiz evaluates your ability to interpret common saving
                  terms and phrases as they are used in everyday conversation
                  and personal finance education. The focus is on recognition
                  and understanding, not products, rates, or optimization.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Each question checks whether a saving label or phrase
                  registers correctly based on context, similar to how it
                  appears in goal trackers, habit discussions, and “rules of
                  thumb” about saving.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  It is designed for learners who want to verify that core
                  saving language is clear and consistent. The quiz does not
                  teach tactics or recommend actions. It strictly measures
                  comprehension of commonly used saving concepts.
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
                  Core saving concepts covered
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Saving is often described as a behavior: setting goals,
                  choosing tradeoffs, and creating habits that hold over time.
                  Small wording differences can change what a phrase implies and
                  how it should be interpreted.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This quiz emphasizes foundational saving ideas that remain
                  relevant across time, such as goal clarity, consistency, and
                  short-term vs long-term thinking. Focus:{" "}
                  <span className="font-semibold text-[#0B1B2B]">{focus}</span>
                </p>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Goals
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Emergency fund, short-term targets, long-term stability.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Habits
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Consistency, automation, paying yourself first.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Tradeoffs
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Wants vs needs, opportunity cost, priorities.
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
                  Misinterpreting saving terms can lead to confusion about what
                  a goal means, what a habit is supposed to accomplish, or why a
                  tradeoff exists. If the language is unclear, it is easy to
                  treat saving as a vague intention instead of a concrete
                  behavior.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  When saving labels register correctly, you can read goal
                  descriptions, interpret common guidance, and keep your saving
                  intentions consistent over time.
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
                  Many people use informal definitions for saving words, which
                  can cause misunderstandings. Phrases that sound motivating can
                  hide important distinctions about goals, time horizons, and
                  tradeoffs.
                </p>

                <ul className="space-y-3">
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Treating “saving” as the same as “not spending”
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Saving is usually framed as purposeful set-aside money,
                      not just spending less in general.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Ignoring the time horizon
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      “Short-term” and “long-term” goals often imply different
                      tradeoffs and different kinds of constraints.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Confusing goals with methods
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      A goal is what you are saving for. A method is how you try
                      to do it. The quiz keeps that distinction clear.
                    </div>
                  </li>
                </ul>

                <p className="text-slate-700 leading-relaxed">
                  This quiz highlights those problem areas by presenting saving
                  language in context. Identifying where confusion occurs helps
                  reveal gaps that are easy to overlook but important to
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
                  Improve by slowing down and reading what each phrase is
                  implying: goal vs habit, short-term vs ongoing, and tradeoff
                  vs restriction.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Retaking the quiz after reviewing standard definitions of
                  saving terms can help reinforce accurate interpretation.
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
                  Saving connects to budgeting and investing, but it is not the
                  same thing. This page stays focused on saving concepts as a
                  behavior rather than a technique or product choice.
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
                      If a term felt unclear, look it up in saving context (goal
                      framing and time horizon language can differ).
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
