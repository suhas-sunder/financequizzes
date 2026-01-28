export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const STOCK_MARKET_BASICS_QUIZ_INTENT = {
  topicLabel: "Stock Market Basics",
  roundSize: 10,
  formatLabel: "10-question challenge",
  focus:
    "Stock market structure and terminology: what stocks represent, how markets function, and how risk/return is described conceptually. No live data or trading behavior.",
} as const;

export const STOCK_MARKET_BASICS_QUIZ_CATEGORIES = [
  {
    key: "stocks",
    label: "What stocks represent",
    whatItCovers:
      "Ownership language, shares, equity, and how companies issue stock.",
  },
  {
    key: "markets",
    label: "How markets function",
    whatItCovers:
      "Exchanges, listings, orders (as concepts), and price discovery basics.",
  },
  {
    key: "participants",
    label: "Market participants and roles",
    whatItCovers:
      "Companies, investors, market makers, brokers, and the purpose of each role.",
  },
  {
    key: "risk_return",
    label: "Risk and return language",
    whatItCovers:
      "Volatility, diversification, expected return framing, and uncertainty concepts.",
  },
  {
    key: "terms",
    label: "Common stock market terminology",
    whatItCovers:
      "Index, market cap, dividend, IPO, and other definitional terms.",
  },
] as const;

export const STOCK_MARKET_BASICS_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Early recognition, with gaps in core market terms.",
  },
  {
    key: "4-5",
    label: "4–5 out of 10",
    meaning: "Some baseline familiarity, but inconsistent understanding of structure.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid grasp of most stock market basics and terminology.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning: "Strong recognition across structure, roles, and key terms.",
  },
  {
    key: "10",
    label: "10 out of 10",
    meaning: "Excellent conceptual clarity on how stock markets are described.",
  },
] as const;

export const STOCK_MARKET_BASICS_FAQS: FAQItem[] = [
  {
    q: "What does this stock market basics quiz test?",
    a: "It tests recognition and interpretation of stock market structure and terminology: what stocks represent, how exchanges and markets function conceptually, and common vocabulary used to describe markets.",
  },
  {
    q: "Does this quiz use real tickers, charts, or live market data?",
    a: "No. It avoids symbols, charts, and live data. Questions are definitional and structural rather than analytical.",
  },
  {
    q: "Is this quiz about trading strategies or predicting prices?",
    a: "No. It does not teach trading behavior or forecasting. It focuses on concepts and definitions.",
  },
  {
    q: "How many questions are in the quiz?",
    a: "Each run is 10 questions, pulled from a larger question bank so you can retake it for variety.",
  },
  {
    q: "How can I improve my score?",
    a: "Focus on definitions: what a term literally means, what role it describes, and how markets are structured. Reviewing basic market vocabulary helps.",
  },
];

export const STOCK_MARKET_BASICS_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "In the simplest terms, what does owning a share of stock represent?",
    options: [
      "A piece of ownership in a company",
      "A guarantee of future profit",
      "A loan to the government",
      "A fixed monthly payment",
    ],
    correct: "A piece of ownership in a company",
  },
  {
    q: "What is a stock exchange best described as?",
    options: [
      "A marketplace where shares can be bought and sold",
      "A company that guarantees stock prices",
      "A bank account for holding cash",
      "A tool for predicting the market",
    ],
    correct: "A marketplace where shares can be bought and sold",
  },
  {
    q: "What does “market cap” usually mean?",
    options: [
      "The total market value of a company’s shares",
      "The maximum price a stock can reach",
      "The amount of cash a company has",
      "The profit a company made last year",
    ],
    correct: "The total market value of a company’s shares",
  },
  {
    q: "What is an IPO?",
    options: [
      "When a company’s shares first become available to the public",
      "A guarantee that a stock will rise",
      "A type of dividend payment",
      "A rule that prevents losses",
    ],
    correct: "When a company’s shares first become available to the public",
  },
  {
    q: "What does a “dividend” refer to?",
    options: [
      "A distribution of company earnings to shareholders",
      "A fee charged every time you buy stock",
      "A guaranteed return rate",
      "A prediction about future prices",
    ],
    correct: "A distribution of company earnings to shareholders",
  },
  {
    q: "What is a stock “index” most accurately?",
    options: [
      "A grouping used to represent a section of the market",
      "A list of all bank accounts in an economy",
      "A guarantee that prices will increase",
      "A government-issued bond",
    ],
    correct: "A grouping used to represent a section of the market",
  },
  {
    q: "What does “price discovery” describe?",
    options: [
      "How buyers and sellers collectively determine prices",
      "How a company sets a fixed price forever",
      "How analysts predict next year’s returns",
      "How the government controls stock prices",
    ],
    correct: "How buyers and sellers collectively determine prices",
  },
  {
    q: "What is “volatility” in market language?",
    options: [
      "How much prices move up and down over time",
      "How many shares a company issues",
      "How much tax is owed on gains",
      "How often dividends are paid",
    ],
    correct: "How much prices move up and down over time",
  },
  {
    q: "What does “liquidity” generally mean in a market context?",
    options: [
      "How easily something can be bought or sold without big price changes",
      "How much a company earns in profit",
      "How safe an investment is",
      "How predictable a stock price is",
    ],
    correct: "How easily something can be bought or sold without big price changes",
  },
  {
    q: "What is the role of a “broker” in simple terms?",
    options: [
      "An intermediary that helps place buy or sell orders",
      "A person who sets stock prices daily",
      "A company that guarantees returns",
      "A regulator that enforces laws",
    ],
    correct: "An intermediary that helps place buy or sell orders",
  },
  {
    q: "What does “diversification” usually mean?",
    options: [
      "Spreading exposure across different holdings",
      "Buying only one strong company",
      "Predicting which stock will outperform",
      "Avoiding risk completely",
    ],
    correct: "Spreading exposure across different holdings",
  },
  {
    q: "A “market maker” is most accurately:",
    options: [
      "A participant that helps provide liquidity by quoting buy/sell prices",
      "A person who guarantees stock prices rise",
      "A company that issues dividends",
      "A regulator that approves IPOs",
    ],
    correct: "A participant that helps provide liquidity by quoting buy/sell prices",
  },
  {
    q: "What does “listing” mean for a company?",
    options: [
      "Being admitted to trade on an exchange under certain rules",
      "Publishing a guarantee of returns",
      "Paying dividends every quarter",
      "Setting a stock price permanently",
    ],
    correct: "Being admitted to trade on an exchange under certain rules",
  },
  {
    q: "In stock market language, “risk” is closest to:",
    options: [
      "Uncertainty about outcomes",
      "A guaranteed loss",
      "A fixed interest charge",
      "A predictable return",
    ],
    correct: "Uncertainty about outcomes",
  },
  {
    q: "What is “bid-ask spread” best described as?",
    options: [
      "The difference between a buyer’s bid and a seller’s ask price",
      "The profit a company earns each year",
      "A tax paid on dividends",
      "A rule for predicting prices",
    ],
    correct: "The difference between a buyer’s bid and a seller’s ask price",
  },
  {
    q: "What does “supply and demand” mean in market pricing?",
    options: [
      "Prices shift based on willingness to buy and sell",
      "Prices are set by one company",
      "Prices are always stable",
      "Prices can be predicted perfectly",
    ],
    correct: "Prices shift based on willingness to buy and sell",
  },
  {
    q: "What does “equity” commonly mean in a stock context?",
    options: [
      "Ownership interest in a company",
      "A loan repayment schedule",
      "A fixed monthly fee",
      "A government benefit",
    ],
    correct: "Ownership interest in a company",
  },
  {
    q: "What does “shareholder” mean?",
    options: [
      "A person or entity that owns shares",
      "A person who lends money to a bank",
      "A person who sets exchange rules",
      "A person who guarantees dividends",
    ],
    correct: "A person or entity that owns shares",
  },
  {
    q: "What does “expected return” mean conceptually?",
    options: [
      "A forward-looking average outcome, not a guarantee",
      "A promised profit every year",
      "A fixed dividend rate",
      "A rule that prevents losses",
    ],
    correct: "A forward-looking average outcome, not a guarantee",
  },
  {
    q: "What does “valuation” refer to in plain terms?",
    options: [
      "How the market prices a company or asset",
      "A method to predict tomorrow’s prices",
      "A guarantee of future earnings",
      "A tax category applied to dividends",
    ],
    correct: "How the market prices a company or asset",
  },
] as const;
