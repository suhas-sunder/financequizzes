type Stats = {
  todayAnswered: number;
  todayCorrect: number;
  todayStreak: number;
  todayBest: number;
};

type Props = { stats: Stats };

export function DailyStats({ stats }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm font-semibold text-slate-700 tabular-nums">
      <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-center">
        <div className="text-xs uppercase tracking-wide text-slate-500">
          Answered
        </div>
        <div className="text-base">{stats.todayAnswered ?? 0}</div>
      </div>
      <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-center">
        <div className="text-xs uppercase tracking-wide text-slate-500">
          Correct
        </div>
        <div className="text-base">{stats.todayCorrect ?? 0}</div>
      </div>
      <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-center">
        <div className="text-xs uppercase tracking-wide text-slate-500">
          New Streak
        </div>
        <div className="text-base">{stats.todayStreak ?? 0}</div>
      </div>
      <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-center">
        <div className="text-xs uppercase tracking-wide text-slate-500">
          Best Streak
        </div>
        <div className="text-base">{stats.todayBest ?? 0}</div>
      </div>
    </div>
  );
}
