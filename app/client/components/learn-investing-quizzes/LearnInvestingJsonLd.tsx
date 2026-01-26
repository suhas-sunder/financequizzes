import type { FAQItem, QuizQuestion } from "./learnInvestingQuizData";

type Props = {
  faqs: FAQItem[];
  questionBank: QuizQuestion[];
  pageUrl: string;
};

export function LearnInvestingJsonLd({ faqs, questionBank, pageUrl }: Props) {
  return (
    <>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              ...faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
              ...questionBank.map((q) => ({
                "@type": "Question",
                name: q.q,
                acceptedAnswer: { "@type": "Answer", text: q.correct },
              })),
            ],
          }),
        }}
      />

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
                name: "Learn Investing Quizzes",
                item: pageUrl,
              },
            ],
          }),
        }}
      />
    </>
  );
}
