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
    "Investing Quiz | Stocks, Bonds, and Smart Portfolios | FinanceQuizzes.com";
  const description =
    "Sharpen your investing IQ with this interactive quiz covering stocks, bonds, diversification, and risk management. Learn how to build long-term wealth and make informed financial decisions.";
  const url = "https://www.financequizzes.com/learn-investing-quizzes";
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
        q: "Is investing risky for beginners?",
        a: "All investments involve some risk, but diversification and long-term planning help minimize potential losses.",
      },
      {
        q: "Do I need a lot of money to start investing?",
        a: "No! Many platforms let you start with small amounts, and fractional shares make it easier than ever to begin.",
      },
      {
        q: "Are these quizzes educational or financial advice?",
        a: "These quizzes are for educational purposes only and do not constitute financial advice.",
      },
    ],
  });
}

// Investment question bank
const questionBank = [
  {
    q: "What does 'diversification' mean in investing?",
    options: [
      "Putting all your money in one asset for maximum profit",
      "Spreading investments across different assets to reduce risk",
      "Investing only in technology companies",
      "Avoiding all risky assets",
    ],
    correct: "Spreading investments across different assets to reduce risk",
  },
  {
    q: "Which type of investment generally offers the highest long-term returns?",
    options: [
      "Savings account",
      "Government bonds",
      "Stocks",
      "Certificates of deposit",
    ],
    correct: "Stocks",
  },
  {
    q: "What is a bond?",
    options: [
      "A share of company ownership",
      "A loan made by an investor to a borrower (like a company or government)",
      "A digital asset traded on blockchain",
      "A high-risk derivative",
    ],
    correct:
      "A loan made by an investor to a borrower (like a company or government)",
  },
  {
    q: "Which term best describes investing a fixed amount regularly over time?",
    options: [
      "Short selling",
      "Day trading",
      "Dollar-cost averaging",
      "Swing trading",
    ],
    correct: "Dollar-cost averaging",
  },
  {
    q: "What is an ETF?",
    options: [
      "Electronic Treasury Fund",
      "Exchange-Traded Fund",
      "Equity Tracking Feature",
      "Earned Transfer Fee",
    ],
    correct: "Exchange-Traded Fund",
  },
  {
    q: "What does ROI stand for in investing?",
    options: [
      "Return on Investment",
      "Rate of Income",
      "Revenue of Interest",
      "Return of Inflation",
    ],
    correct: "Return on Investment",
  },
  {
    q: "What does diversification help reduce?",
    options: [
      "Investment risk",
      "Expected returns",
      "Taxes owed",
      "Trading volume",
    ],
    correct: "Investment risk",
  },
  {
    q: "Which of the following is considered a low-risk investment?",
    options: [
      "Government bonds",
      "Penny stocks",
      "Cryptocurrency",
      "Commodities futures",
    ],
    correct: "Government bonds",
  },
  {
    q: "What is a stock dividend?",
    options: [
      "A payment to shareholders from company profits",
      "A government tax refund",
      "Interest from savings accounts",
      "Bonus issued by brokers",
    ],
    correct: "A payment to shareholders from company profits",
  },
  {
    q: "What does 'bull market' mean?",
    options: [
      "A period of rising stock prices",
      "A market crash",
      "Flat trading activity",
      "Government-controlled prices",
    ],
    correct: "A period of rising stock prices",
  },
  {
    q: "What is a 'bear market'?",
    options: [
      "A period when prices decline by 20% or more from recent highs",
      "Rapid inflation period",
      "A flat economic phase",
      "Market bubble expansion",
    ],
    correct: "A period when prices decline by 20% or more from recent highs",
  },
  {
    q: "An index fund aims to:",
    options: [
      "Match the performance of a specific market index",
      "Beat the index through active trading",
      "Speculate on currency exchange",
      "Invest only in tech companies",
    ],
    correct: "Match the performance of a specific market index",
  },
  {
    q: "ETFs trade:",
    options: [
      "On stock exchanges like regular shares",
      "Only at end-of-day NAV price",
      "Once per quarter",
      "Through private brokers only",
    ],
    correct: "On stock exchanges like regular shares",
  },
  {
    q: "Mutual funds differ from ETFs because:",
    options: [
      "They are priced once per day after markets close",
      "They have no management fees",
      "They can be traded instantly during the day",
      "They never diversify",
    ],
    correct: "They are priced once per day after markets close",
  },
  {
    q: "What does P/E ratio measure?",
    options: [
      "Price divided by earnings per share",
      "Profit multiplied by equity",
      "Portfolio exposure",
      "Performance efficiency",
    ],
    correct: "Price divided by earnings per share",
  },
  {
    q: "A high P/E ratio often indicates:",
    options: [
      "High growth expectations",
      "Company undervaluation",
      "No investor interest",
      "Low earnings volatility",
    ],
    correct: "High growth expectations",
  },
  {
    q: "A dividend yield represents:",
    options: [
      "Annual dividend divided by share price",
      "Share price divided by dividend payout",
      "Net income ratio",
      "Corporate leverage",
    ],
    correct: "Annual dividend divided by share price",
  },
  {
    q: "Which investment typically provides inflation protection?",
    options: [
      "TIPS (Treasury Inflation-Protected Securities)",
      "Cash savings",
      "Corporate bonds only",
      "Fixed CDs",
    ],
    correct: "TIPS (Treasury Inflation-Protected Securities)",
  },
  {
    q: "What is market capitalization?",
    options: [
      "Total market value of a company's outstanding shares",
      "Company’s annual profit margin",
      "Government valuation metric",
      "Revenue growth percentage",
    ],
    correct: "Total market value of a company's outstanding shares",
  },
  {
    q: "Small-cap stocks are generally:",
    options: [
      "Higher risk, higher potential return",
      "Government guaranteed",
      "Large stable corporations",
      "Limited to fixed dividends",
    ],
    correct: "Higher risk, higher potential return",
  },
  {
    q: "What is a bond?",
    options: [
      "A loan from an investor to a borrower",
      "Ownership stake in a company",
      "A mutual fund unit",
      "A futures contract",
    ],
    correct: "A loan from an investor to a borrower",
  },
  {
    q: "Bond prices move:",
    options: [
      "Inversely to interest rates",
      "In the same direction as interest rates",
      "Randomly with inflation",
      "Only upward with GDP growth",
    ],
    correct: "Inversely to interest rates",
  },
  {
    q: "What is compound interest?",
    options: [
      "Interest earned on both the principal and accumulated interest",
      "Fixed simple interest only",
      "Tax-free dividend return",
      "Interest paid once at maturity",
    ],
    correct: "Interest earned on both the principal and accumulated interest",
  },
  {
    q: "Which account offers tax-deferred investment growth?",
    options: [
      "Traditional IRA",
      "Checking account",
      "Credit card",
      "Savings certificate",
    ],
    correct: "Traditional IRA",
  },
  {
    q: "A Roth IRA allows:",
    options: [
      "Tax-free withdrawals in retirement",
      "Tax-deductible contributions",
      "Unlimited annual deposits",
      "Employer-matching only",
    ],
    correct: "Tax-free withdrawals in retirement",
  },
  {
    q: "What is dollar-cost averaging?",
    options: [
      "Investing a fixed amount regularly regardless of market price",
      "Timing purchases during market highs",
      "Withdrawing profit monthly",
      "Selling during volatility",
    ],
    correct: "Investing a fixed amount regularly regardless of market price",
  },
  {
    q: "Rebalancing a portfolio means:",
    options: [
      "Adjusting asset weights to maintain target allocation",
      "Withdrawing all profits yearly",
      "Switching banks",
      "Liquidating all holdings",
    ],
    correct: "Adjusting asset weights to maintain target allocation",
  },
  {
    q: "Which asset class is typically most volatile?",
    options: ["Stocks", "Bonds", "Cash", "Certificates of deposit"],
    correct: "Stocks",
  },
  {
    q: "What does beta measure in finance?",
    options: [
      "A stock's volatility relative to the overall market",
      "Bond maturity length",
      "Dividend stability",
      "Tax efficiency",
    ],
    correct: "A stock's volatility relative to the overall market",
  },
  {
    q: "Which index tracks 500 major U.S. companies?",
    options: [
      "S&P 500",
      "NASDAQ 100",
      "Dow Jones Industrial Average",
      "Russell 2000",
    ],
    correct: "S&P 500",
  },
  {
    q: "Which index is tech-focused?",
    options: ["NASDAQ", "Russell 2000", "FTSE 100", "Nikkei 225"],
    correct: "NASDAQ",
  },
  {
    q: "The Dow Jones Industrial Average contains:",
    options: [
      "30 large U.S. blue-chip companies",
      "500 small-caps",
      "Only financial firms",
      "Government bonds",
    ],
    correct: "30 large U.S. blue-chip companies",
  },
  {
    q: "What is an IPO?",
    options: [
      "Initial Public Offering",
      "Institutional Purchase Order",
      "International Portfolio Option",
      "Internal Profit Objective",
    ],
    correct: "Initial Public Offering",
  },
  {
    q: "Liquidity refers to:",
    options: [
      "How quickly an asset can be converted into cash",
      "The profitability of a company",
      "Government intervention level",
      "Leverage ratio",
    ],
    correct: "How quickly an asset can be converted into cash",
  },
  {
    q: "The Rule of 72 estimates:",
    options: [
      "Years to double money at a given interest rate",
      "Inflation rate annually",
      "Market return volatility",
      "Tax bracket threshold",
    ],
    correct: "Years to double money at a given interest rate",
  },
  {
    q: "What is market volatility?",
    options: [
      "Degree of variation in trading prices over time",
      "Long-term price stability",
      "Fixed government yield",
      "Exchange rate control",
    ],
    correct: "Degree of variation in trading prices over time",
  },
  {
    q: "Asset allocation determines:",
    options: [
      "Most of an investor’s long-term portfolio performance",
      "Only tax efficiency",
      "Company dividend rates",
      "Stock split frequency",
    ],
    correct: "Most of an investor’s long-term portfolio performance",
  },
  {
    q: "What is leverage in investing?",
    options: [
      "Using borrowed funds to increase potential returns",
      "Holding only cash assets",
      "Reducing portfolio risk",
      "Diversifying across currencies",
    ],
    correct: "Using borrowed funds to increase potential returns",
  },
  {
    q: "Short selling means:",
    options: [
      "Selling borrowed shares hoping to buy back cheaper later",
      "Selling long-term bonds",
      "Selling personal assets",
      "Issuing dividends early",
    ],
    correct: "Selling borrowed shares hoping to buy back cheaper later",
  },
  {
    q: "Which investment carries the highest potential reward and risk?",
    options: ["Stocks", "Bonds", "Real estate", "Cash equivalents"],
    correct: "Stocks",
  },
  {
    q: "An ETF’s expense ratio represents:",
    options: [
      "Annual fund operating costs as a percentage of assets",
      "Stock price change rate",
      "Trading volume per day",
      "Dividend payout ratio",
    ],
    correct: "Annual fund operating costs as a percentage of assets",
  },
  {
    q: "What is a blue-chip stock?",
    options: [
      "Share in a large, financially stable company with consistent performance",
      "Small startup stock",
      "High-risk penny stock",
      "Foreign exchange share",
    ],
    correct:
      "Share in a large, financially stable company with consistent performance",
  },
  {
    q: "What is a stock split?",
    options: [
      "Division of existing shares into more shares without changing total value",
      "Merging two firms’ stocks",
      "Paying extra dividends",
      "Reducing total shares and price proportionally",
    ],
    correct:
      "Division of existing shares into more shares without changing total value",
  },
  {
    q: "Which factor most influences bond prices?",
    options: [
      "Interest rate changes",
      "Corporate tax rate",
      "Dividend history",
      "Stock market volume",
    ],
    correct: "Interest rate changes",
  },
  {
    q: "A junk bond is:",
    options: [
      "High-yield but high-risk corporate bond",
      "Government-backed security",
      "Savings certificate",
      "Municipal tax-free bond",
    ],
    correct: "High-yield but high-risk corporate bond",
  },
  {
    q: "What are derivatives?",
    options: [
      "Financial contracts whose value is based on underlying assets",
      "Corporate earnings reports",
      "Currency exchange offices",
      "Tax deductions",
    ],
    correct: "Financial contracts whose value is based on underlying assets",
  },
  {
    q: "Options contracts give:",
    options: [
      "Right but not obligation to buy or sell an asset at a fixed price",
      "Obligation to purchase stocks yearly",
      "Interest-only earnings",
      "Guaranteed returns",
    ],
    correct:
      "Right but not obligation to buy or sell an asset at a fixed price",
  },
  {
    q: "A call option benefits when:",
    options: [
      "Stock price rises above strike price",
      "Stock price falls sharply",
      "Volatility decreases",
      "Dividends stop",
    ],
    correct: "Stock price rises above strike price",
  },
  {
    q: "A put option increases in value when:",
    options: [
      "Underlying stock price falls",
      "Interest rates rise",
      "Dividends increase",
      "Inflation stabilizes",
    ],
    correct: "Underlying stock price falls",
  },
  {
    q: "Hedging is used to:",
    options: [
      "Protect investments against potential losses",
      "Increase speculative exposure",
      "Avoid taxes",
      "Leverage profits only",
    ],
    correct: "Protect investments against potential losses",
  },
  {
    q: "What is an emerging market?",
    options: [
      "Developing economy with growing industrialization and markets",
      "Fully developed country",
      "Declining economy",
      "Currency union only",
    ],
    correct: "Developing economy with growing industrialization and markets",
  },
  {
    q: "Real estate investment trusts (REITs) allow investors to:",
    options: [
      "Invest in property markets without owning buildings directly",
      "Avoid paying income tax",
      "Hold physical gold",
      "Invest in art and collectibles",
    ],
    correct: "Invest in property markets without owning buildings directly",
  },
  {
    q: "Cryptocurrency investing involves:",
    options: [
      "Digital assets using blockchain technology",
      "Physical gold trading",
      "Fixed government-issued savings bonds",
      "Traditional mutual funds",
    ],
    correct: "Digital assets using blockchain technology",
  },
  {
    q: "Which is the most famous cryptocurrency by market value?",
    options: ["Bitcoin", "Ethereum", "Dogecoin", "Litecoin"],
    correct: "Bitcoin",
  },
  {
    q: "Blockchain provides:",
    options: [
      "Secure, decentralized record of transactions",
      "Central bank control",
      "Guaranteed profits",
      "Credit scoring",
    ],
    correct: "Secure, decentralized record of transactions",
  },
  {
    q: "What is ESG investing?",
    options: [
      "Environmental, Social, and Governance-focused investing",
      "Earnings, Sales, Growth model",
      "European Stock Grouping",
      "Economic Sustainability Grant",
    ],
    correct: "Environmental, Social, and Governance-focused investing",
  },
  {
    q: "What is risk tolerance?",
    options: [
      "An investor’s comfort level with potential losses",
      "Guaranteed return limit",
      "Market timing strategy",
      "Tax efficiency level",
    ],
    correct: "An investor’s comfort level with potential losses",
  },
  {
    q: "Behavioral finance studies:",
    options: [
      "How emotions influence investment decisions",
      "Government trade regulation",
      "Interest-rate policy",
      "Corporate accounting rules",
    ],
    correct: "How emotions influence investment decisions",
  },
  {
    q: "A diversified portfolio should include:",
    options: [
      "Different asset classes and sectors",
      "Only tech stocks",
      "Local bonds only",
      "Single-company holdings",
    ],
    correct: "Different asset classes and sectors",
  },
  {
    q: "What does liquidity risk mean for investors?",
    options: [
      "Difficulty selling an asset quickly without affecting its price",
      "Total loss of capital",
      "Tax penalties",
      "Interest-rate fluctuation",
    ],
    correct: "Difficulty selling an asset quickly without affecting its price",
  },
  {
    q: "What is market capitalization weight in an index fund?",
    options: [
      "Stock weights proportional to their total market value",
      "Equal shares for all companies",
      "Random weighting each quarter",
      "Government-set ratio",
    ],
    correct: "Stock weights proportional to their total market value",
  },
  {
    q: "What’s an actively managed fund?",
    options: [
      "Portfolio where managers pick securities to outperform the market",
      "Fund that mirrors a benchmark index",
      "Automated robo-advisor fund",
      "Bond-only investment pool",
    ],
    correct:
      "Portfolio where managers pick securities to outperform the market",
  },
  {
    q: "What’s the main advantage of passive investing?",
    options: [
      "Lower fees and consistent market-matching performance",
      "Guaranteed higher returns",
      "Government protection",
      "Zero volatility",
    ],
    correct: "Lower fees and consistent market-matching performance",
  },
  {
    q: "Inflation erodes:",
    options: [
      "Purchasing power of money",
      "Interest rates only",
      "Corporate profits",
      "Dividend yields",
    ],
    correct: "Purchasing power of money",
  },
  {
    q: "What is capital gains tax?",
    options: [
      "Tax on profit from selling an investment",
      "Tax on salary",
      "Tax-free income",
      "Corporate excise duty",
    ],
    correct: "Tax on profit from selling an investment",
  },
  {
    q: "Day trading refers to:",
    options: [
      "Buying and selling securities within the same day",
      "Holding long-term investments",
      "Overnight positions only",
      "Buying IPOs exclusively",
    ],
    correct: "Buying and selling securities within the same day",
  },
  {
    q: "A margin account allows investors to:",
    options: [
      "Borrow funds from a broker to trade securities",
      "Earn dividends automatically",
      "Avoid losses completely",
      "Trade tax-free",
    ],
    correct: "Borrow funds from a broker to trade securities",
  },
  {
    q: "What is a stop-loss order?",
    options: [
      "Automatic sale of a security when price falls to a set level",
      "Purchase trigger at high price",
      "Guaranteed profit order",
      "Short-term trade freeze",
    ],
    correct: "Automatic sale of a security when price falls to a set level",
  },
  {
    q: "What is portfolio diversification across geography?",
    options: [
      "Investing in multiple countries to spread regional risk",
      "Buying only domestic bonds",
      "Avoiding currency exchange",
      "Selling foreign stocks quickly",
    ],
    correct: "Investing in multiple countries to spread regional risk",
  },
  {
    q: "Which investment is least liquid?",
    options: ["Real estate", "Stocks", "ETFs", "Savings account"],
    correct: "Real estate",
  },
  {
    q: "Annuities provide:",
    options: [
      "Regular income payments, often during retirement",
      "Tax-free lump sums",
      "Immediate stock ownership",
      "Government bond protection only",
    ],
    correct: "Regular income payments, often during retirement",
  },
  {
    q: "What is a bond’s yield?",
    options: [
      "Rate of interest paid by the issuer",
      "Rate of return on the bond",
      "Dividend yield",
      "Face value of the bond",
    ],
    correct: "Rate of interest paid by the issuer",
  },
  {
    q: "What is a bond’s yield to maturity?",
    options: [
      "Rate of interest paid by the issuer",
      "Rate of return on the bond",
      "Dividend yield",
      "Face value of the bond",
    ],
    correct: "Rate of return on the bond",
  },
  {
    q: "What is compounding frequency’s effect on investment growth?",
    options: [
      "The more frequently interest is compounded, the faster the growth",
      "It has no impact on total returns",
      "Less frequent compounding yields higher returns",
      "It only affects simple interest accounts",
    ],
    correct:
      "The more frequently interest is compounded, the faster the growth",
  },
  {
    q: "What’s the main advantage of long-term investing?",
    options: [
      "Reduced impact of short-term volatility and compounding growth",
      "Guaranteed annual returns",
      "Avoiding inflation completely",
      "Eliminating taxes on profits",
    ],
    correct: "Reduced impact of short-term volatility and compounding growth",
  },
  {
    q: "Which of these assets typically provides diversification against stock market risk?",
    options: [
      "Government bonds",
      "Tech stocks",
      "Index ETFs",
      "Corporate equities",
    ],
    correct: "Government bonds",
  },
  {
    q: "What does 'buy and hold' investing emphasize?",
    options: [
      "Long-term ownership regardless of market fluctuations",
      "Frequent buying and selling",
      "Market timing based on predictions",
      "Daily trading volume",
    ],
    correct: "Long-term ownership regardless of market fluctuations",
  },
  {
    q: "What is a limit order?",
    options: [
      "An order to buy or sell at a specified price or better",
      "An immediate execution at market price",
      "A futures contract order",
      "An option premium trigger",
    ],
    correct: "An order to buy or sell at a specified price or better",
  },
  {
    q: "What is a market order?",
    options: [
      "An order executed immediately at the current market price",
      "A delayed order for future settlement",
      "A short position order",
      "A fixed-interest bond purchase",
    ],
    correct: "An order executed immediately at the current market price",
  },
  {
    q: "Which is NOT an example of an alternative investment?",
    options: ["Government bond", "Hedge fund", "Private equity", "Commodities"],
    correct: "Government bond",
  },
  {
    q: "What is re-investment risk?",
    options: [
      "The risk that future returns will be lower when reinvesting proceeds",
      "The chance of losing your initial investment",
      "Liquidity risk from long lock-up periods",
      "Regulatory restrictions on investing",
    ],
    correct:
      "The risk that future returns will be lower when reinvesting proceeds",
  },
  {
    q: "Which investment type is backed by tangible assets like oil, metals, or crops?",
    options: [
      "Commodities",
      "Derivatives",
      "Municipal bonds",
      "Money market funds",
    ],
    correct: "Commodities",
  },
  {
    q: "What’s the main goal of asset allocation?",
    options: [
      "Balance risk and return according to investor objectives",
      "Maximize taxes owed",
      "Focus only on one asset class",
      "Avoid long-term gains",
    ],
    correct: "Balance risk and return according to investor objectives",
  },
  {
    q: "What is correlation in investing?",
    options: [
      "The relationship between the movements of two assets",
      "Company debt ratio",
      "Return percentage per share",
      "Fund management fees",
    ],
    correct: "The relationship between the movements of two assets",
  },
  {
    q: "If two investments have a correlation of +1, it means:",
    options: [
      "They move in exactly the same direction",
      "They move in opposite directions",
      "They have no relationship",
      "They are negatively correlated",
    ],
    correct: "They move in exactly the same direction",
  },
  {
    q: "A negatively correlated asset pair can help:",
    options: [
      "Reduce overall portfolio volatility",
      "Increase single-stock risk",
      "Limit diversification",
      "Eliminate all losses",
    ],
    correct: "Reduce overall portfolio volatility",
  },
  {
    q: "Which investment provides ownership in a company?",
    options: [
      "Common stock",
      "Bond",
      "Certificate of deposit",
      "Treasury bill",
    ],
    correct: "Common stock",
  },
  {
    q: "Which investment represents lending money to a company or government?",
    options: ["Bond", "Stock", "ETF", "REIT"],
    correct: "Bond",
  },
  {
    q: "What does NAV stand for in mutual funds?",
    options: [
      "Net Asset Value",
      "New Annual Value",
      "Nominal Account Volume",
      "National Asset Valuation",
    ],
    correct: "Net Asset Value",
  },
  {
    q: "What does 'capital appreciation' refer to?",
    options: [
      "An increase in an asset’s market value over time",
      "Dividend income earned annually",
      "Reduction in portfolio risk",
      "Return from bond interest only",
    ],
    correct: "An increase in an asset’s market value over time",
  },
  {
    q: "What’s the main purpose of a 401(k) plan?",
    options: [
      "Tax-advantaged retirement savings",
      "Short-term emergency fund",
      "Government bond purchase program",
      "Education savings only",
    ],
    correct: "Tax-advantaged retirement savings",
  },
  {
    q: "What’s the difference between growth and value investing?",
    options: [
      "Growth focuses on future potential, value on undervalued fundamentals",
      "Growth focuses on dividends, value avoids them",
      "Value requires daily trading",
      "Growth is government-regulated",
    ],
    correct:
      "Growth focuses on future potential, value on undervalued fundamentals",
  },
  {
    q: "What’s the 'efficient market hypothesis' (EMH)?",
    options: [
      "Theory that stock prices reflect all available information",
      "Idea that markets are always inefficient",
      "A short-term trading algorithm",
      "A risk management model",
    ],
    correct: "Theory that stock prices reflect all available information",
  },
  {
    q: "What is systematic risk?",
    options: [
      "Market-wide risk that cannot be diversified away",
      "Risk specific to one company",
      "Insider trading risk",
      "Tax penalty exposure",
    ],
    correct: "Market-wide risk that cannot be diversified away",
  },
  {
    q: "Unsystematic risk can be reduced through:",
    options: [
      "Diversification",
      "Short selling",
      "Market timing",
      "Tax shelters",
    ],
    correct: "Diversification",
  },
  {
    q: "What’s a margin call?",
    options: [
      "Broker demand for more collateral due to losses",
      "Government trading restriction",
      "Dividend announcement",
      "Loan forgiveness",
    ],
    correct: "Broker demand for more collateral due to losses",
  },
  {
    q: "The Sharpe ratio measures:",
    options: [
      "Risk-adjusted return of a portfolio",
      "Bond maturity rate",
      "Inflation-adjusted yield",
      "Stock split ratio",
    ],
    correct: "Risk-adjusted return of a portfolio",
  },
  {
    q: "Alpha in investing represents:",
    options: [
      "Performance of a portfolio relative to a benchmark",
      "Inflation index",
      "Tax adjustment",
      "Total net assets",
    ],
    correct: "Performance of a portfolio relative to a benchmark",
  },
  {
    q: "What is portfolio beta?",
    options: [
      "Overall volatility of a portfolio compared to the market",
      "Company credit score",
      "Interest rate sensitivity",
      "Tax efficiency ratio",
    ],
    correct: "Overall volatility of a portfolio compared to the market",
  },
  {
    q: "Which metric measures an investment’s downside risk?",
    options: ["Standard deviation", "Drawdown", "Alpha", "Volume"],
    correct: "Drawdown",
  },
  {
    q: "A 'liquidity trap' occurs when:",
    options: [
      "Interest rates are low but people hoard cash instead of investing",
      "Markets crash suddenly",
      "Inflation spikes rapidly",
      "Credit freezes due to regulations",
    ],
    correct:
      "Interest rates are low but people hoard cash instead of investing",
  },
  {
    q: "What does an inverted yield curve often signal?",
    options: [
      "Upcoming economic recession",
      "Rising inflation ahead",
      "Strong GDP growth",
      "Stable bond market",
    ],
    correct: "Upcoming economic recession",
  },
  {
    q: "What is dollar liquidity in global markets?",
    options: [
      "Availability of U.S. dollars for trade and finance",
      "Interest rates charged by local banks",
      "Currency exchange restrictions",
      "Domestic inflation rate",
    ],
    correct: "Availability of U.S. dollars for trade and finance",
  },
  {
    q: "Which is an example of a defensive stock?",
    options: [
      "Utility company",
      "Cryptocurrency exchange",
      "Luxury retail brand",
      "Tech startup",
    ],
    correct: "Utility company",
  },
  {
    q: "What’s the opposite of a defensive stock?",
    options: ["Cyclical stock", "Bond", "Index ETF", "REIT"],
    correct: "Cyclical stock",
  },
  {
    q: "Cyclical stocks tend to perform best during:",
    options: [
      "Economic expansions",
      "Recessions",
      "Interest-rate hikes",
      "Currency crises",
    ],
    correct: "Economic expansions",
  },
  {
    q: "What are penny stocks?",
    options: [
      "Low-priced, speculative shares with high volatility",
      "Stable blue-chip investments",
      "Government-backed equities",
      "Bonds under $1 face value",
    ],
    correct: "Low-priced, speculative shares with high volatility",
  },
  {
    q: "A stock buyback occurs when:",
    options: [
      "A company repurchases its own shares from the market",
      "Investors pool funds to buy private stock",
      "Dividends are reinvested automatically",
      "Shares are split 2-for-1",
    ],
    correct: "A company repurchases its own shares from the market",
  },
  {
    q: "An ADR (American Depositary Receipt) allows:",
    options: [
      "U.S. investors to buy shares of foreign companies",
      "Foreigners to trade U.S. bonds only",
      "Access to private equity funds",
      "Tax-free income from abroad",
    ],
    correct: "U.S. investors to buy shares of foreign companies",
  },
  {
    q: "What does insider trading involve?",
    options: [
      "Buying or selling securities using non-public information",
      "Retail day trading activity",
      "ETF arbitrage",
      "Technical chart reading",
    ],
    correct: "Buying or selling securities using non-public information",
  },
  {
    q: "What’s the purpose of technical analysis?",
    options: [
      "Predict price trends based on historical market data and charts",
      "Assess a company’s intrinsic value",
      "File tax documents",
      "Track dividend history",
    ],
    correct: "Predict price trends based on historical market data and charts",
  },
  {
    q: "Fundamental analysis focuses on:",
    options: [
      "Company financials and economic indicators",
      "Past stock patterns only",
      "Media sentiment",
      "Regulatory filings exclusively",
    ],
    correct: "Company financials and economic indicators",
  },
  {
    q: "What is 'market sentiment'?",
    options: [
      "Overall attitude of investors toward a market or asset",
      "Company cash flow statement",
      "Inflation projection model",
      "Stock split policy",
    ],
    correct: "Overall attitude of investors toward a market or asset",
  },
  {
    q: "What is quantitative investing?",
    options: [
      "Using mathematical models and algorithms for investment decisions",
      "Manual chart trading",
      "Government bond selection",
      "Value investing only",
    ],
    correct:
      "Using mathematical models and algorithms for investment decisions",
  },
  {
    q: "What is a hedge fund?",
    options: [
      "Private pooled investment using diverse and complex strategies",
      "Mutual fund for small investors",
      "Public pension fund",
      "Government savings account",
    ],
    correct: "Private pooled investment using diverse and complex strategies",
  },
  {
    q: "What is private equity?",
    options: [
      "Investing in non-public companies for growth or buyouts",
      "Government-issued shares",
      "Retail savings bonds",
      "Corporate dividends only",
    ],
    correct: "Investing in non-public companies for growth or buyouts",
  },
  {
    q: "Which global index tracks emerging market performance?",
    options: [
      "MSCI Emerging Markets Index",
      "Dow Jones Global 30",
      "S&P SmallCap 600",
      "FTSE 100",
    ],
    correct: "MSCI Emerging Markets Index",
  },
  {
    q: "What is quantitative easing (QE)?",
    options: [
      "Central bank policy of purchasing assets to increase liquidity",
      "Raising interest rates to slow inflation",
      "Corporate dividend payment",
      "Government austerity measure",
    ],
    correct: "Central bank policy of purchasing assets to increase liquidity",
  },
  {
    q: "What is an exchange rate?",
    options: [
      "Value of one currency compared to another",
      "Inflation-adjusted GDP rate",
      "Corporate interest rate",
      "Dividend yield percentage",
    ],
    correct: "Value of one currency compared to another",
  },
  {
    q: "What is foreign direct investment (FDI)?",
    options: [
      "Investment made by a company or individual in another country’s business",
      "Domestic stock purchase",
      "Bond reinvestment",
      "Local property acquisition only",
    ],
    correct:
      "Investment made by a company or individual in another country’s business",
  },
  {
    q: "What are futures contracts used for?",
    options: [
      "Lock in prices for commodities or assets at a future date",
      "Tax-free income generation",
      "Short-term cash storage",
      "Charitable investing",
    ],
    correct: "Lock in prices for commodities or assets at a future date",
  },
  {
    q: "What’s the difference between futures and options?",
    options: [
      "Futures are obligations, options are rights without obligation",
      "Options are mandatory trades",
      "Futures cannot expire",
      "Options require full upfront payment",
    ],
    correct: "Futures are obligations, options are rights without obligation",
  },
  {
    q: "What’s the purpose of an investment prospectus?",
    options: [
      "Provide detailed information about a fund or security before investing",
      "Track stock movements live",
      "Calculate tax credits",
      "Register company trademarks",
    ],
    correct:
      "Provide detailed information about a fund or security before investing",
  },
  {
    q: "What is the time value of money?",
    options: [
      "Money today is worth more than the same amount in the future due to earning potential",
      "Future money is always more valuable",
      "Interest has no effect on value",
      "It applies only to real estate",
    ],
    correct:
      "Money today is worth more than the same amount in the future due to earning potential",
  },
  {
    q: "Which type of investment fund is traded directly on an exchange like a stock?",
    options: ["ETF", "Mutual fund", "Pension fund", "REIT"],
    correct: "ETF",
  },
  {
    q: "What’s the difference between nominal and real return?",
    options: [
      "Real return accounts for inflation, nominal does not",
      "Nominal return is after taxes",
      "Real return is pre-interest rate",
      "They are identical metrics",
    ],
    correct: "Real return accounts for inflation, nominal does not",
  },
  {
    q: "What is diversification across asset classes?",
    options: [
      "Spreading investments among stocks, bonds, and alternatives",
      "Investing in one sector only",
      "Focusing solely on cash",
      "Buying foreign currency only",
    ],
    correct: "Spreading investments among stocks, bonds, and alternatives",
  },
  {
    q: "What’s a yield curve?",
    options: [
      "Graph showing bond yields across different maturities",
      "Stock performance over time",
      "Inflation growth chart",
      "Index performance summary",
    ],
    correct: "Graph showing bond yields across different maturities",
  },
  {
    q: "What is the key difference between active and passive management?",
    options: [
      "Active seeks to outperform the market; passive aims to match it",
      "Passive uses frequent trades; active does not",
      "Active always has lower fees",
      "Passive funds are illegal internationally",
    ],
    correct: "Active seeks to outperform the market; passive aims to match it",
  },
  {
    q: "What’s the goal of impact investing?",
    options: [
      "Generate social or environmental impact along with financial returns",
      "Maximize short-term profit only",
      "Speculate on cryptocurrency",
      "Avoid taxes entirely",
    ],
    correct:
      "Generate social or environmental impact along with financial returns",
  },
  {
    q: "What is asset reallocation?",
    options: [
      "Changing portfolio mix due to risk tolerance or market shifts",
      "Selling all investments yearly",
      "Switching from ETFs to crypto only",
      "Liquidating all assets in crisis",
    ],
    correct: "Changing portfolio mix due to risk tolerance or market shifts",
  },
  {
    q: "What is the purpose of a stop-limit order?",
    options: [
      "Combines stop-loss with limit to control execution price range",
      "Guarantees purchase at best price available",
      "Avoids taxes on capital gains",
      "Automatically reinvests dividends",
    ],
    correct: "Combines stop-loss with limit to control execution price range",
  },
  {
    q: "What’s the benefit of compounding dividends?",
    options: [
      "Reinvested dividends buy more shares to accelerate growth",
      "Avoids taxation on returns",
      "Eliminates risk",
      "Reduces portfolio size",
    ],
    correct: "Reinvested dividends buy more shares to accelerate growth",
  },
  {
    q: "What is the main risk of chasing performance?",
    options: [
      "Buying high after gains and suffering losses later",
      "Missing high returns",
      "Avoiding taxes unintentionally",
      "Guaranteed returns",
    ],
    correct: "Buying high after gains and suffering losses later",
  },
  {
    q: "Which investing approach focuses on recurring dividends?",
    options: [
      "Income investing",
      "Growth investing",
      "Momentum investing",
      "Speculative investing",
    ],
    correct: "Income investing",
  },
  {
    q: "What’s a target-date fund?",
    options: [
      "Fund that automatically adjusts risk level as investor nears retirement",
      "Fund targeting daily profits",
      "Crypto pool product",
      "Guaranteed government security",
    ],
    correct:
      "Fund that automatically adjusts risk level as investor nears retirement",
  },
  {
    q: "Which investment strategy focuses on undervalued companies with strong fundamentals?",
    options: [
      "Value investing",
      "Growth investing",
      "Momentum trading",
      "Scalping",
    ],
    correct: "Value investing",
  },
  {
    q: "Which index is often used as a global stock market benchmark?",
    options: ["MSCI World Index", "Dow Jones", "FTSE 250", "S&P SmallCap 600"],
    correct: "MSCI World Index",
  },
  {
    q: "A balanced fund typically includes:",
    options: [
      "Mix of stocks and bonds for moderate risk",
      "Only equities",
      "Cash equivalents",
      "Cryptocurrencies",
    ],
    correct: "Mix of stocks and bonds for moderate risk",
  },
  {
    q: "What is a SPAC?",
    options: [
      "Special Purpose Acquisition Company used to take private firms public",
      "Savings and Profit Allocation Corporation",
      "Stockholder Performance Association",
      "Security Price Adjustment Contract",
    ],
    correct:
      "Special Purpose Acquisition Company used to take private firms public",
  },
  {
    q: "Which investment metric evaluates income relative to price?",
    options: ["Dividend yield", "Alpha", "Sharpe ratio", "Leverage"],
    correct: "Dividend yield",
  },
  {
    q: "What’s a portfolio turnover ratio?",
    options: [
      "Measure of how frequently assets in a fund are bought and sold",
      "Tax rate on dividends",
      "Inflation adjustment",
      "Brokerage fee percentage",
    ],
    correct: "Measure of how frequently assets in a fund are bought and sold",
  },
  {
    q: "Which asset often serves as a hedge during inflation?",
    options: ["Gold", "Government bonds", "Cash", "Corporate debt"],
    correct: "Gold",
  },
  {
    q: "What’s the main goal of capital preservation?",
    options: [
      "Protect the original investment amount with minimal risk",
      "Achieve maximum growth regardless of volatility",
      "Double portfolio yearly",
      "Speculate on futures",
    ],
    correct: "Protect the original investment amount with minimal risk",
  },
  {
    q: "Which metric shows how efficiently a fund manager uses capital?",
    options: ["Alpha", "Expense ratio", "Sharpe ratio", "P/B ratio"],
    correct: "Alpha",
  },
  {
    q: "What is the major advantage of index investing?",
    options: [
      "Low cost and broad diversification",
      "Guaranteed profits",
      "High management turnover",
      "Speculative short-term gains",
    ],
    correct: "Low cost and broad diversification",
  },
  {
    q: "Which ratio compares a company’s stock price to its book value?",
    options: ["P/B ratio", "P/E ratio", "ROE", "ROI"],
    correct: "P/B ratio",
  },
  {
    q: "Which chart pattern suggests a potential upward breakout?",
    options: [
      "Ascending triangle",
      "Descending channel",
      "Double bottom failure",
      "Falling wedge reversal",
    ],
    correct: "Ascending triangle",
  },
  {
    q: "What’s a moving average used for?",
    options: [
      "Smooth short-term price fluctuations to identify trends",
      "Calculate inflation rates",
      "Determine dividend payout ratio",
      "Track GDP performance",
    ],
    correct: "Smooth short-term price fluctuations to identify trends",
  },
  {
    q: "What is the RSI indicator used to detect?",
    options: [
      "Overbought or oversold conditions in a stock",
      "Dividend frequency",
      "Interest-rate spreads",
      "Bond duration risk",
    ],
    correct: "Overbought or oversold conditions in a stock",
  },
  {
    q: "What’s the benefit of global diversification?",
    options: [
      "Reduces impact of domestic economic downturns",
      "Eliminates all risk",
      "Guarantees higher returns",
      "Prevents currency loss",
    ],
    correct: "Reduces impact of domestic economic downturns",
  },
  {
    q: "Which instrument represents fractional ownership in a company?",
    options: ["Stock", "Bond", "Option", "Futures"],
    correct: "Stock",
  },
  {
    q: "What is the main purpose of portfolio review?",
    options: [
      "Ensure investments still align with financial goals and risk tolerance",
      "Track only past performance",
      "Avoid diversification",
      "Reinvest taxes",
    ],
    correct:
      "Ensure investments still align with financial goals and risk tolerance",
  },
  {
    q: "What does market capitalization measure?",
    options: [
      "Total market value of a company’s outstanding shares",
      "Quarterly dividend growth",
      "Company debt structure",
      "Number of employees",
    ],
    correct: "Total market value of a company’s outstanding shares",
  },
  {
    q: "What does EPS stand for?",
    options: [
      "Earnings Per Share",
      "Estimated Portfolio Share",
      "Equity Price Standard",
      "Exchange Price Summary",
    ],
    correct: "Earnings Per Share",
  },
  {
    q: "What’s the main goal of responsible investing?",
    options: [
      "Combine ethical principles with financial performance",
      "Maximize speculative profit",
      "Eliminate all volatility",
      "Avoid all taxes",
    ],
    correct: "Combine ethical principles with financial performance",
  },
  {
    q: "What is the bid-ask spread?",
    options: [
      "Difference between buying and selling prices in a market",
      "Trading volume average",
      "Dividend payout ratio",
      "Broker commission",
    ],
    correct: "Difference between buying and selling prices in a market",
  },
  {
    q: "Which market is where new securities are issued?",
    options: [
      "Primary market",
      "Secondary market",
      "Derivatives market",
      "Forex",
    ],
    correct: "Primary market",
  },
  {
    q: "Which market involves trading existing securities?",
    options: ["Secondary market", "Primary market", "Commodities", "Currency"],
    correct: "Secondary market",
  },
  {
    q: "Which type of investment strategy uses historical data to forecast trends?",
    options: [
      "Technical analysis",
      "Fundamental analysis",
      "Momentum growth",
      "Macro hedge",
    ],
    correct: "Technical analysis",
  },
  {
    q: "Which ratio measures a company’s profitability relative to shareholder equity?",
    options: ["Return on Equity (ROE)", "P/E", "Debt Ratio", "Current Ratio"],
    correct: "Return on Equity (ROE)",
  },
  {
    q: "What does the term 'arbitrage' refer to?",
    options: [
      "Profiting from price differences of identical assets across markets",
      "High-frequency insider trading",
      "Government-issued investment subsidy",
      "Dividend reinvestment plan",
    ],
    correct:
      "Profiting from price differences of identical assets across markets",
  },
  {
    q: "What’s the main role of a financial advisor?",
    options: [
      "Help investors plan, allocate, and manage financial goals",
      "Predict stock prices precisely",
      "Sell insurance only",
      "Control brokerage platforms",
    ],
    correct: "Help investors plan, allocate, and manage financial goals",
  },
  {
    q: "Which market is where new securities are issued?",
    options: [
      "Primary market",
      "Secondary market",
      "Derivatives market",
      "Forex",
    ],
    correct: "Primary market",
  },
  {
    q: "Which market involves trading existing securities?",
    options: ["Secondary market", "Primary market", "Commodities", "Currency"],
    correct: "Secondary market",
  },
];

export default function InvestingQuiz({}: Route.ComponentProps) {
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
    const saved = localStorage.getItem("investingQuizStats");
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
      localStorage.setItem("investingQuizStats", JSON.stringify(stats));
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

    // ✅ Preserve all stats fields (don’t overwrite)
    setStats((prev) => ({
      ...prev,
      todayAnswered: prev.todayAnswered + 1,
      todayCorrect: prev.todayCorrect + (isCorrect ? 1 : 0),
      lastDate: new Date().toISOString().slice(0, 10),
    }));

    const totalAnsweredThisRound = Object.keys(newAnswers).length;

    // ✅ Update streaks once 3 questions are answered
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
              Learn Investing Quizzes
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
        id="investing-article"
        className="mx-auto max-w-4xl px-6 py-20 text-center border-b border-slate-200"
      >
        <h1 className="text-4xl font-extrabold text-[#0B1B2B] mb-6">
          Investing 101: Building Wealth Through Smart Financial Choices
        </h1>

        <div className="mx-auto max-w-3xl text-left space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg">
            Investing is about putting your money to work so it grows over time.
            From stocks and bonds to ETFs and real estate, the key is
            understanding risk, diversification, and the power of compounding
            returns.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">
              Core Investing Principles
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-medium">Start early:</span> compounding
                works best when you give it time.
              </li>
              <li>
                <span className="font-medium">Diversify:</span> avoid putting
                all your money into one company or sector.
              </li>
              <li>
                <span className="font-medium">Stay consistent:</span> regular
                contributions build wealth steadily.
              </li>
              <li>
                <span className="font-medium">Manage risk:</span> balance safer
                assets with growth opportunities.
              </li>
            </ul>
          </div>

          <p>
            Investing isn’t about timing the market-it’s about spending time
            *in* the market. By understanding how assets behave and sticking to
            a disciplined plan, you can steadily grow your financial future.
          </p>

          {/* Citations */}
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
              Citations & References
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                Malkiel, B. G. (2021). *A Random Walk Down Wall Street.* W.W.
                Norton & Company.
              </li>
              <li>
                Graham, B. (2006). *The Intelligent Investor.* Harper Business.
              </li>
              <li>
                CFA Institute. (2023). *Principles of Investment Management.*
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ANSWERS */}
      <section id="quiz-answers" className="mx-auto max-w-5xl px-6 pt-16">
        <h3 className="text-3xl font-bold text-[#0B1B2B] mb-4 text-center">
          Investing Quiz Answers
        </h3>
        <p className="text-slate-700 text-center max-w-2xl mx-auto mb-10">
          Review all investing questions and answers to strengthen your
          understanding of long-term wealth building.
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
                name: "Learn Investing Quizzes",
                item: "https://www.financequizzes.com/learn-investing-quizzes",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
