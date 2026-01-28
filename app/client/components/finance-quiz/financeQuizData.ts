export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const FINANCE_QUIZ_INTENT = {
  topicLabel: "Finance",
  roundSize: 10,
  formatLabel: "10-question challenge",
  focus:
    "Broad financial language across everyday money decisions, banking, credit, saving, investing, and planning.",
} as const;

export const FINANCE_QUIZ_CATEGORIES = [
  {
    key: "everyday",
    label: "Everyday money language",
    whatItCovers:
      "Budgeting terms, cash flow vocabulary, and common account-level concepts.",
  },
  {
    key: "credit_borrowing",
    label: "Credit and borrowing concepts",
    whatItCovers:
      "Basic credit vocabulary, loan language, and how borrowing costs are described.",
  },
  {
    key: "saving_investing",
    label: "Saving and investing basics",
    whatItCovers:
      "Risk vs return language, diversification, and common investing account terms.",
  },
  {
    key: "planning_protection",
    label: "Planning and financial protection",
    whatItCovers:
      "Insurance terminology, retirement account language, and long-horizon planning terms.",
  },
  {
    key: "taxes_fees",
    label: "Taxes, fees, and transaction details",
    whatItCovers:
      "Withholding and tax terms, fees, and words that change total costs or proceeds.",
  },
] as const;

export const FINANCE_QUIZ_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Early recognition, with gaps across the wider vocabulary.",
  },
  {
    key: "4-5",
    label: "4–5 out of 10",
    meaning:
      "Some baseline familiarity, with mixed consistency across domains.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid breadth across common terms and scenarios.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning: "Strong general finance language recognition.",
  },
  { key: "10", label: "10 out of 10", meaning: "Perfect run." },
] as const;

export const FINANCE_FAQS: FAQItem[] = [
  {
    q: "How is the quiz scored?",
    a: "Each set is 10 questions. Your score is the number you answer correctly out of 10.",
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
    a: "No. It’s a general finance knowledge check and does not provide recommendations or guidance.",
  },
];

// Question bank: intentionally broad scope, conceptual, and vocabulary-driven.
export const FINANCE_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "A bank app shows a higher “available balance” than “current balance” right after a deposit. What is the most direct meaning?",
    options: [
      "Some holds reduced the posted balance but not availability",
      "Some funds are available before the deposit fully posts",
      "Some interest was added to available balance only",
      "Some overdraft protection increased the current balance",
    ],
    correct: "Some funds are available before the deposit fully posts",
  },
  {
    q: "A card purchase is refunded, but the statement balance does not change yet. What is the cleanest explanation?",
    options: [
      "The refund was denied due to credit utilization rules",
      "The refund reduced principal but not interest charges",
      "The refund reversed only the authorization hold",
      "The refund is pending and not posted to the cycle yet",
    ],
    correct: "The refund is pending and not posted to the cycle yet",
  },
  {
    q: "Two people have the same net worth, but one has far more liquid assets. What difference does liquidity capture?",
    options: [
      "How quickly assets can become spendable cash",
      "How much interest those assets will earn",
      "How risky the assets are in any scenario",
      "How much tax is withheld from income",
    ],
    correct: "How quickly assets can become spendable cash",
  },
  {
    q: "A loan ad lists a low APR, but the borrower’s total cost still depends on time. Which concept explains why?",
    options: [
      "Deductible reduces costs only after a claim",
      "Liquidity changes how quickly cash converts",
      "Principal can change without affecting payments",
      "Interest cost depends on balance and time outstanding",
    ],
    correct: "Interest cost depends on balance and time outstanding",
  },
  {
    q: "A person’s paycheck withholding increases, but their actual total tax owed for the year may not. What is withholding best described as?",
    options: [
      "Prepaid taxes sent during the year",
      "A direct reduction of taxable income",
      "A permanent fee for earning income",
      "A tax credit applied to the final bill",
    ],
    correct: "Prepaid taxes sent during the year",
  },
  {
    q: "A savings account and a loan both quote the same nominal rate, but one grows faster due to compounding. Which term captures that effect?",
    options: [
      "Liquidity adjustment",
      "Principal amortization",
      "APY accounts for compounding",
      "A tax bracket shift on interest",
    ],
    correct: "APY accounts for compounding",
  },
  {
    q: "A borrower makes the required payment each month, yet the loan balance drops slowly at first. Which concept best explains this pattern?",
    options: [
      "Diversification spreads risk across holdings",
      "Credit limit determines maximum borrowing",
      "Collateral reduces interest rate automatically",
      "Amortization allocates more interest early on",
    ],
    correct: "Amortization allocates more interest early on",
  },
  {
    q: "A card statement closes on the 20th, and a purchase on the 21st is not included. Which term names the balance on the closing date?",
    options: [
      "Available credit",
      "Statement balance",
      "Minimum payment",
      "Current balance",
    ],
    correct: "Statement balance",
  },
  {
    q: "An investor earns 6% but inflation is 4% over the same period. What does the investor’s real return describe?",
    options: [
      "Return before any fees are paid",
      "Return measured only in cash income",
      "Return adjusted for inflation’s effect",
      "Return guaranteed by the issuer",
    ],
    correct: "Return adjusted for inflation’s effect",
  },
  {
    q: "An asset can be sold quickly, but only at a steep discount during stressed markets. What does this most directly challenge?",
    options: [
      "Tax withholding accuracy",
      "Diversification across sectors",
      "Credit score calculation rules",
      "Liquidity with minimal loss of value",
    ],
    correct: "Liquidity with minimal loss of value",
  },
  {
    q: "A borrower with a strong payment history is still charged a higher rate due to higher risk of nonpayment. Which term best matches that risk?",
    options: [
      "Default risk",
      "Reinvestment risk",
      "Liquidity risk",
      "Duration risk",
    ],
    correct: "Default risk",
  },
  {
    q: "A company’s stock price rises, but the investor does not sell. Which term describes the gain only when sold?",
    options: [
      "Dividend income",
      "Real return change",
      "Capital gain realized on sale",
      "Expense ratio charge",
    ],
    correct: "Capital gain realized on sale",
  },
  {
    q: "A borrower pledges an asset that a lender can claim if repayments fail. What is that pledged asset called?",
    options: [
      "A deductible",
      "A premium",
      "A credit limit",
      "Collateral for the loan",
    ],
    correct: "Collateral for the loan",
  },
  {
    q: "A fund shows strong returns, but investors keep less due to ongoing charges. Which term names those ongoing annual fees?",
    options: [
      "Dividend yield",
      "Expense ratio",
      "Capital gain",
      "Market capitalization",
    ],
    correct: "Expense ratio",
  },
  {
    q: "A bank transfer is marked “posted,” not “pending.” What does posted mean in transaction language?",
    options: [
      "It is scheduled but may still change",
      "It is authorized but not recorded yet",
      "It is finalized and recorded on the account",
      "It is disputed and under investigation",
    ],
    correct: "It is finalized and recorded on the account",
  },
  {
    q: "A business owner tracks assets and liabilities to compute a single snapshot measure. Which term is defined as assets minus liabilities?",
    options: [
      "Net worth",
      "Cash flow",
      "Liquidity",
      "Principal",
    ],
    correct: "Net worth",
  },
  {
    q: "A household builds savings for a known annual bill rather than unexpected emergencies. Which term best fits that purpose?",
    options: [
      "Sinking fund",
      "Emergency fund",
      "Dividend",
      "Withholding",
    ],
    correct: "Sinking fund",
  },
  {
    q: "An insurance plan requires the policyholder to pay an amount before coverage pays. What is that amount called?",
    options: [
      "Premium",
      "Principal",
      "Dividend",
      "Deductible",
    ],
    correct: "Deductible",
  },
  {
    q: "A borrower repays only the original borrowed amount, excluding interest and fees. Which loan component is being repaid?",
    options: [
      "Credit limit",
      "Principal",
      "Deductible",
      "Premium",
    ],
    correct: "Principal",
  },
  {
    q: "A person has positive cash flow but rising debt. Which statement best separates cash flow from net worth?",
    options: [
      "Cash flow is a balance-sheet snapshot measure",
      "Net worth is only about bank accounts",
      "Cash flow is income minus expenses over time",
      "Net worth ignores liabilities by definition",
    ],
    correct: "Cash flow is income minus expenses over time",
  },
  {
    q: "A brokerage account’s holdings are spread across many companies to reduce concentration in any one. Which term best describes this?",
    options: [
      "Leverage",
      "Diversification",
      "Inflation",
      "Default",
    ],
    correct: "Diversification",
  },
  {
    q: "A card shows a “pending” charge that reduces available funds but can change or disappear. What is that pending item typically called?",
    options: [
      "A tax credit",
      "An authorization hold",
      "A posted transaction",
      "A principal adjustment",
    ],
    correct: "An authorization hold",
  },
  {
    q: "A borrower misses required payments long enough to violate the agreement terms. What is that event most commonly called?",
    options: [
      "A deduction",
      "A withholding",
      "A refund",
      "A default",
    ],
    correct: "A default",
  },
  {
    q: "A company’s share price and shares outstanding are used to compute a value measure. What does that measure describe?",
    options: [
      "Assets minus liabilities",
      "Market capitalization of equity",
      "Cash flow for the period",
      "Liquidity of the stock",
    ],
    correct: "Market capitalization of equity",
  },
  {
    q: "A taxpayer moves into a higher bracket, but not all income is taxed at the higher rate. What does a tax bracket describe?",
    options: [
      "A range taxed at a particular rate",
      "Total tax paid in dollars always",
      "A refund amount guaranteed yearly",
      "A fee charged by the bank",
    ],
    correct: "A range taxed at a particular rate",
  },
  {
    q: "A bond’s price changes when market interest rates change, even if the issuer stays healthy. Which risk term best matches this?",
    options: [
      "Default risk",
      "Liquidity risk",
      "Interest rate risk",
      "Tax risk",
    ],
    correct: "Interest rate risk",
  },
  {
    q: "An investor borrows from a broker to buy investments and pays a fee for using that borrowed money. What is that cost called?",
    options: [
      "Margin interest",
      "Dividend yield",
      "Tax withholding",
      "Insurance premium",
    ],
    correct: "Margin interest",
  },
  {
    q: "A card’s credit limit stays constant, but the “available credit” changes daily. What is available credit most directly tied to?",
    options: [
      "Posted and pending balances against the limit",
      "Your tax bracket and withholding rate",
      "The issuer’s expense ratio and yield",
      "Your deductible and coverage limits",
    ],
    correct: "Posted and pending balances against the limit",
  },
  {
    q: "A person buys an asset using borrowed funds, increasing both gains and losses. What broad finance term describes this setup?",
    options: [
      "Amortization",
      "Withholding",
      "Diversification",
      "Leverage",
    ],
    correct: "Leverage",
  },
  {
    q: "A fund tracks a market index by holding a basket designed to match it. What type of fund is this described as?",
    options: [
      "Index fund",
      "Money market fund",
      "Guaranteed income fund",
      "Single-stock holding",
    ],
    correct: "Index fund",
  },
  {
    q: "A paycheck is higher, but taxes rise and a benefit disappears, leaving little net change. Which concept best frames the lost benefit?",
    options: [
      "Credit utilization effect",
      "Opportunity cost of time",
      "Marginal change in net outcome",
      "Diversification across accounts",
    ],
    correct: "Marginal change in net outcome",
  },
  {
    q: "A bank account balance is positive, but most of it is tied up in long-term certificates. Which concept is being constrained?",
    options: [
      "Tax withholding",
      "Interest compounding",
      "Net worth growth",
      "Liquidity of the assets",
    ],
    correct: "Liquidity of the assets",
  },
  {
    q: "A loan’s interest rate is unchanged, but total interest paid rises when repayment takes longer. What is the key driver?",
    options: [
      "More time with a positive balance outstanding",
      "A higher credit limit on revolving lines",
      "A higher deductible on insurance policies",
      "A higher expense ratio on investments",
    ],
    correct: "More time with a positive balance outstanding",
  },
  {
    q: "A pay stub shows a deduction that reduces taxable income, not the final tax owed directly. What is this most commonly called?",
    options: [
      "A tax credit",
      "A service fee",
      "A tax deduction",
      "A posted transaction",
    ],
    correct: "A tax deduction",
  },
  {
    q: "A tax rule reduces the final tax owed dollar-for-dollar rather than reducing taxable income. Which term best matches this?",
    options: [
      "A deduction",
      "A tax credit",
      "A withholding",
      "A premium",
    ],
    correct: "A tax credit",
  },
  {
    q: "An insurance policy states the insurer will not pay above a stated maximum for a claim. What does that maximum represent?",
    options: [
      "Coverage limit",
      "Deductible",
      "Premium",
      "Principal",
    ],
    correct: "Coverage limit",
  },
  {
    q: "Two investments have the same expected return, but one fluctuates much more. Which term describes that fluctuation level?",
    options: [
      "Liquidity",
      "Volatility",
      "Principal",
      "Withholding",
    ],
    correct: "Volatility",
  },
  {
    q: "A cardholder sees a fee each month for keeping an account open, independent of purchases. What is this most accurately called?",
    options: [
      "A dividend payment",
      "A tax credit",
      "A principal charge",
      "A service fee",
    ],
    correct: "A service fee",
  },
  {
    q: "A person lists assets and liabilities, and wants the portion not financed by debt. Which term best matches that portion?",
    options: [
      "Equity",
      "APR",
      "COGS",
      "Premium",
    ],
    correct: "Equity",
  },
  {
    q: "A fund advertises a “yield” number. In broad investing language, what does yield most commonly mean?",
    options: [
      "A return measure expressed as a percentage",
      "A guaranteed profit for the next year",
      "A tax bracket applied to dividends",
      "A loan payment that reduces principal",
    ],
    correct: "A return measure expressed as a percentage",
  },
] as const;

