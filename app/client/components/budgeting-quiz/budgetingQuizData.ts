export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const BUDGETING_QUIZ_INTENT = {
  topicLabel: "Budgeting",
  roundSize: 10,
  formatLabel: "10-question awareness check",
  focus:
    "Budgeting concepts and terminology: recognition of budgeting terms, structures, and distinctions like planning vs tracking, categories vs totals, and short-term vs ongoing constraints.",
} as const;

export const BUDGETING_QUIZ_CATEGORIES = [
  {
    key: "basics",
    label: "Budgeting basics and structures",
    whatItCovers:
      "Common budgeting frameworks and what a “budget” represents in simple terms.",
  },
  {
    key: "income_cashflow",
    label: "Income, cash flow, and timing",
    whatItCovers:
      "Language used to describe money coming in and going out, and why timing matters.",
  },
  {
    key: "categories_allocations",
    label: "Categories and allocations",
    whatItCovers:
      "What categories mean, how allocations are described, and terms for splitting spending.",
  },
  {
    key: "constraints_tradeoffs",
    label: "Constraints and tradeoffs",
    whatItCovers:
      "Fixed vs variable costs, discretionary vs non-discretionary spending, and other constraints.",
  },
  {
    key: "review_adjustment",
    label: "Review and adjustment language",
    whatItCovers:
      "Terms used when comparing plan vs reality and describing changes over time.",
  },
] as const;

export const BUDGETING_QUIZ_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Early recognition, with gaps across core budgeting terms.",
  },
  {
    key: "4-6",
    label: "4–6 out of 10",
    meaning: "Solid baseline vocabulary with a few missing concepts.",
  },
  {
    key: "7-9",
    label: "7–9 out of 10",
    meaning: "Strong terminology recognition across common budgeting language.",
  },
  { key: "10", label: "10 out of 10", meaning: "Perfect run." },
] as const;

export const BUDGETING_FAQS: FAQItem[] = [
  {
    q: "How is the quiz scored?",
    a: "Each set is 10 questions. Your score is the number you answer correctly out of 10.",
  },
  {
    q: "Is this about how to build or follow a budget?",
    a: "No. This is a terminology and concepts check. It focuses on what budgeting language means, not step-by-step budgeting instructions.",
  },
  {
    q: "What do “New streak” and “Best streak” mean?",
    a: "New streak is your current consecutive correct answers within the active 10-question set. It resets on a wrong answer and when you start a new set. Best streak is the highest streak you’ve hit on this quiz on this device.",
  },
  {
    q: "Can I change an answer after choosing?",
    a: "No. Each question locks once you select an option, then the quiz reveals whether it was correct.",
  },
  {
    q: "Does a new set repeat questions?",
    a: "Each set is randomized from the question pool and avoids duplicates within the same 10-question run.",
  },
  {
    q: "Does this quiz provide financial advice?",
    a: "No. It’s a budgeting terminology check and does not provide recommendations or guidance.",
  },
];

// Question bank: budgeting-only, conceptual, terminology-driven (no tools, templates, or procedural guidance).
export const BUDGETING_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "In budgeting, what does “cash flow” refer to?",
    options: [
      "The timing and movement of money in and out",
      "A type of savings account",
      "A credit score range",
      "A tax refund estimate",
    ],
    correct: "The timing and movement of money in and out",
  },
  {
    q: "What is a “fixed expense”?",
    options: [
      "A cost that stays about the same each period",
      "A cost that changes daily",
      "A cost paid only in cash",
      "A cost that is always optional",
    ],
    correct: "A cost that stays about the same each period",
  },
  {
    q: "What is a “variable expense”?",
    options: [
      "A cost that can change from period to period",
      "A cost that never changes",
      "A cost that must be paid first",
      "A cost that is only yearly",
    ],
    correct: "A cost that can change from period to period",
  },
  {
    q: "What does “discretionary spending” usually mean?",
    options: [
      "Spending you can choose to reduce or delay",
      "Spending required by law",
      "Spending that is automatically deducted",
      "Spending that is always fixed",
    ],
    correct: "Spending you can choose to reduce or delay",
  },
  {
    q: "What is “non-discretionary spending”?",
    options: [
      "Spending that is hard to avoid (needs or obligations)",
      "Spending that is only for fun",
      "Spending that happens once a decade",
      "Spending that is paid with rewards points",
    ],
    correct: "Spending that is hard to avoid (needs or obligations)",
  },
  {
    q: "In budgeting, what does “allocation” mean?",
    options: [
      "Assigning an amount to a category or purpose",
      "Borrowing money from a lender",
      "Raising your credit limit",
      "Moving money between banks automatically",
    ],
    correct: "Assigning an amount to a category or purpose",
  },
  {
    q: "What is a “budget category”?",
    options: [
      "A labeled bucket used to group similar spending or goals",
      "A bank fee for low balances",
      "A type of investment fund",
      "A tax filing status",
    ],
    correct: "A labeled bucket used to group similar spending or goals",
  },
  {
    q: "What does “planning” mean in a budgeting context?",
    options: [
      "Setting expected amounts before spending happens",
      "Recording every receipt after spending happens",
      "Refinancing a loan",
      "Calculating interest on a credit card",
    ],
    correct: "Setting expected amounts before spending happens",
  },
  {
    q: "What does “tracking” mean in a budgeting context?",
    options: [
      "Recording what you actually spent after the fact",
      "Setting targets for next month",
      "Negotiating a bill",
      "Opening a new credit card",
    ],
    correct: "Recording what you actually spent after the fact",
  },
  {
    q: "What does “budget vs actual” compare?",
    options: [
      "Planned amounts to what happened in reality",
      "Income to credit score",
      "Savings to investment returns",
      "Taxes to insurance premiums",
    ],
    correct: "Planned amounts to what happened in reality",
  },
  {
    q: "In budgeting, a “variance” is typically the…",
    options: [
      "Difference between planned and actual amounts",
      "Total amount you earned",
      "Total amount you saved",
      "Interest charged on a loan",
    ],
    correct: "Difference between planned and actual amounts",
  },
  {
    q: "What does “over budget” usually indicate?",
    options: [
      "Actual spending exceeded the planned amount",
      "Income exceeded expenses",
      "A credit limit increase happened",
      "A tax refund was larger than expected",
    ],
    correct: "Actual spending exceeded the planned amount",
  },
  {
    q: "What does “under budget” usually indicate?",
    options: [
      "Actual spending was less than planned",
      "Your bank account is overdrawn",
      "You missed a payment",
      "Your income dropped to zero",
    ],
    correct: "Actual spending was less than planned",
  },
  {
    q: "What is a “sinking fund” in budgeting language?",
    options: [
      "Money set aside over time for a known future expense",
      "A fund that only invests in stocks",
      "A penalty for late payments",
      "A refund from your bank",
    ],
    correct: "Money set aside over time for a known future expense",
  },
  {
    q: "What is “zero-based budgeting” commonly described as?",
    options: [
      "Giving every dollar a job so income minus allocations equals zero",
      "Spending nothing for a month",
      "Keeping your balance at zero",
      "Only using cash, not cards",
    ],
    correct: "Giving every dollar a job so income minus allocations equals zero",
  },
  {
    q: "What is the “envelope system” in budgeting terminology?",
    options: [
      "Using separate buckets (often physical or digital) for categories",
      "A way to mail bills more efficiently",
      "A credit card rewards strategy",
      "A method for filing taxes",
    ],
    correct: "Using separate buckets (often physical or digital) for categories",
  },
  {
    q: "What does “recurring expense” mean?",
    options: [
      "A cost that repeats on a regular schedule",
      "A cost that only happens once",
      "A cost that is always unpredictable",
      "A cost that is paid with cash only",
    ],
    correct: "A cost that repeats on a regular schedule",
  },
  {
    q: "What does “one-time expense” mean?",
    options: [
      "A cost that is not expected to repeat regularly",
      "A cost that happens every month",
      "A cost that is automatically deducted",
      "A cost that is always fixed",
    ],
    correct: "A cost that is not expected to repeat regularly",
  },
  {
    q: "In budgeting, what does “shortfall” usually refer to?",
    options: [
      "Not having enough to cover planned or required amounts",
      "Having extra money left over",
      "A reduction in tax rates",
      "A gain from an investment",
    ],
    correct: "Not having enough to cover planned or required amounts",
  },
  {
    q: "What is a “surplus” in a budget context?",
    options: [
      "Money left over after expenses or allocations",
      "A negative bank balance",
      "A late fee",
      "A type of loan",
    ],
    correct: "Money left over after expenses or allocations",
  },
  {
    q: "What does “net income” generally mean in budgeting language?",
    options: [
      "Income after deductions, not the headline gross amount",
      "Income before taxes and deductions",
      "Money borrowed on a credit line",
      "Money earned only from investments",
    ],
    correct: "Income after deductions, not the headline gross amount",
  },
  {
    q: "What does “gross income” generally mean?",
    options: [
      "Income before taxes and other deductions",
      "Income after all bills are paid",
      "The amount saved each month",
      "The interest rate on a loan",
    ],
    correct: "Income before taxes and other deductions",
  },
  {
    q: "In budgeting, what is “take-home pay”?",
    options: [
      "The amount you actually receive after deductions",
      "The total amount listed on a salary offer",
      "A bonus paid in cash",
      "A loan payment amount",
    ],
    correct: "The amount you actually receive after deductions",
  },
  {
    q: "What does “line item” mean in a budget?",
    options: [
      "A specific entry for a category or expense",
      "A bank branch location",
      "A credit card statement code",
      "A tax bracket",
    ],
    correct: "A specific entry for a category or expense",
  },
  {
    q: "What is a “baseline budget” usually used to describe?",
    options: [
      "A reference plan used for comparison across periods",
      "A budget that includes only taxes",
      "A budget that never changes",
      "A budget made only for emergencies",
    ],
    correct: "A reference plan used for comparison across periods",
  },
  {
    q: "What does “rolling budget” usually mean?",
    options: [
      "A budget that updates continuously as time moves forward",
      "A budget written on paper only",
      "A budget that applies to investments only",
      "A budget that is always zero-based",
    ],
    correct: "A budget that updates continuously as time moves forward",
  },
  {
    q: "In budgeting, “prioritization” is most closely about…",
    options: [
      "Deciding which categories get funded first",
      "Maximizing credit score quickly",
      "Finding the best investment returns",
      "Reducing tax withholding",
    ],
    correct: "Deciding which categories get funded first",
  },
  {
    q: "What does “constraint” mean in budgeting language?",
    options: [
      "A limit that restricts what can be allocated or spent",
      "A bonus that increases income",
      "A strategy for earning rewards points",
      "A bank account feature",
    ],
    correct: "A limit that restricts what can be allocated or spent",
  },
  {
    q: "What does “category total” refer to?",
    options: [
      "The sum of amounts within a specific category",
      "The sum of all income sources",
      "The interest charged on a credit card",
      "The amount of taxes withheld",
    ],
    correct: "The sum of amounts within a specific category",
  },
];
