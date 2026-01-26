export function BusinessArticle() {
  return (
    <section
      id="business-article"
      className="mx-auto max-w-4xl px-6 py-20 text-center border-b border-slate-200"
    >
      <h1 className="text-4xl font-extrabold text-[#0B1B2B] mb-6">
        Understanding Business Finance: From Profits to Performance
      </h1>
      <div className="mx-auto max-w-3xl text-left space-y-6 text-slate-700 leading-relaxed">
        <p className="text-lg">
          Business finance is the backbone of every organization. It covers
          everything from managing operating costs and analyzing cash flow to
          making investment decisions and forecasting profits. A strong grasp
          of business finance enables better planning, smarter budgeting, and
          sustainable growth.
        </p>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">
            Key Concepts to Learn
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-medium">Financial statements:</span>{" "}
              Balance sheet, income statement, and cash flow report.
            </li>
            <li>
              <span className="font-medium">Profitability ratios:</span> Gross
              margin, operating margin, and ROI.
            </li>
            <li>
              <span className="font-medium">Working capital:</span> Managing
              liquidity and short-term obligations.
            </li>
            <li>
              <span className="font-medium">Capital budgeting:</span>{" "}
              Evaluating investments and risk.
            </li>
          </ul>
        </div>

        <p>
          Understanding these principles helps you read company reports,
          identify strengths and weaknesses, and make strategic decisions
          whether you're a manager, investor, or student.
        </p>

        <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
            Citations & References
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              Brigham, E. & Houston, J. (2021). <em>Fundamentals of Financial
              Management.</em>
            </li>
            <li>
              Weygandt, Kimmel & Kieso. (2020). <em>Financial Accounting, IFRS
              Edition.</em>
            </li>
            <li>
              Harvard Business Review. (2022). <em>Key Metrics Every Manager
              Should Know.</em>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
