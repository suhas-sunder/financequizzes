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
    "Banking & Credit Quiz | Test Your Money Knowledge | FinanceQuizzes.com";
  const description =
    "Learn how loans, credit scores, and interest rates work through our interactive Banking & Credit quiz. Play, learn, and improve your financial literacy today.";
  const url = "https://www.financequizzes.com/learn-banking-quizzes";
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
        q: "Are these quizzes free?",
        a: "Yes! All quizzes on FinanceQuizzes.com are completely free and open to everyone.",
      },
      {
        q: "Do I need a background in banking?",
        a: "No prior knowledge is required. The quizzes are beginner-friendly and educational.",
      },
      {
        q: "Will I get explanations for answers?",
        a: "Yes! Correct answers are shown after each question so you can learn immediately.",
      },
    ],
  });
}

// Small demo bank here. Use your full bank in production.
const questionBank = [
  {
    q: "What does APR stand for in credit terms?",
    options: [
      "Annual Percentage Rate",
      "Applied Payment Ratio",
      "Average Payback Rate",
      "Annual Profit Ratio",
    ],
    correct: "Annual Percentage Rate",
  },
  {
    q: "Which credit score range is generally considered 'Good'?",
    options: ["300–499", "500–649", "650–799", "800–900"],
    correct: "650–799",
  },
  {
    q: "Which type of loan typically has the lowest interest rate?",
    options: [
      "Credit card cash advance",
      "Personal loan",
      "Mortgage loan",
      "Payday loan",
    ],
    correct: "Mortgage loan",
  },
  {
    q: "What is the main factor lenders use to determine creditworthiness?",
    options: ["Income only", "Credit score", "Marital status", "Job title"],
    correct: "Credit score",
  },
  {
    q: "Which financial product helps you build credit history safely?",
    options: [
      "Secured credit card",
      "Payday loan",
      "Debit card",
      "Checking account",
    ],
    correct: "Secured credit card",
  },
  {
    q: "What does APR stand for in credit terms?",
    options: [
      "Annual Percentage Rate",
      "Applied Payment Ratio",
      "Average Payback Rate",
      "Annual Profit Ratio",
    ],
    correct: "Annual Percentage Rate",
  },
  {
    q: "Which credit score range is generally considered 'Good'?",
    options: ["300–499", "500–649", "650–799", "800–900"],
    correct: "650–799",
  },
  {
    q: "Which type of loan typically has the lowest interest rate?",
    options: [
      "Credit card cash advance",
      "Personal loan",
      "Mortgage loan",
      "Payday loan",
    ],
    correct: "Mortgage loan",
  },
  {
    q: "What is the main factor lenders use to determine creditworthiness?",
    options: ["Income only", "Credit score", "Marital status", "Job title"],
    correct: "Credit score",
  },
  {
    q: "Which financial product helps you build credit history safely?",
    options: [
      "Secured credit card",
      "Payday loan",
      "Debit card",
      "Checking account",
    ],
    correct: "Secured credit card",
  },

  // --- NEW ADDITIONS (SEO-RICH & EDUCATIONAL) ---

  {
    q: "What does FDIC insurance protect?",
    options: [
      "Investments in mutual funds",
      "Deposits in member banks",
      "Stock purchases",
      "Retirement accounts only",
    ],
    correct: "Deposits in member banks",
  },
  {
    q: "What is the maximum FDIC insurance coverage per depositor per bank?",
    options: ["$100,000", "$250,000", "$500,000", "Unlimited coverage"],
    correct: "$250,000",
  },
  {
    q: "What is the primary function of a checking account?",
    options: [
      "Long-term investment growth",
      "Daily spending and bill payments",
      "Earning high interest",
      "Building credit history",
    ],
    correct: "Daily spending and bill payments",
  },
  {
    q: "Which account typically earns the highest interest rate?",
    options: [
      "Savings account",
      "Checking account",
      "Money market account",
      "Certificate of Deposit (CD)",
    ],
    correct: "Certificate of Deposit (CD)",
  },
  {
    q: "What does ATM stand for?",
    options: [
      "Automated Teller Machine",
      "Account Transfer Mechanism",
      "Automatic Transaction Module",
      "Asset Tracking Monitor",
    ],
    correct: "Automated Teller Machine",
  },
  {
    q: "What does overdraft protection do?",
    options: [
      "Blocks your debit card",
      "Covers transactions when your balance is too low",
      "Increases your interest rate",
      "Provides identity theft insurance",
    ],
    correct: "Covers transactions when your balance is too low",
  },
  {
    q: "Which type of credit card fee is charged for carrying a balance?",
    options: ["Annual fee", "Late fee", "Interest charge", "Cash advance fee"],
    correct: "Interest charge",
  },
  {
    q: "What is compound interest?",
    options: [
      "Interest earned only on the initial amount",
      "Interest calculated annually only",
      "Interest on both the principal and previously earned interest",
      "Interest deducted from your account each month",
    ],
    correct: "Interest on both the principal and previously earned interest",
  },
  {
    q: "Which factor has the greatest impact on your credit score?",
    options: [
      "Payment history",
      "Number of credit cards",
      "Type of loan",
      "Income level",
    ],
    correct: "Payment history",
  },
  {
    q: "What does a credit utilization ratio measure?",
    options: [
      "Your total debt compared to your income",
      "The percentage of available credit you’re using",
      "The number of accounts you have open",
      "Your annual credit growth",
    ],
    correct: "The percentage of available credit you’re using",
  },
  {
    q: "Which type of interest rate can change over time?",
    options: ["Fixed rate", "Variable rate", "Nominal rate", "Discount rate"],
    correct: "Variable rate",
  },
  {
    q: "What is the main purpose of a Certificate of Deposit (CD)?",
    options: [
      "Provide instant access to funds",
      "Earn higher fixed interest for a set time",
      "Avoid all bank fees",
      "Improve credit score",
    ],
    correct: "Earn higher fixed interest for a set time",
  },
  {
    q: "What happens if you miss a credit card payment?",
    options: [
      "Nothing happens",
      "Your score increases slightly",
      "You may be charged a late fee and lose credit points",
      "Your balance is automatically forgiven",
    ],
    correct: "You may be charged a late fee and lose credit points",
  },
  {
    q: "Which organization tracks your credit report?",
    options: [
      "IRS",
      "FICO",
      "Credit bureaus like Experian, Equifax, and TransUnion",
      "Federal Reserve",
    ],
    correct: "Credit bureaus like Experian, Equifax, and TransUnion",
  },
  {
    q: "What is an amortization schedule?",
    options: [
      "A list of your monthly expenses",
      "A breakdown of loan payments over time",
      "Your annual tax refund plan",
      "A credit score improvement tool",
    ],
    correct: "A breakdown of loan payments over time",
  },
  {
    q: "Which loan is typically unsecured?",
    options: [
      "Auto loan",
      "Mortgage loan",
      "Personal loan",
      "Home equity loan",
    ],
    correct: "Personal loan",
  },
  {
    q: "What does refinancing a loan mean?",
    options: [
      "Paying extra each month",
      "Changing your lender to get better terms",
      "Cancelling your loan before it ends",
      "Skipping payments for 6 months",
    ],
    correct: "Changing your lender to get better terms",
  },
  {
    q: "What’s the grace period on a credit card?",
    options: [
      "The time you have to pay without interest",
      "A holiday bonus from the bank",
      "Extra credit limit during emergencies",
      "A temporary fee waiver",
    ],
    correct: "The time you have to pay without interest",
  },
  {
    q: "What is a secured loan?",
    options: [
      "A loan backed by collateral like a car or house",
      "A loan guaranteed by the government",
      "A loan with a high interest rate",
      "A loan with zero fees",
    ],
    correct: "A loan backed by collateral like a car or house",
  },
  {
    q: "Which financial statement shows a bank’s profit or loss?",
    options: [
      "Balance sheet",
      "Income statement",
      "Statement of cash flows",
      "Credit report",
    ],
    correct: "Income statement",
  },
  {
    q: "What’s a co-signer on a loan?",
    options: [
      "A person who promises to repay if the borrower fails",
      "A credit officer approving the loan",
      "An insurance guarantor",
      "A friend helping track payments",
    ],
    correct: "A person who promises to repay if the borrower fails",
  },
  {
    q: "Which of these reduces your total loan interest the most?",
    options: [
      "Paying extra principal early",
      "Delaying payments",
      "Refinancing to a longer term",
      "Skipping one payment a year",
    ],
    correct: "Paying extra principal early",
  },
  {
    q: "What is a home equity line of credit (HELOC)?",
    options: [
      "A credit card for homeowners",
      "A revolving credit line using your home's value as collateral",
      "A mortgage refinance product",
      "A government subsidy",
    ],
    correct: "A revolving credit line using your home's value as collateral",
  },
  {
    q: "Which type of interest compounds more frequently?",
    options: [
      "Monthly compounding",
      "Quarterly compounding",
      "Annually compounding",
      "They all compound equally",
    ],
    correct: "Monthly compounding",
  },
  {
    q: "What’s the main difference between a debit and a credit card?",
    options: [
      "Debit uses your own money; credit borrows from a lender",
      "Credit cards are only for businesses",
      "Debit earns rewards; credit does not",
      "There is no difference",
    ],
    correct: "Debit uses your own money; credit borrows from a lender",
  },
  {
    q: "What is a minimum payment on a credit card?",
    options: [
      "The smallest amount due to avoid late fees",
      "The amount you must pay to avoid interest",
      "Half your total balance",
      "A voluntary donation",
    ],
    correct: "The smallest amount due to avoid late fees",
  },
  {
    q: "What is an overdraft fee?",
    options: [
      "A charge for spending more than your account balance",
      "A reward for saving money",
      "A loan payment discount",
      "A credit increase bonus",
    ],
    correct: "A charge for spending more than your account balance",
  },
  {
    q: "What is the typical term for a standard fixed-rate mortgage?",
    options: ["10 years", "15 years", "20 years", "30 years"],
    correct: "30 years",
  },
  {
    q: "What does 'credit limit' mean?",
    options: [
      "Maximum amount you can borrow on a credit line",
      "Your annual income limit",
      "The maximum interest rate allowed",
      "The total balance on all cards",
    ],
    correct: "Maximum amount you can borrow on a credit line",
  },
  {
    q: "What is the role of the Federal Reserve in banking?",
    options: [
      "Supervise and regulate banks",
      "Print personal credit reports",
      "Provide tax refunds",
      "Issue home loans",
    ],
    correct: "Supervise and regulate banks",
  },
  {
    q: "Which action can improve your credit score fastest?",
    options: [
      "Pay all bills on time",
      "Apply for multiple new cards",
      "Close old accounts",
      "Max out one credit card",
    ],
    correct: "Pay all bills on time",
  },
  {
    q: "What is the main benefit of a high-yield savings account?",
    options: [
      "Higher interest earnings",
      "Fewer withdrawal limits",
      "Unlimited transfers",
      "No identification needed",
    ],
    correct: "Higher interest earnings",
  },
  {
    q: "What’s the difference between APR and APY?",
    options: [
      "APR excludes compounding, APY includes it",
      "They mean the same thing",
      "APY excludes interest charges",
      "APR includes fees, APY doesn’t",
    ],
    correct: "APR excludes compounding, APY includes it",
  },
  {
    q: "What does it mean to default on a loan?",
    options: [
      "You pay off your loan early",
      "You fail to make required payments",
      "You refinance your loan",
      "You switch to a new lender",
    ],
    correct: "You fail to make required payments",
  },
  {
    q: "Which is an example of revolving credit?",
    options: ["Mortgage", "Auto loan", "Credit card", "Student loan"],
    correct: "Credit card",
  },
  {
    q: "What is a loan’s principal?",
    options: [
      "The total amount repaid",
      "The original amount borrowed",
      "The total interest paid",
      "The monthly payment",
    ],
    correct: "The original amount borrowed",
  },
  {
    q: "What happens when you make only the minimum payment on a credit card?",
    options: [
      "Your debt reduces faster",
      "You pay more interest over time",
      "You avoid all fees permanently",
      "Your credit score skyrockets",
    ],
    correct: "You pay more interest over time",
  },
  {
    q: "What is a balance transfer card used for?",
    options: [
      "Moving high-interest debt to a lower-interest card",
      "Transferring cash to checking",
      "Converting debt into investments",
      "Avoiding all payments",
    ],
    correct: "Moving high-interest debt to a lower-interest card",
  },
  {
    q: "What is a credit inquiry?",
    options: [
      "A check on your credit history by a lender",
      "A refund for overpayment",
      "A government tax check",
      "A balance dispute",
    ],
    correct: "A check on your credit history by a lender",
  },
  {
    q: "Which type of credit inquiry affects your credit score?",
    options: ["Soft inquiry", "Hard inquiry", "Internal inquiry", "None"],
    correct: "Hard inquiry",
  },
  {
    q: "What does ‘annual fee’ mean on a credit card?",
    options: [
      "A yearly charge for card membership",
      "A penalty for late payment",
      "A monthly interest charge",
      "A one-time sign-up fee",
    ],
    correct: "A yearly charge for card membership",
  },
  {
    q: "What is loan collateral?",
    options: [
      "Assets pledged to secure a loan",
      "Insurance policy on your debt",
      "Government grant",
      "Credit history proof",
    ],
    correct: "Assets pledged to secure a loan",
  },
  {
    q: "Which of the following increases your total loan cost?",
    options: [
      "Higher interest rate",
      "Shorter loan term",
      "Extra principal payments",
      "Early repayment",
    ],
    correct: "Higher interest rate",
  },
  {
    q: "What is the main risk of using payday loans?",
    options: [
      "Very high interest and fees",
      "Low approval rate",
      "Credit report errors",
      "Long repayment terms",
    ],
    correct: "Very high interest and fees",
  },
  {
    q: "What does a credit freeze do?",
    options: [
      "Prevents new credit from being opened in your name",
      "Lowers your interest rate",
      "Increases your score automatically",
      "Stops debt collectors",
    ],
    correct: "Prevents new credit from being opened in your name",
  },
  {
    q: "Which term describes the total amount you owe across all credit lines?",
    options: [
      "Outstanding balance",
      "Available credit",
      "Credit limit",
      "Credit ratio",
    ],
    correct: "Outstanding balance",
  },
  {
    q: "What is an introductory APR offer?",
    options: [
      "A temporary low interest rate for new accounts",
      "A penalty for high usage",
      "A standard rate for all cards",
      "An interest rate that increases monthly",
    ],
    correct: "A temporary low interest rate for new accounts",
  },
  {
    q: "What is the main difference between simple and compound interest?",
    options: [
      "Compound earns on interest; simple earns on principal only",
      "They are identical",
      "Simple is always higher",
      "Compound is fixed annually",
    ],
    correct: "Compound earns on interest; simple earns on principal only",
  },
  {
    q: "Which type of account helps automate monthly bill payments?",
    options: [
      "Checking account",
      "CD",
      "Retirement account",
      "Savings account",
    ],
    correct: "Checking account",
  },
  {
    q: "What does ACH stand for in banking?",
    options: [
      "Automated Clearing House",
      "Account Credit Hub",
      "Automatic Cash Handling",
      "Asset Control Holder",
    ],
    correct: "Automated Clearing House",
  },
  {
    q: "Which is a benefit of maintaining a good credit score?",
    options: [
      "Lower interest rates on loans",
      "Higher tax refunds",
      "Free insurance coverage",
      "Unlimited spending",
    ],
    correct: "Lower interest rates on loans",
  },
  {
    q: "What is a bank routing number used for?",
    options: [
      "Identifying the bank in financial transactions",
      "Tracking your spending habits",
      "Calculating interest",
      "Assigning a credit limit",
    ],
    correct: "Identifying the bank in financial transactions",
  },
  {
    q: "What is the purpose of a loan pre-approval?",
    options: [
      "To estimate the loan amount you qualify for",
      "To finalize your loan contract",
      "To transfer funds immediately",
      "To avoid credit checks",
    ],
    correct: "To estimate the loan amount you qualify for",
  },
  {
    q: "What’s the penalty for withdrawing early from a CD?",
    options: [
      "Interest loss or early withdrawal fee",
      "Tax increase",
      "Loan denial",
      "Account closure",
    ],
    correct: "Interest loss or early withdrawal fee",
  },
  {
    q: "Which of these is NOT reported on a credit report?",
    options: [
      "Credit card balances",
      "Loan payments",
      "Checking account transactions",
      "Credit inquiries",
    ],
    correct: "Checking account transactions",
  },
  {
    q: "What does ‘prime rate’ refer to?",
    options: [
      "The interest rate banks charge their most creditworthy customers",
      "The national inflation rate",
      "The base rate for savings accounts",
      "Government bond yield",
    ],
    correct: "The interest rate banks charge their most creditworthy customers",
  },
  {
    q: "Which financial institution issues credit cards?",
    options: [
      "Banks and credit unions",
      "IRS",
      "Federal Reserve",
      "Insurance companies",
    ],
    correct: "Banks and credit unions",
  },
  {
    q: "What is the difference between a credit union and a bank?",
    options: [
      "Credit unions are member-owned, banks are for-profit",
      "Banks offer lower rates",
      "Credit unions are government-run",
      "There is no difference",
    ],
    correct: "Credit unions are member-owned, banks are for-profit",
  },
  {
    q: "What does 'loan-to-value ratio' (LTV) measure?",
    options: [
      "Loan amount compared to collateral value",
      "Interest paid vs. income",
      "Savings rate per month",
      "Loan term vs. principal",
    ],
    correct: "Loan amount compared to collateral value",
  },
  {
    q: "Which is a secured credit card most similar to?",
    options: [
      "A prepaid card with a security deposit",
      "An unsecured loan",
      "A debit card",
      "A business credit line",
    ],
    correct: "A prepaid card with a security deposit",
  },
  {
    q: "What happens to your credit score when you close a long-held account?",
    options: [
      "It can decrease due to shorter average credit age",
      "It increases automatically",
      "It stays the same",
      "It doubles over time",
    ],
    correct: "It can decrease due to shorter average credit age",
  },
  {
    q: "Which government act ensures transparency in lending terms?",
    options: [
      "Truth in Lending Act (TILA)",
      "Fair Housing Act",
      "Consumer Product Safety Act",
      "Equal Employment Act",
    ],
    correct: "Truth in Lending Act (TILA)",
  },
  {
    q: "What does it mean to ‘consolidate debt’?",
    options: [
      "Combine multiple debts into one payment or loan",
      "Pay off all credit cards at once",
      "Cancel credit cards",
      "Freeze your credit",
    ],
    correct: "Combine multiple debts into one payment or loan",
  },
  {
    q: "Which is an example of installment credit?",
    options: ["Car loan", "Credit card", "Overdraft", "Store account"],
    correct: "Car loan",
  },
  {
    q: "What does a bank statement show?",
    options: [
      "Your monthly deposits, withdrawals, and balance",
      "Only your loans",
      "Only your taxes",
      "Your investments only",
    ],
    correct: "Your monthly deposits, withdrawals, and balance",
  },
  {
    q: "What’s the typical minimum credit score needed for most mortgages?",
    options: ["580", "620", "700", "760"],
    correct: "620",
  },
  {
    q: "Which agency regulates national banks in the U.S.?",
    options: [
      "Office of the Comptroller of the Currency (OCC)",
      "FBI",
      "World Bank",
      "Treasury Inspector General",
    ],
    correct: "Office of the Comptroller of the Currency (OCC)",
  },
  {
    q: "Which type of savings account limits withdrawals per month?",
    options: [
      "Traditional savings account",
      "Checking account",
      "CD account",
      "Investment brokerage account",
    ],
    correct: "Traditional savings account",
  },
  {
    q: "Which financial concept is key for understanding credit card debt?",
    options: [
      "Compound interest",
      "Inflation rate",
      "Asset depreciation",
      "Exchange rate",
    ],
    correct: "Compound interest",
  },
  {
    q: "What is the safest place to keep emergency funds?",
    options: [
      "High-yield savings account",
      "Checking account",
      "401(k)",
      "Cash under mattress",
    ],
    correct: "High-yield savings account",
  },
  {
    q: "What is a bank reconciliation?",
    options: [
      "Matching your records to the bank’s statement for accuracy",
      "Paying off all loans early",
      "Reopening closed accounts",
      "Negotiating new interest rates",
    ],
    correct: "Matching your records to the bank’s statement for accuracy",
  },
  {
    q: "What does an adjustable-rate mortgage (ARM) mean?",
    options: [
      "The interest rate can change over time",
      "The interest rate is fixed forever",
      "The loan automatically renews yearly",
      "Payments are interest-only",
    ],
    correct: "The interest rate can change over time",
  },
  {
    q: "Which factor is NOT part of your FICO credit score?",
    options: [
      "Payment history",
      "Credit utilization",
      "Marital status",
      "Credit length",
    ],
    correct: "Marital status",
  },
  {
    q: "What is a bank’s reserve requirement?",
    options: [
      "Minimum funds banks must hold vs lend out",
      "Maximum interest rate banks can charge",
      "Employee salary cap",
      "Deposit insurance limit",
    ],
    correct: "Minimum funds banks must hold vs lend out",
  },
  {
    q: "What’s the difference between a savings account and a money market account?",
    options: [
      "Money market accounts often have higher rates and check-writing ability",
      "Savings accounts allow unlimited withdrawals",
      "They are identical",
      "Money market accounts are unregulated",
    ],
    correct:
      "Money market accounts often have higher rates and check-writing ability",
  },
  {
    q: "What is a lien?",
    options: [
      "Legal claim against property until a debt is paid",
      "Extra tax deduction",
      "A bank investment account",
      "A bonus interest rate",
    ],
    correct: "Legal claim against property until a debt is paid",
  },
  {
    q: "Which loan type is backed by the U.S. Department of Veterans Affairs?",
    options: ["FHA loan", "VA loan", "Conventional loan", "USDA loan"],
    correct: "VA loan",
  },
  {
    q: "Which banking tool allows customers to deposit checks remotely?",
    options: [
      "Mobile banking app",
      "ATM only",
      "Branch visit",
      "Wire transfer",
    ],
    correct: "Mobile banking app",
  },
  {
    q: "What is a loan deferment?",
    options: [
      "Temporary postponement of payments",
      "Permanent loan forgiveness",
      "Penalty for missed payments",
      "Extra payment due immediately",
    ],
    correct: "Temporary postponement of payments",
  },
  {
    q: "Which is an example of predatory lending?",
    options: [
      "Charging extremely high interest and hidden fees",
      "Offering 0% APR promotions",
      "Providing financial counseling",
      "Government student loans",
    ],
    correct: "Charging extremely high interest and hidden fees",
  },
  {
    q: "What’s the difference between a charge card and a credit card?",
    options: [
      "Charge cards must be paid in full each month",
      "Credit cards have no spending limit",
      "They are identical",
      "Charge cards always earn more rewards",
    ],
    correct: "Charge cards must be paid in full each month",
  },
  {
    q: "What’s a common sign of identity theft?",
    options: [
      "Unauthorized transactions on your account",
      "Higher interest rates on savings",
      "Automatic bill pay setup",
      "Increased credit limit",
    ],
    correct: "Unauthorized transactions on your account",
  },
  {
    q: "What is the term for a loan paid off early to save interest?",
    options: ["Prepayment", "Deferral", "Capitalization", "Forbearance"],
    correct: "Prepayment",
  },
  {
    q: "Which banking service helps you automatically save a portion of income?",
    options: [
      "Direct deposit with split allocation",
      "Manual cash withdrawal",
      "Credit builder loan",
      "Wire transfer",
    ],
    correct: "Direct deposit with split allocation",
  },
  {
    q: "What is a credit builder loan?",
    options: [
      "A small loan held by the bank to build your credit history",
      "A loan to improve your home",
      "A government-backed student loan",
      "A payday loan alternative",
    ],
    correct: "A small loan held by the bank to build your credit history",
  },
  {
    q: "What is the main purpose of the Fair Credit Reporting Act (FCRA)?",
    options: [
      "Ensure accuracy and privacy of credit information",
      "Regulate mortgage rates",
      "Control inflation",
      "Eliminate all credit fees",
    ],
    correct: "Ensure accuracy and privacy of credit information",
  },
  {
    q: "Which type of fraud involves fake emails pretending to be your bank?",
    options: ["Phishing", "Spoofing", "Skimming", "Spamming"],
    correct: "Phishing",
  },
  {
    q: "What is an example of revolving debt?",
    options: ["Credit card balance", "Mortgage", "Car loan", "Student loan"],
    correct: "Credit card balance",
  },
  {
    q: "What’s a typical advantage of online banks?",
    options: [
      "Higher interest rates and lower fees",
      "Fewer customer service options",
      "Limited deposit insurance",
      "In-person teller support",
    ],
    correct: "Higher interest rates and lower fees",
  },
  {
    q: "Which type of interest rate remains constant throughout the loan term?",
    options: ["Fixed rate", "Variable rate", "Discount rate", "Floating rate"],
    correct: "Fixed rate",
  },
  {
    q: "What is the main purpose of an emergency fund?",
    options: [
      "Cover unexpected expenses without using credit",
      "Increase your investment portfolio",
      "Pay monthly bills",
      "Pay for vacations",
    ],
    correct: "Cover unexpected expenses without using credit",
  },
  {
    q: "What’s the difference between principal and interest?",
    options: [
      "Principal is borrowed amount; interest is the cost of borrowing",
      "They mean the same thing",
      "Interest is deducted; principal is taxed",
      "Principal is only for credit cards",
    ],
    correct: "Principal is borrowed amount; interest is the cost of borrowing",
  },
  {
    q: "What’s the typical limit on savings withdrawals per month (before 2020 Regulation D change)?",
    options: ["6", "10", "Unlimited", "3"],
    correct: "6",
  },
  {
    q: "Which card feature helps prevent fraud?",
    options: [
      "EMV chip technology",
      "Magnetic stripe",
      "Manual imprinting",
      "Paper receipts",
    ],
    correct: "EMV chip technology",
  },
  {
    q: "What is the purpose of a credit utilization ratio?",
    options: [
      "Measure how much credit you’re using versus your limit",
      "Show income versus expenses",
      "Track total debt paid",
      "Calculate APR",
    ],
    correct: "Measure how much credit you’re using versus your limit",
  },
  {
    q: "Which loan type is designed for students?",
    options: ["Stafford loan", "Mortgage loan", "Auto loan", "Payday loan"],
    correct: "Stafford loan",
  },
  {
    q: "What happens if you exceed your credit limit?",
    options: [
      "You may incur an over-limit fee and affect your score",
      "Your limit automatically increases",
      "Your interest rate drops",
      "Nothing happens",
    ],
    correct: "You may incur an over-limit fee and affect your score",
  },
  {
    q: "What is the minimum down payment typically required for an FHA loan?",
    options: ["0%", "3.5%", "10%", "20%"],
    correct: "3.5%",
  },
  {
    q: "What’s one advantage of automatic bill pay?",
    options: [
      "Prevents missed payments and late fees",
      "Reduces interest rates automatically",
      "Increases savings account interest",
      "Eliminates taxes",
    ],
    correct: "Prevents missed payments and late fees",
  },
  {
    q: "What does an escrow account do in a mortgage?",
    options: [
      "Holds funds for property taxes and insurance",
      "Holds your emergency savings",
      "Pays the lender’s salary",
      "Invests in the stock market",
    ],
    correct: "Holds funds for property taxes and insurance",
  },
  {
    q: "What’s the main difference between a credit card and a charge card?",
    options: [
      "Credit cards allow balances; charge cards require full payment monthly",
      "Charge cards have lower fees",
      "Credit cards have fixed limits",
      "Charge cards don’t affect credit scores",
    ],
    correct:
      "Credit cards allow balances; charge cards require full payment monthly",
  },
  {
    q: "Which government agency protects consumers from unfair banking practices?",
    options: [
      "Consumer Financial Protection Bureau (CFPB)",
      "IRS",
      "SEC",
      "FBI",
    ],
    correct: "Consumer Financial Protection Bureau (CFPB)",
  },
  {
    q: "What is a soft credit inquiry used for?",
    options: [
      "Checking your score without affecting it",
      "Approving a mortgage",
      "Setting a new credit limit",
      "Finalizing a loan",
    ],
    correct: "Checking your score without affecting it",
  },
  {
    q: "What is the main purpose of a debit card PIN?",
    options: [
      "Authenticate the user for secure transactions",
      "Increase credit score",
      "Calculate interest",
      "Track purchases",
    ],
    correct: "Authenticate the user for secure transactions",
  },
  {
    q: "What is the 'minimum balance requirement' for bank accounts?",
    options: [
      "The least amount needed to avoid fees",
      "Your total income",
      "The minimum deposit insured by FDIC",
      "Your average spending",
    ],
    correct: "The least amount needed to avoid fees",
  },
  {
    q: "What is a FICO score?",
    options: [
      "A type of credit score used by most lenders",
      "A tax identification number",
      "An investment rating agency",
      "A savings account type",
    ],
    correct: "A type of credit score used by most lenders",
  },
  {
    q: "What is the typical FICO score range?",
    options: ["100–500", "300–850", "400–900", "200–750"],
    correct: "300–850",
  },
  {
    q: "What does VantageScore measure?",
    options: [
      "Your overall creditworthiness",
      "Your income-to-debt ratio",
      "Your bank account balance",
      "Your investment growth",
    ],
    correct: "Your overall creditworthiness",
  },
  {
    q: "Which factor hurts your credit score the most?",
    options: [
      "Missed or late payments",
      "Having multiple accounts",
      "Closing unused cards",
      "Applying for a new card",
    ],
    correct: "Missed or late payments",
  },
  {
    q: "How often can you check your credit report for free from each bureau?",
    options: ["Once a month", "Once per year", "Once per week", "Unlimited"],
    correct: "Once per year",
  },
  {
    q: "Which law gives you access to one free credit report per year?",
    options: [
      "Fair Credit Reporting Act (FCRA)",
      "Credit Card Act of 2009",
      "Dodd-Frank Act",
      "Truth in Savings Act",
    ],
    correct: "Fair Credit Reporting Act (FCRA)",
  },
  {
    q: "What is considered a ‘hard inquiry’ on your credit report?",
    options: [
      "A lender checking your credit for a loan application",
      "You checking your own credit",
      "A background check by an employer",
      "A utility company verifying identity",
    ],
    correct: "A lender checking your credit for a loan application",
  },
  {
    q: "What is credit utilization ideally kept under?",
    options: ["10%", "30%", "50%", "70%"],
    correct: "30%",
  },
  {
    q: "What happens to your credit score if you max out your credit card?",
    options: [
      "It usually drops due to high utilization",
      "It increases automatically",
      "It stays the same",
      "It improves long term",
    ],
    correct: "It usually drops due to high utilization",
  },
  {
    q: "Which category of debt has the most influence on your credit score?",
    options: [
      "Revolving credit like credit cards",
      "Installment loans like mortgages",
      "Student loans",
      "Medical debt",
    ],
    correct: "Revolving credit like credit cards",
  },
  {
    q: "Which credit score category is considered ‘Excellent’?",
    options: ["650–699", "700–749", "750–850", "600–649"],
    correct: "750–850",
  },
  {
    q: "What does a credit mix refer to?",
    options: [
      "The variety of credit types you have",
      "Your total number of accounts",
      "Your income vs expenses",
      "Your available credit percentage",
    ],
    correct: "The variety of credit types you have",
  },
  {
    q: "What does it mean to ‘rebuild credit’?",
    options: [
      "Improve a low score through consistent on-time payments",
      "Close all accounts",
      "Consolidate your debts",
      "Increase your loan amount",
    ],
    correct: "Improve a low score through consistent on-time payments",
  },
  {
    q: "Which credit score factor has the smallest impact?",
    options: [
      "Credit mix",
      "Payment history",
      "Credit utilization",
      "Credit age",
    ],
    correct: "Credit mix",
  },
  {
    q: "What is the difference between revolving and installment credit?",
    options: [
      "Revolving credit can be reused; installment is fixed",
      "Installment credit has no due date",
      "Revolving is only for mortgages",
      "There’s no difference",
    ],
    correct: "Revolving credit can be reused; installment is fixed",
  },
  {
    q: "What happens if you close a credit card with a high limit?",
    options: [
      "Your utilization ratio may rise and lower your score",
      "Your score always increases",
      "Your total debt disappears",
      "You earn interest",
    ],
    correct: "Your utilization ratio may rise and lower your score",
  },
  {
    q: "Which of the following is an example of good credit behavior?",
    options: [
      "Paying balances in full monthly",
      "Using 90% of your limit",
      "Applying for multiple cards at once",
      "Ignoring statements",
    ],
    correct: "Paying balances in full monthly",
  },
  {
    q: "What happens if your credit card is charged off?",
    options: [
      "The lender reports it as a loss and it damages your credit report",
      "You receive a refund",
      "The account is closed in good standing",
      "Nothing changes",
    ],
    correct:
      "The lender reports it as a loss and it damages your credit report",
  },
  {
    q: "What does a credit counseling agency help you do?",
    options: [
      "Manage debt repayment plans",
      "Increase your credit limit",
      "Cancel all loans",
      "Avoid taxes",
    ],
    correct: "Manage debt repayment plans",
  },
  {
    q: "What is a charge-off in credit terms?",
    options: [
      "Debt written off by the lender as uncollectible",
      "A positive note on your credit file",
      "A bank fee refund",
      "A loan approval",
    ],
    correct: "Debt written off by the lender as uncollectible",
  },
  {
    q: "What is the difference between a soft and hard credit pull?",
    options: [
      "Soft pulls don’t affect credit; hard pulls do",
      "Both affect your score equally",
      "Hard pulls are used for marketing only",
      "Soft pulls require authorization",
    ],
    correct: "Soft pulls don’t affect credit; hard pulls do",
  },
  {
    q: "Which of the following could improve your credit utilization ratio?",
    options: [
      "Paying off balances or increasing credit limits",
      "Closing multiple cards",
      "Opening high-interest loans",
      "Making only minimum payments",
    ],
    correct: "Paying off balances or increasing credit limits",
  },
  {
    q: "What does it mean when a debt is ‘sent to collections’?",
    options: [
      "A third-party agency is trying to recover the unpaid debt",
      "The lender forgives the loan",
      "You are rewarded for early payment",
      "You gain a higher credit limit",
    ],
    correct: "A third-party agency is trying to recover the unpaid debt",
  },
  {
    q: "What happens after you pay off a collection account?",
    options: [
      "It may stay on your credit report for up to 7 years but show as paid",
      "It disappears immediately",
      "It raises your score instantly by 100 points",
      "It’s transferred to another lender",
    ],
    correct:
      "It may stay on your credit report for up to 7 years but show as paid",
  },
  {
    q: "How long do most negative marks stay on your credit report?",
    options: ["2 years", "5 years", "7 years", "10 years"],
    correct: "7 years",
  },
  {
    q: "Which law protects consumers from unfair debt collection practices?",
    options: [
      "Fair Debt Collection Practices Act (FDCPA)",
      "Truth in Lending Act",
      "Credit Card Accountability Act",
      "Equal Credit Opportunity Act",
    ],
    correct: "Fair Debt Collection Practices Act (FDCPA)",
  },
  {
    q: "What is the main goal of debt consolidation?",
    options: [
      "Combine multiple debts into one payment, often with lower interest",
      "Avoid making any payments",
      "Increase your total credit limit",
      "Transfer debt to family",
    ],
    correct:
      "Combine multiple debts into one payment, often with lower interest",
  },
  {
    q: "What is the 'snowball method' of paying off debt?",
    options: [
      "Paying off smallest debts first to build momentum",
      "Paying off high-interest loans first",
      "Paying all loans equally each month",
      "Skipping every other payment",
    ],
    correct: "Paying off smallest debts first to build momentum",
  },
  {
    q: "What is the 'avalanche method' of paying off debt?",
    options: [
      "Paying highest-interest debts first",
      "Paying random debts",
      "Paying only principal each month",
      "Avoiding interest entirely",
    ],
    correct: "Paying highest-interest debts first",
  },
  {
    q: "Which federal law prevents discrimination in credit lending?",
    options: [
      "Equal Credit Opportunity Act (ECOA)",
      "Fair Credit Reporting Act",
      "Dodd-Frank Act",
      "Consumer Banking Reform Act",
    ],
    correct: "Equal Credit Opportunity Act (ECOA)",
  },
  {
    q: "What is a ‘secured personal loan’?",
    options: [
      "Loan backed by collateral like savings or a vehicle",
      "Loan that doesn’t require credit history",
      "Loan offered only to students",
      "Loan with zero interest",
    ],
    correct: "Loan backed by collateral like savings or a vehicle",
  },
  {
    q: "What happens if you pay off a loan early?",
    options: [
      "You may save on interest costs",
      "You are penalized automatically",
      "It hurts your credit always",
      "It removes all credit history",
    ],
    correct: "You may save on interest costs",
  },
  {
    q: "Which debt repayment habit helps build credit?",
    options: [
      "Consistent on-time payments",
      "Ignoring minimums",
      "Maxing out cards monthly",
      "Opening too many accounts",
    ],
    correct: "Consistent on-time payments",
  },
  {
    q: "What is a ‘credit line increase’ request?",
    options: [
      "Asking your lender to raise your borrowing limit",
      "Applying for a new credit card",
      "Transferring a loan",
      "Closing an old account",
    ],
    correct: "Asking your lender to raise your borrowing limit",
  },
  {
    q: "Which of these actions can temporarily lower your credit score?",
    options: [
      "Applying for multiple credit cards in a short time",
      "Paying off debt early",
      "Using less than 10% of your credit",
      "Checking your own score",
    ],
    correct: "Applying for multiple credit cards in a short time",
  },
  {
    q: "What’s the benefit of becoming an authorized user on someone’s credit card?",
    options: [
      "You can build credit history from their account",
      "You inherit their debt",
      "It lowers your score",
      "It removes your existing credit lines",
    ],
    correct: "You can build credit history from their account",
  },
  {
    q: "What is the main purpose of the Credit Card Accountability Responsibility and Disclosure Act (CARD Act) of 2009?",
    options: [
      "Protect consumers from unfair card practices",
      "Increase card limits automatically",
      "Eliminate interest charges",
      "Allow unlimited late fees",
    ],
    correct: "Protect consumers from unfair card practices",
  },
  {
    q: "What happens to your credit when you declare bankruptcy?",
    options: [
      "Your score drops significantly and stays affected up to 10 years",
      "Your score improves after discharge",
      "Your credit resets to perfect",
      "It has no impact",
    ],
    correct: "Your score drops significantly and stays affected up to 10 years",
  },
  {
    q: "How many major credit bureaus operate in the U.S.?",
    options: ["2", "3", "4", "5"],
    correct: "3",
  },
  {
    q: "Which of these is NOT one of the three main credit bureaus?",
    options: ["Experian", "Equifax", "TransUnion", "Fannie Mae"],
    correct: "Fannie Mae",
  },
  {
    q: "What does it mean to be ‘credit invisible’?",
    options: [
      "Having no credit history on file with any bureau",
      "Having poor credit",
      "Having too much debt",
      "Having frozen credit",
    ],
    correct: "Having no credit history on file with any bureau",
  },
  {
    q: "Which type of card allows spending up to a preset limit that resets monthly?",
    options: ["Credit card", "Charge card", "Debit card", "Gift card"],
    correct: "Charge card",
  },
  {
    q: "What’s one way to establish credit for the first time?",
    options: [
      "Open a secured credit card or become an authorized user",
      "Apply for 5 cards at once",
      "Take a payday loan",
      "Use only cash",
    ],
    correct: "Open a secured credit card or become an authorized user",
  },
];

export default function BankingQuiz({}: Route.ComponentProps) {
  const { faqs } = useLoaderData() as LoaderData;

  // pick 3 at a time
  const pickRandom = () =>
    [...questionBank].sort(() => 0.5 - Math.random()).slice(0, 3);

  // UI state
  const [displayed, setDisplayed] = useState(pickRandom);
  const [answers, setAnswers] = useState<Record<string, string>>({}); // current round answers only

  // daily stats with safe defaults
  const [stats, setStats] = useState(() => ({
    todayAnswered: 0,
    todayCorrect: 0,
    todayStreak: 0,
    todayBest: 0,
    lastDate: new Date().toISOString().slice(0, 10),
  }));

  // load saved stats with daily reset
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("bankingQuizStats");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const today = new Date().toISOString().slice(0, 10);
        if (parsed.lastDate !== today) {
          setStats({
            todayAnswered: 0,
            todayCorrect: 0,
            todayStreak: 0,
            todayBest: parsed.todayBest || 0, // keep best across days if you prefer; set to 0 to reset daily
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

  // persist stats
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("bankingQuizStats", JSON.stringify(stats));
    }
  }, [stats]);

  // handle answer: count per answer; streak per completed set
  const handleAnswer = (
    question: string,
    selected: string,
    correct: string
  ) => {
    if (answers[question]) return; // already answered this question

    const newAnswers = { ...answers, [question]: selected };
    setAnswers(newAnswers);

    const isCorrect = selected === correct;

    // ✅ merge instead of overwriting stats
    setStats((prev) => ({
      ...prev,
      todayAnswered: prev.todayAnswered + 1,
      todayCorrect: prev.todayCorrect + (isCorrect ? 1 : 0),
      lastDate: new Date().toISOString().slice(0, 10),
    }));

    const totalAnsweredThisRound = Object.keys(newAnswers).length;

    // ✅ streak updated after 3-question round
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
              Learn Banking Quizzes
            </li>
          </ol>
        </nav>
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto w-full min-h-[53vh] sm:w-[720px] text-left rounded-3xl border border-slate-200 bg-white px-10 py-8 shadow-xl">
            {/* Stats row (daily) */}
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

                  {/* Reveal correct answer when the user has chosen */}
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

            {/* Next Set button centered and first */}
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

      {/* ARTICLE SECTION (improved), placed AFTER quiz per your instruction */}
      <section
        id="banking-article"
        className="mx-auto max-w-4xl px-6 py-20 text-center border-b border-slate-200"
      >
        <h1 className="text-4xl font-extrabold text-[#0B1B2B] mb-6">
          Banking & Credit: Practical Basics That Shape Your Everyday Money
        </h1>

        <div className="mx-auto max-w-3xl text-left space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg">
            Banking and credit systems determine how you save, spend, borrow,
            and build a financial reputation. Knowing how checking and savings
            accounts work, how interest accumulates, and how credit scores are
            calculated gives you a real advantage when negotiating loan terms or
            avoiding expensive debt.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">
              What to focus on
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-medium">Interest math:</span> APR vs APY,
                fixed vs variable rates.
              </li>
              <li>
                <span className="font-medium">Credit profile:</span> payment
                history, utilization, age of accounts.
              </li>
              <li>
                <span className="font-medium">Loan structure:</span> mortgages,
                amortization, refinancing.
              </li>
              <li>
                <span className="font-medium">Banking safety:</span> FDIC/NCUA
                limits and why statements matter.
              </li>
            </ul>
          </div>

          <p>
            As you practice with the quiz above, pay attention to the patterns
            behind each correct answer. This builds real decision intuition you
            can apply to your own accounts, credit cards, and future loan
            applications.
          </p>

          {/* Citations card */}
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
              Citations & References
            </h3>
            <ul className="text-sm space-y-2">
              <li>FDIC. Deposit Insurance FAQs and coverage limits.</li>
              <li>FICO. Credit score factors and their relative weights.</li>
              <li>
                Consumer Financial Protection Bureau. Credit cards, APR, and
                disclosures.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ANSWERS LIST (consistent styling with home) */}
      <section id="quiz-answers" className="mx-auto max-w-5xl px-6 pt-16">
        <h3 className="text-3xl font-bold text-[#0B1B2B] mb-4 text-center">
          Banking & Credit Quiz Answers
        </h3>
        <p className="text-slate-700 text-center max-w-2xl mx-auto mb-10">
          Review all questions and correct answers to deepen your understanding.
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

      {/* === FAQPage (for site FAQ section only) === */}
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

      {/* === QAPage (for quiz data, optimized for Google Rich Results) === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "QAPage",
            mainEntity: questionBank.map((q, i) => ({
              "@type": "Question",
              name: q.q,
              text: q.q,
              answerCount: 1,
              url: `https://financequizzes.com/questions/${i + 1}`, // ✅ helps indexing per question
              author: {
                "@type": "Person",
                name: "Suhas Sunder",
                url: "https://financequizzes.com/about", // ✅ resolves 'missing field url'
              },
              datePublished: "2025-11-01T00:00:00+00:00", // ✅ ISO 8601 with timezone
              acceptedAnswer: {
                "@type": "Answer",
                text: q.correct,
                author: {
                  "@type": "Person",
                  name: "Suhas Sunder",
                  url: "https://financequizzes.com/about", // ✅ resolves warning
                },
                url: `https://financequizzes.com/questions/${i + 1}#answer`, // ✅ unique per answer
                datePublished: "2025-11-01T00:00:00+00:00", // ✅ proper datetime format
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
                name: "Learn Banking Quizzes",
                item: "https://www.financequizzes.com/learn-banking-quizzes",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
