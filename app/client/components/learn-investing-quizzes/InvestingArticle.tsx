export function InvestingArticle() {
  return (
    <section
      id="investing-article"
      className="mx-auto max-w-4xl px-6 py-20 text-center border-b border-slate-200"
    >
      <h1 className="text-4xl font-extrabold text-[#0B1B2B] mb-6">
        Investing 101: Building Wealth Through Smart Financial Choices
      </h1>

      <div className="mx-auto max-w-3xl text-left space-y-6 text-slate-700 leading-relaxed">
        <p className="text-lg">
          Investing is about putting your money to work so it grows over time.
          From stocks and bonds to ETFs and real estate, the key is
          understanding risk, diversification, and the power of compounding
          returns.
        </p>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">
            Core Investing Principles
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-medium">Start early:</span> compounding
              works best when you give it time.
            </li>
            <li>
              <span className="font-medium">Diversify:</span> avoid putting
              all your money into one company or sector.
            </li>
            <li>
              <span className="font-medium">Stay consistent:</span> regular
              contributions build wealth steadily.
            </li>
            <li>
              <span className="font-medium">Manage risk:</span> balance safer
              assets with growth opportunities.
            </li>
          </ul>
        </div>

        <p>
          Investing isn’t about timing the market-it’s about spending time in
          the market. By understanding how assets behave and sticking to a
          disciplined plan, you can steadily grow your financial future.
        </p>

        <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
            Citations & References
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              Malkiel, B. G. (2021). <em>A Random Walk Down Wall Street.</em>{" "}
              W.W. Norton & Company.
            </li>
            <li>
              Graham, B. (2006). <em>The Intelligent Investor.</em> Harper
              Business.
            </li>
            <li>
              CFA Institute. (2023). <em>Principles of Investment Management.</em>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
