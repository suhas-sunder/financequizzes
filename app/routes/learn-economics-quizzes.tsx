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
    "Economics Quiz | Learn How Markets and Inflation Work | FinanceQuizzes.com";
  const description =
    "Challenge your understanding of markets, supply and demand, and inflation with this interactive Economics quiz. Build a stronger grasp of how the global economy functions.";
  const url = "https://www.financequizzes.com/learn-economics-quizzes";
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
    ],
  });
}

// Economics question bank
const questionBank = [
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

  // 3️⃣ PRODUCTION & COSTS
  {
    q: "Fixed costs are costs that:",
    options: [
      "Do not vary with the level of output",
      "Change directly with output",
      "Increase only in long run",
      "Exist only in short run",
    ],
    correct: "Do not vary with the level of output",
  },
  {
    q: "Variable costs:",
    options: [
      "Change with the level of output",
      "Stay constant regardless of output",
      "Include rent and insurance",
      "Do not exist in perfect competition",
    ],
    correct: "Change with the level of output",
  },
  {
    q: "What is the law of diminishing returns?",
    options: [
      "Adding more of one input eventually yields smaller output increases",
      "More workers always increase productivity",
      "Output always grows at a constant rate",
      "Profit decreases with scale",
    ],
    correct:
      "Adding more of one input eventually yields smaller output increases",
  },
  {
    q: "What is marginal cost?",
    options: [
      "Cost of producing one additional unit of output",
      "Average cost of all production",
      "Total cost minus fixed cost",
      "Revenue per unit sold",
    ],
    correct: "Cost of producing one additional unit of output",
  },
  {
    q: "In long-run production, all inputs are:",
    options: ["Variable", "Fixed", "Irrelevant", "Government controlled"],
    correct: "Variable",
  },
  {
    q: "Economies of scale occur when:",
    options: [
      "Average cost falls as output increases",
      "Average cost rises as output increases",
      "Production becomes less efficient",
      "Technology becomes outdated",
    ],
    correct: "Average cost falls as output increases",
  },
  {
    q: "What are diseconomies of scale?",
    options: [
      "Rising average costs as a firm grows too large",
      "Falling average costs with growth",
      "Government taxation effects",
      "Reduction in profits only",
    ],
    correct: "Rising average costs as a firm grows too large",
  },
  {
    q: "What is total revenue?",
    options: [
      "Price multiplied by quantity sold",
      "Profit minus costs",
      "Average cost × output",
      "Income before tax",
    ],
    correct: "Price multiplied by quantity sold",
  },
  {
    q: "What does productivity measure?",
    options: [
      "Output per unit of input",
      "Revenue per employee",
      "Profit margin",
      "Return on investment",
    ],
    correct: "Output per unit of input",
  },
  {
    q: "Which cost curve is typically U-shaped?",
    options: [
      "Average total cost curve",
      "Marginal cost curve",
      "Fixed cost line",
      "Variable cost line",
    ],
    correct: "Average total cost curve",
  },

  // 4️⃣ MARKET STRUCTURES
  {
    q: "Which market structure has a single seller?",
    options: [
      "Monopoly",
      "Oligopoly",
      "Perfect competition",
      "Monopolistic competition",
    ],
    correct: "Monopoly",
  },
  {
    q: "Which market structure features many small firms selling identical products?",
    options: ["Perfect competition", "Oligopoly", "Monopoly", "Duopoly"],
    correct: "Perfect competition",
  },
  {
    q: "A few large firms dominating an industry define a:",
    options: ["Oligopoly", "Monopoly", "Perfect competition", "Monopsony"],
    correct: "Oligopoly",
  },
  {
    q: "Price leadership is typical in:",
    options: ["Oligopoly", "Monopoly", "Perfect competition", "Cartel"],
    correct: "Oligopoly",
  },
  {
    q: "What is collusion?",
    options: [
      "Firms agreeing to fix prices or output",
      "Mergers approved by government",
      "Consumers boycotting goods",
      "Foreign trade agreements",
    ],
    correct: "Firms agreeing to fix prices or output",
  },
  {
    q: "Monopolistic competition combines:",
    options: [
      "Many firms with product differentiation",
      "Few firms with identical goods",
      "One firm with regulated prices",
      "Two firms competing equally",
    ],
    correct: "Many firms with product differentiation",
  },
  {
    q: "In a monopoly, barriers to entry are usually:",
    options: ["High", "Low", "Nonexistent", "Temporary"],
    correct: "High",
  },
  {
    q: "What is price discrimination?",
    options: [
      "Charging different prices to different customers for the same product",
      "Illegal pricing practice",
      "Cost-plus pricing",
      "Setting one price for all customers",
    ],
    correct:
      "Charging different prices to different customers for the same product",
  },
  {
    q: "What is a natural monopoly?",
    options: [
      "Industry where one producer is most efficient due to high fixed costs",
      "Government-owned industry",
      "Cartel of firms fixing prices",
      "Short-term price competition",
    ],
    correct:
      "Industry where one producer is most efficient due to high fixed costs",
  },
  {
    q: "What is product differentiation?",
    options: [
      "Making a product distinct from competitors’ offerings",
      "Copying competitor design",
      "Reducing production cost",
      "Standardizing all goods",
    ],
    correct: "Making a product distinct from competitors’ offerings",
  },
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
  {
    q: "What is equilibrium price?",
    options: [
      "Price where demand equals supply",
      "Highest possible market price",
      "Price set by government",
      "Average cost of production",
    ],
    correct: "Price where demand equals supply",
  },

  // --- SUPPLY & DEMAND (11–25)
  {
    q: "What does a downward-sloping demand curve represent?",
    options: [
      "As price falls, quantity demanded increases",
      "As price rises, quantity demanded increases",
      "Quantity demanded is constant",
      "No relationship between price and demand",
    ],
    correct: "As price falls, quantity demanded increases",
  },
  {
    q: "If supply decreases while demand remains the same, what happens to price?",
    options: ["Price rises", "Price falls", "No change", "Demand shifts right"],
    correct: "Price rises",
  },
  {
    q: "What causes a shift in the demand curve?",
    options: [
      "Change in income, tastes, or related goods’ prices",
      "Change in price of the good itself",
      "Change in supply only",
      "Change in government spending",
    ],
    correct: "Change in income, tastes, or related goods’ prices",
  },
  {
    q: "What happens to equilibrium price when both supply and demand increase?",
    options: [
      "Quantity rises, price change depends on magnitude",
      "Price always increases",
      "Price always decreases",
      "Market collapses",
    ],
    correct: "Quantity rises, price change depends on magnitude",
  },
  {
    q: "A complementary good example is:",
    options: [
      "Cars and gasoline",
      "Tea and coffee",
      "Pencils and erasers",
      "Laptops and phones",
    ],
    correct: "Cars and gasoline",
  },
  {
    q: "Elastic demand means:",
    options: [
      "Quantity demanded changes greatly with price",
      "Demand never changes with price",
      "Supply determines price only",
      "Price elasticity equals zero",
    ],
    correct: "Quantity demanded changes greatly with price",
  },
  {
    q: "If elasticity is less than 1, demand is:",
    options: ["Inelastic", "Elastic", "Perfect", "Unitary"],
    correct: "Inelastic",
  },
  {
    q: "A luxury good typically has:",
    options: [
      "Elastic demand",
      "Inelastic demand",
      "No demand",
      "Constant price",
    ],
    correct: "Elastic demand",
  },
  {
    q: "Government-imposed minimum price is called:",
    options: ["Price floor", "Price ceiling", "Equilibrium", "Subsidy"],
    correct: "Price floor",
  },
  {
    q: "Which policy can eliminate a market shortage?",
    options: [
      "Allow price to rise to equilibrium",
      "Set a lower ceiling",
      "Fix higher taxes",
      "Ban exports",
    ],
    correct: "Allow price to rise to equilibrium",
  },
  {
    q: "Producer surplus is:",
    options: [
      "Difference between price received and minimum acceptable price",
      "Difference between cost and profit",
      "Tax collected per unit",
      "Total cost of production",
    ],
    correct: "Difference between price received and minimum acceptable price",
  },
  {
    q: "What is the law of supply?",
    options: [
      "As price rises, quantity supplied rises",
      "As price rises, supply falls",
      "Price and supply are unrelated",
      "Demand creates its own supply",
    ],
    correct: "As price rises, quantity supplied rises",
  },
  {
    q: "What is market surplus?",
    options: [
      "Quantity supplied exceeds quantity demanded",
      "Quantity demanded exceeds supply",
      "Equilibrium achieved",
      "Government subsidy",
    ],
    correct: "Quantity supplied exceeds quantity demanded",
  },
  {
    q: "What effect does a subsidy have on supply?",
    options: [
      "Increases supply by reducing production costs",
      "Reduces demand for goods",
      "Raises equilibrium price",
      "Lowers total output",
    ],
    correct: "Increases supply by reducing production costs",
  },

  // --- PRODUCTION & COST (26–40)
  {
    q: "What does marginal utility measure?",
    options: [
      "Extra satisfaction from consuming one more unit",
      "Total happiness from consumption",
      "Marginal cost per unit",
      "Utility gained from income",
    ],
    correct: "Extra satisfaction from consuming one more unit",
  },
  {
    q: "What happens when marginal cost equals marginal revenue?",
    options: [
      "Profit is maximized",
      "Loss is minimized",
      "Revenue is zero",
      "Demand equals supply",
    ],
    correct: "Profit is maximized",
  },
  {
    q: "What are economies of scale?",
    options: [
      "Cost advantages from increasing output",
      "Increased taxes on production",
      "Decreasing demand",
      "Reduced employment",
    ],
    correct: "Cost advantages from increasing output",
  },
  {
    q: "Fixed costs include:",
    options: [
      "Rent, salaries, insurance",
      "Raw materials",
      "Electricity",
      "Commissions",
    ],
    correct: "Rent, salaries, insurance",
  },
  {
    q: "Which curve typically shows diminishing returns?",
    options: [
      "Marginal product curve",
      "Total cost curve",
      "Demand curve",
      "Supply curve",
    ],
    correct: "Marginal product curve",
  },
  {
    q: "What is total revenue?",
    options: [
      "Price multiplied by quantity sold",
      "Profit before tax",
      "Net worth of company",
      "Gross national income",
    ],
    correct: "Price multiplied by quantity sold",
  },
  {
    q: "What does 'shutdown point' mean for a firm?",
    options: [
      "When price equals average variable cost",
      "When revenue equals fixed cost",
      "When price is below marginal cost",
      "When marginal cost equals total cost",
    ],
    correct: "When price equals average variable cost",
  },
  {
    q: "Profit is maximized when:",
    options: [
      "Marginal cost equals marginal revenue",
      "Average cost equals price",
      "Total cost equals total revenue",
      "Output equals zero",
    ],
    correct: "Marginal cost equals marginal revenue",
  },
  {
    q: "The law of diminishing marginal returns applies in:",
    options: ["Short run", "Long run", "Both short and long run", "Neither"],
    correct: "Short run",
  },
  {
    q: "Which of the following best defines productivity?",
    options: [
      "Output per unit of input",
      "Output per worker only",
      "Output per firm",
      "Revenue growth rate",
    ],
    correct: "Output per unit of input",
  },

  // --- MARKET STRUCTURES (41–60)
  {
    q: "Which market structure has a single seller?",
    options: ["Monopoly", "Oligopoly", "Perfect competition", "Duopoly"],
    correct: "Monopoly",
  },
  {
    q: "Which structure features many small firms selling identical goods?",
    options: ["Perfect competition", "Oligopoly", "Monopoly", "Cartel"],
    correct: "Perfect competition",
  },
  {
    q: "In monopolistic competition, firms compete through:",
    options: [
      "Product differentiation and advertising",
      "Government intervention",
      "Identical pricing",
      "Joint production",
    ],
    correct: "Product differentiation and advertising",
  },
  {
    q: "Oligopolies often engage in:",
    options: [
      "Price leadership and collusion",
      "Perfect pricing",
      "Free entry and exit",
      "Elastic demand",
    ],
    correct: "Price leadership and collusion",
  },
  {
    q: "A natural monopoly arises when:",
    options: [
      "One firm can supply the entire market more efficiently than several",
      "Government bans competition",
      "Products are identical",
      "Demand is perfectly elastic",
    ],
    correct:
      "One firm can supply the entire market more efficiently than several",
  },
  {
    q: "What is a cartel?",
    options: [
      "Group of producers fixing prices or output levels",
      "Trade union",
      "Government regulator",
      "Free trade alliance",
    ],
    correct: "Group of producers fixing prices or output levels",
  },
  {
    q: "Price discrimination involves:",
    options: [
      "Charging different prices to different customers for the same product",
      "Selling at the same price everywhere",
      "Illegal pricing control",
      "Dumping foreign goods",
    ],
    correct:
      "Charging different prices to different customers for the same product",
  },
  {
    q: "What type of market has significant barriers to entry?",
    options: [
      "Monopoly",
      "Perfect competition",
      "Free market",
      "Mixed economy",
    ],
    correct: "Monopoly",
  },
  {
    q: "An example of monopolistic competition industry is:",
    options: ["Restaurants", "Electric utilities", "Airlines", "Telecom"],
    correct: "Restaurants",
  },
  {
    q: "Which structure has interdependence among firms?",
    options: ["Oligopoly", "Perfect competition", "Monopoly", "Monopsony"],
    correct: "Oligopoly",
  },
  // --- FISCAL & MONETARY POLICY (90–110)
  {
    q: "What is fiscal policy primarily concerned with?",
    options: [
      "Government spending and taxation decisions",
      "Central bank interest rates",
      "International trade regulation",
      "Consumer spending habits",
    ],
    correct: "Government spending and taxation decisions",
  },
  {
    q: "Who is responsible for setting monetary policy in most countries?",
    options: [
      "Central bank",
      "Ministry of Finance",
      "World Bank",
      "International Monetary Fund",
    ],
    correct: "Central bank",
  },
  {
    q: "What is the main tool used by central banks to control inflation?",
    options: [
      "Interest rate adjustments",
      "Trade tariffs",
      "Government subsidies",
      "Corporate taxes",
    ],
    correct: "Interest rate adjustments",
  },
  {
    q: "When a government spends more than it collects in revenue, it runs a:",
    options: [
      "Budget deficit",
      "Budget surplus",
      "Balanced budget",
      "Trade deficit",
    ],
    correct: "Budget deficit",
  },
  {
    q: "What is quantitative easing?",
    options: [
      "Central bank buying assets to inject money into the economy",
      "Government reducing spending",
      "Increasing tax rates on imports",
      "Cutting wages to control inflation",
    ],
    correct: "Central bank buying assets to inject money into the economy",
  },
  {
    q: "A contractionary fiscal policy is designed to:",
    options: [
      "Reduce inflation by cutting spending or raising taxes",
      "Increase employment through public investment",
      "Encourage exports",
      "Lower interest rates",
    ],
    correct: "Reduce inflation by cutting spending or raising taxes",
  },
  {
    q: "An expansionary monetary policy aims to:",
    options: [
      "Increase money supply and stimulate growth",
      "Reduce trade deficits",
      "Raise taxes on luxury goods",
      "Decrease government debt",
    ],
    correct: "Increase money supply and stimulate growth",
  },
  {
    q: "What is the primary goal of monetary policy?",
    options: [
      "Price stability and full employment",
      "Eliminate government debt",
      "Increase exports",
      "Reduce inequality",
    ],
    correct: "Price stability and full employment",
  },
  {
    q: "What does ‘crowding out’ refer to?",
    options: [
      "Government borrowing reducing private investment",
      "Rising unemployment in private sector",
      "Imports replacing domestic production",
      "Declining consumer confidence",
    ],
    correct: "Government borrowing reducing private investment",
  },
  {
    q: "A decrease in interest rates generally leads to:",
    options: [
      "Increased borrowing and investment",
      "Lower demand for goods",
      "Reduced inflation",
      "Higher unemployment",
    ],
    correct: "Increased borrowing and investment",
  },
  {
    q: "The Phillips curve shows the relationship between:",
    options: [
      "Inflation and unemployment",
      "Supply and demand",
      "Government spending and GDP",
      "Interest rates and currency value",
    ],
    correct: "Inflation and unemployment",
  },
  {
    q: "What is the term for an overall rise in price levels?",
    options: ["Inflation", "Deflation", "Disinflation", "Stagflation"],
    correct: "Inflation",
  },
  {
    q: "What is stagflation?",
    options: [
      "High inflation and high unemployment occurring together",
      "Falling GDP with stable prices",
      "Economic boom with low inflation",
      "Rapid growth in exports",
    ],
    correct: "High inflation and high unemployment occurring together",
  },
  {
    q: "What is a supply-side policy?",
    options: [
      "Policy to improve production efficiency and output capacity",
      "Increase in government spending",
      "Raising interest rates",
      "Reducing imports",
    ],
    correct: "Policy to improve production efficiency and output capacity",
  },
  {
    q: "A balanced budget means:",
    options: [
      "Government spending equals revenue",
      "No public borrowing allowed",
      "Exports exceed imports",
      "Total debt is zero",
    ],
    correct: "Government spending equals revenue",
  },
  {
    q: "A regressive tax affects which group the most?",
    options: [
      "Low-income earners",
      "High-income earners",
      "Corporations",
      "Exporters",
    ],
    correct: "Low-income earners",
  },
  {
    q: "Progressive taxation means:",
    options: [
      "Higher incomes are taxed at higher rates",
      "Flat rate for all taxpayers",
      "Lower income groups pay more",
      "Taxes based on spending, not income",
    ],
    correct: "Higher incomes are taxed at higher rates",
  },
  {
    q: "An example of automatic stabilizers includes:",
    options: [
      "Unemployment benefits",
      "Export tariffs",
      "Military spending",
      "Foreign aid",
    ],
    correct: "Unemployment benefits",
  },
  {
    q: "What is public debt?",
    options: [
      "Total amount the government owes to creditors",
      "Private sector borrowing",
      "Household savings deficit",
      "Trade surplus",
    ],
    correct: "Total amount the government owes to creditors",
  },
  {
    q: "What happens when a country has hyperinflation?",
    options: [
      "Money loses value rapidly",
      "Prices fall steadily",
      "Exports become cheaper",
      "Debt becomes worthless",
    ],
    correct: "Money loses value rapidly",
  },

  // --- INTERNATIONAL TRADE & EXCHANGE (111–125)
  {
    q: "What is the balance of trade?",
    options: [
      "Difference between exports and imports of goods",
      "Total government spending",
      "Difference between savings and investment",
      "Foreign aid contributions",
    ],
    correct: "Difference between exports and imports of goods",
  },
  {
    q: "A trade surplus occurs when:",
    options: [
      "Exports exceed imports",
      "Imports exceed exports",
      "Foreign investment declines",
      "Exchange rate rises",
    ],
    correct: "Exports exceed imports",
  },
  {
    q: "What is protectionism?",
    options: [
      "Use of tariffs and quotas to limit imports",
      "Encouraging free trade agreements",
      "Privatizing national industries",
      "Expanding labor markets",
    ],
    correct: "Use of tariffs and quotas to limit imports",
  },
  {
    q: "The World Trade Organization (WTO) promotes:",
    options: [
      "Free and fair international trade",
      "Regional trade barriers",
      "Currency devaluation",
      "Government monopolies",
    ],
    correct: "Free and fair international trade",
  },
  {
    q: "What is exchange rate?",
    options: [
      "Value of one currency in terms of another",
      "Interest rate set by banks",
      "Government tax on exports",
      "Foreign borrowing rate",
    ],
    correct: "Value of one currency in terms of another",
  },
  {
    q: "A strong domestic currency tends to:",
    options: [
      "Make exports more expensive and imports cheaper",
      "Boost exports and reduce imports",
      "Raise inflation",
      "Reduce GDP growth",
    ],
    correct: "Make exports more expensive and imports cheaper",
  },
  {
    q: "What is comparative advantage?",
    options: [
      "Ability to produce a good at lower opportunity cost than others",
      "Producing more of every good",
      "Using fewer workers for same output",
      "Lower wage costs per unit",
    ],
    correct: "Ability to produce a good at lower opportunity cost than others",
  },
  {
    q: "Dumping refers to:",
    options: [
      "Selling goods abroad below production cost",
      "Disposing of waste in oceans",
      "Foreign direct investment",
      "Export subsidies",
    ],
    correct: "Selling goods abroad below production cost",
  },
  {
    q: "What is globalization?",
    options: [
      "Increasing economic interdependence among nations",
      "Government ownership of industries",
      "Isolation from trade",
      "Reduction of imports",
    ],
    correct: "Increasing economic interdependence among nations",
  },
  {
    q: "What is foreign direct investment (FDI)?",
    options: [
      "Investment by one country’s firm into business in another country",
      "Purchase of domestic bonds",
      "Government lending abroad",
      "Tourism spending overseas",
    ],
    correct:
      "Investment by one country’s firm into business in another country",
  },
  {
    q: "A devaluation of currency typically leads to:",
    options: [
      "Cheaper exports and costlier imports",
      "Higher import demand",
      "Lower export revenue",
      "Falling inflation",
    ],
    correct: "Cheaper exports and costlier imports",
  },
  {
    q: "The term 'balance of payments' includes:",
    options: [
      "All transactions between residents and the rest of the world",
      "Government spending only",
      "Imports minus exports",
      "Trade of goods only",
    ],
    correct: "All transactions between residents and the rest of the world",
  },
  {
    q: "An example of a trading bloc is:",
    options: ["European Union (EU)", "United Nations", "NATO", "OPEC"],
    correct: "European Union (EU)",
  },
  {
    q: "What is a tariff?",
    options: [
      "Tax on imports",
      "Tax on exports",
      "Government subsidy",
      "Quota on production",
    ],
    correct: "Tax on imports",
  },
  {
    q: "Which organization provides loans to developing countries?",
    options: ["World Bank", "WTO", "UNESCO", "OECD"],
    correct: "World Bank",
  },

  // --- EMPLOYMENT & LABOR MARKETS (126–135)
  {
    q: "What is unemployment rate?",
    options: [
      "Percentage of labor force without jobs but seeking work",
      "Percentage of population unemployed",
      "Ratio of GDP to workers",
      "Number of new jobs created annually",
    ],
    correct: "Percentage of labor force without jobs but seeking work",
  },
  {
    q: "Frictional unemployment refers to:",
    options: [
      "Temporary unemployment between jobs",
      "Long-term joblessness from recession",
      "Technological replacement",
      "Seasonal layoffs",
    ],
    correct: "Temporary unemployment between jobs",
  },
  {
    q: "Structural unemployment occurs when:",
    options: [
      "Skills of workers no longer match available jobs",
      "Workers quit voluntarily",
      "Economy is expanding",
      "Government cuts spending",
    ],
    correct: "Skills of workers no longer match available jobs",
  },
  {
    q: "Full employment means:",
    options: [
      "Only frictional and structural unemployment exist",
      "Zero unemployment",
      "No job switching",
      "All workers have multiple jobs",
    ],
    correct: "Only frictional and structural unemployment exist",
  },
  {
    q: "What is minimum wage?",
    options: [
      "Legal lowest hourly pay employers can offer",
      "Average wage level in economy",
      "Union-negotiated salary",
      "Unemployment benefit",
    ],
    correct: "Legal lowest hourly pay employers can offer",
  },
  {
    q: "What is labor productivity?",
    options: [
      "Output produced per worker or per hour worked",
      "Total workforce size",
      "Wage per hour",
      "Tax per employee",
    ],
    correct: "Output produced per worker or per hour worked",
  },
  {
    q: "What is human capital?",
    options: [
      "Skills and knowledge of workers contributing to productivity",
      "Machinery and equipment owned by firms",
      "Total wages paid to employees",
      "Labor unions’ influence",
    ],
    correct: "Skills and knowledge of workers contributing to productivity",
  },
  {
    q: "Cyclical unemployment is caused by:",
    options: [
      "Downturns in the business cycle",
      "Automation of jobs",
      "Seasonal changes",
      "Legal minimum wage laws",
    ],
    correct: "Downturns in the business cycle",
  },
  {
    q: "Which policy can reduce structural unemployment?",
    options: [
      "Education and retraining programs",
      "Raising import tariffs",
      "Increasing minimum wage",
      "Cutting social benefits",
    ],
    correct: "Education and retraining programs",
  },
  {
    q: "Which indicator best measures labor market tightness?",
    options: [
      "Job vacancies to unemployment ratio",
      "Inflation rate",
      "Interest rate",
      "Budget balance",
    ],
    correct: "Job vacancies to unemployment ratio",
  },

  // --- DEVELOPMENT & SUSTAINABILITY (136–145)
  {
    q: "What is GDP per capita?",
    options: [
      "GDP divided by population",
      "Government debt ratio",
      "Exports per citizen",
      "Income of the richest 10%",
    ],
    correct: "GDP divided by population",
  },
  {
    q: "What is the Human Development Index (HDI)?",
    options: [
      "Measure combining income, education, and life expectancy",
      "GDP growth rate",
      "Employment rate measure",
      "Inflation-adjusted index",
    ],
    correct: "Measure combining income, education, and life expectancy",
  },
  {
    q: "What does sustainable development aim for?",
    options: [
      "Meeting present needs without compromising future generations",
      "Maximizing industrial output",
      "Rapid urbanization",
      "Short-term profits",
    ],
    correct: "Meeting present needs without compromising future generations",
  },
  {
    q: "Foreign aid is intended to:",
    options: [
      "Support economic growth in developing countries",
      "Reduce developed nations' trade deficits",
      "Increase domestic inflation",
      "Encourage currency depreciation",
    ],
    correct: "Support economic growth in developing countries",
  },
  {
    q: "What is economic inequality?",
    options: [
      "Uneven distribution of income and wealth",
      "Equal wages for all jobs",
      "High government spending",
      "Trade deficit",
    ],
    correct: "Uneven distribution of income and wealth",
  },
  {
    q: "What is microfinance?",
    options: [
      "Small loans provided to low-income entrepreneurs",
      "Large-scale government lending",
      "Corporate investment fund",
      "Short-term stock trading",
    ],
    correct: "Small loans provided to low-income entrepreneurs",
  },
  {
    q: "What is brain drain?",
    options: [
      "Migration of skilled workers to other countries",
      "Decline in birth rate",
      "Reduction in education funding",
      "Loss of corporate profits",
    ],
    correct: "Migration of skilled workers to other countries",
  },
  {
    q: "What is green GDP?",
    options: [
      "GDP adjusted for environmental damage and resource depletion",
      "GDP of agriculture sector",
      "GDP growth from renewables",
      "Government green spending",
    ],
    correct: "GDP adjusted for environmental damage and resource depletion",
  },
  {
    q: "What is carbon pricing?",
    options: [
      "Charging emitters for greenhouse gas emissions",
      "Taxing income based on carbon use",
      "Pricing renewable energy equipment",
      "Eliminating fossil fuel subsidies",
    ],
    correct: "Charging emitters for greenhouse gas emissions",
  },
  {
    q: "What is the main goal of sustainable finance?",
    options: [
      "Directing investments toward environmentally and socially responsible projects",
      "Maximizing short-term profit",
      "Reducing taxes on industries",
      "Encouraging fossil fuel expansion",
    ],
    correct:
      "Directing investments toward environmentally and socially responsible projects",
  },

  // --- BEHAVIORAL & MODERN ECONOMICS (146–150)
  {
    q: "What is behavioral economics?",
    options: [
      "Study of how psychology influences economic decision-making",
      "Analysis of government budgets",
      "Theory of perfect competition",
      "Study of financial accounting",
    ],
    correct: "Study of how psychology influences economic decision-making",
  },
  {
    q: "What is the endowment effect?",
    options: [
      "People value things more once they own them",
      "Preference for cheaper goods",
      "Bias toward saving over spending",
      "Aversion to financial risk",
    ],
    correct: "People value things more once they own them",
  },
  {
    q: "What is loss aversion?",
    options: [
      "People dislike losses more than they value equivalent gains",
      "Preference for higher wages",
      "Fear of unemployment",
      "Avoidance of taxes",
    ],
    correct: "People dislike losses more than they value equivalent gains",
  },
  {
    q: "Which term describes the digital delivery of traditional economic services?",
    options: [
      "Digital economy",
      "Crypto mining",
      "E-commerce inflation",
      "Blockchain subsidy",
    ],
    correct: "Digital economy",
  },
  {
    q: "What is cryptocurrency?",
    options: [
      "Digital currency using cryptography for security and decentralized control",
      "Central bank-issued digital cash",
      "Private company loyalty token",
      "Online bank account",
    ],
    correct:
      "Digital currency using cryptography for security and decentralized control",
  },
  {
    q: "What is the gig economy?",
    options: [
      "Labor market with short-term freelance or contract work",
      "Traditional full-time employment system",
      "Government job programs",
      "Unionized industry model",
    ],
    correct: "Labor market with short-term freelance or contract work",
  },
  {
    q: "What is artificial intelligence’s role in economics today?",
    options: [
      "Improving data analysis and market forecasting",
      "Replacing central banks",
      "Raising inflation",
      "Eliminating unemployment",
    ],
    correct: "Improving data analysis and market forecasting",
  },
  {
    q: "What is network externality?",
    options: [
      "When a product’s value increases as more people use it",
      "When the government regulates digital networks",
      "When firms share production resources",
      "When costs rise due to network congestion",
    ],
    correct: "When a product’s value increases as more people use it",
  },
];

export default function EconomicsQuiz({}: Route.ComponentProps) {
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
    const saved = localStorage.getItem("economicsQuizStats");
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
      localStorage.setItem("economicsQuizStats", JSON.stringify(stats));
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Finance Quizzes",
        url: "https://www.financequizzes.com/",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          ...faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
          ...questionBank.map((q) => ({
            "@type": "Question",
            name: q.q,
            acceptedAnswer: { "@type": "Answer", text: q.correct },
          })),
        ],
      },
    ],
  };

  return (
    <main className="bg-white text-[#0B1B2B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* QUIZ SECTION FIRST */}
      <section
        className="relative bg-[#F9FBFD] py-10 px-4 border-b border-slate-200"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #E5E9EE 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto w-full sm:w-[720px] text-left rounded-3xl border border-slate-200 bg-white px-10 py-8 shadow-xl">
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
        id="economics-article"
        className="mx-auto max-w-4xl px-6 py-20 text-center border-b border-slate-200"
      >
        <h1 className="text-4xl font-extrabold text-[#0B1B2B] mb-6">
          Economics Made Simple: How Supply, Demand, and Growth Interact
        </h1>

        <div className="mx-auto max-w-3xl text-left space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg">
            Economics explains how societies allocate resources, make production
            choices, and respond to scarcity. Understanding basic principles
            like inflation, GDP, and unemployment gives you insight into
            everything from personal finance to global trade.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">
              Key Areas to Focus On
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-medium">Microeconomics:</span> consumer
                behavior, supply and demand, and price formation.
              </li>
              <li>
                <span className="font-medium">Macroeconomics:</span> GDP growth,
                inflation, unemployment, and fiscal policy.
              </li>
              <li>
                <span className="font-medium">Trade & Globalization:</span> how
                markets connect and respond to tariffs and exchange rates.
              </li>
              <li>
                <span className="font-medium">Monetary Policy:</span> how
                central banks influence money supply and interest rates.
              </li>
            </ul>
          </div>

          <p>
            Learning these foundations helps you interpret headlines, analyze
            markets, and make smarter decisions about saving, investing, and
            spending in an interconnected world.
          </p>

          {/* Citations */}
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
              Citations & References
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                Mankiw, N. G. (2021). *Principles of Economics*. Cengage
                Learning.
              </li>
              <li>
                Krugman, P., & Wells, R. (2020). *Economics*. Worth Publishers.
              </li>
              <li>
                IMF. (2023). *World Economic Outlook: Inflation and Growth
                Trends.*
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ANSWERS */}
      <section id="quiz-answers" className="mx-auto max-w-5xl px-6 pt-16">
        <h3 className="text-3xl font-bold text-[#0B1B2B] mb-4 text-center">
          Economics Quiz Answers
        </h3>
        <p className="text-slate-700 text-center max-w-2xl mx-auto mb-10">
          Review all questions and answers to strengthen your understanding of
          economic concepts and systems.
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
    </main>
  );
}
