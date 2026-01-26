import React from "react";
import type { CategoryRoute } from "./homeRoutes";
import { CategoryCardsGrid } from "./CategoryCardsGrid";

type AllCategoriesSectionProps = {
  routes: CategoryRoute[];
};

export function AllCategoriesSection({ routes }: AllCategoriesSectionProps) {
  return (
    <section
      id="all-categories"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-b border-slate-200 text-center"
    >
      <h2 className="text-3xl font-extrabold mb-4 text-[#0B1B2B]">
        All quiz categories
      </h2>
      <p className="max-w-2xl mx-auto mb-10 text-slate-700 text-base sm:text-lg">
        Explore every existing quiz category. The first row is prioritized
        because it matches the strongest search intent.
      </p>

      <CategoryCardsGrid routes={routes} variant="all" />
    </section>
  );
}
