import type { CategoryCard } from "./generalFinanceQuiz";
import { CategoryGrid } from "./CategoryGrid";

type Props = {
  allCategories: CategoryCard[];
};

export function BrowseAllCategories({ allCategories }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-b border-slate-200 text-center">
      <h2 className="text-3xl font-extrabold mb-4 text-[#0B1B2B]">
        Browse all quiz categories
      </h2>
      <p className="max-w-2xl mx-auto mb-8 text-slate-700 text-base sm:text-lg">
        If you are exploring, start with the focused tracks above. If you want
        everything, it is all here.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {allCategories.map((c) => (
          <a
            key={c.t}
            href={c.href}
            className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{c.icon}</span>
              <h3 className="text-lg font-semibold text-[#0B1B2B] group-hover:text-teal-700 transition-colors">
                {c.t}
              </h3>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed flex-1">
              {c.d}
            </p>
            <div className="text-teal-700 mt-4 text-sm font-semibold group-hover:underline">
              Open →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
