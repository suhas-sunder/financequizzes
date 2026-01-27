export function QuizGuideSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 border-b border-slate-200">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-white p-6 sm:p-8 lg:p-10 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-3 items-start">
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-[#0B1B2B] shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Quiz format guide
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1B2B]">
              What to expect from these quizzes
            </h2>
            <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              FinanceQuizzes is built for quick, repeatable self-checks. Each page is an interactive quiz
              (not a calculator, and not a course). You answer multiple-choice questions, get immediate feedback,
              and finish with a score or streak.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-[#0B1B2B]">A simple expectation-setter</h3>
              <ul className="mt-3 space-y-2 text-slate-700 text-base sm:text-lg leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                  The questions are general and designed for unambiguous scoring.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                  Results describe quiz performance only and are not personalized guidance.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                  Some topics can vary by country or policy, so phrasing stays high-level by design.
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#0B1B2B] font-extrabold">1</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">Pick a topic</h3>
                    <p className="mt-1 text-slate-700 text-base sm:text-lg leading-relaxed">
                      Choose a quiz category, then start a run. The site focuses on fast, repeatable practice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#0B1B2B] font-extrabold">2</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">Answer once</h3>
                    <p className="mt-1 text-slate-700 text-base sm:text-lg leading-relaxed">
                      Each question locks after a selection, which prevents accidental double answers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#0B1B2B] font-extrabold">3</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">Get feedback</h3>
                    <p className="mt-1 text-slate-700 text-base sm:text-lg leading-relaxed">
                      You see correctness right away. In challenge mode, you also get a score at the end.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#0B1B2B] font-extrabold">4</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">Try another set</h3>
                    <p className="mt-1 text-slate-700 text-base sm:text-lg leading-relaxed">
                      Runs are randomized, so repeating the same quiz gives you a fresh mix.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">10 questions</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">4 options</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">randomized runs</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">instant feedback</span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-[#0B1B2B]">Challenge quizzes (10 questions)</h3>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
                    A challenge quiz is a full 10-question run. You answer each question once, then you get an end screen
                    with your score as an integer percentage. The score reflects correct answers out of 10.
                  </p>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                    Each run is randomized. Questions are drawn from a larger pool and answer options are shuffled so the
                    correct choice is not tied to a fixed position.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#F9FBFD] p-6">
                  <ul className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                      <span><span className="font-semibold text-[#0B1B2B]">Immediate feedback:</span> your selection is marked correct or incorrect right away.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                      <span><span className="font-semibold text-[#0B1B2B]">One answer per question:</span> the UI locks after a selection to prevent double answering.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                      <span><span className="font-semibold text-[#0B1B2B]">Clear progression:</span> you move on only after answering, keeping stats consistent.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                      <span><span className="font-semibold text-[#0B1B2B]">Try another set:</span> start a fresh run to compare results.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <h3 className="text-xl font-bold text-[#0B1B2B]">Stats and streaks</h3>
              <p className="mt-3 text-slate-700 text-base sm:text-lg leading-relaxed">
                Many quizzes include a compact stats bar so you can track progress during a run. Streaks are about consecutive
                correct answers, while overall score is about total correct.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-[#F9FBFD] p-6">
                  <h4 className="text-lg font-bold text-[#0B1B2B] mb-3">Stats you will see</h4>
                  <ul className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                      <span><span className="font-semibold text-[#0B1B2B]">Answered:</span> how many questions you have completed in the current run.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                      <span><span className="font-semibold text-[#0B1B2B]">Correct:</span> how many of those answers were correct.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                      <span><span className="font-semibold text-[#0B1B2B]">New streak:</span> current consecutive-correct count within this run.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                      <span><span className="font-semibold text-[#0B1B2B]">Best streak:</span> highest streak reached on that quiz page (stored locally).</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-[#F9FBFD] p-6">
                  <h4 className="text-lg font-bold text-[#0B1B2B] mb-3">Privacy and device storage</h4>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
                    You can play without creating an account. When a quiz remembers a best streak, it is stored locally in your
                    browser so it can be restored after a reload.
                  </p>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                    If you use a private window, clear site data, or switch devices, those locally saved stats may reset.
                    The quizzes still work normally either way.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <h3 className="text-xl font-bold text-[#0B1B2B] mb-4">What is in scope</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
                    Questions are written to be broadly applicable. Expect common concepts like budgeting, debt, interest, risk,
                    diversification, taxes as a general idea, and retirement terminology at a high level. The intent is conceptual
                    understanding, not country-specific compliance.
                  </p>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                    Some questions reference real-world behaviors (for example, what a term means or what a common account type is
                    used for). They are not meant to recommend a particular product or strategy.
                  </p>
                </div>
                <div>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
                    Because quizzes need unambiguous scoring, each question has four options and exactly one correct answer.
                    If a topic would require nuanced exceptions, the question pool avoids those edge cases.
                  </p>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                    If wording ever feels ambiguous, treat your result as a signal rather than a verdict.
                    Use the quizzes as a snapshot of your current familiarity with the topic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
