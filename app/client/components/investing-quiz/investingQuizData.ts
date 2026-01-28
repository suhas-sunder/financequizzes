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
    q: "In investing, what does “risk” mean in the broadest practical sense?",
    options: [
      "Uncertainty of outcomes, including the chance of loss",
      "How often prices move day to day",
      "A promise that returns will be higher",
      "How much attention an asset receives",
    ],
    correct: "Uncertainty of outcomes, including the chance of loss",
  },
  {
    q: "Which situation best illustrates risk without much volatility?",
    options: [
      "A price that swings daily but ends unchanged",
      "A stable-looking price that can permanently drop on one event",
      "A price that rises steadily with no setbacks",
      "A price that moves randomly but cannot lose value",
    ],
    correct: "A stable-looking price that can permanently drop on one event",
  },
  {
    q: "What does “volatility” describe most directly?",
    options: [
      "Chance of long-term underperformance versus goals",
      "Likelihood of permanent loss from fraud",
      "Magnitude of price movement over time",
      "Degree of diversification across holdings",
    ],
    correct: "Magnitude of price movement over time",
  },
  {
    q: "Which statement best describes “expected return” conceptually?",
    options: [
      "The most likely outcome if history repeats",
      "A guarantee of future performance",
      "The maximum return an asset can reach",
      "A probability-weighted average of outcomes",
    ],
    correct: "A probability-weighted average of outcomes",
  },
  {
    q: "Why can diversification reduce risk without removing all risk?",
    options: [
      "It reduces exposure to single-point failures",
      "It eliminates economy-wide shocks entirely",
      "It removes uncertainty from outcomes",
      "It guarantees positive returns each year",
    ],
    correct: "It reduces exposure to single-point failures",
  },
  {
    q: "Two assets have low correlation. What does that most directly imply?",
    options: [
      "They tend to move independently relative to each other",
      "They have the same expected return level",
      "They share identical risk drivers always",
      "They cannot both decline at once",
    ],
    correct: "They tend to move independently relative to each other",
  },
  {
    q: "Which scenario best reflects concentration risk?",
    options: [
      "Owning many assets that all rely on one factor",
      "Owning fewer assets with different risk drivers",
      "Owning cash and stocks in the same account",
      "Owning assets that move differently in stress",
    ],
    correct: "Owning many assets that all rely on one factor",
  },
  {
    q: "What does “time horizon” mean in investing conversations?",
    options: [
      "The price level an asset should reach",
      "How long you can stay invested before needing funds",
      "The number of trades you plan each month",
      "The tax rate applied to gains and income",
    ],
    correct: "How long you can stay invested before needing funds",
  },
  {
    q: "Why does a longer time horizon often change what risks matter most?",
    options: [
      "Short-term swings can matter less than staying power",
      "Forecasts become guaranteed with more time",
      "Downside cannot happen over long periods",
      "Liquidity becomes irrelevant over any horizon",
    ],
    correct: "Short-term swings can matter less than staying power",
  },
  {
    q: "Which best describes “sequence of returns risk” at a high level?",
    options: [
      "The order of gains and losses can affect outcomes when withdrawing",
      "Returns occur in a repeating cycle over time",
      "Markets reward frequent trading over patience",
      "Long-term returns are always higher than short-term",
    ],
    correct: "The order of gains and losses can affect outcomes when withdrawing",
  },
  {
    q: "What does “drawdown” refer to most directly?",
    options: [
      "A decline from a prior peak to a later low",
      "A change in the inflation rate over time",
      "A fee charged by an account provider",
      "A rebound from a low back to a peak",
    ],
    correct: "A decline from a prior peak to a later low",
  },
  {
    q: "Which statement best captures the idea of compounding?",
    options: [
      "Returns build on prior returns over time",
      "Returns arrive in equal fixed amounts",
      "Prices trend upward without interruptions",
      "Losses cannot compound in any context",
    ],
    correct: "Returns build on prior returns over time",
  },
  {
    q: "What is “liquidity” in investing language?",
    options: [
      "How easily an asset becomes cash with small price impact",
      "How strongly an asset responds to news headlines",
      "How frequently an asset pays distributions",
      "How certain an asset’s long-run return is",
    ],
    correct: "How easily an asset becomes cash with small price impact",
  },
  {
    q: "Which example best separates a good process from a good outcome?",
    options: [
      "A careful choice that loses due to randomness",
      "A rushed choice that wins due to luck",
      "A forecast that is always correct over time",
      "A story that feels right and proves right",
    ],
    correct: "A careful choice that loses due to randomness",
  },
  {
    q: "What does “opportunity cost” mean in investing decisions?",
    options: [
      "What you give up by choosing one alternative over another",
      "A mandatory fee charged for holding assets",
      "A penalty paid when selling too soon",
      "A tax rate applied to every purchase made",
    ],
    correct: "What you give up by choosing one alternative over another",
  },
  {
    q: "Which statement best describes “market efficiency” as a concept?",
    options: [
      "Prices quickly reflect widely available information",
      "Prices never deviate from true value",
      "Everyone earns the same return each year",
      "No one can ever outperform in any way",
    ],
    correct: "Prices quickly reflect widely available information",
  },
  {
    q: "What does “price” represent in a market at a point in time?",
    options: [
      "What buyers and sellers agree to exchange at now",
      "A proven measure of intrinsic value for all horizons",
      "A prediction of future cash flows with certainty",
      "A guarantee of the asset’s long-term expected return",
    ],
    correct: "What buyers and sellers agree to exchange at now",
  },
  {
    q: "Which is the cleanest meaning of “correlation” in investing?",
    options: [
      "How two returns tend to move relative to each other",
      "How quickly an investment compounds each year",
      "How much an asset costs compared to income",
      "How much risk an investor can tolerate emotionally",
    ],
    correct: "How two returns tend to move relative to each other",
  },
  {
    q: "What does “idiosyncratic risk” refer to most directly?",
    options: [
      "Risk tied to one company, issuer, or specific situation",
      "Risk tied to inflation and broad growth levels",
      "Risk tied to economy-wide shocks and recessions",
      "Risk tied to interest rates and currency trends",
    ],
    correct: "Risk tied to one company, issuer, or specific situation",
  },
  {
    q: "What does “systematic risk” refer to most directly?",
    options: [
      "Risk that affects many assets at the same time",
      "Risk unique to one firm or management team",
      "Risk that can be removed by diversification alone",
      "Risk caused only by short-term price swings",
    ],
    correct: "Risk that affects many assets at the same time",
  },
  {
    q: "What is “tail risk” in plain investing language?",
    options: [
      "Low-probability outcomes with very large impact",
      "Small daily moves that average out over time",
      "Guaranteed losses during downturn periods",
      "Normal variation around an expected outcome",
    ],
    correct: "Low-probability outcomes with very large impact",
  },
  {
    q: "Why can diversification fail to help in a crisis?",
    options: [
      "Correlations can rise when many assets fall together",
      "Diversification always increases volatility in stress",
      "Diversification turns losses into gains automatically",
      "Diversification prevents any asset from declining",
    ],
    correct: "Correlations can rise when many assets fall together",
  },
  {
    q: "What is “loss aversion” describing?",
    options: [
      "Losses feel more painful than equal gains feel good",
      "Gains feel less meaningful than equal losses",
      "Losses become impossible with enough time invested",
      "Losses are always caused by bad decision-making",
    ],
    correct: "Losses feel more painful than equal gains feel good",
  },
  {
    q: "Which best describes the “narrative trap” for investors?",
    options: [
      "A story becomes a substitute for weighing uncertainty",
      "A plan becomes too detailed to execute",
      "A diversified portfolio becomes too complex",
      "A long horizon becomes too hard to measure",
    ],
    correct: "A story becomes a substitute for weighing uncertainty",
  },
  {
    q: "What is “reversion to the mean” as a general idea?",
    options: [
      "Extreme outcomes often drift back toward typical levels",
      "Prices return to yesterday’s level every week",
      "High returns guarantee higher returns next year",
      "Markets move in predictable cycles without noise",
    ],
    correct: "Extreme outcomes often drift back toward typical levels",
  },
  {
    q: "What does “risk tolerance” mean most directly?",
    options: [
      "How much uncertainty and drawdown you can emotionally handle",
      "How much money you have available to invest",
      "How much volatility an asset usually shows",
      "How much time you spend following markets daily",
    ],
    correct: "How much uncertainty and drawdown you can emotionally handle",
  },
  {
    q: "What does “risk capacity” mean most directly?",
    options: [
      "How much loss you can absorb without breaking your plan",
      "How much volatility you prefer in a portfolio",
      "How much attention you can give to markets",
      "How much tax you will pay on investment income",
    ],
    correct: "How much loss you can absorb without breaking your plan",
  },
  {
    q: "Why is confusing luck with skill dangerous in investing?",
    options: [
      "A good outcome can happen by chance and inflate confidence",
      "Skill always shows clearly from one short result",
      "Luck is not a factor in market outcomes",
      "Outcomes are fully controlled by effort alone",
    ],
    correct: "A good outcome can happen by chance and inflate confidence",
  },
  {
    q: "What is the most accurate statement about forecasts and certainty?",
    options: [
      "Forecasts can guide thinking but cannot remove uncertainty",
      "Forecasts are guarantees if data is high quality",
      "Forecasts eliminate the need for diversification",
      "Forecasts make drawdowns impossible to experience",
    ],
    correct: "Forecasts can guide thinking but cannot remove uncertainty",
  },
  {
    q: "What does “margin of safety” mean as a mental model?",
    options: [
      "A buffer that reduces damage if assumptions are wrong",
      "A promise that losses cannot happen",
      "A shortcut that avoids any need for analysis",
      "A rule that guarantees you buy at the bottom",
    ],
    correct: "A buffer that reduces damage if assumptions are wrong",
  },
  {
    q: "Why can “diversifying across time” help conceptually?",
    options: [
      "It reduces reliance on one specific entry moment",
      "It guarantees higher returns than any alternative",
      "It eliminates market risk for long horizons",
      "It prevents any loss from occurring at all",
    ],
    correct: "It reduces reliance on one specific entry moment",
  },
  {
    q: "Which statement about valuation is most conceptually accurate?",
    options: [
      "Valuation is an estimate driven by assumptions and uncertainty",
      "Valuation is identical to current market price always",
      "Valuation guarantees future returns if done carefully",
      "Valuation is irrelevant to any long-term decision",
    ],
    correct: "Valuation is an estimate driven by assumptions and uncertainty",
  },
  {
    q: "What does it mean for returns to have “fat tails”?",
    options: [
      "Extreme outcomes occur more often than simple models expect",
      "Outcomes cluster tightly around the average always",
      "Returns follow a fixed range with clear bounds",
      "Extreme events cannot happen in diversified portfolios",
    ],
    correct: "Extreme outcomes occur more often than simple models expect",
  },
  {
    q: "What does “base rate” mean in investment reasoning?",
    options: [
      "The typical frequency of an outcome in similar cases",
      "The interest rate set for savings accounts",
      "The tax rate applied to realized capital gains",
      "The fee rate charged by a brokerage platform",
    ],
    correct: "The typical frequency of an outcome in similar cases",
  },
  {
    q: "What are “second-order effects” in market reasoning?",
    options: [
      "Follow-on consequences after the first obvious impact",
      "Daily price noise that cancels out quickly",
      "A rule that works the same in every cycle",
      "A guaranteed hedge against unexpected events",
    ],
    correct: "Follow-on consequences after the first obvious impact",
  },
  {
    q: "What does “incentive alignment” capture most directly?",
    options: [
      "People tend to act toward what they are rewarded for",
      "Prices always move toward fair value each day",
      "Risk disappears when everyone shares the same goals",
      "Volatility declines whenever incentives are clear",
    ],
    correct: "People tend to act toward what they are rewarded for",
  },
  {
    q: "Why is defining a goal before investing conceptually important?",
    options: [
      "Goals set the context for horizon and tolerable downside",
      "Goals turn uncertain outcomes into certain outcomes",
      "Goals guarantee you select the best asset each time",
      "Goals ensure you never face a drawdown again",
    ],
    correct: "Goals set the context for horizon and tolerable downside",
  },
  {
    q: "Why can diversification feel frustrating even if it reduces fragility?",
    options: [
      "It can reduce the payoff from a single concentrated winner",
      "It requires constant trading to maintain exposure",
      "It guarantees you underperform every year",
      "It makes risk capacity smaller by definition always",
    ],
    correct: "It can reduce the payoff from a single concentrated winner",
  },
  {
    q: "What does “separating signal from noise” mean in investing terms?",
    options: [
      "Distinguishing meaningful information from random variation",
      "Ignoring all new information to stay consistent",
      "Assuming every move has a clear single cause",
      "Reacting quickly to headlines as they appear",
    ],
    correct: "Distinguishing meaningful information from random variation",
  },
  {
    q: "Which scenario best shows that volatility is not the same as intolerable risk?",
    options: [
      "A volatile asset held for decades with no forced sale",
      "A stable-looking asset that is hard to sell in stress",
      "A stable-looking asset with a single large hidden downside",
      "A volatile asset held short term with a fixed deadline",
    ],
    correct: "A volatile asset held for decades with no forced sale",
  },
] as const;

