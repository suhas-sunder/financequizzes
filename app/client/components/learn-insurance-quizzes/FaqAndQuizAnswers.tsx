import type { FAQItem, QuizQuestion } from "./learnInsuranceQuizData";

type Props = {
  faqs: FAQItem[];
  questionBank: QuizQuestion[];
};

export function FaqAndQuizAnswers({ faqs, questionBank }: Props) {
  return (
    <section id="faq-and-quiz" className="mx-auto max-w-5xl px-6 pt-16">
      <h3 className="text-3xl font-bold text-[#0B1B2B] mb-4 text-center">
        Finance FAQs & Quiz Answers
      </h3>
      <p className="text-slate-700 text-center max-w-2xl mx-auto mb-10">
        Explore frequently asked questions and review finance quiz answers to
        strengthen your understanding of key money concepts.
      </p>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-200 mb-12">
        {faqs.map((f, i) => (
          <div key={i} className="p-6">
            <p className="font-semibold text-lg text-[#0B1B2B] mb-2">
              FAQ {i + 1}. {f.q}
            </p>
            <p className="text-slate-700">
              <span className="font-medium text-teal-700">Answer: </span>
              {f.a}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-200">
        {questionBank.map((q, i) => (
          <div key={i} className="p-6">
            <p className="font-semibold text-lg text-[#0B1B2B] mb-2">
              {i + 1}. {q.q}
            </p>
            <p className="text-slate-700">
              <span className="font-medium text-teal-700">Answer: </span>
              {q.correct}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
