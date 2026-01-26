import type { Question } from "./generalFinanceQuiz";
import { QuestionList } from "./QuestionList";
import { ScorePanel } from "./ScorePanel";
import { StatsRow } from "./StatsRow";

type Props = {
  displayed: Question[];
  answers: Record<string, string>;
  stats: { answered: number; correct: number; streak: number; bestStreak: number };
  scoreSummary: { label: string; pct: number } | null;
  onAnswer: (question: string, selected: string, correct: string) => void;
  onRefresh: () => void;
};

export function QuizCard({ displayed, answers, stats, scoreSummary, onAnswer, onRefresh }: Props) {
  return (
    <div className="mx-auto mt-10 w-full sm:w-[760px] text-left rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xl">
      <StatsRow
        answered={stats.answered}
        correct={stats.correct}
        streak={stats.streak}
        bestStreak={stats.bestStreak}
      />

      <QuestionList displayed={displayed} answers={answers} onAnswer={onAnswer} />

      <ScorePanel scoreSummary={scoreSummary} onRefresh={onRefresh} />

      <p className="mt-6 text-xs text-slate-500 text-center">
        Educational self-assessment only. Not financial, investment, or tax advice.
      </p>
    </div>
  );
}
