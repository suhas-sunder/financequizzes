import { json } from "@remix-run/node";
import type { Route } from "./+types/home";
import { useLoaderData } from "react-router";

import { HeroSection } from "../client/components/home/HeroSection";
import { PriorityPathsSection } from "../client/components/home/PriorityPathsSection";
import { ValuePropsSection } from "../client/components/home/ValuePropsSection";
import { AllCategoriesSection } from "../client/components/home/AllCategoriesSection";
import { FaqSection } from "../client/components/home/FaqSection";

import {
  allCategoryRoutes,
  priorityRoutes,
} from "../client/components/home/homeRoutes";

interface LoaderData {
  nowISO: string;
  faqs: { q: string; a: string }[];
}

export function meta({}: Route.MetaArgs) {
  const title = "Finance Quizzes | 10‑Question Challenges + 3‑Question Streaks";
  const description =
    "Free finance quizzes to test your money knowledge. Take 10‑question challenge quizzes or play quick 3‑question streaks in personal finance and investing. No signup.";
  const url = "https://www.financequizzes.com/";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "theme-color", content: "#0B1B2B" },
    { name: "robots", content: "index,follow" },
  ];
}

export function loader() {
  return json<LoaderData>({
    nowISO: new Date().toISOString(),
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
  });
}

export default function Home({}: Route.ComponentProps) {
  const { faqs } = useLoaderData() as LoaderData;

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

      <AllCategoriesSection routes={allCategoryRoutes} />

      <FaqSection faqs={faqs} />
    </main>
  );
}
