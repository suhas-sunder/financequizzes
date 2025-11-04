import { json } from "@remix-run/node";
import type { Route } from "./+types/home";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";

interface LoaderData {
  nowISO: string;
  faqs: { q: string; a: string }[];
}

export function meta({}: Route.MetaArgs) {
  const title =
    "Money History Quiz | From Gold Coins to Cryptocurrency | FinanceQuizzes.com";
  const description =
    "Test your knowledge of how money evolved-from barter and gold coins to modern digital currency. Learn key milestones in the history of finance with this interactive quiz.";
  const url = "https://www.financequizzes.com/learn-history-quizzes";
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

export function loader() {
  return json<LoaderData>({
    nowISO: new Date().toISOString(),
    faqs: [
      {
        q: "Is this quiz about the full history of money?",
        a: "Yes! It covers key turning points from ancient barter systems to modern cryptocurrencies.",
      },
      {
        q: "Do I need prior economics knowledge?",
        a: "No. It’s designed for all learners who want to understand how currency and trade evolved.",
      },
      {
        q: "Will I get the correct answers immediately?",
        a: "Yes. Each question reveals the right answer right after selection for fast learning.",
      },
    ],
  });
}

// Financial History question bank
const questionBank = [
  {
    q: "What was one of the earliest forms of trade before money existed?",
    options: ["Barter system", "Metal coins", "Paper notes", "Checks"],
    correct: "Barter system",
  },
  {
    q: "Which civilization is credited with creating the first standardized metal coins?",
    options: ["Ancient Greece", "Lydia", "Rome", "Egypt"],
    correct: "Lydia",
  },
  {
    q: "When did paper money first appear?",
    options: [
      "During the Roman Empire",
      "In medieval China during the Tang Dynasty",
      "In 19th-century England",
      "In 20th-century America",
    ],
    correct: "In medieval China during the Tang Dynasty",
  },
  {
    q: "The Gold Standard linked currency value to what?",
    options: [
      "Silver reserves",
      "Stock market prices",
      "A fixed quantity of gold",
      "Government bonds",
    ],
    correct: "A fixed quantity of gold",
  },
  {
    q: "What technology sparked the rise of cryptocurrency?",
    options: ["AI", "Blockchain", "Quantum computing", "Cloud storage"],
    correct: "Blockchain",
  },
  {
    q: "What was one of the earliest forms of trade before money existed?",
    options: ["Barter system", "Metal coins", "Paper notes", "Checks"],
    correct: "Barter system",
  },
  {
    q: "Which civilization is credited with creating the first standardized metal coins?",
    options: ["Ancient Greece", "Lydia", "Rome", "Egypt"],
    correct: "Lydia",
  },
  {
    q: "When did paper money first appear?",
    options: [
      "During the Roman Empire",
      "In medieval China during the Tang Dynasty",
      "In 19th-century England",
      "In 20th-century America",
    ],
    correct: "In medieval China during the Tang Dynasty",
  },
  {
    q: "The Gold Standard linked currency value to what?",
    options: [
      "Silver reserves",
      "Stock market prices",
      "A fixed quantity of gold",
      "Government bonds",
    ],
    correct: "A fixed quantity of gold",
  },
  {
    q: "What technology sparked the rise of cryptocurrency?",
    options: ["AI", "Blockchain", "Quantum computing", "Cloud storage"],
    correct: "Blockchain",
  },
  {
    q: "What is fiat money?",
    options: [
      "Currency backed by government trust, not a physical commodity",
      "Money made of gold or silver",
      "A digital token with no value",
      "Barter-based trade credit",
    ],
    correct: "Currency backed by government trust, not a physical commodity",
  },
  {
    q: "Inflation reduces:",
    options: [
      "Purchasing power of money",
      "Interest rates",
      "Tax rates",
      "Economic growth",
    ],
    correct: "Purchasing power of money",
  },
  {
    q: "Deflation is defined as:",
    options: [
      "A general decline in prices across an economy",
      "An increase in government spending",
      "A stock market correction",
      "A fall in foreign currency reserves",
    ],
    correct: "A general decline in prices across an economy",
  },
  {
    q: "What is the primary function of money?",
    options: [
      "Medium of exchange, store of value, and unit of account",
      "Only a way to save wealth",
      "Only a measure of status",
      "Only for paying taxes",
    ],
    correct: "Medium of exchange, store of value, and unit of account",
  },
  {
    q: "Which institution controls monetary policy in the United States?",
    options: ["Federal Reserve", "World Bank", "Treasury Department", "IMF"],
    correct: "Federal Reserve",
  },
  {
    q: "A currency exchange rate represents:",
    options: [
      "The value of one currency compared to another",
      "The amount of gold backing each currency",
      "The inflation rate of a nation",
      "Government bond yield",
    ],
    correct: "The value of one currency compared to another",
  },
  {
    q: "Cryptocurrency is typically stored in:",
    options: [
      "Digital wallets",
      "Bank safety deposits",
      "Brokerage accounts",
      "Paper notes",
    ],
    correct: "Digital wallets",
  },
  {
    q: "Which organization insures bank deposits in the U.S.?",
    options: ["FDIC", "SEC", "Federal Reserve", "IMF"],
    correct: "FDIC",
  },
  {
    q: "A debit card withdraws money from:",
    options: [
      "Your checking or savings account",
      "A credit line",
      "The bank’s reserve fund",
      "A cryptocurrency wallet",
    ],
    correct: "Your checking or savings account",
  },
  {
    q: "Compound interest means:",
    options: [
      "Earning interest on both the initial amount and accumulated interest",
      "Simple flat interest each year",
      "Only bank-paid interest on principal",
      "Negative interest rate policy",
    ],
    correct:
      "Earning interest on both the initial amount and accumulated interest",
  },
  {
    q: "An emergency fund should generally cover:",
    options: [
      "3–6 months of living expenses",
      "1 month of income",
      "A year of rent",
      "Only medical costs",
    ],
    correct: "3–6 months of living expenses",
  },
  {
    q: "A budget helps individuals to:",
    options: [
      "Track income and expenses to manage money effectively",
      "Eliminate taxes entirely",
      "Earn higher investment returns",
      "Predict inflation rates",
    ],
    correct: "Track income and expenses to manage money effectively",
  },
  {
    q: "What is disposable income?",
    options: [
      "Income left after taxes for spending or saving",
      "Gross income before deductions",
      "Tax refunds received yearly",
      "Employer-paid benefits",
    ],
    correct: "Income left after taxes for spending or saving",
  },
  {
    q: "Which expense is considered a fixed cost?",
    options: [
      "Rent or mortgage payment",
      "Groceries",
      "Clothing",
      "Entertainment",
    ],
    correct: "Rent or mortgage payment",
  },
  {
    q: "Opportunity cost refers to:",
    options: [
      "The value of the next best alternative you give up when making a choice",
      "The total out-of-pocket cost of an item",
      "The purchase price including taxes",
      "The cost of borrowing money",
    ],
    correct:
      "The value of the next best alternative you give up when making a choice",
  },

  // --- BUDGETING & SAVING (21–50)
  {
    q: "The 50/30/20 budgeting rule recommends:",
    options: [
      "50% needs, 30% wants, 20% savings/debt payments",
      "50% rent, 30% taxes, 20% entertainment",
      "50% savings, 30% expenses, 20% vacations",
      "50% investment, 30% housing, 20% insurance",
    ],
    correct: "50% needs, 30% wants, 20% savings/debt payments",
  },
  {
    q: "A high-yield savings account offers:",
    options: [
      "Higher interest rates than a standard savings account",
      "No access to your funds",
      "Government matching contributions",
      "Guaranteed stock returns",
    ],
    correct: "Higher interest rates than a standard savings account",
  },
  {
    q: "An overdraft occurs when:",
    options: [
      "You spend more than your account balance",
      "Your credit score drops",
      "A loan is repaid early",
      "Interest compounds too quickly",
    ],
    correct: "You spend more than your account balance",
  },
  {
    q: "The main advantage of automating savings is:",
    options: [
      "Consistency and discipline without manual effort",
      "Higher tax deductions",
      "Access to premium credit cards",
      "Free insurance benefits",
    ],
    correct: "Consistency and discipline without manual effort",
  },
  {
    q: "Which is an example of a variable expense?",
    options: ["Electric bill", "Rent", "Car payment", "Insurance premium"],
    correct: "Electric bill",
  },
  {
    q: "A certificate of deposit (CD) is best for:",
    options: [
      "Saving money you won’t need for a fixed period",
      "Daily spending",
      "Paying monthly bills",
      "High-risk investment growth",
    ],
    correct: "Saving money you won’t need for a fixed period",
  },
  {
    q: "The main risk of keeping all savings in cash is:",
    options: [
      "Inflation eroding its value over time",
      "Bankruptcy of your employer",
      "Tax audits",
      "High interest accumulation",
    ],
    correct: "Inflation eroding its value over time",
  },
  {
    q: "What is an emergency fund used for?",
    options: [
      "Unexpected expenses like medical bills or car repairs",
      "Luxury shopping",
      "Planned vacations",
      "Loan payments only",
    ],
    correct: "Unexpected expenses like medical bills or car repairs",
  },
  {
    q: "Which tool helps track spending patterns?",
    options: [
      "Budget app or spreadsheet",
      "Tax return",
      "Credit card only",
      "Insurance policy",
    ],
    correct: "Budget app or spreadsheet",
  },
  {
    q: "What’s the benefit of setting financial goals?",
    options: [
      "Provides direction and motivation for saving and spending",
      "Guarantees profit",
      "Eliminates inflation risk",
      "Ensures no taxes are due",
    ],
    correct: "Provides direction and motivation for saving and spending",
  },

  {
    q: "What is a sinking fund used for?",
    options: [
      "Saving gradually for a known future expense",
      "Paying off existing credit card debt",
      "Investing in short-term bonds",
      "Covering emergency medical costs only",
    ],
    correct: "Saving gradually for a known future expense",
  },
  {
    q: "Which financial goal is considered short-term?",
    options: [
      "Saving for a vacation next year",
      "Buying a retirement home",
      "Building college savings for children",
      "Paying off a 30-year mortgage",
    ],
    correct: "Saving for a vacation next year",
  },
  {
    q: "The time value of money means:",
    options: [
      "A dollar today is worth more than a dollar in the future",
      "Money loses all value over time",
      "Currency exchange fluctuates randomly",
      "Wealth increases linearly each year",
    ],
    correct: "A dollar today is worth more than a dollar in the future",
  },
  {
    q: "A personal net worth statement shows:",
    options: [
      "Assets minus liabilities",
      "Monthly income minus expenses",
      "All tax deductions claimed",
      "Loan interest over time",
    ],
    correct: "Assets minus liabilities",
  },
  {
    q: "Diversifying investments helps to:",
    options: [
      "Reduce overall risk by spreading investments",
      "Guarantee higher returns",
      "Eliminate taxes",
      "Avoid inflation",
    ],
    correct: "Reduce overall risk by spreading investments",
  },
  {
    q: "Which account type is best for retirement savings with tax advantages?",
    options: ["401(k)", "Checking account", "Credit card", "Money order"],
    correct: "401(k)",
  },
  {
    q: "What does APR stand for?",
    options: [
      "Annual Percentage Rate",
      "Adjusted Payment Ratio",
      "Applied Premium Rate",
      "Account Payment Record",
    ],
    correct: "Annual Percentage Rate",
  },
  {
    q: "What does a credit score measure?",
    options: [
      "Your likelihood to repay borrowed money",
      "Your annual income",
      "Your total savings",
      "Your employment stability",
    ],
    correct: "Your likelihood to repay borrowed money",
  },
  {
    q: "A good credit score typically starts around:",
    options: ["650", "500", "400", "300"],
    correct: "650",
  },
  {
    q: "Paying only the minimum on a credit card each month results in:",
    options: [
      "Longer payoff period and higher interest costs",
      "Immediate debt forgiveness",
      "Credit score improvement",
      "Lower interest rate automatically",
    ],
    correct: "Longer payoff period and higher interest costs",
  },
  {
    q: "Secured loans require:",
    options: [
      "Collateral such as property or savings",
      "High credit limits",
      "Government approval",
      "Only a co-signer",
    ],
    correct: "Collateral such as property or savings",
  },
  {
    q: "Which of the following is an example of good debt?",
    options: [
      "Student loan for education",
      "High-interest credit card",
      "Payday loan",
      "Overdraft balance",
    ],
    correct: "Student loan for education",
  },
  {
    q: "Which loan type usually has variable interest?",
    options: [
      "Adjustable-rate mortgage (ARM)",
      "Fixed-rate car loan",
      "Personal line of credit",
      "Credit-builder loan",
    ],
    correct: "Adjustable-rate mortgage (ARM)",
  },
  {
    q: "Debt-to-income ratio compares:",
    options: [
      "Monthly debt payments to monthly income",
      "Savings to annual expenses",
      "Net worth to gross income",
      "Loan principal to credit limit",
    ],
    correct: "Monthly debt payments to monthly income",
  },
  {
    q: "A payday loan is risky because:",
    options: [
      "It carries extremely high interest rates and short repayment terms",
      "It builds long-term credit history",
      "It is tax deductible",
      "It has government insurance",
    ],
    correct:
      "It carries extremely high interest rates and short repayment terms",
  },
  {
    q: "What is credit utilization ratio?",
    options: [
      "The percentage of available credit currently being used",
      "The number of open credit cards",
      "Total debt divided by savings",
      "Loan length divided by payments",
    ],
    correct: "The percentage of available credit currently being used",
  },
  {
    q: "Late payment on a loan affects:",
    options: [
      "Credit score negatively",
      "Tax deductions positively",
      "Savings account balance only",
      "Nothing after one month",
    ],
    correct: "Credit score negatively",
  },
  {
    q: "Refinancing a loan means:",
    options: [
      "Replacing an existing loan with a new one, often with better terms",
      "Consolidating multiple loans into one payment",
      "Taking an additional loan on top of another",
      "Cancelling all existing debts",
    ],
    correct:
      "Replacing an existing loan with a new one, often with better terms",
  },
  {
    q: "What is amortization?",
    options: [
      "Gradual repayment of a loan over time with interest",
      "A one-time payment to close a loan",
      "Interest-only payment schedule",
      "Annual lump-sum repayment",
    ],
    correct: "Gradual repayment of a loan over time with interest",
  },
  {
    q: "An adjustable-rate loan interest can:",
    options: [
      "Fluctuate based on market conditions",
      "Remain fixed permanently",
      "Be reduced each quarter by law",
      "Be negotiated yearly without lender approval",
    ],
    correct: "Fluctuate based on market conditions",
  },
  {
    q: "Mutual funds allow investors to:",
    options: [
      "Pool money to invest in diversified assets managed by professionals",
      "Buy company ownership directly",
      "Avoid all market risk",
      "Hold only government bonds",
    ],
    correct:
      "Pool money to invest in diversified assets managed by professionals",
  },
  {
    q: "An index fund tracks:",
    options: [
      "A specific market index like the S&P 500",
      "Gold prices only",
      "Bond yields globally",
      "Real-estate rentals",
    ],
    correct: "A specific market index like the S&P 500",
  },
  {
    q: "Dollar-cost averaging means:",
    options: [
      "Investing a fixed amount regularly regardless of market price",
      "Buying all at once to time the market",
      "Selling during downturns",
      "Changing portfolio weekly",
    ],
    correct: "Investing a fixed amount regularly regardless of market price",
  },
  {
    q: "The rule of 72 helps estimate:",
    options: [
      "Years required to double money at a given interest rate",
      "Loan payoff duration",
      "Tax bracket change",
      "Inflation forecast",
    ],
    correct: "Years required to double money at a given interest rate",
  },
  {
    q: "Liquidity refers to:",
    options: [
      "How quickly an asset can be converted to cash without loss",
      "The total return of an investment",
      "Government bond yield",
      "Long-term inflation impact",
    ],
    correct: "How quickly an asset can be converted to cash without loss",
  },
  {
    q: "A Roth IRA grows:",
    options: [
      "Tax-free, with withdrawals also tax-free after retirement age",
      "Tax-deferred with taxable withdrawals",
      "Without any contribution limits",
      "With employer matching only",
    ],
    correct: "Tax-free, with withdrawals also tax-free after retirement age",
  },
  {
    q: "A 401(k) employer match means:",
    options: [
      "The employer contributes additional funds based on your contributions",
      "Employer sets your investment portfolio",
      "Employer pays all taxes on withdrawals",
      "Automatic debt forgiveness at retirement",
    ],
    correct:
      "The employer contributes additional funds based on your contributions",
  },
  {
    q: "What is diversification’s key purpose?",
    options: [
      "Reduce portfolio volatility",
      "Increase tax payments",
      "Simplify accounting records",
      "Double returns annually",
    ],
    correct: "Reduce portfolio volatility",
  },
  {
    q: "Which investment has historically offered highest long-term returns?",
    options: ["Stocks", "Bonds", "Savings accounts", "Certificates of deposit"],
    correct: "Stocks",
  },
  {
    q: "Inflation-protected securities are called:",
    options: [
      "TIPS (Treasury Inflation-Protected Securities)",
      "High-yield bonds",
      "Convertible notes",
      "Corporate preferreds",
    ],
    correct: "TIPS (Treasury Inflation-Protected Securities)",
  },
  {
    q: "Which statement describes risk tolerance?",
    options: [
      "An investor’s ability and willingness to endure market fluctuations",
      "Guaranteed insurance against losses",
      "Predictable investment returns",
      "Government risk rating",
    ],
    correct:
      "An investor’s ability and willingness to endure market fluctuations",
  },
  {
    q: "Asset allocation means:",
    options: [
      "Distributing investments across asset classes such as stocks, bonds, and cash",
      "Selecting only one type of stock",
      "Maximizing credit limits",
      "Rebalancing taxes yearly",
    ],
    correct:
      "Distributing investments across asset classes such as stocks, bonds, and cash",
  },
  {
    q: "Life insurance’s main financial purpose is to:",
    options: [
      "Provide income replacement for dependents after death",
      "Offer tax deductions for employers",
      "Fund investment portfolios",
      "Reduce mortgage payments",
    ],
    correct: "Provide income replacement for dependents after death",
  },
  {
    q: "Term life differs from whole life because:",
    options: [
      "Term lasts a set period, whole life covers entire lifetime",
      "Term builds cash value faster",
      "Whole life expires sooner",
      "Term premiums never change",
    ],
    correct: "Term lasts a set period, whole life covers entire lifetime",
  },
  {
    q: "An emergency fund should be kept in:",
    options: [
      "A highly liquid account like savings or money market",
      "Stocks or real estate",
      "Retirement account",
      "Corporate bond ladder",
    ],
    correct: "A highly liquid account like savings or money market",
  },
  {
    q: "Health Savings Accounts (HSAs) offer:",
    options: [
      "Tax-free contributions and withdrawals for qualified medical expenses",
      "Guaranteed 10% returns",
      "Use for vacations and entertainment",
      "Only employer access",
    ],
    correct:
      "Tax-free contributions and withdrawals for qualified medical expenses",
  },
  {
    q: "Gross income is:",
    options: [
      "Total earnings before taxes and deductions",
      "Net pay after deductions",
      "Only interest income",
      "Income after rent and bills",
    ],
    correct: "Total earnings before taxes and deductions",
  },
  {
    q: "Net income is:",
    options: [
      "Take-home pay after taxes and deductions",
      "Gross salary before tax",
      "Annual investment return",
      "Employer contributions",
    ],
    correct: "Take-home pay after taxes and deductions",
  },
  {
    q: "Tax credits differ from deductions because:",
    options: [
      "Credits directly reduce taxes owed, deductions reduce taxable income",
      "Credits apply only to charities",
      "Deductions increase refunds",
      "Credits depend on interest rates",
    ],
    correct:
      "Credits directly reduce taxes owed, deductions reduce taxable income",
  },
  {
    q: "An IRS W-4 form determines:",
    options: [
      "How much tax is withheld from your paycheck",
      "Your annual refund amount",
      "Retirement plan eligibility",
      "State unemployment coverage",
    ],
    correct: "How much tax is withheld from your paycheck",
  },
  {
    q: "Financial literacy means:",
    options: [
      "Understanding how to effectively manage and make informed money decisions",
      "Having a finance degree",
      "Tracking the stock market daily",
      "Avoiding all credit use",
    ],
    correct:
      "Understanding how to effectively manage and make informed money decisions",
  },
  {
    q: "Which habit improves long-term financial health the most?",
    options: [
      "Consistent saving and avoiding high-interest debt",
      "Relying on luck",
      "Day-trading frequently",
      "Delaying all bill payments",
    ],
    correct: "Consistent saving and avoiding high-interest debt",
  },
  {
    q: "What is behavioral finance concerned with?",
    options: [
      "How psychology influences financial decision-making",
      "Stock valuation formulas",
      "International exchange policy",
      "Accounting ethics only",
    ],
    correct: "How psychology influences financial decision-making",
  },
  {
    q: "Which scam involves fake investment opportunities?",
    options: ["Ponzi scheme", "Identity theft", "Phishing", "Chargeback fraud"],
    correct: "Ponzi scheme",
  },
  {
    q: "Phishing typically aims to:",
    options: [
      "Steal personal and financial information through fake emails or links",
      "Hack government databases",
      "Inflate credit scores",
      "Sell physical goods illegally",
    ],
    correct:
      "Steal personal and financial information through fake emails or links",
  },
  {
    q: "Diversification reduces risk by:",
    options: [
      "Not relying on one investment or asset type",
      "Eliminating all taxes",
      "Timing the market perfectly",
      "Holding only savings accounts",
    ],
    correct: "Not relying on one investment or asset type",
  },
  {
    q: "Rebalancing a portfolio means:",
    options: [
      "Adjusting asset weights to maintain target allocation",
      "Selling all investments yearly",
      "Switching banks",
      "Increasing credit limits",
    ],
    correct: "Adjusting asset weights to maintain target allocation",
  },
  {
    q: "A side hustle contributes to:",
    options: [
      "Additional income streams and financial flexibility",
      "Higher loan interest",
      "Lower savings rate",
      "Reduced tax liability automatically",
    ],
    correct: "Additional income streams and financial flexibility",
  },
  {
    q: "Financial independence means:",
    options: [
      "Having enough income from assets to cover living expenses without working",
      "Owning a home",
      "Reaching age 65",
      "Having zero credit cards",
    ],
    correct:
      "Having enough income from assets to cover living expenses without working",
  },
  {
    q: "The FIRE movement stands for:",
    options: [
      "Financial Independence, Retire Early",
      "Fiscal Inflation Reduction Effort",
      "Future Investment Return Estimate",
      "Free Income Rate Evaluation",
    ],
    correct: "Financial Independence, Retire Early",
  },
  {
    q: "A financial advisor’s fiduciary duty requires:",
    options: [
      "Acting in the best interest of the client",
      "Maximizing firm profit",
      "Minimizing market taxes",
      "Promoting only in-house products",
    ],
    correct: "Acting in the best interest of the client",
  },
  {
    q: "Which document summarizes income and expenses over time?",
    options: [
      "Personal income statement",
      "Balance sheet",
      "Tax return only",
      "Investment prospectus",
    ],
    correct: "Personal income statement",
  },
  {
    q: "Which document shows assets, debts, and net worth?",
    options: [
      "Personal balance sheet",
      "Cash-flow statement",
      "Loan disclosure form",
      "Tax W-2",
    ],
    correct: "Personal balance sheet",
  },
  {
    q: "Which financial principle says you should pay yourself first?",
    options: [
      "Save before spending on discretionary items",
      "Spend before saving",
      "Pay bills only at month end",
      "Ignore retirement early on",
    ],
    correct: "Save before spending on discretionary items",
  },
  {
    q: "A budget variance occurs when:",
    options: [
      "Actual spending differs from planned spending",
      "Income equals expenses",
      "Debt is paid early",
      "Taxes are refunded",
    ],
    correct: "Actual spending differs from planned spending",
  },
  {
    q: "What’s the purpose of an estate plan?",
    options: [
      "Organize distribution of assets and responsibilities after death",
      "Buy more property",
      "Avoid income tax only",
      "Maximize loan eligibility",
    ],
    correct: "Organize distribution of assets and responsibilities after death",
  },
  {
    q: "An emergency fund should NOT be invested in:",
    options: [
      "Volatile assets like stocks or crypto",
      "Savings accounts",
      "Money market funds",
      "Short-term CDs",
    ],
    correct: "Volatile assets like stocks or crypto",
  },
  {
    q: "Which financial ratio measures liquidity?",
    options: [
      "Current ratio (current assets ÷ current liabilities)",
      "Debt-to-income ratio",
      "Savings-to-expense ratio",
      "Interest-coverage ratio",
    ],
    correct: "Current ratio (current assets ÷ current liabilities)",
  },
  {
    q: "Which type of expense is easiest to reduce when budgeting?",
    options: [
      "Discretionary spending",
      "Rent",
      "Student loan",
      "Insurance premium",
    ],
    correct: "Discretionary spending",
  },
  {
    q: "Inflation hurts savers because:",
    options: [
      "It erodes purchasing power of stored money",
      "It increases nominal interest earned",
      "It decreases borrowing costs",
      "It strengthens currency abroad",
    ],
    correct: "It erodes purchasing power of stored money",
  },
  {
    q: "Which practice helps prevent identity theft?",
    options: [
      "Monitoring credit reports regularly",
      "Sharing personal info via email",
      "Using same passwords everywhere",
      "Posting account details online",
    ],
    correct: "Monitoring credit reports regularly",
  },
  {
    q: "Financial goals should be:",
    options: [
      "SMART - Specific, Measurable, Achievable, Relevant, Time-bound",
      "Vague but ambitious",
      "Unlimited in scope",
      "Dependent on credit score",
    ],
    correct: "SMART - Specific, Measurable, Achievable, Relevant, Time-bound",
  },
  {
    q: "Which app feature is most useful for improving budgeting discipline?",
    options: [
      "Automatic expense categorization and alerts",
      "Hidden fees for extra data",
      "Credit card promotions",
      "Manual data entry only",
    ],
    correct: "Automatic expense categorization and alerts",
  },
  {
    q: "Which investment account allows both tax-free growth and tax-free withdrawals for education expenses?",
    options: [
      "529 College Savings Plan",
      "401(k)",
      "Traditional IRA",
      "Taxable brokerage account",
    ],
    correct: "529 College Savings Plan",
  },
  {
    q: "What is a major benefit of compound interest over simple interest?",
    options: [
      "Earnings themselves generate additional earnings",
      "Guaranteed rate of return",
      "No taxes on earnings",
      "Lower total value over time",
    ],
    correct: "Earnings themselves generate additional earnings",
  },
  {
    q: "What’s the main purpose of rebalancing your investment portfolio?",
    options: [
      "Maintain your target mix of assets as markets change",
      "Double your returns automatically",
      "Eliminate all risk",
      "Increase taxable income",
    ],
    correct: "Maintain your target mix of assets as markets change",
  },
  {
    q: "What is a high credit utilization ratio a sign of?",
    options: [
      "Potential financial stress or overuse of credit",
      "Excellent credit management",
      "Debt-free living",
      "Low interest rates",
    ],
    correct: "Potential financial stress or overuse of credit",
  },
  {
    q: "Which factor most affects your credit score?",
    options: [
      "Payment history",
      "Age of your car",
      "Monthly rent amount",
      "Work schedule",
    ],
    correct: "Payment history",
  },
  {
    q: "What is a major advantage of direct deposit?",
    options: [
      "Automatic and faster access to paychecks",
      "Higher salary earnings",
      "Tax-free income",
      "Cashback rewards",
    ],
    correct: "Automatic and faster access to paychecks",
  },
  {
    q: "A FICO score below 580 is generally considered:",
    options: ["Poor", "Fair", "Good", "Excellent"],
    correct: "Poor",
  },
  {
    q: "Which type of account is most suitable for frequent bill payments?",
    options: [
      "Checking account",
      "Money market fund",
      "Certificate of deposit",
      "401(k)",
    ],
    correct: "Checking account",
  },
  {
    q: "What’s the main drawback of withdrawing from retirement accounts early?",
    options: [
      "Tax penalties and lost compounding growth",
      "Credit score reduction",
      "Employer suspension",
      "No access to future savings plans",
    ],
    correct: "Tax penalties and lost compounding growth",
  },
  {
    q: "Which tax filing status usually offers the lowest overall tax rate for married couples?",
    options: [
      "Married filing jointly",
      "Married filing separately",
      "Head of household",
      "Single",
    ],
    correct: "Married filing jointly",
  },
  {
    q: "What does diversification protect against?",
    options: [
      "Concentration risk in a single investment or sector",
      "All types of financial loss",
      "Currency fluctuations",
      "Government regulations",
    ],
    correct: "Concentration risk in a single investment or sector",
  },
  {
    q: "The term 'inflation hedge' refers to:",
    options: [
      "An investment designed to maintain value as prices rise",
      "A reduction in consumer spending",
      "Government wage controls",
      "A tax-exempt mutual fund",
    ],
    correct: "An investment designed to maintain value as prices rise",
  },
  {
    q: "What does refinancing a mortgage typically achieve?",
    options: [
      "Lower interest rate or shorter loan term",
      "Immediate debt cancellation",
      "Increased monthly payment",
      "Elimination of property taxes",
    ],
    correct: "Lower interest rate or shorter loan term",
  },
  {
    q: "What’s one key benefit of employer-sponsored retirement plans?",
    options: [
      "Potential employer matching contributions",
      "Guaranteed investment returns",
      "No withdrawal restrictions",
      "Government funding",
    ],
    correct: "Potential employer matching contributions",
  },
  {
    q: "What’s the purpose of a financial emergency plan?",
    options: [
      "Prepare for job loss, illness, or unexpected expenses",
      "Double savings automatically",
      "Avoid taxes",
      "Increase credit limit",
    ],
    correct: "Prepare for job loss, illness, or unexpected expenses",
  },
  {
    q: "Which is the safest place to store an emergency fund?",
    options: [
      "FDIC-insured savings account",
      "Stock trading account",
      "Cryptocurrency wallet",
      "Peer-to-peer loan app",
    ],
    correct: "FDIC-insured savings account",
  },
  {
    q: "How often should you review your credit report?",
    options: [
      "At least once a year",
      "Every five years",
      "Only when applying for a loan",
      "Never unless fraud occurs",
    ],
    correct: "At least once a year",
  },
  {
    q: "A robo-advisor helps investors by:",
    options: [
      "Automating investment allocation using algorithms",
      "Providing personal tax audits",
      "Setting mortgage rates",
      "Selling insurance policies",
    ],
    correct: "Automating investment allocation using algorithms",
  },
  {
    q: "What is an ETF?",
    options: [
      "Exchange-Traded Fund",
      "Electronic Transfer Fee",
      "Employee Trust Fund",
      "Equity Treasury Facility",
    ],
    correct: "Exchange-Traded Fund",
  },
  {
    q: "What does diversification reduce but not eliminate?",
    options: [
      "Unsystematic (specific) risk",
      "Systematic (market) risk",
      "Inflation",
      "Tax obligations",
    ],
    correct: "Unsystematic (specific) risk",
  },
  {
    q: "Which government document shows your annual earnings and taxes withheld?",
    options: ["W-2 form", "W-4 form", "1040-EZ", "I-9"],
    correct: "W-2 form",
  },
  {
    q: "Which account provides both spending flexibility and limited interest?",
    options: [
      "Money market account",
      "Certificate of deposit",
      "401(k)",
      "IRA",
    ],
    correct: "Money market account",
  },
  {
    q: "What’s the key feature of a Roth IRA?",
    options: [
      "Tax-free withdrawals after retirement",
      "Tax deduction on contributions",
      "Employer matching required",
      "Mandatory withdrawals at 59½",
    ],
    correct: "Tax-free withdrawals after retirement",
  },
  {
    q: "A 529 plan is primarily for:",
    options: [
      "Education savings with tax advantages",
      "Healthcare coverage",
      "Mortgage repayment",
      "Retirement savings",
    ],
    correct: "Education savings with tax advantages",
  },
  {
    q: "How can you improve your net worth?",
    options: [
      "Increase assets and reduce liabilities",
      "Increase both debt and income",
      "Ignore savings",
      "Avoid insurance",
    ],
    correct: "Increase assets and reduce liabilities",
  },
  {
    q: "Which term describes money left over after all bills and savings?",
    options: [
      "Discretionary income",
      "Gross income",
      "Net worth",
      "Capital gains",
    ],
    correct: "Discretionary income",
  },
  {
    q: "Which investment is most liquid?",
    options: ["Cash", "Real estate", "Fine art", "Bonds"],
    correct: "Cash",
  },
  {
    q: "What is dollar-cost averaging?",
    options: [
      "Investing a fixed amount at regular intervals regardless of market price",
      "Withdrawing funds when prices drop",
      "Converting cash into gold monthly",
      "Changing banks each year",
    ],
    correct:
      "Investing a fixed amount at regular intervals regardless of market price",
  },
  {
    q: "A financial portfolio with 70% stocks and 30% bonds is best suited for:",
    options: [
      "Moderate to aggressive investors",
      "Short-term traders",
      "High-risk gamblers",
      "Retirees only",
    ],
    correct: "Moderate to aggressive investors",
  },
  {
    q: "What does 'living below your means' imply?",
    options: [
      "Spending less than you earn",
      "Avoiding taxes entirely",
      "Taking frequent loans",
      "Maxing out credit cards monthly",
    ],
    correct: "Spending less than you earn",
  },
  {
    q: "What is the safest type of government bond in the U.S.?",
    options: [
      "U.S. Treasury bond",
      "Municipal bond",
      "Corporate bond",
      "Foreign sovereign bond",
    ],
    correct: "U.S. Treasury bond",
  },
  {
    q: "A good financial habit for reducing debt is:",
    options: [
      "Paying more than the minimum payment monthly",
      "Skipping payments occasionally",
      "Consolidating with payday loans",
      "Ignoring low-interest balances",
    ],
    correct: "Paying more than the minimum payment monthly",
  },
  {
    q: "Which insurance helps replace lost income from disability?",
    options: [
      "Disability insurance",
      "Auto insurance",
      "Homeowner’s insurance",
      "Travel insurance",
    ],
    correct: "Disability insurance",
  },
  {
    q: "What is identity theft protection primarily designed for?",
    options: [
      "Monitoring and alerting you to unauthorized use of personal information",
      "Increasing credit limits",
      "Negotiating loan interest",
      "Selling financial data to agencies",
    ],
    correct:
      "Monitoring and alerting you to unauthorized use of personal information",
  },
  {
    q: "What is an example of a long-term financial goal?",
    options: [
      "Saving for retirement",
      "Buying groceries",
      "Paying monthly phone bill",
      "Weekend trip",
    ],
    correct: "Saving for retirement",
  },
  {
    q: "Which of these is a non-essential expense?",
    options: [
      "Streaming subscription",
      "Electric bill",
      "Rent",
      "Health insurance",
    ],
    correct: "Streaming subscription",
  },
  {
    q: "What’s the 4% rule in retirement planning?",
    options: [
      "Withdraw 4% of retirement savings annually to make funds last 30 years",
      "Save 4% of income yearly",
      "Earn 4% return monthly",
      "Retire at 40% savings rate",
    ],
    correct:
      "Withdraw 4% of retirement savings annually to make funds last 30 years",
  },
  {
    q: "What is inflation-adjusted return?",
    options: [
      "Investment return after subtracting inflation impact",
      "Gross interest earned before inflation",
      "Taxable income from dividends",
      "Annual salary increase percentage",
    ],
    correct: "Investment return after subtracting inflation impact",
  },
  {
    q: "Which step comes first in building wealth?",
    options: [
      "Creating a budget and emergency fund",
      "Investing in high-risk stocks",
      "Taking multiple loans",
      "Buying luxury items",
    ],
    correct: "Creating a budget and emergency fund",
  },
  {
    q: "What is a sinking fund strategy useful for?",
    options: [
      "Saving regularly for predictable large expenses",
      "Paying variable monthly costs",
      "Speculative investments",
      "Consolidating credit cards",
    ],
    correct: "Saving regularly for predictable large expenses",
  },
  {
    q: "Which factor most influences long-term investing success?",
    options: [
      "Time in the market, not timing the market",
      "Constantly switching investments",
      "Following daily news headlines",
      "Frequent withdrawals",
    ],
    correct: "Time in the market, not timing the market",
  },
  {
    q: "What does liquidity risk refer to?",
    options: [
      "Inability to quickly sell an asset without significant loss",
      "Fluctuating tax rates",
      "Bank withdrawal limits",
      "Low credit score penalties",
    ],
    correct: "Inability to quickly sell an asset without significant loss",
  },
  {
    q: "What does 'pay yourself first' mean in personal finance?",
    options: [
      "Save a portion of your income before paying other expenses",
      "Buy necessities before luxuries",
      "Spend all on bills first",
      "Donate before saving",
    ],
    correct: "Save a portion of your income before paying other expenses",
  },
  {
    q: "What does financial literacy empower individuals to do?",
    options: [
      "Make informed money decisions and avoid costly mistakes",
      "Eliminate taxes permanently",
      "Predict stock prices accurately",
      "Avoid using banks",
    ],
    correct: "Make informed money decisions and avoid costly mistakes",
  },
  {
    q: "A personal budget should be reviewed:",
    options: [
      "Monthly or when major income/expenses change",
      "Only yearly during tax season",
      "Every five years",
      "Only after overspending",
    ],
    correct: "Monthly or when major income/expenses change",
  },
  {
    q: "What is the purpose of an emergency fund?",
    options: [
      "Provide financial security for unexpected events",
      "Earn high investment returns",
      "Pay for luxury expenses",
      "Fund vacation travel",
    ],
    correct: "Provide financial security for unexpected events",
  },
  {
    q: "The primary goal of personal finance management is:",
    options: [
      "Achieving financial stability and long-term security",
      "Avoiding taxes",
      "Getting rich quickly",
      "Borrowing more money",
    ],
    correct: "Achieving financial stability and long-term security",
  },
  {
    q: "What is compounding frequency?",
    options: [
      "How often interest is added to your balance",
      "How often you deposit cash",
      "Number of credit cards owned",
      "Tax filing rate",
    ],
    correct: "How often interest is added to your balance",
  },
  {
    q: "A personal finance plan should start with:",
    options: [
      "Assessing current financial situation and setting goals",
      "Buying insurance policies",
      "Investing in crypto immediately",
      "Applying for a loan",
    ],
    correct: "Assessing current financial situation and setting goals",
  },
  {
    q: "The best way to track spending patterns is through:",
    options: [
      "Budgeting apps or categorized statements",
      "Manual receipts only",
      "Annual audits",
      "Bank visits weekly",
    ],
    correct: "Budgeting apps or categorized statements",
  },
  {
    q: "What does financial wellness include?",
    options: [
      "Confidence, stability, and ability to manage money effectively",
      "High credit card use",
      "Luxury lifestyle spending",
      "Stock day-trading",
    ],
    correct: "Confidence, stability, and ability to manage money effectively",
  },
  {
    q: "Which factor most determines long-term financial success?",
    options: [
      "Consistent saving and disciplined spending habits",
      "High income with no budget",
      "Frequent credit card use",
      "Avoiding all investments",
    ],
    correct: "Consistent saving and disciplined spending habits",
  },
  {
    q: "What’s the main advantage of automating bill payments?",
    options: [
      "Avoiding late fees and protecting your credit score",
      "Increasing your salary automatically",
      "Doubling your savings account balance",
      "Qualifying for business loans",
    ],
    correct: "Avoiding late fees and protecting your credit score",
  },
  {
    q: "What does inflation do to the value of money over time?",
    options: [
      "Decreases purchasing power",
      "Increases currency value",
      "Stabilizes interest rates",
      "Eliminates debt entirely",
    ],
    correct: "Decreases purchasing power",
  },
  {
    q: "What’s a healthy savings rate recommended for most individuals?",
    options: [
      "At least 15–20% of income",
      "2–3% of income",
      "50% of income minimum",
      "Savings are not necessary if you invest",
    ],
    correct: "At least 15–20% of income",
  },
  {
    q: "Which of these is a fintech innovation in personal finance?",
    options: [
      "Mobile banking and peer-to-peer payment apps",
      "Physical bank passbooks",
      "Manual check writing",
      "Paper bond certificates",
    ],
    correct: "Mobile banking and peer-to-peer payment apps",
  },
  {
    q: "What’s the benefit of setting automatic retirement contributions?",
    options: [
      "Ensures consistent long-term investing without emotional decisions",
      "Maximizes credit card points",
      "Eliminates need for budgeting",
      "Avoids tax filing responsibilities",
    ],
    correct:
      "Ensures consistent long-term investing without emotional decisions",
  },
];

export default function HistoryQuiz({}: Route.ComponentProps) {
  const { faqs } = useLoaderData() as LoaderData;

  const pickRandom = () =>
    [...questionBank].sort(() => 0.5 - Math.random()).slice(0, 3);

  const [displayed, setDisplayed] = useState(pickRandom);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [stats, setStats] = useState(() => ({
    todayAnswered: 0,
    todayCorrect: 0,
    todayStreak: 0,
    todayBest: 0,
    lastDate: new Date().toISOString().slice(0, 10),
  }));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("historyQuizStats");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const today = new Date().toISOString().slice(0, 10);
        if (parsed.lastDate !== today) {
          setStats({
            todayAnswered: 0,
            todayCorrect: 0,
            todayStreak: 0,
            todayBest: parsed.todayBest || 0,
            lastDate: today,
          });
        } else {
          setStats({
            todayAnswered: Number(parsed.todayAnswered) || 0,
            todayCorrect: Number(parsed.todayCorrect) || 0,
            todayStreak: Number(parsed.todayStreak) || 0,
            todayBest: Number(parsed.todayBest) || 0,
            lastDate: today,
          });
        }
      } catch {
        // ignore errors
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("historyQuizStats", JSON.stringify(stats));
    }
  }, [stats]);

  const handleAnswer = (
    question: string,
    selected: string,
    correct: string
  ) => {
    if (answers[question]) return;

    const newAnswers = { ...answers, [question]: selected };
    setAnswers(newAnswers);

    const isCorrect = selected === correct;

    // ✅ Merge previous stats instead of overwriting
    setStats((prev) => ({
      ...prev,
      todayAnswered: prev.todayAnswered + 1,
      todayCorrect: prev.todayCorrect + (isCorrect ? 1 : 0),
      lastDate: new Date().toISOString().slice(0, 10),
    }));

    const totalAnsweredThisRound = Object.keys(newAnswers).length;

    // ✅ Update streak only when all 3 questions are answered
    if (totalAnsweredThisRound === 3) {
      const correctCount = displayed.filter(
        (q) => newAnswers[q.q] === q.correct
      ).length;

      setStats((prev) => {
        const newStreak = correctCount === 3 ? prev.todayStreak + 1 : 0;
        const best = Math.max(prev.todayBest, newStreak);
        return { ...prev, todayStreak: newStreak, todayBest: best };
      });
    }
  };

  const refreshQuiz = () => {
    setDisplayed(pickRandom());
    setAnswers({});
  };

  return (
    <main className="bg-white text-[#0B1B2B]">
      {/* QUIZ SECTION FIRST */}
      <section
        className="relative bg-[#F9FBFD] pb-10 px-4 border-b border-slate-200"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #E5E9EE 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        {/* === Breadcrumb navigation (visible) === */}
        <nav
          className="text-sm text-slate-600 px-6 pb-4 pt-3 max-w-6xl mx-auto"
          aria-label="Breadcrumb"
        >
          <ol className="list-none p-0 inline-flex space-x-2">
            <li>
              <a href="/" className="text-teal-700 hover:underline font-medium">
                Home
              </a>
            </li>
            <li className="text-slate-400">›</li>
            <li aria-current="page" className="text-slate-700 font-semibold">
              Learn History Quizzes
            </li>
          </ol>
        </nav>
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto w-full  min-h-[53vh] sm:w-[720px] text-left rounded-3xl border border-slate-200 bg-white px-10 py-8 shadow-xl">
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm font-semibold text-slate-700 tabular-nums">
              <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-center">
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  Answered
                </div>
                <div className="text-base">{stats.todayAnswered ?? 0}</div>
              </div>
              <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-center">
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  Correct
                </div>
                <div className="text-base">{stats.todayCorrect ?? 0}</div>
              </div>
              <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-center">
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  New Streak
                </div>
                <div className="text-base">{stats.todayStreak ?? 0}</div>
              </div>
              <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-center">
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  Best Streak
                </div>
                <div className="text-base">{stats.todayBest ?? 0}</div>
              </div>
            </div>

            {/* The 3 questions */}
            {displayed.map((item, i) => {
              const chosen = answers[item.q];
              return (
                <div key={i} className="mb-10 last:mb-0">
                  <p className="text-xl font-bold text-[#0B1B2B] mb-4">
                    {i + 1}. {item.q}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {item.options.map((opt) => {
                      const isSelected = chosen === opt;
                      const isCorrect = item.correct === opt;
                      let classes =
                        "bg-teal-50 border-teal-100 text-teal-800 hover:bg-teal-100 hover:border-teal-400";
                      if (chosen) {
                        if (isSelected && isCorrect)
                          classes =
                            "bg-green-100 border-green-400 text-green-900 hover:bg-green-100";
                        else if (isSelected && !isCorrect)
                          classes =
                            "bg-red-100 border-red-400 text-red-900 hover:bg-red-100";
                        else if (isCorrect)
                          classes =
                            "bg-green-50 border-green-200 text-green-800 hover:bg-green-50";
                        else
                          classes =
                            "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-50";
                      }
                      return (
                        <li
                          key={opt}
                          onClick={() =>
                            handleAnswer(item.q, opt, item.correct)
                          }
                          className={`cursor-pointer rounded-xl font-semibold px-5 py-4 text-base border transition active:scale-[0.98] ${classes}`}
                        >
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  {chosen && (
                    <div className="mt-3 text-sm text-slate-700">
                      <span className="font-semibold text-teal-700">
                        Correct Answer:
                      </span>{" "}
                      {item.correct}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Next button */}
            <div className="mb-3 text-center">
              <button
                onClick={refreshQuiz}
                className="cursor-pointer rounded-xl bg-teal-700 px-6 py-2 text-white font-semibold text-lg hover:bg-teal-800 transition"
              >
                NEXT 3 QUESTIONS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE SECTION */}
      <section
        id="history-article"
        className="mx-auto max-w-4xl px-6 py-20 text-center border-b border-slate-200"
      >
        <h1 className="text-4xl font-extrabold text-[#0B1B2B] mb-6">
          The Evolution of Money: From Metal Coins to Digital Wallets
        </h1>

        <div className="mx-auto max-w-3xl text-left space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg">
            The story of money is the story of human civilization itself. As
            trade expanded, societies needed a reliable way to exchange value
            beyond barter. From early metal coins to paper currency and now
            digital assets, money has continuously adapted to reflect
            technological and economic change.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">
              Key Milestones in Financial History
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-medium">Barter to coins:</span> trade
                simplified through standardized metal money.
              </li>
              <li>
                <span className="font-medium">Paper money:</span> originated in
                China for easier large transactions.
              </li>
              <li>
                <span className="font-medium">Central banking:</span>{" "}
                institutions emerged to stabilize currencies and manage
                inflation.
              </li>
              <li>
                <span className="font-medium">Digital finance:</span> electronic
                transfers, credit cards, and cryptocurrencies revolutionized
                value exchange.
              </li>
            </ul>
          </div>

          <p>
            Studying how money evolved helps explain modern banking systems,
            financial regulation, and even the social trust that keeps economies
            functioning across borders.
          </p>

          {/* Citations */}
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
              Citations & References
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                Davies, G. (2016). *A History of Money: From Ancient Times to
                the Present Day.* University of Wales Press.
              </li>
              <li>
                Ferguson, N. (2008). *The Ascent of Money: A Financial History
                of the World.* Penguin Books.
              </li>
              <li>
                BIS. (2023). *Central Bank Digital Currencies: Principles and
                Design.*
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ANSWERS */}
      <section id="quiz-answers" className="mx-auto max-w-5xl px-6 pt-16">
        <h3 className="text-3xl font-bold text-[#0B1B2B] mb-4 text-center">
          Money History Quiz Answers
        </h3>
        <p className="text-slate-700 text-center max-w-2xl mx-auto mb-10">
          Review all historical money questions and answers to better understand
          the origins of modern finance.
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

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-6 pt-24 pb-24">
        <h2 className="text-4xl font-extrabold text-[#0B1B2B] mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="rounded-2xl border border-slate-200 bg-white divide-y divide-slate-200 shadow-sm">
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
      {/* === Structured Data: WebSite + FAQ + Q&A === */}
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

      {/* === FAQPage (for FAQ section only) === */}
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

      {/* === QAPage (for quiz questions, not FAQ) === */}
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
              },
              datePublished: "2025-11-01", // or dynamic
              acceptedAnswer: {
                "@type": "Answer",
                text: q.correct,
                author: {
                  "@type": "Person",
                  name: "Suhas Sunder",
                },
                url: "https://financequizzes.com",
                datePublished: "2025-11-01",
                upvoteCount: 0,
              },
            })),
          }),
        }}
      />

      {/* === BreadcrumbList (for structured data) === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.financequizzes.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Learn History Quizzes",
                item: "https://www.financequizzes.com/learn-history-quizzes",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
