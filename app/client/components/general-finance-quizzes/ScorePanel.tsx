type Props = {
  scoreSummary: { label: string; pct: number } | null;
  onRefresh: () => void;
};

export function ScorePanel({ scoreSummary, onRefresh }: Props) {
  if (scoreSummary) {
    return (
      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-600">Score</p>
            <p className="text-2xl font-extrabold text-[#0B1B2B]">
              {scoreSummary.pct}% <span className="text-teal-800">{scoreSummary.label}</span>
            </p>
          </div>

          <button
            onClick={onRefresh}
            className="cursor-pointer rounded-xl bg-teal-700 px-6 py-2 text-white font-semibold text-base hover:bg-teal-800 transition"
          >
            Try another set
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 text-center">
      <button
        onClick={onRefresh}
        className="cursor-pointer rounded-xl bg-teal-700 px-6 py-2 text-white font-semibold text-lg hover:bg-teal-800 transition"
      >
        New questions
      </button>
    </div>
  );
}
