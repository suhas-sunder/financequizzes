export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const FINANCE_QUIZ_INTENT = {
  topicLabel: "Finance",
  roundSize: 10,
  formatLabel: "10-question challenge",
  focus:
    "Broad financial language across everyday money decisions, banking, credit, saving, investing, and planning.",
} as const;

export const FINANCE_QUIZ_CATEGORIES = [
  {
    key: "everyday",
    label: "Everyday money language",
    whatItCovers:
      "Budgeting terms, cash flow vocabulary, and common account-level concepts.",
  },
  {
    key: "credit_borrowing",
    label: "Credit and borrowing concepts",
    whatItCovers:
      "Basic credit vocabulary, loan language, and how borrowing costs are described.",
  },
  {
    key: "saving_investing",
    label: "Saving and investing basics",
    whatItCovers:
      "Risk vs return language, diversification, and common investing account terms.",
  },
  {
    key: "planning_protection",
    label: "Planning and financial protection",
    whatItCovers:
      "Insurance terminology, retirement account language, and long-horizon planning terms.",
  },
  {
    key: "taxes_fees",
    label: "Taxes, fees, and transaction details",
    whatItCovers:
      "Withholding and tax terms, fees, and words that change total costs or proceeds.",
  },
] as const;

export const FINANCE_QUIZ_SCORE_BANDS = [
  {
    key: "0",
    label: "0 out of 10",
    meaning: "A full reset run.",
  },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Early recognition, with gaps across the wider vocabulary.",
  },
  {
    key: "4-5",
    label: "4–5 out of 10",
    meaning: "Some baseline familiarity, with mixed consistency across domains.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid breadth across common terms and scenarios.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning: "Strong general finance language recognition.",
  },
  {
    key: "10",
    label: "10 out of 10",
    meaning: "Perfect run.",
  },
] as const;

export const FINANCE_FAQS: FAQItem[] = [
  {
    q: 'How is the quiz scored?',
    a: 'Each set is 10 questions. Your score is the number you answer correctly out of 10.',
  },
  {
    q: 'What do “Perfect scores” and “Best time” track?',
    a: 'Perfect scores counts how many times you finish a 10-question set with a 10/10 on this device. Best time is the fastest completion time for a finished set on this device.',
  },
  {
    q: 'What kind of questions are included?',
    a: 'The pool focuses on broad finance vocabulary and common concepts across everyday money, banking, credit, saving, investing, and planning.',
  },
  {
    q: 'Does a new set repeat questions?',
    a: 'Each set is randomized from the question pool and avoids duplicates within the same 10-question run.',
  },
  {
    q: 'Does this quiz provide financial advice?',
    a: 'No. It’s a general finance knowledge check and does not provide recommendations or guidance.',
  },
];

// Question bank: intentionally broad scope, conceptual, and vocabulary-driven.
export const FINANCE_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "Which term describes the difference between income and expenses over a period?",
    options: ["Cash flow", "Net worth", "Liquidity", "Principal"],
    correct: "Cash flow",
  },
  {
    q: "What does “liquidity” refer to?",
    options: [
      "How quickly an asset can be converted to cash",
      "How much interest an account pays",
      "How often a bill is due",
      "How risky an investment is",
    ],
    correct: "How quickly an asset can be converted to cash",
  },
  {
    q: "Which is typically considered a liability?",
    options: ["Savings account balance", "Car loan balance", "Cash on hand", "Home equity"],
    correct: "Car loan balance",
  },
  {
    q: "What does APR represent most directly?",
    options: [
      "A yearly borrowing cost rate",
      "A guaranteed investment return",
      "A bank fee schedule",
      "A credit score range",
    ],
    correct: "A yearly borrowing cost rate",
  },
  {
    q: "What does APY account for that APR does not?",
    options: [
      "Compounding",
      "Late fees",
      "Credit limits",
      "Tax withholding",
    ],
    correct: "Compounding",
  },
  {
    q: "Which term refers to spreading risk across different holdings?",
    options: ["Diversification", "Leverage", "Inflation", "Default"],
    correct: "Diversification",
  },
  {
    q: "What is “principal” in a loan context?",
    options: [
      "The original amount borrowed",
      "The interest charged each month",
      "The minimum payment amount",
      "The lender’s profit margin",
    ],
    correct: "The original amount borrowed",
  },
  {
    q: "Which phrase best describes “inflation”?",
    options: [
      "A general rise in prices over time",
      "A drop in stock prices",
      "A type of bank fee",
      "A guaranteed rate of return",
    ],
    correct: "A general rise in prices over time",
  },
  {
    q: "What does “market capitalization” describe?",
    options: [
      "A company’s share price multiplied by shares outstanding",
      "A company’s yearly revenue",
      "A company’s dividend per share",
      "A company’s debt-to-income ratio",
    ],
    correct: "A company’s share price multiplied by shares outstanding",
  },
  {
    q: "Which is an example of a fixed expense?",
    options: ["Rent", "Groceries", "Gas", "Dining out"],
    correct: "Rent",
  },
  {
    q: "What does “net worth” mean?",
    options: [
      "Assets minus liabilities",
      "Income minus taxes",
      "Savings minus checking",
      "Spending minus income",
    ],
    correct: "Assets minus liabilities",
  },
  {
    q: "Which term refers to the risk that a borrower will not repay?",
    options: ["Default risk", "Liquidity risk", "Reinvestment risk", "Duration"],
    correct: "Default risk",
  },
  {
    q: "What does “dividend” usually mean?",
    options: [
      "A payment to shareholders",
      "A mandatory bank fee",
      "A loan origination amount",
      "A credit score factor",
    ],
    correct: "A payment to shareholders",
  },
  {
    q: "Which describes “compound interest”?",
    options: [
      "Earning interest on both principal and prior interest",
      "Paying interest only once per year",
      "A fee added to a credit card statement",
      "A fixed loan payment schedule",
    ],
    correct: "Earning interest on both principal and prior interest",
  },
  {
    q: "What is the primary purpose of insurance?",
    options: [
      "Transfer of risk",
      "Guaranteed profit",
      "Reducing taxes",
      "Increasing credit limits",
    ],
    correct: "Transfer of risk",
  },
  {
    q: "Which term describes selling an asset for more than you paid?",
    options: ["Capital gain", "Amortization", "Depreciation", "Withholding"],
    correct: "Capital gain",
  },
  {
    q: "Which is a common characteristic of an index fund?",
    options: [
      "Tracks a market index",
      "Guarantees a fixed return",
      "Always holds only one stock",
      "Has no market risk",
    ],
    correct: "Tracks a market index",
  },
  {
    q: "What does “expense ratio” describe for a fund?",
    options: [
      "Annual fees as a percentage of assets",
      "The fund’s yearly return",
      "A tax penalty amount",
      "A measure of diversification",
    ],
    correct: "Annual fees as a percentage of assets",
  },
  {
    q: "Which term refers to money kept aside for unexpected expenses?",
    options: ["Emergency fund", "Down payment", "Dividend", "Principal"],
    correct: "Emergency fund",
  },
  {
    q: "What does “withholding” usually refer to on a paycheck?",
    options: [
      "Amounts taken out for taxes",
      "A late payment fee",
      "Interest earned on savings",
      "A credit card minimum payment",
    ],
    correct: "Amounts taken out for taxes",
  },
  {
    q: "Which best describes a “bond”?",
    options: [
      "A debt instrument",
      "An ownership share",
      "A bank checking product",
      "A credit report",
    ],
    correct: "A debt instrument",
  },
  {
    q: "What does “volatility” describe?",
    options: [
      "The degree of price movement over time",
      "A guaranteed interest rate",
      "A fixed monthly payment",
      "A credit limit increase",
    ],
    correct: "The degree of price movement over time",
  },
  {
    q: "Which is typically a tax-advantaged retirement account type in the U.S.?",
    options: ["401(k)", "Checking account", "Brokerage margin account", "Wire transfer"],
    correct: "401(k)",
  },
  {
    q: "What does “amortization” describe?",
    options: [
      "A schedule of payments that reduces a loan balance over time",
      "A stock split process",
      "A method to calculate dividends",
      "A credit score range",
    ],
    correct: "A schedule of payments that reduces a loan balance over time",
  },
  {
    q: "Which term refers to the maximum amount you can borrow on a revolving credit line?",
    options: ["Credit limit", "Principal", "Collateral", "Deductible"],
    correct: "Credit limit",
  },
  {
    q: "What does “collateral” mean in lending?",
    options: [
      "An asset pledged to secure a loan",
      "A lender’s monthly fee",
      "A type of interest rate",
      "A credit reporting bureau",
    ],
    correct: "An asset pledged to secure a loan",
  },
  {
    q: "Which term describes the portion you pay before insurance coverage begins to pay?",
    options: ["Deductible", "Dividend", "Premium", "Principal"],
    correct: "Deductible",
  },
  {
    q: "What does “premium” usually mean in an insurance context?",
    options: [
      "The price paid for coverage",
      "A guaranteed payout",
      "A tax refund amount",
      "A loan payment schedule",
    ],
    correct: "The price paid for coverage",
  },
  {
    q: "Which term is most associated with the idea that money today can be worth more than money later?",
    options: [
      "Time value of money",
      "Market capitalization",
      "Debt-to-income ratio",
      "Credit utilization",
    ],
    correct: "Time value of money",
  },
];
