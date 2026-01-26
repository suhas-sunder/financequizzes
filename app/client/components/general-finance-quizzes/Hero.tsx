type Props = {
  mode: "quick" | "full";
  onModeChange: (mode: "quick" | "full") => void;
};

export function Hero({ mode, onModeChange }: Props) {
  return (
    <section
      className="relative bg-[#F9FBFD] pt-8 pb-12 px-4 border-b border-slate-200"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #E5E9EE 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-4 inline-block rounded-full bg-teal-100 px-4 pt-1 pb-2 text-xs font-semibold text-teal-700">
          General Finance Quiz
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B2B] mb-4 tracking-tight">
          Test your <span className="text-teal-900">money knowledge</span>
        </h1>

        <p className="max-w-3xl mx-auto text-slate-700 text-base sm:text-lg">
          A quick, no-signup self-assessment that covers budgeting, credit, interest, and investing basics.
          Start with a 3-question challenge or switch to full quiz mode.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onModeChange("quick")}
            className={`cursor-pointer rounded-xl px-5 py-2 font-semibold border transition ${
              mode === "quick"
                ? "bg-teal-700 text-white border-teal-700"
                : "bg-white text-teal-800 border-teal-200 hover:bg-teal-50"
            }`}
          >
            3-question challenge
          </button>

          <button
            onClick={() => onModeChange("full")}
            className={`cursor-pointer rounded-xl px-5 py-2 font-semibold border transition ${
              mode === "full"
                ? "bg-teal-700 text-white border-teal-700"
                : "bg-white text-teal-800 border-teal-200 hover:bg-teal-50"
            }`}
          >
            Take the full quiz
          </button>
        </div>
      </div>
    </section>
  );
}
