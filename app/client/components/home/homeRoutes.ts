export interface CategoryRoute {
  icon: string;
  t: string;
  d: string;
  href: string;
}

export const priorityRoutes: CategoryRoute[] = [
  {
    icon: "🏁",
    t: "Finance Quiz (10 Questions)",
    d: "Core money concepts. Score summary at the end.",
    href: "/finance-quiz",
  },
  {
    icon: "🧾",
    t: "Budgeting Quiz (10 Questions)",
    d: "Spending plans, categories, and budgeting terminology.",
    href: "/budgeting-quiz",
  },
  {
    icon: "📈",
    t: "Investing Quiz (10 Questions)",
    d: "Risk, diversification, markets, and time horizon concepts.",
    href: "/investing-quiz",
  },
];

export const allCategoryRoutes: CategoryRoute[] = [
  ...priorityRoutes,
  {
    icon: "🏦",
    t: "Saving Money Quiz",
    d: "Savings habits, emergency funds, and interest basics.",
    href: "/saving-money-quiz",
  },
  {
    icon: "🧭",
    t: "Financial Planning Quiz",
    d: "Goals, priorities, and tradeoffs over time.",
    href: "/financial-planning-quiz",
  },
  {
    icon: "🏛️",
    t: "Stock Market Basics Quiz",
    d: "Market structure, orders, and key terminology.",
    href: "/stock-market-basics-quiz",
  },
  {
    icon: "🕰️",
    t: "Retirement Basics Quiz",
    d: "Time horizon, contribution basics, and planning concepts.",
    href: "/retirement-basics-quiz",
  },
  {
    icon: "🏦",
    t: "Banking and Credit Quiz",
    d: "Bank accounts, borrowing, and credit fundamentals.",
    href: "/banking-and-credit-quiz",
  },
  {
    icon: "🛡️",
    t: "Insurance Basics Quiz",
    d: "Deductibles, premiums, risk pooling, and common policy terms.",
    href: "/insurance-basics-quiz",
  },
  {
    icon: "📊",
    t: "Economics Quiz",
    d: "Supply and demand, incentives, and market basics.",
    href: "/economics-quiz",
  },
  {
    icon: "🏢",
    t: "Business Finance Quiz",
    d: "Revenue, profit, cash flow, and simple statements.",
    href: "/business-finance-quiz",
  },
  {
    icon: "📚",
    t: "Finance Quiz Questions (Q&A List)",
    d: "A mixed question set with answers for study and practice.",
    href: "/finance-quiz-questions",
  },
];
