export interface CategoryRoute {
  icon: string;
  t: string;
  d: string;
  href: string;
}

export const priorityRoutes: CategoryRoute[] = [
  {
    icon: "🧠",
    t: "General Finance Quiz",
    d: "Quick challenge + full-quiz mode. Covers core money concepts.",
    href: "/general-finance-quizzes",
  },
  {
    icon: "💰",
    t: "Personal Finance Quiz",
    d: "Budgeting, saving, debt, and credit basics.",
    href: "/learn-personal-finance-quizzes",
  },
  {
    icon: "📈",
    t: "Investing Quiz",
    d: "Risk, diversification, markets, and long-term thinking.",
    href: "/learn-investing-quizzes",
  },
];

export const allCategoryRoutes: CategoryRoute[] = [
  ...priorityRoutes,
  {
    icon: "🏦",
    t: "Banking & Credit",
    d: "Accounts, loans, interest, and how banks work.",
    href: "/learn-banking-quizzes",
  },
  {
    icon: "📊",
    t: "Business Finance",
    d: "Revenue, profit, and cash flow fundamentals.",
    href: "/learn-business-quizzes",
  },
  {
    icon: "🌍",
    t: "Economics",
    d: "Inflation, markets, and macro basics.",
    href: "/learn-economics-quizzes",
  },
  {
    icon: "🛡️",
    t: "Insurance",
    d: "Premiums, deductibles, and how coverage works.",
    href: "/learn-insurance-quizzes",
  },
  {
    icon: "⏳",
    t: "Money History",
    d: "How money evolved over time.",
    href: "/learn-history-quizzes",
  },
];
