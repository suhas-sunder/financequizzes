import { useRouteLoaderData, NavLink } from "react-router";

export default function Footer() {
  const rootData = useRouteLoaderData("root") as
    | { message?: string }
    | undefined;
  const message = rootData?.message;

  return (
    <footer className="border-t border-slate-200 bg-[#0B1B2B] text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left: Brand */}
          <div className="font-semibold text-white text-lg tracking-tight">
            © {new Date().getFullYear()} FinanceQuizzes
          </div>

          {/* Center: Neutral description / message */}
          <div className="text-slate-400 text-center sm:text-left flex-1 sm:px-6">
            {message ? (
              <span aria-live="polite">{message}</span>
            ) : (
              <span className="text-xs leading-relaxed">
                This site offers short quizzes that test general finance and
                investing concepts. It does not provide financial, legal, or
                investment advice.
              </span>
            )}
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-end">
            <NavLink
              to="/privacy-policy"
              className="text-slate-300 hover:text-teal-300 transition-colors"
            >
              Privacy Policy
            </NavLink>
            <span className="hidden sm:inline text-slate-500">·</span>
            <NavLink
              to="/terms-of-service"
              className="text-slate-300 hover:text-teal-300 transition-colors"
            >
              Terms of Service
            </NavLink>
            <span className="hidden sm:inline text-slate-500">·</span>
            <NavLink
              to="/cookies-policy"
              className="text-slate-300 hover:text-teal-300 transition-colors"
            >
              Cookies
            </NavLink>
            <NavLink
              to="/contact"
              className="text-slate-300 hover:text-teal-300 transition-colors"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
