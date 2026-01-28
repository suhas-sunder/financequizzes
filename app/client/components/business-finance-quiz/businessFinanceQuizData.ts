export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const BUSINESS_FINANCE_QUIZ_INTENT = {
  topicLabel: "Business Finance",
  roundSize: 10,
  formatLabel: "10-question challenge",
  focus:
    "Business and corporate finance concepts: revenue vs profit, cash flow, fixed vs variable costs, gross margin, break-even, and basic financial ratios. Business settings only (no consumer finance scenarios).",
} as const;

export const BUSINESS_FINANCE_QUIZ_CATEGORIES = [
  {
    key: "statements",
    label: "Business financial language",
    whatItCovers:
      "Revenue, expenses, profit, and how financial terms are used in business contexts.",
  },
  {
    key: "costs",
    label: "Costs and margins",
    whatItCovers:
      "Fixed vs variable costs, gross margin, contribution margin, and unit economics language.",
  },
  {
    key: "cashflow",
    label: "Cash flow",
    whatItCovers:
      "Cash flow vs profit, working capital framing, and timing language.",
  },
  {
    key: "breakeven",
    label: "Break-even and leverage",
    whatItCovers:
      "Break-even point meaning and operating leverage as a concept.",
  },
  {
    key: "ratios",
    label: "Basic ratios and metrics",
    whatItCovers:
      "Common business metrics (gross margin, net margin, current ratio) as definitions.",
  },
] as const;

export const BUSINESS_FINANCE_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Early recognition, with gaps in core business finance terms.",
  },
  {
    key: "4-5",
    label: "4–5 out of 10",
    meaning: "Some familiarity, but inconsistent interpretation of key metrics.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid understanding of common business finance language.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning: "Strong recognition across margins, cash flow, and break-even concepts.",
  },
  {
    key: "10",
    label: "10 out of 10",
    meaning: "Excellent clarity on foundational business and corporate finance concepts.",
  },
] as const;

export const BUSINESS_FINANCE_FAQS: FAQItem[] = [
  {
    q: "What does this business finance quiz test?",
    a: "It tests understanding of finance language used in business settings: revenue vs profit, cash flow, fixed vs variable costs, margins, break-even, and basic ratios.",
  },
  {
    q: "Is this quiz about investing or personal budgeting?",
    a: "No. It avoids consumer finance scenarios and focuses on business and corporate finance concepts.",
  },
  {
    q: "Does this quiz require calculations?",
    a: "No. It is primarily definitional and conceptual, focused on interpreting terms correctly.",
  },
  {
    q: "How many questions are in the quiz?",
    a: "Each run is 10 questions, drawn from a larger question bank so you can retake it for variety.",
  },
  {
    q: "How can I improve my score?",
    a: "Pay attention to how terms relate: revenue vs profit, profit vs cash flow, and fixed vs variable costs. Reviewing basic business finance definitions helps.",
  },
];

export const BUSINESS_FINANCE_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "In a business context, what does “revenue” mean?",
    options: [
      "Money earned from selling goods or services",
      "Money left after all expenses are paid",
      "Cash collected after taxes",
      "A company’s bank balance",
    ],
    correct: "Money earned from selling goods or services",
  },
  {
    q: "What is “profit” best described as?",
    options: [
      "Revenue minus expenses",
      "Revenue minus customer count",
      "Cash in the bank on a given day",
      "Total sales volume only",
    ],
    correct: "Revenue minus expenses",
  },
  {
    q: "What does “cash flow” most directly refer to?",
    options: [
      "Cash moving in and out of a business over time",
      "Total revenue on an invoice",
      "A company’s market value",
      "The gross margin percentage",
    ],
    correct: "Cash moving in and out of a business over time",
  },
  {
    q: "Why can a company be profitable but still have cash flow problems?",
    options: [
      "Because cash timing can differ from when revenue/expenses are recorded",
      "Because profit always equals cash in the bank",
      "Because revenue can’t be recorded until cash arrives",
      "Because expenses never affect cash",
    ],
    correct:
      "Because cash timing can differ from when revenue/expenses are recorded",
  },
  {
    q: "What is a “fixed cost”?",
    options: [
      "A cost that does not change much with production volume in the short term",
      "A cost that rises with each additional unit sold",
      "A one-time cost that never repeats",
      "A cost that customers pay directly",
    ],
    correct:
      "A cost that does not change much with production volume in the short term",
  },
  {
    q: "What is a “variable cost”?",
    options: [
      "A cost that increases as production or sales volume increases",
      "A cost that stays the same each month regardless of volume",
      "A cost that is always paid annually",
      "A cost that is unrelated to operations",
    ],
    correct: "A cost that increases as production or sales volume increases",
  },
  {
    q: "What does “gross margin” usually mean?",
    options: [
      "Revenue minus direct costs, expressed as a percentage of revenue",
      "Revenue minus taxes only",
      "Profit minus cash flow",
      "Total revenue divided by headcount",
    ],
    correct: "Revenue minus direct costs, expressed as a percentage of revenue",
  },
  {
    q: "What is the “break-even point” conceptually?",
    options: [
      "Where total revenue equals total costs",
      "Where revenue reaches its maximum possible value",
      "Where cash flow is always positive",
      "Where a company has zero employees",
    ],
    correct: "Where total revenue equals total costs",
  },
  {
    q: "What does “operating leverage” generally describe?",
    options: [
      "How fixed costs can amplify profits or losses as sales change",
      "A company’s ability to borrow money cheaply",
      "A guarantee that profits will increase",
      "A ratio of taxes to revenue",
    ],
    correct: "How fixed costs can amplify profits or losses as sales change",
  },
  {
    q: "What does “net margin” usually mean?",
    options: [
      "Net profit as a percentage of revenue",
      "Gross profit divided by inventory",
      "Cash flow divided by revenue",
      "Revenue divided by expenses",
    ],
    correct: "Net profit as a percentage of revenue",
  },
  {
    q: "What does “working capital” refer to at a high level?",
    options: [
      "Short-term resources and obligations tied to operations",
      "Long-term debt only",
      "A company’s stock price",
      "A one-time startup cost",
    ],
    correct: "Short-term resources and obligations tied to operations",
  },
  {
    q: "In simple terms, what is a “financial ratio” used for?",
    options: [
      "To summarize a relationship between two financial measures",
      "To guarantee future performance",
      "To replace the income statement",
      "To calculate taxes automatically",
    ],
    correct: "To summarize a relationship between two financial measures",
  },
  {
    q: "What does the “current ratio” usually measure?",
    options: [
      "Ability to cover short-term obligations with short-term assets",
      "Profitability per employee",
      "Revenue growth over time",
      "Market share in an industry",
    ],
    correct: "Ability to cover short-term obligations with short-term assets",
  },
  {
    q: "What is “COGS” most closely related to?",
    options: [
      "Direct costs of producing the goods sold",
      "Total marketing expense",
      "Cash collected from customers",
      "A company’s tax rate",
    ],
    correct: "Direct costs of producing the goods sold",
  },
  {
    q: "What is “unit economics” usually referring to?",
    options: [
      "Revenue and cost relationships per unit sold or per customer",
      "A company’s total GDP contribution",
      "A national unemployment metric",
      "A stock market valuation method only",
    ],
    correct: "Revenue and cost relationships per unit sold or per customer",
  },
  {
    q: "What does “burn rate” commonly refer to for a business?",
    options: [
      "How quickly cash is being spent over time",
      "How fast revenue grows each day",
      "A guaranteed expense reduction",
      "The interest rate on a loan",
    ],
    correct: "How quickly cash is being spent over time",
  },
  {
    q: "What does “runway” typically mean in startup finance language?",
    options: [
      "How long cash can last at the current burn rate",
      "A company’s total profit to date",
      "A credit score for businesses",
      "A type of tax deduction",
    ],
    correct: "How long cash can last at the current burn rate",
  },
  {
    q: "What is “break-even analysis” used for conceptually?",
    options: [
      "Understanding the sales level needed to cover costs",
      "Choosing the best stock to buy",
      "Determining personal budget categories",
      "Predicting GDP next quarter",
    ],
    correct: "Understanding the sales level needed to cover costs",
  },
  {
    q: "What does “contribution margin” usually describe?",
    options: [
      "Revenue left after variable costs to cover fixed costs and profit",
      "Net profit after all expenses",
      "Cash collected minus taxes",
      "Gross margin after interest",
    ],
    correct:
      "Revenue left after variable costs to cover fixed costs and profit",
  },
  {
    q: "In business finance, “profitability” most directly refers to:",
    options: [
      "Whether revenues exceed costs over a period",
      "Whether cash is in the bank today",
      "Whether a product has the lowest price",
      "Whether a company is publicly traded",
    ],
    correct: "Whether revenues exceed costs over a period",
  },
] as const;
