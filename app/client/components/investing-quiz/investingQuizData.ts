export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const INVESTING_QUIZ_INTENT = {
  topicLabel: "Investing",
  roundSize: 10,
  formatLabel: "10-question challenge",
  focus:
    "High-level investing concepts and mental models: risk, diversification, time horizon, market behavior, and decision-making under uncertainty.",
} as const;

export const INVESTING_QUIZ_CATEGORIES = [
  {
    key: "risk_uncertainty",
    label: "Risk and uncertainty",
    whatItCovers:
      "Risk vs volatility, downside, probability, and why uncertainty cannot be removed.",
  },
  {
    key: "diversification_correlation",
    label: "Diversification and correlation",
    whatItCovers:
      "Spreading exposures, correlation, concentration risk, and reducing single-point failure.",
  },
  {
    key: "time_compounding",
    label: "Time horizon and compounding",
    whatItCovers:
      "Long horizons, staying power, and why time changes what outcomes are possible.",
  },
  {
    key: "prices_markets",
    label: "Prices and market behavior",
    whatItCovers:
      "How information shows up in prices, randomness, and what markets can and cannot predict.",
  },
  {
    key: "behavior_process",
    label: "Behavior and decision process",
    whatItCovers:
      "Biases, incentives, narratives, and focusing on process rather than a single outcome.",
  },
] as const;

export const INVESTING_QUIZ_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Early recognition, with major gaps in core mental models.",
  },
  {
    key: "4-5",
    label: "4–5 out of 10",
    meaning: "Some baseline familiarity, with mixed consistency across concepts.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid conceptual understanding across most categories.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning: "Strong mental models and clean concept separation.",
  },
  { key: "10", label: "10 out of 10", meaning: "Perfect run." },
] as const;

export const INVESTING_FAQS: FAQItem[] = [
  {
    q: "How is the quiz scored?",
    a: "Each set is 10 questions. Your score is the number you answer correctly out of 10.",
  },
  {
    q: "Does this quiz recommend investments or strategies?",
    a: "No. It tests conceptual understanding only and does not provide advice, recommendations, or comparisons.",
  },
  {
    q: "Can I change an answer after choosing?",
    a: "No. Each question locks once you select an option, then the quiz reveals whether it was correct.",
  },
  {
    q: "Does a new set repeat questions?",
    a: "Each set is randomized from the question pool and avoids duplicates within the same 10-question run.",
  },
  {
    q: "What does “best time” measure?",
    a: "Best time is your fastest completed 10-question run on this device. Timing starts on your first answer, not on page load.",
  },
];

// Question bank: principle-based. No instruments, no tactics, no outcome claims.
export const INVESTING_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "In investing, what does “risk” usually refer to in the broadest sense?",
    options: [
      "Uncertainty of outcomes, including the chance of loss",
      "How often prices change",
      "A guarantee of higher returns",
      "How popular an asset is",
    ],
    correct: "Uncertainty of outcomes, including the chance of loss",
  },
  {
    q: "Why is diversification often useful?",
    options: [
      "It reduces the impact of any single thing going wrong",
      "It guarantees profits",
      "It removes all volatility",
      "It makes outcomes certain",
    ],
    correct: "It reduces the impact of any single thing going wrong",
  },
  {
    q: "What does “time horizon” describe?",
    options: [
      "How long you can stay invested before needing the money",
      "The maximum price of an asset",
      "The number of trades you make",
      "The tax rate on gains",
    ],
    correct: "How long you can stay invested before needing the money",
  },
  {
    q: "Which statement best separates volatility from risk?",
    options: [
      "Volatility is price movement; risk is the chance of an outcome you cannot tolerate",
      "Volatility is always bad; risk is always good",
      "Volatility and risk are identical",
      "Risk is only about short-term movement",
    ],
    correct:
      "Volatility is price movement; risk is the chance of an outcome you cannot tolerate",
  },
  {
    q: "What does correlation describe?",
    options: [
      "How two things tend to move relative to each other",
      "How large a company is",
      "How fast interest compounds",
      "How often you rebalance",
    ],
    correct: "How two things tend to move relative to each other",
  },
  {
    q: "What is a common implication of a longer time horizon?",
    options: [
      "You may be better able to tolerate short-term swings",
      "You can predict outcomes with certainty",
      "You should ignore all risk",
      "You will always have a positive return",
    ],
    correct: "You may be better able to tolerate short-term swings",
  },
  {
    q: "What does “expected return” mean in general terms?",
    options: [
      "A probability-weighted average of possible outcomes",
      "A guaranteed future result",
      "The highest possible return",
      "A fixed interest payment",
    ],
    correct: "A probability-weighted average of possible outcomes",
  },
  {
    q: "Which is a good description of a “margin of safety” as a concept?",
    options: [
      "A buffer for being wrong about assumptions",
      "A promise of no losses",
      "A way to avoid doing research",
      "A rule for day trading",
    ],
    correct: "A buffer for being wrong about assumptions",
  },
  {
    q: "What does “price” represent in markets?",
    options: [
      "The amount someone is willing to pay right now",
      "The true intrinsic value with certainty",
      "A guaranteed future payoff",
      "The best possible estimate of long-term returns",
    ],
    correct: "The amount someone is willing to pay right now",
  },
  {
    q: "Why can a good decision still lead to a bad outcome?",
    options: [
      "Randomness and uncertainty can dominate in the short run",
      "Good decisions guarantee success",
      "Markets never change",
      "Prices are always wrong",
    ],
    correct: "Randomness and uncertainty can dominate in the short run",
  },
  {
    q: "What does “opportunity cost” mean in investing?",
    options: [
      "What you give up by choosing one option over another",
      "A fee charged by brokers",
      "The cost of inflation only",
      "The cost of taxes only",
    ],
    correct: "What you give up by choosing one option over another",
  },
  {
    q: "What is “concentration risk”?",
    options: [
      "Being too dependent on one idea, sector, or outcome",
      "Owning too many unrelated assets",
      "Paying too many taxes",
      "Having a long time horizon",
    ],
    correct: "Being too dependent on one idea, sector, or outcome",
  },
  {
    q: "Which statement best reflects the idea of “compounding”?",
    options: [
      "Growth builds on previous growth over time",
      "Returns are always linear",
      "Prices only move in one direction",
      "Risk disappears with time",
    ],
    correct: "Growth builds on previous growth over time",
  },
  {
    q: "What is “liquidity” in general terms?",
    options: [
      "How easily something can be converted to cash without a large discount",
      "How likely an asset is to outperform",
      "How long an asset has existed",
      "How many investors own it",
    ],
    correct:
      "How easily something can be converted to cash without a large discount",
  },
  {
    q: "What does it mean to say a market is “efficient” as a concept?",
    options: [
      "Available information is quickly reflected in prices",
      "Prices never move",
      "Everyone earns the same return",
      "No one can ever lose money",
    ],
    correct: "Available information is quickly reflected in prices",
  },
  {
    q: "Which is a common behavioral risk for investors?",
    options: [
      "Making decisions based on fear or excitement instead of a plan",
      "Diversifying across exposures",
      "Thinking about time horizon",
      "Being aware of uncertainty",
    ],
    correct: "Making decisions based on fear or excitement instead of a plan",
  },
  {
    q: "What does “drawdown” describe?",
    options: [
      "A decline from a prior peak to a subsequent low",
      "The yearly inflation rate",
      "A fee charged each month",
      "A guaranteed minimum return",
    ],
    correct: "A decline from a prior peak to a subsequent low",
  },
  {
    q: "What is “sequence of returns” risk at a high level?",
    options: [
      "The order of gains and losses can matter, especially when withdrawing",
      "Returns always arrive in the same pattern",
      "The market repeats every year",
      "Timing the market is easy",
    ],
    correct:
      "The order of gains and losses can matter, especially when withdrawing",
  },
  {
    q: "Which is a correct statement about diversification?",
    options: [
      "It can reduce idiosyncratic risk, but it cannot remove all risk",
      "It eliminates every type of risk",
      "It guarantees a positive outcome",
      "It only works in bull markets",
    ],
    correct: "It can reduce idiosyncratic risk, but it cannot remove all risk",
  },
  {
    q: "What does “tail risk” refer to?",
    options: [
      "Low-probability, high-impact outcomes",
      "Daily price noise",
      "A fixed annual fee",
      "An always-profitable trade",
    ],
    correct: "Low-probability, high-impact outcomes",
  },
  {
    q: "Which is an example of a “narrative trap”?",
    options: [
      "Believing a story so strongly that you ignore uncertainty and counterevidence",
      "Calculating expected value",
      "Spreading exposures",
      "Acknowledging you can be wrong",
    ],
    correct:
      "Believing a story so strongly that you ignore uncertainty and counterevidence",
  },
  {
    q: "What is “reversion to the mean” as a general idea?",
    options: [
      "Extreme outcomes often move back toward typical levels over time",
      "Prices always go up",
      "Past performance guarantees future results",
      "Markets are perfectly predictable",
    ],
    correct:
      "Extreme outcomes often move back toward typical levels over time",
  },
  {
    q: "What does “risk tolerance” mean?",
    options: [
      "How much uncertainty and loss you can emotionally handle",
      "How much money you have",
      "How smart you are",
      "How fast you can trade",
    ],
    correct: "How much uncertainty and loss you can emotionally handle",
  },
  {
    q: "What does “risk capacity” mean?",
    options: [
      "How much loss you can withstand financially without breaking your plan",
      "How much volatility exists in markets",
      "How many assets you own",
      "How quickly you can change jobs",
    ],
    correct:
      "How much loss you can withstand financially without breaking your plan",
  },
  {
    q: "Why is it risky to confuse luck with skill?",
    options: [
      "A good outcome can happen by chance, leading to overconfidence",
      "Skill is always obvious from one result",
      "Luck does not exist in markets",
      "Only professionals have luck",
    ],
    correct: "A good outcome can happen by chance, leading to overconfidence",
  },
  {
    q: "Which statement is most accurate about forecasts?",
    options: [
      "They can be helpful, but uncertainty means they are never guarantees",
      "They are always correct in efficient markets",
      "They eliminate risk",
      "They are the same as a promise",
    ],
    correct:
      "They can be helpful, but uncertainty means they are never guarantees",
  },
  {
    q: "What does “diversification benefit” depend on most directly?",
    options: [
      "How correlated the underlying exposures are",
      "How many headlines exist",
      "How fast you click",
      "How low fees are",
    ],
    correct: "How correlated the underlying exposures are",
  },
  {
    q: "What is “idiosyncratic risk” in broad terms?",
    options: [
      "Risk specific to one company, project, or situation",
      "Risk caused by inflation",
      "Risk caused by interest rates only",
      "Risk caused by taxes only",
    ],
    correct: "Risk specific to one company, project, or situation",
  },
  {
    q: "What is “systematic risk” in broad terms?",
    options: [
      "Risk that affects many assets at once",
      "Risk that can be eliminated by owning one asset",
      "Risk that only affects small companies",
      "Risk that only affects beginners",
    ],
    correct: "Risk that affects many assets at once",
  },
  {
    q: "Which is a clear example of “loss aversion”?",
    options: [
      "Feeling a loss more strongly than an equally sized gain",
      "Enjoying volatility",
      "Ignoring outcomes",
      "Believing every outcome is random",
    ],
    correct: "Feeling a loss more strongly than an equally sized gain",
  },
  {
    q: "What does “diversification across time” usually refer to conceptually?",
    options: [
      "Spreading decisions over time to reduce reliance on one moment",
      "Buying only on one day per year",
      "Holding only cash",
      "Predicting the best entry point",
    ],
    correct: "Spreading decisions over time to reduce reliance on one moment",
  },
  {
    q: "Which statement about “valuation” is conceptually accurate?",
    options: [
      "Valuation is an estimate based on assumptions, not a fact",
      "Valuation is identical to today’s price",
      "Valuation guarantees returns",
      "Valuation is unnecessary for any decision",
    ],
    correct: "Valuation is an estimate based on assumptions, not a fact",
  },
  {
    q: "What does it mean for an outcome to have “fat tails”?",
    options: [
      "Extreme outcomes happen more often than a normal model would predict",
      "Outcomes are always stable",
      "Volatility is zero",
      "Returns are fixed",
    ],
    correct:
      "Extreme outcomes happen more often than a normal model would predict",
  },
  {
    q: "What is a “base rate” in reasoning about investments?",
    options: [
      "The typical frequency of an outcome in similar situations",
      "The interest rate on a savings account",
      "The tax rate in a country",
      "The fee charged per trade",
    ],
    correct: "The typical frequency of an outcome in similar situations",
  },
  {
    q: "Which best describes “second-order effects”?",
    options: [
      "The follow-on consequences after the obvious first impact",
      "A quick chart pattern",
      "A rule that always works",
      "A guaranteed hedge",
    ],
    correct: "The follow-on consequences after the obvious first impact",
  },
  {
    q: "What does “incentive alignment” mean conceptually?",
    options: [
      "People act toward what they are rewarded for",
      "Prices never change",
      "Markets are always fair",
      "Risk is the same for everyone",
    ],
    correct: "People act toward what they are rewarded for",
  },
  {
    q: "What is the strongest reason to define an investing goal before acting?",
    options: [
      "Goals determine the right risk level and time horizon for you",
      "Goals guarantee profits",
      "Goals remove uncertainty",
      "Goals predict market returns",
    ],
    correct: "Goals determine the right risk level and time horizon for you",
  },
  {
    q: "Why can diversification sometimes feel uncomfortable?",
    options: [
      "It can reduce big wins from one concentrated bet, even if it reduces fragility",
      "It always loses money",
      "It eliminates all risk",
      "It requires daily trading",
    ],
    correct:
      "It can reduce big wins from one concentrated bet, even if it reduces fragility",
  },
  {
    q: "What does it mean to “separate signal from noise”?",
    options: [
      "Distinguishing meaningful information from random variation",
      "Ignoring all data",
      "Assuming every move has a clear cause",
      "Following every headline",
    ],
    correct: "Distinguishing meaningful information from random variation",
  },
];
