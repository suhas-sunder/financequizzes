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
  const title = "Finance Quizzes | Test Your Finance and Investing Knowledge";
  const description =
    "Free finance quizzes to test your money knowledge. Take focused quizzes in personal finance, investing, and banking with quick scoring and no signup.";
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
        q: "What should I start with?",
        a: "Start with the General Finance Quiz, then take focused quizzes in Personal Finance or Investing.",
      },
      {
        q: "How long does a quiz take?",
        a: "Most quizzes are designed to be quick. You can usually finish a round in a few minutes.",
      },
    ],
  });
}

export default function Home({}: Route.ComponentProps) {
  const { faqs } = useLoaderData() as LoaderData;

  return (
    <main className="bg-white text-[#0B1B2B]">
      <HeroSection
        primaryCtaHref="/general-finance-quizzes"
        personalFinanceHref="/learn-personal-finance-quizzes"
        investingHref="/learn-investing-quizzes"
      />

      <PriorityPathsSection routes={priorityRoutes} />

      <ValuePropsSection
        generalHref="/general-finance-quizzes"
        allCategoriesAnchorHref="#all-categories"
      />

      <AllCategoriesSection routes={allCategoryRoutes} />

      <FaqSection faqs={faqs} />
    </main>
  );
}
