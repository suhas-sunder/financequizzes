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
    meaning:
      "Some familiarity, but inconsistent interpretation of key metrics.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid understanding of common business finance language.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning:
      "Strong recognition across margins, cash flow, and break-even concepts.",
  },
  {
    key: "10",
    label: "10 out of 10",
    meaning:
      "Excellent clarity on foundational business and corporate finance concepts.",
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
    q: "A company ships goods today but invoices next week. Under accrual accounting, what is the key recognition idea?",
    options: [
      "Revenue is recognized when value is delivered, not when cash moves",
      "Revenue is recognized only when the invoice is issued to the customer",
      "Revenue is recognized only when payment clears the bank account",
      "Revenue is recognized when inventory is purchased for future sales",
    ],
    correct:
      "Revenue is recognized when value is delivered, not when cash moves",
  },
  {
    q: "Monthly revenue is flat, but gross profit rises. Which explanation best matches that change?",
    options: [
      "Operating expenses fell while direct costs stayed unchanged",
      "More cash was collected from customers earlier than usual",
      "COGS per unit fell or mix shifted toward higher margin items",
      "Depreciation increased, lowering reported expenses in the period",
    ],
    correct: "COGS per unit fell or mix shifted toward higher margin items",
  },
  {
    q: "Which statement best captures the distinction between gross margin and operating margin?",
    options: [
      "Gross margin includes all operating expenses; operating margin excludes them",
      "Gross margin reflects direct costs; operating margin includes operating expenses too",
      "Gross margin equals net profit; operating margin equals cash flow from operations",
      "Gross margin is only for services; operating margin is only for product firms",
    ],
    correct:
      "Gross margin reflects direct costs; operating margin includes operating expenses too",
  },
  {
    q: "A firm is profitable on paper but frequently misses payroll. Which concept best explains the tension?",
    options: [
      "The business has unusually high net margins on each sale",
      "Operating leverage is low, so profits move slowly with sales",
      "Contribution margin is negative, so each unit reduces cash",
      "Cash flow timing differs from profit, often via working capital swings",
    ],
    correct:
      "Cash flow timing differs from profit, often via working capital swings",
  },
  {
    q: "Which item is most likely classified as a variable cost in many businesses?",
    options: [
      "A multi-year software contract paid annually in advance",
      "Per-unit fulfillment and shipping costs that rise with orders",
      "Office rent with a fixed monthly payment for the full lease",
      "A salaried finance team that remains stable across volume changes",
    ],
    correct: "Per-unit fulfillment and shipping costs that rise with orders",
  },
  {
    q: "A company’s net margin improves while gross margin stays the same. What is the cleanest interpretation?",
    options: [
      "Operating expenses fell relative to revenue, improving bottom-line results",
      "COGS increased relative to revenue, reducing unit-level profitability",
      "Cash collections accelerated while invoices issued stayed unchanged",
      "Working capital increased, pulling more cash into operations this period",
    ],
    correct:
      "Operating expenses fell relative to revenue, improving bottom-line results",
  },
  {
    q: "Which scenario most directly increases accounts receivable (AR), all else equal?",
    options: [
      "Suppliers are paid earlier than usual for the same purchases",
      "Customers renew subscriptions in cash before the service begins",
      "Customers are invoiced for delivered work, but have not paid yet",
      "The company pays down a line of credit using existing cash reserves",
    ],
    correct: "Customers are invoiced for delivered work, but have not paid yet",
  },
  {
    q: "A company’s current ratio rises, but nothing changed in long-term debt. What does that ratio shift imply?",
    options: [
      "The firm’s gross margin improved due to lower direct costs",
      "The firm’s operating leverage increased due to higher fixed costs",
      "The firm’s short-term liquidity improved relative to short-term obligations",
      "The firm’s net profit increased because cash collections accelerated",
    ],
    correct:
      "The firm’s short-term liquidity improved relative to short-term obligations",
  },
  {
    q: "Which statement best describes contribution margin in operational decision language?",
    options: [
      "Revenue left after operating expenses, used to pay interest and taxes",
      "Revenue left after all expenses, used to measure bottom-line profitability",
      "Revenue left after variable costs, used to cover fixed costs and profit",
      "Revenue left after depreciation, used to measure non-cash expense impact",
    ],
    correct:
      "Revenue left after variable costs, used to cover fixed costs and profit",
  },
  {
    q: "A business grows revenue, but net profit falls. Which explanation is most consistent?",
    options: [
      "Operating expenses or interest and taxes rose faster than revenue",
      "COGS fell faster than revenue, increasing gross profit each period",
      "Accounts receivable fell sharply, increasing cash flow from operations",
      "The current ratio rose, proving the company has improved profitability",
    ],
    correct:
      "Operating expenses or interest and taxes rose faster than revenue",
  },
  {
    q: "A firm reports “gross revenue” and “net revenue.” What does the gap usually represent?",
    options: [
      "Reductions like returns, allowances, or discounts from the sales figure",
      "The difference between cash received and invoices sent to customers",
      "Operating expenses that are not direct production or delivery costs",
      "The portion of sales funded by debt rather than equity financing",
    ],
    correct:
      "Reductions like returns, allowances, or discounts from the sales figure",
  },
  {
    q: "A company’s DSO increases while revenue is steady. What does that indicate conceptually?",
    options: [
      "Suppliers are being paid faster, reducing accounts payable balances",
      "Inventory is being sold faster, increasing inventory turnover rates",
      "Customers are taking longer to pay, slowing cash collection timing",
      "Gross margin is improving because unit-level direct costs are falling",
    ],
    correct:
      "Customers are taking longer to pay, slowing cash collection timing",
  },
  {
    q: "Which situation most directly increases operating leverage for a business?",
    options: [
      "Replacing fixed salaries with per-unit contractor costs tied to volume",
      "Switching from owned facilities to pay-per-use third-party fulfillment",
      "Cutting marketing spend so variable costs become a larger share of total",
      "Raising the share of fixed costs relative to variable costs in operations",
    ],
    correct:
      "Raising the share of fixed costs relative to variable costs in operations",
  },
  {
    q: "In a typical income statement framing, where does COGS sit conceptually?",
    options: [
      "Direct costs subtracted from revenue to arrive at gross profit",
      "Operating costs subtracted from EBIT to arrive at EBITDA",
      "Interest and taxes subtracted from net profit to arrive at revenue",
      "Cash payments subtracted from receivables to arrive at operating expenses",
    ],
    correct: "Direct costs subtracted from revenue to arrive at gross profit",
  },
  {
    q: "A firm’s gross margin percentage is flat, but gross profit dollars rise. What is most consistent with that?",
    options: [
      "Sales volume increased so gross profit dollars rose with revenue level",
      "Operating expenses rose so operating income grew while gross profit fell",
      "Taxes fell so net income rose while gross profit remained unchanged",
      "Receivables increased so cash flow rose even though gross profit fell",
    ],
    correct:
      "Sales volume increased so gross profit dollars rose with revenue level",
  },
  {
    q: "Which statement best matches what EBITDA is trying to represent conceptually?",
    options: [
      "Free cash flow after capital spending and working capital changes",
      "Operating performance before interest, taxes, and certain non-cash charges",
      "Total revenue after returns, discounts, and customer allowances",
      "Net profit after all expenses, including interest and taxes, are applied",
    ],
    correct:
      "Operating performance before interest, taxes, and certain non-cash charges",
  },
  {
    q: "A company’s inventory increases sharply, with no change in sales. What is the most direct balance-sheet implication?",
    options: [
      "More goods are held for sale or production that have not yet been sold",
      "More cash is held because customers paid earlier than the invoicing date",
      "More equity was issued to fund growth in operating expenses this quarter",
      "More accounts payable was paid down, increasing liabilities on the balance sheet",
    ],
    correct:
      "More goods are held for sale or production that have not yet been sold",
  },
  {
    q: "Which description best matches break-even point in business finance language?",
    options: [
      "The sales level where cash flow is always positive across all months",
      "The sales level where gross profit equals operating expenses and taxes",
      "The sales level where revenue equals total costs and profit is zero",
      "The sales level where revenue growth equals cost growth in percentage terms",
    ],
    correct:
      "The sales level where revenue equals total costs and profit is zero",
  },
  {
    q: "A company pays suppliers later on average, with other factors unchanged. Which metric concept does that most directly affect?",
    options: [
      "It lowers DSO by accelerating how fast customers pay outstanding invoices",
      "It increases DPO by extending how long payables remain outstanding",
      "It raises gross margin by reducing direct costs per unit sold",
      "It raises operating margin by reducing depreciation and amortization charges",
    ],
    correct:
      "It increases DPO by extending how long payables remain outstanding",
  },
  {
    q: "Which framing best matches working capital at a high level?",
    options: [
      "Long-term assets minus long-term liabilities used for multi-year planning",
      "Current assets minus current liabilities used for near-term operations",
      "Total revenue minus total expenses used to measure profitability",
      "Gross profit minus operating expenses used to measure operating income",
    ],
    correct:
      "Current assets minus current liabilities used for near-term operations",
  },
  {
    q: "A firm shows strong net profit but weak free cash flow. Which explanation is most plausible?",
    options: [
      "Gross margin fell while operating expenses fell by a smaller amount",
      "Working capital absorbed cash or capital spending increased materially",
      "Customers paid faster, reducing accounts receivable and raising cash",
      "Suppliers were paid later, increasing cash on hand despite stable profits",
    ],
    correct:
      "Working capital absorbed cash or capital spending increased materially",
  },
  {
    q: "A company’s unit price stays constant, but total revenue rises. Which driver best explains the increase?",
    options: [
      "Depreciation expense increased due to asset purchases this year",
      "Inventory rose because fewer products were sold during the quarter",
      "More units were sold, increasing total revenue at the same unit price",
      "Operating expenses rose, which directly increases recognized revenue",
    ],
    correct:
      "More units were sold, increasing total revenue at the same unit price",
  },
  {
    q: "Which description best matches operating expense (OpEx) in a business setting?",
    options: [
      "Costs of materials and labor that directly create each unit sold",
      "Costs to run the business that are not direct production costs",
      "Costs that are always tied to each unit produced or delivered",
      "Costs that represent long-lived asset purchases recorded immediately",
    ],
    correct: "Costs to run the business that are not direct production costs",
  },
  {
    q: "A business reports negative burn rate. In common startup language, what does that imply?",
    options: [
      "The company is consuming cash quickly and runway is shrinking",
      "The company is generating net cash and not consuming cash overall",
      "The company has rising depreciation and amortization each month",
      "The company has a declining current ratio and rising working capital needs",
    ],
    correct:
      "The company is generating net cash and not consuming cash overall",
  },
  {
    q: "Which interpretation best matches “run rate” in business reporting language?",
    options: [
      "A guaranteed annual result based on the latest month’s performance",
      "A count of how many customers are expected to churn each quarter",
      "An annualized projection based on current pace, not a guarantee",
      "An exact forecast of next year’s free cash flow after all investments",
    ],
    correct: "An annualized projection based on current pace, not a guarantee",
  },
  {
    q: "A firm improves pricing power without changing unit volume. Which outcome is most consistent?",
    options: [
      "Cash flow decreases because higher prices reduce invoice amounts",
      "Gross margin can rise if direct costs do not rise with price",
      "Operating leverage decreases because fixed costs become variable costs",
      "Current ratio falls because receivables are always paid faster at higher prices",
    ],
    correct: "Gross margin can rise if direct costs do not rise with price",
  },
  {
    q: "A company increases accounts payable while holding other items constant. What does that typically do to cash flow timing?",
    options: [
      "It tends to preserve cash by delaying cash outflows to suppliers",
      "It tends to reduce cash by accelerating payments to suppliers",
      "It tends to reduce cash by shrinking accounts receivable balances",
      "It tends to increase cash by raising recognized revenue immediately",
    ],
    correct: "It tends to preserve cash by delaying cash outflows to suppliers",
  },
  {
    q: "A firm’s gross margin falls even though prices are unchanged. Which change most directly explains that?",
    options: [
      "Variable costs per unit rose, increasing direct costs relative to revenue",
      "Operating expenses rose, increasing overhead relative to revenue",
      "Accounts receivable rose, delaying customer cash collections into next period",
      "Depreciation fell, reducing non-cash charges and boosting operating income",
    ],
    correct:
      "Variable costs per unit rose, increasing direct costs relative to revenue",
  },
  {
    q: "A company’s AR aging shows a larger share in older buckets. What does that most directly signal?",
    options: [
      "Customers are paying more quickly, improving cash collection timing",
      "The company reduced prices, lowering net revenue after allowances",
      "More receivables are outstanding longer, increasing collection risk",
      "The company increased CAPEX, reducing free cash flow availability",
    ],
    correct:
      "More receivables are outstanding longer, increasing collection risk",
  },
  {
    q: "Which statement best captures the concept of liquidity in business finance vocabulary?",
    options: [
      "The ability to cover long-term debt using future projected profits",
      "The ability to meet near-term obligations with near-term resources",
      "The ability to raise prices without losing demand in a competitive market",
      "The ability to increase margins by shifting from variable to fixed costs",
    ],
    correct:
      "The ability to meet near-term obligations with near-term resources",
  },
  {
    q: "A firm’s inventory turnover improves. What does that imply conceptually?",
    options: [
      "Inventory is being sold and replaced more quickly on average",
      "Inventory is building faster than sales, increasing goods held for sale",
      "Accounts payable is being paid more slowly, extending supplier payment timing",
      "Gross margin is falling because unit-level costs are rising with each order",
    ],
    correct: "Inventory is being sold and replaced more quickly on average",
  },
  {
    q: "Which statement best distinguishes CAPEX from OPEX in business finance language?",
    options: [
      "CAPEX always reduces profit immediately, while OPEX is capitalized over time",
      "CAPEX is long-lived asset spending; OPEX is ongoing operating costs",
      "CAPEX is direct cost of sales, while OPEX is revenue before discounts",
      "CAPEX is payroll and rent, while OPEX is inventory and receivables",
    ],
    correct:
      "CAPEX is long-lived asset spending; OPEX is ongoing operating costs",
  },
  {
    q: "A company’s CAC rises while LTV is unchanged. Which interpretation best fits that relationship?",
    options: [
      "Each customer becomes more valuable over time, improving profitability",
      "Customer payments arrive faster, improving working capital and liquidity",
      "Customer acquisition became more expensive, reducing unit-level economics",
      "COGS per unit fell, expanding gross margin and raising contribution margin",
    ],
    correct:
      "Customer acquisition became more expensive, reducing unit-level economics",
  },
  {
    q: "Revenue is steady, but cash from operations improves because AR declines. What is the cleanest explanation?",
    options: [
      "More cash was collected from prior invoices, reducing receivables balance",
      "Operating expenses fell, increasing EBIT and therefore increasing cash always",
      "COGS fell, increasing gross margin percentage and therefore increasing cash always",
      "Depreciation rose, which directly adds cash to the bank account each period",
    ],
    correct:
      "More cash was collected from prior invoices, reducing receivables balance",
  },
  {
    q: "Which statement best matches churn in a subscription business context?",
    options: [
      "A measure of how quickly the firm spends cash relative to its balance",
      "A measure of customers or revenue that stop renewing over a period",
      "A measure of the time it takes to collect on invoices after billing",
      "A measure of how much revenue remains after direct costs are removed",
    ],
    correct:
      "A measure of customers or revenue that stop renewing over a period",
  },
  {
    q: "A company has high operating leverage and sales drop modestly. Which outcome is most consistent?",
    options: [
      "Operating profit changes less than sales because fixed costs absorb the drop",
      "Operating profit can fall more sharply because fixed costs do not flex quickly",
      "Operating profit is unaffected because revenue recognition is based on accrual rules",
      "Operating profit rises because variable costs fall and fixed costs raise contribution",
    ],
    correct:
      "Operating profit can fall more sharply because fixed costs do not flex quickly",
  },
  {
    q: "Which statement best captures the difference between profit and cash flow in business settings?",
    options: [
      "Profit and cash flow always match because both track bank balances directly",
      "Profit excludes taxes, while cash flow includes taxes and therefore is smaller",
      "Profit is only for product firms, while cash flow is only for service firms",
      "Profit is accounting-based; cash flow reflects actual cash movement timing",
    ],
    correct:
      "Profit is accounting-based; cash flow reflects actual cash movement timing",
  },
  {
    q: "A company’s net revenue falls while gross revenue stays flat. Which driver best explains the change?",
    options: [
      "Operating expenses rose faster than revenue, reducing operating income",
      "Returns, discounts, or allowances increased, reducing recognized net revenue",
      "Depreciation increased, reducing EBITDA and therefore reducing net revenue",
      "Accounts payable fell, reducing cash flow and therefore reducing reported revenue",
    ],
    correct:
      "Returns, discounts, or allowances increased, reducing recognized net revenue",
  },
  {
    q: "A company’s runway shortens even though revenue grows. Which explanation best fits startup runway language?",
    options: [
      "Gross margin expanded, so burn rate fell and runway should lengthen",
      "Operating leverage decreased, which always increases runway automatically",
      "Net burn increased faster than cash inflows, reducing how long cash lasts",
      "Working capital turned negative, which always increases cash and runway",
    ],
    correct:
      "Net burn increased faster than cash inflows, reducing how long cash lasts",
  },
] as const;
