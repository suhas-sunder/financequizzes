export type CategoryCard = {
  icon: string;
  t: string;
  d: string;
  href: string;
};

export type Question = {
  q: string;
  options: string[];
  correct: string;
};

export const recommendedNext: CategoryCard[] = [
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

export const allCategories: CategoryCard[] = [
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

// Pool: keep this around 20-25 so the page stays light and the quiz stays consistent.
export const questionBank: Question[] = [
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

export const FULL_QUIZ_COUNT = 12;
