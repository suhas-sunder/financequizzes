export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const SAVING_MONEY_QUIZ_INTENT = {
  topicLabel: "Saving Money",
  roundSize: 10,
  formatLabel: "10-question challenge",
  focus:
    "Conceptual saving language: goals, habits, tradeoffs, and time orientation. No products, rates, or optimization tactics.",
} as const;

export const SAVING_MONEY_QUIZ_CATEGORIES = [
  {
    key: "goals",
    label: "Goals and purpose",
    whatItCovers:
      "How saving is framed as a goal (emergency fund, short-term goals, long-term stability).",
  },
  {
    key: "habits",
    label: "Habits and routines",
    whatItCovers:
      "Common behavioral language like consistency, automation, and paying yourself first.",
  },
  {
    key: "tradeoffs",
    label: "Tradeoffs and priorities",
    whatItCovers:
      "Opportunity cost, wants vs needs framing, and choosing between competing goals.",
  },
  {
    key: "time",
    label: "Time orientation",
    whatItCovers:
      "Short-term vs long-term thinking, delayed gratification, and planning horizons.",
  },
  {
    key: "buffers",
    label: "Buffers and resilience",
    whatItCovers:
      "Safety margin language: sinking funds, contingencies, and financial cushioning.",
  },
] as const;

export const SAVING_MONEY_QUIZ_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Early recognition, with gaps in common saving terminology.",
  },
  {
    key: "4-5",
    label: "4–5 out of 10",
    meaning: "Some baseline familiarity, but inconsistent interpretation of key phrases.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid understanding of most saving concepts and behavioral framing.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning: "Strong recognition across goals, habits, and tradeoff language.",
  },
  {
    key: "10",
    label: "10 out of 10",
    meaning: "Excellent conceptual clarity on saving terms and framing.",
  },
] as const;

export const SAVING_MONEY_FAQS: FAQItem[] = [
  {
    q: "What does this saving money quiz test?",
    a: "It tests recognition and interpretation of common saving concepts and the language used to describe goals, habits, tradeoffs, and time horizons. It is about comprehension, not strategy.",
  },
  {
    q: "Is this quiz about investing, interest, or returns?",
    a: "No. The questions avoid products, rates, and growth mechanics. The focus is saving as a financial behavior and how it is framed.",
  },
  {
    q: "Does the quiz teach saving tactics?",
    a: "No. It does not provide instructions or recommendations. It is a self-assessment of understanding of saving terminology.",
  },
  {
    q: "How many questions are in the quiz?",
    a: "Each run is 10 questions, pulled from a larger question bank so you can retake it for variety.",
  },
  {
    q: "How can I improve my score?",
    a: "Slow down and read what the phrase is implying: goal vs method, short-term vs ongoing, and tradeoff vs restriction. Reviewing standard definitions of saving terms helps.",
  },
];

export const SAVING_MONEY_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "In saving language, what does “pay yourself first” usually mean?",
    options: [
      "Save money before spending on other things",
      "Spend on necessities before wants",
      "Borrow to cover expenses, then repay later",
      "Only save money at the end of the month",
    ],
    correct: "Save money before spending on other things",
  },
  {
    q: "What is an “emergency fund” best described as?",
    options: [
      "Money set aside for unexpected expenses",
      "Money used only for entertainment",
      "A loan you can access quickly",
      "A plan to increase income next year",
    ],
    correct: "Money set aside for unexpected expenses",
  },
  {
    q: "When someone says a goal is “short-term,” they usually mean:",
    options: [
      "It is intended for the near future",
      "It is meant for retirement",
      "It requires high risk to achieve",
      "It is impossible to change",
    ],
    correct: "It is intended for the near future",
  },
  {
    q: "“Wants vs needs” is a way to describe:",
    options: [
      "Prioritizing spending choices",
      "Comparing two bank accounts",
      "Choosing between interest rates",
      "Tracking stock market performance",
    ],
    correct: "Prioritizing spending choices",
  },
  {
    q: "What does “tradeoff” mean in a saving context?",
    options: [
      "Choosing one option means giving up another",
      "Switching banks to avoid fees",
      "Increasing your salary automatically",
      "Getting a discount without changing anything",
    ],
    correct: "Choosing one option means giving up another",
  },
  {
    q: "A “sinking fund” is most accurately:",
    options: [
      "Savings set aside for a planned future expense",
      "Money invested for long-term growth",
      "Cash kept only for emergencies",
      "A category for entertainment spending",
    ],
    correct: "Savings set aside for a planned future expense",
  },
  {
    q: "In everyday finance language, “buffer” most often means:",
    options: [
      "Extra money reserved to reduce stress from surprises",
      "A way to increase returns",
      "A fee charged by a bank",
      "A credit score improvement plan",
    ],
    correct: "Extra money reserved to reduce stress from surprises",
  },
  {
    q: "“Delayed gratification” is closest to:",
    options: [
      "Choosing a later benefit over an immediate purchase",
      "Buying now and paying later",
      "Spending only on emergencies",
      "Switching jobs for higher pay",
    ],
    correct: "Choosing a later benefit over an immediate purchase",
  },
  {
    q: "When someone says they are “saving with a purpose,” they mean:",
    options: [
      "Saving toward a specific goal",
      "Saving only if money is left over",
      "Saving by increasing investment risk",
      "Saving to avoid tracking spending",
    ],
    correct: "Saving toward a specific goal",
  },
  {
    q: "A “saving habit” is best described as:",
    options: [
      "A repeated behavior that supports saving consistently",
      "A one-time decision to cut spending forever",
      "A way to maximize interest rates",
      "A type of credit product",
    ],
    correct: "A repeated behavior that supports saving consistently",
  },
  {
    q: "What does “automation” usually refer to in saving discussions?",
    options: [
      "Setting up saving to happen regularly without manual effort",
      "Using a calculator to track interest",
      "Investing without knowing the rules",
      "Creating a budget category list",
    ],
    correct: "Setting up saving to happen regularly without manual effort",
  },
  {
    q: "In saving language, “consistency” most often means:",
    options: [
      "Saving regularly over time",
      "Saving only when income increases",
      "Saving only in cash",
      "Saving by borrowing",
    ],
    correct: "Saving regularly over time",
  },
  {
    q: "“Lifestyle creep” is commonly used to describe:",
    options: [
      "Spending rising as income rises, reducing saving",
      "Saving more as income rises",
      "Paying off a debt early",
      "Switching to a cheaper bank account",
    ],
    correct: "Spending rising as income rises, reducing saving",
  },
  {
    q: "If a goal is described as “time-bound,” it means:",
    options: [
      "It has a target timeframe or deadline",
      "It is only for emergencies",
      "It is unlimited and flexible",
      "It depends on market performance",
    ],
    correct: "It has a target timeframe or deadline",
  },
  {
    q: "What does “priority” usually imply in a saving plan?",
    options: [
      "The most important goal gets attention first",
      "All goals get equal money always",
      "Saving is optional if spending is high",
      "The goal depends on interest rates",
    ],
    correct: "The most important goal gets attention first",
  },
  {
    q: "In saving language, “friction” often refers to:",
    options: [
      "Small obstacles that make spending harder or saving easier",
      "A fee charged every month",
      "A rule that increases income",
      "A budgeting category type",
    ],
    correct: "Small obstacles that make spending harder or saving easier",
  },
  {
    q: "“Impulse purchase” relates to saving because it:",
    options: [
      "Can disrupt saving by redirecting money unexpectedly",
      "Guarantees you will save more",
      "Always improves financial stability",
      "Only affects investing, not saving",
    ],
    correct: "Can disrupt saving by redirecting money unexpectedly",
  },
  {
    q: "“Opportunity cost” in plain terms is:",
    options: [
      "What you give up when you choose one option",
      "A fee charged for saving",
      "A type of bank account",
      "A method of earning returns",
    ],
    correct: "What you give up when you choose one option",
  },
  {
    q: "If someone says they are building “financial resilience,” they usually mean:",
    options: [
      "Creating capacity to handle setbacks without panic",
      "Maximizing returns quickly",
      "Borrowing more to increase flexibility",
      "Avoiding all spending categories",
    ],
    correct: "Creating capacity to handle setbacks without panic",
  },
  {
    q: "A “goal-based” approach to saving emphasizes:",
    options: [
      "Assigning savings to specific goals",
      "Only saving in cash envelopes",
      "Reducing spending without tracking",
      "Choosing the highest rate product",
    ],
    correct: "Assigning savings to specific goals",
  },
  {
    q: "What does “mindful spending” typically mean?",
    options: [
      "Spending intentionally in line with priorities",
      "Spending as much as possible before saving",
      "Avoiding all discretionary spending forever",
      "Only spending with credit cards",
    ],
    correct: "Spending intentionally in line with priorities",
  },
  {
    q: "If a saving goal is “realistic,” it means:",
    options: [
      "It fits your constraints and is achievable",
      "It requires major luck to succeed",
      "It depends on returns",
      "It cannot be adjusted over time",
    ],
    correct: "It fits your constraints and is achievable",
  },
  {
    q: "In saving discussions, “intentional” is closest to:",
    options: [
      "Deliberate and planned rather than accidental",
      "Random and untracked",
      "Based on market timing",
      "A synonym for investing",
    ],
    correct: "Deliberate and planned rather than accidental",
  },
  {
    q: "“One-time expense” vs “recurring expense” matters for saving because:",
    options: [
      "Recurring costs require ongoing room in your plan",
      "One-time expenses never affect saving",
      "Recurring costs are always optional",
      "It only matters for taxes",
    ],
    correct: "Recurring costs require ongoing room in your plan",
  },
  {
    q: "What does “cash cushion” usually refer to?",
    options: [
      "Extra cash set aside to reduce risk from surprises",
      "Money invested for growth",
      "A credit limit increase",
      "A monthly fee waiver",
    ],
    correct: "Extra cash set aside to reduce risk from surprises",
  },
] as const;
