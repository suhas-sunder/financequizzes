export function InsuranceArticle() {
  return (
    <section
      id="insurance-article"
      className="mx-auto max-w-4xl px-6 py-20 text-center border-b border-slate-200"
    >
      <h1 className="text-4xl font-extrabold text-[#0B1B2B] mb-6">
        Insurance and Risk Management: Protecting Your Financial Future
      </h1>

      <div className="mx-auto max-w-3xl text-left space-y-6 text-slate-700 leading-relaxed">
        <p className="text-lg">
          Insurance is a safety net that protects your assets, income, and
          loved ones from unexpected financial shocks. Understanding how
          premiums, deductibles, and coverage limits interact is key to making
          smart policy choices.
        </p>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">
            Key Insurance Concepts
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-medium">Premium:</span> what you pay
              monthly or annually to maintain coverage.
            </li>
            <li>
              <span className="font-medium">Deductible:</span> the
              out-of-pocket amount you must pay before your insurer
              contributes.
            </li>
            <li>
              <span className="font-medium">Coverage limit:</span> the maximum
              your insurer will pay for a covered loss.
            </li>
            <li>
              <span className="font-medium">Policy type:</span> auto, health,
              life, renters, and disability each serving a different
              protection goal.
            </li>
          </ul>
        </div>

        <p>
          Smart insurance decisions are about balancing cost with risk
          protection. Always compare coverage levels and consider your
          emergency savings before choosing deductibles or add-ons.
        </p>

        <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
            Citations & References
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              Insurance Bureau of Canada. (2024). <em>Understanding Your Policy.</em>
            </li>
            <li>OECD. (2023). <em>Global Insurance Market Trends.</em></li>
            <li>
              Consumer Financial Protection Bureau. (2023). <em>Insurance and Risk Literacy.</em>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
