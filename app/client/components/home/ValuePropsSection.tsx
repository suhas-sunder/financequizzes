import { Link } from "react-router";


type ValuePropsSectionProps = {
  financeChallengeHref: string;
  allCategoriesAnchorHref: string;
};

export function ValuePropsSection({
  financeChallengeHref,
  allCategoriesAnchorHref,
}: ValuePropsSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 border-b border-slate-200">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-extrabold mb-4 text-[#0B1B2B]">
            Two formats, one goal: a clean self-assessment
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-5">
            Choose a 10-question challenge quiz for a full score, or a 3-question streak for fast play.
            No signup.
          </p>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Pick a topic and see where you stand. These quizzes are educational only and do not provide
            recommendations.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-[#F9FBFD] p-8">
          <h3 className="text-xl font-bold mb-4 text-[#0B1B2B]">
            What you can expect
          </h3>
          <ul className="space-y-3 text-slate-700 text-base">
            <li className="flex gap-3">
              <span className="mt-0.5">✅</span>
              <span>10-question challenge quizzes with quick scoring</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">✅</span>
              <span>3-question streaks for quick checks</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">✅</span>
              <span>Clear wording, timeless concepts</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">✅</span>
              <span>No signup and no personal data required</span>
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to={financeChallengeHref}
              prefetch="intent"
              className="rounded-xl bg-teal-700 px-5 py-2.5 text-white font-semibold text-base hover:bg-teal-800 transition text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              Take a 10-Question Challenge
            </Link>
            <Link
              to={allCategoriesAnchorHref}
              className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-[#0B1B2B] font-semibold text-base hover:bg-slate-50 transition text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              Browse all categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
