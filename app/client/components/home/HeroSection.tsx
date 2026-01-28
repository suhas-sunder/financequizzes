import { Link } from "react-router";

type HeroSectionProps = {
  financeChallengeHref: string;
  budgetingChallengeHref: string;
  investingChallengeHref: string;
  financeQuestionsHref: string;
  allCategoriesAnchorHref?: string;
};

export function HeroSection({
  financeChallengeHref,
  budgetingChallengeHref,
  investingChallengeHref,
  financeQuestionsHref,
  allCategoriesAnchorHref = "#all-categories",
}: HeroSectionProps) {
  return (
    <section
      className="relative bg-[#F9FBFD] pt-10 pb-14 px-4 border-b border-slate-200"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, #E5E9EE 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-left sm:text-center">
          <div className="mb-4 inline-block rounded-full bg-teal-100 px-4 pt-1 pb-2 text-xs font-semibold text-teal-700">
            Test your finance and investing knowledge
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B2B] mb-5 tracking-tight">
            Finance Quizzes
          </h1>

          <p className="max-w-2xl sm:mx-auto text-slate-700 text-base sm:text-lg leading-relaxed">
            Take a 10 question challenge quiz and get a simple score summary. Each run is randomized from a larger
            question pool.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-center">
            <Link
              to={financeChallengeHref}
              prefetch="intent"
              className="rounded-xl bg-teal-700 px-6 py-3 text-white font-semibold text-base cursor-pointer hover:bg-teal-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 text-center"
            >
              Start the Finance Quiz
            </Link>

            <Link
              to={budgetingChallengeHref}
              prefetch="intent"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-[#0B1B2B] font-semibold text-base cursor-pointer hover:bg-slate-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 text-center"
            >
              Budgeting Quiz
            </Link>

            <Link
              to={investingChallengeHref}
              prefetch="intent"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-[#0B1B2B] font-semibold text-base cursor-pointer hover:bg-slate-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 text-center"
            >
              Investing Quiz
            </Link>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-2 sm:justify-center text-sm text-slate-600">
            <p>
              Want a study-friendly list instead? Browse{" "}
              <Link
                to={financeQuestionsHref}
                prefetch="intent"
                className="underline cursor-pointer hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                finance quiz questions and answers
              </Link>
              .
            </p>
            <p className="hidden sm:block" aria-hidden="true">
              ·
            </p>
            <p>
              Or{" "}
              <Link
                to={allCategoriesAnchorHref}
                className="underline cursor-pointer hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                browse all quiz categories
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
