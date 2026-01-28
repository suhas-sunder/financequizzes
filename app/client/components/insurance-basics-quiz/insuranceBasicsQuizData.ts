export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const INSURANCE_BASICS_QUIZ_INTENT = {
  topicLabel: "Insurance Basics",
  roundSize: 10,
  formatLabel: "10-question challenge",
  focus:
    "Insurance concepts and terminology: risk pooling, premiums, deductibles, copays/coinsurance (where relevant), coverage limits, exclusions, claims, and what coverage language means. Conceptual only (no provider comparisons or product recommendations).",
} as const;

export const INSURANCE_BASICS_QUIZ_CATEGORIES = [
  {
    key: "purpose",
    label: "Why insurance exists",
    whatItCovers:
      "Risk transfer and risk pooling as the basic purpose of insurance.",
  },
  {
    key: "costsharing",
    label: "Premiums and cost sharing",
    whatItCovers:
      "Premium, deductible, copay/coinsurance concepts, and out-of-pocket framing.",
  },
  {
    key: "coverage",
    label: "Coverage language",
    whatItCovers:
      "Coverage limits, exclusions, covered vs not covered, and policy terms.",
  },
  {
    key: "claims",
    label: "Claims and processes",
    whatItCovers:
      "Claims, approvals/denials, and what a claim represents at a high level.",
  },
  {
    key: "risk",
    label: "Risk and probability language",
    whatItCovers:
      "Risk, exposure, events, and why uncertainty is central to insurance.",
  },
] as const;

export const INSURANCE_BASICS_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Early recognition, with gaps in core insurance terminology.",
  },
  {
    key: "4-5",
    label: "4–5 out of 10",
    meaning: "Some familiarity, but inconsistent interpretation of coverage and cost-sharing terms.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning: "Solid grasp of most insurance basics: premiums, deductibles, claims, and limits.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning: "Strong recognition across risk pooling, policy terms, and claims language.",
  },
  {
    key: "10",
    label: "10 out of 10",
    meaning: "Excellent conceptual clarity on how insurance works and how common terms are used.",
  },
] as const;

export const INSURANCE_BASICS_FAQS: FAQItem[] = [
  {
    q: "What does this insurance basics quiz test?",
    a: "It tests understanding of common insurance terms and concepts, including premiums, deductibles, coverage limits, exclusions, and claims. It focuses on how insurance works, not which insurance to buy.",
  },
  {
    q: "Is this quiz recommending providers or policies?",
    a: "No. It avoids comparisons and product recommendations. It is a conceptual awareness check.",
  },
  {
    q: "Does this quiz require calculations?",
    a: "No. It focuses on meaning and terminology, not math or optimization.",
  },
  {
    q: "How many questions are in the quiz?",
    a: "Each run is 10 questions, drawn from a larger question bank so you can retake it for variety.",
  },
  {
    q: "How can I improve my score?",
    a: "Focus on definitions and cost-sharing language: what you pay regardless (premium), what you pay before coverage (deductible), and what may be excluded. Reviewing basic insurance terms helps.",
  },
];

export const INSURANCE_BASICS_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "At a high level, why does insurance exist?",
    options: [
      "To pool risk and help cover financial losses from uncertain events",
      "To guarantee profit on every purchase",
      "To make all risks disappear",
      "To replace budgeting and saving",
    ],
    correct: "To pool risk and help cover financial losses from uncertain events",
  },
  {
    q: "What is a “premium” in insurance terms?",
    options: [
      "The amount paid to keep coverage active",
      "The amount paid only after a claim is approved",
      "The maximum the insurer will ever pay",
      "A refund issued every year",
    ],
    correct: "The amount paid to keep coverage active",
  },
  {
    q: "What does “deductible” usually mean?",
    options: [
      "An amount you pay before insurance coverage starts paying for certain costs",
      "A fee charged for filing any claim",
      "The total cost of the policy",
      "A discount on the premium",
    ],
    correct:
      "An amount you pay before insurance coverage starts paying for certain costs",
  },
  {
    q: "What is a “coverage limit”?",
    options: [
      "The maximum amount the insurer will pay for covered losses under the policy terms",
      "The amount of your premium per month",
      "The amount you must pay before the deductible",
      "A guarantee that everything is covered",
    ],
    correct:
      "The maximum amount the insurer will pay for covered losses under the policy terms",
  },
  {
    q: "What does an “exclusion” mean in a policy?",
    options: [
      "A situation or loss the policy does not cover",
      "A bonus payment from the insurer",
      "A required type of claim",
      "A discount for safe behavior",
    ],
    correct: "A situation or loss the policy does not cover",
  },
  {
    q: "What is a “claim” in insurance language?",
    options: [
      "A request for the insurer to pay under the policy after a covered event",
      "A guarantee of payment no matter what",
      "A bill sent by a bank",
      "A way to cancel a policy immediately",
    ],
    correct:
      "A request for the insurer to pay under the policy after a covered event",
  },
  {
    q: "In general terms, what does “covered” mean?",
    options: [
      "The policy applies to that type of loss under its terms",
      "The insurer will pay any amount you ask for",
      "The deductible becomes zero automatically",
      "The premium stops being due",
    ],
    correct: "The policy applies to that type of loss under its terms",
  },
  {
    q: "What is “risk pooling” best described as?",
    options: [
      "Many people contributing so that losses for a few can be covered",
      "One person paying for everyone’s claims directly",
      "A way to predict which events will happen",
      "A guarantee that claims will never be denied",
    ],
    correct: "Many people contributing so that losses for a few can be covered",
  },
  {
    q: "What does “coinsurance” usually mean where it applies?",
    options: [
      "A percentage share of a covered cost that you pay",
      "A fixed fee paid once per year",
      "The total amount of the deductible",
      "A penalty for filing a claim",
    ],
    correct: "A percentage share of a covered cost that you pay",
  },
  {
    q: "What does a “copay” typically refer to where it applies?",
    options: [
      "A fixed amount paid for a covered service or item",
      "The amount the insurer pays first",
      "A limit on coverage",
      "A type of exclusion",
    ],
    correct: "A fixed amount paid for a covered service or item",
  },
  {
    q: "If something is “out of network” (where relevant), what does that usually imply?",
    options: [
      "Different coverage terms may apply compared to in-network options",
      "It is always fully covered at no cost",
      "It is automatically excluded from all policies",
      "The deductible is waived in every case",
    ],
    correct:
      "Different coverage terms may apply compared to in-network options",
  },
  {
    q: "What does “policy term” most commonly refer to?",
    options: [
      "The period the coverage applies (start to end date)",
      "The deductible amount only",
      "The insurer’s profit margin",
      "The maximum claim size",
    ],
    correct: "The period the coverage applies (start to end date)",
  },
  {
    q: "What does “endorsement” or “rider” generally mean?",
    options: [
      "A change or addition to what the policy covers",
      "A claim denial letter",
      "A premium refund",
      "A mandatory deductible increase",
    ],
    correct: "A change or addition to what the policy covers",
  },
  {
    q: "Conceptually, what does “underwriting” refer to?",
    options: [
      "How an insurer evaluates risk for coverage terms and pricing",
      "How claims are paid instantly",
      "How banks issue loans",
      "How government sets tax rates",
    ],
    correct: "How an insurer evaluates risk for coverage terms and pricing",
  },
  {
    q: "What does “liability coverage” generally relate to?",
    options: [
      "Coverage for harm or damage you may be responsible for",
      "Coverage for your own savings account balance",
      "Coverage for stock market losses",
      "Coverage that guarantees no accidents happen",
    ],
    correct: "Coverage for harm or damage you may be responsible for",
  },
  {
    q: "What does “premium increase” usually reflect conceptually?",
    options: [
      "A change in pricing due to risk, costs, or policy factors",
      "A guarantee of better coverage",
      "A refund for good behavior",
      "A sign that your deductible is zero",
    ],
    correct: "A change in pricing due to risk, costs, or policy factors",
  },
  {
    q: "Which is the best description of “coverage” as a concept?",
    options: [
      "The set of situations the policy agrees to help pay for under its terms",
      "A promise to pay for anything at any time",
      "A tax credit from the government",
      "A bank account feature",
    ],
    correct:
      "The set of situations the policy agrees to help pay for under its terms",
  },
  {
    q: "Why are exclusions important in insurance policies?",
    options: [
      "They define what is not covered and help set expectations",
      "They ensure every claim is paid",
      "They replace the need for premiums",
      "They eliminate risk pooling",
    ],
    correct: "They define what is not covered and help set expectations",
  },
  {
    q: "What does “claim denial” usually mean?",
    options: [
      "The insurer determined the request does not meet coverage terms",
      "The policy automatically ended immediately",
      "The deductible was refunded",
      "The premium became optional",
    ],
    correct: "The insurer determined the request does not meet coverage terms",
  },
  {
    q: "In a general insurance context, what does “coverage gap” imply?",
    options: [
      "A period or situation where coverage does not apply",
      "A guaranteed payment increase",
      "A discount on premiums",
      "A new claim being filed",
    ],
    correct: "A period or situation where coverage does not apply",
  },
] as const;
