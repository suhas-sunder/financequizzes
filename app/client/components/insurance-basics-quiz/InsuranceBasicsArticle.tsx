import {
  INSURANCE_BASICS_QUIZ_CATEGORIES,
  INSURANCE_BASICS_QUIZ_INTENT,
} from "./insuranceBasicsQuizData";

export function InsuranceBasicsArticle() {
  const { topicLabel, focus } = INSURANCE_BASICS_QUIZ_INTENT;
  const chips = INSURANCE_BASICS_QUIZ_CATEGORIES.slice(0, 8).map((c) => c.label);

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
            A fast check of insurance terminology and how insurance works at a
            conceptual level: coverage language, claims, and cost sharing.
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
                  This quiz evaluates your understanding of core insurance terms
                  and the relationships between them. The focus is on conceptual
                  clarity: what words like premium, deductible, coverage limit,
                  exclusion, and claim mean in typical insurance language.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  It avoids provider comparisons and product recommendations. It
                  is not about which insurance to buy, only whether the language
                  is clear.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Focus:{" "}
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
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#0B1B2B]">
                  Core insurance concepts covered
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Insurance is built around uncertainty. People pay premiums
                  into a pool so that large, unexpected losses can be shared.
                  Policies use specific terms to describe what is covered, what
                  is excluded, and how costs are shared.
                </p>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Risk pooling
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Many contribute so losses for a few can be covered.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Cost sharing
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Premiums, deductibles, and (where relevant) copays or coinsurance.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Policy language
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Limits, exclusions, claims, and what “covered” means.
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
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0B1B2B]">
                  Common mistakes and misconceptions
                </h3>

                <ul className="space-y-3">
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Confusing premium with deductible
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Premium keeps coverage active. Deductible is what you pay
                      before coverage applies to certain costs.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Assuming “covered” means “everything”
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Coverage depends on terms, limits, and exclusions.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Missing the role of exclusions
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Exclusions define what is not covered and set expectations.
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
                  Improve by slowing down and reading terms as definitions, not
                  advice. Track the difference between what you pay to keep
                  coverage (premium), what you pay before coverage applies
                  (deductible), and what may be excluded or capped (exclusions
                  and limits).
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Retaking the quiz after reviewing a basic glossary tends to
                  help more than memorizing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
