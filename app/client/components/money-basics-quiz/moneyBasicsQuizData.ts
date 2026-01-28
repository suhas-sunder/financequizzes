export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const MONEY_BASICS_QUIZ_INTENT = {
  topicLabel: "Money Basics",
  roundSize: 10,
  formatLabel: "10-question challenge",
  focus:
    "Everyday money fundamentals: income vs wage, net vs gross pay, spending categories, saving goals, inflation and purchasing power, and simple vs compound interest at a conceptual level. Not financial planning strategy.",
} as const;

export const MONEY_BASICS_QUIZ_CATEGORIES = [
  {
    key: "pay",
    label: "Income and pay terms",
    whatItCovers:
      "Income vs wage, gross vs net pay, and paycheck language.",
  },
  {
    key: "spending",
    label: "Spending and categories",
    whatItCovers:
      "Needs vs wants framing, recurring vs one-time costs, and category language.",
  },
  {
    key: "saving",
    label: "Saving basics",
    whatItCovers:
      "Saving goals, emergency fund language, and tradeoffs.",
  },
  {
    key: "prices",
    label: "Inflation and purchasing power",
    whatItCovers:
      "How prices changing over time affects what money can buy.",
  },
  {
    key: "interest",
    label: "Interest concepts",
    whatItCovers:
      "Simple interest vs compound interest as concepts (not calculation).",
  },
] as const;

export const MONEY_BASICS_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Early recognition, with gaps in everyday money vocabulary.",
  },
  {
    key: "4-5",
    label: "4–5 out of 10",
    meaning: "Some familiarity, but inconsistent interpretation of pay and money terms.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid understanding of most beginner money concepts.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning: "Strong everyday money awareness across pay, spending, saving, and inflation concepts.",
  },
  {
    key: "10",
    label: "10 out of 10",
    meaning: "Excellent clarity on everyday money fundamentals and terminology.",
  },
] as const;

export const MONEY_BASICS_FAQS: FAQItem[] = [
  {
    q: "What does this money basics quiz test?",
    a: "It tests beginner-friendly everyday money concepts: gross vs net pay, income vs wage, spending categories, saving goals, inflation and purchasing power, and simple vs compound interest at a conceptual level.",
  },
  {
    q: "Is this quiz about financial planning strategy?",
    a: "No. It focuses on everyday money understanding and terminology, not long-term planning strategy or personalized recommendations.",
  },
  {
    q: "Does this quiz require math?",
    a: "No. It is definitional and conceptual, focused on meaning and recognition rather than calculations.",
  },
  {
    q: "How many questions are in the quiz?",
    a: "Each run is 10 questions, drawn from a larger question bank so you can retake it for variety.",
  },
  {
    q: "How can I improve my score?",
    a: "Slow down and read labels carefully: gross vs net, recurring vs one-time, and rate vs outcome. Reviewing basic personal finance definitions helps.",
  },
];

export const MONEY_BASICS_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "What is the best description of “gross pay”?",
    options: [
      "Pay before deductions like taxes and benefits",
      "Pay after all deductions are removed",
      "The total money you spend each month",
      "The amount you save automatically",
    ],
    correct: "Pay before deductions like taxes and benefits",
  },
  {
    q: "What is the best description of “net pay”?",
    options: [
      "Pay you take home after deductions",
      "Pay before taxes are removed",
      "The amount you earn per hour",
      "The total value of your investments",
    ],
    correct: "Pay you take home after deductions",
  },
  {
    q: "In everyday terms, what is “income”?",
    options: [
      "Money you receive over time from work or other sources",
      "Only money earned from a single job",
      "Only money saved in a bank account",
      "Only money earned from investing",
    ],
    correct: "Money you receive over time from work or other sources",
  },
  {
    q: "What is a “wage” most commonly referring to?",
    options: [
      "Pay for work, often stated per hour",
      "The total amount of debt owed",
      "A fee charged by a bank",
      "A type of tax refund",
    ],
    correct: "Pay for work, often stated per hour",
  },
  {
    q: "What does “budget category” mean conceptually?",
    options: [
      "A labeled group used to track a type of spending",
      "A guaranteed spending limit set by the bank",
      "A type of investment account",
      "A loan repayment schedule",
    ],
    correct: "A labeled group used to track a type of spending",
  },
  {
    q: "What is the best description of a “recurring expense”?",
    options: [
      "A cost that repeats regularly (weekly, monthly, yearly)",
      "A one-time purchase that never repeats",
      "A cost that only happens in emergencies",
      "A cost that is always optional",
    ],
    correct: "A cost that repeats regularly (weekly, monthly, yearly)",
  },
  {
    q: "What does “needs vs wants” typically mean in budgeting language?",
    options: [
      "A way to separate essential spending from optional spending",
      "A way to compare different investment returns",
      "A way to pick the best credit card",
      "A way to predict inflation next year",
    ],
    correct: "A way to separate essential spending from optional spending",
  },
  {
    q: "What is a “saving goal” best described as?",
    options: [
      "A target amount you want to set aside for a purpose",
      "A tax you must pay on earnings",
      "A bank fee for maintaining an account",
      "A rule that guarantees higher income",
    ],
    correct: "A target amount you want to set aside for a purpose",
  },
  {
    q: "What does “emergency fund” usually refer to?",
    options: [
      "Money set aside for unexpected expenses",
      "Money invested only in stocks",
      "Money used for daily purchases",
      "Money borrowed from a lender",
    ],
    correct: "Money set aside for unexpected expenses",
  },
  {
    q: "What does “inflation” generally mean?",
    options: [
      "Prices rising over time, reducing purchasing power",
      "Wages always rising faster than prices",
      "A guaranteed increase in savings",
      "A fee charged on credit cards",
    ],
    correct: "Prices rising over time, reducing purchasing power",
  },
  {
    q: "What does “purchasing power” describe?",
    options: [
      "How much goods and services your money can buy",
      "How much interest you earn per year",
      "How fast your credit score increases",
      "How many accounts you have at a bank",
    ],
    correct: "How much goods and services your money can buy",
  },
  {
    q: "What is “simple interest” best described as?",
    options: [
      "Interest calculated only on the original amount",
      "Interest that grows by earning interest on interest",
      "A fee charged for late payment",
      "A discount on prices",
    ],
    correct: "Interest calculated only on the original amount",
  },
  {
    q: "What is “compound interest” best described as?",
    options: [
      "Interest that can grow by earning on previous interest as well as the original amount",
      "Interest charged only once per year as a flat fee",
      "Interest that never changes over time",
      "A tax on investment gains only",
    ],
    correct:
      "Interest that can grow by earning on previous interest as well as the original amount",
  },
  {
    q: "In everyday money language, what does “cash flow” usually refer to?",
    options: [
      "Money coming in and going out over time",
      "A guaranteed profit",
      "The interest rate on a savings account",
      "A credit score category",
    ],
    correct: "Money coming in and going out over time",
  },
  {
    q: "What does “fixed expense” usually mean in budgeting?",
    options: [
      "A cost that is relatively stable month to month",
      "A cost that changes every time you buy something",
      "A cost that only happens once",
      "A cost that is always optional",
    ],
    correct: "A cost that is relatively stable month to month",
  },
  {
    q: "What does “variable expense” usually mean in budgeting?",
    options: [
      "A cost that can change from month to month",
      "A cost that never changes",
      "A cost paid only annually",
      "A cost set by your employer",
    ],
    correct: "A cost that can change from month to month",
  },
  {
    q: "What does “take-home pay” usually mean?",
    options: [
      "Net pay after deductions",
      "Gross pay before deductions",
      "Total yearly income before taxes",
      "A savings account balance",
    ],
    correct: "Net pay after deductions",
  },
  {
    q: "What does “interest rate” describe conceptually?",
    options: [
      "A rate used to describe how interest accrues over time",
      "A total dollar amount owed immediately",
      "A category of spending",
      "A government tax bracket",
    ],
    correct: "A rate used to describe how interest accrues over time",
  },
  {
    q: "Why does inflation matter for everyday money?",
    options: [
      "It can change what the same amount of money can buy over time",
      "It guarantees higher returns on investments",
      "It eliminates the need to budget",
      "It makes all prices stay the same",
    ],
    correct:
      "It can change what the same amount of money can buy over time",
  },
  {
    q: "What does “spending category vs total spending” highlight?",
    options: [
      "Categories organize spending types; totals sum everything",
      "Totals only apply to savings accounts",
      "Categories are the same as income",
      "Totals never include recurring costs",
    ],
    correct: "Categories organize spending types; totals sum everything",
  },
] as const;
