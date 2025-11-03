import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Home page
  index("routes/home.tsx"),

  // Quiz category pages
  route(
    "learn-personal-finance-quizzes",
    "routes/learn-personal-finance-quizzes.tsx"
  ),
  route("learn-investing-quizzes", "routes/learn-investing-quizzes.tsx"),
  route("learn-banking-quizzes", "routes/learn-banking-quizzes.tsx"),
  route("learn-business-quizzes", "routes/learn-business-quizzes.tsx"),
  route("learn-economics-quizzes", "routes/learn-economics-quizzes.tsx"),
  route("learn-history-quizzes", "routes/learn-history-quizzes.tsx"),
  route("learn-insurance-quizzes", "routes/learn-insurance-quizzes.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("terms-of-service", "routes/terms-of-service.tsx"),

  // Optionally, a 404 or fallback route
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
