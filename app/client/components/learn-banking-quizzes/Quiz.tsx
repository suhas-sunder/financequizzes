import { useEffect, useState } from "react";
import { questionBank } from "./bankingQuestions";

export function Quiz() {
  const pickRandom = () =>
    [...questionBank].sort(() => 0.5 - Math.random()).slice(0, 3);

  const [displayed, setDisplayed] = useState(pickRandom);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (
    question: string,
    selected: string,
    correct: string
  ) => {
    if (answers[question]) return;
    setAnswers({ ...answers, [question]: selected });
  };

  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      {displayed.map((item, i) => (
        <div key={i} className="mb-8">
          <h3 className="font-bold text-xl mb-4">{item.q}</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {item.options.map((opt) => (
              <li
                key={opt}
                onClick={() => handleAnswer(item.q, opt, item.correct)}
                className="cursor-pointer rounded-xl border px-4 py-3 hover:bg-slate-50"
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button
        onClick={() => {
          setDisplayed(pickRandom());
          setAnswers({});
        }}
        className="mt-6 rounded-xl bg-teal-700 text-white px-6 py-2 font-semibold"
      >
        Next 3 Questions
      </button>
    </section>
  );
}
