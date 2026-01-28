export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const BANKING_AND_CREDIT_QUIZ_INTENT = {
  topicLabel: "Banking and Credit",
  roundSize: 10,
  formatLabel: "10-question challenge",
  focus:
    "Foundational banking and credit language: account types, statements, everyday usage terms, and basic interest concepts. Conceptual only (no comparisons or recommendations).",
} as const;

export const BANKING_AND_CREDIT_QUIZ_CATEGORIES = [
  {
    key: "accounts",
    label: "Account types and functions",
    whatItCovers:
      "Checking vs savings as concepts, deposits, withdrawals, and basic account purpose.",
  },
  {
    key: "statements",
    label: "Statements and balances",
    whatItCovers:
      "Available vs current vs statement balances, transactions, holds, and timing language.",
  },
  {
    key: "interest",
    label: "Interest and time-based charges",
    whatItCovers:
      "Interest as a concept, rate vs amount, and time-based meaning (no optimization).",
  },
  {
    key: "credit",
    label: "Credit basics and obligations",
    whatItCovers:
      "Credit limit, minimum payment, utilization language, and repayment framing.",
  },
  {
    key: "fees",
    label: "Fees and common terms",
    whatItCovers:
      "Service fees, overdraft language, annual fees, and conditional charges.",
  },
] as const;

export const BANKING_AND_CREDIT_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Early recognition, with gaps in common banking and credit terms.",
  },
  {
    key: "4-5",
    label: "4–5 out of 10",
    meaning: "Some baseline familiarity, but inconsistent interpretation of labels.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid understanding of most everyday banking and credit language.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning: "Strong recognition across accounts, statements, and credit terms.",
  },
  {
    key: "10",
    label: "10 out of 10",
    meaning: "Excellent clarity on foundational banking and credit terminology.",
  },
] as const;

export const BANKING_AND_CREDIT_FAQS: FAQItem[] = [
  {
    q: "What does this banking and credit quiz test?",
    a: "It tests recognition and interpretation of common banking and credit terms as used in everyday account usage: account types, statements, balances, basic interest concepts, fees, and credit obligations.",
  },
  {
    q: "Is this quiz comparing banks or recommending products?",
    a: "No. It avoids comparisons, recommendations, and product evaluation. It focuses on conceptual clarity in banking language.",
  },
  {
    q: "Does this quiz require calculations?",
    a: "No. It is about understanding labels and meanings, not doing math or strategy.",
  },
  {
    q: "How many questions are in the quiz?",
    a: "Each run is 10 questions, pulled from a larger question bank so you can retake it for variety.",
  },
  {
    q: "How can I improve my score?",
    a: "Slow down and read the label carefully. Pay attention to timing words (statement vs current), units (percent vs dollars), and qualifiers (available vs posted).",
  },
];

export const BANKING_AND_CREDIT_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "What is a checking account most commonly used for?",
    options: [
      "Everyday spending and bill payments",
      "Long-term investing for retirement",
      "Buying a house without a loan",
      "Predicting market prices",
    ],
    correct: "Everyday spending and bill payments",
  },
  {
    q: "What is a savings account conceptually meant for?",
    options: [
      "Holding money aside and usually earning some interest",
      "Paying daily expenses only",
      "Guaranteeing a fixed profit each month",
      "Replacing a credit card",
    ],
    correct: "Holding money aside and usually earning some interest",
  },
  {
    q: "What does “available balance” usually mean?",
    options: [
      "What you can spend right now based on posted items and holds",
      "Your balance from last month’s statement only",
      "The amount you will have next year",
      "A guaranteed minimum balance",
    ],
    correct: "What you can spend right now based on posted items and holds",
  },
  {
    q: "What does “statement balance” most commonly refer to on a credit card?",
    options: [
      "The balance shown on the last statement closing date",
      "The balance after a payment posts today",
      "Your total credit limit",
      "Your minimum payment amount",
    ],
    correct: "The balance shown on the last statement closing date",
  },
  {
    q: "What is a “credit limit”?",
    options: [
      "The maximum amount you can borrow on that account at a time",
      "The amount you must pay every month",
      "A fee charged for using credit",
      "A guarantee of approval for new credit",
    ],
    correct: "The maximum amount you can borrow on that account at a time",
  },
  {
    q: "What does “minimum payment” mean on a credit card statement?",
    options: [
      "The smallest amount required to keep the account in good standing",
      "The full balance you must pay immediately",
      "A recommended amount for maximizing rewards",
      "The interest rate expressed in dollars",
    ],
    correct: "The smallest amount required to keep the account in good standing",
  },
  {
    q: "In simple terms, what does “interest rate” describe?",
    options: [
      "A percentage charged or earned over time",
      "A one-time fee charged once",
      "The total balance on an account",
      "A guarantee of profit",
    ],
    correct: "A percentage charged or earned over time",
  },
  {
    q: "What is an “overdraft” in a checking account context?",
    options: [
      "Spending more than the available funds in the account",
      "Earning interest on a savings balance",
      "Paying off a loan early",
      "Increasing your credit limit",
    ],
    correct: "Spending more than the available funds in the account",
  },
  {
    q: "What does a “hold” on a transaction usually imply?",
    options: [
      "The amount is reserved but not fully posted yet",
      "The bank has permanently removed the money",
      "The transaction was guaranteed to be free",
      "A refund has already posted",
    ],
    correct: "The amount is reserved but not fully posted yet",
  },
  {
    q: "What does “APR” generally mean on a credit account?",
    options: [
      "A yearly rate used to describe borrowing cost over time",
      "A guaranteed total interest amount",
      "A monthly fee charged for banking",
      "A score that measures spending habits",
    ],
    correct: "A yearly rate used to describe borrowing cost over time",
  },
  {
    q: "What does “posted” usually mean for a bank transaction?",
    options: [
      "It has been finalized and recorded on the account",
      "It is only a future estimate",
      "It has been cancelled automatically",
      "It is guaranteed to be refunded",
    ],
    correct: "It has been finalized and recorded on the account",
  },
  {
    q: "What does “utilization” refer to in credit language?",
    options: [
      "How much of your credit limit is being used",
      "How often you pay bills",
      "How many bank accounts you have",
      "How much interest you earned last year",
    ],
    correct: "How much of your credit limit is being used",
  },
  {
    q: "A “fee” is best described as:",
    options: [
      "A charge for a service or condition",
      "A guaranteed interest payment",
      "A discount on purchases",
      "A refund you always receive",
    ],
    correct: "A charge for a service or condition",
  },
  {
    q: "What does “due date” mean on a credit card bill?",
    options: [
      "The date by which payment is expected",
      "The date the statement was created",
      "The day your credit limit increases",
      "The day interest is set to zero",
    ],
    correct: "The date by which payment is expected",
  },
  {
    q: "In banking language, “deposit” means:",
    options: [
      "Putting money into an account",
      "Taking money out of an account",
      "A fee for account access",
      "A credit score change",
    ],
    correct: "Putting money into an account",
  },
  {
    q: "“Withdrawal” most commonly means:",
    options: [
      "Taking money out of an account",
      "Increasing your credit limit",
      "Earning interest on savings",
      "Receiving a dividend from a stock",
    ],
    correct: "Taking money out of an account",
  },
  {
    q: "What does “annual fee” mean on a credit product?",
    options: [
      "A fee charged once per year for having the account",
      "A fee charged every time you buy something",
      "A tax charged by the government",
      "A penalty for paying early",
    ],
    correct: "A fee charged once per year for having the account",
  },
  {
    q: "What does “billing cycle” usually refer to?",
    options: [
      "The period covered by one statement",
      "A loan term length",
      "A stock market quarter",
      "A guarantee of rewards",
    ],
    correct: "The period covered by one statement",
  },
  {
    q: "What does “principal” mean in a borrowing context?",
    options: [
      "The original amount borrowed (not interest)",
      "The interest charged each month",
      "The minimum payment amount",
      "The credit limit on the account",
    ],
    correct: "The original amount borrowed (not interest)",
  },
  {
    q: "In plain terms, what does “interest” on debt mean?",
    options: [
      "A cost that accrues over time for borrowing",
      "A one-time sticker price",
      "A discount for paying late",
      "A guaranteed reward payout",
    ],
    correct: "A cost that accrues over time for borrowing",
  },
] as const;
