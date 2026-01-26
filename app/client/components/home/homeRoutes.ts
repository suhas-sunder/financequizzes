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
    icon: "💰",
    t: "Personal Finance Quiz (10 Questions)",
    d: "Budgeting, saving, debt, and credit basics.",
    href: "/personal-finance-quiz",
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
    icon: "🧠",
    t: "Financial Literacy Quiz",
    d: "A high-level literacy check across core topics.",
    href: "/financial-literacy-quiz",
  },
  {
    icon: "🧾",
    t: "Budgeting Quiz",
    d: "Budgeting awareness and terminology.",
    href: "/budgeting-quiz",
  },
  {
    icon: "🏦",
    t: "Saving Money Quiz",
    d: "Saving concepts and habits (conceptual, timeless).",
    href: "/saving-money-quiz",
  },
  {
    icon: "🧭",
    t: "Financial Planning Quiz",
    d: "Goals, time horizons, and tradeoffs.",
    href: "/financial-planning-quiz",
  },
  {
    icon: "🔰",
    t: "Investing Basics Quiz",
    d: "Beginner-friendly investing concepts in plain language.",
    href: "/investing-basics-quiz",
  },
  {
    icon: "🏛️",
    t: "Stock Market Basics Quiz",
    d: "Market structure and key terminology.",
    href: "/stock-market-basics-quiz",
  },
  {
    icon: "🕰️",
    t: "Retirement Basics Quiz",
    d: "High-level retirement concepts only.",
    href: "/retirement-basics-quiz",
  },
  {
    icon: "🏦",
    t: "Banking Quiz",
    d: "Checking vs savings, interest basics, and banking concepts.",
    href: "/banking-quiz",
  },
  {
    icon: "🏢",
    t: "Business Finance Quiz",
    d: "Revenue, profit, and cash flow concepts.",
    href: "/business-finance-quiz",
  },
];
