import { useEffect, useRef, useState } from "react";
import type { QuizQuestion } from "./budgetingQuizData";

type AnswerResult = "correct" | "incorrect";

type Props = {
  quizTitle: string;
  questions: QuizQuestion[];
  answers: Record<string, string>;
  results: Record<string, AnswerResult>;
  revealed: Record<string, boolean>;
  onAnswer: (question: string, selected: string, correct: string) => void;

  isComplete: boolean;
  finalScorePercent: number | null;
  completionMs: number | null;
  scoreMessage: (correctCount: number) => string;

  answeredCount: number;
  correctCount: number;
  // Persisted device-local count of 10/10 completions.
  perfectCount: number;
  // Best (fastest) completion time on this device.
  bestTimeMs: number | null;

  onTryAnother: () => void;
};

function ordinalLabel(index: number) {
  return `${index + 1}.`;
}

function formatRunTime(ms: number | null): string {
  if (!ms || !Number.isFinite(ms) || ms <= 0) return "—";
  const totalSeconds = Math.max(0, Math.round(ms / 1000));
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  const pad2 = (n: number) => String(n).padStart(2, "0");
  if (hours > 0) return `${hours}:${pad2(minutes)}:${pad2(seconds)}`;
  return `${minutes}:${pad2(seconds)}`;
}

export function QuizQuestions({
  quizTitle,
  questions,
  answers,
  results,
  revealed,
  onAnswer,

  isComplete,
  finalScorePercent,
  completionMs,
  scoreMessage,

  answeredCount,
  correctCount,
  perfectCount,
  bestTimeMs,

  onTryAnother,
}: Props) {
  const showEnd = isComplete && finalScorePercent !== null;

  const [animatedScore, setAnimatedScore] = useState<number>(0);
  const hasAnimatedRef = useRef(false);
  const resultsRef = useRef<HTMLDivElement | null>(null);

  // Controls when the end screen content should animate in.
  // We keep the results card mounted (with placeholders) to avoid layout shift,
  // then (1) gently scroll only if needed, (2) reveal the end state.
  const [endRevealPhase, setEndRevealPhase] = useState<
    "idle" | "scrolling" | "revealing"
  >("idle");

  function scoreColorClass(pct: number) {
    // bad -> good: light red > red > light yellow > yellow > light blue > blue > light green > green
    if (pct <= 12) return "text-rose-400";
    if (pct <= 24) return "text-rose-600";
    if (pct <= 37) return "text-amber-300";
    if (pct <= 49) return "text-amber-500";
    if (pct <= 62) return "text-sky-300";
    if (pct <= 74) return "text-sky-600";
    if (pct <= 87) return "text-emerald-400";
    return "text-emerald-700";
  }

  useEffect(() => {
    if (!showEnd) {
      setEndRevealPhase("idle");
      return;
    }
    if (endRevealPhase !== "idle") return;

    setEndRevealPhase("scrolling");

    const el = resultsRef.current;
    if (!el || typeof window === "undefined") {
      setEndRevealPhase("revealing");
      return;
    }

    const margin = 18;
    const isFullyVisible = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      return rect.top >= margin && rect.bottom <= vh - margin;
    };

    const scrollMinimalToReveal = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      let delta = 0;

      // If the results card is taller than the viewport, align the top.
      const maxVisibleHeight = Math.max(0, vh - margin * 2);
      if (rect.height > maxVisibleHeight && rect.top < margin) {
        delta = rect.top - margin;
      } else {
        if (rect.bottom > vh - margin) {
          delta = rect.bottom - (vh - margin);
        } else if (rect.top < margin) {
          delta = rect.top - margin;
        }
      }

      // If already fully visible, do nothing.
      if (Math.abs(delta) < 2) return false;

      // Clamp to avoid aggressive overscroll on large viewports.
      const clamped = Math.max(-vh * 0.9, Math.min(vh * 0.9, delta));
      window.scrollBy({ top: clamped, behavior: "smooth" });
      return true;
    };

    const didScroll = scrollMinimalToReveal();
    if (!didScroll || isFullyVisible()) {
      // No scroll needed, reveal immediately.
      window.setTimeout(() => setEndRevealPhase("revealing"), 60);
      return;
    }

    // Wait until the element is fully visible (or we time out), then reveal.
    const start = performance.now();
    const timeoutMs = 650;
    const poll = () => {
      if (isFullyVisible()) {
        setEndRevealPhase("revealing");
        return;
      }
      if (performance.now() - start > timeoutMs) {
        setEndRevealPhase("revealing");
        return;
      }
      requestAnimationFrame(poll);
    };
    requestAnimationFrame(poll);
  }, [showEnd, endRevealPhase]);

  useEffect(() => {
    if (!showEnd || finalScorePercent === null) return;
    if (endRevealPhase !== "revealing") return;
    if (hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    const target = finalScorePercent;
    const start = performance.now();
    const durationMs = 650;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(target * eased);
      setAnimatedScore(value);
      if (t < 1) requestAnimationFrame(tick);
    };

    setAnimatedScore(0);
    requestAnimationFrame(tick);
  }, [showEnd, finalScorePercent, endRevealPhase]);

  useEffect(() => {
    if (!showEnd) {
      hasAnimatedRef.current = false;
      setAnimatedScore(0);
    }
  }, [showEnd]);

  const scorePct = finalScorePercent ?? 0;
  const filledStars = Math.max(
    0,
    Math.min(10, Math.round((scorePct / 100) * 10)),
  );

  const showEndContent = showEnd && endRevealPhase === "revealing";

  const [shareFeedback, setShareFeedback] = useState<string | null>(null);
  const shareTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (shareTimeoutRef.current !== null) {
        window.clearTimeout(shareTimeoutRef.current);
      }
    };
  }, []);

  function formatDuration(ms: number | null): string {
    if (ms === null || !Number.isFinite(ms) || ms < 0) return "—";
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const mm = String(minutes).padStart(hours > 0 ? 2 : 1, "0");
    const ss = String(seconds).padStart(2, "0");
    return hours > 0 ? `${hours}:${mm}:${ss}` : `${mm}:${ss}`;
  }

  async function handleShare() {
    if (!showEnd || finalScorePercent === null) return;

    const title = `${quizTitle} Results`;
    const bestLabel = bestTimeMs && Number.isFinite(bestTimeMs) && bestTimeMs > 0
      ? ` Best (mm:ss): ${formatRunTime(bestTimeMs)}.`
      : "";
    const text = `Score: ${finalScorePercent}% (${correctCount}/${questions.length}). Time (mm:ss): ${formatRunTime(completionMs)}.${bestLabel}`;

    const buildShareImage = async (): Promise<Blob> => {
      // Render a complete, deterministic results image that mirrors the UI.
      // This avoids DOM-capture flakiness (fonts, scroll, safe-areas) and
      // ensures the shared image includes the same core information the user
      // sees on the results card.

      const width = 1200;
      // Keep the shared image tight. The card already has generous padding,
      // so a slightly shorter canvas avoids "dead" whitespace.
      const height = 640;

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        throw new Error("Canvas unsupported");
      }

      // Background
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, width, height);

      // Card
      const pad = 64;
      const cardX = pad;
      const cardY = pad;
      const cardW = width - pad * 2;
      const cardH = height - pad * 2;
      const r = 28;

      const roundRect = (
        x: number,
        y: number,
        w: number,
        h: number,
        radius: number,
      ) => {
        const rr = Math.min(radius, w / 2, h / 2);
        ctx.beginPath();
        ctx.moveTo(x + rr, y);
        ctx.arcTo(x + w, y, x + w, y + h, rr);
        ctx.arcTo(x + w, y + h, x, y + h, rr);
        ctx.arcTo(x, y + h, x, y, rr);
        ctx.arcTo(x, y, x + w, y, rr);
        ctx.closePath();
      };

      // Shadow
      ctx.save();
      ctx.shadowColor = "rgba(15, 23, 42, 0.12)";
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 10;
      ctx.fillStyle = "#FFFFFF";
      roundRect(cardX, cardY, cardW, cardH, r);
      ctx.fill();
      ctx.restore();

      // Border
      ctx.strokeStyle = "#E2E8F0";
      ctx.lineWidth = 2;
      roundRect(cardX, cardY, cardW, cardH, r);
      ctx.stroke();

      // Typography
      const safeFont = (weight: number, sizePx: number) =>
        `${weight} ${sizePx}px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`;

      const left = cardX + 56;
      let y = cardY + 66;

      ctx.fillStyle = "#0B1B2B";
      ctx.font = safeFont(800, 42);
      ctx.fillText(quizTitle, left, y);

      y += 44;
      ctx.fillStyle = "#334155";
      ctx.font = safeFont(600, 22);
      ctx.fillText("Results", left, y);

      // Big score
      y += 88;
      ctx.fillStyle = "#F59E0B";
      ctx.font = safeFont(900, 110);
      ctx.fillText(`${finalScorePercent}%`, left, y);

      y += 46;
      ctx.fillStyle = "#0F172A";
      ctx.font = safeFont(800, 34);
      ctx.fillText(scoreMessage(correctCount), left, y);

      y += 40;
      ctx.fillStyle = "#475569";
      ctx.font = safeFont(600, 22);
      ctx.fillText(`${correctCount} of ${questions.length} correct`, left, y);

      // Rating (10 stars)
      const ratingRight = cardX + cardW - 56;
      const ratingLabelY = cardY + 104;
      ctx.textAlign = "right";
      ctx.fillStyle = "#475569";
      ctx.font = safeFont(700, 18);
      ctx.fillText("RATING", ratingRight, ratingLabelY);

      const starCount = 10;
      const filled = Math.max(1, Math.round(finalScorePercent / 10));
      const starY = ratingLabelY + 44;
      const starSize = 28;
      const starGap = 8;
      const totalStarsW = starCount * starSize + (starCount - 1) * starGap;
      let starX = ratingRight - totalStarsW;

      ctx.textAlign = "left";
      ctx.font = safeFont(900, starSize);
      for (let i = 0; i < starCount; i++) {
        ctx.fillStyle = i < filled ? "#F59E0B" : "#E2E8F0";
        ctx.fillText("★", starX, starY);
        starX += starSize + starGap;
      }

      // Stats strip (SCORE/PERFECT/TIME)
      const stripX = cardX + 56;
      const stripW = cardW - 56 * 2;
      const stripH = 132;
      // Keep the stats strip visually connected to the headline content to avoid empty whitespace.
      // Clamp so it never collides with the card footer.
      const stripY = Math.min(cardY + cardH - stripH - 56, y + 92);

      // Strip background
      ctx.fillStyle = "#F9FBFD";
      roundRect(stripX, stripY, stripW, stripH, 22);
      ctx.fill();
      ctx.strokeStyle = "#E2E8F0";
      ctx.lineWidth = 2;
      roundRect(stripX, stripY, stripW, stripH, 22);
      ctx.stroke();

      const colCount = 3;
      const colW = stripW / colCount;
      const labelY = stripY + 42;
      const valueY = stripY + 92;

      const labelStyle = () => {
        ctx.fillStyle = "#64748B";
        ctx.font = safeFont(800, 16);
      };
      const valueStyle = () => {
        ctx.fillStyle = "#0F172A";
        ctx.font = safeFont(900, 34);
      };

      ctx.textAlign = "center";

      const values = [
        { label: "SCORE", value: `${correctCount}/${questions.length}` },
        { label: "PERFECT SCORES", value: String(perfectCount) },
        { label: "TIME (mm:ss)", value: formatRunTime(completionMs) },
      ];

      for (let i = 0; i < values.length; i++) {
        const cx = stripX + colW * i + colW / 2;
        labelStyle();
        ctx.fillText(values[i].label, cx, labelY);
        valueStyle();
        ctx.fillText(values[i].value, cx, valueY);

        // Add best time under TIME without changing the 3-column layout.
        if (values[i].label === "TIME (mm:ss)" && bestTimeMs && Number.isFinite(bestTimeMs) && bestTimeMs > 0) {
          ctx.fillStyle = "#64748B";
          ctx.font = safeFont(800, 14);
          ctx.fillText(`BEST (mm:ss) ${formatRunTime(bestTimeMs)}`, cx, valueY + 34);
        }
      }

      // Footer (small, non-link branding to match "no link" sharing)
      ctx.textAlign = "left";
      ctx.fillStyle = "#94A3B8";
      ctx.font = safeFont(700, 16);
      ctx.fillText("financequizzes.com", stripX, cardY + cardH - 36);

      const blob: Blob = await new Promise((resolve, reject) => {
        canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Blob failed"))), "image/png");
      });

      return blob;
    };

    // Prefer screenshot share (image) via Web Share API when available.
    try {
      const blob = await buildShareImage();
      const file = new File([blob], "quiz-results.png", {
        type: "image/png",
      });

      if (
        typeof navigator !== "undefined" &&
        "share" in navigator &&
        (typeof navigator.canShare !== "function" || navigator.canShare({ files: [file] }))
      ) {
        await navigator.share({ title, text, files: [file] });
        return;
      }

      // Clipboard image fallback (supported in some browsers).
      if (
        typeof navigator !== "undefined" &&
        navigator.clipboard &&
        typeof ClipboardItem !== "undefined" &&
        typeof navigator.clipboard.write === "function"
      ) {
        const item = new ClipboardItem({ "image/png": blob });
        await navigator.clipboard.write([item]);
        setShareFeedback("Copied image to clipboard.");
      } else if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        setShareFeedback("Copied score to clipboard.");
      } else {
        window.prompt("Copy this to share:", text);
        setShareFeedback("Ready to share.");
      }
    } catch {
      // Last resort: text only.
      try {
        if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
          setShareFeedback("Copied score to clipboard.");
        } else {
          window.prompt("Copy this to share:", text);
          setShareFeedback("Ready to share.");
        }
      } catch {
        window.prompt("Copy this to share:", text);
        setShareFeedback("Ready to share.");
      }
    }

    if (shareTimeoutRef.current !== null) {
      window.clearTimeout(shareTimeoutRef.current);
    }
    shareTimeoutRef.current = window.setTimeout(
      () => setShareFeedback(null),
      2500,
    );
  }

  function SkeletonLine({ wClass }: { wClass: string }) {
    return (
      <div
        className={"h-4 rounded bg-slate-200/80 " + wClass}
        aria-hidden="true"
      />
    );
  }

  function SkeletonBlock({
    hClass,
    wClass,
  }: {
    hClass: string;
    wClass: string;
  }) {
    return (
      <div
        className={"rounded bg-slate-200/80 " + hClass + " " + wClass}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="mt-4">
      <div className="space-y-10">
        {questions.map((item, i) => {
          const chosen = answers[item.q];
          const result = results[item.q];
          const isRevealed = Boolean(revealed[item.q]);
          const isAnswered = Boolean(chosen);

          return (
            <div
              key={item.q}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 text-sm font-extrabold text-slate-400 select-none">
                  {ordinalLabel(i)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-lg sm:text-xl font-bold text-[#0B1B2B] leading-snug">
                    {item.q}
                  </p>

                  <div
                    role="radiogroup"
                    aria-label={`Question ${i + 1}`}
                    className="mt-5 grid sm:grid-cols-2 gap-3"
                  >
                    {item.options.map((opt) => {
                      const isSelected = chosen === opt;
                      const isCorrect = item.correct === opt;

                      // Base button styling (matches existing teal feel).
                      let classes =
                        "w-full rounded-xl border px-4 py-3 text-left font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2";

                      // Default state (unanswered): yellow tint so users can
                      // easily distinguish unanswered vs answered.
                      if (!isAnswered) {
                        classes +=
                          " bg-amber-50 border-amber-200 text-amber-950 hover:bg-amber-100 hover:border-amber-300 cursor-pointer";
                      } else if (!isRevealed) {
                        // Answered but in "weight" delay. Keep it readable and not obviously blocked.
                        classes +=
                          " bg-slate-50 border-slate-200 text-slate-800 cursor-default";
                      } else {
                        // Revealed state.
                        if (isSelected && isCorrect) {
                          classes +=
                            " bg-emerald-50 border-emerald-200 text-emerald-900";
                        } else if (isSelected && !isCorrect) {
                          classes +=
                            " bg-rose-50 border-rose-200 text-rose-900";
                        } else if (!isSelected && isCorrect) {
                          classes +=
                            " bg-emerald-50 border-emerald-200 text-emerald-900";
                        } else {
                          classes +=
                            " bg-slate-50 border-slate-200 text-slate-800";
                        }
                      }

                      const label =
                        isAnswered && isRevealed
                          ? isCorrect
                            ? "Correct option"
                            : "Option"
                          : "Option";

                      return (
                        <button
                          key={opt}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          aria-disabled={isAnswered}
                          tabIndex={isAnswered ? -1 : 0}
                          onClick={() => onAnswer(item.q, opt, item.correct)}
                          className={classes}
                        >
                          <span className="sr-only">{label}. </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback row (expands open) */}
                  <div className="mt-5 min-h-[44px]">
                    {!isAnswered ? (
                      <div className="text-sm text-slate-500">
                        Choose an answer.
                      </div>
                    ) : (
                      <div
                        aria-live="polite"
                        className={
                          "rounded-xl border border-slate-200 bg-[#F9FBFD] px-4 py-3 text-sm text-slate-800 transition-[max-height,opacity,transform] duration-200 ease-out " +
                          (isRevealed
                            ? "opacity-100 translate-y-0 max-h-[200px]"
                            : "opacity-70 translate-y-[2px] max-h-[54px]")
                        }
                      >
                        {!isRevealed ? (
                          <span className="text-slate-600">Locked in.</span>
                        ) : (
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            {result === "correct" ? (
                              <span className="font-bold text-emerald-800">
                                Correct
                              </span>
                            ) : (
                              <span className="font-bold text-rose-800">
                                Incorrect
                              </span>
                            )}

                            <span className="text-slate-700">
                              Correct answer:{" "}
                              <span className="font-semibold text-[#0B1B2B]">
                                {item.correct}
                              </span>
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Results area is always rendered to avoid layout jump. */}
      <div ref={resultsRef} className="mt-10">
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-6 shadow-sm sm:px-6">
          <div className="grid">
            {/* Locked / loading layer */}
            <div
              className={
                "col-start-1 row-start-1 transition-opacity duration-300 " +
                (showEndContent
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100")
              }
            >
              <div
                className={
                  "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between " +
                  (showEnd ? "animate-pulse" : "")
                }
              >
                {showEnd ? (
                  <>
                    <div>
                      <SkeletonBlock
                        hClass="h-16 sm:h-20"
                        wClass="w-40 sm:w-48"
                      />
                      <div className="mt-4">
                        <SkeletonLine wClass="w-64 sm:w-80" />
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <SkeletonLine wClass="w-24 sm:ml-auto" />
                      <div className="mt-3 ml-auto inline-grid w-fit grid-cols-10 gap-1 text-xl leading-none sm:text-2xl lg:grid-cols-5 lg:grid-rows-2">
                        {Array.from({ length: 10 }).map((_, idx) => (
                          <span
                            key={idx}
                            className="text-slate-200"
                            aria-hidden="true"
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <p className="text-sm font-semibold text-slate-600">
                        Results
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700 sm:text-base">
                        Finish all {questions.length} questions to see your
                        score and rating.
                      </p>
                    </div>

                    <div className="sm:text-right" aria-label="Rating locked">
                      <p className="text-sm font-semibold text-slate-600">
                        Rating
                      </p>
                      <div className="mt-2 ml-auto inline-grid w-fit grid-cols-10 gap-1 text-xl leading-none sm:text-2xl lg:grid-cols-5 lg:grid-rows-2">
                        {Array.from({ length: 10 }).map((_, idx) => (
                          <span
                            key={idx}
                            className="text-slate-200"
                            aria-hidden="true"
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* End-state layer */}
            <div
              className={
                "col-start-1 row-start-1 transition-opacity duration-300 " +
                (showEndContent
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none")
              }
              aria-hidden={!showEndContent}
            >
              {showEnd && (
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-6xl font-extrabold tracking-tight text-amber-500 sm:text-7xl">
                      {animatedScore}%
                    </div>
                    <div className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                      {scoreMessage(correctCount)}
                    </div>
                    <div className="mt-2 text-sm text-slate-600">
                      {correctCount} of {questions.length} correct
                    </div>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-sm font-semibold text-slate-600">
                      Rating
                    </p>
                    <div className="mt-2 ml-auto inline-grid w-fit grid-cols-10 gap-1 text-xl leading-none sm:text-2xl lg:grid-cols-5 lg:grid-rows-2">
                      {Array.from({ length: 10 }).map((_, idx) => (
                        <span
                          key={idx}
                          className={
                            idx < Math.max(1, Math.round(animatedScore / 10))
                              ? "text-amber-500"
                              : "text-slate-200"
                          }
                          aria-hidden="true"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-[#F9FBFD] px-4 py-4 sm:px-6">
            <div className="grid grid-cols-3 gap-4 text-center sm:gap-6">
              <div>
                <div className="text-xs font-semibold tracking-wide text-slate-500">
                  SCORE
                </div>
                <div className="mt-1 text-xl font-extrabold text-slate-900">
                  {correctCount}
                  <span className="text-slate-400">/</span>
                  {questions.length}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-wide text-slate-500">
                  PERFECT SCORES
                </div>
                <div className="mt-1 text-xl font-extrabold text-slate-900">
                  {perfectCount}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-wide text-slate-500">
                  TIME (mm:ss)
                </div>
                <div className="mt-1 text-xl font-extrabold text-slate-900">
                  {formatRunTime(completionMs)}
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-500">
                  Best (mm:ss) {formatRunTime(bestTimeMs)}
                </div>
              </div>
            </div>
          </div>

          {!showEndContent && (
            <div className="mt-4 text-center text-sm text-slate-500">
              Complete the set to unlock your results.
            </div>
          )}

          {/* Actions */}
          <div className="mt-6 border-t border-slate-200 pt-5">
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handleShare}
                disabled={!showEnd}
                className={
                  "inline-flex w-full items-center justify-center rounded-xl border px-6 py-3 text-base font-semibold shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 sm:w-auto " +
                  (showEnd
                    ? "border-slate-200 bg-white text-slate-900 hover:bg-slate-50 cursor-pointer"
                    : "cursor-not-allowed border-slate-100 bg-slate-50 text-slate-400")
                }
              >
                Share results
              </button>

              <button
                type="button"
                onClick={onTryAnother}
                className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-8 py-3 text-base font-bold text-white shadow-sm hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 sm:w-auto cursor-pointer"
              >
                Try another set
              </button>
            </div>

            {shareFeedback && (
              <div className="mt-3 text-center text-sm text-slate-600">
                {shareFeedback}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
