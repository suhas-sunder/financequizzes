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
    meaning:
      "Some baseline familiarity, but inconsistent interpretation of intent.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid understanding of most planning concepts and framing.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning:
      "Strong recognition across goals, horizons, and prioritization language.",
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
    q: "In planning language, what does a “time horizon” most directly describe?",
    options: [
      "The timeframe a goal or decision is meant to span",
      "The maximum return a plan can guarantee",
      "The monthly amount a plan must save",
      "The interest rate used for projections",
    ],
    correct: "The timeframe a goal or decision is meant to span",
  },
  {
    q: "A plan is “goal-based.” What does that usually mean conceptually?",
    options: [
      "It focuses on tracking every transaction precisely",
      "It is organized around specific outcomes to achieve",
      "It avoids priorities by treating goals equally",
      "It relies on a fixed set of spending rules",
    ],
    correct: "It is organized around specific outcomes to achieve",
  },
  {
    q: "In planning discussions, what does “success criteria” most closely refer to?",
    options: [
      "A list of tasks you completed this month",
      "The specific conditions that define completion",
      "The interest rate assumptions behind the plan",
      "A schedule for reviewing bank statements",
    ],
    correct: "The specific conditions that define completion",
  },
  {
    q: "A plan mentions a “time mismatch.” What does that describe?",
    options: [
      "When expenses rise faster than expected",
      "When priorities change between months",
      "When a goal becomes less important",
      "When needs arrive before resources are available",
    ],
    correct: "When needs arrive before resources are available",
  },
  {
    q: "A plan says a goal is “deferred.” What does that typically imply?",
    options: [
      "It is automatically completed without action",
      "It is intentionally pushed to a later time",
      "It is replaced by a monthly recurring expense",
      "It is converted into a fixed obligation",
    ],
    correct: "It is intentionally pushed to a later time",
  },
  {
    q: "In planning language, what does “front-loading” most closely mean?",
    options: [
      "Delaying the hardest steps until the end",
      "Placing more resources earlier to reduce pressure later",
      "Splitting one goal evenly across all periods",
      "Avoiding tradeoffs by expanding the scope",
    ],
    correct: "Placing more resources earlier to reduce pressure later",
  },
  {
    q: "What does “baseline” mean in a planning context?",
    options: [
      "A starting reference point for comparisons",
      "A guaranteed minimum outcome for goals",
      "A tax-driven strategy for long horizons",
      "A tool for picking investment products",
    ],
    correct: "A starting reference point for comparisons",
  },
  {
    q: "In planning language, what does “scope” most directly describe?",
    options: [
      "The rate used to discount future values",
      "The priority order of all goals",
      "What the plan includes and excludes",
      "The size of an emergency reserve",
    ],
    correct: "What the plan includes and excludes",
  },
  {
    q: "In a plan, what does “prioritization” most directly mean?",
    options: [
      "Deciding what matters most when resources are limited",
      "Choosing the highest income option in all cases",
      "Tracking categories with perfect precision",
      "Optimizing returns regardless of constraints",
    ],
    correct: "Deciding what matters most when resources are limited",
  },
  {
    q: "What does “sequencing” imply in planning discussions?",
    options: [
      "Choosing a fixed rule and never changing it",
      "Separating goals into spending categories",
      "Estimating returns over a longer time horizon",
      "Ordering steps based on timing and dependencies",
    ],
    correct: "Ordering steps based on timing and dependencies",
  },
  {
    q: "A plan mentions a “dependency.” What does that usually mean?",
    options: [
      "A monthly bill that repeats on schedule",
      "One step relies on another being done first",
      "A goal that cannot be measured over time",
      "A plan that requires an external provider",
    ],
    correct: "One step relies on another being done first",
  },
  {
    q: "A plan describes a “priority conflict.” What is the cleanest interpretation?",
    options: [
      "A market change reduced expected returns",
      "A budget category was renamed incorrectly",
      "A lender changed the payment schedule",
      "Two goals compete for the same limited capacity",
    ],
    correct: "Two goals compete for the same limited capacity",
  },
  {
    q: "In planning language, what does “triage” most closely imply?",
    options: [
      "Grouping tasks by preference only",
      "Forecasting outcomes using strict rules",
      "Handling the most urgent needs first",
      "Avoiding all commitments until later",
    ],
    correct: "Handling the most urgent needs first",
  },
  {
    q: "What does “constraint” mean in a planning context?",
    options: [
      "A feature that increases returns over time",
      "A limit that affects what is possible",
      "A way to track performance month to month",
      "A method for reducing uncertainty to zero",
    ],
    correct: "A limit that affects what is possible",
  },
  {
    q: "In planning discussions, what does “tradeoff” most often capture?",
    options: [
      "Switching accounts to reduce fees",
      "Increasing income without changing priorities",
      "Choosing one path reduces capacity for another",
      "Finding a strategy that avoids all compromise",
    ],
    correct: "Choosing one path reduces capacity for another",
  },
  {
    q: "What does “opportunity cost” mean in planning language?",
    options: [
      "A fee charged for a financial service",
      "The interest lost by not investing sooner",
      "A tax amount withheld from earnings",
      "The next best alternative you give up",
    ],
    correct: "The next best alternative you give up",
  },
  {
    q: "In planning language, what does “bandwidth” most closely refer to?",
    options: [
      "A bank limit on transfers per day",
      "A credit score range used by lenders",
      "Capacity to manage complexity and demands",
      "A yearly raise assumed in projections",
    ],
    correct: "Capacity to manage complexity and demands",
  },
  {
    q: "What does “risk tolerance” mean in a high-level planning conversation?",
    options: [
      "The maximum rate a plan can earn",
      "The ability to eliminate uncertainty",
      "A requirement to accept losses always",
      "Willingness to accept uncertainty for a goal",
    ],
    correct: "Willingness to accept uncertainty for a goal",
  },
  {
    q: "What does “resilience” most closely mean in planning language?",
    options: [
      "Ability to absorb shocks and stay aligned",
      "Ability to predict outcomes with precision",
      "Ability to avoid every expense category",
      "Ability to guarantee a result by planning",
    ],
    correct: "Ability to absorb shocks and stay aligned",
  },
  {
    q: "In planning discussions, what does “contingency” most directly refer to?",
    options: [
      "A fixed goal that never changes",
      "A rule that removes tradeoffs entirely",
      "A backup approach if conditions change",
      "A schedule for monthly tracking tasks",
    ],
    correct: "A backup approach if conditions change",
  },
  {
    q: "What does “lock-in” most closely imply in planning language?",
    options: [
      "A bonus received for early commitment",
      "A reduced ability to change course later",
      "A plan that is always short-term focused",
      "A plan that requires no maintenance",
    ],
    correct: "A reduced ability to change course later",
  },
  {
    q: "In planning, what does a “milestone” usually represent?",
    options: [
      "A checkpoint that signals progress",
      "A recurring cost you must pay",
      "A penalty for missing a target",
      "A rule that fixes priorities forever",
    ],
    correct: "A checkpoint that signals progress",
  },
  {
    q: "A plan emphasizes “alignment.” What does that most directly refer to?",
    options: [
      "Matching decisions to goals and values over time",
      "Keeping the same plan regardless of outcomes",
      "Optimizing for one metric in every scenario",
      "Tracking every purchase in real time",
    ],
    correct: "Matching decisions to goals and values over time",
  },
  {
    q: "In planning language, what does “intent” most closely mean?",
    options: [
      "A fixed monthly obligation",
      "A rule for selecting accounts",
      "The purpose a decision is trying to accomplish",
      "The interest rate used for long-term goals",
    ],
    correct: "The purpose a decision is trying to accomplish",
  },
  {
    q: "What does “planning horizon” most closely mean?",
    options: [
      "The span of time considered in decisions",
      "The maximum amount you can borrow",
      "The size of a yearly tax refund",
      "The amount you must save monthly",
    ],
    correct: "The span of time considered in decisions",
  },
  {
    q: "A plan describes a “short-term horizon.” What is the best match?",
    options: [
      "A timeframe measured in months where flexibility matters",
      "A timeframe measured in decades with stable priorities",
      "A timeframe that guarantees a specific outcome",
      "A timeframe that ignores current obligations",
    ],
    correct: "A timeframe measured in months where flexibility matters",
  },
  {
    q: "A plan describes a “long-term horizon.” What is the best match?",
    options: [
      "A timeframe measured in years with sustained choices",
      "A timeframe limited to the next pay cycle",
      "A timeframe where constraints do not apply",
      "A timeframe identical to a monthly budget",
    ],
    correct: "A timeframe measured in years with sustained choices",
  },
  {
    q: "A plan says it is “goal-based.” What is the cleanest interpretation?",
    options: [
      "It uses a strict rule that never changes",
      "It tracks transactions without any priorities",
      "It ties actions to outcomes you want to reach",
      "It focuses only on short-term comfort",
    ],
    correct: "It ties actions to outcomes you want to reach",
  },
  {
    q: "A plan says the goal is “well-defined.” What does that usually mean?",
    options: [
      "It has a clear outcome and timeframe",
      "It is guaranteed by an institution",
      "It depends on a single perfect forecast",
      "It avoids tradeoffs by design",
    ],
    correct: "It has a clear outcome and timeframe",
  },
  {
    q: "What does “review cadence” most often refer to in planning language?",
    options: [
      "How often you revisit assumptions and priorities",
      "How often you earn interest on savings",
      "How often you receive a paycheck",
      "How often you change tax withholding",
    ],
    correct: "How often you revisit assumptions and priorities",
  },
  {
    q: "What does “course correction” most closely mean in planning discussions?",
    options: [
      "Switching accounts to get a sign-up bonus",
      "Changing actions after results or information changes",
      "Ignoring outcomes to avoid overreacting",
      "Doubling down on the original plan always",
    ],
    correct: "Changing actions after results or information changes",
  },
  {
    q: "In planning, what is an “assumption” most directly?",
    options: [
      "A belief the plan depends on that may change",
      "A guaranteed rule that must stay fixed",
      "A category used for tracking expenses",
      "A product choice made for tax benefits",
    ],
    correct: "A belief the plan depends on that may change",
  },
  {
    q: "In planning language, what does “uncertainty” most directly imply?",
    options: [
      "Outcomes are not fully known, so flexibility matters",
      "A guaranteed negative outcome for the plan",
      "A fixed expense that cannot be reduced",
      "A rule that eliminates the need to review",
    ],
    correct: "Outcomes are not fully known, so flexibility matters",
  },
  {
    q: "If a plan is described as “abstract,” what does that usually mean?",
    options: [
      "It focuses on framing rather than step-by-step actions",
      "It provides detailed instructions for each decision",
      "It depends on strict calculation rules for accuracy",
      "It is a checklist of transactions to complete",
    ],
    correct: "It focuses on framing rather than step-by-step actions",
  },
  {
    q: "What does “planning framework” most accurately mean?",
    options: [
      "A conceptual structure for consistent decisions",
      "A method for maximizing returns each year",
      "A rule for choosing a single best option",
      "A schedule for paying recurring bills",
    ],
    correct: "A conceptual structure for consistent decisions",
  },
  {
    q: "In planning conversations, what does “clarity” most often mean?",
    options: [
      "Knowing what matters and what tradeoffs you accept",
      "Knowing the best account rate in the market",
      "Knowing exactly how outcomes will unfold",
      "Knowing every rule that could apply",
    ],
    correct: "Knowing what matters and what tradeoffs you accept",
  },
  {
    q: "In life-stage planning, what does “life stage” most directly refer to?",
    options: [
      "A phase that shifts priorities and responsibilities",
      "A method for choosing investments by age",
      "A label for a fixed monthly budget period",
      "A category used only for retirement goals",
    ],
    correct: "A phase that shifts priorities and responsibilities",
  },
  {
    q: "In planning language, what does “transition” most directly imply?",
    options: [
      "A change that reshapes priorities and constraints",
      "A guarantee that income will increase",
      "A market event that forces new taxes",
      "A process that removes uncertainty",
    ],
    correct: "A change that reshapes priorities and constraints",
  },
  {
    q: "In life-stage planning, what does a “role change” most closely mean?",
    options: [
      "New responsibilities that shift what must be prioritized",
      "A new bank account that changes fee tiers",
      "A new investment strategy that reduces volatility",
      "A new tax bracket that changes withholding",
    ],
    correct: "New responsibilities that shift what must be prioritized",
  },
  {
    q: "In planning language, what does “stability phase” most closely mean?",
    options: [
      "A period with relatively consistent priorities",
      "A period where nothing can go wrong",
      "A period where goals are unnecessary",
      "A period where plans cannot be changed",
    ],
    correct: "A period with relatively consistent priorities",
  },
] as const;
