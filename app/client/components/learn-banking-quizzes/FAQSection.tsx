export function FAQSection({ faqs }: { faqs: any[] }) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">FAQs</h2>
      {faqs.map((f, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{f.q}</p>
          <p className="text-slate-700">{f.a}</p>
        </div>
      ))}
    </section>
  );
}
