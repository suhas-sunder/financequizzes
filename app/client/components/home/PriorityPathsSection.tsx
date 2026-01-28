import type { CategoryRoute } from "./homeRoutes";
import { CategoryCardsGrid } from "./CategoryCardsGrid";

type PriorityPathsSectionProps = {
  routes: CategoryRoute[];
};

export function PriorityPathsSection({ routes }: PriorityPathsSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 border-b border-slate-200">
      <div className="text-left sm:text-center">
        <h2 className="text-3xl font-extrabold mb-3 text-[#0B1B2B]">
          Start with a focused quiz
        </h2>
        <p className="max-w-2xl sm:mx-auto mb-10 text-slate-700 text-base sm:text-lg">
          These are the core tracks most people want: broad finance basics, budgeting, and investing.
        </p>
      </div>

      <CategoryCardsGrid routes={routes} variant="priority" />
    </section>
  );
}
