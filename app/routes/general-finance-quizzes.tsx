import { json } from "@remix-run/node";
import type { Route } from "./+types/general-finance-quizzes";
import { useEffect, useMemo, useState } from "react";

import { Hero } from "../client/components/general-finance-quizzes/Hero";
import { QuizCard } from "../client/components/general-finance-quizzes/QuizCard";
import { CategoryGrid } from "../client/components/general-finance-quizzes/CategoryGrid";
import { BrowseAllCategories } from "../client/components/general-finance-quizzes/BrowseAllCategories";
import { FAQSection } from "../client/components/general-finance-quizzes/FAQSection";
import { FAQJsonLd } from "../client/components/general-finance-quizzes/FAQJsonLd";

import {
  FULL_QUIZ_COUNT,
  allCategories,
  questionBank,
  recommendedNext,
  type Question,
} from "../client/components/general-finance-quizzes/generalFinanceQuiz";
import { useLoaderData } from "react-router";

interface LoaderData {
  nowISO: string;
  faqs: { q: string; a: string }[];
}

export function meta({}: Route.MetaArgs) {
  const title =
    "General Finance Quiz | 3-Question Challenge + Full Quiz Mode | FinanceQuizzes.com";
  const description =
    "Take a general finance quiz that covers budgeting, credit, interest, investing basics, and everyday money concepts. Start with a quick 3-question challenge or switch to full quiz mode.";
  const url = "https://www.financequizzes.com/general-finance-quizzes";

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
        q: "Is this general finance quiz free?",
        a: "Yes. You can take the quiz as many times as you want without signing up.",
      },
      {
        q: "Is this quiz financial advice?",
        a: "No. This is an educational self-assessment, not financial, investment, or tax advice.",
      },
      {
        q: "How many questions are in the quiz?",
        a: "You can start with a quick 3-question challenge, or switch to full quiz mode for more questions.",
      },
      {
        q: "Do you store my results?",
        a: "Quiz stats are saved locally in your browser using localStorage. No account is required.",
      },
      {
        q: "What topics does the general finance quiz cover?",
        a: "Budgeting basics, saving, credit, interest, risk, diversification, and everyday money terms.",
      },
      {
        q: "Where should I go next?",
        a: "If you want a focused challenge, try Personal Finance, Investing, or Banking & Credit quizzes.",
      },
    ],
  });
}

type QuizStats = {
  answered: number;
  correct: number;
  streak: number;
  bestStreak: number;
};

function pickRandomQuestions(count: number): Question[] {
  return [...questionBank].sort(() => 0.5 - Math.random()).slice(0, count);
}

export default function GeneralFinanceQuizzes({}: Route.ComponentProps) {
  const { faqs } = useLoaderData<LoaderData>();

  const [mode, setMode] = useState<"quick" | "full">("quick");
  const targetCount = mode === "quick" ? 3 : FULL_QUIZ_COUNT;

  const [displayed, setDisplayed] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [stats, setStats] = useState<QuizStats>(() => ({
    answered: 0,
    correct: 0,
    streak: 0,
    bestStreak: 0,
  }));

  useEffect(() => {
    setDisplayed(pickRandomQuestions(targetCount));
  }, [targetCount]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("generalFinanceQuizStats");
    if (!saved) return;

    try {
      setStats(JSON.parse(saved));
    } catch {
      console.warn("Failed to parse saved stats");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("generalFinanceQuizStats", JSON.stringify(stats));
  }, [stats]);

  const scoreSummary = useMemo(() => {
    const total = displayed.length;
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < total) return null;

    const correctCount = displayed.filter(
      (q) => answers[q.q] === q.correct,
    ).length;
    const pct = total ? Math.round((correctCount / total) * 100) : 0;

    if (pct < 50) return { label: "You know the basics", pct };
    if (pct < 80) return { label: "Solid", pct };
    return { label: "Strong", pct };
  }, [answers, displayed]);

  const refreshQuiz = () => {
    setDisplayed(pickRandomQuestions(targetCount));
    setAnswers({});
  };

  const handleModeChange = (next: "quick" | "full") => {
    setMode(next);
    setAnswers({});
  };

  const handleAnswer = (
    question: string,
    selected: string,
    correct: string,
  ) => {
    if (answers[question]) return;

    const newAnswers = { ...answers, [question]: selected };
    setAnswers(newAnswers);

    const isCorrect = selected === correct;

    setStats((prev) => ({
      ...prev,
      answered: prev.answered + 1,
      correct: prev.correct + (isCorrect ? 1 : 0),
    }));

    const totalAnsweredThisRound = Object.keys(newAnswers).length;

    if (mode === "quick" && totalAnsweredThisRound === 3) {
      const correctCount = displayed.filter(
        (q) => newAnswers[q.q] === q.correct,
      ).length;
      setStats((prev) => {
        const newStreak = correctCount === 3 ? prev.streak + 1 : 0;
        const best = Math.max(prev.bestStreak, newStreak);
        return { ...prev, streak: newStreak, bestStreak: best };
      });
    }
  };

  return (
    <main className="bg-white text-[#0B1B2B]">
      <Hero mode={mode} onModeChange={handleModeChange} />

      <section className="px-4">
        <QuizCard
          displayed={displayed}
          answers={answers}
          stats={stats}
          scoreSummary={scoreSummary}
          onAnswer={handleAnswer}
          onRefresh={refreshQuiz}
        />

        <CategoryGrid
          title="Want a focused quiz next?"
          description="These are the highest-intent quiz tracks on the site and the best place to continue."
          cards={recommendedNext}
        />
      </section>

      <BrowseAllCategories allCategories={allCategories} />

      <FAQSection faqs={faqs} />

      <FAQJsonLd faqs={faqs} />
    </main>
  );
}
