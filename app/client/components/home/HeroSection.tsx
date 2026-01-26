
type HeroSectionProps = {
  primaryCtaHref: string;
  personalFinanceHref: string;
  investingHref: string;
};

export function HeroSection({
  primaryCtaHref,
  personalFinanceHref,
  investingHref,
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
            Free Finance Quizzes
          </h1>
          <p className="max-w-2xl mx-auto text-slate-700 text-base sm:text-lg leading-relaxed">
            Take quick, focused quizzes in personal finance, investing, and banking.
            Get a simple score summary and move on. No signup.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={primaryCtaHref}
              className="rounded-xl bg-teal-700 px-6 py-3 text-white font-semibold text-base hover:bg-teal-800 transition"
            >
              Start the General Finance Quiz
            </a>
            <a
              href={personalFinanceHref}
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-[#0B1B2B] font-semibold text-base hover:bg-slate-50 transition"
            >
              Take a Personal Finance Quiz
            </a>
            <a
              href={investingHref}
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-[#0B1B2B] font-semibold text-base hover:bg-slate-50 transition"
            >
              Take an Investing Quiz
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-600">
            Looking for specific topics like budgeting, saving, or retirement basics?
            Those focused quiz pages are being added next.
          </p>
        </div>
      </div>
    </section>
  );
}
