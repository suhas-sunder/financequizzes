import { json } from "@remix-run/node";
import type { Route } from "./+types/home";
import { useLoaderData } from "react-router";
import { useEffect, useMemo, useState } from "react";

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

const recommendedNext = [
  {
    icon: "💰",
    t: "Personal Finance Quizzes",
    d: "Budgeting, saving, debt, and credit basics.",
    href: "/learn-personal-finance-quizzes",
  },
  {
    icon: "📈",
    t: "Investing Quizzes",
    d: "Risk, diversification, markets, and long-term thinking.",
    href: "/learn-investing-quizzes",
  },
  {
    icon: "🏦",
    t: "Banking & Credit Quizzes",
    d: "Accounts, loans, interest, and how banks work.",
    href: "/learn-banking-quizzes",
  },
];

const allCategories = [
  ...recommendedNext,
  {
    icon: "📊",
    t: "Business Finance Quizzes",
    d: "Revenue, profit, and cash flow fundamentals.",
    href: "/learn-business-quizzes",
  },
  {
    icon: "🌍",
    t: "Economics Quizzes",
    d: "Inflation, markets, and macro basics.",
    href: "/learn-economics-quizzes",
  },
  {
    icon: "⏳",
    t: "Money History Quizzes",
    d: "How money evolved over time.",
    href: "/learn-history-quizzes",
  },
  {
    icon: "🛡️",
    t: "Insurance Quizzes",
    d: "Premiums, deductibles, risk pooling, and coverage basics.",
    href: "/learn-insurance-quizzes",
  },
];

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

type Question = {
  q: string;
  options: string[];
  correct: string;
};

// Pool: keep this around 20-25 so the page stays light and the quiz stays consistent.
const questionBank: Question[] = [
  {
    q: "What is the main purpose of a budget?",
    options: [
      "To predict the stock market",
      "To track and control spending",
      "To reduce taxes automatically",
      "To increase credit card limits",
    ],
    correct: "To track and control spending",
  },
  {
    q: "Which factor most influences a typical credit score?",
    options: [
      "Favorite bank",
      "Payment history",
      "Number of debit cards",
      "How often you check your score",
    ],
    correct: "Payment history",
  },
  {
    q: "APR most commonly stands for:",
    options: [
      "Annual Percentage Rate",
      "Average Price Return",
      "Adjusted Payment Ratio",
      "Annual Profit Report",
    ],
    correct: "Annual Percentage Rate",
  },
  {
    q: "What is compound interest?",
    options: [
      "Interest earned only on your original deposit",
      "Interest earned on principal and past interest",
      "A fee charged by banks",
      "A tax on investment gains",
    ],
    correct: "Interest earned on principal and past interest",
  },
  {
    q: "A diversified investment portfolio is designed to:",
    options: [
      "Reduce risk",
      "Guarantee profits",
      "Avoid taxes",
      "Eliminate market swings",
    ],
    correct: "Reduce risk",
  },
  {
    q: "Which is typically considered a fixed expense?",
    options: [
      "Groceries",
      "Gasoline",
      "Rent or mortgage payment",
      "Entertainment",
    ],
    correct: "Rent or mortgage payment",
  },
  {
    q: "What does it mean to live within your means?",
    options: [
      "Spending more than you earn",
      "Matching spending to income",
      "Never using credit cards",
      "Buying only discounted items",
    ],
    correct: "Matching spending to income",
  },
  {
    q: "Which option is usually the most liquid?",
    options: ["A house", "A savings account", "A 30-year bond", "A private business"],
    correct: "A savings account",
  },
  {
    q: "What is inflation?",
    options: [
      "A fall in prices across the economy",
      "A rise in general price levels over time",
      "A guaranteed raise in wages",
      "A decrease in money supply",
    ],
    correct: "A rise in general price levels over time",
  },
  {
    q: "In general, higher potential returns usually come with:",
    options: ["Lower risk", "Higher risk", "No risk", "No volatility"],
    correct: "Higher risk",
  },
  {
    q: "A stock is best described as:",
    options: [
      "A loan to a company",
      "Ownership in a company",
      "A guaranteed income stream",
      "A bank deposit",
    ],
    correct: "Ownership in a company",
  },
  {
    q: "A bond is best described as:",
    options: [
      "A loan made to a company or government",
      "Ownership in a company",
      "A type of checking account",
      "A measure of inflation",
    ],
    correct: "A loan made to a company or government",
  },
  {
    q: "What does ETF stand for?",
    options: [
      "Exchange-Traded Fund",
      "Equity Transfer Fee",
      "Estimated Trading Future",
      "Electronic Treasury Form",
    ],
    correct: "Exchange-Traded Fund",
  },
  {
    q: "What is an emergency fund for?",
    options: [
      "Optional luxury purchases",
      "Unexpected expenses",
      "Paying monthly subscriptions",
      "Predicting inflation",
    ],
    correct: "Unexpected expenses",
  },
  {
    q: "What is a credit report?",
    options: [
      "A record of your payment and borrowing history",
      "A list of your bank accounts",
      "A government tax filing",
      "A monthly budget template",
    ],
    correct: "A record of your payment and borrowing history",
  },
  {
    q: "Which account is typically used for day-to-day spending?",
    options: ["Checking account", "CD", "Brokerage account", "401(k)"],
    correct: "Checking account",
  },
  {
    q: "What is a dividend?",
    options: [
      "A payment to shareholders from company profits",
      "A bank fee",
      "A tax refund",
      "A loan interest rate",
    ],
    correct: "A payment to shareholders from company profits",
  },
  {
    q: "Which term describes the profit from selling an asset for more than you paid?",
    options: ["Capital gain", "Inflation", "Dividend", "Premium"],
    correct: "Capital gain",
  },
  {
    q: "What is diversification?",
    options: [
      "Putting all money into one investment",
      "Spreading investments across different assets",
      "Only investing in cash",
      "Avoiding any market exposure",
    ],
    correct: "Spreading investments across different assets",
  },
  {
    q: "A bull market is generally associated with:",
    options: ["Rising prices", "Falling prices", "Stable prices", "No trading"],
    correct: "Rising prices",
  },
  {
    q: "What does FDIC insurance protect?",
    options: [
      "Stock market investments",
      "Bank deposits up to legal limits",
      "Credit card rewards",
      "Crypto holdings",
    ],
    correct: "Bank deposits up to legal limits",
  },
  {
    q: "A deductible in insurance is:",
    options: [
      "The amount you pay out of pocket before coverage applies",
      "The monthly insurance bill",
      "A guaranteed payout",
      "A type of savings account",
    ],
    correct: "The amount you pay out of pocket before coverage applies",
  },
  {
    q: "What is opportunity cost?",
    options: [
      "The next best alternative you give up",
      "A fee charged by brokers",
      "The cost of inflation",
      "A type of tax credit",
    ],
    correct: "The next best alternative you give up",
  },
  {
    q: "Gross income vs net income: net income is:",
    options: [
      "Income before taxes",
      "Income after taxes and deductions",
      "Only investment income",
      "Only cash income",
    ],
    correct: "Income after taxes and deductions",
  },
  {
    q: "A 401(k) is best described as:",
    options: [
      "A retirement savings plan",
      "A type of credit card",
      "A high-interest loan",
      "A business tax ID",
    ],
    correct: "A retirement savings plan",
  },
];

export default function GeneralFinanceQuizzes({}: Route.ComponentProps) {
  const { faqs } = useLoaderData() as LoaderData;

  // Mode: quick = 3 questions; full = 12-15 questions pulled from the pool
  const [mode, setMode] = useState<"quick" | "full">("quick");

  const fullCount = 12;

  const targetCount = mode === "quick" ? 3 : fullCount;

  const [displayed, setDisplayed] = useState<Question[]>([]);

  useEffect(() => {
    const pick = [...questionBank].sort(() => 0.5 - Math.random()).slice(0, targetCount);
    setDisplayed(pick);
  }, [targetCount]);

  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [stats, setStats] = useState(() => ({
    answered: 0,
    correct: 0,
    streak: 0,
    bestStreak: 0,
  }));

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("generalFinanceQuizStats");
      if (saved) {
        try {
          setStats(JSON.parse(saved));
        } catch {
          console.warn("Failed to parse saved stats");
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("generalFinanceQuizStats", JSON.stringify(stats));
    }
  }, [stats]);

  const scoreSummary = useMemo(() => {
    const total = displayed.length;
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < total) return null;

    const correctCount = displayed.filter((q) => answers[q.q] === q.correct).length;
    const pct = total ? Math.round((correctCount / total) * 100) : 0;

    if (pct < 50) return { label: "You know the basics", pct };
    if (pct < 80) return { label: "Solid", pct };
    return { label: "Strong", pct };
  }, [answers, displayed]);

  const refreshQuiz = () => {
    const pick = [...questionBank].sort(() => 0.5 - Math.random()).slice(0, targetCount);
    setDisplayed(pick);
    setAnswers({});
  };

  const handleAnswer = (question: string, selected: string, correct: string) => {
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
      const correctCount = displayed.filter((q) => newAnswers[q.q] === q.correct).length;
      setStats((prev) => {
        const newStreak = correctCount === 3 ? prev.streak + 1 : 0;
        const best = Math.max(prev.bestStreak, newStreak);
        return { ...prev, streak: newStreak, bestStreak: best };
      });
    }
  };

  return (
    <main className="bg-white text-[#0B1B2B]">
      {/* HERO */}
      <section
        className="relative bg-[#F9FBFD] pt-8 pb-12 px-4 border-b border-slate-200"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #E5E9EE 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-4 inline-block rounded-full bg-teal-100 px-4 pt-1 pb-2 text-xs font-semibold text-teal-700">
            General Finance Quiz
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B2B] mb-4 tracking-tight">
            Test your <span className="text-teal-900">money knowledge</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-700 text-base sm:text-lg">
            A quick, no-signup self-assessment that covers budgeting, credit, interest, and investing basics.
            Start with a 3-question challenge or switch to full quiz mode.
          </p>

          {/* Mode toggles */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                setMode("quick");
                setAnswers({});
              }}
              className={`cursor-pointer rounded-xl px-5 py-2 font-semibold border transition ${
                mode === "quick"
                  ? "bg-teal-700 text-white border-teal-700"
                  : "bg-white text-teal-800 border-teal-200 hover:bg-teal-50"
              }`}
            >
              3-question challenge
            </button>
            <button
              onClick={() => {
                setMode("full");
                setAnswers({});
              }}
              className={`cursor-pointer rounded-xl px-5 py-2 font-semibold border transition ${
                mode === "full"
                  ? "bg-teal-700 text-white border-teal-700"
                  : "bg-white text-teal-800 border-teal-200 hover:bg-teal-50"
              }`}
            >
              Take the full quiz
            </button>
          </div>

          {/* Quiz Card */}
          <div className="mx-auto mt-10 w-full sm:w-[760px] text-left rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xl">
            {/* Stats */}
            <div className="flex flex-wrap justify-between items-center mb-6 gap-2">
              <div className="text-sm font-semibold text-slate-700">Answered: {stats.answered}</div>
              <div className="text-sm font-semibold text-slate-700">Correct: {stats.correct}</div>
              <div className="text-sm font-semibold text-slate-700">Streak: {stats.streak}</div>
              <div className="text-sm font-semibold text-slate-700">Best: {stats.bestStreak}</div>
            </div>

            {displayed.map((item, i) => {
              const chosen = answers[item.q];
              return (
                <div key={item.q} className="mb-8 last:mb-0">
                  <p className="text-xl font-bold text-[#0B1B2B] mb-4">
                    {i + 1}. {item.q}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {item.options.map((opt) => {
                      const isSelected = chosen === opt;
                      const isCorrect = item.correct === opt;

                      let bg = "bg-teal-50 border-teal-100 text-teal-800";
                      if (chosen) {
                        if (isSelected && isCorrect) bg = "bg-green-100 border-green-400 text-green-900";
                        else if (isSelected && !isCorrect) bg = "bg-red-100 border-red-400 text-red-900";
                        else if (isCorrect) bg = "bg-green-50 border-green-200 text-green-800";
                        else bg = "bg-slate-50 border-slate-200 text-slate-500";
                      }

                      return (
                        <li
                          key={opt}
                          onClick={() => handleAnswer(item.q, opt, item.correct)}
                          className={`cursor-pointer rounded-xl font-semibold px-5 py-4 text-base border ${bg} hover:bg-teal-100 hover:border-teal-400 hover:shadow-sm transition active:scale-[0.98]`}
                        >
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            {scoreSummary ? (
              <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-600">Score</p>
                    <p className="text-2xl font-extrabold text-[#0B1B2B]">
                      {scoreSummary.pct}% <span className="text-teal-800">{scoreSummary.label}</span>
                    </p>
                  </div>
                  <button
                    onClick={refreshQuiz}
                    className="cursor-pointer rounded-xl bg-teal-700 px-6 py-2 text-white font-semibold text-base hover:bg-teal-800 transition"
                  >
                    Try another set
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-10 text-center">
                <button
                  onClick={refreshQuiz}
                  className="cursor-pointer rounded-xl bg-teal-700 px-6 py-2 text-white font-semibold text-lg hover:bg-teal-800 transition"
                >
                  New questions
                </button>
              </div>
            )}

            <p className="mt-6 text-xs text-slate-500 text-center">
              Educational self-assessment only. Not financial, investment, or tax advice.
            </p>
          </div>

          {/* Next steps */}
          <div className="mx-auto max-w-6xl mt-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B2B] mb-4">
              Want a focused quiz next?
            </h2>
            <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
              These are the highest-intent quiz tracks on the site and the best place to continue.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {recommendedNext.map((c) => (
                <a
                  key={c.t}
                  href={c.href}
                  className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{c.icon}</span>
                    <h3 className="text-lg font-semibold text-[#0B1B2B] group-hover:text-teal-700 transition-colors">
                      {c.t}
                    </h3>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed flex-1">{c.d}</p>
                  <div className="text-teal-700 mt-4 text-sm font-semibold group-hover:underline">Explore →</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Browse all categories */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-b border-slate-200 text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-[#0B1B2B]">Browse all quiz categories</h2>
        <p className="max-w-2xl mx-auto mb-8 text-slate-700 text-base sm:text-lg">
          If you are exploring, start with the focused tracks above. If you want everything, it is all here.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {allCategories.map((c) => (
            <a
              key={c.t}
              href={c.href}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{c.icon}</span>
                <h3 className="text-lg font-semibold text-[#0B1B2B] group-hover:text-teal-700 transition-colors">
                  {c.t}
                </h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed flex-1">{c.d}</p>
              <div className="text-teal-700 mt-4 text-sm font-semibold group-hover:underline">Open →</div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-extrabold text-[#0B1B2B] mb-4 text-center">FAQ</h2>
        <p className="text-slate-700 text-center max-w-2xl mx-auto mb-10">
          Quick answers about this general finance quiz.
        </p>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-200">
          {faqs.map((f, i) => (
            <div key={i} className="p-6">
              <p className="font-semibold text-lg text-[#0B1B2B] mb-2">{f.q}</p>
              <p className="text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
