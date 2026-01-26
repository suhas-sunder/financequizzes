import type { QuizQuestion } from "./learnHistoryQuizData";

type Props = {
  displayed: QuizQuestion[];
  answers: Record<string, string>;
  onAnswer: (question: string, selected: string, correct: string) => void;
};

export function QuizQuestions({ displayed, answers, onAnswer }: Props) {
  return (
    <>
      {displayed.map((item, i) => {
        const chosen = answers[item.q];
        return (
          <div key={i} className="mb-10 last:mb-0">
            <p className="text-xl font-bold text-[#0B1B2B] mb-4">
              {i + 1}. {item.q}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {item.options.map((opt) => {
                const isSelected = chosen === opt;
                const isCorrect = item.correct === opt;

                let classes =
                  "bg-teal-50 border-teal-100 text-teal-800 hover:bg-teal-100 hover:border-teal-400";
                if (chosen) {
                  if (isSelected && isCorrect)
                    classes =
                      "bg-green-100 border-green-400 text-green-900 hover:bg-green-100";
                  else if (isSelected && !isCorrect)
                    classes =
                      "bg-red-100 border-red-400 text-red-900 hover:bg-red-100";
                  else if (isCorrect)
                    classes =
                      "bg-green-50 border-green-200 text-green-800 hover:bg-green-50";
                  else
                    classes =
                      "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-50";
                }

                return (
                  <li
                    key={opt}
                    onClick={() => onAnswer(item.q, opt, item.correct)}
                    className={`cursor-pointer rounded-xl font-semibold px-5 py-4 text-base border transition active:scale-[0.98] ${classes}`}
                  >
                    {opt}
                  </li>
                );
              })}
            </ul>

            {chosen && (
              <div className="mt-3 text-sm text-slate-700">
                <span className="font-semibold text-teal-700">
                  Correct Answer:
                </span>{" "}
                {item.correct}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
