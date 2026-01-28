export type FAQItem = { q: string; a: string };

export type FinanceQA = {
  id: string;
  category: FinanceQACategoryKey;
  q: string;
  a: string;
  explanation?: string;
};

export type FinanceQACategoryKey =
  | "budgeting"
  | "banking"
  | "credit"
  | "investing"
  | "economics"
  | "taxes"
  | "insurance"
  | "retirement";

export const FINANCE_QUIZ_QUESTIONS_INTENT = {
  topicLabel: "Finance",
  formatLabel: "mixed question bank",
  focus:
    "A broad set of finance quiz questions and answers across budgeting, banking, credit, investing, and basic economics.",
  usage:
    "Use this as a quick study list. Pick a category, test yourself, then expand answers to check your understanding.",
} as const;

export const FINANCE_QUIZ_QUESTIONS_CATEGORIES: {
  key: FinanceQACategoryKey;
  label: string;
  whatItCovers: string;
}[] = [
  {
    key: "budgeting",
    label: "Budgeting & cash flow",
    whatItCovers:
      "Budgeting terms, spending categories, cash flow, and common planning language.",
  },
  {
    key: "banking",
    label: "Banking & accounts",
    whatItCovers:
      "Everyday banking concepts including account types, transfers, and common rate/fee terms.",
  },
  {
    key: "credit",
    label: "Credit & borrowing",
    whatItCovers:
      "Credit scores, cards, loans, interest, repayment structure, and common lender metrics.",
  },
  {
    key: "investing",
    label: "Investing & markets",
    whatItCovers:
      "Stocks, bonds, funds, diversification, orders, fees, and market vocabulary.",
  },
  {
    key: "economics",
    label: "Basic economics",
    whatItCovers:
      "Core macro and micro concepts that show up in everyday finance discussions.",
  },
  {
    key: "taxes",
    label: "Taxes & fees",
    whatItCovers:
      "Withholding, deductions/credits, tax rates, and common fee vocabulary.",
  },
  {
    key: "insurance",
    label: "Insurance & risk",
    whatItCovers:
      "Premiums, deductibles, coverage basics, and how financial risk is transferred.",
  },
  {
    key: "retirement",
    label: "Retirement & planning",
    whatItCovers:
      "Net worth, allocation, time horizon, retirement accounts, and long-term planning terms.",
  },
];

export const FINANCE_QUIZ_QUESTIONS: FinanceQA[] = [
  {
    "id": "q001",
    "category": "budgeting",
    "q": "What is a budget?",
    "a": "A plan for how you will earn, spend, and save money over a period.",
    "explanation": "It matches expected income to expenses and goals so you can avoid overspending."
  },
  {
    "id": "q002",
    "category": "budgeting",
    "q": "What does 'cash flow' mean?",
    "a": "The net movement of money in and out over a period.",
    "explanation": "Positive cash flow means more money coming in than going out."
  },
  {
    "id": "q003",
    "category": "budgeting",
    "q": "What is a fixed expense?",
    "a": "A cost that stays about the same each month (like rent).",
    "explanation": "It is predictable and easier to plan for than variable costs."
  },
  {
    "id": "q004",
    "category": "budgeting",
    "q": "What is a variable expense?",
    "a": "A cost that changes month to month (like groceries).",
    "explanation": "You can often adjust these to hit savings goals."
  },
  {
    "id": "q005",
    "category": "budgeting",
    "q": "What is an emergency fund?",
    "a": "Savings set aside for unexpected expenses.",
    "explanation": "Many people aim for 3–6 months of essential expenses, but any buffer helps."
  },
  {
    "id": "q006",
    "category": "budgeting",
    "q": "What is the 50/30/20 rule?",
    "a": "A budgeting guideline: 50% needs, 30% wants, 20% saving/debt.",
    "explanation": "It is a starting point, not a law."
  },
  {
    "id": "q007",
    "category": "budgeting",
    "q": "What does 'pay yourself first' mean?",
    "a": "Saving automatically before spending on other things.",
    "explanation": "It makes saving consistent by removing willpower from the equation."
  },
  {
    "id": "q008",
    "category": "budgeting",
    "q": "What is a sinking fund?",
    "a": "Saving gradually for a known future expense.",
    "explanation": "Examples include car repairs, travel, or annual insurance premiums."
  },
  {
    "id": "q009",
    "category": "banking",
    "q": "What is a checking account?",
    "a": "A bank account used for everyday spending and bill payments.",
    "explanation": "It usually allows frequent withdrawals and debit card use."
  },
  {
    "id": "q010",
    "category": "banking",
    "q": "What is a savings account?",
    "a": "A bank account designed for saving money, often earning interest.",
    "explanation": "Rates vary; access may be limited compared to checking."
  },
  {
    "id": "q011",
    "category": "banking",
    "q": "What is interest?",
    "a": "The cost of borrowing money or the reward for saving it.",
    "explanation": "Borrowers pay interest; savers earn interest."
  },
  {
    "id": "q012",
    "category": "banking",
    "q": "What is compound interest?",
    "a": "Interest calculated on the original amount plus previously earned interest.",
    "explanation": "Compounding can grow savings faster over time."
  },
  {
    "id": "q013",
    "category": "banking",
    "q": "What is APY?",
    "a": "Annual Percentage Yield, the effective yearly return including compounding.",
    "explanation": "APY lets you compare savings rates across accounts."
  },
  {
    "id": "q014",
    "category": "banking",
    "q": "What is APR?",
    "a": "Annual Percentage Rate, the yearly cost of borrowing including certain fees.",
    "explanation": "APR is used to compare loans and credit cards."
  },
  {
    "id": "q015",
    "category": "banking",
    "q": "What is an overdraft?",
    "a": "Spending more than your account balance, creating a negative balance.",
    "explanation": "It may trigger fees unless you have overdraft protection."
  },
  {
    "id": "q016",
    "category": "banking",
    "q": "What is a direct deposit?",
    "a": "When pay is deposited electronically into your bank account.",
    "explanation": "It is faster and safer than paper checks."
  },
  {
    "id": "q017",
    "category": "credit",
    "q": "What is a credit score?",
    "a": "A number that reflects your credit risk based on your history.",
    "explanation": "Higher scores generally help you qualify for better rates."
  },
  {
    "id": "q018",
    "category": "credit",
    "q": "What is a credit report?",
    "a": "A record of your borrowing and repayment history.",
    "explanation": "Lenders use it to judge creditworthiness."
  },
  {
    "id": "q019",
    "category": "credit",
    "q": "What is a secured credit card?",
    "a": "A card backed by a cash deposit that acts as collateral.",
    "explanation": "It is often used to build or rebuild credit."
  },
  {
    "id": "q020",
    "category": "credit",
    "q": "What is a credit limit?",
    "a": "The maximum you can borrow on a credit card.",
    "explanation": "Using a small portion of your limit can help utilization."
  },
  {
    "id": "q021",
    "category": "credit",
    "q": "What is credit utilization?",
    "a": "The percent of your credit limit you are using.",
    "explanation": "Lower utilization is generally better for your score."
  },
  {
    "id": "q022",
    "category": "credit",
    "q": "What is a minimum payment?",
    "a": "The smallest amount you must pay on a credit card each month.",
    "explanation": "Paying only the minimum increases total interest cost."
  },
  {
    "id": "q023",
    "category": "credit",
    "q": "What is principal?",
    "a": "The original amount borrowed or invested, not including interest.",
    "explanation": "Loan payments often include both principal and interest."
  },
  {
    "id": "q024",
    "category": "credit",
    "q": "What is collateral?",
    "a": "An asset pledged to secure a loan.",
    "explanation": "If you do not repay, the lender can take the collateral."
  },
  {
    "id": "q025",
    "category": "credit",
    "q": "What is a fixed-rate loan?",
    "a": "A loan with an interest rate that stays the same.",
    "explanation": "Payments are more predictable than a variable-rate loan."
  },
  {
    "id": "q026",
    "category": "credit",
    "q": "What is a variable-rate loan?",
    "a": "A loan with an interest rate that can change over time.",
    "explanation": "Payments can rise or fall as rates change."
  },
  {
    "id": "q027",
    "category": "credit",
    "q": "What is amortization?",
    "a": "A schedule showing how a loan is paid off over time.",
    "explanation": "Early payments usually include more interest than principal."
  },
  {
    "id": "q028",
    "category": "credit",
    "q": "What is a cosigner?",
    "a": "Someone who agrees to be responsible for a loan if you do not pay.",
    "explanation": "A cosigner can help you qualify but takes on risk."
  },
  {
    "id": "q029",
    "category": "investing",
    "q": "What is diversification?",
    "a": "Spreading investments across different assets to reduce risk.",
    "explanation": "It aims to avoid having one event wipe out your portfolio."
  },
  {
    "id": "q030",
    "category": "investing",
    "q": "What is an index fund?",
    "a": "A fund that tracks a market index (like the S&P 500).",
    "explanation": "It typically has low fees and broad diversification."
  },
  {
    "id": "q031",
    "category": "investing",
    "q": "What is an ETF?",
    "a": "An Exchange-Traded Fund that trades like a stock.",
    "explanation": "Many ETFs track indexes and can be bought/sold intraday."
  },
  {
    "id": "q032",
    "category": "investing",
    "q": "What is a stock?",
    "a": "A share of ownership in a company.",
    "explanation": "Stock returns come from price changes and sometimes dividends."
  },
  {
    "id": "q033",
    "category": "investing",
    "q": "What is a bond?",
    "a": "A loan you make to a government or company for interest payments.",
    "explanation": "Bonds generally have lower risk than stocks, but not always."
  },
  {
    "id": "q034",
    "category": "investing",
    "q": "What is a dividend?",
    "a": "A payment a company makes to shareholders from profits.",
    "explanation": "Not all companies pay dividends."
  },
  {
    "id": "q035",
    "category": "investing",
    "q": "What is capital gains tax?",
    "a": "Tax on profit from selling an asset for more than you paid.",
    "explanation": "Rates often depend on holding period and jurisdiction."
  },
  {
    "id": "q036",
    "category": "investing",
    "q": "What is dollar-cost averaging?",
    "a": "Investing a fixed amount regularly regardless of price.",
    "explanation": "It reduces the risk of investing all at once at a market high."
  },
  {
    "id": "q037",
    "category": "investing",
    "q": "What is risk tolerance?",
    "a": "How much investment uncertainty you can handle emotionally and financially.",
    "explanation": "It influences how aggressive your portfolio should be."
  },
  {
    "id": "q038",
    "category": "investing",
    "q": "What is volatility?",
    "a": "How much an investment’s price moves up and down.",
    "explanation": "Higher volatility usually means higher risk in the short term."
  },
  {
    "id": "q039",
    "category": "investing",
    "q": "What is an expense ratio?",
    "a": "The annual fee a fund charges as a percentage of assets.",
    "explanation": "Lower expense ratios leave more return in your pocket."
  },
  {
    "id": "q040",
    "category": "investing",
    "q": "What is a market order?",
    "a": "An order to buy or sell immediately at the best available price.",
    "explanation": "It prioritizes execution over price certainty."
  },
  {
    "id": "q041",
    "category": "investing",
    "q": "What is a limit order?",
    "a": "An order to buy or sell at a specific price or better.",
    "explanation": "It prioritizes price control, but may not execute."
  },
  {
    "id": "q042",
    "category": "investing",
    "q": "What is inflation?",
    "a": "A general rise in prices over time, reducing purchasing power.",
    "explanation": "If inflation is 3%, $100 buys less next year than today."
  },
  {
    "id": "q043",
    "category": "economics",
    "q": "What is GDP?",
    "a": "Gross Domestic Product: the value of goods and services produced in a country.",
    "explanation": "It is a broad measure of economic output."
  },
  {
    "id": "q044",
    "category": "economics",
    "q": "What is supply and demand?",
    "a": "A model explaining how prices adjust based on availability and desire to buy.",
    "explanation": "Higher demand or lower supply tends to push prices up."
  },
  {
    "id": "q045",
    "category": "economics",
    "q": "What is a recession?",
    "a": "A significant decline in economic activity over time.",
    "explanation": "Often associated with rising unemployment and lower spending."
  },
  {
    "id": "q046",
    "category": "economics",
    "q": "What does the central bank do?",
    "a": "It manages monetary policy, including interest rates and money supply.",
    "explanation": "Its goals often include stable prices and employment."
  },
  {
    "id": "q047",
    "category": "economics",
    "q": "What is a policy interest rate?",
    "a": "A benchmark rate set by a central bank that influences borrowing costs.",
    "explanation": "Changes affect loans, mortgages, and savings rates."
  },
  {
    "id": "q048",
    "category": "economics",
    "q": "What is purchasing power?",
    "a": "How much goods and services money can buy.",
    "explanation": "Inflation lowers purchasing power if wages do not keep up."
  },
  {
    "id": "q049",
    "category": "taxes",
    "q": "What is a marginal tax rate?",
    "a": "The tax rate on your next dollar of income.",
    "explanation": "It can be higher than your average tax rate."
  },
  {
    "id": "q050",
    "category": "taxes",
    "q": "What is an effective tax rate?",
    "a": "Total tax paid divided by total income.",
    "explanation": "It reflects the overall tax burden after brackets and deductions."
  },
  {
    "id": "q051",
    "category": "taxes",
    "q": "What is a tax deduction?",
    "a": "An amount that reduces taxable income.",
    "explanation": "Lower taxable income usually means lower tax owed."
  },
  {
    "id": "q052",
    "category": "taxes",
    "q": "What is a tax credit?",
    "a": "An amount that directly reduces tax owed.",
    "explanation": "Credits are often more valuable than deductions of the same amount."
  },
  {
    "id": "q053",
    "category": "taxes",
    "q": "What is withholding?",
    "a": "Taxes taken out of your paycheck before you receive it.",
    "explanation": "It is a prepayment of your annual tax bill."
  },
  {
    "id": "q054",
    "category": "taxes",
    "q": "What is a service fee?",
    "a": "A charge for providing a service, separate from the base price.",
    "explanation": "Common in banking, tickets, and subscriptions."
  },
  {
    "id": "q055",
    "category": "taxes",
    "q": "What is a transaction fee?",
    "a": "A fee charged to process a payment or trade.",
    "explanation": "This can include card processing fees or brokerage commissions."
  },
  {
    "id": "q056",
    "category": "insurance",
    "q": "What is insurance?",
    "a": "A contract where you pay premiums to reduce financial risk from losses.",
    "explanation": "You trade a predictable cost for protection from large losses."
  },
  {
    "id": "q057",
    "category": "insurance",
    "q": "What is a premium?",
    "a": "The amount you pay for an insurance policy.",
    "explanation": "Premiums are often paid monthly or annually."
  },
  {
    "id": "q058",
    "category": "insurance",
    "q": "What is a deductible?",
    "a": "The amount you pay before insurance starts covering costs.",
    "explanation": "Higher deductibles often mean lower premiums."
  },
  {
    "id": "q059",
    "category": "insurance",
    "q": "What is a copay?",
    "a": "A fixed amount you pay for a covered service (often health insurance).",
    "explanation": "Copays are separate from premiums and may apply per visit."
  },
  {
    "id": "q060",
    "category": "insurance",
    "q": "What is coinsurance?",
    "a": "The percentage of costs you pay after meeting your deductible.",
    "explanation": "Example: 20% coinsurance means you pay 20% of covered costs."
  },
  {
    "id": "q061",
    "category": "retirement",
    "q": "What is a retirement account?",
    "a": "An account designed for saving long-term with tax advantages.",
    "explanation": "Examples depend on country, like 401(k), IRA, RRSP, TFSA."
  },
  {
    "id": "q062",
    "category": "retirement",
    "q": "What is employer matching?",
    "a": "When an employer contributes to your retirement account based on your contributions.",
    "explanation": "Not contributing enough can mean leaving free money on the table."
  },
  {
    "id": "q063",
    "category": "retirement",
    "q": "What is vesting?",
    "a": "Earning ownership of employer contributions over time.",
    "explanation": "If you leave early, you may forfeit unvested amounts."
  },
  {
    "id": "q064",
    "category": "retirement",
    "q": "What is an asset allocation?",
    "a": "How you split investments among stocks, bonds, and cash.",
    "explanation": "Allocation drives most portfolio risk and return behavior."
  },
  {
    "id": "q065",
    "category": "retirement",
    "q": "What is net worth?",
    "a": "Assets minus liabilities.",
    "explanation": "It is a snapshot of financial position at a point in time."
  },
  {
    "id": "q066",
    "category": "retirement",
    "q": "What is a liability?",
    "a": "A debt or obligation you owe.",
    "explanation": "Examples include loans, credit card balances, and mortgages."
  },
  {
    "id": "q067",
    "category": "retirement",
    "q": "What is a balance sheet (personal)?",
    "a": "A list of your assets and liabilities showing net worth.",
    "explanation": "It helps track progress and plan goals."
  },
  {
    "id": "q068",
    "category": "budgeting",
    "q": "What is 'discretionary spending'?",
    "a": "Money spent on non-essentials.",
    "explanation": "Examples include dining out, entertainment, and upgrades."
  },
  {
    "id": "q069",
    "category": "budgeting",
    "q": "What is lifestyle inflation?",
    "a": "Spending more as income rises, reducing savings.",
    "explanation": "It can silently prevent wealth-building even with raises."
  },
  {
    "id": "q070",
    "category": "banking",
    "q": "What is FDIC/CDIC insurance?",
    "a": "Government-backed protection for eligible bank deposits up to a limit.",
    "explanation": "Coverage and limits depend on the country and account type."
  },
  {
    "id": "q071",
    "category": "banking",
    "q": "What is a certificate of deposit (CD)?",
    "a": "A time-locked deposit paying a fixed interest rate for a set term.",
    "explanation": "Withdrawing early can trigger penalties."
  },
  {
    "id": "q072",
    "category": "credit",
    "q": "What is refinancing?",
    "a": "Replacing a loan with a new one, often to change the rate or term.",
    "explanation": "It can lower payments but may extend total interest cost."
  },
  {
    "id": "q073",
    "category": "credit",
    "q": "What is a debt-to-income (DTI) ratio?",
    "a": "Monthly debt payments divided by gross monthly income.",
    "explanation": "Lenders use DTI to judge affordability."
  },
  {
    "id": "q074",
    "category": "investing",
    "q": "What is a brokerage account?",
    "a": "An account that lets you buy and sell investments.",
    "explanation": "It can be taxable or tax-advantaged depending on the type."
  },
  {
    "id": "q075",
    "category": "investing",
    "q": "What is a mutual fund?",
    "a": "A pooled investment vehicle managed to meet a stated objective.",
    "explanation": "It typically trades once per day at net asset value."
  },
  {
    "id": "q076",
    "category": "economics",
    "q": "What is an exchange rate?",
    "a": "The price of one currency in terms of another.",
    "explanation": "It affects import prices, travel costs, and international investing."
  },
  {
    "id": "q077",
    "category": "economics",
    "q": "What is real interest rate?",
    "a": "Nominal interest rate minus inflation.",
    "explanation": "It better reflects changes in purchasing power."
  },
  {
    "id": "q078",
    "category": "taxes",
    "q": "What is sales tax/VAT?",
    "a": "A consumption tax added to purchases.",
    "explanation": "The name and structure depend on the country."
  },
  {
    "id": "q079",
    "category": "insurance",
    "q": "What is term life insurance?",
    "a": "Coverage for a set period, paying a benefit if death occurs during the term.",
    "explanation": "It is usually cheaper than permanent life insurance."
  },
  {
    "id": "q080",
    "category": "insurance",
    "q": "What is an out-of-pocket maximum?",
    "a": "The most you pay in a year for covered health services.",
    "explanation": "After hitting it, the plan typically pays 100% of covered costs."
  },
  {
    "id": "q081",
    "category": "retirement",
    "q": "What is a target-date fund?",
    "a": "A fund that automatically shifts risk lower as a target year approaches.",
    "explanation": "It is designed for hands-off retirement investing."
  },
  {
    "id": "q082",
    "category": "retirement",
    "q": "What is inflation-adjusted return?",
    "a": "Return after accounting for inflation.",
    "explanation": "A 6% return with 3% inflation is about 3% real return."
  },
  {
    "id": "q083",
    "category": "budgeting",
    "q": "What is a zero-based budget?",
    "a": "A budget where every dollar is assigned a job.",
    "explanation": "Income minus expenses equals zero, including saving categories."
  },
  {
    "id": "q084",
    "category": "banking",
    "q": "What is a routing number?",
    "a": "A number identifying a bank for transfers (primarily in the U.S.).",
    "explanation": "Other countries use different identifiers."
  },
  {
    "id": "q085",
    "category": "credit",
    "q": "What is a grace period on a credit card?",
    "a": "Time you can pay the statement balance without interest.",
    "explanation": "It usually applies only if you pay the full statement balance."
  },
  {
    "id": "q086",
    "category": "investing",
    "q": "What is a bear market?",
    "a": "A market decline typically defined as 20% or more from a recent high.",
    "explanation": "It often reflects pessimism and higher uncertainty."
  },
  {
    "id": "q087",
    "category": "investing",
    "q": "What is a bull market?",
    "a": "A period of rising prices and optimism.",
    "explanation": "It can last months or years."
  },
  {
    "id": "q088",
    "category": "economics",
    "q": "What is unemployment rate?",
    "a": "The percent of the labor force without a job but actively seeking work.",
    "explanation": "It is a key indicator of economic health."
  },
  {
    "id": "q089",
    "category": "taxes",
    "q": "What is a tax bracket?",
    "a": "A range of income taxed at a particular rate.",
    "explanation": "Only income within the bracket is taxed at that rate."
  },
  {
    "id": "q090",
    "category": "credit",
    "q": "What is a payday loan?",
    "a": "A short-term loan with very high fees/interest.",
    "explanation": "It can create debt cycles; alternatives are usually safer."
  },
  {
    "id": "q091",
    "category": "credit",
    "q": "What is simple interest?",
    "a": "Interest calculated only on the principal.",
    "explanation": "Some loans use simple interest; others compound."
  },
  {
    "id": "q092",
    "category": "investing",
    "q": "What is a yield?",
    "a": "Income from an investment expressed as a percentage.",
    "explanation": "For bonds, it reflects interest relative to price; for stocks, dividends relative to price."
  },
  {
    "id": "q093",
    "category": "investing",
    "q": "What is rebalancing?",
    "a": "Adjusting investments back to your target allocation.",
    "explanation": "It helps control risk after markets move."
  },
  {
    "id": "q094",
    "category": "budgeting",
    "q": "What is a budget variance?",
    "a": "The difference between planned and actual spending.",
    "explanation": "Tracking variance helps you adjust future budgets."
  },
  {
    "id": "q095",
    "category": "retirement",
    "q": "What is a withdrawal rate?",
    "a": "The percent of a portfolio withdrawn per year in retirement.",
    "explanation": "A lower rate reduces the risk of running out of money."
  },
  {
    "id": "q096",
    "category": "insurance",
    "q": "What is liability coverage?",
    "a": "Insurance that pays for damage or injury you cause to others.",
    "explanation": "Common in auto and renters/home insurance."
  },
  {
    "id": "q097",
    "category": "banking",
    "q": "What is a wire transfer?",
    "a": "An electronic transfer of funds between banks, often faster but with fees.",
    "explanation": "It is commonly used for large or urgent payments."
  },
  {
    "id": "q098",
    "category": "taxes",
    "q": "What is a 1099/T4/W-2 equivalent?",
    "a": "A form reporting income to you and the tax authority.",
    "explanation": "The exact form name depends on the country."
  },
  {
    "id": "q099",
    "category": "economics",
    "q": "What is a budget deficit (government)?",
    "a": "When a government spends more than it collects in revenue.",
    "explanation": "It can be financed by borrowing (issuing bonds)."
  },
  {
    "id": "q100",
    "category": "economics",
    "q": "What is monetary policy?",
    "a": "Actions by a central bank to influence the economy via money and rates.",
    "explanation": "Tools include rate changes and asset purchases."
  },
  {
    "id": "q101",
    "category": "economics",
    "q": "What is fiscal policy?",
    "a": "Government policy on spending and taxation.",
    "explanation": "It can stimulate or cool the economy."
  },
  {
    "id": "q102",
    "category": "investing",
    "q": "What is a prospectus?",
    "a": "A document describing a fund’s strategy, fees, and risks.",
    "explanation": "It helps investors understand what they are buying."
  },
  {
    "id": "q103",
    "category": "credit",
    "q": "What is a hard inquiry?",
    "a": "A credit check that can temporarily affect your score.",
    "explanation": "Often occurs when applying for credit."
  },
  {
    "id": "q104",
    "category": "credit",
    "q": "What is a soft inquiry?",
    "a": "A credit check that does not affect your score.",
    "explanation": "Examples include checking your own score or pre-approvals."
  },
  {
    "id": "q105",
    "category": "banking",
    "q": "What is a budget category?",
    "a": "A labeled bucket for tracking similar expenses.",
    "explanation": "Examples include housing, food, transport, and saving."
  },
  {
    "id": "q106",
    "category": "retirement",
    "q": "What is 'time horizon' in investing?",
    "a": "How long you have until you need the money.",
    "explanation": "Longer horizons can usually tolerate more short-term volatility."
  },
  {
    "id": "q107",
    "category": "investing",
    "q": "What is liquidity risk?",
    "a": "The risk you cannot sell an asset quickly without a price hit.",
    "explanation": "Some investments trade infrequently or have lockups."
  }
];

export const FINANCE_QUIZ_QUESTIONS_FAQS: FAQItem[] = [
  {
    q: "Are these questions a full finance course?",
    a: "No. They’re a fast, mixed question bank designed to help you review common terms and concepts across everyday finance.",
  },
  {
    q: "How should I use this page?",
    a: "Pick a category, read the questions first without expanding answers, then reveal answers to check yourself. Repeat until the vocabulary feels automatic.",
  },
  {
    q: "Do the answers cover every edge case?",
    a: "No. Answers are intentionally short and general so they stay useful across different countries and contexts. When rules vary (tax forms, deposit insurance), the answer notes that.",
  },
  {
    q: "Can I share or print this question list?",
    a: "Yes. You can copy a clean text version of the currently filtered questions from the page and print it for offline practice.",
  },
];
