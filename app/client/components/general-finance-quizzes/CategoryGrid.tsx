import type { CategoryCard } from "./generalFinanceQuiz";

type Props = {
  title: string;
  description: string;
  cards: CategoryCard[];
};

export function CategoryGrid({ title, description, cards }: Props) {
  return (
    <section className="mx-auto max-w-6xl mt-12 px-4 sm:px-6 text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] mb-4">{title}</h2>
      <p className="text-slate-700 mb-6 max-w-2xl mx-auto">{description}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {cards.map((c) => (
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

            <p className="text-slate-700 text-sm leading-relaxed flex-1">{c.d}</p>
            <div className="text-teal-700 mt-4 text-sm font-semibold group-hover:underline">
              Open →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
