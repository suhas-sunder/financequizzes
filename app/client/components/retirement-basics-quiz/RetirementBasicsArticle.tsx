import {
  RETIREMENT_BASICS_QUIZ_CATEGORIES,
  RETIREMENT_BASICS_QUIZ_INTENT,
} from "./retirementBasicsQuizData";

export function RetirementBasicsArticle() {
  const { topicLabel, focus } = RETIREMENT_BASICS_QUIZ_INTENT;

  const chips = RETIREMENT_BASICS_QUIZ_CATEGORIES.slice(0, 8).map((c) => c.label);

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
            A fast, timeless check of retirement concepts and framing. Take the
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
                  This quiz evaluates your understanding of retirement planning
                  as a long-term concept. The focus is on recognizing language
                  about purpose, time horizons, and common tradeoffs, not on
                  executing a plan.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Each question checks whether a retirement-related phrase
                  registers correctly based on context, similar to how it
                  appears in general planning discussions.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  It intentionally avoids country-specific systems, ages,
                  contribution limits, and step-by-step tactics. The goal is a
                  timeless awareness check.
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
                  Core retirement concepts covered
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Retirement is usually framed in terms of long time horizons
                  and uncertainty. The vocabulary signals intent: what the plan
                  is meant to support and what tradeoffs exist between now and
                  later.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This quiz emphasizes purpose, horizons, and long-term framing
                  while staying non-instructional. Focus:{" "}
                  <span className="font-semibold text-[#0B1B2B]">{focus}</span>
                </p>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Purpose
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      What retirement planning is for, conceptually.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Horizons
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Long timeframes and what “starting early” implies.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Tradeoffs
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Balancing present needs with future security.
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
                  Why these concepts matter
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Retirement planning is often discussed before numbers are ever
                  calculated. Misreading terms like “time horizon” or “tradeoff”
                  can make goals feel unclear or inconsistent.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Understanding the framing helps you interpret retirement
                  language accurately and communicate priorities clearly.
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
                  Confusion often comes from treating retirement terms as rules
                  or guarantees. This page stays at the concept level on
                  purpose, horizons, and uncertainty.
                </p>

                <ul className="space-y-3">
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Reading “expected” as “guaranteed”
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Long-term planning language often describes intent or
                      averages, not promises.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Ignoring the time horizon
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      “Long-term” changes the meaning of tradeoffs and how
                      uncertainty is discussed.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Confusing goals with tactics
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      A goal describes what you want to support. Tactics are how
                      people try to get there.
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
                  Improve by reading for intent: what the phrase is trying to
                  convey about purpose, time, and tradeoffs.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Retake the quiz after reviewing basic retirement definitions.
                  The goal is clearer interpretation, not memorization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
