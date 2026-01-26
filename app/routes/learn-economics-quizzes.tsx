import { json } from "@remix-run/node";
import type { Route } from "./+types/learn-economics-quizzes";
import { useLoaderData } from "react-router";
import { useEffect, useMemo, useState } from "react";

import {
  ECON_QUIZ_QUESTION_BANK,
  DEFAULT_FAQS,
  type QuizQuestion,
} from "../client/components/learn-economics-quizzes/learnEconomicsQuizData";

import { Breadcrumbs } from "../client/components/learn-economics-quizzes/Breadcrumbs";
import { DailyStats } from "../client/components/learn-economics-quizzes/DailyStats";
import { QuizQuestions } from "../client/components/learn-economics-quizzes/QuizQuestions";
import { EconomicsArticle } from "../client/components/learn-economics-quizzes/EconomicsArticle";
import { FaqAndQuizAnswers } from "../client/components/learn-economics-quizzes/FaqAndQuizAnswers";
import { LearnEconomicsJsonLd } from "../client/components/learn-economics-quizzes/LearnEconomicsJsonLd";

interface LoaderData {
  nowISO: string;
  faqs: { q: string; a: string }[];
}

export function meta({}: Route.MetaArgs) {
  const title =
    "Economics Quiz | Learn How Markets and Inflation Work | FinanceQuizzes.com";
  const description =
    "Challenge your understanding of markets, supply and demand, and inflation with this interactive Economics quiz. Build a stronger grasp of how the global economy functions.";
  const url = "https://www.financequizzes.com/learn-economics-quizzes";
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "theme-color", content: "#0B1B2B" },
  ];
}

export function loader() {
  return json<LoaderData>({
    nowISO: new Date().toISOString(),
    faqs: DEFAULT_FAQS,
  });
}

type DailyStatsState = {
  todayAnswered: number;
  todayCorrect: number;
  todayStreak: number;
  todayBest: number;
  lastDate: string;
};

const STORAGE_KEY = "economicsQuizStats";

function todayISODate() {
  return new Date().toISOString().slice(0, 10);
}

function pickRandomQuestions(bank: QuizQuestion[], count: number) {
  return [...bank].sort(() => 0.5 - Math.random()).slice(0, count);
}

export default function EconomicsQuiz({}: Route.ComponentProps) {
  const { faqs } = useLoaderData() as LoaderData;

  const questionBank = ECON_QUIZ_QUESTION_BANK;

  const pickRandom = useMemo(() => {
    return () => pickRandomQuestions(questionBank, 3);
  }, [questionBank]);

  const [displayed, setDisplayed] = useState<QuizQuestion[]>(() =>
    pickRandom(),
  );
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [stats, setStats] = useState<DailyStatsState>(() => ({
    todayAnswered: 0,
    todayCorrect: 0,
    todayStreak: 0,
    todayBest: 0,
    lastDate: todayISODate(),
  }));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      const today = todayISODate();

      if (parsed.lastDate !== today) {
        setStats({
          todayAnswered: 0,
          todayCorrect: 0,
          todayStreak: 0,
          todayBest: Number(parsed.todayBest) || 0,
          lastDate: today,
        });
        return;
      }

      setStats({
        todayAnswered: Number(parsed.todayAnswered) || 0,
        todayCorrect: Number(parsed.todayCorrect) || 0,
        todayStreak: Number(parsed.todayStreak) || 0,
        todayBest: Number(parsed.todayBest) || 0,
        lastDate: today,
      });
    } catch {
      // ignore parse issues
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  }, [stats]);

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
      todayAnswered: prev.todayAnswered + 1,
      todayCorrect: prev.todayCorrect + (isCorrect ? 1 : 0),
      lastDate: todayISODate(),
    }));

    const totalAnsweredThisRound = Object.keys(newAnswers).length;

    if (totalAnsweredThisRound === 3) {
      const correctCount = displayed.filter(
        (q) => newAnswers[q.q] === q.correct,
      ).length;

      setStats((prev) => {
        const newStreak = correctCount === 3 ? prev.todayStreak + 1 : 0;
        const best = Math.max(prev.todayBest, newStreak);
        return { ...prev, todayStreak: newStreak, todayBest: best };
      });
    }
  };

  const refreshQuiz = () => {
    setDisplayed(pickRandom());
    setAnswers({});
  };

  const pageUrl = "https://www.financequizzes.com/learn-economics-quizzes";

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
        <Breadcrumbs currentLabel="Learn Economics Quizzes" />

        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto w-full min-h-[53vh] sm:w-[720px] text-left rounded-3xl border border-slate-200 bg-white px-10 py-8 shadow-xl">
            <DailyStats stats={stats} />

            <QuizQuestions
              displayed={displayed}
              answers={answers}
              onAnswer={handleAnswer}
            />

            <div className="mb-3 text-center">
              <button
                onClick={refreshQuiz}
                className="cursor-pointer rounded-xl bg-teal-700 px-6 py-2 text-white font-semibold text-lg hover:bg-teal-800 transition"
              >
                NEXT 3 QUESTIONS
              </button>
            </div>
          </div>
        </div>
      </section>

      <EconomicsArticle />

      <FaqAndQuizAnswers faqs={faqs} questionBank={questionBank} />

      <LearnEconomicsJsonLd
        faqs={faqs}
        questionBank={questionBank}
        pageUrl={pageUrl}
      />
    </main>
  );
}
