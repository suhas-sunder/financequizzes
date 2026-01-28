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
    meaning:
      "Some familiarity, but inconsistent interpretation of coverage and cost-sharing terms.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning:
      "Solid grasp of most insurance basics: premiums, deductibles, claims, and limits.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning:
      "Strong recognition across risk pooling, policy terms, and claims language.",
  },
  {
    key: "10",
    label: "10 out of 10",
    meaning:
      "Excellent conceptual clarity on how insurance works and how common terms are used.",
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
    q: "A policy is described as “risk transfer.” What is being transferred, conceptually?",
    options: [
      "Some financial loss consequences of an uncertain event",
      "The probability that the event will happen",
      "The insurer’s profits to the policyholder",
      "The policyholder’s income to the insurer",
    ],
    correct: "Some financial loss consequences of an uncertain event",
  },
  {
    q: "Two policies cover the same type of loss, but one has a “sublimit” for a category. What does a sublimit mean?",
    options: [
      "A higher premium charged for that category",
      "A smaller maximum payout for that category",
      "A deductible that applies only to that category",
      "An exclusion that removes that category entirely",
    ],
    correct: "A smaller maximum payout for that category",
  },
  {
    q: "A policy states a requirement to report a loss within a set time. This is best described as a:",
    options: ["Coverage limit", "Peril definition", "Policy condition", "Risk pool rule"],
    correct: "Policy condition",
  },
  {
    q: "A policy says “coverage applies per occurrence.” What is the most direct implication?",
    options: [
      "The deductible applies only once per year",
      "The premium changes after each event",
      "Coverage applies only to listed perils",
      "The limit is tied to a single event",
    ],
    correct: "The limit is tied to a single event",
  },
  {
    q: "A person pays premiums for months and never files a claim. What does that outcome best reflect?",
    options: [
      "Insurance cannot work without frequent claims",
      "Premiums buy protection, not guaranteed payouts",
      "Deductibles are refunded when unused",
      "Coverage limits increase when unused",
    ],
    correct: "Premiums buy protection, not guaranteed payouts",
  },
  {
    q: "A policy excludes “wear and tear.” What is the best interpretation of that exclusion?",
    options: [
      "It limits the deductible for gradual damage",
      "It caps payouts for maintenance-related losses",
      "It does not cover gradual deterioration losses",
      "It requires higher premiums for older items",
    ],
    correct: "It does not cover gradual deterioration losses",
  },
  {
    q: "A claim is denied because the loss happened before the policy start date. Which concept is most directly involved?",
    options: [
      "Adverse selection",
      "Insurable interest",
      "Policy term period",
      "Coinsurance share",
    ],
    correct: "Policy term period",
  },
  {
    q: "Which description best matches “risk pooling” in basic insurance language?",
    options: [
      "A single policy pays everyone’s losses equally",
      "Many contribute so the few with losses can be paid",
      "Claims are paid only if everyone has losses",
      "Insurers predict all losses before selling policies",
    ],
    correct: "Many contribute so the few with losses can be paid",
  },
  {
    q: "A policy has a deductible and then coinsurance after it. What sequence does that describe conceptually?",
    options: [
      "Insurer pays first, then you pay a percent share",
      "You pay a percent share, then insurer pays all",
      "You pay up to the deductible, then share costs",
      "You pay only the premium, then insurer pays all",
    ],
    correct: "You pay up to the deductible, then share costs",
  },
  {
    q: "A plan has an out-of-pocket maximum. Which cost is most commonly not counted toward it?",
    options: [
      "Coinsurance amounts for covered costs",
      "Copays for covered services",
      "Deductible payments for covered costs",
      "Premiums paid to keep coverage active",
    ],
    correct: "Premiums paid to keep coverage active",
  },
  {
    q: "A policy’s “coverage limit” is best defined as the:",
    options: [
      "Maximum the insurer will pay under stated terms",
      "Amount you must pay before coverage begins",
      "Fixed amount charged to file any claim",
      "Minimum premium the insurer can charge",
    ],
    correct: "Maximum the insurer will pay under stated terms",
  },
  {
    q: "A policy says it covers “named perils.” What does that most directly mean?",
    options: [
      "Only explicitly listed causes of loss are covered",
      "All losses are covered unless excluded by law",
      "Coverage is based only on deductible size",
      "Coverage depends only on the premium amount",
    ],
    correct: "Only explicitly listed causes of loss are covered",
  },
  {
    q: "A policyholder changes behavior because they feel protected, increasing loss likelihood. This is best described as:",
    options: [
      "Adverse selection",
      "Risk pooling",
      "Moral hazard",
      "Underwriting",
    ],
    correct: "Moral hazard",
  },
  {
    q: "A group with higher expected losses is more likely to buy coverage, raising average claims. This is best described as:",
    options: [
      "Risk severity",
      "Policy exclusion",
      "Coinsurance",
      "Adverse selection",
    ],
    correct: "Adverse selection",
  },
  {
    q: "A claim is “adjudicated.” What does that process do, conceptually?",
    options: [
      "It compares the claim to policy terms to decide payment",
      "It forecasts future premiums for the next renewal",
      "It changes the deductible to match the loss size",
      "It converts exclusions into covered categories",
    ],
    correct: "It compares the claim to policy terms to decide payment",
  },
  {
    q: "A policy uses “actual cash value” rather than replacement cost. What is the most direct implication?",
    options: [
      "Payment reflects depreciation of the damaged item",
      "Payment always equals the original purchase price",
      "Payment ignores policy limits and deductibles",
      "Payment increases automatically with inflation",
    ],
    correct: "Payment reflects depreciation of the damaged item",
  },
  {
    q: "A rider is added to a policy. What does a rider most directly do?",
    options: [
      "Changes or adds terms to how coverage applies",
      "Guarantees claims will be approved going forward",
      "Replaces the need to pay premiums entirely",
      "Eliminates deductibles for all covered losses",
    ],
    correct: "Changes or adds terms to how coverage applies",
  },
  {
    q: "A claim is denied because a required step was not followed, even though the event seems covered. This is most consistent with:",
    options: [
      "A limitation reducing a payout amount",
      "An exclusion removing the entire peril",
      "A condition not being satisfied",
      "A premium being unpaid for the period",
    ],
    correct: "A condition not being satisfied",
  },
  {
    q: "A policy has a per-occurrence limit and an aggregate limit. What can the aggregate limit do that the per-occurrence limit cannot?",
    options: [
      "Cap total payouts across multiple claims in a period",
      "Set the deductible amount for each covered loss",
      "Define which perils are included in the policy",
      "Change the premium amount after each claim",
    ],
    correct: "Cap total payouts across multiple claims in a period",
  },
  {
    q: "A policy describes “exposure.” What does exposure mean in insurance language?",
    options: [
      "The potential loss you face because the risk applies to you",
      "The insurer’s profit margin per policy term",
      "The probability a claim will be approved when filed",
      "The deductible amount you must pay each year",
    ],
    correct: "The potential loss you face because the risk applies to you",
  },
  {
    q: "An insurer evaluates risk to decide pricing and whether to offer coverage. This process is called:",
    options: ["Claims handling", "Underwriting", "Subrogation", "Indemnity"],
    correct: "Underwriting",
  },
  {
    q: "A policy has a “waiting period.” What does that most directly imply?",
    options: [
      "Certain benefits start only after a time delay",
      "Claims are paid faster during the first month",
      "Premiums are waived until the first claim occurs",
      "Deductibles are refunded at the end of the term",
    ],
    correct: "Certain benefits start only after a time delay",
  },
  {
    q: "A policy “lapses.” What does lapse mean in plain insurance language?",
    options: [
      "Coverage ends because required terms were not maintained",
      "Coverage expands to include previously excluded risks",
      "A claim is automatically approved and paid out",
      "The deductible decreases each month automatically",
    ],
    correct: "Coverage ends because required terms were not maintained",
  },
  {
    q: "A policy is reinstated after a lapse. What does reinstatement most directly do?",
    options: [
      "Restores coverage subject to the insurer’s rules",
      "Refunds all premiums paid prior to the lapse",
      "Eliminates all exclusions for the reinstated term",
      "Guarantees no claims will be denied after reinstatement",
    ],
    correct: "Restores coverage subject to the insurer’s rules",
  },
  {
    q: "An insurer pays a covered loss, then seeks recovery from the party responsible. This is best described as:",
    options: ["Coinsurance", "Copay", "Subrogation", "Endorsement"],
    correct: "Subrogation",
  },
  {
    q: "A policy distinguishes “peril” from “hazard.” Which pairing matches the terms best?",
    options: [
      "Peril is a risk factor; hazard is a cause of loss",
      "Peril is a cause of loss; hazard is a risk factor",
      "Peril is a premium; hazard is a deductible",
      "Peril is a limit; hazard is an exclusion",
    ],
    correct: "Peril is a cause of loss; hazard is a risk factor",
  },
  {
    q: "A policy uses “replacement cost” language. What does that generally imply about payment basis?",
    options: [
      "Payment aims at the cost to replace with a similar new item",
      "Payment equals the depreciated value at the time of loss",
      "Payment is a fixed cash amount regardless of the item",
      "Payment is unlimited as long as the peril is covered",
    ],
    correct: "Payment aims at the cost to replace with a similar new item",
  },
  {
    q: "A plan uses a copay rather than coinsurance for a service. What is the key conceptual difference?",
    options: [
      "Copay is a fixed amount; coinsurance is a percent share",
      "Copay is a percent share; coinsurance is a fixed amount",
      "Copay applies only after the out-of-pocket maximum",
      "Copay applies only to excluded services and items",
    ],
    correct: "Copay is a fixed amount; coinsurance is a percent share",
  },
  {
    q: "A policy says “covered” for a type of loss. Which statement best matches what “covered” means?",
    options: [
      "Policy applies under definitions, conditions, and limits",
      "Insurer must pay any amount the policyholder requests",
      "Deductible becomes zero for all future losses",
      "Premium payments stop for the rest of the term",
    ],
    correct: "Policy applies under definitions, conditions, and limits",
  },
  {
    q: "A policy includes exclusions. What is the main purpose of exclusions conceptually?",
    options: [
      "Define what the contract does not apply to",
      "Guarantee premiums will remain unchanged each year",
      "Ensure every claim is paid if filed on time",
      "Eliminate uncertainty by predicting all losses",
    ],
    correct: "Define what the contract does not apply to",
  },
  {
    q: "A claim is appealed. What is an appeal most directly trying to do?",
    options: [
      "Request reconsideration of a decision using review or new info",
      "Increase the policy’s coverage limit for future terms",
      "Change the premium amount for the current billing cycle",
      "Convert an exclusion into a covered peril automatically",
    ],
    correct: "Request reconsideration of a decision using review or new info",
  },
  {
    q: "A policy requires “insurable interest.” What does that concept mean at a high level?",
    options: [
      "You would suffer a real loss if the event occurred",
      "You must have filed claims in prior policy terms",
      "You can profit from losses if coverage is active",
      "You must accept any policy conditions without review",
    ],
    correct: "You would suffer a real loss if the event occurred",
  },
  {
    q: "A policy distinguishes “exclusion” from “limitation.” What is the cleanest distinction?",
    options: [
      "Exclusion removes a scenario; limitation narrows payout scope",
      "Exclusion narrows payout scope; limitation removes a scenario",
      "Exclusion changes premiums; limitation changes deductibles",
      "Exclusion applies to premiums; limitation applies to claims only",
    ],
    correct: "Exclusion removes a scenario; limitation narrows payout scope",
  },
  {
    q: "A policy’s deductible is met, but a claim payment is still reduced because a limit applies. Which concept explains that reduction?",
    options: [
      "Coverage limit caps the insurer’s payment for that loss",
      "Premium payment increases the claim amount automatically",
      "Risk pooling requires equal payouts across all policyholders",
      "Adverse selection causes claims to be denied after filing",
    ],
    correct: "Coverage limit caps the insurer’s payment for that loss",
  },
  {
    q: "A policyholder says “I paid premiums, so the insurer owes me that money back.” Which concept directly addresses this misunderstanding?",
    options: [
      "Premiums fund the risk pool, not a personal savings balance",
      "Deductibles exist only to punish policyholders for claims",
      "Coinsurance exists to replace limits and exclusions entirely",
      "Copays exist to guarantee small losses are always paid",
    ],
    correct: "Premiums fund the risk pool, not a personal savings balance",
  },
  {
    q: "A policy uses cost sharing. What is cost sharing designed to do conceptually?",
    options: [
      "Split covered costs between insurer and policyholder by rules",
      "Guarantee losses never occur for covered perils",
      "Replace underwriting with a flat premium for everyone",
      "Eliminate exclusions by converting them into deductibles",
    ],
    correct: "Split covered costs between insurer and policyholder by rules",
  },
  {
    q: "A “coverage gap” is mentioned in a planning discussion. What does coverage gap most directly imply?",
    options: [
      "A time or situation where the policy does not apply",
      "A period where premiums are refunded to the policyholder",
      "A time when deductibles are waived for all claims filed",
      "A condition where claims must be approved automatically",
    ],
    correct: "A time or situation where the policy does not apply",
  },
  {
    q: "A policy is described as providing “indemnity.” What does indemnity mean at a high level?",
    options: [
      "A payment intended to make the insured whole under terms",
      "A payment intended to reward insureds beyond the loss",
      "A payment intended to replace the need for saving entirely",
      "A payment intended to eliminate future loss probability",
    ],
    correct: "A payment intended to make the insured whole under terms",
  },
  {
    q: "A claim is denied because the loss falls under an exclusion, not because of cost sharing. Which statement matches that logic best?",
    options: [
      "The policy rules apply, but the deductible was too high",
      "The insurer pays after coinsurance, but not before copays",
      "The policy does not cover that category of loss at all",
      "The limit was reached, so future losses are excluded",
    ],
    correct: "The policy does not cover that category of loss at all",
  },
] as const;

