import { json } from "@remix-run/node";
import type { Route } from "./+types/home";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";

interface LoaderData {
  nowISO: string;
  faqs: { q: string; a: string }[];
}

export function meta({}: Route.MetaArgs) {
  const title =
    "Insurance Quiz | Understand Premiums, Deductibles, and Coverage | FinanceQuizzes.com";
  const description =
    "Learn the essentials of insurance and risk management. Test your understanding of coverage types, premiums, and deductibles with this free interactive quiz on FinanceQuizzes.com.";
  const url = "https://www.financequizzes.com/learn-insurance-quizzes";
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "theme-color", content: "#0B1B2B" },
  ];
}

export function loader() {
  return json<LoaderData>({
    nowISO: new Date().toISOString(),
    faqs: [
      {
        q: "Why is insurance important?",
        a: "Insurance helps protect you from major financial losses by transferring risk to an insurer in exchange for a premium.",
      },
      {
        q: "What types of insurance should everyone consider?",
        a: "Common essentials include health, auto, home or renters, and life insurance depending on your situation.",
      },
      {
        q: "How do deductibles and premiums relate?",
        a: "A higher deductible usually means a lower premium, while a lower deductible leads to higher monthly payments.",
      },
    ],
  });
}

// Insurance quiz bank
const questionBank = [
  {
    q: "What is a deductible in an insurance policy?",
    options: [
      "The amount the insurer pays before coverage starts",
      "The amount you pay out of pocket before insurance coverage kicks in",
      "The total amount paid in premiums each year",
      "The claim amount approved by the insurer",
    ],
    correct:
      "The amount you pay out of pocket before insurance coverage kicks in",
  },
  {
    q: "Which type of insurance protects against loss of income due to illness or injury?",
    options: [
      "Health insurance",
      "Life insurance",
      "Disability insurance",
      "Auto insurance",
    ],
    correct: "Disability insurance",
  },
  {
    q: "In general, a higher insurance premium means:",
    options: [
      "Higher coverage or lower deductible",
      "Lower coverage or higher deductible",
      "No change in coverage",
      "The insurer is less reliable",
    ],
    correct: "Higher coverage or lower deductible",
  },
  {
    q: "What is term life insurance?",
    options: [
      "Insurance that covers you for a specific period only",
      "Insurance that lasts your entire lifetime",
      "An investment policy only for retirees",
      "Insurance tied to health savings accounts",
    ],
    correct: "Insurance that covers you for a specific period only",
  },
  {
    q: "Which factor usually does NOT affect your car insurance rate?",
    options: [
      "Driving history",
      "Credit score",
      "Marital status",
      "Favorite color of your car",
    ],
    correct: "Favorite color of your car",
  },
  {
    q: "What is a deductible in an insurance policy?",
    options: [
      "The amount the insurer pays before coverage starts",
      "The amount you pay out of pocket before insurance coverage kicks in",
      "The total amount paid in premiums each year",
      "The claim amount approved by the insurer",
    ],
    correct:
      "The amount you pay out of pocket before insurance coverage kicks in",
  },
  {
    q: "Which type of insurance protects against loss of income due to illness or injury?",
    options: [
      "Health insurance",
      "Life insurance",
      "Disability insurance",
      "Auto insurance",
    ],
    correct: "Disability insurance",
  },
  {
    q: "In general, a higher insurance premium means:",
    options: [
      "Higher coverage or lower deductible",
      "Lower coverage or higher deductible",
      "No change in coverage",
      "The insurer is less reliable",
    ],
    correct: "Higher coverage or lower deductible",
  },
  {
    q: "What is term life insurance?",
    options: [
      "Insurance that covers you for a specific period only",
      "Insurance that lasts your entire lifetime",
      "An investment policy only for retirees",
      "Insurance tied to health savings accounts",
    ],
    correct: "Insurance that covers you for a specific period only",
  },
  {
    q: "Which factor usually does NOT affect your car insurance rate?",
    options: [
      "Driving history",
      "Credit score",
      "Marital status",
      "Favorite color of your car",
    ],
    correct: "Favorite color of your car",
  },
  {
    q: "What is an insurance premium?",
    options: [
      "The regular payment you make to keep your policy active",
      "The amount paid after filing a claim",
      "The total coverage limit",
      "A one-time setup fee",
    ],
    correct: "The regular payment you make to keep your policy active",
  },
  {
    q: "What is a claim?",
    options: [
      "A request made to the insurer for payment after a covered loss",
      "The policyholder’s total annual payment",
      "An optional policy add-on",
      "A summary of your insurance coverage",
    ],
    correct: "A request made to the insurer for payment after a covered loss",
  },
  {
    q: "The process of assessing risk before issuing a policy is called:",
    options: ["Underwriting", "Appraisal", "Adjusting", "Reinsurance"],
    correct: "Underwriting",
  },
  {
    q: "Which document details the terms and coverage of an insurance policy?",
    options: [
      "Policy declaration page",
      "Claim form",
      "Proof of loss statement",
      "Renewal notice",
    ],
    correct: "Policy declaration page",
  },
  {
    q: "What does 'policy limit' mean?",
    options: [
      "The maximum amount the insurer will pay for a covered loss",
      "The minimum deductible required",
      "The total annual premium cost",
      "The number of people covered under the plan",
    ],
    correct: "The maximum amount the insurer will pay for a covered loss",
  },
  {
    q: "Risk pooling allows insurers to:",
    options: [
      "Spread financial risk across many policyholders",
      "Increase individual claim amounts",
      "Avoid paying large claims",
      "Eliminate underwriting costs",
    ],
    correct: "Spread financial risk across many policyholders",
  },
  {
    q: "The person or entity who receives insurance benefits is called the:",
    options: ["Beneficiary", "Underwriter", "Adjuster", "Agent"],
    correct: "Beneficiary",
  },
  {
    q: "What is moral hazard in insurance?",
    options: [
      "When insured individuals take greater risks because they are protected",
      "When insurers misprice premiums",
      "When fraud is detected after claim payment",
      "When risk cannot be calculated",
    ],
    correct:
      "When insured individuals take greater risks because they are protected",
  },
  {
    q: "An insurance policy ‘exclusion’ means:",
    options: [
      "A condition or situation not covered by the policy",
      "An increase in premium",
      "A bonus payout at maturity",
      "A cancellation notice",
    ],
    correct: "A condition or situation not covered by the policy",
  },
  {
    q: "What is an insurance adjuster responsible for?",
    options: [
      "Investigating and settling insurance claims",
      "Selling policies to customers",
      "Calculating underwriting risks only",
      "Approving policy renewals",
    ],
    correct: "Investigating and settling insurance claims",
  },
  {
    q: "What does ‘actuary’ refer to in insurance?",
    options: [
      "A professional who calculates risks and premiums using statistics",
      "A person who manages customer policies",
      "An accountant specializing in corporate taxes",
      "An agent who sells life insurance only",
    ],
    correct:
      "A professional who calculates risks and premiums using statistics",
  },
  {
    q: "A ‘beneficiary’ in an insurance policy is:",
    options: [
      "The person entitled to receive benefits or payout",
      "The policyholder’s employer",
      "The insurance company’s owner",
      "A government regulator",
    ],
    correct: "The person entitled to receive benefits or payout",
  },
  {
    q: "Which of the following is an example of insurable interest?",
    options: [
      "Owning a home and buying homeowners insurance for it",
      "Buying life insurance on a stranger",
      "Betting on sports outcomes",
      "Purchasing insurance for a competitor’s business",
    ],
    correct: "Owning a home and buying homeowners insurance for it",
  },
  {
    q: "What does indemnity mean in insurance?",
    options: [
      "Restoring the insured to their financial position before the loss",
      "Paying more than the actual loss amount",
      "Investing premiums in the stock market",
      "Withholding part of the claim",
    ],
    correct:
      "Restoring the insured to their financial position before the loss",
  },
  {
    q: "What is reinsurance?",
    options: [
      "Insurance purchased by an insurer to protect against large losses",
      "Renewing an expired policy",
      "Buying extra coverage for personal use",
      "A government-backed loan guarantee",
    ],
    correct:
      "Insurance purchased by an insurer to protect against large losses",
  },
  {
    q: "What does the term 'policyholder' refer to?",
    options: [
      "The individual or entity that owns the insurance policy",
      "The insurer providing coverage",
      "The agent who sells policies",
      "A third-party claimant",
    ],
    correct: "The individual or entity that owns the insurance policy",
  },
  {
    q: "An insurance 'endorsement' or 'rider' is used to:",
    options: [
      "Modify or add coverage to an existing policy",
      "Cancel the policy early",
      "Reduce the payout amount",
      "Change the insurer’s name",
    ],
    correct: "Modify or add coverage to an existing policy",
  },
  {
    q: "Which principle prevents someone from profiting from insurance?",
    options: [
      "Principle of indemnity",
      "Principle of subrogation",
      "Principle of utmost good faith",
      "Principle of contribution",
    ],
    correct: "Principle of indemnity",
  },
  {
    q: "Subrogation in insurance allows the insurer to:",
    options: [
      "Recover losses from a third party responsible for the damage",
      "Refund premiums at policy end",
      "Transfer coverage to another insurer",
      "Increase the policy limit",
    ],
    correct: "Recover losses from a third party responsible for the damage",
  },
  {
    q: "Utmost good faith means:",
    options: [
      "Both parties must disclose all relevant information truthfully",
      "Only the insurer must act honestly",
      "Claims are always approved automatically",
      "The policy can’t be canceled once signed",
    ],
    correct: "Both parties must disclose all relevant information truthfully",
  },

  // --- LIFE INSURANCE (26–50)
  {
    q: "Whole life insurance differs from term insurance because it:",
    options: [
      "Provides lifetime coverage and builds cash value",
      "Expires after 10 years",
      "Has no premium payments",
      "Covers only accidental death",
    ],
    correct: "Provides lifetime coverage and builds cash value",
  },
  {
    q: "What is the cash value of a life insurance policy?",
    options: [
      "The savings component that accumulates over time",
      "The face amount of the policy",
      "The policy’s surrender charge",
      "The total premium paid",
    ],
    correct: "The savings component that accumulates over time",
  },
  {
    q: "Which of the following can be borrowed against in life insurance?",
    options: [
      "Cash value in permanent policies",
      "Term life coverage",
      "Beneficiary payout",
      "Premiums paid this year",
    ],
    correct: "Cash value in permanent policies",
  },
  {
    q: "What is the death benefit?",
    options: [
      "Amount paid to beneficiaries upon insured’s death",
      "Amount paid in monthly premiums",
      "Refund at policy cancellation",
      "Tax credit received from the government",
    ],
    correct: "Amount paid to beneficiaries upon insured’s death",
  },
  // --- HEALTH INSURANCE (51–75)
  {
    q: "What does HMO stand for?",
    options: [
      "Health Maintenance Organization",
      "Hospital Medical Operations",
      "Healthcare Member Option",
      "Home Medical Office",
    ],
    correct: "Health Maintenance Organization",
  },
  {
    q: "What does PPO stand for in health insurance?",
    options: [
      "Preferred Provider Organization",
      "Patient Payment Option",
      "Private Physician Order",
      "Public Provider Office",
    ],
    correct: "Preferred Provider Organization",
  },
  {
    q: "What is a copayment (copay)?",
    options: [
      "A fixed amount you pay for a covered service at the time of care",
      "Your total annual premium",
      "A refund from your insurer",
      "A percentage of total hospital cost",
    ],
    correct: "A fixed amount you pay for a covered service at the time of care",
  },
  {
    q: "What does ‘out-of-network’ mean?",
    options: [
      "Provider not contracted with your insurance plan",
      "Emergency care only",
      "Covered at 100% by your insurer",
      "Care delivered at home",
    ],
    correct: "Provider not contracted with your insurance plan",
  },
  {
    q: "What is coinsurance?",
    options: [
      "Percentage of costs you pay after meeting your deductible",
      "A shared policy between two people",
      "An insurance company merger",
      "Premiums for group plans",
    ],
    correct: "Percentage of costs you pay after meeting your deductible",
  },
  {
    q: "A health insurance premium is paid:",
    options: [
      "Monthly, quarterly, or annually to maintain coverage",
      "Only when you visit a doctor",
      "After filing a claim",
      "At the end of each hospital stay",
    ],
    correct: "Monthly, quarterly, or annually to maintain coverage",
  },
  {
    q: "What is an annual out-of-pocket maximum?",
    options: [
      "The most you’ll pay in a year before your plan covers 100%",
      "Your total deductible limit",
      "A penalty for late payments",
      "An optional coverage add-on",
    ],
    correct: "The most you’ll pay in a year before your plan covers 100%",
  },
  {
    q: "What is a pre-existing condition?",
    options: [
      "A medical condition you had before obtaining insurance",
      "A condition discovered during treatment",
      "Any illness under emergency care",
      "A hospital-acquired infection",
    ],
    correct: "A medical condition you had before obtaining insurance",
  },
  {
    q: "What law protects people with pre-existing conditions in the U.S.?",
    options: [
      "Affordable Care Act (ACA)",
      "HIPAA Privacy Rule",
      "Medicare Act",
      "Social Security Reform Act",
    ],
    correct: "Affordable Care Act (ACA)",
  },
  {
    q: "What does the term 'in-network' mean?",
    options: [
      "Providers contracted to offer discounted rates under your plan",
      "Doctors from a different insurance company",
      "Government hospital facilities only",
      "Emergency services outside your city",
    ],
    correct: "Providers contracted to offer discounted rates under your plan",
  },
  {
    q: "An FSA (Flexible Spending Account) allows you to:",
    options: [
      "Use pre-tax dollars for qualified medical expenses",
      "Invest in mutual funds tax-free",
      "Save for retirement healthcare only",
      "Borrow money from your insurer",
    ],
    correct: "Use pre-tax dollars for qualified medical expenses",
  },
  {
    q: "What does COBRA allow employees to do?",
    options: [
      "Continue employer health coverage after leaving a job",
      "Apply for disability benefits",
      "Buy government insurance subsidies",
      "Reduce their premiums permanently",
    ],
    correct: "Continue employer health coverage after leaving a job",
  },
  {
    q: "Medicare primarily serves which group?",
    options: [
      "People aged 65 and older or with certain disabilities",
      "Children under 18",
      "All full-time workers",
      "Unemployed individuals only",
    ],
    correct: "People aged 65 and older or with certain disabilities",
  },
  {
    q: "Medicaid provides coverage for:",
    options: [
      "Low-income individuals and families",
      "Retired veterans only",
      "Foreign exchange students",
      "Private business owners",
    ],
    correct: "Low-income individuals and families",
  },
  {
    q: "What is catastrophic health insurance?",
    options: [
      "Low-premium plan covering major medical emergencies only",
      "Insurance for natural disasters",
      "Dental and vision coverage",
      "Long-term care insurance",
    ],
    correct: "Low-premium plan covering major medical emergencies only",
  },
  {
    q: "What is a Health Savings Account (HSA)?",
    options: [
      "Tax-advantaged account for medical expenses tied to high-deductible plans",
      "Company reimbursement plan",
      "Insurance-funded retirement plan",
      "Flexible work benefit",
    ],
    correct:
      "Tax-advantaged account for medical expenses tied to high-deductible plans",
  },
  {
    q: "Which type of insurance covers long-term care like nursing homes?",
    options: [
      "Long-term care insurance",
      "Disability insurance",
      "Term life insurance",
      "Travel health insurance",
    ],
    correct: "Long-term care insurance",
  },
  {
    q: "What does HIPAA regulate?",
    options: [
      "Privacy and security of medical information",
      "Prescription drug prices",
      "Insurance claim approval times",
      "Employer contribution limits",
    ],
    correct: "Privacy and security of medical information",
  },
  {
    q: "Preventive care generally includes:",
    options: [
      "Vaccines, screenings, and wellness visits",
      "Emergency surgery",
      "Hospital stays",
      "Physical therapy only",
    ],
    correct: "Vaccines, screenings, and wellness visits",
  },
  {
    q: "What is a formulary?",
    options: [
      "A list of prescription drugs covered by your plan",
      "An agreement between hospitals and insurers",
      "A deductible schedule",
      "Medical device warranty list",
    ],
    correct: "A list of prescription drugs covered by your plan",
  },
  {
    q: "What is telemedicine?",
    options: [
      "Remote healthcare services using digital communication",
      "Medical testing in labs",
      "In-person physician consultation only",
      "Insurance fraud detection system",
    ],
    correct: "Remote healthcare services using digital communication",
  },
  {
    q: "Which policy helps pay for expenses Medicare doesn’t cover?",
    options: [
      "Medigap insurance",
      "COBRA",
      "FSA plan",
      "Workers’ compensation",
    ],
    correct: "Medigap insurance",
  },
  {
    q: "A health insurance network with lower premiums but limited providers is:",
    options: ["HMO", "PPO", "EPO", "POS"],
    correct: "HMO",
  },
  {
    q: "An insurance 'grace period' refers to:",
    options: [
      "Extra days to pay your premium after due date before lapse",
      "The waiting period before coverage begins",
      "The deductible reset period",
      "The claim review timeframe",
    ],
    correct: "Extra days to pay your premium after due date before lapse",
  },
  {
    q: "What is an Explanation of Benefits (EOB)?",
    options: [
      "Statement from insurer summarizing what was paid and owed after a claim",
      "Receipt for premium payment",
      "Medical prescription form",
      "Annual income statement",
    ],
    correct:
      "Statement from insurer summarizing what was paid and owed after a claim",
  },

  // --- AUTO & PROPERTY INSURANCE (76–100)
  {
    q: "What is liability auto insurance?",
    options: [
      "Covers damage you cause to others in an accident",
      "Covers your car for theft only",
      "Covers personal injury only",
      "Pays for your car repairs regardless of fault",
    ],
    correct: "Covers damage you cause to others in an accident",
  },
  {
    q: "Collision coverage pays for:",
    options: [
      "Damage to your car from an accident regardless of fault",
      "Damage from theft or vandalism",
      "Medical expenses of others",
      "Natural disasters only",
    ],
    correct: "Damage to your car from an accident regardless of fault",
  },
  {
    q: "Comprehensive auto coverage protects against:",
    options: [
      "Non-collision damage like theft, fire, or weather",
      "Accidents with other vehicles only",
      "Personal liability lawsuits",
      "Mechanical breakdowns",
    ],
    correct: "Non-collision damage like theft, fire, or weather",
  },
  {
    q: "What is uninsured motorist coverage?",
    options: [
      "Covers you if the at-fault driver lacks insurance",
      "Covers damage you cause to others",
      "Covers rental car damage",
      "Covers commercial vehicles only",
    ],
    correct: "Covers you if the at-fault driver lacks insurance",
  },
  {
    q: "What is GAP insurance?",
    options: [
      "Covers the difference between a car’s value and loan balance after a total loss",
      "Extra liability for business use",
      "Extended warranty for auto parts",
      "A refund plan for unused mileage",
    ],
    correct:
      "Covers the difference between a car’s value and loan balance after a total loss",
  },
  {
    q: "Homeowners insurance typically covers:",
    options: [
      "Fire, theft, and certain natural disasters",
      "Flooding automatically",
      "Earthquake damage only",
      "Car accidents at home",
    ],
    correct: "Fire, theft, and certain natural disasters",
  },
  {
    q: "Renters insurance covers:",
    options: [
      "Personal belongings inside a rental unit",
      "The building structure",
      "Landlord’s equipment only",
      "Neighbor’s property damage",
    ],
    correct: "Personal belongings inside a rental unit",
  },
  {
    q: "A home insurance 'endorsement' can add coverage for:",
    options: [
      "Jewelry, art, or collectibles",
      "Electricity costs",
      "Mortgage insurance",
      "General wear and tear",
    ],
    correct: "Jewelry, art, or collectibles",
  },
  {
    q: "Flood insurance in the U.S. is usually purchased through:",
    options: [
      "National Flood Insurance Program (NFIP)",
      "Private auto insurers",
      "Mortgage lenders directly",
      "Homeowners policies automatically",
    ],
    correct: "National Flood Insurance Program (NFIP)",
  },
  {
    q: "What is a home inventory used for?",
    options: [
      "Documenting personal property for claims",
      "Tracking monthly utility bills",
      "Calculating taxes",
      "Listing mortgage payments",
    ],
    correct: "Documenting personal property for claims",
  },
  {
    q: "Replacement cost coverage reimburses you for:",
    options: [
      "The cost to replace damaged property without depreciation",
      "The property’s current market value",
      "The original purchase price",
      "Half the insured value",
    ],
    correct: "The cost to replace damaged property without depreciation",
  },
  {
    q: "Actual cash value coverage means:",
    options: [
      "Payment equals replacement cost minus depreciation",
      "Payment equals full market price",
      "No deductible applies",
      "Claim paid immediately",
    ],
    correct: "Payment equals replacement cost minus depreciation",
  },
  {
    q: "Which event is typically excluded from standard home insurance?",
    options: ["Floods", "Fire", "Theft", "Windstorm"],
    correct: "Floods",
  },
  {
    q: "A personal umbrella policy provides:",
    options: [
      "Extra liability coverage beyond home and auto limits",
      "Health coverage for dependents",
      "Travel insurance benefits",
      "Business interruption coverage",
    ],
    correct: "Extra liability coverage beyond home and auto limits",
  },
  {
    q: "What is personal injury protection (PIP)?",
    options: [
      "Covers medical expenses for you and passengers after an accident",
      "Covers property damage only",
      "Covers theft of car accessories",
      "Covers legal defense fees",
    ],
    correct: "Covers medical expenses for you and passengers after an accident",
  },
  {
    q: "Which factor most affects home insurance premiums?",
    options: [
      "Location and risk of natural disasters",
      "House paint color",
      "Number of rooms",
      "Year purchased",
    ],
    correct: "Location and risk of natural disasters",
  },
  {
    q: "Earthquake insurance is:",
    options: [
      "A separate policy or rider added to home insurance",
      "Automatically included",
      "Only available to renters",
      "Covered under federal aid only",
    ],
    correct: "A separate policy or rider added to home insurance",
  },
  {
    q: "Liability coverage protects policyholders from:",
    options: [
      "Legal responsibility for injuries or damage to others",
      "Losses to their own property",
      "Premium increases",
      "Unpaid loans",
    ],
    correct: "Legal responsibility for injuries or damage to others",
  },
  {
    q: "What is an insurance deductible trade-off?",
    options: [
      "Higher deductible = lower premium, and vice versa",
      "Lower deductible = lower premium",
      "Higher deductible = higher coverage",
      "Deductible doesn’t affect premium",
    ],
    correct: "Higher deductible = lower premium, and vice versa",
  },
  {
    q: "Which coverage protects against identity theft?",
    options: [
      "Identity restoration insurance",
      "Umbrella policy",
      "Home contents insurance",
      "Liability insurance",
    ],
    correct: "Identity restoration insurance",
  },

  // --- BUSINESS, LIABILITY, SPECIALTY (101–150)
  {
    q: "What is professional liability insurance?",
    options: [
      "Covers errors, omissions, or negligence in professional services",
      "Covers business property from fire",
      "Covers employee theft only",
      "Covers product shipping delays",
    ],
    correct: "Covers errors, omissions, or negligence in professional services",
  },
  {
    q: "What is product liability insurance?",
    options: [
      "Protects manufacturers against claims from defective products",
      "Covers loss of business income",
      "Covers inventory shrinkage",
      "Covers retail theft by employees",
    ],
    correct: "Protects manufacturers against claims from defective products",
  },
  {
    q: "Workers’ compensation insurance covers:",
    options: [
      "Employee injuries or illnesses sustained on the job",
      "Unemployment benefits",
      "Health coverage for retirees",
      "Business debt repayment",
    ],
    correct: "Employee injuries or illnesses sustained on the job",
  },
  {
    q: "What is business interruption insurance?",
    options: [
      "Covers income loss during temporary business closure",
      "Covers property repairs",
      "Covers employee turnover",
      "Covers unpaid invoices",
    ],
    correct: "Covers income loss during temporary business closure",
  },
  {
    q: "Cyber insurance helps protect against:",
    options: [
      "Data breaches and digital security incidents",
      "Hardware failures",
      "Workplace discrimination claims",
      "Uninsured subcontractors",
    ],
    correct: "Data breaches and digital security incidents",
  },
  {
    q: "Commercial auto insurance covers:",
    options: [
      "Vehicles used for business purposes",
      "Employee commuting vehicles",
      "Personal family cars only",
      "Motorcycles and boats only",
    ],
    correct: "Vehicles used for business purposes",
  },
  {
    q: "What is a fidelity bond?",
    options: [
      "Insurance that protects against employee dishonesty or fraud",
      "Surety bond for contractors",
      "Customer satisfaction guarantee",
      "Stock market protection",
    ],
    correct: "Insurance that protects against employee dishonesty or fraud",
  },
  {
    q: "Directors and Officers (D&O) insurance covers:",
    options: [
      "Company leaders against lawsuits for management decisions",
      "General property damage",
      "Employee accidents",
      "Product recalls",
    ],
    correct: "Company leaders against lawsuits for management decisions",
  },
  {
    q: "What is an umbrella policy used for?",
    options: [
      "Provides extra liability coverage above other policy limits",
      "Covers car and home repairs",
      "Adds flood protection",
      "Replaces standard health insurance",
    ],
    correct: "Provides extra liability coverage above other policy limits",
  },
  {
    q: "What does EPLI stand for?",
    options: [
      "Employment Practices Liability Insurance",
      "Employee Pay Loss Insurance",
      "Enterprise Policy Legal Insurance",
      "Employer Pension Liability Inclusion",
    ],
    correct: "Employment Practices Liability Insurance",
  },
  {
    q: "Which insurance covers damage during goods transport?",
    options: [
      "Marine cargo insurance",
      "Home insurance",
      "Auto liability",
      "Fidelity bond",
    ],
    correct: "Marine cargo insurance",
  },
  {
    q: "Surety bonds guarantee:",
    options: [
      "A contractor will fulfill a contract’s terms",
      "Payment of employee salaries",
      "Vehicle loan repayment",
      "Delivery of goods",
    ],
    correct: "A contractor will fulfill a contract’s terms",
  },
  {
    q: "Travel insurance typically covers:",
    options: [
      "Trip cancellations, medical emergencies, and lost luggage",
      "Home property losses",
      "Car accidents at destination",
      "Airline profit margins",
    ],
    correct: "Trip cancellations, medical emergencies, and lost luggage",
  },
  {
    q: "Pet insurance helps with:",
    options: [
      "Veterinary expenses for illnesses and accidents",
      "Farm property repairs",
      "Business inventory losses",
      "Legal claims from neighbors",
    ],
    correct: "Veterinary expenses for illnesses and accidents",
  },
  {
    q: "Crop insurance helps farmers recover from:",
    options: [
      "Losses due to natural disasters or price declines",
      "Worker shortages",
      "Machinery breakdowns",
      "Soil testing errors",
    ],
    correct: "Losses due to natural disasters or price declines",
  },
  {
    q: "Reinsurance protects:",
    options: [
      "Insurance companies from catastrophic losses",
      "Homeowners from fire damage",
      "Drivers from uninsured motorists",
      "Patients from hospital errors",
    ],
    correct: "Insurance companies from catastrophic losses",
  },
  {
    q: "Parametric insurance pays out based on:",
    options: [
      "A predefined event trigger, not actual loss assessment",
      "Claim adjuster’s estimate",
      "Court judgment amount",
      "Insured’s credit score",
    ],
    correct: "A predefined event trigger, not actual loss assessment",
  },
  {
    q: "Captive insurance refers to:",
    options: [
      "A company-owned insurer formed to cover its own risks",
      "Government-run public insurance",
      "Nonprofit mutual plans only",
      "Temporary travel coverage",
    ],
    correct: "A company-owned insurer formed to cover its own risks",
  },
  {
    q: "What is ESG risk in insurance?",
    options: [
      "Environmental, Social, and Governance factors affecting underwriting",
      "Economic Spending Growth index",
      "Employee Safety Grant policy",
      "Extended Service Guarantee",
    ],
    correct:
      "Environmental, Social, and Governance factors affecting underwriting",
  },
  {
    q: "AI in insurance is primarily used for:",
    options: [
      "Fraud detection, underwriting, and claim automation",
      "Sales scripting only",
      "Raising premiums manually",
      "Advertising online",
    ],
    correct: "Fraud detection, underwriting, and claim automation",
  },
  {
    q: "Telematics insurance bases premiums on:",
    options: [
      "Real-time driving behavior data",
      "Home location only",
      "Credit score alone",
      "Annual income bracket",
    ],
    correct: "Real-time driving behavior data",
  },
  {
    q: "Usage-based insurance (UBI) is popular for:",
    options: [
      "Drivers who pay based on miles driven or driving habits",
      "Life insurance savings plans",
      "Employer liability coverage",
      "Crop insurance programs",
    ],
    correct: "Drivers who pay based on miles driven or driving habits",
  },
  {
    q: "What is microinsurance?",
    options: [
      "Low-cost insurance for low-income individuals or small risks",
      "Corporate reinsurance policy",
      "Mutual fund for insurers",
      "Short-term travel coverage",
    ],
    correct: "Low-cost insurance for low-income individuals or small risks",
  },
  {
    q: "Blockchain in insurance can improve:",
    options: [
      "Transparency and fraud prevention in claims processing",
      "Premium pricing secrecy",
      "Manual underwriting only",
      "Print-based documentation",
    ],
    correct: "Transparency and fraud prevention in claims processing",
  },
  {
    q: "What is risk retention?",
    options: [
      "Choosing to bear financial risk instead of transferring it to insurance",
      "Buying more coverage for small risks",
      "Pooling with multiple insurers",
      "Eliminating all losses through diversification",
    ],
    correct:
      "Choosing to bear financial risk instead of transferring it to insurance",
  },
  {
    q: "What is catastrophe modeling?",
    options: [
      "Using data to predict losses from large-scale disasters",
      "Reconstructing past insurance fraud",
      "Estimating small claims manually",
      "Adjusting reinsurance terms",
    ],
    correct: "Using data to predict losses from large-scale disasters",
  },
  {
    q: "What is adverse selection?",
    options: [
      "When higher-risk individuals are more likely to buy insurance",
      "When all policyholders share equal premiums",
      "When insurers raise premiums arbitrarily",
      "When only healthy people apply for coverage",
    ],
    correct: "When higher-risk individuals are more likely to buy insurance",
  },
  {
    q: "What is lapse in insurance?",
    options: [
      "Policy termination due to nonpayment of premium",
      "Renewal after expiration",
      "Temporary claim freeze",
      "Coverage increase request",
    ],
    correct: "Policy termination due to nonpayment of premium",
  },
  {
    q: "What is an actuary’s main role?",
    options: [
      "Assess risk and determine premium rates",
      "Sell policies to customers",
      "File claims with regulators",
      "Handle marketing campaigns",
    ],
    correct: "Assess risk and determine premium rates",
  },
  {
    q: "InsurTech refers to:",
    options: [
      "Technology-driven innovation in the insurance industry",
      "A brand of insurance company",
      "Short-term loan insurance",
      "Reinsurance regulation",
    ],
    correct: "Technology-driven innovation in the insurance industry",
  },
  {
    q: "What does loss ratio measure?",
    options: [
      "Claims paid divided by premiums earned",
      "Company profit margin",
      "Underwriting growth rate",
      "Customer retention rate",
    ],
    correct: "Claims paid divided by premiums earned",
  },
  {
    q: "Rebating in insurance means:",
    options: [
      "Returning part of the agent’s commission to the policyholder unlawfully",
      "Refunding overpaid premiums",
      "Rewarding customer loyalty",
      "Providing legal discounts",
    ],
    correct:
      "Returning part of the agent’s commission to the policyholder unlawfully",
  },
  {
    q: "Underinsurance occurs when:",
    options: [
      "Coverage amount is less than actual value of insured item",
      "Premiums exceed expected payout",
      "Policy includes unnecessary riders",
      "Deductible is zero",
    ],
    correct: "Coverage amount is less than actual value of insured item",
  },
  {
    q: "Moral hazard increases when:",
    options: [
      "Policyholders act less cautiously after getting insurance",
      "Premiums are too high",
      "Agents sell fewer policies",
      "Reinsurance is purchased",
    ],
    correct: "Policyholders act less cautiously after getting insurance",
  },
  {
    q: "Underwriting ensures that:",
    options: [
      "Premiums reflect the applicant’s risk level",
      "Claims are processed automatically",
      "Brokers earn higher commissions",
      "All risks are accepted",
    ],
    correct: "Premiums reflect the applicant’s risk level",
  },
  {
    q: "Pooling risk means:",
    options: [
      "Combining risks from many policyholders to make losses predictable",
      "Eliminating high-risk customers",
      "Segmenting policies by age only",
      "Sharing profits equally among insurers",
    ],
    correct:
      "Combining risks from many policyholders to make losses predictable",
  },
  {
    q: "Which insurance concept prevents double recovery for the same loss?",
    options: [
      "Principle of contribution",
      "Moral hazard",
      "Adverse selection",
      "Utmost good faith",
    ],
    correct: "Principle of contribution",
  },
  {
    q: "What is the purpose of insurance regulation?",
    options: [
      "Protect policyholders and ensure insurer solvency",
      "Increase premium rates",
      "Limit market competition",
      "Standardize marketing materials",
    ],
    correct: "Protect policyholders and ensure insurer solvency",
  },
  {
    q: "A reinsurance treaty is:",
    options: [
      "An ongoing agreement between two insurers to share risk",
      "A one-time reinsurance contract",
      "Government mandate on insurance sharing",
      "Consumer claim arbitration process",
    ],
    correct: "An ongoing agreement between two insurers to share risk",
  },
  {
    q: "Which of the following is a catastrophe bond (Cat bond)?",
    options: [
      "A bond that pays insurers if a specified disaster occurs",
      "Corporate debt for mergers",
      "A loan to reinsurers",
      "A fixed-income policy",
    ],
    correct: "A bond that pays insurers if a specified disaster occurs",
  },
  {
    q: "Solvency in insurance refers to:",
    options: [
      "An insurer’s ability to meet its financial obligations",
      "A customer’s credit rating",
      "The insured’s annual income",
      "Government subsidy for insurers",
    ],
    correct: "An insurer’s ability to meet its financial obligations",
  },
  // --- GLOBAL, CLAIMS, SPECIALIZED & MODERN INSURANCE (121–150)
  {
    q: "What is coinsurance in property insurance?",
    options: [
      "A clause requiring the insured to cover a portion of loss if underinsured",
      "When two insurers split claim payments equally",
      "A shared deductible between insurer and agent",
      "A refund system for claim-free years",
    ],
    correct:
      "A clause requiring the insured to cover a portion of loss if underinsured",
  },
  {
    q: "What is salvage value in insurance?",
    options: [
      "The remaining value of damaged property after a claim is paid",
      "The deductible refund amount",
      "The total claim settlement value",
      "The policy’s cancellation fee",
    ],
    correct: "The remaining value of damaged property after a claim is paid",
  },
  {
    q: "Which type of insurance covers ships and cargo at sea?",
    options: [
      "Marine insurance",
      "Aviation insurance",
      "Cargo transit guarantee",
      "Global freight insurance",
    ],
    correct: "Marine insurance",
  },
  {
    q: "Aviation insurance primarily covers:",
    options: [
      "Aircraft damage and third-party liability from flight operations",
      "Pilot income loss only",
      "Passenger baggage claims",
      "Airport terminal repairs",
    ],
    correct: "Aircraft damage and third-party liability from flight operations",
  },
  {
    q: "Event cancellation insurance protects organizers against:",
    options: [
      "Losses due to unforeseen cancellations, weather, or emergencies",
      "Loss of ticket sales only",
      "Performer overbookings",
      "Customer refunds from poor reviews",
    ],
    correct: "Losses due to unforeseen cancellations, weather, or emergencies",
  },
  {
    q: "What is key person insurance used for?",
    options: [
      "Protects a business from financial loss due to the death or disability of a key employee",
      "Insures all employees equally",
      "Provides health benefits for executives only",
      "Covers company equipment theft",
    ],
    correct:
      "Protects a business from financial loss due to the death or disability of a key employee",
  },
  {
    q: "Which insurance covers losses due to employee theft or embezzlement?",
    options: [
      "Fidelity insurance",
      "Cyber insurance",
      "Professional liability",
      "Product warranty",
    ],
    correct: "Fidelity insurance",
  },
  {
    q: "What does retroactive date mean in a claims-made policy?",
    options: [
      "The earliest date an incident can occur for coverage to apply",
      "The policy’s expiration date",
      "The date the claim is settled",
      "The renewal deadline",
    ],
    correct: "The earliest date an incident can occur for coverage to apply",
  },
  {
    q: "What is run-off insurance?",
    options: [
      "Coverage for claims made after a business ceases operations",
      "Temporary coverage for startups",
      "Travel protection for executives",
      "High-risk vehicle insurance",
    ],
    correct: "Coverage for claims made after a business ceases operations",
  },
  {
    q: "Which insurance protects investors and startups from funding-related risks?",
    options: [
      "Venture capital liability insurance",
      "Credit default swap",
      "Reinsurance contract",
      "Corporate indemnity plan",
    ],
    correct: "Venture capital liability insurance",
  },
  {
    q: "Which clause allows an insurer to cancel a policy with notice?",
    options: [
      "Cancellation clause",
      "Assignment clause",
      "Waiver clause",
      "Renewal clause",
    ],
    correct: "Cancellation clause",
  },
  {
    q: "A policy’s grace period allows:",
    options: [
      "Late premium payment without policy lapse",
      "Automatic renewal for one year",
      "Immediate payout of claims",
      "Premium discount after one year",
    ],
    correct: "Late premium payment without policy lapse",
  },
  {
    q: "Which body regulates insurance companies in the United States?",
    options: [
      "State Insurance Departments",
      "Federal Reserve Board",
      "FDIC",
      "World Bank",
    ],
    correct: "State Insurance Departments",
  },
  {
    q: "What is the purpose of the National Association of Insurance Commissioners (NAIC)?",
    options: [
      "Develops model laws and standards for state insurance regulation",
      "Sets national premium rates",
      "Approves all insurance claims",
      "Handles all reinsurance contracts",
    ],
    correct: "Develops model laws and standards for state insurance regulation",
  },
  {
    q: "Which insurance helps cover damages caused by cyber extortion or ransomware?",
    options: [
      "Cyber liability insurance",
      "Commercial property insurance",
      "Umbrella liability",
      "Workers’ compensation",
    ],
    correct: "Cyber liability insurance",
  },
  {
    q: "What is parametric weather insurance often used for?",
    options: [
      "Payouts triggered automatically by predefined climate events",
      "Coverage for crop rotation loss",
      "Reducing premiums for coastal homes",
      "Travel accident protection",
    ],
    correct: "Payouts triggered automatically by predefined climate events",
  },
  {
    q: "Which term describes fraudulent insurance claims?",
    options: [
      "Soft fraud or hard fraud",
      "Policy misstatement",
      "Premium inversion",
      "Risk reassignment",
    ],
    correct: "Soft fraud or hard fraud",
  },
  {
    q: "What is an adjuster’s main goal in claims management?",
    options: [
      "Investigate claims and determine fair payment amounts",
      "Sell additional policies",
      "Increase premium collections",
      "Negotiate agent commissions",
    ],
    correct: "Investigate claims and determine fair payment amounts",
  },
  {
    q: "Which insurance principle discourages false claims by requiring evidence of loss?",
    options: [
      "Principle of indemnity",
      "Principle of insurable interest",
      "Principle of subrogation",
      "Principle of utmost good faith",
    ],
    correct: "Principle of indemnity",
  },
  {
    q: "What is an actuary’s key output used by insurers?",
    options: [
      "Mortality tables and risk pricing models",
      "Sales scripts",
      "Advertising budgets",
      "Policyholder surveys",
    ],
    correct: "Mortality tables and risk pricing models",
  },
  {
    q: "Which insurance protects cryptocurrency exchanges from theft or hacking?",
    options: [
      "Digital asset insurance",
      "Credit insurance",
      "Financial guarantee bond",
      "Blockchain indemnity plan",
    ],
    correct: "Digital asset insurance",
  },
  {
    q: "Credit insurance helps protect lenders against:",
    options: [
      "Borrowers defaulting on payments",
      "Fraudulent auto titles",
      "Loss from natural disasters",
      "Interest rate increases",
    ],
    correct: "Borrowers defaulting on payments",
  },
  {
    q: "Mortgage insurance protects:",
    options: [
      "Lenders in case a borrower defaults on a home loan",
      "Homeowners from fire loss",
      "Tenants from eviction",
      "Builders from delays",
    ],
    correct: "Lenders in case a borrower defaults on a home loan",
  },
  {
    q: "What is residual market insurance?",
    options: [
      "Coverage provided by government programs for high-risk individuals",
      "Optional extended coverage from reinsurers",
      "An investment-linked plan",
      "Private sector-only health plan",
    ],
    correct:
      "Coverage provided by government programs for high-risk individuals",
  },
  {
    q: "What is retrocession in insurance?",
    options: [
      "Reinsurance of reinsurance contracts",
      "Refund for unused premiums",
      "Policy reinstatement clause",
      "Multi-insurer collaboration",
    ],
    correct: "Reinsurance of reinsurance contracts",
  },
  {
    q: "What is the main goal of loss control programs?",
    options: [
      "Reduce the frequency and severity of insurance claims",
      "Increase claim settlement speed",
      "Limit customer refunds",
      "Track policy renewals",
    ],
    correct: "Reduce the frequency and severity of insurance claims",
  },
  {
    q: "Insurance fraud is considered:",
    options: [
      "A criminal offense punishable by fines or imprisonment",
      "A regulatory infraction only",
      "A minor civil violation",
      "A deductible dispute",
    ],
    correct: "A criminal offense punishable by fines or imprisonment",
  },
  {
    q: "What does reinsurer solvency protect against?",
    options: [
      "Inability of reinsurers to pay primary insurers during large losses",
      "Overpayment of premiums",
      "Agent misrepresentation",
      "Duplicate policies",
    ],
    correct:
      "Inability of reinsurers to pay primary insurers during large losses",
  },
  {
    q: "Which global standard promotes fair conduct in insurance distribution?",
    options: [
      "IAIS Insurance Core Principles",
      "OECD Trade Charter",
      "Basel III Guidelines",
      "IFRS 17 Accounting Standard",
    ],
    correct: "IAIS Insurance Core Principles",
  },
  {
    q: "What is IFRS 17 in insurance accounting?",
    options: [
      "An international standard governing insurance contract reporting",
      "A claim settlement policy",
      "An anti-fraud compliance program",
      "An investment fund benchmark",
    ],
    correct: "An international standard governing insurance contract reporting",
  },
  {
    q: "Which insurance covers losses from supply chain disruption?",
    options: [
      "Contingent business interruption insurance",
      "Professional liability insurance",
      "Commercial auto coverage",
      "EPLI",
    ],
    correct: "Contingent business interruption insurance",
  },
  {
    q: "What is catastrophe reinsurance used for?",
    options: [
      "Protect insurers from extreme, large-scale disaster losses",
      "Lower small claim payouts",
      "Support policy renewals",
      "Fund marketing expenses",
    ],
    correct: "Protect insurers from extreme, large-scale disaster losses",
  },
  {
    q: "What does aggregate limit mean in an insurance policy?",
    options: [
      "The maximum amount an insurer will pay during a policy period",
      "The deductible amount per claim",
      "The total premium owed annually",
      "The minimum payout threshold",
    ],
    correct: "The maximum amount an insurer will pay during a policy period",
  },
  {
    q: "Which insurance concept ensures fairness by pricing according to risk level?",
    options: [
      "Risk-based pricing",
      "Community rating",
      "Fixed-rate pooling",
      "Moral hazard avoidance",
    ],
    correct: "Risk-based pricing",
  },
  {
    q: "Why do insurers perform claim audits?",
    options: [
      "To detect errors, inefficiencies, or potential fraud in claim handling",
      "To increase customer premiums",
      "To reassign policy agents",
      "To lower liability coverage",
    ],
    correct:
      "To detect errors, inefficiencies, or potential fraud in claim handling",
  },
];

export default function InsuranceQuiz({}: Route.ComponentProps) {
  const { faqs } = useLoaderData() as LoaderData;

  // Select 3 random questions each round
  const pickRandom = () =>
    [...questionBank].sort(() => 0.5 - Math.random()).slice(0, 3);

  const [displayed, setDisplayed] = useState(pickRandom);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [stats, setStats] = useState(() => ({
    todayAnswered: 0,
    todayCorrect: 0,
    todayStreak: 0,
    todayBest: 0,
    lastDate: new Date().toISOString().slice(0, 10),
  }));

  // Load stored stats and reset daily
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("insuranceQuizStats");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const today = new Date().toISOString().slice(0, 10);
        if (parsed.lastDate !== today) {
          setStats({
            todayAnswered: 0,
            todayCorrect: 0,
            todayStreak: 0,
            todayBest: parsed.todayBest || 0,
            lastDate: today,
          });
        } else {
          setStats({
            todayAnswered: Number(parsed.todayAnswered) || 0,
            todayCorrect: Number(parsed.todayCorrect) || 0,
            todayStreak: Number(parsed.todayStreak) || 0,
            todayBest: Number(parsed.todayBest) || 0,
            lastDate: today,
          });
        }
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  // Save stats persistently
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("insuranceQuizStats", JSON.stringify(stats));
    }
  }, [stats]);

  // Handle answers and streak updates
  const handleAnswer = (
    question: string,
    selected: string,
    correct: string
  ) => {
    if (answers[question]) return;

    const newAnswers = { ...answers, [question]: selected };
    setAnswers(newAnswers);

    setStats((prev) => {
      const isCorrect = selected === correct;
      return {
        todayAnswered: prev.todayAnswered + 1,
        todayCorrect: prev.todayCorrect + (isCorrect ? 1 : 0),
        todayStreak: prev.todayStreak,
        todayBest: prev.todayBest,
        lastDate: new Date().toISOString().slice(0, 10),
      };
    });

    const totalAnsweredThisRound = Object.keys(newAnswers).length;
    if (totalAnsweredThisRound === 3) {
      const correctCount = displayed.filter(
        (q) => newAnswers[q.q] === q.correct
      ).length;
      setStats((prev) => {
        const newStreak = correctCount === 3 ? prev.todayStreak + 1 : 0;
        const best = Math.max(prev.todayBest, newStreak);
        return { ...prev, todayStreak: newStreak, todayBest: best };
      });
    }
  };

  const refreshQuiz = () => {
    setDisplayed(pickRandom());
    setAnswers({});
  };

  return (
    <main className="bg-white text-[#0B1B2B]">
      {/* QUIZ SECTION */}
      <section
        className="relative bg-[#F9FBFD] pb-10 px-4 border-b border-slate-200"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #E5E9EE 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        {/* === Breadcrumb navigation (visible) === */}
        <nav
          className="text-sm text-slate-600 px-6 pb-4 pt-3 max-w-6xl mx-auto"
          aria-label="Breadcrumb"
        >
          <ol className="list-none p-0 inline-flex space-x-2">
            <li>
              <a href="/" className="text-teal-700 hover:underline font-medium">
                Home
              </a>
            </li>
            <li className="text-slate-400">›</li>
            <li aria-current="page" className="text-slate-700 font-semibold">
              Learn Insurance Quizzes
            </li>
          </ol>
        </nav>
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto w-full sm:w-[720px] text-left rounded-3xl border border-slate-200 bg-white px-10 py-8 shadow-xl">
            {/* Stats row */}
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

            {/* Quiz questions */}
            {displayed.map((item, i) => {
              const chosen = answers[item.q];
              return (
                <div key={i} className="mb-10 last:mb-0">
                  <p className="text-xl font-bold text-[#0B1B2B] mb-4">
                    {i + 1}. {item.q}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {item.options.map((opt) => {
                      const isSelected = chosen === opt;
                      const isCorrect = item.correct === opt;
                      let classes =
                        "bg-teal-50 border-teal-100 text-teal-800 hover:bg-teal-100 hover:border-teal-400";
                      if (chosen) {
                        if (isSelected && isCorrect)
                          classes =
                            "bg-green-100 border-green-400 text-green-900 hover:bg-green-100";
                        else if (isSelected && !isCorrect)
                          classes =
                            "bg-red-100 border-red-400 text-red-900 hover:bg-red-100";
                        else if (isCorrect)
                          classes =
                            "bg-green-50 border-green-200 text-green-800 hover:bg-green-50";
                        else
                          classes =
                            "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-50";
                      }

                      return (
                        <li
                          key={opt}
                          onClick={() =>
                            handleAnswer(item.q, opt, item.correct)
                          }
                          className={`cursor-pointer rounded-xl font-semibold px-5 py-4 text-base border transition active:scale-[0.98] ${classes}`}
                        >
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                  {chosen && (
                    <div className="mt-3 text-sm text-slate-700">
                      <span className="font-semibold text-teal-700">
                        Correct Answer:
                      </span>{" "}
                      {item.correct}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mb-3 text-center">
              <button
                onClick={refreshQuiz}
                className="cursor-pointer rounded-xl bg-teal-700 px-6 py-2 text-white font-semibold text-lg hover:bg-teal-800 transition"
              >
                NEXT 3 QUESTIONS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE SECTION */}
      <section
        id="insurance-article"
        className="mx-auto max-w-4xl px-6 py-20 text-center border-b border-slate-200"
      >
        <h1 className="text-4xl font-extrabold text-[#0B1B2B] mb-6">
          Insurance and Risk Management: Protecting Your Financial Future
        </h1>

        <div className="mx-auto max-w-3xl text-left space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg">
            Insurance is a safety net that protects your assets, income, and
            loved ones from unexpected financial shocks. Understanding how
            premiums, deductibles, and coverage limits interact is key to making
            smart policy choices.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">
              Key Insurance Concepts
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-medium">Premium:</span> what you pay
                monthly or annually to maintain coverage.
              </li>
              <li>
                <span className="font-medium">Deductible:</span> the
                out-of-pocket amount you must pay before your insurer
                contributes.
              </li>
              <li>
                <span className="font-medium">Coverage limit:</span> the maximum
                your insurer will pay for a covered loss.
              </li>
              <li>
                <span className="font-medium">Policy type:</span> auto, health,
                life, renters, and disability-each serving a different
                protection goal.
              </li>
            </ul>
          </div>

          <p>
            Smart insurance decisions are about balancing cost with risk
            protection. Always compare coverage levels and consider your
            emergency savings before choosing deductibles or add-ons.
          </p>

          {/* Citations */}
          <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1B2B] mb-3">
              Citations & References
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                Insurance Bureau of Canada. (2024). *Understanding Your Policy.*
              </li>
              <li>OECD. (2023). *Global Insurance Market Trends.*</li>
              <li>
                Consumer Financial Protection Bureau. (2023). *Insurance and
                Risk Literacy.*
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ANSWERS */}
      <section id="quiz-answers" className="mx-auto max-w-5xl px-6 pt-16">
        <h3 className="text-3xl font-bold text-[#0B1B2B] mb-4 text-center">
          Insurance Quiz Answers
        </h3>
        <p className="text-slate-700 text-center max-w-2xl mx-auto mb-10">
          Review all insurance questions and correct answers to deepen your
          understanding of risk and coverage.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-200">
          {questionBank.map((q, i) => (
            <div key={i} className="p-6">
              <p className="font-semibold text-lg text-[#0B1B2B] mb-2">
                {i + 1}. {q.q}
              </p>
              <p className="text-slate-700">
                <span className="font-medium text-teal-700">Answer: </span>
                {q.correct}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-6 pt-24 pb-24">
        <h2 className="text-4xl font-extrabold text-[#0B1B2B] mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="rounded-2xl border border-slate-200 bg-white divide-y divide-slate-200 shadow-sm">
          {faqs.map((f) => (
            <details key={f.q} className="group open:bg-slate-50">
              <summary className="cursor-pointer list-none px-6 py-5 text-lg font-semibold text-[#0B1B2B]">
                {f.q}
              </summary>
              <div className="px-6 pb-5 text-slate-700 text-base">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
      {/* === Structured Data: WebSite + FAQ + Q&A === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Finance Quizzes",
            url: "https://www.financequizzes.com/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.financequizzes.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* === FAQPage (for FAQ section only) === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* === QAPage (for quiz questions, not FAQ) === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "QAPage",
            mainEntity: questionBank.slice(0, 20).map((q) => ({
              "@type": "Question",
              name: q.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: q.correct,
              },
            })),
          }),
        }}
      />

      {/* === BreadcrumbList (for structured data) === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.financequizzes.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Learn Insurance Quizzes",
                item: "https://www.financequizzes.com/learn-insurance-quizzes",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
