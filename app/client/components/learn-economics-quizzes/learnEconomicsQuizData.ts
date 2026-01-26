  export type FAQItem = { q: string; a: string };

  export type QuizQuestion = {
    q: string;
    options: string[];
    correct: string;
  };

  export const DEFAULT_FAQS: FAQItem[] = [
  {
    q: "Is this economics quiz suitable for beginners?",
    a: "Yes! The quiz covers fundamental economic ideas in an easy-to-understand format for learners at any level.",
  },
  {
    q: "Do I need to know advanced math?",
    a: "Not at all. These questions focus on key principles, not complex calculations.",
  },
  {
    q: "Are the answers explained?",
    a: "Yes. Each question displays the correct answer instantly to help you learn and retain key concepts.",
  },
];

  export const ECON_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "What happens when demand exceeds supply?",
    options: [
      "Prices tend to rise",
      "Prices stay the same",
      "Prices tend to fall",
      "Supply automatically increases",
    ],
    correct: "Prices tend to rise",
  },
  {
    q: "What is GDP an indicator of?",
    options: [
      "A country’s total imports",
      "The total value of goods and services produced within a country",
      "Government spending only",
      "Corporate profits",
    ],
    correct: "The total value of goods and services produced within a country",
  },
  {
    q: "Which of the following describes inflation?",
    options: [
      "A general increase in prices and fall in the purchasing value of money",
      "A rise in unemployment levels",
      "A decrease in government spending",
      "A balance of exports and imports",
    ],
    correct:
      "A general increase in prices and fall in the purchasing value of money",
  },
  {
    q: "What is a recession?",
    options: [
      "A temporary increase in GDP",
      "Two or more consecutive quarters of negative GDP growth",
      "A period of low inflation",
      "A sudden rise in employment",
    ],
    correct: "Two or more consecutive quarters of negative GDP growth",
  },
  {
    q: "Which economic system relies on supply and demand with minimal government control?",
    options: [
      "Command economy",
      "Mixed economy",
      "Market economy",
      "Traditional economy",
    ],
    correct: "Market economy",
  },
  {
    q: "What is opportunity cost?",
    options: [
      "The value of the next best alternative forgone",
      "The total cost of production",
      "The amount spent on taxes",
      "A company’s fixed cost",
    ],
    correct: "The value of the next best alternative forgone",
  },
  {
    q: "Which of the following best defines scarcity?",
    options: [
      "Limited resources to meet unlimited wants",
      "Excess supply of goods",
      "Decline in production efficiency",
      "Government regulation of prices",
    ],
    correct: "Limited resources to meet unlimited wants",
  },
  {
    q: "What is the basic economic problem?",
    options: [
      "Scarcity of resources",
      "Government intervention",
      "Trade deficits",
      "High population growth",
    ],
    correct: "Scarcity of resources",
  },
  {
    q: "Which branch of economics studies individual markets?",
    options: [
      "Microeconomics",
      "Macroeconomics",
      "International economics",
      "Behavioral economics",
    ],
    correct: "Microeconomics",
  },
  {
    q: "Which branch of economics examines overall national performance?",
    options: [
      "Macroeconomics",
      "Microeconomics",
      "Labor economics",
      "Development economics",
    ],
    correct: "Macroeconomics",
  },

  // 2️⃣ SUPPLY, DEMAND & MARKET EQUILIBRIUM
  {
    q: "What happens to price if supply increases while demand stays constant?",
    options: [
      "Price falls",
      "Price rises",
      "Price stays the same",
      "Price becomes unpredictable",
    ],
    correct: "Price falls",
  },
  {
    q: "What is market equilibrium?",
    options: [
      "When quantity demanded equals quantity supplied",
      "When prices fluctuate rapidly",
      "When the government fixes prices",
      "When production stops",
    ],
    correct: "When quantity demanded equals quantity supplied",
  },
  {
    q: "A rightward shift in the demand curve means:",
    options: [
      "An increase in demand",
      "A decrease in demand",
      "No change in demand",
      "Excess supply",
    ],
    correct: "An increase in demand",
  },
  {
    q: "What causes a movement along the supply curve?",
    options: [
      "Change in the price of the good itself",
      "Technological advancement",
      "Government policy",
      "Input costs decreasing",
    ],
    correct: "Change in the price of the good itself",
  },
  {
    q: "If price elasticity of demand > 1, demand is:",
    options: ["Elastic", "Inelastic", "Unitary", "Perfectly inelastic"],
    correct: "Elastic",
  },
  {
    q: "If a good is a necessity, demand tends to be:",
    options: ["Inelastic", "Elastic", "Perfectly elastic", "Unitary"],
    correct: "Inelastic",
  },
  {
    q: "Substitute goods are:",
    options: [
      "Goods that can replace each other",
      "Goods used together",
      "Goods with no market value",
      "Government-controlled items",
    ],
    correct: "Goods that can replace each other",
  },
  {
    q: "What is consumer surplus?",
    options: [
      "Difference between what consumers are willing to pay and what they actually pay",
      "Profit earned by producers",
      "Tax revenue collected by government",
      "Extra cost from production",
    ],
    correct:
      "Difference between what consumers are willing to pay and what they actually pay",
  },
  {
    q: "What happens when the government sets a price ceiling below equilibrium?",
    options: [
      "A shortage occurs",
      "A surplus occurs",
      "Equilibrium is maintained",
      "Prices rise",
    ],
    correct: "A shortage occurs",
  },
  {
    q: "A leftward shift in the supply curve represents:",
    options: [
      "Decrease in supply",
      "Increase in supply",
      "Higher demand",
      "Stable equilibrium",
    ],
    correct: "Decrease in supply",
  },
];
