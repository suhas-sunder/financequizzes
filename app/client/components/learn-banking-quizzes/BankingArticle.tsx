export function BankingArticle() {
  return (
    <section
      id="banking-article"
      className="mx-auto max-w-4xl px-6 py-20 text-center border-b border-slate-200"
    >
      <h1 className="text-4xl font-extrabold text-[#0B1B2B] mb-6">
        Banking & Credit: Practical Basics That Shape Your Everyday Money
      </h1>

      <div className="mx-auto max-w-3xl text-left space-y-6 text-slate-700 leading-relaxed">
        <p className="text-lg">
          Banking and credit systems determine how you save, spend, borrow,
          and build a financial reputation. Knowing how checking and savings
          accounts work, how interest accumulates, and how credit scores are
          calculated gives you a real advantage when negotiating loan terms or
          avoiding expensive debt.
        </p>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">
            What to focus on
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-medium">Interest math:</span> APR vs APY,
              fixed vs variable rates.
            </li>
            <li>
              <span className="font-medium">Credit profile:</span> payment
              history, utilization, age of accounts.
            </li>
            <li>
              <span className="font-medium">Loan structure:</span> mortgages,
              amortization, refinancing.
            </li>
            <li>
              <span className="font-medium">Banking safety:</span> FDIC/NCUA
              limits and why statements matter.
            </li>
          </ul>
        </div>

        <p>
          As you practice with the quiz above, pay attention to the patterns
          behind each correct answer. This builds real decision intuition you
          can apply to your own accounts, credit cards, and future loan
          applications.
        </p>

        <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
            Citations & References
          </h3>
          <ul className="text-sm space-y-2">
            <li>FDIC. Deposit Insurance FAQs and coverage limits.</li>
            <li>FICO. Credit score factors and their relative weights.</li>
            <li>
              Consumer Financial Protection Bureau. Credit cards, APR, and
              disclosures.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
