import { Quiz } from "./Quiz";
import { Article } from "./Article";
import { FAQSection } from "./FAQSection";
import { StructuredData } from "./StructuredData";

export function BankingQuizShell({ faqs }: { faqs: any[] }) {
  return (
    <main className="bg-white text-[#0B1B2B]">
      <Quiz />
      <Article />
      <FAQSection faqs={faqs} />
      <StructuredData faqs={faqs} />
    </main>
  );
}
