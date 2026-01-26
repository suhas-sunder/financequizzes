export function HistoryArticle() {
  return (
    <section
      id="history-article"
      className="mx-auto max-w-4xl px-6 py-20 text-center border-b border-slate-200"
    >
      <h1 className="text-4xl font-extrabold text-[#0B1B2B] mb-6">
        The Evolution of Money: From Metal Coins to Digital Wallets
      </h1>

      <div className="mx-auto max-w-3xl text-left space-y-6 text-slate-700 leading-relaxed">
        <p className="text-lg">
          The story of money is the story of human civilization itself. As
          trade expanded, societies needed a reliable way to exchange value
          beyond barter. From early metal coins to paper currency and now
          digital assets, money has continuously adapted to reflect
          technological and economic change.
        </p>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">
            Key Milestones in Financial History
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-medium">Barter to coins:</span> trade
              simplified through standardized metal money.
            </li>
            <li>
              <span className="font-medium">Paper money:</span> originated in
              China for easier large transactions.
            </li>
            <li>
              <span className="font-medium">Central banking:</span>{" "}
              institutions emerged to stabilize currencies and manage
              inflation.
            </li>
            <li>
              <span className="font-medium">Digital finance:</span> electronic
              transfers, credit cards, and cryptocurrencies revolutionized
              value exchange.
            </li>
          </ul>
        </div>

        <p>
          Studying how money evolved helps explain modern banking systems,
          financial regulation, and even the social trust that keeps economies
          functioning across borders.
        </p>

        <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
            Citations & References
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              Davies, G. (2016). <em>A History of Money: From Ancient Times to
              the Present Day.</em> University of Wales Press.
            </li>
            <li>
              Ferguson, N. (2008). <em>The Ascent of Money: A Financial History
              of the World.</em> Penguin Books.
            </li>
            <li>
              BIS. (2023). <em>Central Bank Digital Currencies: Principles and
              Design.</em>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
