export function QuizGuideSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 border-b border-slate-200">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-white p-6 sm:p-8 lg:p-10 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-3 items-start">
          <div className="lg:col-span-1 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-[#0B1B2B] shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Quiz format guide
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1B2B]">
              What to expect from these quizzes
            </h2>

            <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              Each page is an interactive quiz, not a calculator and not a course. You answer multiple choice questions,
              get immediate feedback, and finish with a score summary.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-[#0B1B2B]">A simple expectation setter</h3>
              <ul className="mt-3 space-y-2 text-slate-700 text-base sm:text-lg leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                  Questions are general and designed for unambiguous scoring.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                  Results describe quiz performance only and are not personalized guidance.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                  Some topics vary by country or policy, so wording stays high level by design.
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#0B1B2B] font-extrabold">
                    1
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">Pick a topic</h3>
                    <p className="mt-1 text-slate-700 text-base sm:text-lg leading-relaxed">
                      Choose a quiz category, then start a run. The site focuses on fast, repeatable practice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#0B1B2B] font-extrabold">
                    2
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">Answer once</h3>
                    <p className="mt-1 text-slate-700 text-base sm:text-lg leading-relaxed">
                      Each question locks after a selection, which prevents accidental double answers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#0B1B2B] font-extrabold">
                    3
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">Get feedback</h3>
                    <p className="mt-1 text-slate-700 text-base sm:text-lg leading-relaxed">
                      You see correctness right away. In challenge mode, you also get a score at the end.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#0B1B2B] font-extrabold">
                    4
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">Try another set</h3>
                    <p className="mt-1 text-slate-700 text-base sm:text-lg leading-relaxed">
                      Runs are randomized, so repeating the same quiz gives you a fresh mix.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B1B2B] text-left">Challenge quizzes (10 questions)</h3>
              <p className="mt-2 text-slate-700 text-base sm:text-lg leading-relaxed text-left">
                A challenge quiz is a full 10 question run. Your score is correct answers out of 10, shown as an integer
                percentage.
              </p>

              <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-slate-700 text-base sm:text-lg">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                  Immediate feedback after each answer
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                  One answer per question, then it locks
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                  Randomized questions and shuffled options
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                  Start a fresh run anytime
                </li>
              </ul>

              <details className="mt-6 rounded-2xl border border-slate-200 bg-[#F9FBFD] p-5 sm:p-6">
                <summary className="cursor-pointer list-none font-semibold text-[#0B1B2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 hover:opacity-90 transition">
                  Stats and privacy notes
                </summary>

                <div className="mt-4 space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Many quizzes include a compact stats bar so you can track progress during a run. You may also see a
                    streak counter for consecutive correct answers within the current run.
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <strong>Answered</strong>: how many questions you have completed in the current run.
                    </li>
                    <li>
                      <strong>Correct</strong>: how many of those answers were correct.
                    </li>
                    <li>
                      <strong>New streak</strong>: current consecutive correct count within this run.
                    </li>
                    <li>
                      <strong>Best streak</strong>: highest streak reached on that quiz page (stored locally).
                    </li>
                  </ul>
                  <p>
                    When a quiz remembers a best streak, it is stored locally in your browser. Private windows, clearing
                    site data, or switching devices can reset those stats.
                  </p>
                </div>
              </details>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-600">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center">
                <div className="font-bold text-[#0B1B2B]">10</div>
                questions
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center">
                <div className="font-bold text-[#0B1B2B]">4</div>
                options
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center">
                <div className="font-bold text-[#0B1B2B]">random</div>
                runs
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center">
                <div className="font-bold text-[#0B1B2B]">instant</div>
                feedback
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
