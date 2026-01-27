export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const PERSONAL_FINANCE_QUIZ_INTENT = {
  topicLabel: "Personal finance",
  roundSize: 10,
  formatLabel: "10-question challenge",
  focus:
    "Everyday money concepts tied to budgeting, saving, debt, and basic credit decisions in ordinary household and individual contexts.",
} as const;

export const PERSONAL_FINANCE_QUIZ_CATEGORIES = [
  {
    key: "budgeting_cashflow",
    label: "Budgeting and cash flow",
    whatItCovers:
      "Income vs expenses language, spending plans, and common budgeting methods.",
  },
  {
    key: "saving_goals",
    label: "Saving and short-term goals",
    whatItCovers:
      "Emergency funds, sinking funds, and goal-based saving terms people use day to day.",
  },
  {
    key: "debt_interest",
    label: "Debt and interest basics",
    whatItCovers:
      "Loans, credit cards, minimum payments, amortization, and how interest adds cost.",
  },
  {
    key: "credit_scores",
    label: "Credit reports and scores",
    whatItCovers:
      "Utilization, payment history, and the vocabulary used in basic credit explanations.",
  },
  {
    key: "banking_bills",
    label: "Banking, bills, and payments",
    whatItCovers:
      "Statements, due dates, autopay, overdrafts, and the language around paying bills.",
  },
  {
    key: "fees_protection",
    label: "Fees and consumer protections",
    whatItCovers:
      "Common fee types and simple protections that show up in everyday money products.",
  },
] as const;

export const PERSONAL_FINANCE_QUIZ_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Some recognition, with major gaps across everyday money terms.",
  },
  {
    key: "4-5",
    label: "4–5 out of 10",
    meaning: "Baseline familiarity, but mixed confidence across common scenarios.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid understanding of most day-to-day money language.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning: "Strong practical personal finance vocabulary.",
  },
  { key: "10", label: "10 out of 10", meaning: "Perfect run." },
] as const;

export const PERSONAL_FINANCE_FAQS: FAQItem[] = [
  {
    q: "How is the quiz scored?",
    a: "Each run is 10 questions. Your score is the number correct out of 10, and the percentage is that total converted to a percent. The rating stars are based on your final percentage, so 8/10 shows as 80%.",
  },
  {
    q: "What topics does this personal finance quiz cover?",
    a: "It focuses on everyday household and individual money decisions: budgeting language, saving habits, debt and interest basics, credit cards, credit scores, and common statement terms like fees, due dates, and minimum payments. It is meant to reflect what you see in regular banking and bill-paying, not investing or markets.",
  },
  {
    q: "Does this quiz give financial advice?",
    a: "No. It is a terminology and concepts quiz. It can help you spot gaps in understanding, but it cannot account for your income, bills, risks, or goals. For advice about your situation, consider a qualified professional.",
  },
  {
    q: "Why do I see different questions each time?",
    a: "Each attempt randomly selects 10 questions from the question bank. That keeps practice useful and reduces memorizing a fixed order. You might still see repeats over time if you take many runs, especially if the topic pool is smaller than your number of attempts.",
  },
  {
    q: "What do “Perfect runs” and “Best time” mean?",
    a: "Perfect runs is the count of 10/10 scores saved on this device and browser. Best time is the fastest completion time for a fully finished 10-question run on this device. The timer starts on your first answer so time reflects active answering, not how long the page was open.",
  },
  {
    q: "Is my progress saved?",
    a: "Only two stats are saved locally in your browser: your perfect run count and your best completion time. Your individual answers and runs are not stored, and nothing is sent to a server from this page.",
  },
  {
    q: "What should I do if I keep missing the same kind of question?",
    a: "Treat missed questions as a study list. Look up the exact term (for example: utilization, APR, principal, or statement balance) and then find where it appears on your own statements so it becomes familiar. If the term is about an action, like minimum payments or due dates, practice describing what happens if you do the wrong action for one month.",
  },
];


export const PERSONAL_FINANCE_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "Which term describes the plan you make for where your money should go each month?",
    options: ["Budget", "Collateral", "Capital gain", "Principal"],
    correct: "Budget",
  },
  {
    q: "What is a common purpose of an emergency fund?",
    options: [
      "To cover unexpected expenses",
      "To maximize stock returns",
      "To avoid paying income tax",
      "To increase your credit limit",
    ],
    correct: "To cover unexpected expenses",
  },
  {
    q: "Which is usually an example of a fixed expense?",
    options: ["Rent payment", "Groceries", "Entertainment", "Gasoline"],
    correct: "Rent payment",
  },
  {
    q: "What does “cash flow” most directly describe?",
    options: [
      "Money coming in and going out over time",
      "The interest rate on a savings account",
      "The value of your investments",
      "A fee charged for late payments",
    ],
    correct: "Money coming in and going out over time",
  },
  {
    q: "What is a “due date” on a bill?",
    options: [
      "The latest date you can pay to be on time",
      "The day your paycheck is deposited",
      "The day the company sets prices",
      "The date your credit score is calculated",
    ],
    correct: "The latest date you can pay to be on time",
  },
  {
    q: "On a credit card, what does “statement balance” mean?",
    options: [
      "The amount you owed at the end of the billing cycle",
      "The maximum you are allowed to borrow",
      "The total you paid last month",
      "The interest rate on the card",
    ],
    correct: "The amount you owed at the end of the billing cycle",
  },
  {
    q: "What is the “minimum payment” on a credit card?",
    options: [
      "The smallest amount you must pay to keep the account current",
      "The full balance you must pay every month",
      "A fee charged when you travel",
      "The amount needed to increase your credit score immediately",
    ],
    correct: "The smallest amount you must pay to keep the account current",
  },
  {
    q: "If you only pay the minimum on a credit card, what is usually true?",
    options: [
      "You will pay more interest over time",
      "Your balance disappears faster",
      "No interest is charged",
      "Your credit limit is reduced automatically",
    ],
    correct: "You will pay more interest over time",
  },
  {
    q: "What does APR represent most directly on a loan or credit card?",
    options: [
      "A yearly borrowing cost rate",
      "A guaranteed return",
      "A tax refund amount",
      "A monthly savings goal",
    ],
    correct: "A yearly borrowing cost rate",
  },
  {
    q: "What is “interest” in the context of borrowing money?",
    options: [
      "The cost you pay to use someone else’s money",
      "A discount for paying early",
      "A refund from your bank",
      "A fee only charged once",
    ],
    correct: "The cost you pay to use someone else’s money",
  },
  {
    q: "Which is typically a liability on a personal balance sheet?",
    options: ["Credit card balance", "Cash in checking", "Savings account balance", "Gift card value"],
    correct: "Credit card balance",
  },
  {
    q: "What does “net worth” mean?",
    options: [
      "Assets minus liabilities",
      "Income minus taxes",
      "Spending minus saving",
      "Debt plus interest",
    ],
    correct: "Assets minus liabilities",
  },
  {
    q: "What is a “sinking fund” commonly used for?",
    options: [
      "Saving for a planned future expense",
      "Paying off a mortgage early with stocks",
      "Avoiding bank fees completely",
      "Increasing your credit limit automatically",
    ],
    correct: "Saving for a planned future expense",
  },
  {
    q: "What does “autopay” usually mean?",
    options: [
      "Automatic bill payments set up in advance",
      "A payment that can only be made in cash",
      "A refund processed instantly",
      "A way to remove interest charges",
    ],
    correct: "Automatic bill payments set up in advance",
  },
  {
    q: "What is an “overdraft”?",
    options: [
      "Spending more than your account balance, often triggering a fee",
      "A bonus added to your paycheck",
      "A discount on your credit card interest",
      "A type of savings account",
    ],
    correct: "Spending more than your account balance, often triggering a fee",
  },
  {
    q: "What is the main risk of overdrafting a checking account?",
    options: ["Fees and declined transactions", "Higher credit score", "Lower rent", "Tax penalties"],
    correct: "Fees and declined transactions",
  },
  {
    q: "What does “credit utilization” refer to?",
    options: [
      "How much of your available revolving credit you are using",
      "How many loans you have ever had",
      "Your total annual income",
      "The number of bank accounts you own",
    ],
    correct: "How much of your available revolving credit you are using",
  },
  {
    q: "Which factor is commonly described as important for credit scores?",
    options: ["On-time payment history", "Owning a house", "Having cash only", "Shopping every day"],
    correct: "On-time payment history",
  },
  {
    q: "What is a “late fee”?",
    options: [
      "A charge for paying after the due date",
      "A discount for paying early",
      "A tax charged by the government",
      "A reward for using a credit card",
    ],
    correct: "A charge for paying after the due date",
  },
  {
    q: "What does it mean to “carry a balance” on a credit card?",
    options: [
      "Not paying the full statement balance by the due date",
      "Closing the account permanently",
      "Increasing the credit limit",
      "Paying extra toward principal on a loan",
    ],
    correct: "Not paying the full statement balance by the due date",
  },
  {
    q: "Which term describes the amount you are allowed to borrow on a credit card?",
    options: ["Credit limit", "Credit score", "APR", "Minimum payment"],
    correct: "Credit limit",
  },
  {
    q: "What is a “billing cycle” for a credit card?",
    options: [
      "The period of time covered by one statement",
      "The time it takes a payment to clear",
      "The number of years on a loan",
      "The day your card expires",
    ],
    correct: "The period of time covered by one statement",
  },
  {
    q: "What does “principal” mean on a loan?",
    options: [
      "The original amount borrowed (or remaining base amount owed)",
      "The interest charged each month",
      "A late fee",
      "The total fees paid over time",
    ],
    correct: "The original amount borrowed (or remaining base amount owed)",
  },
  {
    q: "What is “amortization” most closely related to?",
    options: [
      "A schedule showing how loan payments split between principal and interest",
      "A bank’s ATM network",
      "A type of credit score",
      "A method for investing in stocks",
    ],
    correct: "A schedule showing how loan payments split between principal and interest",
  },
  {
    q: "What is a “grace period” on many credit cards?",
    options: [
      "Time to pay the statement balance without interest if you pay in full",
      "A period when your credit limit doubles",
      "A time when late fees are guaranteed",
      "A loan term extension that requires no approval",
    ],
    correct: "Time to pay the statement balance without interest if you pay in full",
  },
  {
    q: "Which is an example of a variable expense?",
    options: ["Groceries", "A fixed-rate mortgage payment", "A yearly car registration fee", "A lease payment"],
    correct: "Groceries",
  },
  {
    q: "What does “take-home pay” mean?",
    options: [
      "Income after taxes and deductions",
      "Income before taxes",
      "Money earned from investments only",
      "A government benefit payment",
    ],
    correct: "Income after taxes and deductions",
  },
  {
    q: "What is a common reason to track spending?",
    options: [
      "To see where money is going and adjust your budget",
      "To increase APR",
      "To guarantee higher wages",
      "To avoid having a bank account",
    ],
    correct: "To see where money is going and adjust your budget",
  },
  {
    q: "What is “discretionary spending”?",
    options: [
      "Optional spending that is not strictly necessary",
      "A required tax payment",
      "A fixed bill like rent",
      "Interest charged on a loan",
    ],
    correct: "Optional spending that is not strictly necessary",
  },
  {
    q: "What does “automatic transfer” usually refer to in banking?",
    options: [
      "A scheduled move of money between accounts",
      "A fee charged for using an ATM",
      "A loan approval process",
      "A credit score calculation",
    ],
    correct: "A scheduled move of money between accounts",
  },
  {
    q: "What is a “paycheck deduction”?",
    options: [
      "Money taken out of your pay before you receive it",
      "A cash withdrawal from an ATM",
      "A fee for paying a bill",
      "A refund from your landlord",
    ],
    correct: "Money taken out of your pay before you receive it",
  },
  {
    q: "What does “reconcile” mean in personal budgeting?",
    options: [
      "Compare your records to your bank statement to ensure they match",
      "Apply for a loan",
      "Increase your credit limit",
      "Move all money into cash",
    ],
    correct: "Compare your records to your bank statement to ensure they match",
  },
  {
    q: "What is a “subscription” expense in a budget?",
    options: [
      "A recurring charge that repeats on a schedule",
      "A one-time purchase with no repeat",
      "A tax-only payment",
      "A loan principal payment",
    ],
    correct: "A recurring charge that repeats on a schedule",
  },
  {
    q: "What is the main benefit of paying bills on time?",
    options: [
      "Avoiding late fees and protecting your credit history",
      "Guaranteeing a higher salary",
      "Reducing sales tax",
      "Increasing interest rates on your loan",
    ],
    correct: "Avoiding late fees and protecting your credit history",
  },
  {
    q: "What is a “credit report”?",
    options: [
      "A record of your credit accounts and payment history",
      "A list of your monthly subscriptions",
      "A receipt for your last purchase",
      "A statement of your tax refund",
    ],
    correct: "A record of your credit accounts and payment history",
  },
  {
    q: "What does “collections” usually mean on a debt account?",
    options: [
      "A stage where an unpaid debt is being pursued for repayment",
      "A reward program for cardholders",
      "A bank service to increase savings yield",
      "A type of checking account upgrade",
    ],
    correct: "A stage where an unpaid debt is being pursued for repayment",
  },
  {
    q: "Which is an example of an impulse purchase?",
    options: [
      "Buying something unplanned because you saw it and wanted it",
      "Paying rent on the due date",
      "Contributing to an emergency fund",
      "Making a minimum payment on a credit card",
    ],
    correct: "Buying something unplanned because you saw it and wanted it",
  },
  {
    q: "What is a “balance transfer” commonly used for?",
    options: [
      "Moving credit card debt from one card to another",
      "Depositing cash into a checking account",
      "Turning a debit card into a credit card",
      "Paying off a mortgage with stocks",
    ],
    correct: "Moving credit card debt from one card to another",
  },
  {
    q: "What does it mean to “pay yourself first”?",
    options: [
      "Save a set amount before spending on other things",
      "Spend all your money quickly",
      "Only use cash",
      "Never use a budget",
    ],
    correct: "Save a set amount before spending on other things",
  },
  {
    q: "What is the main idea of the 50/30/20 budget rule?",
    options: [
      "Split income into needs, wants, and savings/debt payoff categories",
      "Invest 50% of your income in stocks",
      "Pay 30% interest on all loans",
      "Save 20% only when you get a bonus",
    ],
    correct: "Split income into needs, wants, and savings/debt payoff categories",
  },
];
