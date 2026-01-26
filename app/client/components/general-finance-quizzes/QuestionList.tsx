import type { Question } from "./generalFinanceQuiz";

type Props = {
  displayed: Question[];
  answers: Record<string, string>;
  onAnswer: (question: string, selected: string, correct: string) => void;
};

export function QuestionList({ displayed, answers, onAnswer }: Props) {
  return (
    <>
      {displayed.map((item, i) => {
        const chosen = answers[item.q];

        return (
          <div key={item.q} className="mb-8 last:mb-0">
            <p className="text-xl font-bold text-[#0B1B2B] mb-4">
              {i + 1}. {item.q}
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              {item.options.map((opt) => {
                const isSelected = chosen === opt;
                const isCorrect = item.correct === opt;

                let bg = "bg-teal-50 border-teal-100 text-teal-800";
                if (chosen) {
                  if (isSelected && isCorrect) bg = "bg-green-100 border-green-400 text-green-900";
                  else if (isSelected && !isCorrect) bg = "bg-red-100 border-red-400 text-red-900";
                  else if (isCorrect) bg = "bg-green-50 border-green-200 text-green-800";
                  else bg = "bg-slate-50 border-slate-200 text-slate-500";
                }

                return (
                  <li
                    key={opt}
                    onClick={() => onAnswer(item.q, opt, item.correct)}
                    className={`cursor-pointer rounded-xl font-semibold px-5 py-4 text-base border ${bg} hover:bg-teal-100 hover:border-teal-400 hover:shadow-sm transition active:scale-[0.98]`}
                  >
                    {opt}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
