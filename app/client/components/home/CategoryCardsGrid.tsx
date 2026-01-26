import React from "react";
import type { CategoryRoute } from "./homeRoutes";

type CategoryCardsGridProps = {
  routes: CategoryRoute[];
  variant: "priority" | "all";
};

export function CategoryCardsGrid({ routes, variant }: CategoryCardsGridProps) {
  const cardClass =
    variant === "priority"
      ? "group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
      : "group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition";

  const linkLabel = variant === "priority" ? "Start →" : "Open →";

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
      {routes.map((c) => (
        <a key={c.t} href={c.href} className={cardClass}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{c.icon}</span>
            <h3 className="text-lg font-semibold text-[#0B1B2B] group-hover:text-teal-700 transition-colors">
              {c.t}
            </h3>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed flex-1">{c.d}</p>
          <div className="text-teal-700 mt-4 text-sm font-semibold group-hover:underline">
            {linkLabel}
          </div>
        </a>
      ))}
    </div>
  );
}
