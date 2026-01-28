import { json } from "@remix-run/node";
import type { Route } from "./+types/finance-quiz-questions";
import { useLoaderData } from "react-router";

import {
  FINANCE_QUIZ_QUESTIONS_FAQS,
  FINANCE_QUIZ_QUESTIONS_INTENT,
} from "../client/components/finance-quiz-questions/financeQuizQuestionsData";
import { Breadcrumbs } from "../client/components/finance-quiz-questions/Breadcrumbs";
import { FinanceQuizQuestionsList } from "../client/components/finance-quiz-questions/FinanceQuizQuestionsList";
import { FinanceQuizQuestionsArticle } from "../client/components/finance-quiz-questions/FinanceQuizQuestionsArticle";
import { FAQSection } from "../client/components/finance-quiz-questions/FAQSection";
import { FinanceQuizQuestionsJsonLd } from "../client/components/finance-quiz-questions/FinanceQuizQuestionsJsonLd";
import {
  buildCanonicalUrl,
  getSiteUrlFromEnv,
} from "../client/components/finance-quiz-questions/seoCanonical.server";

interface LoaderData {
  faqs: { q: string; a: string }[];
  canonicalUrl: string;
}

export function meta({ data }: Route.MetaArgs) {
  const title = "Finance Quiz Questions (with Answers) | FinanceQuizzes.com";
  const description =
    "A broad, mixed set of finance quiz questions and answers across budgeting, banking, credit, investing, and basic economics. Filter, search, copy, or print.";
  const url =
    data?.canonicalUrl ?? "https://www.financequizzes.com/finance-quiz-questions";

  return [
    { title },
    { name: "description", content: description },

    // Indexing discipline
    { name: "robots", content: "index,follow" },

    // Canonical discipline
    { rel: "canonical", href: url },

    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },

    // Theme
    { name: "theme-color", content: "#0B1B2B" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  const siteUrl = getSiteUrlFromEnv(process.env);
  const canonicalUrl = buildCanonicalUrl(request.url, siteUrl);

  return json<LoaderData>({
    faqs: FINANCE_QUIZ_QUESTIONS_FAQS,
    canonicalUrl,
  });
}

export default function FinanceQuizQuestions({}: Route.ComponentProps) {
  const { faqs, canonicalUrl } = useLoaderData() as LoaderData;
  const pageUrl = canonicalUrl;

  return (
    <main className="bg-white text-[#0B1B2B]">
      <section
        className="relative bg-[#F9FBFD] pb-10 px-4 border-b border-slate-200"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #E5E9EE 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <Breadcrumbs currentLabel="Finance Quiz Questions" />

        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto w-full sm:w-[720px] text-left rounded-3xl border border-slate-200 bg-white px-6 sm:px-10 pb-8 pt-5 shadow-xl">
            <header className="mb-2">
              <h1 className="text-center text-3xl sm:text-3xl font-extrabold tracking-tight text-slate-600">
                Finance Quiz Questions
              </h1>
              <p className="mt-2 text-center text-sm sm:text-base text-slate-600">
                Mixed {FINANCE_QUIZ_QUESTIONS_INTENT.topicLabel.toLowerCase()} questions with short answers. Use it as a study list, not a themed quiz.
              </p>
              <div className="mt-4 flex justify-center">
                <a
                  href="#questions"
                  className="rounded-xl bg-[#0B1B2B] px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  Jump to questions
                </a>
              </div>
            </header>
          </div>
        </div>
      </section>

      <FinanceQuizQuestionsList />

      <FinanceQuizQuestionsArticle />

      <FAQSection faqs={faqs} />

      <FinanceQuizQuestionsJsonLd faqs={faqs} pageUrl={pageUrl} />
    </main>
  );
}
