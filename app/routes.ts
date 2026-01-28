import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Home page
  index("routes/home.tsx"),
  route("finance-quiz", "routes/finance-quiz.tsx"),
  route("investing-quiz", "routes/investing-quiz.tsx"),
  route("budgeting-quiz", "routes/budgeting-quiz.tsx"),
  route("saving-money-quiz", "routes/saving-money-quiz.tsx"),
  route("financial-planning-quiz", "routes/financial-planning-quiz.tsx"),
  route("stock-market-basics-quiz", "routes/stock-market-basics-quiz.tsx"),
  route("retirement-basics-quiz", "routes/retirement-basics-quiz.tsx"),
  route("banking-and-credit-quiz", "routes/banking-and-credit-quiz.tsx"),
  route("economics-quiz", "routes/economics-quiz.tsx"),
  route("business-finance-quiz", "routes/business-finance-quiz.tsx"),
  route("insurance-basics-quiz", "routes/insurance-basics-quiz.tsx"),
  route("finance-quiz-questions", "routes/finance-quiz-questions.tsx"),

  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("terms-of-service", "routes/terms-of-service.tsx"),
  route("cookies-policy", "routes/cookies-policy.tsx"),
  route("contact", "routes/contact.tsx"),

  // Optionally, a 404 or fallback route
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
