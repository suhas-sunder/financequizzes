import { json } from "@remix-run/node";
import type { Route } from "./+types/contact";
import { NavLink } from "react-router";

export function meta() {
  const title = "Contact | FinanceQuizzes";
  const description =
    "Contact FinanceQuizzes for feedback, corrections, or general questions about our free finance and economics quizzes.";

  const canonicalUrl = "https://www.financequizzes.com/contact";

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: canonicalUrl },

    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl },

    { name: "robots", content: "index,follow" },
    { name: "theme-color", content: "#0B1B2B" },
  ];
}

export function loader() {
  return json({});
}

export default function Contact({}: Route.ComponentProps) {
  return (
    <main className="bg-white text-[#0B1B2B]">
      <section className="mx-auto max-w-[900px] px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Contact
          </h1>
          <p className="mt-2 text-slate-600">
            Get in touch with questions, feedback, or content corrections.
          </p>
        </header>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">
            Email
          </h2>

          <p className="mt-3 text-slate-700">
            For feedback, bug reports, or corrections to quiz questions, email us
            directly:
          </p>

          <div className="mt-5">
            <a
              href="mailto:support@financequizzes.com"
              className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-5 py-2.5 font-medium text-white cursor-pointer hover:bg-teal-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70 focus-visible:ring-offset-2"
            >
              support@financequizzes.com
            </a>
          </div>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-medium">
              To help us respond faster, please include:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>The page or quiz name</li>
              <li>What you expected to see</li>
              <li>What actually happened (if reporting an issue)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">
              Educational purpose
            </h2>
            <p className="mt-2 text-slate-700">
              FinanceQuizzes is an educational site. Content is for general
              knowledge only and does not constitute financial, tax, or
              investment advice.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">
              Response time
            </h2>
            <p className="mt-2 text-slate-700">
              We typically respond within 1–3 business days. Some messages may
              take longer during busy periods.
            </p>
          </div>
        </div>

        <footer className="mt-10 flex flex-wrap gap-3 text-sm text-slate-600">
          <span>Quick links:</span>
          <NavLink
            to="/"
            className="underline cursor-pointer hover:text-teal-600 transition-colors"
          >
            Home
          </NavLink>
          <span className="opacity-50">•</span>
          <NavLink
            to="/privacy"
            className="underline cursor-pointer hover:text-teal-600 transition-colors"
          >
            Privacy Policy
          </NavLink>
          <span className="opacity-50">•</span>
          <NavLink
            to="/terms"
            className="underline cursor-pointer hover:text-teal-600 transition-colors"
          >
            Terms
          </NavLink>
        </footer>
      </section>
    </main>
  );
}
