import type { FAQItem, FinanceQA } from "./financeQuizQuestionsData";
import { FINANCE_QUIZ_QUESTIONS } from "./financeQuizQuestionsData";
import { JsonLdScript } from "./JsonLdScript";

type Props = {
  faqs: FAQItem[];
  pageUrl: string;
};

function toSiteUrl(pageUrl: string): string {
  try {
    const u = new URL(pageUrl);
    return `${u.origin}/`;
  } catch {
    return "https://www.financequizzes.com/";
  }
}

function toPath(pageUrl: string): string {
  try {
    const u = new URL(pageUrl);
    return u.pathname || "/";
  } catch {
    return "/finance-quiz-questions";
  }
}

function clampQuestions(items: FinanceQA[], limit: number): FinanceQA[] {
  const safe = Array.isArray(items) ? items.filter((x) => x?.q && x?.a) : [];
  return safe.slice(0, Math.max(0, Math.min(limit, safe.length)));
}

export function FinanceQuizQuestionsJsonLd({ faqs, pageUrl }: Props) {
  const siteUrl = toSiteUrl(pageUrl);
  const path = toPath(pageUrl);
  const pageId = `${siteUrl}#webpage${path}`;

  const questionItems = clampQuestions(FINANCE_QUIZ_QUESTIONS, 30).map(
    (item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      },
    }),
  );

  const faqEntities = (faqs || []).slice(0, 20).map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));

  const graph = [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Finance Quizzes",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "FinanceQuizzes.com",
      publisher: { "@id": `${siteUrl}#organization` },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": pageId,
      url: pageUrl,
      name: "Finance Quiz Questions and Answers",
      isPartOf: { "@id": `${siteUrl}#website` },
      about: { "@id": `${siteUrl}#organization` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Finance Quiz Questions",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#question-bank`,
      name: "Finance quiz questions and answers",
      itemListElement: questionItems,
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqEntities,
    },
  ];

  return <JsonLdScript data={{ "@context": "https://schema.org", "@graph": graph }} />;
}
