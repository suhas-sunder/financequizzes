import { useRouteLoaderData, NavLink } from "react-router";

export default function Footer() {
  const rootData = useRouteLoaderData("root") as
    | { message?: string }
    | undefined;
  const message = rootData?.message;

  return (
    <>
      {/* Educational Disclaimer */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-teal-900">
            Educational Disclaimer
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-800 leading-relaxed">
            FinanceQuizzes provides educational content for learning and
            informational purposes only. Nothing on this site constitutes
            financial, legal, or investment advice. Always verify details and
            make decisions based on your own research or with guidance from
            qualified professionals.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-slate-200 bg-[#0B1B2B] text-slate-300">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Left side: Brand */}
            <div className="font-semibold text-white text-lg tracking-tight">
              © {new Date().getFullYear()} FinanceQuizzes
            </div>

            {/* Center: Tagline or message */}
            <div className="text-slate-400 text-center sm:text-left flex-1 sm:px-6">
              {message ? (
                <span aria-live="polite">{message}</span>
              ) : (
                <span>
                  🗺️ Empowering financial literacy through interactive learning
                </span>
              )}
            </div>

            {/* Right side: Links */}
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
              <a
                href="mailto:support@financequizzes.com"
                className="text-slate-300 hover:text-teal-300 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
