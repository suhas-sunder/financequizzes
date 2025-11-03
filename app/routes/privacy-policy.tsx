import { json } from "@remix-run/node";
import type { Route } from "./+types/privacy-policy";

export function meta({}: Route.MetaArgs) {
  const title = "Privacy Policy | FinanceQuizzes.com";
  const description =
    "Read how FinanceQuizzes.com collects, uses, and protects your data. Your privacy and trust are important to us.";
  const url = "https://www.financequizzes.com/privacy-policy";
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

export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-[#0B1B2B]">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-8 text-center">
          Privacy Policy
        </h1>

        <p className="text-slate-700 mb-6">
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>

        <div className="space-y-6 leading-relaxed text-slate-700">
          <p>
            At <strong>FinanceQuizzes.com</strong>, we respect your privacy and
            are committed to protecting your personal data. This policy explains
            how we collect, use, and safeguard information when you use our
            website.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B1B2B] mt-8">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Non-personal data such as browser type, device, and usage
              patterns.
            </li>
            <li>
              Optional information you provide (like feedback or quiz results
              stored locally).
            </li>
            <li>Cookies and analytics to understand site performance.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#0B1B2B] mt-8">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To improve quiz content and user experience.</li>
            <li>To monitor traffic and troubleshoot issues.</li>
            <li>To comply with legal obligations if applicable.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#0B1B2B] mt-8">
            3. Cookies
          </h2>
          <p>
            We use standard cookies to store small bits of non-sensitive data.
            You can disable cookies through your browser settings at any time.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B1B2B] mt-8">
            4. Data Security
          </h2>
          <p>
            We take reasonable precautions to protect data transmitted through
            our site. However, no online service is completely secure, so we
            cannot guarantee absolute safety.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B1B2B] mt-8">
            5. Third-Party Services
          </h2>
          <p>
            We may use analytics or advertising tools like Google Analytics or
            AdSense, which have their own privacy practices. We encourage you to
            review their respective privacy policies.
          </p>

          <h2 className="text-2xl font-semibold text-[#0B1B2B] mt-8">
            6. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at{" "}
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
    </main>
  );
}
