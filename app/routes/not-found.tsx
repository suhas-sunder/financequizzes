import { json } from "@remix-run/node";
import type { Route } from "./+types/not-found";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  const title = "Page Not Found | FinanceQuizzes";
  const description =
    "Sorry, this page doesn’t exist. Explore interactive finance quizzes or related learning websites.";
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
  ];
}

export function loader() {
  return json({ nowISO: new Date().toISOString() });
}

export default function NotFound({}: Route.ComponentProps) {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center text-center bg-[#F9FBFD] px-6 py-16">
      {/* === Breadcrumb navigation (visible) === */}
      <nav
        className="text-sm text-slate-600 px-6 pb-4 pt-3 max-w-6xl mx-auto"
        aria-label="Breadcrumb"
      >
        <ol className="list-none p-0 inline-flex space-x-2">
          <li>
            <a href="/" className="text-teal-700 hover:underline font-medium">
              Home
            </a>
          </li>
          <li className="text-slate-400">›</li>
          <li aria-current="page" className="text-slate-700 font-semibold">
            404 Not Found
          </li>
        </ol>
      </nav>
      <div className="max-w-3xl">
        <h1 className="text-5xl font-extrabold text-[#0B1B2B] mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-slate-700 max-w-xl mx-auto mb-10 leading-relaxed">
          Looks like this quiz or page doesn’t exist. Keep exploring our finance
          quizzes or visit one of our related learning websites below.
        </p>

        {/* Quiz category links */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <Link
            to="/learn-personal-finance-quizzes"
            className="block rounded-xl border border-slate-200 bg-white p-5 text-[#0B1B2B] font-semibold hover:bg-teal-50 hover:shadow-sm transition"
          >
            💰 Personal Finance →
          </Link>
          <Link
            to="/learn-investing-quizzes"
            className="block rounded-xl border border-slate-200 bg-white p-5 text-[#0B1B2B] font-semibold hover:bg-teal-50 hover:shadow-sm transition"
          >
            📈 Investing →
          </Link>
          <Link
            to="/learn-banking-quizzes"
            className="block rounded-xl border border-slate-200 bg-white p-5 text-[#0B1B2B] font-semibold hover:bg-teal-50 hover:shadow-sm transition"
          >
            🏦 Banking & Credit →
          </Link>
          <Link
            to="/learn-business-quizzes"
            className="block rounded-xl border border-slate-200 bg-white p-5 text-[#0B1B2B] font-semibold hover:bg-teal-50 hover:shadow-sm transition"
          >
            📊 Business Finance →
          </Link>
          <Link
            to="/learn-economics-quizzes"
            className="block rounded-xl border border-slate-200 bg-white p-5 text-[#0B1B2B] font-semibold hover:bg-teal-50 hover:shadow-sm transition"
          >
            🌍 Economics →
          </Link>
          <Link
            to="/learn-history-quizzes"
            className="block rounded-xl border border-slate-200 bg-white p-5 text-[#0B1B2B] font-semibold hover:bg-teal-50 hover:shadow-sm transition"
          >
            ⏳ Money History →
          </Link>
        </div>

        {/* External Related Sites */}
        <div className="border-t border-slate-200 pt-8 mt-10">
          <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">
            Related Learning Sites
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <a
              href="https://www.financemapped.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-5 hover:bg-teal-50 hover:shadow-sm transition"
            >
              <h3 className="text-lg font-semibold text-[#0B1B2B] mb-1">
                FinanceMapped
              </h3>
              <p className="text-slate-700 text-sm">
                Learn how money systems, banking, and investing really work.
              </p>
              <div className="text-right text-teal-600 font-semibold text-sm mt-2">
                Visit FinanceMapped.com →
              </div>
            </a>

            <a
              href="https://www.focustclimber.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-5 hover:bg-teal-50 hover:shadow-sm transition"
            >
              <h3 className="text-lg font-semibold text-[#0B1B2B] mb-1">
                FocusClimber
              </h3>
              <p className="text-slate-700 text-sm">
                Master consistency and focus through daily productivity
                challenges.
              </p>
              <div className="text-right text-teal-600 font-semibold text-sm mt-2">
                Visit FocusClimber.com →
              </div>
            </a>

            <a
              href="https://www.ilovehabits.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-5 hover:bg-teal-50 hover:shadow-sm transition"
            >
              <h3 className="text-lg font-semibold text-[#0B1B2B] mb-1">
                iLoveHabits
              </h3>
              <p className="text-slate-700 text-sm">
                Build better habits and track your growth with fun goal systems.
              </p>
              <div className="text-right text-teal-600 font-semibold text-sm mt-2">
                Visit iLoveHabits.com →
              </div>
            </a>

            <a
              href="https://www.freemoneygames.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-5 hover:bg-teal-50 hover:shadow-sm transition"
            >
              <h3 className="text-lg font-semibold text-[#0B1B2B] mb-1">
                FunMoneyGames
              </h3>
              <p className="text-slate-700 text-sm">
                Learn finance through interactive mini-games and challenges.
              </p>
              <div className="text-right text-teal-600 font-semibold text-sm mt-2">
                Visit FunMoneyGames.com →
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* === BreadcrumbList (for structured data) === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.financequizzes.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "404 Not Found",
                item: "https://www.financequizzes.com/404-not-found",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
