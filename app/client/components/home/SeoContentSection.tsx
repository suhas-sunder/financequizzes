import { Link } from "react-router";

export function SeoContentSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 border-b border-slate-200">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1B2B]">
          Finance quizzes that check real world basics
        </h2>

        <div className="mt-6 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
          <p>
            FinanceQuizzes is built for one job: help you confirm what you actually know about money, credit, investing,
            and the economy. These are not long lessons and they are not trivia for obscure facts. Each page is a
            10 question multiple choice challenge designed to surface gaps fast, then let you try again with a
            different mix of questions.
          </p>

          <details className="rounded-2xl border border-slate-200 bg-[#F9FBFD] p-5 sm:p-6">
            <summary className="cursor-pointer list-none font-semibold text-[#0B1B2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 hover:opacity-90 transition">
              Read the full guide and topic picks
            </summary>

            <div className="mt-4 space-y-5">
              <p>
                If you searched for a <strong>finance quiz</strong>, a <strong>budgeting quiz</strong>, an{" "}
                <strong>investing quiz</strong>, or an <strong>economics quiz</strong>, you are in the right place.
              </p>

              <p>
                Most people learn finance in fragments: a headline about inflation, a conversation about credit cards,
                a bank form, a workplace benefits choice, or a first investing account. That is why these quizzes focus
                on the concepts that show up in everyday decisions. You will see questions about trade offs, incentives,
                interest, risk, diversification, budgets, and how prices send signals. The goal is baseline
                understanding, not academic mastery.
              </p>

              <h3 className="text-2xl font-bold text-[#0B1B2B] pt-2">How the 10 question format works</h3>
              <p>
                Each quiz is a short run of ten questions. You answer once per question, get immediate feedback, and
                finish with a clear score summary. Runs are randomized from a larger pool so repeating a quiz is useful
                practice instead of memorizing the order. Many quizzes also show simple in run stats like how many you
                have answered and how many you have correct so far.
              </p>

              <p>
                This structure matches what most searchers want: a quick way to test knowledge and get answers. It is
                also a better fit than a single themed worksheet because it can adapt to broad intent like finance quiz
                while still staying beginner friendly.
              </p>

              <h3 className="text-2xl font-bold text-[#0B1B2B] pt-2">Pick a topic that matches your goal</h3>

              <p>
                If you want the broadest check, start with the{" "}
                <Link
                  to="/finance-quiz"
                  prefetch="intent"
                  className="underline cursor-pointer hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                >
                  Finance Quiz
                </Link>
                . It covers multiple areas without going deep into any one niche.
              </p>

              <p>
                If you want practical day to day coverage, the{" "}
                <Link
                  to="/budgeting-quiz"
                  prefetch="intent"
                  className="underline cursor-pointer hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                >
                  Budgeting Quiz
                </Link>{" "}
                focuses on spending plans, categories, and common budgeting terms.
              </p>

              <p>
                If you want markets and risk concepts, the{" "}
                <Link
                  to="/investing-quiz"
                  prefetch="intent"
                  className="underline cursor-pointer hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                >
                  Investing Quiz
                </Link>{" "}
                checks risk, diversification, and time horizon.
              </p>

              <p>
                If your searches are about borrowing, the{" "}
                <Link
                  to="/banking-and-credit-quiz"
                  prefetch="intent"
                  className="underline cursor-pointer hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                >
                  Banking and Credit Quiz
                </Link>{" "}
                covers account terms, borrowing basics, and credit fundamentals.
              </p>

              <p>
                If you want a savings focused run, the{" "}
                <Link
                  to="/saving-money-quiz"
                  prefetch="intent"
                  className="underline cursor-pointer hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                >
                  Saving Money Quiz
                </Link>{" "}
                covers emergency funds, habits, and interest basics.
              </p>

              <p>
                If you want a broader plan and goal framing, the{" "}
                <Link
                  to="/financial-planning-quiz"
                  prefetch="intent"
                  className="underline cursor-pointer hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                >
                  Financial Planning Quiz
                </Link>{" "}
                checks time horizon, priorities, and common tradeoffs.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
