import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Home page
  index("routes/home.tsx"),
  route("finance-quiz", "routes/finance-quiz.tsx"),
  route("personal-finance-quiz", "routes/personal-finance-quiz.tsx"),

  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("terms-of-service", "routes/terms-of-service.tsx"),

  // Optionally, a 404 or fallback route
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
