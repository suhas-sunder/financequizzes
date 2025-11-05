import { json } from "@remix-run/node";
import type { Route } from "./+types/home";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";

interface LoaderData {
  nowISO: string;
  faqs: { q: string; a: string }[];
}

export function meta({}: Route.MetaArgs) {
  const title = "Finance Quizzes | Learn Money Smarter | FinanceQuizzes.com";
  const description =
    "Challenge yourself with short, interactive quizzes that make learning finance fun and simple. Build your money IQ with free finance quizzes online.";
  const url = "https://www.financequizzes.com/";
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "theme-color", content: "#0B1B2B" },
  ];
}

// Categories (unchanged)
const categories = [
  {
    icon: "💰",
    t: "Personal Finance",
    d: "Budgeting, saving, and managing money wisely.",
    href: "/learn-personal-finance-quizzes",
  },
  {
    icon: "📈",
    t: "Investing",
    d: "Stocks, ETFs, and portfolio basics.",
    href: "/learn-investing-quizzes",
  },
  {
    icon: "🏦",
    t: "Banking & Credit",
    d: "Loans, interest, and credit systems.",
    href: "/learn-banking-quizzes",
  },
  {
    icon: "📊",
    t: "Business Finance",
    d: "Profits, costs, and accounting fundamentals.",
    href: "/learn-business-quizzes",
  },
  {
    icon: "🌍",
    t: "Economics",
    d: "Markets, inflation, and trade.",
    href: "/learn-economics-quizzes",
  },
  {
    icon: "⏳",
    t: "Money History",
    d: "How money evolved from gold to crypto.",
    href: "/learn-history-quizzes",
  },
];

export function loader() {
  return json<LoaderData>({
    nowISO: new Date().toISOString(),
    faqs: [
      {
        q: "Are these finance quizzes free to use?",
        a: "Yes! Every quiz on FinanceQuizzes.com is completely free. You can play as many times as you like without signing up or paying for access.",
      },
      {
        q: "Do I need a finance or accounting background to take the quizzes?",
        a: "Not at all. Each quiz is written for all skill levels, from absolute beginners to finance professionals. We start with simple concepts and gradually move into more advanced topics like investing, economics, and business finance.",
      },
      {
        q: "How often are new quizzes added to the site?",
        a: "We publish new quizzes regularly across categories such as personal finance, investing, banking, and economic history. Our goal is to expand the library weekly with fresh, fact-checked content.",
      },
      {
        q: "Can I learn real finance skills from these quizzes?",
        a: "Yes. Every quiz is designed as a micro-lesson that reinforces key financial principles. You’ll retain concepts like credit management, interest, budgeting, and investing by practicing through interactive learning.",
      },
      {
        q: "How accurate are the quiz questions and answers?",
        a: "All questions are curated from reputable educational and financial literacy sources such as Investopedia, FINRA, and major economics textbooks. Each answer is reviewed for factual accuracy and clarity.",
      },
      {
        q: "Can I retake a quiz to improve my score or streak?",
        a: "Absolutely. You can replay any quiz as many times as you wish. Your streaks and stats are saved locally in your browser using secure localStorage so your progress remains private.",
      },
      {
        q: "Do I need to create an account or share personal data?",
        a: "No registration or login is required. FinanceQuizzes.com does not collect or store any personal data. All progress and statistics stay on your device only.",
      },
      {
        q: "Are the quizzes timed or graded?",
        a: "Currently, quizzes are not timed, so you can learn at your own pace. Correct and incorrect answers are highlighted instantly to provide immediate feedback and reinforce understanding.",
      },
      {
        q: "Can I use these quizzes for classroom or training purposes?",
        a: "Yes! Educators, trainers, and financial coaches are welcome to use our quizzes as teaching tools, as long as proper credit is provided to FinanceQuizzes.com.",
      },
      {
        q: "Do the quizzes include investing or tax advice?",
        a: "No. All content is educational only and should not be considered financial, investment, or tax advice. Always consult a qualified advisor before making personal finance decisions.",
      },
      {
        q: "What topics do the quizzes cover?",
        a: "Our quizzes cover a wide range of topics: personal finance, credit and loans, banking, saving and investing, business finance, global economics, and the history of money systems.",
      },
      {
        q: "Can I suggest a new quiz topic or report an error?",
        a: "Yes. We welcome community feedback! You can contact us via our About or Feedback section to suggest new topics or point out corrections.",
      },
      {
        q: "Will my progress sync across devices?",
        a: "Not yet. Progress is stored locally, so it’s device-specific. In future versions, we plan to add optional login features for syncing and tracking across devices.",
      },
      {
        q: "How are FinanceQuizzes.com quizzes different from other finance sites?",
        a: "We focus entirely on bite-sized, question-driven learning. Instead of long articles, each quiz teaches a concept interactively with instant feedback, making financial literacy fast and fun.",
      },
      {
        q: "Can I share quiz results or questions with others?",
        a: "Yes. You can share individual quiz pages or copy and paste links. This helps friends or students challenge themselves and compare their financial knowledge.",
      },
      {
        q: "How can beginners start learning finance online for free?",
        a: "FinanceQuizzes.com offers structured quizzes that explain finance basics in everyday language. Each question is linked to real-world examples, so even beginners can build confidence while learning without cost or prior experience.",
      },
      {
        q: "What are some common financial literacy questions?",
        a: "Common financial literacy questions include how credit scores work, how compound interest grows savings, the difference between debit and credit, and how to create a monthly budget. Our quizzes cover all of these and more.",
      },
      {
        q: "Is there a finance quiz for students and classrooms?",
        a: "Yes. Many teachers and students use FinanceQuizzes.com for classroom practice and financial literacy programs. The site’s multiple-choice format is ideal for group learning and assessment.",
      },
      {
        q: "Can I take an investing quiz to test my knowledge?",
        a: "Yes. Our investing section includes quizzes on stocks, ETFs, mutual funds, and portfolio basics. Each question teaches key investing concepts so you can understand markets more confidently.",
      },
      {
        q: "Are these finance quizzes suitable for adults or professionals?",
        a: "Definitely. While quizzes start at the beginner level, many also cover intermediate and advanced topics such as business finance, economics, and investing strategies useful for professionals.",
      },
      {
        q: "Do you offer quizzes on budgeting and money management?",
        a: "Yes. You can explore budgeting, saving, and goal-setting quizzes that help you learn how to manage expenses, control debt, and plan for long-term financial success.",
      },
      {
        q: "Where can I find quizzes about economics and global markets?",
        a: "Our economics section covers inflation, GDP, monetary policy, and trade systems. It’s ideal for students preparing for economics exams or anyone curious about how global markets work.",
      },
      {
        q: "Can I download or print finance quiz questions and answers?",
        a: "Yes. Many users print quiz questions for offline learning or workshops. Each quiz page includes easy-to-read questions with clear, verified answers.",
      },
      {
        q: "Do you have quizzes on cryptocurrency and digital money?",
        a: "Yes. Our modern finance category includes crypto, blockchain, and digital payment quizzes that explain how these technologies work and their impact on global finance.",
      },
      {
        q: "What makes FinanceQuizzes.com good for SEO and finance education?",
        a: "Every quiz is written with clear structure, verified content, and keyword-rich explanations that help users and search engines understand topics easily. This makes the site a trusted hub for finance learning worldwide.",
      },
    ],
  });
}

// Question bank with correct answers
const questionBank = [
  {
    q: "Which of these helps you build credit?",
    options: [
      "Paying bills late",
      "Ignoring your credit score",
      "Paying credit cards on time",
      "Opening too many accounts",
    ],
    correct: "Paying credit cards on time",
  },
  {
    q: "If you earn 5% annual interest on $1000, how much do you have after one year?",
    options: ["$1000", "$1050", "$1100", "$950"],
    correct: "$1050",
  },
  {
    q: "What does APR stand for?",
    options: [
      "Annual Percentage Rate",
      "Average Price Ratio",
      "Adjusted Payment Rate",
      "Annual Purchase Return",
    ],
    correct: "Annual Percentage Rate",
  },
  {
    q: "Which type of account typically pays the most interest?",
    options: [
      "Checking account",
      "Savings account",
      "Certificate of deposit (CD)",
      "Credit card account",
    ],
    correct: "Certificate of deposit (CD)",
  },
  {
    q: "A diversified investment portfolio helps you:",
    options: [
      "Reduce risk",
      "Increase taxes",
      "Lose money faster",
      "Ignore inflation",
    ],
    correct: "Reduce risk",
  },
  {
    q: "What is compound interest?",
    options: [
      "Interest earned on both the initial principal and previous interest",
      "Interest applied only once",
      "Fees charged by banks",
      "Interest based on inflation rate",
    ],
    correct:
      "Interest earned on both the initial principal and previous interest",
  },
  {
    q: "A 401(k) is best described as:",
    options: [
      "A retirement savings plan",
      "A type of credit card",
      "A high-interest loan",
      "A business tax ID",
    ],
    correct: "A retirement savings plan",
  },
  {
    q: "Which loan type usually has the lowest interest rate?",
    options: [
      "Credit card loan",
      "Payday loan",
      "Mortgage loan",
      "Personal loan",
    ],
    correct: "Mortgage loan",
  },
  {
    q: "What is a credit score used for?",
    options: [
      "Measuring your fitness level",
      "Determining loan and credit approval",
      "Calculating your tax refund",
      "Tracking your savings growth",
    ],
    correct: "Determining loan and credit approval",
  },
  {
    q: "Which factor most influences your credit score?",
    options: [
      "Payment history",
      "Number of debit cards",
      "Monthly income",
      "Car ownership",
    ],
    correct: "Payment history",
  },
  {
    q: "What is the main purpose of a budget?",
    options: [
      "To predict the stock market",
      "To track and control spending",
      "To reduce taxes automatically",
      "To increase credit card limits",
    ],
    correct: "To track and control spending",
  },
  {
    q: "Which of the following is a fixed expense?",
    options: [
      "Electric bill",
      "Groceries",
      "Rent or mortgage payment",
      "Entertainment costs",
    ],
    correct: "Rent or mortgage payment",
  },
  {
    q: "An emergency fund should ideally cover how many months of expenses?",
    options: ["1 month", "3–6 months", "12 months", "None, use credit"],
    correct: "3–6 months",
  },
  {
    q: "Which financial goal is considered short-term?",
    options: [
      "Saving for retirement",
      "Buying a house in 20 years",
      "Building an emergency fund",
      "Paying off a 30-year mortgage",
    ],
    correct: "Building an emergency fund",
  },
  {
    q: "What does ‘living within your means’ mean?",
    options: [
      "Spending more than you earn",
      "Matching spending to income",
      "Investing in risky assets",
      "Avoiding any use of credit",
    ],
    correct: "Matching spending to income",
  },
  {
    q: "Which is an example of good debt?",
    options: [
      "Payday loans",
      "Credit card debt for vacations",
      "Student loans for higher education",
      "Gambling debt",
    ],
    correct: "Student loans for higher education",
  },
  {
    q: "A credit report is a record of:",
    options: [
      "Your salary and job history",
      "Your payment and borrowing history",
      "Your tax refunds",
      "Your investment profits",
    ],
    correct: "Your payment and borrowing history",
  },
  {
    q: "Which of these can help you avoid overdraft fees?",
    options: [
      "Keeping track of account balances",
      "Writing more checks",
      "Using multiple debit cards",
      "Delaying bill payments",
    ],
    correct: "Keeping track of account balances",
  },
  {
    q: "What is the difference between gross income and net income?",
    options: [
      "Gross is after taxes; net is before taxes",
      "Gross is before taxes; net is after taxes",
      "They are the same",
      "Gross includes bonuses only",
    ],
    correct: "Gross is before taxes; net is after taxes",
  },
  {
    q: "What is the best way to build an emergency fund?",
    options: [
      "Using credit cards",
      "Saving a small amount regularly",
      "Taking a personal loan",
      "Investing in volatile stocks",
    ],
    correct: "Saving a small amount regularly",
  },
  {
    q: "What is financial literacy?",
    options: [
      "Knowing how to count money",
      "Understanding how to manage and make informed financial decisions",
      "Being an accountant",
      "Memorizing tax codes",
    ],
    correct:
      "Understanding how to manage and make informed financial decisions",
  },
  {
    q: "Which type of account is best for day-to-day spending?",
    options: [
      "Savings account",
      "Checking account",
      "Retirement account",
      "Certificate of deposit",
    ],
    correct: "Checking account",
  },
  {
    q: "What does the 50/30/20 rule in budgeting represent?",
    options: [
      "50% needs, 30% wants, 20% savings",
      "50% savings, 30% bills, 20% fun",
      "50% rent, 30% food, 20% debt",
      "50% investing, 30% spending, 20% giving",
    ],
    correct: "50% needs, 30% wants, 20% savings",
  },
  {
    q: "What is inflation?",
    options: [
      "A rise in general price levels over time",
      "A fall in employment",
      "A stock market crash",
      "A government surplus",
    ],
    correct: "A rise in general price levels over time",
  },
  {
    q: "What’s the safest way to store emergency savings?",
    options: [
      "Checking account",
      "Under your mattress",
      "High-yield savings account",
      "Crypto wallet",
    ],
    correct: "High-yield savings account",
  },
  {
    q: "What is take-home pay?",
    options: [
      "Gross income before taxes",
      "Net income after taxes and deductions",
      "Overtime pay only",
      "Bonus checks",
    ],
    correct: "Net income after taxes and deductions",
  },
  {
    q: "Why should you review your bank statements regularly?",
    options: [
      "To look for errors or unauthorized transactions",
      "To increase your credit score",
      "To lower interest rates",
      "To apply for loans",
    ],
    correct: "To look for errors or unauthorized transactions",
  },
  {
    q: "Which of these is a benefit of using a debit card?",
    options: [
      "Builds credit quickly",
      "Prevents overspending automatically",
      "Avoids debt and draws directly from your account",
      "Increases your loan limit",
    ],
    correct: "Avoids debt and draws directly from your account",
  },
  {
    q: "What is diversification in investing?",
    options: [
      "Putting all money in one stock",
      "Spreading investments across different assets to reduce risk",
      "Investing only in crypto",
      "Avoiding any investments",
    ],
    correct: "Spreading investments across different assets to reduce risk",
  },
  {
    q: "What does ETF stand for?",
    options: [
      "Exchange-Traded Fund",
      "Electronic Transfer Fee",
      "Equity Trust Fund",
      "Estimated Tax Filing",
    ],
    correct: "Exchange-Traded Fund",
  },
  {
    q: "Which investment generally carries the least risk?",
    options: ["Stocks", "Government bonds", "Cryptocurrency", "Commodities"],
    correct: "Government bonds",
  },
  {
    q: "What does ROI stand for?",
    options: [
      "Rate of Inflation",
      "Return on Investment",
      "Revenue on Income",
      "Ratio of Interest",
    ],
    correct: "Return on Investment",
  },
  {
    q: "What is the main advantage of index funds?",
    options: [
      "They have high management fees",
      "They automatically diversify across markets",
      "They guarantee profits",
      "They require daily trading",
    ],
    correct: "They automatically diversify across markets",
  },
  {
    q: "Which type of investment grows tax-deferred until withdrawal?",
    options: [
      "Roth IRA",
      "Traditional IRA",
      "Savings account",
      "Checking account",
    ],
    correct: "Traditional IRA",
  },
  {
    q: "What is dollar-cost averaging?",
    options: [
      "Investing a fixed amount at regular intervals regardless of price",
      "Buying only when prices drop",
      "Selling quickly for profit",
      "Investing all at once",
    ],
    correct:
      "Investing a fixed amount at regular intervals regardless of price",
  },
  {
    q: "Which is a characteristic of a stock?",
    options: [
      "Represents ownership in a company",
      "Represents company debt",
      "Pays fixed interest",
      "Has guaranteed returns",
    ],
    correct: "Represents ownership in a company",
  },
  {
    q: "What is a bond?",
    options: [
      "A loan made to a company or government",
      "Ownership in a firm",
      "An insurance policy",
      "A crypto token",
    ],
    correct: "A loan made to a company or government",
  },
  {
    q: "Which market is associated with rising prices?",
    options: ["Bear market", "Bull market", "Flat market", "Crash market"],
    correct: "Bull market",
  },
  {
    q: "What does P/E ratio stand for?",
    options: [
      "Price-to-Earnings ratio",
      "Profit-to-Equity ratio",
      "Performance Evaluation",
      "Purchase Estimate",
    ],
    correct: "Price-to-Earnings ratio",
  },
  {
    q: "Which investment is most liquid?",
    options: ["Real estate", "Stocks", "Bonds", "Certificates of deposit"],
    correct: "Stocks",
  },
  {
    q: "What is market capitalization?",
    options: [
      "Company’s total value of outstanding shares",
      "Annual profits",
      "Debt ratio",
      "Market share percentage",
    ],
    correct: "Company’s total value of outstanding shares",
  },
  {
    q: "Which investment type typically pays dividends?",
    options: ["Stocks", "Bonds", "Savings accounts", "Commodities"],
    correct: "Stocks",
  },
  {
    q: "What is a mutual fund?",
    options: [
      "A pool of money managed by professionals to invest in securities",
      "A government loan program",
      "A type of cryptocurrency",
      "An employer savings plan",
    ],
    correct: "A pool of money managed by professionals to invest in securities",
  },
  {
    q: "What does risk tolerance mean?",
    options: [
      "Ability to handle losses in investment value",
      "Ability to pay off loans",
      "Amount you can borrow",
      "Tolerance for inflation",
    ],
    correct: "Ability to handle losses in investment value",
  },
  {
    q: "What is a capital gain?",
    options: [
      "Profit from selling an asset at a higher price than purchase",
      "Tax refund from the government",
      "Interest from savings",
      "Company bonus payout",
    ],
    correct: "Profit from selling an asset at a higher price than purchase",
  },
  {
    q: "What is a dividend?",
    options: [
      "A payment to shareholders from company profits",
      "A government tax",
      "Loan interest",
      "Employee bonus",
    ],
    correct: "A payment to shareholders from company profits",
  },
  {
    q: "What is the difference between a bull and bear market?",
    options: [
      "Bull = rising prices; Bear = falling prices",
      "Bull = falling; Bear = rising",
      "Both mean flat markets",
      "They refer to credit ratings",
    ],
    correct: "Bull = rising prices; Bear = falling prices",
  },
  {
    q: "What is an IPO?",
    options: [
      "Initial Public Offering",
      "Instant Payment Option",
      "Investment Portfolio Objective",
      "Interest Payment Obligation",
    ],
    correct: "Initial Public Offering",
  },
  {
    q: "What is the main role of a central bank?",
    options: [
      "Issue currency and control monetary policy",
      "Sell insurance",
      "Provide retail loans",
      "Manage personal accounts",
    ],
    correct: "Issue currency and control monetary policy",
  },
  {
    q: "What does FDIC insurance protect?",
    options: [
      "Stock investments",
      "Bank deposits up to legal limits",
      "Pension funds",
      "Mutual funds",
    ],
    correct: "Bank deposits up to legal limits",
  },
  {
    q: "What is the prime interest rate?",
    options: [
      "Rate banks charge their best customers",
      "Average national mortgage rate",
      "Credit card APR",
      "Government bond yield",
    ],
    correct: "Rate banks charge their best customers",
  },
  {
    q: "What is monetary policy?",
    options: [
      "Government control of spending and taxes",
      "Central bank actions to influence money supply and interest rates",
      "Corporate investment strategy",
      "Taxpayer relief programs",
    ],
    correct:
      "Central bank actions to influence money supply and interest rates",
  },
  {
    q: "What happens when the Federal Reserve raises interest rates?",
    options: [
      "Borrowing becomes more expensive",
      "Inflation increases",
      "Stock prices always rise",
      "Money supply grows",
    ],
    correct: "Borrowing becomes more expensive",
  },
  {
    q: "What does GDP measure?",
    options: [
      "Total value of goods and services produced in a country",
      "Government debt levels",
      "National inflation rate",
      "Employment statistics",
    ],
    correct: "Total value of goods and services produced in a country",
  },
  {
    q: "What is fiscal policy?",
    options: [
      "Government spending and taxation policies",
      "Bank lending rules",
      "Stock exchange regulations",
      "Monetary policy by central banks",
    ],
    correct: "Government spending and taxation policies",
  },
  {
    q: "What does inflation do to purchasing power?",
    options: [
      "Increases it",
      "Decreases it",
      "Keeps it constant",
      "Has no effect",
    ],
    correct: "Decreases it",
  },
  {
    q: "What causes deflation?",
    options: [
      "Overall decline in prices",
      "Increase in wages",
      "Excess government spending",
      "Higher interest rates only",
    ],
    correct: "Overall decline in prices",
  },
  {
    q: "What is an economic recession?",
    options: [
      "A decline in economic activity for two or more quarters",
      "A period of rapid inflation",
      "Government surplus phase",
      "Booming job market",
    ],
    correct: "A decline in economic activity for two or more quarters",
  },
  {
    q: "What is opportunity cost?",
    options: [
      "The next best alternative forgone when making a decision",
      "Direct monetary loss",
      "Interest on savings",
      "A hidden tax",
    ],
    correct: "The next best alternative forgone when making a decision",
  },
  {
    q: "Which organization manages global trade rules?",
    options: [
      "World Bank",
      "IMF",
      "World Trade Organization",
      "Federal Reserve",
    ],
    correct: "World Trade Organization",
  },
  {
    q: "What does unemployment rate measure?",
    options: [
      "Percentage of people actively looking for work",
      "Total number of employed people",
      "Average income",
      "Taxpayer base",
    ],
    correct: "Percentage of people actively looking for work",
  },
  {
    q: "Which term describes the total amount of money owed by a country?",
    options: ["Fiscal deficit", "National debt", "Budget balance", "GDP ratio"],
    correct: "National debt",
  },
  {
    q: "What is a trade deficit?",
    options: [
      "When imports exceed exports",
      "When exports exceed imports",
      "When trade is balanced",
      "When tariffs rise",
    ],
    correct: "When imports exceed exports",
  },
  {
    q: "What is the main function of commercial banks?",
    options: [
      "Accept deposits and make loans",
      "Print currency",
      "Control inflation",
      "Regulate interest rates",
    ],
    correct: "Accept deposits and make loans",
  },
  {
    q: "What is a mortgage?",
    options: [
      "A loan used to buy property",
      "A type of insurance policy",
      "A tax payment",
      "A retirement fund",
    ],
    correct: "A loan used to buy property",
  },
  {
    q: "What does refinancing a mortgage mean?",
    options: [
      "Replacing an old loan with a new one at better terms",
      "Paying off credit card debt",
      "Buying a second property",
      "Increasing property taxes",
    ],
    correct: "Replacing an old loan with a new one at better terms",
  },
  {
    q: "What is compound annual growth rate (CAGR)?",
    options: [
      "The average yearly rate an investment grows over time",
      "The simple interest rate",
      "The inflation rate",
      "The bank’s lending rate",
    ],
    correct: "The average yearly rate an investment grows over time",
  },
  {
    q: "What is a credit union?",
    options: [
      "Member-owned financial cooperative providing banking services",
      "Government loan agency",
      "Private investment fund",
      "Insurance provider",
    ],
    correct: "Member-owned financial cooperative providing banking services",
  },
  {
    q: "What is an income statement?",
    options: [
      "A report showing a company's revenues and expenses",
      "A list of assets only",
      "A tax return form",
      "A payroll summary",
    ],
    correct: "A report showing a company's revenues and expenses",
  },
  {
    q: "What is a balance sheet?",
    options: [
      "A snapshot of a company’s assets, liabilities, and equity",
      "A profit report",
      "A list of sales",
      "A loan summary",
    ],
    correct: "A snapshot of a company’s assets, liabilities, and equity",
  },
  {
    q: "What does ROI measure in business?",
    options: [
      "Return on Investment",
      "Rate of Inflation",
      "Revenue on Invoices",
      "Reserves of Income",
    ],
    correct: "Return on Investment",
  },
  {
    q: "What is depreciation?",
    options: [
      "The reduction in value of an asset over time",
      "A government tax rebate",
      "A profit increase",
      "Loan repayment",
    ],
    correct: "The reduction in value of an asset over time",
  },
  {
    q: "Which financial document shows cash inflows and outflows?",
    options: [
      "Cash flow statement",
      "Balance sheet",
      "Income statement",
      "Payroll ledger",
    ],
    correct: "Cash flow statement",
  },
  {
    q: "What is break-even point?",
    options: [
      "When total revenue equals total costs",
      "When profits double",
      "When losses exceed revenue",
      "When market share increases",
    ],
    correct: "When total revenue equals total costs",
  },
  {
    q: "What is GDP per capita?",
    options: [
      "Economic output per person",
      "Total tax collected",
      "National debt ratio",
      "Household income average",
    ],
    correct: "Economic output per person",
  },
  {
    q: "What is the gold standard?",
    options: [
      "A system where currency value is tied to gold reserves",
      "Modern banking policy",
      "Crypto-backed asset model",
      "Government bond yield rule",
    ],
    correct: "A system where currency value is tied to gold reserves",
  },
  {
    q: "Who is known as the father of modern economics?",
    options: [
      "John Maynard Keynes",
      "Adam Smith",
      "Milton Friedman",
      "Karl Marx",
    ],
    correct: "Adam Smith",
  },
  {
    q: "What book did Adam Smith write?",
    options: [
      "The Wealth of Nations",
      "Das Kapital",
      "Principles of Economics",
      "The General Theory",
    ],
    correct: "The Wealth of Nations",
  },
  {
    q: "When was Bitcoin launched?",
    options: ["2005", "2008", "2009", "2011"],
    correct: "2009",
  },
  {
    q: "Who created Bitcoin?",
    options: ["Vitalik Buterin", "Satoshi Nakamoto", "Elon Musk", "Hal Finney"],
    correct: "Satoshi Nakamoto",
  },
  {
    q: "What does blockchain technology ensure?",
    options: [
      "Decentralized and transparent record-keeping",
      "Central bank control",
      "Physical money exchange",
      "Automatic taxation",
    ],
    correct: "Decentralized and transparent record-keeping",
  },
  {
    q: "What is fiat money?",
    options: [
      "Currency backed by government trust, not physical commodities",
      "Digital-only currency",
      "Gold-backed money",
      "Cryptocurrency",
    ],
    correct: "Currency backed by government trust, not physical commodities",
  },
  {
    q: "What is hyperinflation?",
    options: [
      "Extremely rapid price increases reducing money’s value",
      "A stable economy",
      "Falling interest rates",
      "Strong currency appreciation",
    ],
    correct: "Extremely rapid price increases reducing money’s value",
  },
  {
    q: "What was the Great Depression?",
    options: [
      "A severe global economic downturn in the 1930s",
      "The oil crisis of the 1970s",
      "The 2008 housing crash",
      "WWII recovery period",
    ],
    correct: "A severe global economic downturn in the 1930s",
  },
  {
    q: "What is GDP growth rate?",
    options: [
      "Percentage change in economic output over time",
      "Stock market increase rate",
      "Inflation percentage",
      "Interest rate spread",
    ],
    correct: "Percentage change in economic output over time",
  },
  {
    q: "What does the term ‘liquidity’ mean?",
    options: [
      "How easily an asset can be converted into cash",
      "How long you hold investments",
      "Amount of debt in a company",
      "Interest payment speed",
    ],
    correct: "How easily an asset can be converted into cash",
  },
  {
    q: "What is a progressive tax?",
    options: [
      "Higher earners pay a higher tax rate",
      "Everyone pays the same rate",
      "Tax decreases with income",
      "No tax on income",
    ],
    correct: "Higher earners pay a higher tax rate",
  },
  {
    q: "What does the term ‘bullion’ refer to?",
    options: [
      "Gold or silver in bulk form",
      "Government debt",
      "Paper currency",
      "Foreign bonds",
    ],
    correct: "Gold or silver in bulk form",
  },
  {
    q: "What is a Roth IRA?",
    options: [
      "A retirement account with after-tax contributions and tax-free withdrawals",
      "A traditional savings account",
      "A loan from your employer",
      "A government pension fund",
    ],
    correct:
      "A retirement account with after-tax contributions and tax-free withdrawals",
  },
  {
    q: "What is dollar inflation?",
    options: [
      "Decrease in the value of money over time",
      "Increase in the value of money over time",
      "Increase in gold reserves",
      "Government debt reduction",
    ],
    correct: "Decrease in the value of money over time",
  },
  {
    q: "What does diversification help an investor achieve?",
    options: [
      "Higher risk and faster returns",
      "Reduced overall investment risk",
      "Concentrated market exposure",
      "Guaranteed profit",
    ],
    correct: "Reduced overall investment risk",
  },
  {
    q: "What is cryptocurrency mining?",
    options: [
      "Generating new crypto coins by validating blockchain transactions",
      "Buying cryptocurrency on an exchange",
      "Selling digital art NFTs",
      "Storing coins in a cold wallet",
    ],
    correct:
      "Generating new crypto coins by validating blockchain transactions",
  },
  {
    q: "What is the main advantage of a 401(k) plan?",
    options: [
      "Tax-deferred growth on contributions",
      "Guaranteed returns",
      "Unlimited withdrawals anytime",
      "High liquidity",
    ],
    correct: "Tax-deferred growth on contributions",
  },
  {
    q: "What is an insurance deductible?",
    options: [
      "The amount you pay out of pocket before insurance covers costs",
      "The total premium paid each month",
      "A refund from your insurer",
      "A tax on your policy",
    ],
    correct: "The amount you pay out of pocket before insurance covers costs",
  },
  {
    q: "What does term life insurance provide?",
    options: [
      "Coverage for a specific period at a fixed premium",
      "Permanent coverage with investment growth",
      "Coverage for health expenses only",
      "A retirement savings plan",
    ],
    correct: "Coverage for a specific period at a fixed premium",
  },
  {
    q: "What is compound interest often called?",
    options: [
      "Interest on interest",
      "Simple gain",
      "Fixed growth rate",
      "Static yield",
    ],
    correct: "Interest on interest",
  },
  {
    q: "Which of the following best defines risk vs return?",
    options: [
      "Higher potential returns usually come with higher risk",
      "Higher returns mean lower risk",
      "Risk and return are unrelated",
      "All investments have equal risk",
    ],
    correct: "Higher potential returns usually come with higher risk",
  },
  {
    q: "What is a financial bubble?",
    options: [
      "When asset prices rise far above their intrinsic value",
      "When the economy deflates rapidly",
      "When a new tax is introduced",
      "When interest rates fall",
    ],
    correct: "When asset prices rise far above their intrinsic value",
  },
  {
    q: "What is behavioral finance?",
    options: [
      "The study of how psychology affects financial decisions",
      "The use of AI in stock trading",
      "Government control of markets",
      "Corporate accounting standards",
    ],
    correct: "The study of how psychology affects financial decisions",
  },
  {
    q: "Which tax is taken directly from your paycheck by employers?",
    options: ["Income tax", "Sales tax", "Property tax", "Capital gains tax"],
    correct: "Income tax",
  },
];

export default function Home({}: Route.ComponentProps) {
  const { faqs } = useLoaderData() as LoaderData;

  // Utility: safely pick 3 random questions *after* hydration to avoid SSR mismatch
  const [displayed, setDisplayed] = useState<typeof questionBank>([]);

  useEffect(() => {
    // run only on client after hydration
    const randomSet = [...questionBank]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setDisplayed(randomSet);
  }, []);

  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Safe stats initialization (no SSR crash)
  const [stats, setStats] = useState(() => ({
    answered: 0,
    correct: 0,
    streak: 0,
    bestStreak: 0,
  }));

  // Load stats from localStorage after mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("financeQuizStats");
      if (saved) {
        try {
          setStats(JSON.parse(saved));
        } catch {
          console.warn("Failed to parse saved stats");
        }
      }
    }
  }, []);

  // Save stats to localStorage when they change (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("financeQuizStats", JSON.stringify(stats));
    }
  }, [stats]);

  // === Answer handling ===
  const handleAnswer = (
    question: string,
    selected: string,
    correct: string
  ) => {
    if (answers[question]) return; // prevent re-answering

    const newAnswers = { ...answers, [question]: selected };
    setAnswers(newAnswers);

    const isCorrect = selected === correct;

    // ✅ increment per question immediately
    setStats((prev) => ({
      ...prev,
      answered: prev.answered + 1,
      correct: prev.correct + (isCorrect ? 1 : 0),
    }));

    const totalAnsweredThisRound = Object.keys(newAnswers).length;

    // ✅ streak logic only after 3 questions answered
    if (totalAnsweredThisRound === 3) {
      const correctCount = displayed.filter(
        (q) => newAnswers[q.q] === q.correct
      ).length;

      setStats((prev) => {
        const newStreak = correctCount === 3 ? prev.streak + 1 : 0;
        const best = Math.max(prev.bestStreak, newStreak);
        return { ...prev, streak: newStreak, bestStreak: best };
      });
    }
  };

  // Utility for refresh (safe to use client-side only)
  const pickRandom = () =>
    [...questionBank].sort(() => 0.5 - Math.random()).slice(0, 3);

  const refreshQuiz = () => {
    setDisplayed(pickRandom());
    setAnswers({});
  };

  return (
    <main className="bg-white text-[#0B1B2B]">
      {/* HERO QUIZ */}
      <section
        className="relative bg-[#F9FBFD] pt-8 pb-14 px-4 border-b border-slate-200"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #E5E9EE 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-4 inline-block rounded-full bg-teal-100 px-4 pt-1 pb-2 text-xs font-semibold text-teal-700">
            🔥 Your Finance Knowledge Challenge
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B2B] mb-4 tracking-tight">
            Test Your <span className="text-teal-900"> Money IQ</span>
          </h1>

          {/* Quiz Card */}
          <div className="mx-auto min-h-[53vh] w-full sm:w-[720px] text-left rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
            {/* Stats */}
            <div className="flex flex-wrap justify-between items-center mb-6">
              <div className="text-sm font-semibold text-slate-700">
                Answered: {stats.answered}
              </div>
              <div className="text-sm font-semibold text-slate-700">
                Correct: {stats.correct}
              </div>
              <div className="text-sm font-semibold text-slate-700">
                Streak: {stats.streak}
              </div>
              <div className="text-sm font-semibold text-slate-700">
                Best: {stats.bestStreak}
              </div>
            </div>

            {displayed.map((item, i) => {
              const chosen = answers[item.q];
              return (
                <div key={i} className="mb-8 last:mb-0">
                  <p className="text-xl font-bold text-[#0B1B2B] mb-4">
                    {i + 1}. {item.q}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {item.options.map((opt) => {
                      const isSelected = chosen === opt;
                      const isCorrect = item.correct === opt;
                      let bg = "bg-teal-50 border-teal-100 text-teal-800";
                      if (chosen) {
                        if (isSelected && isCorrect)
                          bg = "bg-green-100 border-green-400 text-green-900";
                        else if (isSelected && !isCorrect)
                          bg = "bg-red-100 border-red-400 text-red-900";
                        else if (isCorrect)
                          bg = "bg-green-50 border-green-200 text-green-800";
                        else bg = "bg-slate-50 border-slate-200 text-slate-500";
                      }

                      return (
                        <li
                          key={opt}
                          onClick={() =>
                            handleAnswer(item.q, opt, item.correct)
                          }
                          className={`cursor-pointer rounded-xl font-semibold px-5 py-4 text-base border ${bg} hover:bg-teal-100 hover:border-teal-400 hover:shadow-sm transition active:scale-[0.98]`}
                        >
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            <div className="mt-10 text-center">
              <button
                onClick={refreshQuiz}
                className="cursor-pointer rounded-xl bg-teal-700 px-6 py-2 text-white font-semibold text-lg hover:bg-teal-800 transition"
              >
                LOAD MORE QUIZ QUESTIONS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUIZ LINK SECTION */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-b border-slate-200 text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-[#0B1B2B]">
          Popular Finance Quizzes
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-slate-700 text-base sm:text-lg">
          Explore key topics in money, investing, and economics. Test yourself
          with practical quizzes that make financial learning fast and fun.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {categories.map((c) => (
            <a
              key={c.t}
              href={c.href}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              {/* Title Row with Icon */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{c.icon}</span>
                <h3 className="text-lg font-semibold text-[#0B1B2B] group-hover:text-teal-700 transition-colors">
                  {c.t} Quiz
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-sm leading-relaxed flex-1">
                {c.d}
              </p>

              {/* CTA */}
              <div className="text-teal-700 mt-4 text-sm font-semibold group-hover:underline">
                Take quiz →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* RELATED SITES */}
      <section
        id="related-sites"
        className="bg-[#F9FBFD] border-t border-b border-slate-200 px-6 py-16"
      >
        <div className="mx-auto max-w-6xl ">
          <h2 className="text-4xl font-extrabold text-[#0B1B2B] mb-6 text-center">
            Explore Related Learning Sites
          </h2>
          <p className="text-lg text-slate-700 mb-12 max-w-2xl mx-auto">
            Continue building your skills across our family of educational
            platforms. Each site helps you grow in finance, focus, habits,
            creativity, and more.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FinanceMapped */}
            <a
              href="https://www.FinanceMapped.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
                Learn Modern Finance Fundamentals
              </h3>
              <p className="text-slate-700 text-base leading-snug mb-4">
                Discover how money, markets, and credit systems work with
                easy-to-understand lessons and diagrams.
              </p>
              <div className="mt-auto w-full text-right text-teal-600 text-sm font-semibold">
                Visit FinanceMapped.com →
              </div>
            </a>

            {/* FreeTypingCamp */}
            <a
              href="https://www.FreeTypingCamp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
                Improve Typing Speed & Accuracy
              </h3>
              <p className="text-slate-700 text-base leading-snug mb-4">
                Practice typing with free, interactive lessons designed for
                beginners and professionals to track real progress.
              </p>
              <div className="mt-auto w-full text-right text-teal-600 text-sm font-semibold">
                Visit FreeTypingCamp.com →
              </div>
            </a>

            {/* iLoveHabits */}
            <a
              href="https://www.iLoveHabits.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
                Build Better Daily Habits
              </h3>
              <p className="text-slate-700 text-base leading-snug mb-4">
                Learn how to form, track, and maintain habits that improve your
                focus, health, and productivity over time.
              </p>
              <div className="mt-auto w-full text-right text-teal-600 text-sm font-semibold">
                Visit iLoveHabits.com →
              </div>
            </a>

            {/* FocusClimber */}
            <a
              href="https://www.FocusClimber.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
                Master Focus & Deep Work
              </h3>
              <p className="text-slate-700 text-base leading-snug mb-4">
                Strengthen your attention span, manage distractions, and build
                flow with structured focus challenges and tools.
              </p>
              <div className="mt-auto w-full text-right text-teal-600 text-sm font-semibold">
                Visit FocusClimber.com →
              </div>
            </a>

            {/* FunMoneyGames */}
            <a
              href="https://www.FunMoneyGames.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
                Learn Finance Through Games
              </h3>
              <p className="text-slate-700 text-base leading-snug mb-4">
                Play interactive money and investing games that make financial
                concepts engaging, visual, and fun for all ages.
              </p>
              <div className="mt-auto w-full text-right text-teal-600 text-sm font-semibold">
                Visit FunMoneyGames.com →
              </div>
            </a>

            {/* LearnWordGames */}
            <a
              href="https://www.LearnWordGames.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
                Expand Vocabulary & Creativity
              </h3>
              <p className="text-slate-700 text-base leading-snug mb-4">
                Challenge yourself with interactive word puzzles, vocabulary
                builders, and brain-teasing educational games.
              </p>
              <div className="mt-auto w-full text-right text-teal-600 text-sm font-semibold">
                Visit LearnWordGames.com →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ + Quiz Answers */}
      <section id="quiz-answers" className="mx-auto max-w-5xl px-6 pt-16">
        <h3 className="text-3xl font-bold text-[#0B1B2B] mb-4 text-center">
          Learn from These Finance Quiz Answers
        </h3>
        <p className="text-slate-700 text-center max-w-2xl mx-auto mb-10">
          Review all finance quiz questions and their correct answers to deepen
          your understanding of key financial concepts.
        </p>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-200">
          {questionBank.map((q, i) => (
            <div key={i} className="p-6">
              <p className="font-semibold text-lg text-[#0B1B2B] mb-2">
                {i + 1}. {q.q}
              </p>
              <p className="text-slate-700">
                <span className="font-medium text-teal-700">Answer: </span>
                {q.correct}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 pt-24">
        <h2 className="text-4xl font-extrabold text-[#0B1B2B] mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="rounded-2xl border border-slate-200 bg-white divide-y divide-slate-200 shadow-sm mb-12">
          {faqs.map((f) => (
            <details key={f.q} className="group open:bg-slate-50">
              <summary className="cursor-pointer list-none px-6 py-5 text-lg font-semibold text-[#0B1B2B]">
                {f.q}
              </summary>
              <div className="px-6 pb-5 text-slate-700 text-base">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* === Structured Data: FAQ + Q&A + Website === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Finance Quizzes",
            url: "https://www.financequizzes.com/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.financequizzes.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* FAQ Schema (valid for rich results) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "QAPage",
            mainEntity: questionBank.slice(0, 20).map((q) => ({
              "@type": "Question",
              name: q.q,
              text: q.q,
              answerCount: 1,
              author: {
                "@type": "Person",
                name: "Suhas Sunder",
                url: "https://financequizzes.com/about", // ✅ added
              },
              datePublished: "2025-11-01T00:00:00+00:00", // ✅ full ISO 8601 with timezone
              acceptedAnswer: {
                "@type": "Answer",
                text: q.correct,
                author: {
                  "@type": "Person",
                  name: "Suhas Sunder",
                  url: "https://financequizzes.com/about", // ✅ added
                },
                url: "https://financequizzes.com", // already OK
                datePublished: "2025-11-01T00:00:00+00:00", // ✅ fixed timezone format
                upvoteCount: 0,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
