export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const RETIREMENT_BASICS_QUIZ_INTENT = {
  topicLabel: "Retirement Basics",
  roundSize: 10,
  formatLabel: "10-question challenge",
  focus:
    "High-level retirement concepts: purpose, time horizon, long-term framing, and tradeoffs. Timeless and non-instructional (no ages, limits, or country-specific systems).",
} as const;

export const RETIREMENT_BASICS_QUIZ_CATEGORIES = [
  {
    key: "purpose",
    label: "Purpose and meaning",
    whatItCovers:
      "What retirement planning represents conceptually and why it exists.",
  },
  {
    key: "time",
    label: "Time horizon",
    whatItCovers:
      "Long horizons and time as a planning variable (no calculations).",
  },
  {
    key: "tradeoffs",
    label: "Tradeoffs and priorities",
    whatItCovers:
      "Balancing today vs later, flexibility vs certainty, and competing goals.",
  },
  {
    key: "uncertainty",
    label: "Uncertainty language",
    whatItCovers:
      "Longevity and inflation as concepts, and uncertainty over long periods.",
  },
  {
    key: "framing",
    label: "Planning framing",
    whatItCovers:
      "Goals, milestones, and how retirement is framed across life stages.",
  },
] as const;

export const RETIREMENT_BASICS_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Early recognition, with gaps in core retirement concepts.",
  },
  {
    key: "4-5",
    label: "4–5 out of 10",
    meaning: "Some baseline familiarity, but inconsistent conceptual framing.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid grasp of most retirement basics and long-horizon framing.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning: "Strong recognition across purpose, horizons, and tradeoffs.",
  },
  {
    key: "10",
    label: "10 out of 10",
    meaning: "Excellent conceptual clarity on retirement planning at a high level.",
  },
] as const;

export const RETIREMENT_BASICS_FAQS: FAQItem[] = [
  {
    q: "What does this retirement basics quiz test?",
    a: "It tests recognition of high-level retirement concepts: purpose, long time horizons, planning framing, and common tradeoffs. It is about understanding, not execution.",
  },
  {
    q: "Does this quiz cover contribution limits, retirement ages, or country-specific rules?",
    a: "No. It intentionally avoids ages, limits, and system details so it stays timeless and widely applicable.",
  },
  {
    q: "Is this quiz instructional?",
    a: "No. It does not provide steps, tactics, or recommendations. It is a conceptual awareness check.",
  },
  {
    q: "How many questions are in the quiz?",
    a: "Each run is 10 questions, pulled from a larger bank so you can retake it for variety.",
  },
  {
    q: "How can I improve my score?",
    a: "Focus on intent and framing: what retirement planning is for, what long horizons imply, and what tradeoffs are being described. Reviewing basic definitions helps.",
  },
];

export const RETIREMENT_BASICS_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "At a high level, what is the main purpose of retirement planning?",
    options: [
      "To support future living needs when work income stops or declines",
      "To guarantee a specific investment return",
      "To avoid paying taxes entirely",
      "To predict exact future expenses",
    ],
    correct: "To support future living needs when work income stops or declines",
  },
  {
    q: "In retirement discussions, what does “time horizon” describe?",
    options: [
      "The span of time a retirement goal needs to cover",
      "A fixed interest rate",
      "A rule for choosing accounts",
      "A monthly budget category list",
    ],
    correct: "The span of time a retirement goal needs to cover",
  },
  {
    q: "What is “longevity risk” conceptually?",
    options: [
      "The risk of outliving your savings",
      "The risk of a bank account closing",
      "The risk of a late bill payment",
      "The risk of a credit inquiry",
    ],
    correct: "The risk of outliving your savings",
  },
  {
    q: "Why is inflation often mentioned in retirement contexts?",
    options: [
      "Because prices can rise over long periods, affecting future needs",
      "Because it guarantees higher returns",
      "Because it eliminates uncertainty",
      "Because it only affects mortgages",
    ],
    correct: "Because prices can rise over long periods, affecting future needs",
  },
  {
    q: "In a retirement framing, what does “tradeoff” usually mean?",
    options: [
      "Choosing more for today can reduce options for later",
      "Switching jobs automatically increases savings",
      "A guaranteed benefit from the government",
      "A fixed rule that applies to everyone",
    ],
    correct: "Choosing more for today can reduce options for later",
  },
  {
    q: "What does “retirement goal” most closely mean in plain language?",
    options: [
      "An outcome you want to support in the future",
      "A guaranteed return target",
      "A list of monthly bills",
      "A prediction about markets",
    ],
    correct: "An outcome you want to support in the future",
  },
  {
    q: "In retirement planning language, what does “flexibility” usually imply?",
    options: [
      "Having options if circumstances or priorities change",
      "Knowing exact future expenses",
      "Avoiding all uncertainty",
      "Guaranteeing a specific retirement age",
    ],
    correct: "Having options if circumstances or priorities change",
  },
  {
    q: "Why are “life stages” relevant to retirement planning conceptually?",
    options: [
      "Priorities and responsibilities can change over time",
      "Retirement plans must be the same for everyone",
      "Only investments matter, not goals",
      "They determine the stock market’s direction",
    ],
    correct: "Priorities and responsibilities can change over time",
  },
  {
    q: "In a long-term planning context, what does “milestone” mean?",
    options: [
      "A checkpoint that indicates progress toward a goal",
      "A monthly fee",
      "A tax refund",
      "A guaranteed benefit",
    ],
    correct: "A checkpoint that indicates progress toward a goal",
  },
  {
    q: "What does “planning” mean here in the most general sense?",
    options: [
      "Deciding what matters and aligning choices over time",
      "Picking the best stock every year",
      "Following a fixed rulebook with no changes",
      "Predicting exact costs and returns",
    ],
    correct: "Deciding what matters and aligning choices over time",
  },
  {
    q: "If a retirement plan is described as “non-instructional,” it means:",
    options: [
      "It explains concepts without telling you what actions to take",
      "It provides exact steps to follow",
      "It lists country-specific rules",
      "It recommends specific products",
    ],
    correct: "It explains concepts without telling you what actions to take",
  },
  {
    q: "What does “retirement readiness” usually imply at a high level?",
    options: [
      "Having a reasonable foundation for future needs and uncertainty",
      "Having a guaranteed outcome",
      "Having a perfect forecast",
      "Having the highest possible return",
    ],
    correct: "Having a reasonable foundation for future needs and uncertainty",
  },
  {
    q: "When people say retirement planning is “long-term,” they usually mean:",
    options: [
      "It spans many years and involves uncertainty",
      "It can be completed in a week",
      "It only applies to taxes",
      "It depends on one specific account type",
    ],
    correct: "It spans many years and involves uncertainty",
  },
  {
    q: "What does “sequence” imply in retirement planning language?",
    options: [
      "Ordering priorities or steps based on timing and constraints",
      "Choosing a stock ticker list",
      "Paying bills randomly",
      "Avoiding all tradeoffs",
    ],
    correct: "Ordering priorities or steps based on timing and constraints",
  },
  {
    q: "In concept terms, what does “retirement income” refer to?",
    options: [
      "Resources used to support living needs later in life",
      "A guaranteed salary paid forever",
      "A one-time gift",
      "A credit limit increase",
    ],
    correct: "Resources used to support living needs later in life",
  },
  {
    q: "What does “uncertainty” most often mean in retirement discussions?",
    options: [
      "Outcomes can vary over time and are not fully predictable",
      "All outcomes are known in advance",
      "The plan is guaranteed to fail",
      "Only spending matters, not time",
    ],
    correct: "Outcomes can vary over time and are not fully predictable",
  },
  {
    q: "What is “purpose” in retirement planning language?",
    options: [
      "The reason the goal exists and what it is meant to support",
      "A rule about contribution limits",
      "A guaranteed return rate",
      "A country-specific benefit",
    ],
    correct: "The reason the goal exists and what it is meant to support",
  },
  {
    q: "In retirement framing, what does “balance” usually refer to?",
    options: [
      "Aligning present needs with future goals",
      "Avoiding spending entirely",
      "Choosing only high-risk assets",
      "Picking a single retirement age",
    ],
    correct: "Aligning present needs with future goals",
  },
  {
    q: "What does “inflation risk” mean conceptually?",
    options: [
      "Your future spending power could shrink if prices rise",
      "Your income will definitely increase each year",
      "Your taxes will become zero",
      "Your savings can never decrease",
    ],
    correct: "Your future spending power could shrink if prices rise",
  },
  {
    q: "At a high level, what does “security” usually mean in retirement contexts?",
    options: [
      "Confidence you can support needs despite uncertainty",
      "A guarantee of maximum returns",
      "A specific account type",
      "A stock market prediction",
    ],
    correct: "Confidence you can support needs despite uncertainty",
  },
] as const;
