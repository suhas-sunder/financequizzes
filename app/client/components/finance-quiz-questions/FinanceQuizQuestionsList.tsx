import { useEffect, useMemo, useState } from "react";

import type { FinanceQA, FinanceQACategoryKey } from "./financeQuizQuestionsData";
import {
  FINANCE_QUIZ_QUESTIONS,
  FINANCE_QUIZ_QUESTIONS_CATEGORIES,
} from "./financeQuizQuestionsData";

function normalize(s: string) {
  return String(s || "").toLowerCase().trim();
}

function categoryLabel(key: FinanceQACategoryKey): string {
  return (
    FINANCE_QUIZ_QUESTIONS_CATEGORIES.find((c) => c.key === key)?.label ?? key
  );
}

function buildPlainText(items: FinanceQA[]): string {
  const lines: string[] = [];
  const byCat = new Map<FinanceQACategoryKey, FinanceQA[]>();

  for (const item of items) {
    const list = byCat.get(item.category) || [];
    list.push(item);
    byCat.set(item.category, list);
  }

  for (const c of FINANCE_QUIZ_QUESTIONS_CATEGORIES) {
    const list = byCat.get(c.key);
    if (!list?.length) continue;

    lines.push(c.label);
    lines.push("-".repeat(Math.min(60, c.label.length)));
    for (const qa of list) {
      lines.push(`Q: ${qa.q}`);
      lines.push(`A: ${qa.a}`);
      if (qa.explanation) lines.push(`Note: ${qa.explanation}`);
      lines.push("");
    }
    lines.push("");
  }

  return lines.join("\n").trim();
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback: best-effort, no guarantees in older browsers.
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "true");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

export function FinanceQuizQuestionsList() {
  const [category, setCategory] = useState<FinanceQACategoryKey | "all">("all");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [showCount, setShowCount] = useState(60);
  const [copied, setCopied] = useState<"idle" | "ok" | "fail">("idle");

  useEffect(() => {
    if (copied === "idle") return;
    const id = window.setTimeout(() => setCopied("idle"), 1400);
    return () => window.clearTimeout(id);
  }, [copied]);

  const filtered = useMemo(() => {
    const q = normalize(query);

    return FINANCE_QUIZ_QUESTIONS.filter((item) => {
      if (category !== "all" && item.category !== category) return false;

      if (!q) return true;

      const hay = normalize(item.q + " " + item.a + " " + (item.explanation || ""));
      return hay.includes(q);
    });
  }, [category, query]);

  const visible = useMemo(() => filtered.slice(0, showCount), [filtered, showCount]);
  const hasMore = visible.length < filtered.length;

  const expandAllVisible = () => {
    setExpanded((prev) => {
      const next = { ...prev };
      for (const item of visible) next[item.id] = true;
      return next;
    });
  };

  const collapseAllVisible = () => {
    setExpanded((prev) => {
      const next = { ...prev };
      for (const item of visible) next[item.id] = false;
      return next;
    });
  };

  const onCopy = async () => {
    if (typeof window === "undefined") return;

    const text = buildPlainText(filtered);
    const ok = await copyToClipboard(text);
    setCopied(ok ? "ok" : "fail");
  };

  const onPrint = () => {
    if (typeof window === "undefined") return;
    window.print();
  };

  return (
    <section
      id="questions"
      className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-12"
    >
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8">
        <header className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B1B2B]">
            Finance quiz questions and answers
          </h2>
          <p className="mt-2 text-slate-700 leading-relaxed">
            Browse a mixed question bank. Filter by category or search keywords, then expand answers to self-test.
          </p>
        </header>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <label className="text-sm font-semibold text-slate-700">
              Category
              <select
                className="ml-0 sm:ml-3 mt-2 sm:mt-0 w-full sm:w-auto rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value as any);
                  setShowCount(60);
                  setExpanded({});
                }}
              >
                <option value="all">All categories</option>
                {FINANCE_QUIZ_QUESTIONS_CATEGORIES.map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Search
              <input
                className="ml-0 sm:ml-3 mt-2 sm:mt-0 w-full sm:w-[320px] rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800"
                placeholder="e.g., compound interest, APR, inflation"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowCount(60);
                  setExpanded({});
                }}
              />
            </label>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end gap-2">
            <button
              type="button"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              onClick={expandAllVisible}
            >
              Expand visible
            </button>
            <button
              type="button"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              onClick={collapseAllVisible}
            >
              Collapse visible
            </button>

            <button
              type="button"
              className="rounded-xl bg-[#0B1B2B] px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
              onClick={onCopy}
              aria-live="polite"
            >
              {copied === "ok"
                ? "Copied"
                : copied === "fail"
                  ? "Copy failed"
                  : "Copy as text"}
            </button>

            <button
              type="button"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              onClick={onPrint}
            >
              Print
            </button>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-slate-600">
          Showing <span className="font-semibold">{visible.length}</span> of{" "}
          <span className="font-semibold">{filtered.length}</span> questions
          {category !== "all" ? (
            <>
              {" "}
              in <span className="font-semibold">{categoryLabel(category)}</span>
            </>
          ) : null}
          {query ? (
            <>
              {" "}
              matching <span className="font-semibold">“{query}”</span>
            </>
          ) : null}
          .
        </div>

        <div className="mt-6 space-y-3">
          {visible.map((item) => {
            const isOpen = !!expanded[item.id];
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 hover:bg-slate-50 rounded-2xl transition-colors"
                  onClick={() =>
                    setExpanded((prev) => ({
                      ...prev,
                      [item.id]: !prev[item.id],
                    }))
                  }
                  aria-expanded={isOpen}
                >
                  <div>
                    <div className="text-xs font-semibold text-teal-700">
                      {categoryLabel(item.category)}
                    </div>
                    <div className="mt-1 font-semibold text-[#0B1B2B]">
                      {item.q}
                    </div>
                  </div>
                  <div className="text-slate-500 select-none pt-1">
                    {isOpen ? "–" : "+"}
                  </div>
                </button>

                {isOpen ? (
                  <div className="px-5 pb-5">
                    <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                      <div className="text-sm font-semibold text-slate-700">
                        Answer
                      </div>
                      <div className="mt-1 text-slate-800 leading-relaxed">
                        {item.a}
                      </div>
                      {item.explanation ? (
                        <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                          <span className="font-semibold">Why it matters:</span>{" "}
                          {item.explanation}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {hasMore ? (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              onClick={() => setShowCount((n) => Math.min(filtered.length, n + 40))}
            >
              Show more
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
