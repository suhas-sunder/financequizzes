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
        <div className="text-left">
          <h2 className="text-3xl font-extrabold mb-4 text-[#0B1B2B]">
            10 question challenges designed for fast self checks
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-5">
            Choose a topic, answer 10 multiple choice questions, and finish with a clear score. No signup.
          </p>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            These quizzes are educational only and do not provide recommendations.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-[#F9FBFD] p-8 text-left">
          <h3 className="text-xl font-bold mb-4 text-[#0B1B2B]">
            What you can expect
          </h3>
          <ul className="space-y-3 text-slate-700 text-base">
            <li className="flex gap-3">
              <span className="mt-0.5">✅</span>
              <span>10 question challenge quizzes with quick scoring</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">✅</span>
              <span>Topic focused quizzes across money, credit, investing, banking, and economics</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">✅</span>
              <span>Clear wording and timeless concepts</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">✅</span>
              <span>No signup and no personal data required</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
