export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const FINANCIAL_PLANNING_QUIZ_INTENT = {
  topicLabel: "Financial Planning",
  roundSize: 10,
  formatLabel: "10-question challenge",
  focus:
    "High-level financial planning language: goals, prioritization, time horizons, life-stage tradeoffs, and intent. No calculations or rules.",
} as const;

export const FINANCIAL_PLANNING_QUIZ_CATEGORIES = [
  {
    key: "goals",
    label: "Goals and outcomes",
    whatItCovers:
      "Language around defining what you want money to do, and what success means.",
  },
  {
    key: "prioritization",
    label: "Prioritization and choices",
    whatItCovers:
      "How planning weighs competing goals, constraints, and sequencing.",
  },
  {
    key: "time_horizons",
    label: "Time horizons",
    whatItCovers:
      "Short-, medium-, and long-term framing and how goals shift over time.",
  },
  {
    key: "tradeoffs",
    label: "Tradeoffs and constraints",
    whatItCovers:
      "Opportunity cost framing, limits, and making intentional compromises.",
  },
  {
    key: "life_stages",
    label: "Life stages and transitions",
    whatItCovers:
      "Planning concepts that change with major transitions and responsibilities.",
  },
] as const;

export const FINANCIAL_PLANNING_QUIZ_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Early recognition, with gaps in common planning vocabulary.",
  },
  {
    key: "4-5",
    label: "4–5 out of 10",
    meaning: "Some baseline familiarity, but inconsistent interpretation of intent.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid understanding of most planning concepts and framing.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning: "Strong recognition across goals, horizons, and prioritization language.",
  },
  {
    key: "10",
    label: "10 out of 10",
    meaning: "Excellent conceptual clarity on planning language and intent.",
  },
] as const;

export const FINANCIAL_PLANNING_FAQS: FAQItem[] = [
  {
    q: "What does this financial planning quiz test?",
    a: "It tests recognition and interpretation of high-level planning language: goals, prioritization, time horizons, life-stage tradeoffs, and intent. It is about comprehension, not execution.",
  },
  {
    q: "Does this quiz include calculations or projections?",
    a: "No. It intentionally avoids math, forecasting, and domain-specific rules. The focus is conceptual awareness.",
  },
  {
    q: "Is this about budgeting, investing, or taxes?",
    a: "No. It is broader and more abstract. Questions are about how planning is framed rather than any specific financial domain mechanics.",
  },
  {
    q: "How many questions are in the quiz?",
    a: "Each run is 10 questions, pulled from a larger bank so you can retake it for variety.",
  },
  {
    q: "How can I improve my score?",
    a: "Read for intent: what is being prioritized, what the time horizon implies, and what tradeoff is being described. Reviewing common planning definitions helps.",
  },
];

export const FINANCIAL_PLANNING_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "In planning language, what does a “time horizon” describe?",
    options: [
      "The timeframe a goal is intended to span",
      "A guaranteed rate of return",
      "The amount of cash in an account",
      "A rule for choosing investments",
    ],
    correct: "The timeframe a goal is intended to span",
  },
  {
    q: "What is “prioritization” in a financial planning context?",
    options: [
      "Deciding which goals matter most and come first",
      "Picking the highest interest rate available",
      "Tracking every transaction daily",
      "Avoiding all spending until next month",
    ],
    correct: "Deciding which goals matter most and come first",
  },
  {
    q: "When a plan is described as “goal-based,” it usually means:",
    options: [
      "Actions are organized around specific outcomes",
      "All money is invested for growth",
      "Only short-term needs are considered",
      "The plan is based on tax rules",
    ],
    correct: "Actions are organized around specific outcomes",
  },
  {
    q: "In planning discussions, a “tradeoff” most often means:",
    options: [
      "Choosing one goal reduces resources for another",
      "Switching banks to lower fees",
      "Getting a discount without changing anything",
      "Increasing income automatically over time",
    ],
    correct: "Choosing one goal reduces resources for another",
  },
  {
    q: "What does “alignment” typically refer to in planning language?",
    options: [
      "Matching money decisions to stated goals and values",
      "Choosing the same budget every month",
      "Maximizing returns regardless of risk",
      "Paying off debt as fast as possible",
    ],
    correct: "Matching money decisions to stated goals and values",
  },
  {
    q: "A “constraint” in a plan is best described as:",
    options: [
      "A limit that affects what is possible",
      "A guaranteed outcome",
      "A financial product feature",
      "A method for increasing returns",
    ],
    correct: "A limit that affects what is possible",
  },
  {
    q: "What does “sequencing” imply in planning?",
    options: [
      "Ordering goals or steps based on priority and timing",
      "Finding the best loan rate",
      "Tracking spending categories",
      "Choosing an investment allocation",
    ],
    correct: "Ordering goals or steps based on priority and timing",
  },
  {
    q: "If a goal is described as “long-term,” it usually implies:",
    options: [
      "It spans years rather than months",
      "It must be completed immediately",
      "It depends on a specific interest rate",
      "It is a short-term spending cap",
    ],
    correct: "It spans years rather than months",
  },
  {
    q: "In planning, “flexibility” most often means:",
    options: [
      "The ability to adjust as circumstances change",
      "The ability to predict returns accurately",
      "The ability to avoid all tradeoffs",
      "The ability to spend without limits",
    ],
    correct: "The ability to adjust as circumstances change",
  },
  {
    q: "What does “life stage” refer to in planning language?",
    options: [
      "A phase of life that shifts priorities and responsibilities",
      "A type of investment strategy",
      "A method for budgeting categories",
      "A tax bracket level",
    ],
    correct: "A phase of life that shifts priorities and responsibilities",
  },
  {
    q: "In planning, what does “intent” most closely mean?",
    options: [
      "The reason behind a decision or goal",
      "A fixed monthly expense",
      "A one-time fee",
      "A credit score number",
    ],
    correct: "The reason behind a decision or goal",
  },
  {
    q: "A “priority conflict” usually means:",
    options: [
      "Two goals compete for the same limited resources",
      "A bank declined a transaction",
      "An investment lost money",
      "A bill was paid late",
    ],
    correct: "Two goals compete for the same limited resources",
  },
  {
    q: "What does “planning horizon” typically mean?",
    options: [
      "The span of time you are considering in decisions",
      "The maximum amount you can borrow",
      "The total of monthly expenses",
      "The interest you earn in a year",
    ],
    correct: "The span of time you are considering in decisions",
  },
  {
    q: "If a plan is described as “abstract,” it usually means:",
    options: [
      "It focuses on concepts rather than detailed steps",
      "It includes precise projections",
      "It depends on specific tax rules",
      "It is a checklist of transactions",
    ],
    correct: "It focuses on concepts rather than detailed steps",
  },
  {
    q: "What does “opportunity cost” mean in planning language?",
    options: [
      "Choosing one option means giving up another",
      "A fee for using a service",
      "A bonus earned from saving",
      "A method of tracking spending",
    ],
    correct: "Choosing one option means giving up another",
  },
  {
    q: "In planning, “review cadence” most often refers to:",
    options: [
      "How often you revisit and update priorities",
      "How often you earn interest",
      "How often you get paid",
      "How often you invest money",
    ],
    correct: "How often you revisit and update priorities",
  },
  {
    q: "A “milestone” in a plan is best described as:",
    options: [
      "A checkpoint that indicates progress toward a goal",
      "A monthly bill",
      "A tax deduction",
      "A required account minimum",
    ],
    correct: "A checkpoint that indicates progress toward a goal",
  },
  {
    q: "What does “tradeoff across life stages” imply?",
    options: [
      "Priorities change as responsibilities change over time",
      "You should avoid saving until retirement",
      "Budgeting replaces planning",
      "Investing always comes before goals",
    ],
    correct: "Priorities change as responsibilities change over time",
  },
  {
    q: "If a goal is “well-defined,” it usually means:",
    options: [
      "It has a clear outcome and timeframe",
      "It guarantees success",
      "It requires no compromises",
      "It depends on returns",
    ],
    correct: "It has a clear outcome and timeframe",
  },
  {
    q: "In planning discussions, “clarity” most often means:",
    options: [
      "Knowing what matters and why",
      "Knowing the best interest rate",
      "Knowing exactly how markets will move",
      "Knowing all tax rules",
    ],
    correct: "Knowing what matters and why",
  },
  {
    q: "What does “prioritization over time” imply?",
    options: [
      "The order of goals can change as horizons change",
      "You should never change a plan",
      "Short-term goals always come last",
      "Planning is the same as budgeting",
    ],
    correct: "The order of goals can change as horizons change",
  },
  {
    q: "A “planning framework” is most accurately:",
    options: [
      "A conceptual way to organize goals and choices",
      "A specific product recommendation",
      "A calculation method for returns",
      "A rule for taxes",
    ],
    correct: "A conceptual way to organize goals and choices",
  },
] as const;
