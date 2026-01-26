type Props = {
  answered: number;
  correct: number;
  streak: number;
  bestStreak: number;
};

export function StatsRow({ answered, correct, streak, bestStreak }: Props) {
  return (
    <div className="flex flex-wrap justify-between items-center mb-6 gap-2">
      <div className="text-sm font-semibold text-slate-700">Answered: {answered}</div>
      <div className="text-sm font-semibold text-slate-700">Correct: {correct}</div>
      <div className="text-sm font-semibold text-slate-700">Streak: {streak}</div>
      <div className="text-sm font-semibold text-slate-700">Best: {bestStreak}</div>
    </div>
  );
}
