import { json } from "@remix-run/node";
import type { Route } from "./+types/terms-of-service";

export function meta({}: Route.MetaArgs) {
  const title = "Terms of Service | FinanceQuizzes.com";
  const description =
    "Read the terms and conditions for using FinanceQuizzes.com. By accessing our site, you agree to these terms.";
  const url = "https://www.financequizzes.com/terms-of-service";
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { name: "theme-color", content: "#0B1B2B" },
  ];
}

export function loader() {
  return json({});
}

export default function TermsOfService() {
  return (
    <main className="bg-white text-[#0B1B2B]">
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
            Terms of Service
          </li>
        </ol>
      </nav>
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h1 className="text-4xl font-extrabold mb-8 text-center">
          Terms of Service
        </h1>

        <p className="text-slate-700 mb-6">
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>

        <div className="space-y-6 leading-relaxed text-slate-700">
          <p>
            Welcome to <strong>FinanceQuizzes.com</strong>. By using this
            website, you agree to comply with and be bound by the following
            terms and conditions. Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B1B2B] mt-8">
            1. Use of Website
          </h2>
          <p>
            You may use our quizzes and educational materials for personal,
            non-commercial purposes only. You agree not to copy, reproduce, or
            redistribute any content without prior written permission.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B1B2B] mt-8">
            2. Accuracy of Information
          </h2>
          <p>
            While we strive to ensure accuracy, FinanceQuizzes.com makes no
            warranties or representations about the completeness or reliability
            of any quiz content.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B1B2B] mt-8">
            3. Disclaimer of Liability
          </h2>
          <p>
            We are not responsible for any losses or damages arising from use of
            the website or its information. Use at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B1B2B] mt-8">
            4. Intellectual Property
          </h2>
          <p>
            All quizzes, questions, logos, and graphics are the intellectual
            property of FinanceQuizzes.com and may not be reused without
            permission.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B1B2B] mt-8">
            5. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these terms at any time. Updates will
            be reflected on this page with a revised “Last updated” date.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B1B2B] mt-8">
            6. Contact
          </h2>
          <p>
            For questions about these Terms, please contact{" "}
            <a
              href="mailto:support@financequizzes.com"
              className="text-teal-700 underline hover:text-teal-800"
            >
              support@financequizzes.com
            </a>
            .
          </p>
        </div>
      </section>

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
                name: "Terms of Service",
                item: "https://www.financequizzes.com/terms-of-service",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
