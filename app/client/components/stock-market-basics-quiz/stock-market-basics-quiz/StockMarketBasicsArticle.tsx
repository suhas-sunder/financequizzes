import {
  STOCK_MARKET_BASICS_QUIZ_CATEGORIES,
  STOCK_MARKET_BASICS_QUIZ_INTENT,
} from "./stockMarketBasicsQuizData";

export function StockMarketBasicsArticle() {
  const { topicLabel, focus } = STOCK_MARKET_BASICS_QUIZ_INTENT;

  const chips = STOCK_MARKET_BASICS_QUIZ_CATEGORIES.slice(0, 8).map((c) => c.label);

  return (
    <section
      id="about-this-quiz"
      className="mx-auto border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-6 pt-12">
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            FinanceQuizzes
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1B2B] tracking-tight">
            About this {topicLabel.toLowerCase()} quiz
          </h2>

          <p className="mx-auto max-w-2xl text-slate-600">
            A fast, definitional check of stock market language. Take the quiz,
            then use this section to understand what is being tested and how to
            improve.
          </p>

          <div className="mx-auto mt-2 flex max-w-3xl flex-wrap justify-center gap-2">
            {chips.map((label) => (
              <span
                key={label}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* Content grid */}
        <div className="mx-auto mt-14 max-w-5xl grid grid-cols-1 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start gap-4 p-8">
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#0B1B2B]">
                  What this quiz tests
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  This quiz evaluates your ability to recognize and interpret
                  common stock market terms and structural concepts. The focus
                  is on definitions and how markets are described, not trading
                  behavior or live market information.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Each question checks whether a market label or phrase
                  registers correctly based on context, similar to how it
                  appears in basic investing education, market summaries, and
                  glossary-style explanations.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  It is designed for learners who want to verify that core stock
                  market vocabulary is clear and consistent. The quiz avoids
                  tickers, charts, live pricing, and prediction.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start gap-4 p-8">
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#0B1B2B]">
                  Core stock market concepts covered
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Stock markets have a shared vocabulary that describes what
                  stocks represent, how buying and selling works at a high
                  level, and how uncertainty is discussed. Small wording
                  differences can change what a term implies about structure or
                  role.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This quiz emphasizes structural and definitional concepts
                  including ownership language, exchanges, price discovery, and
                  risk/return framing. Focus:{" "}
                  <span className="font-semibold text-[#0B1B2B]">{focus}</span>
                </p>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Structure
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Exchanges, listings, liquidity, and price discovery.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Ownership
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Shares, equity, market cap, dividends, shareholders.
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Risk language
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Volatility, diversification, expected return, uncertainty.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start gap-4 p-8">
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#0B1B2B]">
                  Why these concepts matter
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Misreading stock market terms can lead to false assumptions
                  about what is owned, how prices form, or what risk means. For
                  example, confusing an index with a single stock or treating an
                  expected return as a guarantee changes how market information
                  is interpreted.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Knowing what common labels mean helps you read market
                  explanations accurately and spot when a claim is about
                  structure, not a prediction.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start gap-4 p-8">
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0B1B2B]">
                  Common mistakes and misconceptions
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Many misunderstandings come from treating market terms as
                  interchangeable. In reality, they describe different roles
                  (broker vs exchange), different concepts (volatility vs risk),
                  or different groupings (index vs company).
                </p>

                <ul className="space-y-3">
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Treating an index like a single stock
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      An index is a grouping used to represent part of the
                      market. It is not one company on its own.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Confusing volatility with a guaranteed loss
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Volatility describes movement, not a promised outcome. It
                      is uncertainty, not certainty.
                    </div>
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-bold text-[#0B1B2B]">
                      Reading “expected” as “guaranteed”
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      “Expected return” is a conceptual average, not a promise.
                    </div>
                  </li>
                </ul>

                <p className="text-slate-700 leading-relaxed">
                  This quiz highlights those problem areas by presenting
                  terminology in realistic, definitional contexts.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start gap-4 p-8">
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#0B1B2B]">
                  How to improve your results
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Improve by focusing on definitions and roles: what a term
                  literally means, what it represents, and how it fits into
                  market structure.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Retaking the quiz after reviewing basic market vocabulary can
                  help reinforce accurate interpretation.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start gap-4 p-8">
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#0B1B2B]">
                  Exploring related topics
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Stock market basics connects to investing, but this page stays
                  structural and definitional. It avoids price prediction and
                  trading tactics.
                </p>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-bold text-[#0B1B2B]">
                    Quick next steps
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                    <li>
                      Retake the quiz and aim for consistent scores across runs,
                      not one lucky result.
                    </li>
                    <li>
                      If a term felt unclear, look it up in market-structure
                      context (role and definition language matters).
                    </li>
                    <li>
                      Explore more topic-specific quizzes to build depth one
                      concept at a time.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
