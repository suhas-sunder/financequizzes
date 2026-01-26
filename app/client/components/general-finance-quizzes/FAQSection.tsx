type Faq = { q: string; a: string };

type Props = {
  faqs: Faq[];
};

export function FAQSection({ faqs }: Props) {
  return (
    <section id="faq" className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <h2 className="text-3xl font-extrabold text-[#0B1B2B] mb-4 text-center">FAQ</h2>
      <p className="text-slate-700 text-center max-w-2xl mx-auto mb-10">
        Quick answers about this general finance quiz.
      </p>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-200">
        {faqs.map((f, i) => (
          <div key={i} className="p-6">
            <p className="font-semibold text-lg text-[#0B1B2B] mb-2">{f.q}</p>
            <p className="text-slate-700">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
