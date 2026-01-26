export function EconomicsArticle() {
  return (
    <section
      id="economics-article"
      className="mx-auto max-w-4xl px-6 py-20 text-center border-b border-slate-200"
    >
      <h1 className="text-4xl font-extrabold text-[#0B1B2B] mb-6">
        Economics Made Simple: How Supply, Demand, and Growth Interact
      </h1>

      <div className="mx-auto max-w-3xl text-left space-y-6 text-slate-700 leading-relaxed">
        <p className="text-lg">
          Economics explains how societies allocate resources, make production
          choices, and respond to scarcity. Understanding basic principles
          like inflation, GDP, and unemployment gives you insight into
          everything from personal finance to global trade.
        </p>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">
            Key Areas to Focus On
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-medium">Microeconomics:</span> consumer
              behavior, supply and demand, and price formation.
            </li>
            <li>
              <span className="font-medium">Macroeconomics:</span> GDP growth,
              inflation, unemployment, and fiscal policy.
            </li>
            <li>
              <span className="font-medium">Trade & Globalization:</span> how
              markets connect and respond to tariffs and exchange rates.
            </li>
            <li>
              <span className="font-medium">Monetary Policy:</span> how
              central banks influence money supply and interest rates.
            </li>
          </ul>
        </div>

        <p>
          Learning these foundations helps you interpret headlines, analyze
          markets, and make smarter decisions about saving, investing, and
          spending in an interconnected world.
        </p>

        <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
            Citations & References
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              Mankiw, N. G. (2021). <em>Principles of Economics</em>. Cengage
              Learning.
            </li>
            <li>
              Krugman, P., & Wells, R. (2020). <em>Economics</em>. Worth
              Publishers.
            </li>
            <li>IMF. (2023). <em>World Economic Outlook</em>.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
