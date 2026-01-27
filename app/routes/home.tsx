import { json } from "@remix-run/node";
import type { Route } from "./+types/home";

import { HeroSection } from "../client/components/home/HeroSection";
import { PriorityPathsSection } from "../client/components/home/PriorityPathsSection";
import { ValuePropsSection } from "../client/components/home/ValuePropsSection";
import { QuizGuideSection } from "../client/components/home/QuizGuideSection";
import { AllCategoriesSection } from "../client/components/home/AllCategoriesSection";
import { FaqSection } from "../client/components/home/FaqSection";
import { JsonLd } from "../client/components/home/JsonLd";

import {
  allCategoryRoutes,
  priorityRoutes,
} from "../client/components/home/homeRoutes";
import {
  buildCanonicalUrl,
  getPreferredSiteUrl,
} from "../client/components/home/seo.server";
import { useLoaderData } from "react-router";

interface LoaderData {
  faqs: { q: string; a: string }[];
  seo: {
    canonicalUrl: string;
    siteUrl: string;
  };
}

export function meta({
  data,
}: Route.MetaArgs & { data?: LoaderData | undefined }) {
  const title = "Finance Quizzes | 10‑Question Challenges + 3‑Question Streaks";
  const description =
    "Free finance quizzes to test your money knowledge. Take 10‑question challenge quizzes or play quick 3‑question streaks in personal finance and investing. No signup.";

  const canonicalUrl =
    data?.seo?.canonicalUrl ?? "https://www.financequizzes.com/";
  const siteUrl = data?.seo?.siteUrl ?? "https://www.financequizzes.com";

  return [
    { title },
    { name: "description", content: description },

    { tagName: "link", rel: "canonical", href: canonicalUrl },

    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },

    { name: "robots", content: "index,follow" },
    { name: "theme-color", content: "#0B1B2B" },

    // Helpful hint for crawlers and link preview tools
    { name: "application-name", content: "FinanceQuizzes" },
    { name: "generator", content: "Remix" },

    // Defensive: declare base for absolute URL generation by some parsers
    { tagName: "meta", name: "og:site_name", content: "FinanceQuizzes" },
    { tagName: "meta", name: "twitter:domain", content: new URL(siteUrl).host },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  const siteUrl = getPreferredSiteUrl(request);
  const canonicalUrl = buildCanonicalUrl(request, siteUrl);

  return json<LoaderData>({
    faqs: [
      {
        q: "Are the quizzes free?",
        a: "Yes. All quizzes are free and you can play as many times as you want.",
      },
      {
        q: "Do I need an account?",
        a: "No. There is no signup. Some stats may be saved locally in your browser.",
      },
      {
        q: "Is this financial advice?",
        a: "No. This site is educational only and does not provide financial, tax, or investment advice.",
      },
      {
        q: "What is the difference between streaks and challenge quizzes?",
        a: "Streak quizzes are 3 quick questions. Challenge quizzes are 10 questions and give a score summary at the end.",
      },
      {
        q: "How long does a quiz take?",
        a: "Most quizzes are short. A streak takes under a minute, and a 10‑question challenge usually takes a few minutes.",
      },
    ],
    seo: { canonicalUrl, siteUrl },
  });
}

export default function Home({}: Route.ComponentProps) {
  const { faqs, seo } = useLoaderData<LoaderData>();

  const origin = seo.siteUrl.replace(/\/+$/, "");
  const pageUrl = seo.canonicalUrl;

  const orgId = `${origin}/#organization`;
  const websiteId = `${origin}/#website`;
  const webpageId = `${origin}/#webpage`;
  const appId = `${origin}/#app`;

  return (
    <main className="bg-white text-[#0B1B2B]">
      <HeroSection
        financeChallengeHref="/finance-quiz"
        personalFinanceChallengeHref="/personal-finance-quiz"
        investingChallengeHref="/investing-quiz"
        financeStreakHref="/general-finance-quizzes"
        personalFinanceStreakHref="/learn-personal-finance-quizzes"
        investingStreakHref="/learn-investing-quizzes"
      />

      <PriorityPathsSection routes={priorityRoutes} />

      <ValuePropsSection
        financeChallengeHref="/finance-quiz"
        allCategoriesAnchorHref="#all-categories"
      />

      <QuizGuideSection />

      <AllCategoriesSection routes={allCategoryRoutes} />

      <FaqSection faqs={faqs} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": orgId,
              name: "FinanceQuizzes",
              url: origin,
            },
            {
              "@type": "WebSite",
              "@id": websiteId,
              url: origin,
              name: "FinanceQuizzes",
              publisher: { "@id": orgId },
            },
            {
              "@type": "WebPage",
              "@id": webpageId,
              url: pageUrl,
              name: "Finance & Investing Quizzes",
              isPartOf: { "@id": websiteId },
              about: { "@id": appId },
            },
            {
              "@type": "SoftwareApplication",
              "@id": appId,
              name: "FinanceQuizzes",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              url: origin,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              publisher: { "@id": orgId },
            },
            ...(faqs?.length
              ? [
                  {
                    "@type": "FAQPage",
                    "@id": `${origin}/#faq`,
                    isPartOf: { "@id": webpageId },
                    mainEntity: faqs.slice(0, 5).map((f) => ({
                      "@type": "Question",
                      name: f.q,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: f.a,
                      },
                    })),
                  },
                ]
              : []),
          ],
        }}
      />
    </main>
  );
}
