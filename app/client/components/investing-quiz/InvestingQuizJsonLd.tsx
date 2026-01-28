import type { FAQItem } from "./investingQuizData";
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

export function InvestingQuizJsonLd({ faqs, pageUrl }: Props) {
  const siteUrl = toSiteUrl(pageUrl);

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
      name: "Finance Quizzes",
      publisher: { "@id": `${siteUrl}#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Investing Quiz",
      isPartOf: { "@id": `${siteUrl}#website` },
      about: { "@id": `${pageUrl}#softwareapplication` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${pageUrl}#softwareapplication`,
      name: "Investing Quiz",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      url: pageUrl,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: { "@id": `${siteUrl}#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faqpage`,
      url: pageUrl,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ];

  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@graph": graph,
      }}
    />
  );
}
