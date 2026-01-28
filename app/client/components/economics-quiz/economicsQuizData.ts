export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const ECONOMICS_QUIZ_INTENT = {
  topicLabel: "Economics",
  roundSize: 10,
  formatLabel: "10-question challenge",
  focus:
    "Core economic concepts and systems: common terms and cause-effect relationships used in everyday economic discussions. Not personal finance decision-making.",
} as const;

export const ECONOMICS_QUIZ_CATEGORIES = [
  {
    key: "fundamentals",
    label: "Core concepts",
    whatItCovers: "Scarcity, opportunity cost, incentives, and tradeoffs.",
  },
  {
    key: "markets",
    label: "Supply, demand, and markets",
    whatItCovers:
      "How prices and quantities adjust, and market structure language.",
  },
  {
    key: "macro",
    label: "Macroeconomic indicators",
    whatItCovers:
      "Inflation, GDP, unemployment, and overall economic activity terms.",
  },
  {
    key: "policy",
    label: "Policy and institutions",
    whatItCovers:
      "Central bank vs government roles and economy-wide financial conditions.",
  },
  {
    key: "systems",
    label: "Economic systems and structures",
    whatItCovers:
      "Competition, monopoly/oligopoly, public goods, externalities.",
  },
] as const;

export const ECONOMICS_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Early recognition, with gaps in basic economics vocabulary.",
  },
  {
    key: "4-5",
    label: "4–5 out of 10",
    meaning: "Some familiarity, but inconsistent cause-effect interpretation.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid grasp of many core economic terms and relationships.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning: "Strong economics awareness across micro and macro basics.",
  },
  {
    key: "10",
    label: "10 out of 10",
    meaning: "Excellent basic economics literacy and conceptual clarity.",
  },
] as const;

export const ECONOMICS_FAQS: FAQItem[] = [
  {
    q: "What does this economics quiz test?",
    a: "It tests basic economic awareness: core terms (like scarcity and opportunity cost) and common cause-effect relationships (like how supply and demand affect prices) used in everyday discussions of the economy.",
  },
  {
    q: "Is this quiz about personal finance decisions?",
    a: "No. It focuses on economics concepts and systems rather than budgeting, investing decisions, or product comparisons.",
  },
  {
    q: "Does this quiz require math or graph reading?",
    a: "No. It is definitional and conceptual, focused on meaning and relationships rather than calculations.",
  },
  {
    q: "How many questions are in the quiz?",
    a: "Each run is 10 questions, drawn from a larger question bank so you can retake it for variety.",
  },
  {
    q: "How can I improve my score?",
    a: "Focus on definitions and directionality: what changes (price, quantity, incentives) and why. Reviewing basic economics vocabulary helps.",
  },
];

export const ECONOMICS_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "A city has empty apartments, yet many people cannot find affordable housing at current rents. Which concept best explains how both can be true?",
    options: [
      "A shortage can exist in the affordable segment",
      "Scarcity means supply is always zero",
      "Equilibrium always eliminates unmet needs",
      "Inflation is the main cause of vacancy",
    ],
    correct: "A shortage can exist in the affordable segment",
  },
  {
    q: "A store raises the price of a product and total revenue rises, even though fewer units sell. Which demand condition best fits this outcome?",
    options: [
      "Demand is perfectly elastic in this range",
      "Demand is relatively inelastic in this range",
      "Supply has shifted left more than demand",
      "The good is a complement to income",
    ],
    correct: "Demand is relatively inelastic in this range",
  },
  {
    q: "A company offers a limited-time discount. Sales increase, but only because the price changed. What is this best described as?",
    options: [
      "A shift in demand caused by preferences",
      "A shift in supply caused by lower costs",
      "A movement along the demand curve",
      "A change in equilibrium from new entrants",
    ],
    correct: "A movement along the demand curve",
  },
  {
    q: "A government sets a binding price ceiling below the market-clearing price. Which outcome is most consistent?",
    options: [
      "A persistent surplus as supply builds up",
      "A higher equilibrium price as demand falls",
      "A market shift that makes demand irrelevant",
      "A persistent shortage as quantity demanded exceeds supply",
    ],
    correct: "A persistent shortage as quantity demanded exceeds supply",
  },
  {
    q: "Two goods are complements. If the price of one rises sharply, what is the most likely demand response for the other?",
    options: [
      "Demand increases for the other good",
      "Demand decreases for the other good",
      "Demand becomes perfectly elastic instantly",
      "Demand becomes unrelated to price levels",
    ],
    correct: "Demand decreases for the other good",
  },
  {
    q: "A factory adopts a cleaner process that reduces nearby health harms not reflected in product prices. What is the original harm best classified as?",
    options: [
      "A market power effect on pricing",
      "A public good benefit from competition",
      "A negative externality borne by others",
      "A shortage caused by a price floor",
    ],
    correct: "A negative externality borne by others",
  },
  {
    q: "A worker chooses training that pays less now but increases future earnings. What is the best economics term for what is sacrificed today?",
    options: [
      "The opportunity cost of current income",
      "The nominal value of future earnings",
      "The marginal product of capital goods",
      "The elasticity of demand for wages",
    ],
    correct: "The opportunity cost of current income",
  },
  {
    q: "A market is dominated by a few large firms that react to each other’s pricing moves. What structure best describes this market?",
    options: [
      "Perfect competition with many price takers",
      "Monopoly with a single seller",
      "Monopsony with a single buyer",
      "Oligopoly with strategic interdependence",
    ],
    correct: "Oligopoly with strategic interdependence",
  },
  {
    q: "A news story says wages rose 4% while prices rose 5% over the same period. What happened to real wages, conceptually?",
    options: [
      "Real wages rose by about one percent",
      "Real wages stayed exactly constant",
      "Real wages likely fell over the period",
      "Real wages must rise with any wage increase",
    ],
    correct: "Real wages likely fell over the period",
  },
  {
    q: "A nation’s GDP rises, but the price level rises by the same proportion. What is the best interpretation of real output?",
    options: [
      "Real output is likely unchanged overall",
      "Real output must have doubled over time",
      "Real output must be negative by definition",
      "Real output equals the money supply measure",
    ],
    correct: "Real output is likely unchanged overall",
  },
  {
    q: "A firm lowers its price because production costs fell, while consumer preferences are unchanged. What is the cleanest supply-demand framing?",
    options: [
      "Supply increased due to lower costs",
      "Demand increased due to higher income",
      "Demand decreased due to substitutes",
      "A price ceiling created a surplus",
    ],
    correct: "Supply increased due to lower costs",
  },
  {
    q: "A government increases spending without changing taxes. Which label best matches this type of policy action?",
    options: [
      "Monetary policy tightening",
      "Fiscal policy expansion",
      "A supply shock in production",
      "A demand curve movement only",
    ],
    correct: "Fiscal policy expansion",
  },
  {
    q: "A store introduces a loyalty reward that effectively lowers the cost of future purchases. What is the most direct economic role of this change?",
    options: [
      "It changes incentives by altering perceived costs",
      "It removes scarcity by expanding resources",
      "It guarantees efficiency in all outcomes",
      "It eliminates market power through entry",
    ],
    correct: "It changes incentives by altering perceived costs",
  },
  {
    q: "A price increase causes a large drop in quantity demanded. What term best describes this demand response?",
    options: [
      "Demand is inelastic in this range",
      "Demand is perfectly inelastic always",
      "Demand is elastic in this range",
      "Demand is fixed by policy and cannot move",
    ],
    correct: "Demand is elastic in this range",
  },
  {
    q: "A company invests in automation, raising output per worker-hour. Which macro-relevant concept does this most directly increase?",
    options: [
      "Inflation by raising all prices",
      "Unemployment by definition",
      "Productivity of labor inputs",
      "GDP by printing more currency",
    ],
    correct: "Productivity of labor inputs",
  },
  {
    q: "A city installs street lighting that benefits everyone and is hard to exclude non-payers from. What best classifies this good?",
    options: [
      "A rival private good sold by markets",
      "A club good that excludes non-members",
      "A common resource depleted by use",
      "A public good with non-excludability",
    ],
    correct: "A public good with non-excludability",
  },
  {
    q: "A firm produces one more unit. The extra cost of that additional unit is called what?",
    options: [
      "Average cost across all units",
      "Fixed cost that never changes",
      "Marginal cost of one more unit",
      "Sunk cost of past investment",
    ],
    correct: "Marginal cost of one more unit",
  },
  {
    q: "A central bank raises policy interest rates. Which broad effect is most consistent in standard macro framing?",
    options: [
      "Borrowing becomes cheaper and spending rises",
      "Government spending automatically increases",
      "Prices are fixed and inflation disappears instantly",
      "Credit conditions tighten and spending tends to slow",
    ],
    correct: "Credit conditions tighten and spending tends to slow",
  },
  {
    q: "A market has many sellers, similar products, and firms take the market price as given. Which structure best matches?",
    options: [
      "Perfect competition with price-taking firms",
      "Monopoly with a single price setter",
      "Oligopoly with coordinated output",
      "Monopsony with one dominant buyer",
    ],
    correct: "Perfect competition with price-taking firms",
  },
  {
    q: "A policy debate uses “equity” as the goal. In economics talk, what does that usually mean?",
    options: [
      "Maximizing total output regardless of distribution",
      "Fairness in outcomes or opportunities",
      "A market where many firms set prices",
      "A rise in GDP caused by inflation",
    ],
    correct: "Fairness in outcomes or opportunities",
  },
  {
    q: "A binding price floor is set above the market-clearing price. Which outcome is most consistent?",
    options: [
      "Shortage because demand exceeds supply",
      "Equilibrium quantity rises with no distortion",
      "Money supply shrinks by definition",
      "Surplus because supply exceeds demand",
    ],
    correct: "Surplus because supply exceeds demand",
  },
  {
    q: "A product’s demand rises because consumers’ incomes increased, even though the product’s price did not change. What is this called?",
    options: [
      "A movement along the demand curve",
      "A movement along the supply curve",
      "A shift in demand from a non-price factor",
      "A shift in supply from higher costs",
    ],
    correct: "A shift in demand from a non-price factor",
  },
  {
    q: "A factory’s output falls because a key input becomes scarce, even though demand is unchanged. What is the cleanest macro term?",
    options: [
      "A fiscal stimulus effect on demand",
      "A supply-side shock to production",
      "A demand shift from higher incomes",
      "A change in price elasticity definition",
    ],
    correct: "A supply-side shock to production",
  },
  {
    q: "A shopper chooses Brand A over Brand B because A is cheaper. What is the best economics term for the forgone choice?",
    options: [
      "The opportunity cost of choosing A",
      "The equilibrium price of Brand B",
      "The nominal price level of all goods",
      "The public good value of the market",
    ],
    correct: "The opportunity cost of choosing A",
  },
  {
    q: "Two goods are substitutes. If the price of one rises, what is the most likely demand response for the other?",
    options: [
      "Demand falls for the other good",
      "Demand becomes unrelated to income",
      "Demand rises for the other good",
      "Demand turns perfectly inelastic always",
    ],
    correct: "Demand rises for the other good",
  },
  {
    q: "Inflation is reported at 3% for a year. What is the most direct meaning of that statement?",
    options: [
      "All wages rose by exactly three percent",
      "All prices rose by the same amount",
      "GDP rose by three percent in real terms",
      "The overall price level rose on average",
    ],
    correct: "The overall price level rose on average",
  },
  {
    q: "A company dominates a market and can influence the price it charges. What is the best term for this ability?",
    options: [
      "Market power over the price level",
      "Price-taking behavior in competition",
      "Non-rival consumption in public goods",
      "Perfect information in all transactions",
    ],
    correct: "Market power over the price level",
  },
  {
    q: "A country’s unemployment rate rises while many people stop looking for work. What does the unemployment rate conceptually count?",
    options: [
      "All adults without jobs in the population",
      "Only people working part-time involuntarily",
      "Only people who want a job but do not search",
      "Labor force participants jobless and seeking work",
    ],
    correct: "Labor force participants jobless and seeking work",
  },
  {
    q: "A firm changes only its product price, and the quantity demanded changes in response. Which description best fits?",
    options: [
      "A shift in demand from changing tastes",
      "A shift in supply from lower input costs",
      "A movement along the demand curve",
      "A change in market structure from entry",
    ],
    correct: "A movement along the demand curve",
  },
  {
    q: "A “free rider problem” is most directly tied to what feature of certain goods?",
    options: [
      "High barriers to entry in monopoly",
      "Non-excludability that makes payment avoidable",
      "Rival consumption that depletes the good",
      "Elastic demand that reduces total revenue",
    ],
    correct: "Non-excludability that makes payment avoidable",
  },
  {
    q: "A policy changes behavior by altering marginal payoffs rather than total payoffs. Which concept is being used?",
    options: [
      "Average outcomes determine all choices",
      "Scarcity disappears as resources expand",
      "Equity replaces efficiency as a constraint",
      "Marginal incentives drive the next decision",
    ],
    correct: "Marginal incentives drive the next decision",
  },
  {
    q: "A country’s real GDP falls for a sustained period and employment weakens broadly. What label is most commonly used?",
    options: [
      "A recession with broad activity decline",
      "A boom with rising real output",
      "A deflation caused by higher demand",
      "A monopoly caused by low supply",
    ],
    correct: "A recession with broad activity decline",
  },
  {
    q: "A monopoly restricts output compared to a competitive benchmark. Which outcome is most consistent in basic models?",
    options: [
      "Lower prices and higher quantities",
      "Higher prices and lower quantities",
      "Perfectly efficient allocation always",
      "Demand becomes perfectly inelastic",
    ],
    correct: "Higher prices and lower quantities",
  },
  {
    q: "A policy aims to maximize total value from resources by reducing avoidable waste. Which economic goal is emphasized?",
    options: [
      "Efficiency in resource allocation",
      "Equity in income outcomes",
      "Inflation targeting in all sectors",
      "Market power for key industries",
    ],
    correct: "Efficiency in resource allocation",
  },
  {
    q: "A government cuts taxes and increases spending at the same time. Which broad term best matches the intent?",
    options: [
      "Monetary tightening to slow inflation",
      "Fiscal stimulus to raise overall demand",
      "Supply contraction to reduce output",
      "A price ceiling to reduce shortages",
    ],
    correct: "Fiscal stimulus to raise overall demand",
  },
  {
    q: "A firm’s production creates a benefit for neighbors not captured in its revenue. What is that benefit best classified as?",
    options: [
      "A negative externality from production",
      "A positive externality to others",
      "A monopoly rent from market power",
      "A shortage caused by a price floor",
    ],
    correct: "A positive externality to others",
  },
  {
    q: "A report says nominal GDP grew 6% while inflation was 4%. What is the most direct implication for real GDP growth?",
    options: [
      "Real GDP growth is about two percent",
      "Real GDP growth equals nominal GDP",
      "Real GDP growth is always negative",
      "Real GDP growth must exceed inflation",
    ],
    correct: "Real GDP growth is about two percent",
  },
  {
    q: "A central bank action is described as “tightening.” Which description best matches that label?",
    options: [
      "Lower rates and easier credit access",
      "Higher rates and tighter credit access",
      "Higher taxes and lower spending",
      "Lower taxes and higher spending",
    ],
    correct: "Higher rates and tighter credit access",
  },
  {
    q: "A market has one dominant buyer who can influence the price paid to suppliers. What structure best describes this?",
    options: [
      "A monopoly with one seller",
      "An oligopoly with few sellers",
      "A monopsony with one main buyer",
      "Perfect competition with many buyers",
    ],
    correct: "A monopsony with one main buyer",
  },
] as const;
