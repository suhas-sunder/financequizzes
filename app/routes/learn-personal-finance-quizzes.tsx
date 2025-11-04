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
    "Personal Finance Quiz | Budgeting, Saving, and Smart Money Habits | FinanceQuizzes.com";
  const description =
    "Master the basics of personal finance-from budgeting and saving to managing debt and setting financial goals. Test your knowledge with this interactive quiz and start improving your money habits today.";
  const url = "https://www.financequizzes.com/learn-personal-finance-quizzes";
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
        q: "Is personal finance only about saving money?",
        a: "No. Personal finance also includes budgeting, investing, managing credit, and setting long-term financial goals.",
      },
      {
        q: "Why should I take this quiz?",
        a: "This quiz helps you assess your understanding of real-world money skills like debt management, emergency savings, and goal planning.",
      },
      {
        q: "Do I need any prior experience with finance?",
        a: "Not at all. It’s designed for beginners and those looking to improve their everyday financial decisions.",
      },
    ],
  });
}

// Personal Finance question bank
const questionBank = [
  {
    q: "What is the recommended minimum size of an emergency fund?",
    options: [
      "1 month of expenses",
      "3 to 6 months of expenses",
      "12 months of expenses",
      "Only credit card access",
    ],
    correct: "3 to 6 months of expenses",
  },
  {
    q: "Which expense should be prioritized in a monthly budget?",
    options: [
      "Entertainment",
      "Housing and utilities",
      "Luxury goods",
      "Subscriptions",
    ],
    correct: "Housing and utilities",
  },
  {
    q: "What is a good credit utilization ratio for maintaining a healthy credit score?",
    options: ["Under 30%", "Around 60%", "About 80%", "100%"],
    correct: "Under 30%",
  },
  {
    q: "What does the '50/30/20' rule in budgeting represent?",
    options: [
      "50% needs, 30% wants, 20% savings or debt repayment",
      "50% investments, 30% income tax, 20% savings",
      "50% housing, 30% food, 20% fun",
      "50% luxury, 30% savings, 20% shopping",
    ],
    correct: "50% needs, 30% wants, 20% savings or debt repayment",
  },
  {
    q: "Which financial product typically offers the highest liquidity?",
    options: ["Stocks", "Savings account", "Real estate", "Retirement fund"],
    correct: "Savings account",
  },
  {
    q: "What is compound interest?",
    options: [
      "Interest earned on both the principal and accumulated interest",
      "Simple interest applied only once per year",
      "Interest calculated on withdrawals only",
      "Interest based on taxes paid",
    ],
    correct: "Interest earned on both the principal and accumulated interest",
  },
  {
    q: "Which account type typically offers the highest interest rates?",
    options: [
      "Certificate of Deposit (CD)",
      "Checking account",
      "Basic savings account",
      "Cash management account",
    ],
    correct: "Certificate of Deposit (CD)",
  },
  {
    q: "What does APR stand for?",
    options: [
      "Annual Percentage Rate",
      "Average Payment Rate",
      "Annualized Profit Ratio",
      "Aggregate Payment Rate",
    ],
    correct: "Annual Percentage Rate",
  },
  {
    q: "Why is paying yourself first an important financial principle?",
    options: [
      "It ensures savings and investments happen before spending",
      "It reduces taxes immediately",
      "It increases debt capacity",
      "It helps calculate your credit score",
    ],
    correct: "It ensures savings and investments happen before spending",
  },
  {
    q: "Which type of account is best for long-term retirement savings with tax benefits?",
    options: ["401(k)", "Checking", "Money market", "Travel fund"],
    correct: "401(k)",
  },
  {
    q: "What is a credit score used for?",
    options: [
      "Measuring your likelihood of repaying borrowed money",
      "Tracking total income",
      "Calculating taxes",
      "Recording investments",
    ],
    correct: "Measuring your likelihood of repaying borrowed money",
  },
  {
    q: "Which factor most affects your credit score?",
    options: ["Payment history", "Age", "Marital status", "Zip code"],
    correct: "Payment history",
  },
  {
    q: "What is an overdraft fee?",
    options: [
      "Fee charged when you spend more than your account balance",
      "Monthly maintenance fee",
      "Loan prepayment penalty",
      "Tax on savings interest",
    ],
    correct: "Fee charged when you spend more than your account balance",
  },
  {
    q: "What does 'net worth' represent?",
    options: [
      "Total assets minus total liabilities",
      "Total income earned annually",
      "Credit card limit",
      "Bank savings only",
    ],
    correct: "Total assets minus total liabilities",
  },
  {
    q: "Which expense is considered discretionary?",
    options: ["Dining out", "Rent", "Utilities", "Car insurance"],
    correct: "Dining out",
  },
  {
    q: "What is the main advantage of using a credit card responsibly?",
    options: [
      "Building a positive credit history",
      "Avoiding all interest charges",
      "Unlimited borrowing",
      "Tax-free income",
    ],
    correct: "Building a positive credit history",
  },
  {
    q: "Which debt should typically be paid off first?",
    options: [
      "High-interest credit card debt",
      "Mortgage",
      "Student loan",
      "Car loan",
    ],
    correct: "High-interest credit card debt",
  },
  {
    q: "What is a budget surplus?",
    options: [
      "When income exceeds expenses",
      "When expenses exceed income",
      "When no savings occur",
      "When you spend exactly your income",
    ],
    correct: "When income exceeds expenses",
  },
  {
    q: "What is a FICO score?",
    options: [
      "A type of credit score used by lenders",
      "An investment account rating",
      "An insurance policy limit",
      "A tax rebate form",
    ],
    correct: "A type of credit score used by lenders",
  },
  {
    q: "What is a major drawback of payday loans?",
    options: [
      "Extremely high interest rates and fees",
      "Low approval rates",
      "Government restrictions",
      "Lack of repayment flexibility",
    ],
    correct: "Extremely high interest rates and fees",
  },
  {
    q: "What’s the difference between gross income and net income?",
    options: [
      "Net income is after taxes and deductions; gross is before",
      "Gross income includes savings interest only",
      "Net income includes bonuses only",
      "They are the same thing",
    ],
    correct: "Net income is after taxes and deductions; gross is before",
  },
  {
    q: "What is diversification in personal finance?",
    options: [
      "Spreading money across multiple assets to reduce risk",
      "Investing in one company only",
      "Spending across many categories",
      "Avoiding savings accounts",
    ],
    correct: "Spreading money across multiple assets to reduce risk",
  },
  {
    q: "Which document is needed to file income taxes in the U.S.?",
    options: [
      "W-2 form",
      "Driver’s license",
      "Bank statement",
      "Birth certificate",
    ],
    correct: "W-2 form",
  },
  {
    q: "What does refinancing a loan mean?",
    options: [
      "Replacing an existing loan with a new one for better terms",
      "Paying off debt early",
      "Missing a payment intentionally",
      "Borrowing additional money on the same loan",
    ],
    correct: "Replacing an existing loan with a new one for better terms",
  },
  {
    q: "Which type of retirement account is taxed at withdrawal?",
    options: ["Traditional IRA", "Roth IRA", "HSA", "529 Plan"],
    correct: "Traditional IRA",
  },
  {
    q: "What is a certificate of deposit (CD)?",
    options: [
      "A time deposit account with a fixed interest rate and maturity date",
      "A savings bond",
      "An insurance policy",
      "A retirement plan",
    ],
    correct:
      "A time deposit account with a fixed interest rate and maturity date",
  },
  {
    q: "What is inflation?",
    options: [
      "The rise in the general level of prices over time",
      "Increase in taxes",
      "Government spending growth",
      "Decline in wages",
    ],
    correct: "The rise in the general level of prices over time",
  },
  {
    q: "Why is inflation important to consider in saving?",
    options: [
      "It reduces purchasing power over time",
      "It increases real value of savings",
      "It doubles your returns",
      "It has no effect on savings",
    ],
    correct: "It reduces purchasing power over time",
  },
  {
    q: "What is the difference between a debit card and a credit card?",
    options: [
      "Debit uses your own money; credit borrows from the bank",
      "Credit uses cash balance; debit borrows funds",
      "Both are loans",
      "They have identical protections",
    ],
    correct: "Debit uses your own money; credit borrows from the bank",
  },
  {
    q: "What does an emergency fund provide?",
    options: [
      "Financial safety during unexpected expenses",
      "Investment growth opportunity",
      "Tax deductions",
      "Loan forgiveness",
    ],
    correct: "Financial safety during unexpected expenses",
  },
  {
    q: "Which financial ratio measures how much of your income goes toward debt?",
    options: [
      "Debt-to-Income Ratio (DTI)",
      "Net Worth Ratio",
      "Liquidity Ratio",
      "Credit Utilization Ratio",
    ],
    correct: "Debt-to-Income Ratio (DTI)",
  },
  {
    q: "Which type of loan is secured by property?",
    options: ["Mortgage", "Credit card", "Student loan", "Payday loan"],
    correct: "Mortgage",
  },
  {
    q: "What is opportunity cost?",
    options: [
      "The value of what you give up when making a choice",
      "A tax on investments",
      "Interest on loans",
      "Cost of financial advisors",
    ],
    correct: "The value of what you give up when making a choice",
  },
  {
    q: "What’s one benefit of a high credit score?",
    options: [
      "Lower interest rates on loans and credit cards",
      "Guaranteed loan approval",
      "Tax exemption",
      "Higher bank fees",
    ],
    correct: "Lower interest rates on loans and credit cards",
  },
  {
    q: "What does FDIC insurance protect?",
    options: [
      "Deposits in banks up to the insured limit",
      "Investments in stocks",
      "Retirement contributions",
      "Cryptocurrency holdings",
    ],
    correct: "Deposits in banks up to the insured limit",
  },
  {
    q: "Which financial tool helps track spending habits?",
    options: [
      "Budgeting app",
      "Credit card",
      "Loan statement",
      "Tax refund form",
    ],
    correct: "Budgeting app",
  },
  {
    q: "Why should you diversify your income sources?",
    options: [
      "To reduce financial risk if one source is lost",
      "To increase tax liability",
      "To simplify budgeting",
      "To lower savings rates",
    ],
    correct: "To reduce financial risk if one source is lost",
  },
  {
    q: "What is a financial goal?",
    options: [
      "A specific target for saving or spending money",
      "A loan payoff date only",
      "A credit score benchmark",
      "A random expense plan",
    ],
    correct: "A specific target for saving or spending money",
  },
  {
    q: "What is a 529 Plan used for?",
    options: [
      "Saving for education expenses",
      "Health insurance premiums",
      "Home improvement",
      "Emergency savings",
    ],
    correct: "Saving for education expenses",
  },
  {
    q: "Which statement best describes net income?",
    options: [
      "Earnings left after taxes and deductions",
      "Total amount earned before deductions",
      "Total income from all sources",
      "Interest income only",
    ],
    correct: "Earnings left after taxes and deductions",
  },
  {
    q: "What is a financial advisor’s role?",
    options: [
      "Provide personalized advice on managing money and investments",
      "Sell insurance only",
      "File taxes for free",
      "Issue loans to clients",
    ],
    correct: "Provide personalized advice on managing money and investments",
  },
  {
    q: "What’s the 72 rule used for?",
    options: [
      "Estimate how long it takes to double money at a given interest rate",
      "Calculate taxes owed",
      "Predict inflation",
      "Estimate insurance premiums",
    ],
    correct:
      "Estimate how long it takes to double money at a given interest rate",
  },
  {
    q: "Why is setting financial priorities important?",
    options: [
      "It helps allocate resources toward the most critical goals",
      "It limits your investment options",
      "It prevents credit score changes",
      "It guarantees higher pay",
    ],
    correct: "It helps allocate resources toward the most critical goals",
  },
  {
    q: "What does it mean to live within your means?",
    options: [
      "Spending less than or equal to your income",
      "Spending more than your income and relying on credit",
      "Earning money only from one source",
      "Ignoring your budget and saving occasionally",
    ],
    correct: "Spending less than or equal to your income",
  },
  {
    q: "What is the purpose of an HSA (Health Savings Account)?",
    options: [
      "To save pre-tax money for medical expenses",
      "To pay insurance premiums",
      "To invest in stocks only",
      "To fund retirement entirely",
    ],
    correct: "To save pre-tax money for medical expenses",
  },
  {
    q: "What is an example of a fixed expense?",
    options: [
      "Monthly rent or mortgage",
      "Groceries",
      "Electric bill",
      "Dining out",
    ],
    correct: "Monthly rent or mortgage",
  },
  {
    q: "What is an example of a variable expense?",
    options: [
      "Clothing purchases",
      "Mortgage payment",
      "Insurance premium",
      "Car loan payment",
    ],
    correct: "Clothing purchases",
  },
  {
    q: "Why should you automate your savings?",
    options: [
      "It ensures consistent saving without relying on willpower",
      "It increases your tax refund",
      "It earns higher interest automatically",
      "It reduces credit utilization",
    ],
    correct: "It ensures consistent saving without relying on willpower",
  },
  {
    q: "What is a sinking fund?",
    options: [
      "Money set aside regularly for a future expense",
      "A loan repayment account",
      "An investment fund for stocks",
      "A type of retirement account",
    ],
    correct: "Money set aside regularly for a future expense",
  },
  {
    q: "What’s the benefit of setting SMART financial goals?",
    options: [
      "They are specific, measurable, achievable, relevant, and time-bound",
      "They allow unlimited spending",
      "They focus on short-term rewards only",
      "They remove the need for saving",
    ],
    correct:
      "They are specific, measurable, achievable, relevant, and time-bound",
  },
  {
    q: "What is the snowball method for paying off debt?",
    options: [
      "Paying smallest debts first while maintaining minimums on others",
      "Paying highest-interest debts first",
      "Consolidating all loans into one payment",
      "Skipping small debts temporarily",
    ],
    correct: "Paying smallest debts first while maintaining minimums on others",
  },
  {
    q: "What is the avalanche method for paying off debt?",
    options: [
      "Paying debts with the highest interest rate first",
      "Paying debts in order of size",
      "Paying random debts monthly",
      "Skipping minimum payments to save",
    ],
    correct: "Paying debts with the highest interest rate first",
  },
  {
    q: "What’s one advantage of paying your credit card in full each month?",
    options: [
      "Avoiding all interest charges",
      "Increasing credit utilization",
      "Boosting APR",
      "Lowering credit score",
    ],
    correct: "Avoiding all interest charges",
  },
  {
    q: "What is a financial emergency fund used for?",
    options: [
      "Unexpected costs like medical bills or car repairs",
      "Luxury vacations",
      "Down payment on a house",
      "Regular monthly bills",
    ],
    correct: "Unexpected costs like medical bills or car repairs",
  },
  {
    q: "What is the purpose of renter’s insurance?",
    options: [
      "To protect personal belongings in a rented home or apartment",
      "To cover property owners only",
      "To insure landlords from tenants",
      "To reduce rent payments",
    ],
    correct: "To protect personal belongings in a rented home or apartment",
  },
  {
    q: "What is a will used for in personal finance?",
    options: [
      "To specify how assets are distributed after death",
      "To calculate taxes",
      "To manage daily expenses",
      "To open an investment account",
    ],
    correct: "To specify how assets are distributed after death",
  },
  {
    q: "Which retirement account is employer-sponsored?",
    options: ["401(k)", "IRA", "Roth IRA", "HSA"],
    correct: "401(k)",
  },
  {
    q: "What is the main advantage of a Roth IRA?",
    options: [
      "Withdrawals in retirement are tax-free",
      "You can withdraw anytime without penalty",
      "It offers guaranteed returns",
      "It provides employer matching automatically",
    ],
    correct: "Withdrawals in retirement are tax-free",
  },
  {
    q: "What is diversification in investing?",
    options: [
      "Spreading investments across different assets to reduce risk",
      "Putting all money into one high-performing stock",
      "Focusing only on cash savings",
      "Avoiding all risky assets",
    ],
    correct: "Spreading investments across different assets to reduce risk",
  },
  {
    q: "Which of the following is a short-term financial goal?",
    options: [
      "Saving for a vacation",
      "Buying a home in 15 years",
      "Saving for retirement",
      "Building generational wealth",
    ],
    correct: "Saving for a vacation",
  },
  {
    q: "What is one advantage of compound interest over simple interest?",
    options: [
      "It grows faster because you earn interest on interest",
      "It provides tax deductions",
      "It increases your credit score",
      "It guarantees no losses",
    ],
    correct: "It grows faster because you earn interest on interest",
  },
  {
    q: "What is identity theft protection insurance?",
    options: [
      "Coverage that helps recover from fraudulent use of your identity",
      "Insurance for property loss only",
      "Life insurance coverage",
      "Loan default protection",
    ],
    correct: "Coverage that helps recover from fraudulent use of your identity",
  },
  {
    q: "Why is paying more than the minimum payment on a credit card beneficial?",
    options: [
      "It reduces interest costs and debt faster",
      "It increases your APR",
      "It decreases your available credit",
      "It hurts your credit score",
    ],
    correct: "It reduces interest costs and debt faster",
  },
  {
    q: "What is the purpose of a financial plan?",
    options: [
      "To guide spending, saving, and investing decisions toward goals",
      "To estimate annual taxes only",
      "To track entertainment spending",
      "To manage only credit card use",
    ],
    correct: "To guide spending, saving, and investing decisions toward goals",
  },
  {
    q: "What is tax withholding?",
    options: [
      "Money an employer deducts from your paycheck for taxes",
      "Voluntary contribution to retirement",
      "Employer-paid bonus",
      "Interest earned from bonds",
    ],
    correct: "Money an employer deducts from your paycheck for taxes",
  },
  {
    q: "Which form reports your annual wages and tax withholdings?",
    options: ["W-2", "1040", "W-9", "1099-DIV"],
    correct: "W-2",
  },
  {
    q: "What is the main purpose of a credit report?",
    options: [
      "To show your borrowing and repayment history",
      "To calculate your tax refund",
      "To predict future income",
      "To record savings account balances",
    ],
    correct: "To show your borrowing and repayment history",
  },
  {
    q: "Which expense is often considered a ‘need’?",
    options: ["Food", "Streaming subscriptions", "Luxury clothing", "Concerts"],
    correct: "Food",
  },
  {
    q: "What is an example of a good debt?",
    options: [
      "A student loan that increases future earning potential",
      "A high-interest payday loan",
      "Unpaid credit card balance",
      "Luxury car lease",
    ],
    correct: "A student loan that increases future earning potential",
  },
  {
    q: "Why should you review your credit report annually?",
    options: [
      "To check for errors or fraudulent accounts",
      "To increase your credit limit",
      "To lower your APR automatically",
      "To stop receiving statements",
    ],
    correct: "To check for errors or fraudulent accounts",
  },
  {
    q: "What is the difference between saving and investing?",
    options: [
      "Saving keeps money safe; investing aims for higher returns with risk",
      "Investing has no risk",
      "Saving guarantees high returns",
      "They are identical financial actions",
    ],
    correct:
      "Saving keeps money safe; investing aims for higher returns with risk",
  },
  {
    q: "Why is insurance an important part of personal finance?",
    options: [
      "It protects against unexpected financial losses",
      "It guarantees investment growth",
      "It replaces emergency funds",
      "It eliminates all financial risk",
    ],
    correct: "It protects against unexpected financial losses",
  },
  {
    q: "What does 'pay yourself first' mean in saving?",
    options: [
      "Set aside savings before paying bills or discretionary expenses",
      "Spend first, save later if possible",
      "Wait until the end of the month to save",
      "Save only leftover money",
    ],
    correct: "Set aside savings before paying bills or discretionary expenses",
  },
  {
    q: "What is a mutual fund?",
    options: [
      "A collection of investments managed by professionals",
      "A type of savings account",
      "A retirement-only account",
      "A short-term loan fund",
    ],
    correct: "A collection of investments managed by professionals",
  },
  {
    q: "What is the main difference between term and whole life insurance?",
    options: [
      "Term lasts for a set period; whole life lasts a lifetime with cash value",
      "Whole life costs less but expires sooner",
      "Term insurance builds investment value",
      "Whole life is only for employers",
    ],
    correct:
      "Term lasts for a set period; whole life lasts a lifetime with cash value",
  },
  {
    q: "What does the term 'liquid asset' mean?",
    options: [
      "An asset that can be quickly converted into cash",
      "A long-term real estate investment",
      "An asset tied to a loan",
      "An asset that cannot be sold easily",
    ],
    correct: "An asset that can be quickly converted into cash",
  },
  {
    q: "Which of these is a financial scam warning sign?",
    options: [
      "Guaranteed high returns with no risk",
      "Diversified investment strategy",
      "Licensed financial advisor",
      "Standard disclosure documents",
    ],
    correct: "Guaranteed high returns with no risk",
  },
  {
    q: "Why is an emergency fund different from a savings goal?",
    options: [
      "It’s reserved only for unexpected expenses",
      "It’s used for planned purchases",
      "It’s invested in the stock market",
      "It earns tax deductions",
    ],
    correct: "It’s reserved only for unexpected expenses",
  },
  {
    q: "What is one downside of withdrawing from a retirement account early?",
    options: [
      "You may owe taxes and penalties",
      "You earn more interest",
      "It improves your credit score",
      "It increases employer match",
    ],
    correct: "You may owe taxes and penalties",
  },
  {
    q: "What is an example of passive income?",
    options: [
      "Rental property income",
      "Hourly wages",
      "Tips from service jobs",
      "Commission payments",
    ],
    correct: "Rental property income",
  },
  {
    q: "What’s a credit utilization ratio?",
    options: [
      "The percentage of available credit you’re using",
      "The total number of credit cards you have",
      "Your interest rate on loans",
      "The ratio of savings to spending",
    ],
    correct: "The percentage of available credit you’re using",
  },
  {
    q: "What is the main goal of retirement planning?",
    options: [
      "Ensuring sufficient income to live comfortably without working",
      "Reducing taxes during employment",
      "Buying assets quickly",
      "Avoiding investment entirely",
    ],
    correct: "Ensuring sufficient income to live comfortably without working",
  },
  {
    q: "What is a credit limit?",
    options: [
      "The maximum amount you can borrow on a credit account",
      "The minimum payment required monthly",
      "The interest rate on a card",
      "The total credit score range",
    ],
    correct: "The maximum amount you can borrow on a credit account",
  },
  {
    q: "Why should you check your bank statements regularly?",
    options: [
      "To identify errors or unauthorized transactions early",
      "To increase your credit limit",
      "To raise your interest rate",
      "To close unused accounts automatically",
    ],
    correct: "To identify errors or unauthorized transactions early",
  },
  {
    q: "What is a budget deficit?",
    options: [
      "When expenses exceed income",
      "When savings exceed expenses",
      "When income equals spending",
      "When you have no debts",
    ],
    correct: "When expenses exceed income",
  },
  {
    q: "Which account type is typically insured by the FDIC?",
    options: [
      "Checking and savings accounts",
      "Mutual funds",
      "Stocks",
      "Cryptocurrency wallets",
    ],
    correct: "Checking and savings accounts",
  },
  {
    q: "What is the main goal of tax planning?",
    options: [
      "To legally minimize taxes and maximize after-tax income",
      "To delay filing taxes indefinitely",
      "To avoid paying any taxes",
      "To increase tax brackets",
    ],
    correct: "To legally minimize taxes and maximize after-tax income",
  },
  {
    q: "Why is diversification important in a retirement portfolio?",
    options: [
      "It spreads risk across multiple investments",
      "It guarantees higher returns",
      "It eliminates taxes",
      "It doubles the value automatically",
    ],
    correct: "It spreads risk across multiple investments",
  },
  {
    q: "What is an example of an appreciating asset?",
    options: ["Real estate", "Car", "Laptop", "Clothing"],
    correct: "Real estate",
  },
  {
    q: "What is an example of a depreciating asset?",
    options: ["Automobile", "Land", "Gold", "Antiques"],
    correct: "Automobile",
  },
  {
    q: "What is a financial windfall?",
    options: [
      "An unexpected large amount of money received",
      "A steady paycheck",
      "A tax penalty",
      "A late loan payment",
    ],
    correct: "An unexpected large amount of money received",
  },
  {
    q: "What is the first step in creating a personal budget?",
    options: [
      "Tracking income and expenses",
      "Opening a new credit card",
      "Applying for a loan",
      "Buying insurance",
    ],
    correct: "Tracking income and expenses",
  },
  {
    q: "Why is it risky to co-sign a loan?",
    options: [
      "You are legally responsible if the borrower defaults",
      "It increases your credit score",
      "It guarantees tax deductions",
      "It provides insurance coverage",
    ],
    correct: "You are legally responsible if the borrower defaults",
  },
  {
    q: "What is the benefit of compound interest when investing early?",
    options: [
      "The longer your money grows, the more exponential the returns",
      "It eliminates market volatility",
      "It avoids inflation risk",
      "It prevents losses during recessions",
    ],
    correct: "The longer your money grows, the more exponential the returns",
  },
  {
    q: "What is a financial liability?",
    options: [
      "Something you owe, such as a loan or debt",
      "An income source",
      "A valuable investment",
      "A tax refund",
    ],
    correct: "Something you owe, such as a loan or debt",
  },
  {
    q: "Why is paying bills on time important?",
    options: [
      "It protects your credit score and avoids late fees",
      "It increases your interest rates",
      "It reduces your paycheck",
      "It creates more debt",
    ],
    correct: "It protects your credit score and avoids late fees",
  },
  {
    q: "What is the difference between assets and liabilities?",
    options: [
      "Assets add value, liabilities take it away",
      "Liabilities are investments",
      "Assets are expenses only",
      "They mean the same thing",
    ],
    correct: "Assets add value, liabilities take it away",
  },
  {
    q: "What is the best use of a tax refund?",
    options: [
      "Paying off high-interest debt or adding to savings",
      "Buying luxury goods",
      "Ignoring it until next year",
      "Using it only for entertainment",
    ],
    correct: "Paying off high-interest debt or adding to savings",
  },
  {
    q: "What is dollar-cost averaging?",
    options: [
      "Investing a fixed amount regularly regardless of market price",
      "Buying all investments at once",
      "Selling when prices rise",
      "Timing the market perfectly",
    ],
    correct: "Investing a fixed amount regularly regardless of market price",
  },
  {
    q: "What is the time value of money?",
    options: [
      "Money today is worth more than the same amount in the future",
      "Money has the same value over time",
      "Money loses value only in banks",
      "Money cannot grow with interest",
    ],
    correct: "Money today is worth more than the same amount in the future",
  },
  {
    q: "What is a common advantage of online banks?",
    options: [
      "Higher interest rates and lower fees",
      "More physical locations",
      "Manual transactions only",
      "No account security",
    ],
    correct: "Higher interest rates and lower fees",
  },
  {
    q: "What is an example of good financial behavior?",
    options: [
      "Tracking spending and saving regularly",
      "Using payday loans monthly",
      "Ignoring bills",
      "Carrying high credit card balances",
    ],
    correct: "Tracking spending and saving regularly",
  },
  {
    q: "What does refinancing a mortgage do?",
    options: [
      "Replaces an old loan with a new one, often with better rates",
      "Adds extra years to a loan automatically",
      "Cancels homeownership rights",
      "Stops interest accumulation",
    ],
    correct: "Replaces an old loan with a new one, often with better rates",
  },
  {
    q: "What is a financial advisor’s fiduciary duty?",
    options: [
      "To act in the best financial interest of the client",
      "To earn commissions regardless of outcomes",
      "To sell as many products as possible",
      "To represent the government",
    ],
    correct: "To act in the best financial interest of the client",
  },
  {
    q: "What is the purpose of credit utilization ratio monitoring?",
    options: [
      "To maintain credit card use below 30% of total limit",
      "To determine APR",
      "To calculate loan maturity",
      "To manage taxes",
    ],
    correct: "To maintain credit card use below 30% of total limit",
  },
  {
    q: "What is a financial safety net?",
    options: [
      "Savings and insurance used to handle unexpected events",
      "Stock investments only",
      "Credit cards and loans",
      "Government grants",
    ],
    correct: "Savings and insurance used to handle unexpected events",
  },
  {
    q: "What’s one benefit of using a retirement account early in life?",
    options: [
      "More time for compound growth",
      "Guaranteed returns",
      "Tax-free withdrawals anytime",
      "Higher interest immediately",
    ],
    correct: "More time for compound growth",
  },
  {
    q: "Which expense category is typically easiest to reduce when cutting costs?",
    options: [
      "Discretionary spending",
      "Housing",
      "Utilities",
      "Insurance premiums",
    ],
    correct: "Discretionary spending",
  },
  {
    q: "What is a grace period on a credit card?",
    options: [
      "Time after the billing cycle before interest is charged",
      "The period before your first payment is due on a loan",
      "A payment holiday for mortgages",
      "Time allowed for credit score updates",
    ],
    correct: "Time after the billing cycle before interest is charged",
  },
  {
    q: "What’s the purpose of an estate plan?",
    options: [
      "To manage and distribute assets efficiently after death",
      "To calculate annual income taxes",
      "To refinance property",
      "To close financial accounts",
    ],
    correct: "To manage and distribute assets efficiently after death",
  },
  {
    q: "What is a common financial red flag?",
    options: [
      "Living paycheck to paycheck without savings",
      "Using a budget app",
      "Tracking spending habits",
      "Paying bills on time",
    ],
    correct: "Living paycheck to paycheck without savings",
  },
  {
    q: "Which financial product helps cover medical expenses after retirement?",
    options: [
      "Medicare",
      "Auto insurance",
      "Term life",
      "Homeowners insurance",
    ],
    correct: "Medicare",
  },
  {
    q: "What does liquidity risk mean?",
    options: [
      "Difficulty converting assets to cash quickly without loss",
      "Risk of theft",
      "Risk of inflation",
      "Risk of high taxes",
    ],
    correct: "Difficulty converting assets to cash quickly without loss",
  },
  {
    q: "Which is a benefit of tracking your net worth?",
    options: [
      "It shows progress toward long-term goals and debt reduction",
      "It increases spending ability",
      "It guarantees loan approval",
      "It replaces tax filing",
    ],
    correct: "It shows progress toward long-term goals and debt reduction",
  },
  {
    q: "What is a financial portfolio?",
    options: [
      "A collection of assets such as stocks, bonds, and cash",
      "A tax filing form",
      "A credit card list",
      "A loan document",
    ],
    correct: "A collection of assets such as stocks, bonds, and cash",
  },
  {
    q: "What is a tax credit?",
    options: [
      "A direct reduction of the amount of tax owed",
      "An increase in taxable income",
      "A deduction from gross income",
      "A penalty for late filing",
    ],
    correct: "A direct reduction of the amount of tax owed",
  },
  {
    q: "What is a 401(k) employer match?",
    options: [
      "Employer contributions that match part of your own retirement savings",
      "A yearly bonus unrelated to savings",
      "A government-funded pension",
      "A mandatory tax deduction",
    ],
    correct:
      "Employer contributions that match part of your own retirement savings",
  },
  {
    q: "Why is an adjustable-rate mortgage considered riskier than a fixed-rate mortgage?",
    options: [
      "The interest rate can increase over time",
      "It requires a longer approval process",
      "It reduces principal payments",
      "It cannot be refinanced",
    ],
    correct: "The interest rate can increase over time",
  },
  {
    q: "What is behavioral finance?",
    options: [
      "The study of how emotions influence financial decisions",
      "The management of insurance claims",
      "Government tax filing systems",
      "Predicting inflation only",
    ],
    correct: "The study of how emotions influence financial decisions",
  },
  {
    q: "What is the key benefit of automatic bill pay?",
    options: [
      "Prevents missed payments and late fees",
      "Increases credit card rewards",
      "Delays due dates",
      "Lowers credit utilization",
    ],
    correct: "Prevents missed payments and late fees",
  },
  {
    q: "Why is it important to diversify income sources?",
    options: [
      "It reduces risk if one job or business fails",
      "It increases tax liability",
      "It lowers net worth",
      "It prevents savings growth",
    ],
    correct: "It reduces risk if one job or business fails",
  },
  {
    q: "What is a financial goal milestone?",
    options: [
      "A checkpoint to measure progress toward a larger goal",
      "A random monthly expense",
      "A debt payment deadline",
      "A tax filing date",
    ],
    correct: "A checkpoint to measure progress toward a larger goal",
  },
  {
    q: "What is the difference between saving and investing in terms of risk?",
    options: [
      "Saving carries lower risk but lower returns; investing has higher risk and potential reward",
      "Investing carries no risk",
      "Saving always outperforms investing",
      "They are equally risky",
    ],
    correct:
      "Saving carries lower risk but lower returns; investing has higher risk and potential reward",
  },
  {
    q: "Why is setting up direct deposit beneficial?",
    options: [
      "It ensures faster, automatic transfer of income into your account",
      "It delays payments",
      "It prevents online banking access",
      "It increases employer taxes",
    ],
    correct:
      "It ensures faster, automatic transfer of income into your account",
  },
  {
    q: "What is inflation risk?",
    options: [
      "The risk that rising prices erode purchasing power",
      "The risk of job loss",
      "The risk of market crashes",
      "The risk of credit denial",
    ],
    correct: "The risk that rising prices erode purchasing power",
  },
  {
    q: "What is an example of responsible credit use?",
    options: [
      "Paying balances in full each month",
      "Maxing out credit cards frequently",
      "Skipping payments occasionally",
      "Applying for multiple cards monthly",
    ],
    correct: "Paying balances in full each month",
  },
  {
    q: "What’s the purpose of a savings goal tracker?",
    options: [
      "To visualize progress toward specific targets",
      "To manage loan payments",
      "To increase taxes",
      "To predict inflation",
    ],
    correct: "To visualize progress toward specific targets",
  },
  {
    q: "Why is an emergency fund important even with insurance?",
    options: [
      "Insurance may not cover all immediate or small expenses",
      "It replaces insurance entirely",
      "It guarantees profit",
      "It removes need for budgeting",
    ],
    correct: "Insurance may not cover all immediate or small expenses",
  },
  {
    q: "What does compounding frequency affect?",
    options: [
      "How often interest is added to principal, influencing total growth",
      "The tax bracket of savings accounts",
      "The risk level of investments",
      "The repayment schedule of loans",
    ],
    correct:
      "How often interest is added to principal, influencing total growth",
  },
  {
    q: "What is a side hustle?",
    options: [
      "An additional income stream outside your main job",
      "A government benefit",
      "A retirement fund",
      "A financial penalty",
    ],
    correct: "An additional income stream outside your main job",
  },
  {
    q: "Why is understanding taxes part of financial literacy?",
    options: [
      "It helps you plan deductions, credits, and take-home pay accurately",
      "It prevents all tax payments",
      "It eliminates debt automatically",
      "It guarantees higher refunds",
    ],
    correct:
      "It helps you plan deductions, credits, and take-home pay accurately",
  },
  {
    q: "What is a good first step toward building wealth?",
    options: [
      "Consistent saving and living below your means",
      "Taking large investment risks immediately",
      "Borrowing to invest aggressively",
      "Ignoring budgets for flexibility",
    ],
    correct: "Consistent saving and living below your means",
  },
  {
    q: "Why should you avoid carrying a credit card balance?",
    options: [
      "Because interest compounds daily, increasing debt quickly",
      "Because it helps raise your APR",
      "Because it lowers taxes",
      "Because it builds net worth",
    ],
    correct: "Because interest compounds daily, increasing debt quickly",
  },
  {
    q: "What is a financial literacy course designed to teach?",
    options: [
      "Budgeting, credit, investing, and money management skills",
      "Only stock trading",
      "Tax evasion techniques",
      "Foreign exchange trading exclusively",
    ],
    correct: "Budgeting, credit, investing, and money management skills",
  },
  {
    q: "Why is goal-based investing beneficial?",
    options: [
      "It aligns investments with specific time horizons and objectives",
      "It guarantees constant returns",
      "It removes need for budgeting",
      "It eliminates taxes completely",
    ],
    correct: "It aligns investments with specific time horizons and objectives",
  },
  {
    q: "What is the primary difference between gross pay and take-home pay?",
    options: [
      "Take-home pay is after taxes and deductions",
      "Gross pay excludes overtime",
      "Gross pay is your net worth",
      "They are identical values",
    ],
    correct: "Take-home pay is after taxes and deductions",
  },
  {
    q: "What is the benefit of creating a zero-based budget?",
    options: [
      "Every dollar is assigned a purpose, preventing wasteful spending",
      "It ignores discretionary expenses",
      "It automatically increases income",
      "It only tracks savings goals",
    ],
    correct: "Every dollar is assigned a purpose, preventing wasteful spending",
  },
  {
    q: "Why is financial discipline more important than income for wealth building?",
    options: [
      "Because consistent saving habits create wealth regardless of salary size",
      "Because higher income always causes more spending",
      "Because wealth only comes from investments",
      "Because budgeting is unnecessary at high income levels",
    ],
    correct:
      "Because consistent saving habits create wealth regardless of salary size",
  },
  {
    q: "What is a tax deduction?",
    options: [
      "An expense that reduces your taxable income",
      "A refund check from the IRS",
      "An added tax penalty",
      "A payment toward a loan",
    ],
    correct: "An expense that reduces your taxable income",
  },
  {
    q: "Why should financial goals be time-bound?",
    options: [
      "It creates accountability and helps track progress",
      "It prevents you from ever changing your plan",
      "It guarantees higher returns",
      "It limits investment opportunities",
    ],
    correct: "It creates accountability and helps track progress",
  },
  {
    q: "What is the main advantage of paying yourself first?",
    options: [
      "It ensures saving happens before discretionary spending",
      "It increases your monthly debt payments",
      "It maximizes loan interest",
      "It eliminates the need for budgeting",
    ],
    correct: "It ensures saving happens before discretionary spending",
  },
  {
    q: "What happens if you exceed your credit card limit?",
    options: [
      "You may incur over-limit fees and damage your credit score",
      "Your credit score increases automatically",
      "You receive a cashback bonus",
      "Your interest rate decreases",
    ],
    correct: "You may incur over-limit fees and damage your credit score",
  },
  {
    q: "What is the advantage of refinancing student loans?",
    options: [
      "It can lower interest rates and reduce monthly payments",
      "It cancels debt automatically",
      "It eliminates repayment entirely",
      "It increases total interest paid",
    ],
    correct: "It can lower interest rates and reduce monthly payments",
  },
  {
    q: "Why is inflation called a hidden tax?",
    options: [
      "Because it quietly reduces purchasing power over time",
      "Because it is directly deducted from paychecks",
      "Because it only applies to imported goods",
      "Because it affects only government spending",
    ],
    correct: "Because it quietly reduces purchasing power over time",
  },
  {
    q: "What is an appropriate use of credit?",
    options: [
      "To finance assets that appreciate or improve earning potential",
      "To pay for vacations and daily expenses",
      "To cover gambling debts",
      "To fund non-essential purchases frequently",
    ],
    correct: "To finance assets that appreciate or improve earning potential",
  },
  {
    q: "Why is compound growth more powerful over decades?",
    options: [
      "Because returns reinvest and multiply exponentially over time",
      "Because inflation reduces interest rates",
      "Because it relies only on savings contributions",
      "Because it avoids market fluctuations",
    ],
    correct: "Because returns reinvest and multiply exponentially over time",
  },
  {
    q: "What does a low debt-to-income ratio indicate?",
    options: [
      "You have manageable debt levels relative to your income",
      "You have poor credit habits",
      "You have excessive borrowing",
      "You have no savings",
    ],
    correct: "You have manageable debt levels relative to your income",
  },
  {
    q: "Why should you avoid payday loans?",
    options: [
      "They have extremely high interest rates and trap borrowers in debt cycles",
      "They build long-term credit history",
      "They offer tax benefits",
      "They reduce total borrowing costs",
    ],
    correct:
      "They have extremely high interest rates and trap borrowers in debt cycles",
  },
  {
    q: "What is the safest way to build credit for beginners?",
    options: [
      "Using a secured credit card responsibly and paying on time",
      "Opening multiple cards at once",
      "Carrying a balance monthly",
      "Avoiding all credit accounts",
    ],
    correct: "Using a secured credit card responsibly and paying on time",
  },
  {
    q: "Why is understanding compound interest essential for both saving and borrowing?",
    options: [
      "It helps you maximize growth in savings and minimize interest costs in debt",
      "It applies only to savings accounts",
      "It affects only long-term loans",
      "It determines tax deductions directly",
    ],
    correct:
      "It helps you maximize growth in savings and minimize interest costs in debt",
  },
];

export default function PersonalFinanceQuiz({}: Route.ComponentProps) {
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
    const saved = localStorage.getItem("personalFinanceQuizStats");
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
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("personalFinanceQuizStats", JSON.stringify(stats));
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

    // ✅ Preserve all fields with spread
    setStats((prev) => ({
      ...prev,
      todayAnswered: prev.todayAnswered + 1,
      todayCorrect: prev.todayCorrect + (isCorrect ? 1 : 0),
      lastDate: new Date().toISOString().slice(0, 10),
    }));

    const totalAnsweredThisRound = Object.keys(newAnswers).length;

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
              Learn Personal Finance Quizzes
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
        id="personal-finance-article"
        className="mx-auto max-w-4xl px-6 py-20 text-center border-b border-slate-200"
      >
        <h1 className="text-4xl font-extrabold text-[#0B1B2B] mb-6">
          Personal Finance Basics: Building Habits for Financial Freedom
        </h1>

        <div className="mx-auto max-w-3xl text-left space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg">
            Personal finance is about managing your money so it works for you.
            Whether you’re budgeting, saving for emergencies, paying off debt,
            or investing for the future, financial literacy gives you control
            over your life goals.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">
              Key Financial Skills to Master
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-medium">Budgeting:</span> track income,
                expenses, and spending goals.
              </li>
              <li>
                <span className="font-medium">Saving:</span> build an emergency
                fund and save consistently for future needs.
              </li>
              <li>
                <span className="font-medium">Debt management:</span> understand
                interest rates and prioritize high-interest repayment.
              </li>
              <li>
                <span className="font-medium">Goal setting:</span> align your
                financial habits with short- and long-term goals.
              </li>
            </ul>
          </div>

          <p>
            Mastering personal finance doesn’t happen overnight-but small,
            consistent changes in how you spend, save, and plan can have a huge
            long-term impact on your freedom and security.
          </p>

          {/* Citations */}
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
              Citations & References
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                Ramsey, D. (2013). *The Total Money Makeover.* Thomas Nelson
                Publishing.
              </li>
              <li>
                O'Neill, B. (2020). *Personal Finance: Managing Your Money and
                Building Wealth.* Pearson Education.
              </li>
              <li>
                CFPB. (2023). *Financial Literacy Resources for Consumers.*
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ANSWERS */}
      <section id="quiz-answers" className="mx-auto max-w-5xl px-6 pt-16">
        <h3 className="text-3xl font-bold text-[#0B1B2B] mb-4 text-center">
          Personal Finance Quiz Answers
        </h3>
        <p className="text-slate-700 text-center max-w-2xl mx-auto mb-10">
          Review all personal finance questions and answers to reinforce smart
          money management habits.
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
                name: "Learn Personal Finance Quizzes",
                item: "https://www.financequizzes.com/learn-personal-finance-quizzes",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
