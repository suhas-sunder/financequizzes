import { json } from "@remix-run/node";
import {
  buildCanonicalUrl,
  getSiteUrlFromEnv,
} from "../client/components/financial-planning-quiz/seoCanonical.server";
import type { Route } from "./+types/financial-planning-quiz";
import { useLoaderData } from "react-router";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  FINANCIAL_PLANNING_QUIZ_QUESTION_BANK,
  FINANCIAL_PLANNING_FAQS,
  type QuizQuestion,
} from "../client/components/financial-planning-quiz/financialPlanningQuizData";

import { Breadcrumbs } from "../client/components/financial-planning-quiz/Breadcrumbs";
import { QuizQuestions } from "../client/components/financial-planning-quiz/QuizQuestions";
import { FinancialPlanningArticle } from "../client/components/financial-planning-quiz/FinancialPlanningArticle";
import { FAQSection } from "../client/components/financial-planning-quiz/FAQSection";
import { FinancialPlanningQuizJsonLd } from "../client/components/financial-planning-quiz/FinancialPlanningQuizJsonLd";

interface LoaderData {
  faqs: { q: string; a: string }[];
  canonicalUrl: string;
}

export function meta({ data }: Route.MetaArgs) {
  const title = "Financial Planning Quiz | FinanceQuizzes.com";
  const description =
    "A fast 10-question financial planning quiz focused on goals, prioritization, time horizons, and high-level tradeoffs. Conceptual only, no calculations.";
  const url =
    data?.canonicalUrl ??
    "https://www.financequizzes.com/financial-planning-quiz";

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
    faqs: FINANCIAL_PLANNING_FAQS,
    canonicalUrl,
  });
}

type StatsState = {
  answered: number;
  correct: number;
  perfectCount: number;
  bestTimeMs: number | null;
};

type AnswerResult = "correct" | "incorrect";

const QUIZ_QUESTION_COUNT = 10;
const PERFECT_COUNT_STORAGE_KEY =
  "financequizzes:perfectCount:/financial-planning-quiz";
const BEST_TIME_STORAGE_KEY =
  "financequizzes:bestTimeMs:/financial-planning-quiz";

function safeGetLocalStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetLocalStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore storage failures
  }
}

function shuffle<T>(input: T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildQuestionPool(bank: QuizQuestion[]): QuizQuestion[] {
  const seen = new Set<string>();
  const unique: QuizQuestion[] = [];
  for (const q of bank) {
    if (!q?.q || !Array.isArray(q.options) || typeof q.correct !== "string")
      continue;
    const key = String(q.q).trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    unique.push(q);
  }
  return unique;
}

function buildRunQuestions(
  bank: QuizQuestion[],
  count: number,
): QuizQuestion[] {
  const pool = buildQuestionPool(bank);
  const picked = shuffle(pool).slice(0, count);

  return picked.map((q) => {
    const options = Array.isArray(q.options) ? q.options.filter(Boolean) : [];
    const correct = q.correct;
    const uniqueOptions = Array.from(new Set(options.map(String)));

    // If malformed, preserve as-is and let UI block before starting.
    if (uniqueOptions.length !== 4) return { ...q, options: uniqueOptions };
    if (!uniqueOptions.includes(correct))
      return { ...q, options: uniqueOptions };

    return {
      ...q,
      options: shuffle(uniqueOptions),
    };
  });
}

function scoreMessage(correctCount: number) {
  // 10 questions. Emojis only at 0% and 100%.
  if (correctCount <= 0) return "Better luck next time! 💀";
  if (correctCount >= 10) return "Perfect score. Very Impressive! 🎊";
  if (correctCount >= 8) return "Strong financial knowledge. Spectacular!";
  if (correctCount >= 6) return "Solid understanding overall. Good job!";
  if (correctCount === 5) return "Average knowledge.¯\\_(ツ)_/¯";
  if (correctCount >= 4) return "You know some of the basics.";
  return "You’re just getting started.";
}

function computeFinalScore(correctCount: number) {
  const pct = Math.round((correctCount / QUIZ_QUESTION_COUNT) * 100);
  return Number.isFinite(pct) ? pct : 0;
}

export default function FinanceQuiz({}: Route.ComponentProps) {
  const { faqs, canonicalUrl } = useLoaderData() as LoaderData;

  const questionBank = FINANCIAL_PLANNING_QUIZ_QUESTION_BANK;

  const buildNewRun = useMemo(() => {
    return () => buildRunQuestions(questionBank, QUIZ_QUESTION_COUNT);
  }, [questionBank]);

  const [runQuestions, setRunQuestions] = useState<QuizQuestion[]>(() =>
    buildNewRun(),
  );

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, AnswerResult>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const [stats, setStats] = useState<StatsState>(() => ({
    answered: 0,
    correct: 0,
    perfectCount: 0,
    bestTimeMs: null,
  }));

  const [isComplete, setIsComplete] = useState(false);
  const [finalScorePercent, setFinalScorePercent] = useState<number | null>(
    null,
  );
  const [completionMs, setCompletionMs] = useState<number | null>(null);

  const hasCountedPerfectRef = useRef(false);

  // Wall-clock timing for a single run.
  // Start timing on the first answer (not on page load) to avoid inflated times.
  const runStartMsRef = useRef<number | null>(null);

  const timersRef = useRef<Record<string, number>>({});
  const quizCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = safeGetLocalStorage(PERFECT_COUNT_STORAGE_KEY);
    const perfectCount = saved ? Number(saved) : 0;
    const savedBestTime = safeGetLocalStorage(BEST_TIME_STORAGE_KEY);
    const bestTimeMs = savedBestTime ? Number(savedBestTime) : null;
    setStats((prev) => ({
      ...prev,
      perfectCount: Number.isFinite(perfectCount) ? perfectCount : 0,
      bestTimeMs:
        bestTimeMs !== null && Number.isFinite(bestTimeMs) && bestTimeMs > 0
          ? bestTimeMs
          : null,
    }));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    safeSetLocalStorage(PERFECT_COUNT_STORAGE_KEY, String(stats.perfectCount));
  }, [stats.perfectCount]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Do not overwrite an existing best time with an empty value.
    // Only persist when we have a real best time.
    if (stats.bestTimeMs === null) return;
    safeSetLocalStorage(BEST_TIME_STORAGE_KEY, String(stats.bestTimeMs));
  }, [stats.bestTimeMs]);

  useEffect(() => {
    // Compute score once at completion.
    if (!isComplete && stats.answered === QUIZ_QUESTION_COUNT) {
      setIsComplete(true);
      setFinalScorePercent(computeFinalScore(stats.correct));
      const startMs = runStartMsRef.current;
      const ms = startMs ? Math.max(0, Date.now() - startMs) : 0;
      setCompletionMs(ms);

      // Track best completion time for finished runs.
      // Lower is better. Persist device-local only.
      if (Number.isFinite(ms) && ms > 0) {
        setStats((prev) => {
          const nextBest =
            prev.bestTimeMs === null || ms < prev.bestTimeMs
              ? ms
              : prev.bestTimeMs;
          return nextBest === prev.bestTimeMs
            ? prev
            : { ...prev, bestTimeMs: nextBest };
        });
      }

      // Track "perfect score" completions deterministically.
      // Count at most once per run.
      if (
        !hasCountedPerfectRef.current &&
        stats.correct === QUIZ_QUESTION_COUNT
      ) {
        hasCountedPerfectRef.current = true;
        setStats((prev) => ({
          ...prev,
          perfectCount: prev.perfectCount + 1,
        }));
      }
    }
  }, [isComplete, stats.answered, stats.correct]);

  useEffect(() => {
    return () => {
      // Cleanup pending timers
      for (const id of Object.values(timersRef.current)) {
        window.clearTimeout(id);
      }
      timersRef.current = {};
    };
  }, []);

  const poolTooSmall = useMemo(() => {
    const uniquePool = buildQuestionPool(questionBank);
    return uniquePool.length < QUIZ_QUESTION_COUNT;
  }, [questionBank]);

  const runHasMalformedQuestions = useMemo(() => {
    if (runQuestions.length !== QUIZ_QUESTION_COUNT) return true;
    for (const q of runQuestions) {
      if (!q?.q || !Array.isArray(q.options) || q.options.length !== 4)
        return true;
      if (!q.options.includes(q.correct)) return true;
      if (new Set(q.options).size !== 4) return true;
    }
    return false;
  }, [runQuestions]);

  const handleAnswer = (
    question: string,
    selected: string,
    correct: string,
  ) => {
    if (answers[question]) return;

    // Start timing on first answer.
    if (runStartMsRef.current === null) {
      runStartMsRef.current = Date.now();
    }

    setAnswers((prev) => ({ ...prev, [question]: selected }));

    const isCorrect = selected === correct;
    setResults((prev) => ({
      ...prev,
      [question]: isCorrect ? "correct" : "incorrect",
    }));
    setRevealed((prev) => ({ ...prev, [question]: false }));

    setStats((prev) => {
      const answered = prev.answered + 1;
      const correctCount = prev.correct + (isCorrect ? 1 : 0);
      return { ...prev, answered, correct: correctCount };
    });

    // Micro-delay for "weight" without feeling blocking.
    // Correct answers reveal slightly faster than incorrect.
    const delayMs = isCorrect ? 160 : 280;
    const existing = timersRef.current[question];
    if (existing) window.clearTimeout(existing);

    timersRef.current[question] = window.setTimeout(() => {
      setRevealed((prev) => ({ ...prev, [question]: true }));
      delete timersRef.current[question];
    }, delayMs);
  };

  const resetRun = () => {
    // Ensure the user lands back at the start of the quiz when starting a new set.
    if (typeof window !== "undefined") {
      try {
        quizCardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } catch {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    for (const id of Object.values(timersRef.current)) {
      window.clearTimeout(id);
    }
    timersRef.current = {};

    const nextRun = buildNewRun();
    setRunQuestions(nextRun);
    setAnswers({});
    setResults({});
    setRevealed({});
    setIsComplete(false);
    setFinalScorePercent(null);
    setCompletionMs(null);
    runStartMsRef.current = null;
    hasCountedPerfectRef.current = false;
    setStats((prev) => ({
      answered: 0,
      correct: 0,
      perfectCount: prev.perfectCount,
      bestTimeMs: prev.bestTimeMs,
    }));
  };

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
        <Breadcrumbs currentLabel="Financial Planning Quiz" />

        <div className="mx-auto max-w-6xl text-center">
          <div
            ref={quizCardRef}
            className="mx-auto w-full sm:w-[720px] text-left rounded-3xl border border-slate-200 bg-white px-6 sm:px-10 pb-8 pt-5 shadow-xl"
          >
            <header className="mb-2">
              <h1 className=" text-center text-3xl sm:text-3xl font-extrabold tracking-tight text-slate-600">
                Financial Planning Quiz
              </h1>
              <p className="mt-2 text-center text-sm sm:text-base text-slate-600">
                A quick 10-question challenge focused on financial planning
                concepts like goals, priorities, time horizons, and tradeoffs.
              </p>
            </header>

            {poolTooSmall ? (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
                <p className="text-lg font-bold text-[#0B1B2B]">
                  This quiz is temporarily unavailable.
                </p>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  The question pool does not contain enough unique questions to
                  run a 10-question challenge.
                </p>
              </div>
            ) : runHasMalformedQuestions ? (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
                <p className="text-lg font-bold text-[#0B1B2B]">
                  This quiz is temporarily unavailable.
                </p>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  One or more questions are missing required answer choices.
                </p>
              </div>
            ) : (
              <QuizQuestions
                quizTitle="Finance Quiz"
                questions={runQuestions}
                answers={answers}
                results={results}
                revealed={revealed}
                onAnswer={handleAnswer}
                isComplete={isComplete}
                finalScorePercent={finalScorePercent}
                completionMs={completionMs}
                scoreMessage={scoreMessage}
                answeredCount={stats.answered}
                correctCount={stats.correct}
                perfectCount={stats.perfectCount}
                bestTimeMs={stats.bestTimeMs}
                onTryAnother={resetRun}
              />
            )}
          </div>
        </div>
      </section>

      <FinancialPlanningArticle />

      <FAQSection faqs={faqs} />

      <FinancialPlanningQuizJsonLd faqs={faqs} pageUrl={pageUrl} />
    </main>
  );
}
