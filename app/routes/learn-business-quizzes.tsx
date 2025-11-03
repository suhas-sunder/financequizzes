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
    "Business Finance Quiz | Test Your Accounting IQ | FinanceQuizzes.com";
  const description =
    "Test your knowledge of business finance, profits, and accounting fundamentals with our interactive Business Finance quiz. Learn how companies manage costs, assets, and growth.";
  const url = "https://www.financequizzes.com/learn-business-quizzes";
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
        q: "Is this business finance quiz free?",
        a: "Yes. Every quiz on FinanceQuizzes.com is 100% free and made for learning.",
      },
      {
        q: "Do I need an accounting background?",
        a: "No. The quiz is designed for all learners - from beginners to business students.",
      },
      {
        q: "Will I see the correct answers after I play?",
        a: "Yes. Each question shows the correct answer right away so you can learn instantly.",
      },
    ],
  });
}

// Business & Accounting question bank
const questionBank = [
  {
    q: "Which financial statement shows a company’s profits and losses?",
    options: [
      "Balance Sheet",
      "Income Statement",
      "Cash Flow Statement",
      "Retained Earnings Statement",
    ],
    correct: "Income Statement",
  },
  {
    q: "What is the term for total sales minus the cost of goods sold?",
    options: ["Operating Profit", "Gross Profit", "Net Income", "EBITDA"],
    correct: "Gross Profit",
  },
  {
    q: "Which of the following is considered a current asset?",
    options: ["Land", "Equipment", "Accounts Receivable", "Patents"],
    correct: "Accounts Receivable",
  },
  {
    q: "A company’s ‘liquidity’ measures its ability to:",
    options: [
      "Generate profits over time",
      "Pay short-term obligations",
      "Expand market share",
      "Reduce production costs",
    ],
    correct: "Pay short-term obligations",
  },
  {
    q: "What does ROI stand for?",
    options: [
      "Rate of Investment",
      "Return on Income",
      "Return on Investment",
      "Revenue of Industry",
    ],
    correct: "Return on Investment",
  },
  {
    q: "Which financial statement shows a company’s profits and losses?",
    options: [
      "Balance Sheet",
      "Income Statement",
      "Cash Flow Statement",
      "Retained Earnings Statement",
    ],
    correct: "Income Statement",
  },
  {
    q: "What is the term for total sales minus the cost of goods sold?",
    options: ["Operating Profit", "Gross Profit", "Net Income", "EBITDA"],
    correct: "Gross Profit",
  },
  {
    q: "Which of the following is considered a current asset?",
    options: ["Land", "Equipment", "Accounts Receivable", "Patents"],
    correct: "Accounts Receivable",
  },
  {
    q: "A company’s ‘liquidity’ measures its ability to:",
    options: [
      "Generate profits over time",
      "Pay short-term obligations",
      "Expand market share",
      "Reduce production costs",
    ],
    correct: "Pay short-term obligations",
  },
  {
    q: "What does ROI stand for?",
    options: [
      "Rate of Investment",
      "Return on Income",
      "Return on Investment",
      "Revenue of Industry",
    ],
    correct: "Return on Investment",
  },

  // FINANCIAL STATEMENTS
  {
    q: "Which financial statement lists assets, liabilities, and equity?",
    options: [
      "Balance Sheet",
      "Income Statement",
      "Cash Flow Statement",
      "Trial Balance",
    ],
    correct: "Balance Sheet",
  },
  {
    q: "Which report shows a company’s cash inflows and outflows?",
    options: [
      "Balance Sheet",
      "Cash Flow Statement",
      "Income Statement",
      "Retained Earnings Statement",
    ],
    correct: "Cash Flow Statement",
  },
  {
    q: "Net income is calculated by subtracting:",
    options: [
      "Expenses from revenue",
      "Assets from liabilities",
      "Liabilities from equity",
      "Revenue from profit",
    ],
    correct: "Expenses from revenue",
  },
  {
    q: "What is the accounting equation?",
    options: [
      "Assets = Liabilities + Equity",
      "Revenue = Assets - Liabilities",
      "Liabilities = Assets + Profit",
      "Equity = Assets × Revenue",
    ],
    correct: "Assets = Liabilities + Equity",
  },
  {
    q: "Which financial metric shows profitability relative to sales?",
    options: [
      "Net Profit Margin",
      "Debt Ratio",
      "Current Ratio",
      "Earnings Per Share",
    ],
    correct: "Net Profit Margin",
  },

  // RATIOS & ANALYSIS
  {
    q: "What does the Current Ratio measure?",
    options: ["Liquidity", "Profitability", "Leverage", "Efficiency"],
    correct: "Liquidity",
  },
  {
    q: "How is Earnings Per Share (EPS) calculated?",
    options: [
      "Net income divided by number of shares",
      "Revenue divided by total assets",
      "Operating income minus taxes",
      "Gross profit divided by liabilities",
    ],
    correct: "Net income divided by number of shares",
  },
  {
    q: "What is the formula for Gross Profit Margin?",
    options: [
      "(Revenue - COGS) ÷ Revenue",
      "Net Income ÷ Assets",
      "Operating Income ÷ Equity",
      "(Assets - Liabilities) ÷ Equity",
    ],
    correct: "(Revenue - COGS) ÷ Revenue",
  },
  {
    q: "Which ratio measures a company’s leverage?",
    options: [
      "Debt-to-Equity Ratio",
      "Current Ratio",
      "Price-to-Earnings Ratio",
      "Gross Margin",
    ],
    correct: "Debt-to-Equity Ratio",
  },
  {
    q: "What is the Quick Ratio also known as?",
    options: [
      "Acid-Test Ratio",
      "Leverage Ratio",
      "Turnover Ratio",
      "Liquidity Margin",
    ],
    correct: "Acid-Test Ratio",
  },

  // ACCOUNTING CONCEPTS
  {
    q: "Which accounting principle requires expenses to match related revenues?",
    options: [
      "Matching Principle",
      "Conservatism Principle",
      "Revenue Recognition",
      "Historical Cost Principle",
    ],
    correct: "Matching Principle",
  },
  {
    q: "What is depreciation?",
    options: [
      "Allocation of an asset’s cost over its useful life",
      "Increase in asset value over time",
      "Recording new equipment purchases",
      "Paying off long-term debt",
    ],
    correct: "Allocation of an asset’s cost over its useful life",
  },
  {
    q: "Which method spreads depreciation evenly over time?",
    options: [
      "Straight-Line Method",
      "Declining Balance",
      "Units of Production",
      "Sum of Years Digits",
    ],
    correct: "Straight-Line Method",
  },
  {
    q: "What does GAAP stand for?",
    options: [
      "Generally Accepted Accounting Principles",
      "Global Accounting Application Protocol",
      "Gross Asset Allocation Policy",
      "Government Accounting Agreement Plan",
    ],
    correct: "Generally Accepted Accounting Principles",
  },
  {
    q: "Which organization sets international accounting standards?",
    options: ["IASB", "FASB", "SEC", "GAO"],
    correct: "IASB",
  },

  // BUDGETING & PLANNING
  {
    q: "What is the main purpose of a business budget?",
    options: [
      "Plan and control financial resources",
      "Record legal documents",
      "Report taxes",
      "Calculate dividends",
    ],
    correct: "Plan and control financial resources",
  },
  {
    q: "What is variance analysis?",
    options: [
      "Comparing actual results to budgeted figures",
      "Creating a forecast for next year",
      "Adjusting depreciation schedules",
      "Recording inventory changes",
    ],
    correct: "Comparing actual results to budgeted figures",
  },
  {
    q: "What does a forecast predict?",
    options: [
      "Future financial performance",
      "Current market prices",
      "Employee salaries",
      "Regulatory changes",
    ],
    correct: "Future financial performance",
  },
  {
    q: "Which cost varies with production volume?",
    options: ["Variable Cost", "Fixed Cost", "Sunk Cost", "Opportunity Cost"],
    correct: "Variable Cost",
  },
  {
    q: "What is a fixed cost example?",
    options: [
      "Factory rent",
      "Raw materials",
      "Electricity usage",
      "Sales commissions",
    ],
    correct: "Factory rent",
  },

  // CORPORATE FINANCE
  {
    q: "What is leverage in business finance?",
    options: [
      "Using borrowed money to increase returns",
      "Paying off debts early",
      "Holding extra cash reserves",
      "Issuing new shares",
    ],
    correct: "Using borrowed money to increase returns",
  },
  {
    q: "What does WACC stand for?",
    options: [
      "Weighted Average Cost of Capital",
      "Working Assets Control Coefficient",
      "Weighted Accounting Capital Cost",
      "Workforce Allocation of Capital",
    ],
    correct: "Weighted Average Cost of Capital",
  },
  {
    q: "What is capital budgeting?",
    options: [
      "Evaluating and selecting long-term investment projects",
      "Short-term cost allocation",
      "Auditing company expenses",
      "Tracking employee performance",
    ],
    correct: "Evaluating and selecting long-term investment projects",
  },
  {
    q: "Which method measures project profitability using time value of money?",
    options: [
      "Net Present Value (NPV)",
      "Payback Period",
      "Simple ROI",
      "Break-even Point",
    ],
    correct: "Net Present Value (NPV)",
  },
  {
    q: "What is the internal rate of return (IRR)?",
    options: [
      "Discount rate that makes NPV equal zero",
      "Company’s net profit margin",
      "Interest on corporate debt",
      "Equity growth rate",
    ],
    correct: "Discount rate that makes NPV equal zero",
  },

  // COSTING & OPERATIONS
  {
    q: "What is the break-even point?",
    options: [
      "Where total revenue equals total costs",
      "Where gross margin equals zero",
      "Where sales exceed expenses",
      "When production stops",
    ],
    correct: "Where total revenue equals total costs",
  },
  {
    q: "What is the contribution margin?",
    options: [
      "Sales minus variable costs",
      "Revenue minus fixed costs",
      "Gross profit margin",
      "Net profit after tax",
    ],
    correct: "Sales minus variable costs",
  },
  {
    q: "Which costing method assigns overhead to specific products?",
    options: [
      "Activity-Based Costing",
      "Variable Costing",
      "Absorption Costing",
      "Standard Costing",
    ],
    correct: "Activity-Based Costing",
  },
  {
    q: "Which cost cannot be recovered once spent?",
    options: ["Sunk Cost", "Fixed Cost", "Variable Cost", "Marginal Cost"],
    correct: "Sunk Cost",
  },
  {
    q: "What is economies of scale?",
    options: [
      "Cost advantages from increased production",
      "Rising costs at larger output levels",
      "Declining profit margins",
      "Increasing variable costs",
    ],
    correct: "Cost advantages from increased production",
  },

  // ENTREPRENEURSHIP
  {
    q: "What is working capital?",
    options: [
      "Current assets minus current liabilities",
      "Total assets minus debt",
      "Cash on hand",
      "Net profit after tax",
    ],
    correct: "Current assets minus current liabilities",
  },
  {
    q: "Which metric measures how efficiently a company uses its assets?",
    options: [
      "Return on Assets (ROA)",
      "Debt Ratio",
      "Operating Margin",
      "Quick Ratio",
    ],
    correct: "Return on Assets (ROA)",
  },
  {
    q: "Which financing option involves selling ownership in a business?",
    options: [
      "Equity financing",
      "Debt financing",
      "Lease financing",
      "Venture credit",
    ],
    correct: "Equity financing",
  },
  {
    q: "Which type of funding comes from venture capitalists?",
    options: [
      "Equity investment in startups",
      "Bank loans",
      "Government bonds",
      "Corporate grants",
    ],
    correct: "Equity investment in startups",
  },
  {
    q: "What is bootstrapping in entrepreneurship?",
    options: [
      "Starting a business with minimal external funding",
      "Applying for multiple loans",
      "Outsourcing financial management",
      "Buying back shares",
    ],
    correct: "Starting a business with minimal external funding",
  },
  {
    q: "What is corporate tax?",
    options: [
      "Tax on company profits",
      "Tax on employee salaries",
      "Sales tax charged to customers",
      "Import duty on goods",
    ],
    correct: "Tax on company profits",
  },
  {
    q: "Which expense is tax-deductible for a business?",
    options: [
      "Office rent and utilities",
      "Personal travel",
      "Owner’s private meals",
      "Charitable donations by employees",
    ],
    correct: "Office rent and utilities",
  },
  {
    q: "What is depreciation used for in tax reporting?",
    options: [
      "To spread asset costs over several years for tax purposes",
      "To inflate asset values",
      "To record employee bonuses",
      "To increase taxable income",
    ],
    correct: "To spread asset costs over several years for tax purposes",
  },
  {
    q: "Which form of business is subject to double taxation?",
    options: ["C Corporation", "Sole Proprietorship", "Partnership", "LLC"],
    correct: "C Corporation",
  },
  {
    q: "What is a tax credit?",
    options: [
      "A direct reduction of tax owed",
      "A deduction from income before tax",
      "A refund of previous taxes paid",
      "A penalty adjustment",
    ],
    correct: "A direct reduction of tax owed",
  },
  {
    q: "What is a tax deduction?",
    options: [
      "An expense subtracted from taxable income",
      "A refund on overpaid tax",
      "A credit applied after filing",
      "A bonus paid by the government",
    ],
    correct: "An expense subtracted from taxable income",
  },
  {
    q: "What is payroll tax?",
    options: [
      "Tax withheld from employee wages for social security and Medicare",
      "Tax on company vehicles",
      "Import tariff",
      "Dividend tax on shareholders",
    ],
    correct:
      "Tax withheld from employee wages for social security and Medicare",
  },
  {
    q: "Which accounting method recognizes income when cash is received?",
    options: [
      "Cash Basis Accounting",
      "Accrual Basis Accounting",
      "Hybrid Accounting",
      "Modified Cash Basis",
    ],
    correct: "Cash Basis Accounting",
  },
  {
    q: "Which accounting method recognizes revenue when earned, not when received?",
    options: [
      "Accrual Basis Accounting",
      "Cash Basis Accounting",
      "Tax Accounting",
      "Modified Cash Basis",
    ],
    correct: "Accrual Basis Accounting",
  },
  {
    q: "What is deferred tax?",
    options: [
      "Tax owed or prepaid that will be settled in future periods",
      "Tax paid early for discounts",
      "Tax on exports",
      "A penalty tax",
    ],
    correct: "Tax owed or prepaid that will be settled in future periods",
  },

  // DIVIDENDS & EQUITY
  {
    q: "What are dividends?",
    options: [
      "Payments to shareholders from company profits",
      "Taxes on business profits",
      "Employee bonuses",
      "Stock buybacks",
    ],
    correct: "Payments to shareholders from company profits",
  },
  {
    q: "What is a dividend yield?",
    options: [
      "Annual dividends per share divided by share price",
      "Total revenue divided by profit",
      "Earnings per share × dividend payout ratio",
      "Interest rate on bonds",
    ],
    correct: "Annual dividends per share divided by share price",
  },
  {
    q: "What does retained earnings represent?",
    options: [
      "Profits kept in the company instead of paid out as dividends",
      "Reinvested employee bonuses",
      "Loan repayments to investors",
      "Total equity of shareholders",
    ],
    correct: "Profits kept in the company instead of paid out as dividends",
  },
  {
    q: "Which of these increases shareholders’ equity?",
    options: [
      "Issuing new shares",
      "Paying dividends",
      "Buying back stock",
      "Recording depreciation",
    ],
    correct: "Issuing new shares",
  },
  {
    q: "What is share repurchase?",
    options: [
      "Company buying back its own shares from investors",
      "Issuing preferred stock",
      "Selling new equity to raise funds",
      "Merging with another company",
    ],
    correct: "Company buying back its own shares from investors",
  },

  // VALUATION & INVESTMENT
  {
    q: "What does P/E ratio stand for?",
    options: [
      "Price-to-Earnings Ratio",
      "Profit-to-Equity Ratio",
      "Performance Efficiency",
      "Portfolio Evaluation",
    ],
    correct: "Price-to-Earnings Ratio",
  },
  {
    q: "What does a high P/E ratio typically indicate?",
    options: [
      "Investors expect high future growth",
      "Company is undervalued",
      "Company has high debt",
      "Stock is illiquid",
    ],
    correct: "Investors expect high future growth",
  },
  {
    q: "What is book value per share?",
    options: [
      "Shareholder equity divided by total shares outstanding",
      "Revenue per employee",
      "Earnings per share after tax",
      "Net income divided by revenue",
    ],
    correct: "Shareholder equity divided by total shares outstanding",
  },
  {
    q: "What does market capitalization measure?",
    options: [
      "Total value of a company’s outstanding shares",
      "Net profit margin",
      "Total assets plus liabilities",
      "Revenue growth rate",
    ],
    correct: "Total value of a company’s outstanding shares",
  },
  {
    q: "What is enterprise value (EV)?",
    options: [
      "Market capitalization + debt - cash",
      "Market capitalization ÷ earnings",
      "Assets - liabilities",
      "Revenue × growth rate",
    ],
    correct: "Market capitalization + debt - cash",
  },

  // CORPORATE GOVERNANCE & STRUCTURE
  {
    q: "Who are a company’s primary stakeholders?",
    options: [
      "Employees, customers, suppliers, and investors",
      "Only shareholders",
      "Government agencies",
      "Competitors and suppliers",
    ],
    correct: "Employees, customers, suppliers, and investors",
  },
  {
    q: "What is a board of directors responsible for?",
    options: [
      "Overseeing management and protecting shareholder interests",
      "Managing day-to-day operations",
      "Auditing employee salaries",
      "Setting tax rates",
    ],
    correct: "Overseeing management and protecting shareholder interests",
  },
  {
    q: "Who appoints the CEO in most corporations?",
    options: [
      "Board of Directors",
      "Shareholders directly",
      "Employees",
      "Government regulators",
    ],
    correct: "Board of Directors",
  },
  {
    q: "What is corporate governance?",
    options: [
      "System of rules, practices, and processes by which a company is directed",
      "Tax policy for large firms",
      "Hiring process for executives",
      "Employee union negotiations",
    ],
    correct:
      "System of rules, practices, and processes by which a company is directed",
  },
  {
    q: "What is a merger?",
    options: [
      "Two companies combining to form one entity",
      "A company issuing new stock",
      "Liquidating assets",
      "Outsourcing operations",
    ],
    correct: "Two companies combining to form one entity",
  },

  // OPERATIONS & MANAGEMENT
  {
    q: "What is supply chain management?",
    options: [
      "Coordinating production, inventory, and distribution efficiently",
      "Hiring new employees",
      "Marketing new products",
      "Tax planning",
    ],
    correct: "Coordinating production, inventory, and distribution efficiently",
  },
  {
    q: "What is lean manufacturing focused on?",
    options: [
      "Reducing waste and improving efficiency",
      "Hiring more workers",
      "Maximizing advertising spend",
      "Outsourcing production",
    ],
    correct: "Reducing waste and improving efficiency",
  },
  {
    q: "What does KPI stand for?",
    options: [
      "Key Performance Indicator",
      "Knowledge Profit Index",
      "Key Process Insight",
      "Known Profit Increase",
    ],
    correct: "Key Performance Indicator",
  },
  {
    q: "What is benchmarking?",
    options: [
      "Comparing business performance to industry standards or competitors",
      "Setting employee bonuses",
      "Defining profit margins",
      "Measuring taxes",
    ],
    correct:
      "Comparing business performance to industry standards or competitors",
  },
  {
    q: "What is total quality management (TQM)?",
    options: [
      "Continuous improvement of processes to enhance quality and performance",
      "Employee turnover measurement",
      "Inventory stocktaking",
      "Marketing analytics",
    ],
    correct:
      "Continuous improvement of processes to enhance quality and performance",
  },

  // MARKETING & STRATEGY
  {
    q: "What is a target market?",
    options: [
      "Specific group of customers a company aims to serve",
      "Entire population",
      "Employees of a company",
      "Investors and analysts",
    ],
    correct: "Specific group of customers a company aims to serve",
  },
  {
    q: "What does SWOT stand for?",
    options: [
      "Strengths, Weaknesses, Opportunities, Threats",
      "Sales, Wages, Output, Trends",
      "Strategy, Work, Organization, Tactics",
      "Systems, Workflow, Operations, Technology",
    ],
    correct: "Strengths, Weaknesses, Opportunities, Threats",
  },
  {
    q: "What is market segmentation?",
    options: [
      "Dividing customers into groups based on shared characteristics",
      "Merging product lines",
      "Cutting prices for all segments",
      "Measuring advertising ROI",
    ],
    correct: "Dividing customers into groups based on shared characteristics",
  },
  {
    q: "What is brand equity?",
    options: [
      "Value added to a product due to its brand name recognition",
      "Total company equity",
      "Marketing expense account",
      "Sales revenue from one region",
    ],
    correct: "Value added to a product due to its brand name recognition",
  },
  {
    q: "What does ROI measure in marketing?",
    options: [
      "Profit generated per dollar spent on marketing",
      "Total revenue per campaign",
      "Ad impressions over time",
      "Customer satisfaction score",
    ],
    correct: "Profit generated per dollar spent on marketing",
  },

  // HUMAN RESOURCES
  {
    q: "What is human capital?",
    options: [
      "Skills, knowledge, and experience possessed by employees",
      "Cash owned by a business",
      "Physical assets and equipment",
      "Equity from shareholders",
    ],
    correct: "Skills, knowledge, and experience possessed by employees",
  },
  {
    q: "What is employee turnover?",
    options: [
      "Rate at which employees leave and are replaced",
      "Annual profit per employee",
      "Training budget utilization",
      "Promotions granted per year",
    ],
    correct: "Rate at which employees leave and are replaced",
  },
  {
    q: "What does KPI in HR often measure?",
    options: [
      "Performance and productivity of employees",
      "Total company assets",
      "Annual sales growth",
      "Tax deductions per worker",
    ],
    correct: "Performance and productivity of employees",
  },
  {
    q: "What is the purpose of performance appraisals?",
    options: [
      "Evaluate employee achievements and areas for improvement",
      "Determine product pricing",
      "Audit financial reports",
      "Forecast future profits",
    ],
    correct: "Evaluate employee achievements and areas for improvement",
  },
  {
    q: "What is an organizational chart used for?",
    options: [
      "Showing company structure and reporting relationships",
      "Tracking customer satisfaction",
      "Recording expenses",
      "Project scheduling",
    ],
    correct: "Showing company structure and reporting relationships",
  },

  // FINAL BUSINESS STRATEGY SECTION
  {
    q: "What is business strategy?",
    options: [
      "Plan to achieve long-term goals and competitive advantage",
      "Short-term budget allocation",
      "Marketing advertisement design",
      "Human resource planning only",
    ],
    correct: "Plan to achieve long-term goals and competitive advantage",
  },
  {
    q: "What is vertical integration?",
    options: [
      "Company expands control over supply chain stages",
      "Company merges with competitor",
      "Company diversifies product lines",
      "Company outsources logistics",
    ],
    correct: "Company expands control over supply chain stages",
  },
  {
    q: "What is diversification?",
    options: [
      "Expanding into new products or markets to spread risk",
      "Focusing only on one core product",
      "Reducing production levels",
      "Increasing employee count",
    ],
    correct: "Expanding into new products or markets to spread risk",
  },
  {
    q: "What is a competitive advantage?",
    options: [
      "An attribute that allows a company to outperform rivals",
      "Government subsidy",
      "Short-term price discount",
      "Tax deduction method",
    ],
    correct: "An attribute that allows a company to outperform rivals",
  },
  {
    q: "What is a business plan?",
    options: [
      "Document outlining goals, strategy, and financial projections",
      "Employee policy guide",
      "Marketing advertisement",
      "Shareholder agreement",
    ],
    correct: "Document outlining goals, strategy, and financial projections",
  },
  // FINANCIAL MANAGEMENT
  {
    q: "What is the primary goal of financial management in a corporation?",
    options: [
      "Maximize shareholder wealth",
      "Minimize taxes",
      "Increase employee salaries",
      "Expand product lines",
    ],
    correct: "Maximize shareholder wealth",
  },
  {
    q: "What is working capital management concerned with?",
    options: [
      "Managing short-term assets and liabilities",
      "Raising long-term capital",
      "Setting dividend policy",
      "Measuring profitability ratios",
    ],
    correct: "Managing short-term assets and liabilities",
  },
  {
    q: "What is capital structure?",
    options: [
      "Mix of debt and equity financing used by a company",
      "Organization’s hierarchy",
      "Budget allocation process",
      "Type of inventory control",
    ],
    correct: "Mix of debt and equity financing used by a company",
  },
  {
    q: "Which financial ratio measures how efficiently a company uses equity?",
    options: [
      "Return on Equity (ROE)",
      "Return on Assets (ROA)",
      "Current Ratio",
      "Debt Ratio",
    ],
    correct: "Return on Equity (ROE)",
  },
  {
    q: "What is financial leverage?",
    options: [
      "Use of borrowed funds to amplify potential returns",
      "Reducing variable costs through automation",
      "Diversifying revenue streams",
      "Increasing cash reserves",
    ],
    correct: "Use of borrowed funds to amplify potential returns",
  },
  {
    q: "What is the difference between gross profit and net profit?",
    options: [
      "Net profit includes all expenses, gross profit only includes COGS",
      "Gross profit includes taxes, net profit does not",
      "They are identical",
      "Net profit is calculated before interest and taxes",
    ],
    correct:
      "Net profit includes all expenses, gross profit only includes COGS",
  },
  {
    q: "What is the purpose of financial forecasting?",
    options: [
      "Predict future revenues, expenses, and cash flow",
      "Audit past performance",
      "File tax returns",
      "Comply with SEC filings",
    ],
    correct: "Predict future revenues, expenses, and cash flow",
  },
  {
    q: "What is sensitivity analysis used for in finance?",
    options: [
      "Assessing how changes in variables affect project outcomes",
      "Measuring creditworthiness",
      "Auditing employee expenses",
      "Comparing stock market returns",
    ],
    correct: "Assessing how changes in variables affect project outcomes",
  },
  {
    q: "Which term refers to the cost of choosing one alternative over another?",
    options: ["Opportunity Cost", "Fixed Cost", "Sunk Cost", "Marginal Cost"],
    correct: "Opportunity Cost",
  },
  {
    q: "What is a financial audit?",
    options: [
      "Independent examination of financial statements for accuracy",
      "Internal budgeting review",
      "Payroll report preparation",
      "Market research study",
    ],
    correct: "Independent examination of financial statements for accuracy",
  },

  // ENTREPRENEURSHIP & SMALL BUSINESS
  {
    q: "What is a sole proprietorship?",
    options: [
      "A business owned and operated by one person",
      "A corporation with multiple shareholders",
      "A government-run company",
      "A non-profit organization",
    ],
    correct: "A business owned and operated by one person",
  },
  {
    q: "Which business structure provides limited liability and pass-through taxation?",
    options: [
      "Limited Liability Company (LLC)",
      "Partnership",
      "Sole Proprietorship",
      "C Corporation",
    ],
    correct: "Limited Liability Company (LLC)",
  },
  {
    q: "What is the primary advantage of forming a corporation?",
    options: [
      "Limited liability for shareholders",
      "Lower taxes than individuals",
      "Simpler management",
      "Unlimited personal control",
    ],
    correct: "Limited liability for shareholders",
  },
  {
    q: "What is the first step in a business startup lifecycle?",
    options: [
      "Idea generation and market research",
      "Hiring staff",
      "Issuing shares",
      "Filing taxes",
    ],
    correct: "Idea generation and market research",
  },
  {
    q: "What is an angel investor?",
    options: [
      "Individual who provides early-stage funding to startups",
      "Government grant provider",
      "Corporate lender",
      "Mutual fund manager",
    ],
    correct: "Individual who provides early-stage funding to startups",
  },
  {
    q: "What is the purpose of a business incubator?",
    options: [
      "Support startups with resources, mentorship, and workspace",
      "Provide tax auditing services",
      "Merge small businesses into corporations",
      "Act as a government regulator",
    ],
    correct: "Support startups with resources, mentorship, and workspace",
  },
  {
    q: "What is crowdfunding?",
    options: [
      "Raising small amounts of money from many individuals online",
      "Bank loan consolidation",
      "Selling company equity privately",
      "Borrowing from venture capitalists",
    ],
    correct: "Raising small amounts of money from many individuals online",
  },
  {
    q: "What is the break-even analysis used for?",
    options: [
      "Finding the sales volume where total revenue equals total costs",
      "Measuring annual tax rate",
      "Calculating ROI on marketing spend",
      "Comparing competitor profits",
    ],
    correct: "Finding the sales volume where total revenue equals total costs",
  },
  {
    q: "What is the term for a startup’s initial offering of shares to the public?",
    options: [
      "Initial Public Offering (IPO)",
      "Venture Capital Round",
      "Private Placement",
      "Equity Buyback",
    ],
    correct: "Initial Public Offering (IPO)",
  },
  {
    q: "Which document outlines the mission, goals, and strategy of a new business?",
    options: [
      "Business Plan",
      "Financial Report",
      "Sales Ledger",
      "Accounting Sheet",
    ],
    correct: "Business Plan",
  },

  // CORPORATE STRUCTURE & STRATEGY
  {
    q: "What is horizontal integration?",
    options: [
      "Company acquiring competitors in the same industry",
      "Company acquiring suppliers or distributors",
      "Diversifying into unrelated industries",
      "Reducing vertical control",
    ],
    correct: "Company acquiring competitors in the same industry",
  },
  {
    q: "What is a hostile takeover?",
    options: [
      "Acquisition opposed by the target company’s management",
      "Friendly merger between equals",
      "Buyout approved by the board",
      "Joint venture investment",
    ],
    correct: "Acquisition opposed by the target company’s management",
  },
  {
    q: "What does CSR stand for?",
    options: [
      "Corporate Social Responsibility",
      "Cost Savings Ratio",
      "Capital Structure Rate",
      "Corporate Share Return",
    ],
    correct: "Corporate Social Responsibility",
  },
  {
    q: "What is a conglomerate?",
    options: [
      "Corporation owning companies in diverse industries",
      "Small local partnership",
      "Government enterprise",
      "Public trust fund",
    ],
    correct: "Corporation owning companies in diverse industries",
  },
  {
    q: "What is strategic management?",
    options: [
      "Setting objectives and aligning resources to achieve goals",
      "Daily task scheduling",
      "Accounting adjustments",
      "IT system maintenance",
    ],
    correct: "Setting objectives and aligning resources to achieve goals",
  },
  {
    q: "What is a corporate mission statement?",
    options: [
      "Statement of purpose and core values guiding the organization",
      "Quarterly sales report",
      "Employee handbook section",
      "Financial audit summary",
    ],
    correct: "Statement of purpose and core values guiding the organization",
  },
  {
    q: "What is a business merger’s main advantage?",
    options: [
      "Economies of scale and market expansion",
      "Reduced product quality",
      "Decreased brand awareness",
      "Higher tax rates",
    ],
    correct: "Economies of scale and market expansion",
  },
  {
    q: "What does IPO stand for?",
    options: [
      "Initial Public Offering",
      "Internal Profit Objective",
      "Investor Payment Option",
      "Institutional Portfolio Order",
    ],
    correct: "Initial Public Offering",
  },
  {
    q: "What is benchmarking used for in management?",
    options: [
      "Measuring performance relative to industry leaders",
      "Setting employee vacation policy",
      "Defining bonus structures",
      "Tracking taxes paid",
    ],
    correct: "Measuring performance relative to industry leaders",
  },
  {
    q: "What is the main focus of corporate ethics programs?",
    options: [
      "Promoting legal compliance and moral business conduct",
      "Increasing net income",
      "Improving IT systems",
      "Reducing advertising costs",
    ],
    correct: "Promoting legal compliance and moral business conduct",
  },

  // OPERATIONS & LOGISTICS
  {
    q: "What is just-in-time (JIT) inventory management?",
    options: [
      "Receiving goods only as they are needed in production",
      "Storing large amounts of inventory",
      "Selling products below cost",
      "Importing in bulk once a year",
    ],
    correct: "Receiving goods only as they are needed in production",
  },
  {
    q: "What is logistics?",
    options: [
      "Planning and controlling the movement of goods and services",
      "Tax planning",
      "Financial modeling",
      "Marketing analytics",
    ],
    correct: "Planning and controlling the movement of goods and services",
  },
  {
    q: "What is a supply chain bottleneck?",
    options: [
      "Point where production or distribution slows down due to constraints",
      "High demand for raw materials",
      "Excess labor availability",
      "Change in tax policy",
    ],
    correct:
      "Point where production or distribution slows down due to constraints",
  },
  {
    q: "What does ERP stand for in operations management?",
    options: [
      "Enterprise Resource Planning",
      "Employee Review Program",
      "Earnings Retention Policy",
      "Equipment Replacement Plan",
    ],
    correct: "Enterprise Resource Planning",
  },
  {
    q: "What is total cost of ownership (TCO)?",
    options: [
      "All direct and indirect costs of owning an asset over its life cycle",
      "Price paid at purchase only",
      "Only recurring maintenance costs",
      "Depreciation expense",
    ],
    correct:
      "All direct and indirect costs of owning an asset over its life cycle",
  },
  {
    q: "What is capacity utilization?",
    options: [
      "Percentage of production capacity actually used",
      "Total factory floor area",
      "Number of employees per shift",
      "Annual cost of goods sold",
    ],
    correct: "Percentage of production capacity actually used",
  },
  {
    q: "What is the bullwhip effect?",
    options: [
      "Small demand changes amplified up the supply chain",
      "Sudden price drops in commodities",
      "Employee turnover spikes",
      "Brand dilution over time",
    ],
    correct: "Small demand changes amplified up the supply chain",
  },
  {
    q: "What is process automation?",
    options: [
      "Use of technology to perform repetitive tasks efficiently",
      "Hiring additional managers",
      "Reducing product prices",
      "Increasing manual labor",
    ],
    correct: "Use of technology to perform repetitive tasks efficiently",
  },
  {
    q: "What is quality assurance (QA)?",
    options: [
      "Systematic process ensuring products meet quality standards",
      "Random testing",
      "Employee satisfaction survey",
      "Warehouse management",
    ],
    correct: "Systematic process ensuring products meet quality standards",
  },
  {
    q: "What is outsourcing?",
    options: [
      "Contracting external firms to handle specific business functions",
      "Hiring only local employees",
      "Merging with another company",
      "Increasing internal costs",
    ],
    correct: "Contracting external firms to handle specific business functions",
  },

  // GLOBAL BUSINESS & SUSTAINABILITY
  {
    q: "What is foreign direct investment (FDI)?",
    options: [
      "Investment by a company in another country’s operations or assets",
      "Purchasing foreign currency",
      "Importing raw materials",
      "Exporting finished goods",
    ],
    correct:
      "Investment by a company in another country’s operations or assets",
  },
  {
    q: "What is globalization in business?",
    options: [
      "Integration of markets and operations across countries",
      "Government protectionism",
      "Domestic-only marketing",
      "Corporate downsizing",
    ],
    correct: "Integration of markets and operations across countries",
  },
  {
    q: "What are exchange rates?",
    options: [
      "Prices at which one currency can be exchanged for another",
      "Interest rates for loans",
      "Corporate bond yields",
      "Tax rates on imports",
    ],
    correct: "Prices at which one currency can be exchanged for another",
  },
  {
    q: "What does ESG stand for?",
    options: [
      "Environmental, Social, and Governance",
      "Earnings, Strategy, and Growth",
      "Equity Share Gain",
      "Employee Satisfaction Grade",
    ],
    correct: "Environmental, Social, and Governance",
  },
  {
    q: "What is sustainability reporting?",
    options: [
      "Disclosure of environmental and social performance metrics",
      "Annual tax filing",
      "Inventory analysis",
      "Financial statement footnotes",
    ],
    correct: "Disclosure of environmental and social performance metrics",
  },
  {
    q: "What is the main purpose of trade agreements?",
    options: [
      "Reduce barriers to international trade",
      "Increase tariffs on imports",
      "Regulate domestic competition",
      "Control company profits",
    ],
    correct: "Reduce barriers to international trade",
  },
  {
    q: "What is comparative advantage in economics?",
    options: [
      "Ability of a country to produce goods at a lower opportunity cost",
      "Producing more goods than competitors",
      "Exporting only high-value goods",
      "Achieving monopoly power",
    ],
    correct:
      "Ability of a country to produce goods at a lower opportunity cost",
  },
  {
    q: "What is the balance of trade?",
    options: [
      "Difference between exports and imports of goods and services",
      "Difference between revenue and expenses",
      "Foreign currency reserves",
      "Net capital inflow",
    ],
    correct: "Difference between exports and imports of goods and services",
  },
  {
    q: "What is tariff?",
    options: [
      "Tax on imported goods",
      "Corporate income tax",
      "Tax refund",
      "Dividend payment",
    ],
    correct: "Tax on imported goods",
  },
  {
    q: "What is inflation’s typical impact on purchasing power?",
    options: [
      "It decreases purchasing power over time",
      "It increases purchasing power",
      "It has no effect",
      "It raises nominal income equally",
    ],
    correct: "It decreases purchasing power over time",
  },
  {
    q: "What is a financial KPI most used to measure company profitability?",
    options: [
      "Net Profit Margin",
      "Debt-to-Equity Ratio",
      "Current Ratio",
      "Inventory Turnover",
    ],
    correct: "Net Profit Margin",
  },
  {
    q: "What is the main purpose of a company’s audit committee?",
    options: [
      "Oversee financial reporting and internal controls",
      "Approve marketing campaigns",
      "Set executive salaries",
      "Negotiate supplier contracts",
    ],
    correct: "Oversee financial reporting and internal controls",
  },
  {
    q: "What is liquidity risk?",
    options: [
      "Risk of not being able to meet short-term financial obligations",
      "Risk of declining product demand",
      "Risk of higher taxes",
      "Risk of currency appreciation",
    ],
    correct: "Risk of not being able to meet short-term financial obligations",
  },
  {
    q: "What is an example of non-current liability?",
    options: [
      "Long-term debt",
      "Accounts payable",
      "Accrued wages",
      "Unearned revenue",
    ],
    correct: "Long-term debt",
  },
  {
    q: "What is the difference between fixed and variable budgets?",
    options: [
      "Fixed budgets stay constant; variable budgets adjust with activity levels",
      "Variable budgets are annual; fixed are monthly",
      "Fixed budgets change quarterly",
      "They are the same type of budget",
    ],
    correct:
      "Fixed budgets stay constant; variable budgets adjust with activity levels",
  },
  {
    q: "What is financial benchmarking commonly used for?",
    options: [
      "Comparing a company’s metrics against competitors or industry averages",
      "Auditing employee benefits",
      "Setting legal compliance rules",
      "Preparing tax filings",
    ],
    correct:
      "Comparing a company’s metrics against competitors or industry averages",
  },
  {
    q: "What is EBITDA primarily used to measure?",
    options: [
      "Company operating performance before non-cash and financing items",
      "Net income after taxes",
      "Revenue growth rate",
      "Cash flow from investing",
    ],
    correct:
      "Company operating performance before non-cash and financing items",
  },
  {
    q: "What is the main function of managerial accounting?",
    options: [
      "Provide internal reports for planning and decision-making",
      "Prepare tax returns for government filing",
      "Publish annual reports for investors",
      "Audit financial statements",
    ],
    correct: "Provide internal reports for planning and decision-making",
  },
  {
    q: "What is the payback period method used for?",
    options: [
      "Determining how long an investment takes to recover its initial cost",
      "Calculating total project ROI",
      "Estimating asset depreciation",
      "Forecasting annual budgets",
    ],
    correct:
      "Determining how long an investment takes to recover its initial cost",
  },
  {
    q: "What is business continuity planning?",
    options: [
      "Developing systems to keep operations running during disruptions",
      "Hiring additional staff for growth",
      "Merging with competitors",
      "Cutting non-essential expenses",
    ],
    correct: "Developing systems to keep operations running during disruptions",
  },
];

export default function BusinessQuiz({}: Route.ComponentProps) {
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
    const saved = localStorage.getItem("businessQuizStats");
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
      localStorage.setItem("businessQuizStats", JSON.stringify(stats));
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

    setStats((prev) => {
      const isCorrect = selected === correct;
      return {
        todayAnswered: prev.todayAnswered + 1,
        todayCorrect: prev.todayCorrect + (isCorrect ? 1 : 0),
        todayStreak: prev.todayStreak,
        todayBest: prev.todayBest,
        lastDate: new Date().toISOString().slice(0, 10),
      };
    });

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
              Learn Business Quizzes
            </li>
          </ol>
        </nav>
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto w-full sm:w-[720px] text-left rounded-3xl border border-slate-200 bg-white px-10 py-8 shadow-xl">
            {/* Stats row */}
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
        id="business-article"
        className="mx-auto max-w-4xl px-6 py-20 text-center border-b border-slate-200"
      >
        <h1 className="text-4xl font-extrabold text-[#0B1B2B] mb-6">
          Understanding Business Finance: From Profits to Performance
        </h1>
        <div className="mx-auto max-w-3xl text-left space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg">
            Business finance is the backbone of every organization. It covers
            everything from managing operating costs and analyzing cash flow to
            making investment decisions and forecasting profits. A strong grasp
            of business finance enables better planning, smarter budgeting, and
            sustainable growth.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">
              Key Concepts to Learn
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-medium">Financial statements:</span>{" "}
                Balance sheet, income statement, and cash flow report.
              </li>
              <li>
                <span className="font-medium">Profitability ratios:</span> Gross
                margin, operating margin, and ROI.
              </li>
              <li>
                <span className="font-medium">Working capital:</span> Managing
                liquidity and short-term obligations.
              </li>
              <li>
                <span className="font-medium">Capital budgeting:</span>{" "}
                Evaluating investments and risk.
              </li>
            </ul>
          </div>

          <p>
            Understanding these principles helps you read company reports,
            identify strengths and weaknesses, and make strategic decisions
            whether you're a manager, investor, or student.
          </p>

          <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
              Citations & References
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                Brigham, E. & Houston, J. (2021). *Fundamentals of Financial
                Management.*
              </li>
              <li>
                Weygandt, Kimmel & Kieso. (2020). *Financial Accounting, IFRS
                Edition.*
              </li>
              <li>
                Harvard Business Review. (2022). *Key Metrics Every Manager
                Should Know.*
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ANSWERS */}
      <section id="quiz-answers" className="mx-auto max-w-5xl px-6 pt-16">
        <h3 className="text-3xl font-bold text-[#0B1B2B] mb-4 text-center">
          Business Finance Quiz Answers
        </h3>
        <p className="text-slate-700 text-center max-w-2xl mx-auto mb-10">
          Review all questions and correct answers to strengthen your
          understanding.
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
              acceptedAnswer: {
                "@type": "Answer",
                text: q.correct,
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
                name: "Learn Business Quizzes",
                item: "https://www.financequizzes.com/learn-business-quizzes",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
