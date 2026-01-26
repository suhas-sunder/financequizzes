export function PersonalFinanceArticle() {
  return (
<section
        id="personal-finance-article"
        className="mx-auto max-w-4xl px-6 py-20 text-center border-b border-slate-200"
      >
        <h1 className="text-4xl font-extrabold text-[#0B1B2B] mb-6">
          Personal Finance Basics: Building Habits for Financial Freedom
        </h1>

        <div className="mx-auto max-w-3xl text-left space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg">
            Personal finance is about managing your money so it works for you.
            Whether you’re budgeting, saving for emergencies, paying off debt,
            or investing for the future, financial literacy gives you control
            over your life goals.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">
              Key Financial Skills to Master
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-medium">Budgeting:</span> track income,
                expenses, and spending goals.
              </li>
              <li>
                <span className="font-medium">Saving:</span> build an emergency
                fund and save consistently for future needs.
              </li>
              <li>
                <span className="font-medium">Debt management:</span> understand
                interest rates and prioritize high-interest repayment.
              </li>
              <li>
                <span className="font-medium">Goal setting:</span> align your
                financial habits with short- and long-term goals.
              </li>
            </ul>
          </div>

          <p>
            Mastering personal finance doesn’t happen overnight-but small,
            consistent changes in how you spend, save, and plan can have a huge
            long-term impact on your freedom and security.
          </p>

          {/* Citations */}
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
              Citations & References
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                Ramsey, D. (2013). *The Total Money Makeover.* Thomas Nelson
                Publishing.
              </li>
              <li>
                O'Neill, B. (2020). *Personal Finance: Managing Your Money and
                Building Wealth.* Pearson Education.
              </li>
              <li>
                CFPB. (2023). *Financial Literacy Resources for Consumers.*
              </li>
            </ul>
          </div>
        </div>
      </section>
  );
}
