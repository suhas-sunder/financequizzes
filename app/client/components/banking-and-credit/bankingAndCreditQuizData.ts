export type FAQItem = { q: string; a: string };

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: string;
};

export const BANKING_AND_CREDIT_QUIZ_INTENT = {
  topicLabel: "Banking and Credit",
  roundSize: 10,
  formatLabel: "10-question challenge",
  focus:
    "Foundational banking and credit language: account types, statements, everyday usage terms, and basic interest concepts. Conceptual only (no comparisons or recommendations).",
} as const;

export const BANKING_AND_CREDIT_QUIZ_CATEGORIES = [
  {
    key: "accounts",
    label: "Account types and functions",
    whatItCovers:
      "Checking vs savings as concepts, deposits, withdrawals, and basic account purpose.",
  },
  {
    key: "statements",
    label: "Statements and balances",
    whatItCovers:
      "Available vs current vs statement balances, transactions, holds, and timing language.",
  },
  {
    key: "interest",
    label: "Interest and time-based charges",
    whatItCovers:
      "Interest as a concept, rate vs amount, and time-based meaning (no optimization).",
  },
  {
    key: "credit",
    label: "Credit basics and obligations",
    whatItCovers:
      "Credit limit, minimum payment, utilization language, and repayment framing.",
  },
  {
    key: "fees",
    label: "Fees and common terms",
    whatItCovers:
      "Service fees, overdraft language, annual fees, and conditional charges.",
  },
] as const;

export const BANKING_AND_CREDIT_SCORE_BANDS = [
  { key: "0", label: "0 out of 10", meaning: "A full reset run." },
  {
    key: "1-3",
    label: "1–3 out of 10",
    meaning: "Early recognition, with gaps in common banking and credit terms.",
  },
  {
    key: "4-5",
    label: "4–5 out of 10",
    meaning:
      "Some baseline familiarity, but inconsistent interpretation of labels.",
  },
  {
    key: "6-7",
    label: "6–7 out of 10",
    meaning:
      "Solid understanding of most everyday banking and credit language.",
  },
  {
    key: "8-9",
    label: "8–9 out of 10",
    meaning:
      "Strong recognition across accounts, statements, and credit terms.",
  },
  {
    key: "10",
    label: "10 out of 10",
    meaning:
      "Excellent clarity on foundational banking and credit terminology.",
  },
] as const;

export const BANKING_AND_CREDIT_FAQS: FAQItem[] = [
  {
    q: "What does this banking and credit quiz test?",
    a: "It tests recognition and interpretation of common banking and credit terms as used in everyday account usage: account types, statements, balances, basic interest concepts, fees, and credit obligations.",
  },
  {
    q: "Is this quiz comparing banks or recommending products?",
    a: "No. It avoids comparisons, recommendations, and product evaluation. It focuses on conceptual clarity in banking language.",
  },
  {
    q: "Does this quiz require calculations?",
    a: "No. It is about understanding labels and meanings, not doing math or strategy.",
  },
  {
    q: "How many questions are in the quiz?",
    a: "Each run is 10 questions, pulled from a larger question bank so you can retake it for variety.",
  },
  {
    q: "How can I improve my score?",
    a: "Slow down and read the label carefully. Pay attention to timing words (statement vs current), units (percent vs dollars), and qualifiers (available vs posted).",
  },
];

export const BANKING_AND_CREDIT_QUIZ_QUESTION_BANK: QuizQuestion[] = [
  {
    q: "Your debit purchase shows as “pending,” but your current balance did not drop. What is the best interpretation?",
    options: [
      "Funds may be reserved, affecting available balance before posting",
      "The merchant already posted the final charge to the ledger",
      "The transaction was declined and will never appear again",
      "A statement credit was issued to offset the purchase amount",
    ],
    correct:
      "Funds may be reserved, affecting available balance before posting",
  },
  {
    q: "A credit card payment is “scheduled” today but your balance is unchanged. Which timing label explains that gap best?",
    options: [
      "Closing date",
      "Posting date",
      "Statement balance",
      "Minimum payment",
    ],
    correct: "Posting date",
  },
  {
    q: "Two balances appear: “statement balance” and “current balance.” What does the difference usually represent?",
    options: [
      "The statement balance excludes payments made before opening day",
      "The current balance shows only pending items from the merchant",
      "The current balance includes activity after the statement closed",
      "The statement balance is always the amount due on the due date",
    ],
    correct: "The current balance includes activity after the statement closed",
  },
  {
    q: "A hotel preauthorization is higher than your final bill. What outcome is most consistent with how holds work?",
    options: [
      "The extra amount becomes a permanent fee charged by the bank",
      "The extra amount posts as interest once the statement closes",
      "The extra amount converts into an annual fee at renewal time",
      "The extra amount is released after the final charge posts",
    ],
    correct: "The extra amount is released after the final charge posts",
  },
  {
    q: "Your available balance is lower than your current balance right now. Which scenario best explains this?",
    options: [
      "A statement was generated earlier, so the ledger resets to zero",
      "Pending authorizations are reducing what you can spend immediately",
      "A credit limit increase was applied but not reflected in totals",
      "Interest accrued overnight and is shown only as available funds",
    ],
    correct:
      "Pending authorizations are reducing what you can spend immediately",
  },
  {
    q: "A credit card shows a negative balance after a refund posts. What does that “credit balance” usually mean?",
    options: [
      "You are delinquent and must pay a penalty immediately",
      "You have a temporary hold that will convert into interest later",
      "You have exceeded your credit limit and charges will be reversed",
      "Credits exceed charges right now, often from overpay or refunds",
    ],
    correct: "Credits exceed charges right now, often from overpay or refunds",
  },
  {
    q: "A payment is initiated before the due date but posts after it. Which statement best matches typical consequences?",
    options: [
      "The account is treated as paid on the initiation date automatically",
      "The due date is ignored if the payment method was online",
      "Timing may be based on posting, so it can still be late",
      "Posting cannot occur after a due date under any circumstance",
    ],
    correct: "Timing may be based on posting, so it can still be late",
  },
  {
    q: "A debit transaction is shown as “reversal.” What is the most accurate conceptual meaning of that label?",
    options: [
      "The bank increased your overdraft limit for this merchant",
      "A prior entry was undone by an offsetting entry",
      "The transaction posted twice and both will remain",
      "Interest was recalculated using a different daily rate",
    ],
    correct: "A prior entry was undone by an offsetting entry",
  },
  {
    q: "A credit card “closing date” is best tied to which event in a billing cycle?",
    options: [
      "The cycle ends and a new statement balance is created",
      "The due date occurs and interest is permanently removed",
      "The minimum payment changes each time a purchase is pending",
      "The credit limit is recalculated every hour for new approvals",
    ],
    correct: "The cycle ends and a new statement balance is created",
  },
  {
    q: "A bank deposit is labeled “pending.” Which interpretation is most reliable without assuming outcomes?",
    options: [
      "It has fully cleared and cannot be reversed by the originator",
      "It was rejected and will definitely never be completed",
      "It is initiated but not finalized, so availability can still change",
      "It is a fee category used only for business checking accounts",
    ],
    correct:
      "It is initiated but not finalized, so availability can still change",
  },
  {
    q: "A merchant submits the final amount that differs from the authorization amount. Which balance is most likely to shift first?",
    options: [
      "Statement balance",
      "Credit limit",
      "Available balance",
      "Routing number",
    ],
    correct: "Available balance",
  },
  {
    q: "Your statement lists “payment received,” but the available credit did not increase yet. Which timing detail best explains this?",
    options: [
      "The payment is still pending settlement and may not be posted",
      "The credit limit is fixed and cannot change due to any payment",
      "The statement balance is always updated only at the due date",
      "A chargeback automatically consumes available credit until resolved",
    ],
    correct: "The payment is still pending settlement and may not be posted",
  },
  {
    q: "A credit card “minimum payment” is best described as which obligation?",
    options: [
      "The full statement balance required to avoid any interest",
      "The smallest required payment to keep the account from being past due",
      "A suggested amount set by merchants to clear authorizations faster",
      "A fee that replaces interest when your balance is above the limit",
    ],
    correct:
      "The smallest required payment to keep the account from being past due",
  },
  {
    q: "A payment is returned due to insufficient funds. Which outcome best matches the term “returned payment”?",
    options: [
      "The payment is treated as a refund and reduces your balance twice",
      "The payment becomes a pending hold until the next statement cycle",
      "The payment fails and is reversed, restoring the prior balance state",
      "The payment converts into a balance transfer with new interest terms",
    ],
    correct:
      "The payment fails and is reversed, restoring the prior balance state",
  },
  {
    q: "A credit card purchase is made near the end of the cycle. Which label best captures the date range a statement covers?",
    options: [
      "Grace period",
      "Posting window",
      "Account tenure",
      "Statement period",
    ],
    correct: "Statement period",
  },
  {
    q: "A credit account shows “accrued interest” but no interest charge line yet. What does that usually indicate?",
    options: [
      "Interest has accumulated over time but may not be posted yet",
      "The account is delinquent and interest is permanently waived",
      "The account has no balance, so interest is being refunded daily",
      "The annual fee has replaced interest until the next renewal date",
    ],
    correct: "Interest has accumulated over time but may not be posted yet",
  },
  {
    q: "On a card account, what is the safest interpretation of “posted” for a transaction?",
    options: [
      "The transaction is authorized but can still change materially",
      "The transaction is finalized and recorded on the account ledger",
      "The transaction is a placeholder for a credit limit adjustment",
      "The transaction is a fee category unrelated to real purchases",
    ],
    correct: "The transaction is finalized and recorded on the account ledger",
  },
  {
    q: "A credit card shows a “statement credit.” What does that label most directly mean?",
    options: [
      "A temporary hold placed by a merchant to verify funds",
      "An annual fee charged for keeping the account open",
      "An amount that reduces what you owe on the statement",
      "A mandatory minimum payment that increases each billing cycle",
    ],
    correct: "An amount that reduces what you owe on the statement",
  },
  {
    q: "A charge is disputed and later reversed through the card network process. Which term best matches that mechanism?",
    options: ["Refund", "Chargeback", "Autopay", "Transfer"],
    correct: "Chargeback",
  },
  {
    q: "A cardholder withdraws cash using a credit card. Which term best identifies that transaction type?",
    options: [
      "Cash advance",
      "Direct deposit",
      "Statement credit",
      "Wire transfer",
    ],
    correct: "Cash advance",
  },
  {
    q: "A card has a $5,000 limit and a $1,200 balance. Conceptually, what does “available credit” represent?",
    options: [
      "The interest rate you will be charged after the next statement closes",
      "The amount you must pay to avoid delinquency on the due date",
      "The remaining portion of the limit not currently used by the balance",
      "The total of all pending charges that must post before midnight today",
    ],
    correct:
      "The remaining portion of the limit not currently used by the balance",
  },
  {
    q: "An ACH payment is initiated on Friday evening. What is the most accurate conceptual takeaway about timing?",
    options: [
      "It can be processed with timing that differs from real-time card posts",
      "It guarantees settlement in the same minute it is initiated",
      "It is identical to a wire and cannot be reversed under any reason",
      "It posts only on statement closing dates and never between cycles",
    ],
    correct:
      "It can be processed with timing that differs from real-time card posts",
  },
  {
    q: "A bank account shows a monthly “service fee.” What does that most commonly mean conceptually?",
    options: [
      "A charge tied to account maintenance or meeting conditions",
      "A charge that replaces all interest charges on the account",
      "A charge applied only when a merchant disputes a transaction",
      "A charge that is identical to an authorization hold in every way",
    ],
    correct: "A charge tied to account maintenance or meeting conditions",
  },
  {
    q: "A purchase is made and then refunded, but your available credit does not fully recover immediately. Which explanation is most consistent?",
    options: [
      "Refunds are treated as new purchases until the next cycle closes",
      "The refund may be pending or posting, so availability can lag",
      "A refund permanently reduces the credit limit as a risk control",
      "A refund converts into cash advance interest until you repay it",
    ],
    correct: "The refund may be pending or posting, so availability can lag",
  },
  {
    q: "A checking account transaction “overdrafts” the account. Which concept best matches that word?",
    options: [
      "A transfer scheduled between two accounts you control",
      "A deposit that posts early due to weekend processing",
      "A statement that lists activity over a defined date range",
      "Spending beyond available funds, creating a shortfall or negative balance",
    ],
    correct:
      "Spending beyond available funds, creating a shortfall or negative balance",
  },
  {
    q: "A card statement shows “principal” and “interest.” In borrowing language, what is principal?",
    options: [
      "The original amount borrowed before interest and fees",
      "The total of all fees charged in the last billing cycle",
      "The minimum payment required to avoid any delinquency status",
      "The maximum amount you can borrow at any time on the account",
    ],
    correct: "The original amount borrowed before interest and fees",
  },
  {
    q: "A payment is set on autopay for the due date, but the due date falls on a weekend. What is the key risk to interpret?",
    options: [
      "Autopay always changes the closing date to the next business day",
      "Autopay prevents all fees even if the payment posts afterward",
      "Autopay can depend on processing, so posting timing may still matter",
      "Autopay converts the payment into a wire, which posts instantly always",
    ],
    correct:
      "Autopay can depend on processing, so posting timing may still matter",
  },
  {
    q: "A credit account is marked “delinquent.” What does that term most directly indicate?",
    options: [
      "A payment was missed and the account is past due",
      "A payment posted early and lowered interest immediately",
      "A refund posted and created a negative statement balance",
      "A credit limit increased due to strong payment history this month",
    ],
    correct: "A payment was missed and the account is past due",
  },
  {
    q: "A card shows an authorization, then later a different final posted amount. Which concept best explains the two-step process?",
    options: [
      "Settlement follows authorization, so the final amount can differ",
      "Posting always happens first, and authorization is added afterward",
      "A chargeback creates the authorization and the merchant never settles",
      "A balance transfer creates the authorization and replaces the purchase",
    ],
    correct: "Settlement follows authorization, so the final amount can differ",
  },
  {
    q: "A “foreign transaction fee” is most accurately tied to which trigger in common card language?",
    options: [
      "Purchases processed outside your home country or currency network",
      "Deposits made at an ATM that is not owned by your bank",
      "Cash withdrawals that exceed your daily debit withdrawal limit",
      "Payments that post after the closing date but before the due date",
    ],
    correct:
      "Purchases processed outside your home country or currency network",
  },
  {
    q: "A credit report note says a debt was “charged off.” What is the best conceptual interpretation?",
    options: [
      "A lender accounting action after long nonpayment, not guaranteed forgiveness",
      "A fee charged whenever you pay more than the minimum payment",
      "A refund issued for interest that was calculated incorrectly last month",
      "A temporary authorization hold that will be released after settlement",
    ],
    correct:
      "A lender accounting action after long nonpayment, not guaranteed forgiveness",
  },
  {
    q: "A card has the same APR as another card, but the interest amounts differ. Which statement is conceptually correct?",
    options: [
      "Interest in dollars can differ because balances differ over time",
      "Interest in dollars must match because APR is identical",
      "The smaller balance must always generate higher interest charges",
      "Interest amounts do not depend on the balance at all",
    ],
    correct: "Interest in dollars can differ because balances differ over time",
  },
  {
    q: "A user is added as an “authorized user” on a credit card. What does that status usually imply?",
    options: [
      "They can use the card, while responsibility may remain with the primary holder",
      "They become the lender and can change APR terms at any moment",
      "They can approve merchant disputes but cannot make purchases",
      "They are required to pay the annual fee even if the card is unused",
    ],
    correct:
      "They can use the card, while responsibility may remain with the primary holder",
  },
  {
    q: "A transaction description on a statement looks unfamiliar, but the amount is correct. Which label best refers to that text field?",
    options: [
      "Payee",
      "Merchant descriptor",
      "Statement period",
      "Available credit",
    ],
    correct: "Merchant descriptor",
  },
  {
    q: "A customer pays the statement balance in full by the due date. Which timing concept most closely relates to avoiding interest on purchases?",
    options: [
      "Grace period",
      "Authorization hold",
      "Balance transfer",
      "Service fee",
    ],
    correct: "Grace period",
  },
  {
    q: "A debit card purchase is declined, but a pending line still appears briefly. What is the most plausible explanation?",
    options: [
      "A temporary authorization attempt was recorded, then later removed",
      "A statement credit was applied, then reclassified as a declined fee",
      "A cash advance was processed, then converted into a debit reversal",
      "A balance transfer was initiated, then split into two posted purchases",
    ],
    correct:
      "A temporary authorization attempt was recorded, then later removed",
  },
  {
    q: "A transfer between your own accounts is shown as “internal transfer.” Which term best matches that movement of funds?",
    options: ["Transfer", "Dividend", "Premium", "Chargeback"],
    correct: "Transfer",
  },
  {
    q: "An account shows “interest charged.” What does that line item most directly represent?",
    options: [
      "An amount added because time passed with a balance owed",
      "An amount removed because a refund was posted after settlement",
      "A temporary hold placed until the merchant submits final totals",
      "A one-time fee for opening the account during a promotional period",
    ],
    correct: "An amount added because time passed with a balance owed",
  },
  {
    q: "A payment is applied, but the “statement balance” still shows the old amount until tomorrow. Which description best fits that behavior?",
    options: [
      "The statement balance is a snapshot at closing and may not change",
      "The statement balance updates only when you spend on the card",
      "The statement balance is always recalculated every time you login",
      "The statement balance is the same as available credit by definition",
    ],
    correct:
      "The statement balance is a snapshot at closing and may not change",
  },
  {
    q: "A bank lists a “posting date” and a “transaction date.” Which distinction is most accurate conceptually?",
    options: [
      "Posting date is when recorded on the ledger; transaction date is when initiated",
      "Posting date is when authorized; transaction date is when reversed",
      "Posting date is the due date; transaction date is the statement close date",
      "Posting date is the credit limit; transaction date is the APR label",
    ],
    correct:
      "Posting date is when recorded on the ledger; transaction date is when initiated",
  },
  {
    q: "A credit card shows “utilization.” What does that term refer to in common credit language?",
    options: [
      "How much of your available credit limit is currently in use",
      "How many statements you have received during the past year",
      "How often your bank processes ACH transfers during the week",
      "How much interest your savings account earned within one month",
    ],
    correct: "How much of your available credit limit is currently in use",
  },
] as const;
