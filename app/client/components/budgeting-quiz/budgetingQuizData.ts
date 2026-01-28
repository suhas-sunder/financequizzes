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
    q: "A budget shows a surplus, but the account balance still drops mid-month. Which concept best explains this mismatch?",
    options: [
      "Cash flow timing causing temporary gaps",
      "Category totals being calculated incorrectly",
      "Income being counted as discretionary funds",
      "Fixed expenses being treated as one-time",
    ],
    correct: "Cash flow timing causing temporary gaps",
  },
  {
    q: "You planned $300 for groceries, spent $260, then moved $40 to dining out. What term best describes that move?",
    options: [
      "A budget variance being recorded",
      "A category cap being increased",
      "A reallocation between planned categories",
      "A reconciliation of transaction records",
    ],
    correct: "A reallocation between planned categories",
  },
  {
    q: "A bill happens monthly but the amount changes each time. Which label is most accurate?",
    options: [
      "A fixed recurring expense",
      "A recurring variable expense",
      "A one-time discretionary expense",
      "An irregular income entry",
    ],
    correct: "A recurring variable expense",
  },
  {
    q: "A plan assigns money to categories only after each paycheck arrives, not at month start. Which framing fits best?",
    options: [
      "Baseline budgeting for comparisons",
      "Top-line budgeting with totals only",
      "Accrual budgeting for future liabilities",
      "Cash-on-hand budgeting as income lands",
    ],
    correct: "Cash-on-hand budgeting as income lands",
  },
  {
    q: "Which situation is most clearly a tradeoff rather than a variance?",
    options: [
      "Spending less than planned on utilities",
      "Choosing more rent means less saving",
      "A paycheck arriving later than expected",
      "A refund posting to the wrong category",
    ],
    correct: "Choosing more rent means less saving",
  },
  {
    q: "A category is funded each month for an annual fee due later. What is the category function called?",
    options: [
      "A sinking fund for a known future bill",
      "A cash buffer for timing uncertainty",
      "A windfall category for irregular money",
      "A catch-all category for uncategorized items",
    ],
    correct: "A sinking fund for a known future bill",
  },
  {
    q: "A budget lists rent, utilities, and insurance as amounts that rarely change. What constraint type is being emphasized?",
    options: [
      "Discretionary spending constraints",
      "Irregular income constraints",
      "Cash flow timing constraints",
      "Fixed expense constraints across periods",
    ],
    correct: "Fixed expense constraints across periods",
  },
  {
    q: "You compare planned spending to actual spending to see the difference per category. Which term names that difference?",
    options: [
      "A category total",
      "A cash buffer",
      "A variance amount",
      "A baseline budget",
    ],
    correct: "A variance amount",
  },
  {
    q: "A budget includes only total income and total expenses, with no category breakdown. What best describes that level?",
    options: [
      "A rolling budget format",
      "A top-line budget summary",
      "An envelope system structure",
      "A zero-based budget model",
    ],
    correct: "A top-line budget summary",
  },
  {
    q: "Which phrase most directly describes income after payroll deductions, not the headline salary?",
    options: [
      "Gross income received monthly",
      "Discretionary income after bills",
      "Net income after deductions",
      "Irregular income from side work",
    ],
    correct: "Net income after deductions",
  },
  {
    q: "A budget is built for January and then used as the reference for changes in February and March. What is that January plan called?",
    options: [
      "A baseline budget used as reference",
      "A rolling budget that never ends",
      "A catch-all category plan for extras",
      "A reconciliation report for transactions",
    ],
    correct: "A baseline budget used as reference",
  },
  {
    q: "A purchase is assigned partly to groceries and partly to household supplies. What budgeting action is being used?",
    options: [
      "True-up after the month ends",
      "Reconciliation against bank statements",
      "Splitting one transaction across categories",
      "Reallocating planned amounts before spending",
    ],
    correct: "Splitting one transaction across categories",
  },
  {
    q: "Which term best describes spending that is hard to avoid due to obligations or needs?",
    options: [
      "Discretionary spending",
      "Non-discretionary spending",
      "Irregular income",
      "One-time expense",
    ],
    correct: "Non-discretionary spending",
  },
  {
    q: "A plan assigns every dollar of expected income to a purpose so nothing is left unassigned. What framework is this?",
    options: [
      "An envelope system approach",
      "A rolling budget approach",
      "A zero-based budgeting approach",
      "A top-line budgeting approach",
    ],
    correct: "A zero-based budgeting approach",
  },
  {
    q: "A budget is updated each month by adding a new future month and dropping the past month. What is this called?",
    options: [
      "A fixed budget",
      "A rolling budget",
      "A one-time budget",
      "A baseline budget",
    ],
    correct: "A rolling budget",
  },
  {
    q: "Which phrasing best matches the meaning of a budgeting constraint?",
    options: [
      "A limit on what can be allocated or spent",
      "A method for increasing take-home pay",
      "A tactic for earning higher interest",
      "A system for tracking receipts faster",
    ],
    correct: "A limit on what can be allocated or spent",
  },
  {
    q: "A category is planned at $200, but spending ends at $240. Which status best describes the category result?",
    options: [
      "Under budget for the period",
      "Balanced with no variance",
      "Reconciled to the baseline",
      "Over budget for the period",
    ],
    correct: "Over budget for the period",
  },
  {
    q: "Which term best describes money currently available now, excluding future income that has not arrived yet?",
    options: [
      "Gross income for the year",
      "Cash-on-hand available now",
      "Category cap for the month",
      "Net income before expenses",
    ],
    correct: "Cash-on-hand available now",
  },
  {
    q: "A budget plan is set before spending happens, while a record is created after spending occurs. What is the record activity called?",
    options: [
      "Planning the month ahead",
      "Allocating by category caps",
      "Tracking what actually happened",
      "Reconciling future obligations",
    ],
    correct: "Tracking what actually happened",
  },
  {
    q: "A budget starts aligned, but months later the plan no longer matches reality because it was not revisited. What is this drift called?",
    options: [
      "Budget drift over time",
      "Cost creep in one purchase",
      "Windfall timing mismatch",
      "Category splitting error",
    ],
    correct: "Budget drift over time",
  },
  {
    q: "A series of small increases across several categories slowly raises monthly spending without one obvious jump. What term best fits?",
    options: [
      "A one-time expense event",
      "A shortfall from low income",
      "Cost creep across periods",
      "A rolling budget update",
    ],
    correct: "Cost creep across periods",
  },
  {
    q: "Which label best describes income that varies in both timing and amount between periods?",
    options: [
      "A fixed income stream",
      "A gross income estimate",
      "A net income forecast",
      "Irregular income between periods",
    ],
    correct: "Irregular income between periods",
  },
  {
    q: "You adjust allocations after the month ends so the plan reflects what actually happened. Which term best matches this action?",
    options: [
      "Setting a category cap",
      "Choosing a budget period",
      "Creating a baseline budget",
      "True-up to align with reality",
    ],
    correct: "True-up to align with reality",
  },
  {
    q: "Which pair is about scheduling rather than expense type or priority?",
    options: [
      "Recurring vs one-time",
      "Fixed vs variable",
      "Planning vs tracking",
      "Cash flow timing vs totals",
    ],
    correct: "Cash flow timing vs totals",
  },
  {
    q: "A category limit is set at $150, and spending beyond that would be considered outside the plan. What is that limit called?",
    options: [
      "A category total",
      "A category cap",
      "A cash buffer",
      "A shortfall",
    ],
    correct: "A category cap",
  },
  {
    q: "Which term best describes an unexpected or irregular chunk of money received?",
    options: [
      "A recurring expense entry",
      "A fixed cost increase",
      "A lumpy expense event",
      "A windfall of income",
    ],
    correct: "A windfall of income",
  },
  {
    q: "Spending is $80 less than planned in a category. Which status best describes that outcome?",
    options: [
      "Over budget for the category",
      "A shortfall in the category",
      "Under budget for the category",
      "A reallocation to the category",
    ],
    correct: "Under budget for the category",
  },
  {
    q: "A budget has enough money in total this month, but a required bill cannot be covered at its due date. What is this most like?",
    options: [
      "A planning error in categories",
      "A timing-driven shortfall event",
      "A surplus created by reallocation",
      "A fixed expense turning variable",
    ],
    correct: "A timing-driven shortfall event",
  },
  {
    q: "Which phrase best matches “making sure records match what actually occurred” in tracking language?",
    options: [
      "Rolling the budget forward monthly",
      "Allocating income across categories",
      "Splitting transactions by purpose",
      "Reconciling records to reality",
    ],
    correct: "Reconciling records to reality",
  },
  {
    q: "A budget period is monthly, but a quarterly bill is funded unevenly and hits as a larger charge. What term best describes that pattern?",
    options: [
      "A lumpy expense in uneven chunks",
      "A fixed expense paid smoothly",
      "A discretionary expense by choice",
      "A category cap that never changes",
    ],
    correct: "A lumpy expense in uneven chunks",
  },
  {
    q: "Which phrase best matches “a labeled bucket used to group similar spending or goals”?",
    options: [
      "A budget category label",
      "A line item entry",
      "A top-line total",
      "A variance amount",
    ],
    correct: "A budget category label",
  },
  {
    q: "A single entry like “Internet: $60” appears within a budget list. What is that entry most accurately called?",
    options: [
      "A payee label",
      "A line item entry",
      "A cash buffer",
      "A credit utilization",
    ],
    correct: "A line item entry",
  },
  {
    q: "A plan says $2,000 income and $2,000 allocated, leaving $0 unassigned. What does the $0 represent conceptually?",
    options: [
      "A shortfall in the budget",
      "A catch-all allocation",
      "A zero-based remainder",
      "A reconciliation adjustment",
    ],
    correct: "A zero-based remainder",
  },
  {
    q: "A budget shows money left over after expenses and allocations for the period. What is that remainder called?",
    options: [
      "A surplus remaining",
      "A variance mismatch",
      "A committed expense",
      "A lumpy transaction",
    ],
    correct: "A surplus remaining",
  },
  {
    q: "Which description best matches “spending you can choose to reduce, delay, or skip”?",
    options: [
      "Non-discretionary spending",
      "Discretionary spending",
      "Fixed expense spending",
      "Recurring expense spending",
    ],
    correct: "Discretionary spending",
  },
  {
    q: "A category exists mainly for items that do not fit cleanly into other categories. What is it commonly called?",
    options: [
      "A baseline category",
      "A rolling category",
      "A catch-all category",
      "A reconciled category",
    ],
    correct: "A catch-all category",
  },
  {
    q: "A budget compares planned amounts to actual results, then reports the differences by category. What is that comparison called?",
    options: [
      "Budget vs actual comparison",
      "Cash-on-hand reconciliation",
      "Envelope system allocation",
      "Gross vs net conversion",
    ],
    correct: "Budget vs actual comparison",
  },
  {
    q: "Your plan assumes a paycheck on the 1st, but it arrives on the 3rd. Which budgeting term most directly describes the issue?",
    options: [
      "A category total error",
      "A tradeoff across priorities",
      "A one-time expense spike",
      "Cash flow timing mismatch",
    ],
    correct: "Cash flow timing mismatch",
  },
  {
    q: "A budget keeps extra cash specifically to absorb minor surprises and timing gaps. What is that reserve called?",
    options: [
      "A variance reserve",
      "A cash buffer reserve",
      "A category cap reserve",
      "A baseline reserve",
    ],
    correct: "A cash buffer reserve",
  },
] as const;
