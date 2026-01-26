type HeroSectionProps = {
  financeChallengeHref: string;
  personalFinanceChallengeHref: string;
  investingChallengeHref: string;
  financeStreakHref: string;
  personalFinanceStreakHref: string;
  investingStreakHref: string;
};

export function HeroSection({
  financeChallengeHref,
  personalFinanceChallengeHref,
  investingChallengeHref,
  financeStreakHref,
  personalFinanceStreakHref,
  investingStreakHref,
}: HeroSectionProps) {
  return (
    <section
      className="relative bg-[#F9FBFD] pt-10 pb-14 px-4 border-b border-slate-200"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, #E5E9EE 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mb-4 inline-block rounded-full bg-teal-100 px-4 pt-1 pb-2 text-xs font-semibold text-teal-700">
            Test your finance and investing knowledge
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B2B] mb-5 tracking-tight">
            Finance &amp; Investing Quizzes
          </h1>

          <p className="max-w-2xl mx-auto text-slate-700 text-base sm:text-lg leading-relaxed">
            Take a 10-question challenge quiz and get a simple score summary. Prefer quick play?
            Try a 3-question streak.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={financeChallengeHref}
              className="rounded-xl bg-teal-700 px-6 py-3 text-white font-semibold text-base hover:bg-teal-800 transition"
            >
              Take the 10-Question Finance Quiz
            </a>
            <a
              href={personalFinanceChallengeHref}
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-[#0B1B2B] font-semibold text-base hover:bg-slate-50 transition"
            >
              Personal Finance Challenge
            </a>
            <a
              href={investingChallengeHref}
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-[#0B1B2B] font-semibold text-base hover:bg-slate-50 transition"
            >
              Investing Challenge
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-600">
            Or play a 3-question streak:&nbsp;
            <a href={financeStreakHref} className="underline hover:no-underline">
              Finance
            </a>
            ,&nbsp;
            <a
              href={personalFinanceStreakHref}
              className="underline hover:no-underline"
            >
              Personal Finance
            </a>
            ,&nbsp;
            <a href={investingStreakHref} className="underline hover:no-underline">
              Investing
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
