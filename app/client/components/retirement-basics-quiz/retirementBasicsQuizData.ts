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
    meaning:
      "Excellent conceptual clarity on retirement planning at a high level.",
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
    q: "At a high level, what is retirement planning trying to solve for?",
    options: [
      "Maintaining future living needs when earned income is reduced",
      "Maximizing short-term spending without any future constraints",
      "Predicting exact future expenses and returns with precision",
      "Avoiding uncertainty by eliminating all unexpected events",
    ],
    correct: "Maintaining future living needs when earned income is reduced",
  },
  {
    q: "Which statement best reflects what a long time horizon changes in retirement thinking?",
    options: [
      "It makes outcomes fully knowable if you plan early enough",
      "It makes timing irrelevant because needs stay constant",
      "It makes uncertainty accumulate and small differences compound",
      "It removes tradeoffs because time creates infinite resources",
    ],
    correct: "It makes uncertainty accumulate and small differences compound",
  },
  {
    q: "In retirement discussions, “longevity risk” most directly refers to:",
    options: [
      "The risk that prices rise faster than expected",
      "The risk that resources must last longer than planned",
      "The risk that a bank account balance is temporarily low",
      "The risk that a budget category is misclassified",
    ],
    correct: "The risk that resources must last longer than planned",
  },
  {
    q: "Which framing best captures why retirement planning cannot be only a one-time decision?",
    options: [
      "Because retirement goals are always identical across life stages",
      "Because retirement has no time horizon and no milestones",
      "Because once a plan exists, it cannot be revised without harm",
      "Because circumstances and priorities can change over time",
    ],
    correct: "Because circumstances and priorities can change over time",
  },
  {
    q: "Why is inflation often discussed as a retirement uncertainty even without calculations?",
    options: [
      "It guarantees wages will match costs in the future",
      "It only affects luxury items and not daily living needs",
      "It creates a one-time price change that never repeats",
      "It can erode what the same amount of money can buy",
    ],
    correct: "It can erode what the same amount of money can buy",
  },
  {
    q: "What does a “tradeoff” usually mean in retirement planning language?",
    options: [
      "A rule that guarantees a better outcome for everyone",
      "Choosing more for one priority reduces room for another",
      "A one-time cost that does not affect future choices",
      "A method for forecasting exact retirement expenses",
    ],
    correct: "Choosing more for one priority reduces room for another",
  },
  {
    q: "In retirement framing, what does “flexibility” most closely imply?",
    options: [
      "Having options if needs, timing, or constraints change",
      "Locking into one path so outcomes become certain",
      "Relying on a single assumption to simplify choices",
      "Ignoring milestones so the plan stays less complicated",
    ],
    correct: "Having options if needs, timing, or constraints change",
  },
  {
    q: "Which description best matches a “planning horizon” in retirement discussions?",
    options: [
      "A fixed return target that defines success",
      "A set of monthly categories for tracking expenses",
      "The span of time decisions are meant to cover",
      "The maximum amount of spending allowed each year",
    ],
    correct: "The span of time decisions are meant to cover",
  },
  {
    q: "When people say retirement planning is “goal-based,” they usually mean:",
    options: [
      "It avoids all uncertainty by fixing outcomes in advance",
      "It organizes choices around desired future outcomes",
      "It focuses only on current expenses and ignores later needs",
      "It replaces tradeoffs with a single universal rule",
    ],
    correct: "It organizes choices around desired future outcomes",
  },
  {
    q: "Which statement best describes what a “milestone” is in retirement planning?",
    options: [
      "A checkpoint used to judge progress toward an outcome",
      "A guarantee that future needs will be fully covered",
      "A list of all expenses for the current month",
      "A prediction about markets for the next year",
    ],
    correct: "A checkpoint used to judge progress toward an outcome",
  },
  {
    q: "What is the clearest meaning of “sequence risk” as a conceptual retirement idea?",
    options: [
      "The risk that prices move every day instead of monthly",
      "The risk that spending never changes across life stages",
      "The risk that taxes are higher than expected every year",
      "The risk that the order of outcomes matters over time",
    ],
    correct: "The risk that the order of outcomes matters over time",
  },
  {
    q: "In retirement language, what does “baseline” most directly refer to?",
    options: [
      "A target return that determines how much to spend",
      "A fixed plan that cannot be adjusted once written",
      "A starting reference point used to compare future changes",
      "A rule that makes tradeoffs disappear with time",
    ],
    correct: "A starting reference point used to compare future changes",
  },
  {
    q: "Which statement best separates planning from predicting in retirement contexts?",
    options: [
      "Planning sets intent and priorities despite uncertainty",
      "Planning guarantees exact future costs and outcomes",
      "Planning requires knowing the future in advance",
      "Planning works only if risks can be eliminated",
    ],
    correct: "Planning sets intent and priorities despite uncertainty",
  },
  {
    q: "What does “constraint” mean in retirement planning at a high level?",
    options: [
      "A benefit that increases automatically over time",
      "A limit that shapes what goals are feasible",
      "A guarantee that spending will be stable forever",
      "A prediction that expenses will never rise",
    ],
    correct: "A limit that shapes what goals are feasible",
  },
  {
    q: "Which option best captures why “time” is often treated as a planning variable?",
    options: [
      "Time makes outcomes certain if you start early enough",
      "Time removes the need to prioritize across goals",
      "Time changes what tradeoffs and risks are manageable",
      "Time guarantees that costs fall as you age",
    ],
    correct: "Time changes what tradeoffs and risks are manageable",
  },
  {
    q: "In retirement framing, what does “buffer” most closely mean?",
    options: [
      "A plan that relies on one best-case assumption",
      "A fixed budget that never changes across years",
      "A rule that prevents any unexpected expenses",
      "Extra room to absorb shocks without derailing intent",
    ],
    correct: "Extra room to absorb shocks without derailing intent",
  },
  {
    q: "What does “review cadence” imply in a retirement planning context?",
    options: [
      "How often you revisit assumptions and adjust the framing",
      "How often you predict markets with updated forecasts",
      "How often you switch goals to chase better outcomes",
      "How often you lock decisions so they cannot change",
    ],
    correct: "How often you revisit assumptions and adjust the framing",
  },
  {
    q: "Which statement best describes a “dependency” in retirement planning?",
    options: [
      "A recurring cost that repeats on a fixed schedule",
      "A time horizon that is always short and predictable",
      "An expense category that never changes with priorities",
      "One step or goal relies on another being true first",
    ],
    correct: "One step or goal relies on another being true first",
  },
  {
    q: "What does “purpose” most directly mean when describing a retirement plan?",
    options: [
      "The reason the goal exists and what it aims to support",
      "The specific account labels used to store savings",
      "The exact age a person plans to stop working",
      "The precise list of expenses for the next year",
    ],
    correct: "The reason the goal exists and what it aims to support",
  },
  {
    q: "Which description best matches “uncertainty” in retirement planning language?",
    options: [
      "Outcomes and needs can vary and are not fully predictable",
      "Outcomes can be fixed if you set a strict monthly budget",
      "Outcomes are random noise so goals do not matter",
      "Outcomes are known once you pick a single target number",
    ],
    correct: "Outcomes and needs can vary and are not fully predictable",
  },
  {
    q: "A plan described as “resilient” most directly means it can:",
    options: [
      "Avoid all shocks by ensuring nothing unexpected happens",
      "Prevent inflation entirely through correct framing choices",
      "Absorb setbacks and still stay aligned with intent",
      "Guarantee the same outcome regardless of circumstances",
    ],
    correct: "Absorb setbacks and still stay aligned with intent",
  },
  {
    q: "What does “retirement readiness” most commonly imply at a high level?",
    options: [
      "Having a forecast that proves the future with certainty",
      "Having no risk because all variables are controlled",
      "Having a plan that never needs to be revisited",
      "Having a foundation that can support needs and uncertainty",
    ],
    correct: "Having a foundation that can support needs and uncertainty",
  },
  {
    q: "In retirement planning, what does “alignment” most directly refer to?",
    options: [
      "Matching choices to goals and values across time",
      "Choosing the same spending level every month forever",
      "Ensuring results are identical to the initial plan",
      "Avoiding any changes in priorities across life stages",
    ],
    correct: "Matching choices to goals and values across time",
  },
  {
    q: "Which is the clearest example of a priority conflict in retirement framing?",
    options: [
      "Two goals compete for limited resources or timing",
      "A plan includes milestones to track progress",
      "A plan uses categories to label spending types",
      "A plan considers a long horizon for future needs",
    ],
    correct: "Two goals compete for limited resources or timing",
  },
  {
    q: "What does “time mismatch” mean in retirement planning language?",
    options: [
      "When planned spending is higher than planned income",
      "When needs arise before resources are available",
      "When goals are too vague to measure progress",
      "When a plan has too many categories to track",
    ],
    correct: "When needs arise before resources are available",
  },
  {
    q: "Which statement best reflects the idea of “opportunity cost” in retirement planning?",
    options: [
      "Paying for a need always reduces taxes automatically",
      "Saving later always increases flexibility immediately",
      "Choosing one path means giving up the next best option",
      "Planning removes the need to choose between priorities",
    ],
    correct: "Choosing one path means giving up the next best option",
  },
  {
    q: "What does “longevity” function as in retirement discussions most often?",
    options: [
      "A single fixed number that can be known in advance",
      "A source of uncertainty about how long resources must last",
      "A guarantee that expenses will fall in later life",
      "A rule that determines which accounts are allowed",
    ],
    correct: "A source of uncertainty about how long resources must last",
  },
  {
    q: "If a retirement plan is described as “front-loaded,” it usually implies:",
    options: [
      "More effort or resources are allocated earlier in the timeline",
      "All decisions are postponed until the final years",
      "Only short-term needs are considered and nothing else",
      "The plan ignores milestones and focuses on narratives",
    ],
    correct: "More effort or resources are allocated earlier in the timeline",
  },
  {
    q: "What does “commitment vs flexibility” tradeoff most directly describe?",
    options: [
      "Commitment can improve consistency but reduce ability to change quickly",
      "Flexibility guarantees better results so commitment is unnecessary",
      "Commitment removes uncertainty so flexibility is always harmful",
      "Flexibility and commitment are identical in long-horizon planning",
    ],
    correct:
      "Commitment can improve consistency but reduce ability to change quickly",
  },
  {
    q: "In retirement framing, what does “assumption” most closely mean?",
    options: [
      "A belief the plan depends on and may need updating",
      "A rule that stays true regardless of changing conditions",
      "A spending category that must be included in all plans",
      "A guarantee that outcomes will match the initial target",
    ],
    correct: "A belief the plan depends on and may need updating",
  },
  {
    q: "What does “tradeoff between certainty and upside” imply conceptually?",
    options: [
      "More certainty can reduce variability but may limit options",
      "More certainty always produces the best possible outcome",
      "More upside always means the plan becomes fully predictable",
      "Certainty and upside can both be maximized without limits",
    ],
    correct: "More certainty can reduce variability but may limit options",
  },
  {
    q: "What does “life stage” add to retirement planning discussions conceptually?",
    options: [
      "It explains how priorities and constraints shift over time",
      "It guarantees that goals will be the same for everyone",
      "It defines exact spending totals for each year of life",
      "It replaces uncertainty with a single universal framework",
    ],
    correct: "It explains how priorities and constraints shift over time",
  },
  {
    q: "What does “contingency” most closely refer to in retirement planning language?",
    options: [
      "A backup approach if circumstances or risks change",
      "A category used to track all monthly fixed expenses",
      "A forecast that must be accurate for the plan to work",
      "A rule that prevents any plan revisions once started",
    ],
    correct: "A backup approach if circumstances or risks change",
  },
  {
    q: "Which statement best captures why retirement planning emphasizes framing over precision?",
    options: [
      "Because long horizons make many inputs uncertain and shifting",
      "Because precision is always impossible for any money decision",
      "Because retirement planning depends on one universal rule",
      "Because exact prediction is easy once goals are written down",
    ],
    correct: "Because long horizons make many inputs uncertain and shifting",
  },
  {
    q: "What does “capacity” mean in retirement planning discussions most often?",
    options: [
      "How much room exists given obligations and constraints",
      "How fast expenses will fall after work ends",
      "How predictable market outcomes become with time",
      "How many categories a budget can contain at once",
    ],
    correct: "How much room exists given obligations and constraints",
  },
  {
    q: "What does “lock-in” most directly mean in retirement planning language?",
    options: [
      "A choice that is hard to reverse later, reducing options",
      "A choice that guarantees future costs will be lower",
      "A choice that eliminates uncertainty through strict rules",
      "A choice that makes priorities identical across life stages",
    ],
    correct: "A choice that is hard to reverse later, reducing options",
  },
  {
    q: "In retirement contexts, what does “purchasing power risk” most directly mean?",
    options: [
      "The risk that the same money buys less in the future",
      "The risk that income must increase every year by default",
      "The risk that budgets cannot be organized into categories",
      "The risk that goals become impossible without predictions",
    ],
    correct: "The risk that the same money buys less in the future",
  },
  {
    q: "What does it mean to “separate goals from tactics” in retirement framing?",
    options: [
      "Defining the outcome first, distinct from how to pursue it",
      "Choosing products first, then deciding what they should do",
      "Avoiding milestones so the plan stays abstract and simple",
      "Ignoring constraints because tactics can solve everything later",
    ],
    correct: "Defining the outcome first, distinct from how to pursue it",
  },
  {
    q: "Which statement best reflects why “tradeoffs” persist even with a long horizon?",
    options: [
      "A longer horizon increases resources without any limits",
      "A longer horizon means fewer choices must be made",
      "A longer horizon makes uncertainty disappear over time",
      "A longer horizon still has limits and competing priorities",
    ],
    correct: "A longer horizon still has limits and competing priorities",
  },
  {
    q: "In retirement planning, what does “course correction” most closely mean?",
    options: [
      "Repeating the same plan without changes year after year",
      "Changing goals constantly to avoid any tradeoffs",
      "Adjusting priorities or actions as new information appears",
      "Delaying decisions until the end to keep options open",
    ],
    correct: "Adjusting priorities or actions as new information appears",
  },
] as const;
