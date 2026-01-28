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
  { key: "fundamentals", label: "Core concepts", whatItCovers: "Scarcity, opportunity cost, incentives, and tradeoffs." },
  { key: "markets", label: "Supply, demand, and markets", whatItCovers: "How prices and quantities adjust, and market structure language." },
  { key: "macro", label: "Macroeconomic indicators", whatItCovers: "Inflation, GDP, unemployment, and overall economic activity terms." },
  { key: "policy", label: "Policy and institutions", whatItCovers: "Central bank vs government roles and economy-wide financial conditions." },
  { key: "systems", label: "Economic systems and structures", whatItCovers: "Competition, monopoly/oligopoly, public goods, externalities." },
] as const;

export const ECONOMICS_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  { key: "1-3", label: "1–3 out of 10", meaning: "Early recognition, with gaps in basic economics vocabulary." },
  { key: "4-5", label: "4–5 out of 10", meaning: "Some familiarity, but inconsistent cause-effect interpretation." },
  { key: "6-7", label: "6–7 out of 10", meaning: "Solid grasp of many core economic terms and relationships." },
  { key: "8-9", label: "8–9 out of 10", meaning: "Strong economics awareness across micro and macro basics." },
  { key: "10", label: "10 out of 10", meaning: "Excellent basic economics literacy and conceptual clarity." },
] as const;

export const ECONOMICS_FAQS: FAQItem[] = [
  { q: "What does this economics quiz test?", a: "It tests basic economic awareness: core terms (like scarcity and opportunity cost) and common cause-effect relationships (like how supply and demand affect prices) used in everyday discussions of the economy." },
  { q: "Is this quiz about personal finance decisions?", a: "No. It focuses on economics concepts and systems rather than budgeting, investing decisions, or product comparisons." },
  { q: "Does this quiz require math or graph reading?", a: "No. It is definitional and conceptual, focused on meaning and relationships rather than calculations." },
  { q: "How many questions are in the quiz?", a: "Each run is 10 questions, drawn from a larger question bank so you can retake it for variety." },
  { q: "How can I improve my score?", a: "Focus on definitions and directionality: what changes (price, quantity, incentives) and why. Reviewing basic economics vocabulary helps." },
];

export const ECONOMICS_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  { q: "In economics, what does “scarcity” mean?", options: ["Resources are limited relative to wants","Prices are always increasing","All goods are free","People never make tradeoffs"], correct: "Resources are limited relative to wants" },
  { q: "What is “opportunity cost” best described as?", options: ["The value of the next best alternative you give up","The tax paid on a purchase","The price after a discount","A guaranteed profit"], correct: "The value of the next best alternative you give up" },
  { q: "If demand increases and supply stays the same, what is the usual effect on price?", options: ["Price tends to rise","Price tends to fall","Price becomes zero","Price becomes fixed permanently"], correct: "Price tends to rise" },
  { q: "What does “inflation” generally refer to?", options: ["A general rise in prices over time","A guaranteed increase in wages","A decrease in unemployment","A company’s profit margin"], correct: "A general rise in prices over time" },
  { q: "What is GDP most commonly used to represent?", options: ["The total value of final goods and services produced in an economy","The total amount of money in circulation","The number of jobs in an economy","The interest rate on savings accounts"], correct: "The total value of final goods and services produced in an economy" },
  { q: "What does the unemployment rate measure conceptually?", options: ["The share of the labor force that is jobless and seeking work","The share of people who own a business","The share of workers who got a raise","The share of goods that are imported"], correct: "The share of the labor force that is jobless and seeking work" },
  { q: "What does “incentive” mean in economics?", options: ["Something that influences behavior or decisions","A guaranteed result","A fixed interest charge","A type of market structure"], correct: "Something that influences behavior or decisions" },
  { q: "What is a “market” in basic economic terms?", options: ["A setting where buyers and sellers interact","A place where only stocks are traded","A government department","A guarantee of low prices"], correct: "A setting where buyers and sellers interact" },
  { q: "What is a “monopoly” best described as?", options: ["A market with a single dominant seller","A market with many small sellers","A market with no buyers","A market with fixed prices set by consumers"], correct: "A market with a single dominant seller" },
  { q: "What is an “externality” conceptually?", options: ["A side effect of an activity that impacts others and is not fully priced in","A guaranteed return from investing","A monthly bank fee","A type of unemployment"], correct: "A side effect of an activity that impacts others and is not fully priced in" },
  { q: "If supply increases and demand stays the same, what usually happens to price?", options: ["Price tends to fall","Price tends to rise","Price becomes fixed permanently","Price becomes unrelated to quantity"], correct: "Price tends to fall" },
  { q: "What is a “public good” typically described as?", options: ["A good that is hard to exclude people from and one person’s use doesn’t reduce another’s","A product sold only by the government","A good that always has a high price","A good that only businesses can buy"], correct: "A good that is hard to exclude people from and one person’s use doesn’t reduce another’s" },
  { q: "What does “real” (as in real wages) usually mean?", options: ["Adjusted for inflation","Paid in cash only","Guaranteed to increase","The same as nominal by definition"], correct: "Adjusted for inflation" },
  { q: "What does “productivity” generally refer to?", options: ["Output produced per unit of input (like labor hours)","The total amount of money in an economy","The number of stores in a market","A guaranteed growth rate"], correct: "Output produced per unit of input (like labor hours)" },
  { q: "What is a “recession” most commonly described as?", options: ["A period of significant economic decline","A period of guaranteed wage growth","A period where prices can’t change","A period with zero tradeoffs"], correct: "A period of significant economic decline" },
  { q: "In basic terms, what does a central bank typically influence?", options: ["Economy-wide financial conditions such as interest rates","A company’s stock price directly","Individual product discounts","The weather and climate"], correct: "Economy-wide financial conditions such as interest rates" },
  { q: "What does “elasticity” usually describe?", options: ["How responsive quantity is to changes in price or income","How much profit a company makes","How many sellers are in a market","How fast money moves between banks"], correct: "How responsive quantity is to changes in price or income" },
  { q: "What is “trade” in economic terms?", options: ["Exchange of goods and services between parties","A guarantee of lower prices","A way to avoid scarcity","A tax paid on income"], correct: "Exchange of goods and services between parties" },
  { q: "What is an “oligopoly” best described as?", options: ["A market dominated by a small number of large sellers","A market with one seller","A market with perfect competition only","A market without demand"], correct: "A market dominated by a small number of large sellers" },
  { q: "In this quiz, what does “cause and effect” mean?", options: ["Understanding how one change tends to influence another (like price and quantity)","Memorizing country-specific rules","Predicting exact future GDP","Picking the best investment"], correct: "Understanding how one change tends to influence another (like price and quantity)" },
] as const;
