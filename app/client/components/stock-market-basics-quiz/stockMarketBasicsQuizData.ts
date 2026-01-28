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
    meaning:
      "Some baseline familiarity, but inconsistent understanding of structure.",
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
    q: "When people distinguish the “primary” from the “secondary” market, what is the key difference?",
    options: [
      "Primary is after-hours; secondary is daytime",
      "Primary is for options; secondary is for stocks",
      "Primary is new shares from a company; secondary is trading between investors",
      "Primary is cheaper; secondary is always more expensive",
    ],
    correct:
      "Primary is new shares from a company; secondary is trading between investors",
  },
  {
    q: "If a company issues new shares, which statement best captures the common meaning of “dilution”?",
    options: [
      "The share price cannot change for a period",
      "Existing owners can represent a smaller fraction of ownership",
      "All shareholders receive a cash payment automatically",
      "The company must move to a different exchange",
    ],
    correct: "Existing owners can represent a smaller fraction of ownership",
  },
  {
    q: "What is a stock exchange best described as?",
    options: [
      "A company that guarantees stock prices",
      "A tool for predicting the market",
      "A bank account for holding cash",
      "A marketplace where shares can be bought and sold",
    ],
    correct: "A marketplace where shares can be bought and sold",
  },
  {
    q: "A “stock split” most directly changes which of these, conceptually?",
    options: [
      "The company’s business model and revenues",
      "The number of shares per owner and the price per share",
      "The company’s legal name and exchange listing",
      "The company’s profits and cash flows overnight",
    ],
    correct: "The number of shares per owner and the price per share",
  },
  {
    q: "What does “market cap” usually mean?",
    options: [
      "The total market value of a company’s shares",
      "The amount of cash a company has",
      "The maximum price a stock can reach",
      "The profit a company made last year",
    ],
    correct: "The total market value of a company’s shares",
  },
  {
    q: "If a company “buys back” shares, what is the most direct conceptual description?",
    options: [
      "It borrows from shareholders and must repay interest",
      "It converts stock into bonds for all investors",
      "It moves to a private market immediately",
      "It reduces shares outstanding by repurchasing its stock",
    ],
    correct: "It reduces shares outstanding by repurchasing its stock",
  },
  {
    q: "What is an IPO?",
    options: [
      "A guarantee that a stock will rise",
      "A type of dividend payment",
      "When a company’s shares first become available to the public",
      "A rule that prevents losses",
    ],
    correct: "When a company’s shares first become available to the public",
  },
  {
    q: "What does a “dividend” refer to?",
    options: [
      "A fee charged every time you buy stock",
      "A guaranteed return rate",
      "A distribution of company earnings to shareholders",
      "A prediction about future prices",
    ],
    correct: "A distribution of company earnings to shareholders",
  },
  {
    q: "What is a stock “index” most accurately?",
    options: [
      "A list of all bank accounts in an economy",
      "A guarantee that prices will increase",
      "A government-issued bond",
      "A grouping used to represent a section of the market",
    ],
    correct: "A grouping used to represent a section of the market",
  },
  {
    q: "In market terms, what does “price discovery” describe?",
    options: [
      "How buyers and sellers collectively determine prices",
      "How analysts predict next year’s returns",
      "How the government controls stock prices",
      "How a company sets a fixed price forever",
    ],
    correct: "How buyers and sellers collectively determine prices",
  },
  {
    q: "What does a “limit order” most directly imply at a high level?",
    options: [
      "It executes only at a specified price or better",
      "It guarantees execution at any price",
      "It blocks the trade until the next day",
      "It sets the company’s valuation permanently",
    ],
    correct: "It executes only at a specified price or better",
  },
  {
    q: "Conceptually, what does a “market order” prioritize most?",
    options: [
      "A specific execution price",
      "A fixed dividend rate",
      "Immediate execution over exact price",
      "Long-term valuation over short-term price",
    ],
    correct: "Immediate execution over exact price",
  },
  {
    q: "What is the role of a “broker” in simple terms?",
    options: [
      "A regulator that enforces laws",
      "An intermediary that helps place buy or sell orders",
      "A person who sets stock prices daily",
      "A company that guarantees returns",
    ],
    correct: "An intermediary that helps place buy or sell orders",
  },
  {
    q: "A “market maker” is most accurately:",
    options: [
      "A participant that helps provide liquidity by quoting buy and sell prices",
      "A company that issues dividends to all investors",
      "A regulator that approves new exchange listings",
      "A person who guarantees stock prices rise",
    ],
    correct:
      "A participant that helps provide liquidity by quoting buy and sell prices",
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
    q: "When people say a stock’s “float” is smaller than shares outstanding, what are they usually pointing to?",
    options: [
      "Some shares are not freely tradable in the market",
      "The stock is always less volatile than peers",
      "The company has no debt on its balance sheet",
      "The stock trades only during after-hours sessions",
    ],
    correct: "Some shares are not freely tradable in the market",
  },
  {
    q: "If two orders match at the same time, what does “time priority” most closely mean conceptually?",
    options: [
      "Newer orders execute before older orders",
      "Orders execute alphabetically by broker name",
      "Orders execute based on which trader is larger",
      "Earlier orders at a price are filled before later orders",
    ],
    correct: "Earlier orders at a price are filled before later orders",
  },
  {
    q: "In a stock context, what does “equity” commonly mean?",
    options: [
      "A loan repayment schedule",
      "A fixed monthly fee",
      "Ownership interest in a company",
      "A government benefit",
    ],
    correct: "Ownership interest in a company",
  },
  {
    q: "In stock market language, “risk” is closest to:",
    options: [
      "A predictable return",
      "A fixed interest charge",
      "A guaranteed loss",
      "Uncertainty about outcomes",
    ],
    correct: "Uncertainty about outcomes",
  },
  {
    q: "What does “bid-ask spread” best describe?",
    options: [
      "The profit a company earns each year",
      "The difference between a buyer’s bid and a seller’s ask price",
      "A tax paid on dividends",
      "A rule for predicting prices",
    ],
    correct: "The difference between a buyer’s bid and a seller’s ask price",
  },
  {
    q: "In market pricing, what does “supply and demand” most directly mean?",
    options: [
      "Prices shift based on willingness to buy and sell",
      "Prices are always stable once discovered",
      "Prices are set by one company each day",
      "Prices can be predicted perfectly with enough data",
    ],
    correct: "Prices shift based on willingness to buy and sell",
  },
  {
    q: "If a stock is described as “more liquid,” what is the most direct implication?",
    options: [
      "It must have a higher expected return",
      "It can be bought or sold more easily near the current price",
      "It is guaranteed to be less volatile each day",
      "It will always pay a dividend on schedule",
    ],
    correct: "It can be bought or sold more easily near the current price",
  },
  {
    q: "What does “diversification” usually mean in stock investing language?",
    options: [
      "Predicting which stock will outperform",
      "Avoiding risk completely",
      "Spreading exposure across different holdings",
      "Buying only one strong company",
    ],
    correct: "Spreading exposure across different holdings",
  },
  {
    q: "What does “systematic risk” most closely refer to?",
    options: [
      "Risk tied to one company’s unique situation",
      "Risk from using a specific broker platform",
      "Risk that affects many assets at the same time",
      "Risk created only by dividend payments",
    ],
    correct: "Risk that affects many assets at the same time",
  },
  {
    q: "What does “idiosyncratic risk” most directly describe?",
    options: [
      "Risk that affects many markets at once",
      "Risk specific to one company or situation",
      "Risk created by inflation in the economy",
      "Risk caused only by interest rate changes",
    ],
    correct: "Risk specific to one company or situation",
  },
  {
    q: "What does “correlation” describe in market language?",
    options: [
      "A promise that two assets move together",
      "How fast a company grows its revenues",
      "A measure of the tax paid on returns",
      "How two things tend to move relative to each other",
    ],
    correct: "How two things tend to move relative to each other",
  },
  {
    q: "If an index is “market-cap weighted,” what does that imply conceptually?",
    options: [
      "Every company has equal impact on the index",
      "The newest companies always count the most",
      "Larger companies have more influence on index movements",
      "Companies with dividends count more than others",
    ],
    correct: "Larger companies have more influence on index movements",
  },
  {
    q: "What does “rebalancing” most directly mean for an index or portfolio conceptually?",
    options: [
      "Changing weights back toward a defined target mix",
      "Locking all holdings so nothing can change",
      "Guaranteeing a positive return for the next year",
      "Replacing stocks with cash whenever prices fall",
    ],
    correct: "Changing weights back toward a defined target mix",
  },
  {
    q: "What does “volatility” in market language most directly describe?",
    options: [
      "How many shares a company issues each year",
      "How often dividends are paid to investors",
      "How much prices move up and down over time",
      "How much tax is owed on gains",
    ],
    correct: "How much prices move up and down over time",
  },
  {
    q: "What does “expected return” mean conceptually in stock discussions?",
    options: [
      "A promised profit every year",
      "A fixed dividend rate set by exchanges",
      "A rule that prevents losses in down markets",
      "A forward-looking average outcome, not a guarantee",
    ],
    correct: "A forward-looking average outcome, not a guarantee",
  },
  {
    q: "In plain terms, what does “valuation” refer to in a stock market context?",
    options: [
      "How the market prices a company or asset",
      "A method to predict tomorrow’s prices",
      "A guarantee of future earnings",
      "A tax category applied to dividends",
    ],
    correct: "How the market prices a company or asset",
  },
  {
    q: "If a trade is “executed” but not yet “settled,” what is the cleanest distinction?",
    options: [
      "The price is unknown, but the quantity is known",
      "The agreement happened, but the final exchange is pending",
      "The company changed its share count, but not price",
      "The dividend was declared, but not paid",
    ],
    correct: "The agreement happened, but the final exchange is pending",
  },
  {
    q: "When people say “after-hours trading can look different,” what is the best conceptual reason?",
    options: [
      "There is no price discovery outside normal hours",
      "Orders are illegal outside normal hours",
      "Financial statements cannot be released outside normal hours",
      "Liquidity can be lower so prices can move more on less volume",
    ],
    correct: "Liquidity can be lower so prices can move more on less volume",
  },
  {
    q: "What does “trading halt” most directly imply conceptually?",
    options: [
      "Trading pauses temporarily under certain conditions",
      "The company permanently cancels all its shares",
      "The market guarantees the stock will recover",
      "Investors receive a dividend during the pause",
    ],
    correct: "Trading pauses temporarily under certain conditions",
  },
  {
    q: "What does “float-adjusted market cap” most directly attempt to reflect?",
    options: [
      "The value of shares more available for public trading",
      "The company’s profits adjusted for inflation",
      "The maximum price a share can reach",
      "The value of the company’s physical assets only",
    ],
    correct: "The value of shares more available for public trading",
  },
  {
    q: "What does “order book” most closely mean in market structure terms?",
    options: [
      "A list of outstanding buy and sell interest at prices",
      "A list of company profits by quarter",
      "A list of government rules for exchanges",
      "A list of index constituents by sector",
    ],
    correct: "A list of outstanding buy and sell interest at prices",
  },
  {
    q: "If a stock’s “beta” is discussed conceptually, what is it trying to summarize?",
    options: [
      "How much the stock tends to move with the broader market",
      "How much the company pays in dividends each year",
      "How many shares the company issues each month",
      "How quickly a trade settles after execution",
    ],
    correct: "How much the stock tends to move with the broader market",
  },
  {
    q: "Which statement best captures why “good news” can still coincide with a price drop?",
    options: [
      "The news may already be priced in by expectations",
      "Good news always lowers long-term valuations",
      "Price drops only happen from illegal trading",
      "Stock prices cannot reflect information quickly",
    ],
    correct: "The news may already be priced in by expectations",
  },
] as const;
