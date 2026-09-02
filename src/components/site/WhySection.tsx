const REASONS = [
  {
    num: "01",
    title: "100% Natural",
    body: "Every drop is pure fruit — no concentrates, no preservatives, no shortcuts.",
  },
  {
    num: "02",
    title: "No Sugar Added",
    body: "We trust the fruit’s own sweetness. Nothing else needs to go in the bottle.",
  },
  {
    num: "03",
    title: "Cold-Pressed Daily",
    body: "Pressed in small batches each morning and chilled immediately for clean flavour.",
  },
  {
    num: "04",
    title: "Fresh Ingredients",
    body: "Sourced from local orchards and markets within 24 hours of juicing.",
  },
];

export function WhySection() {
  return (
    <section id="why" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="reveal grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Why Khata MiTtha
            </span>
            <h2 className="text-balance-tight mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              Taste the difference honesty makes.
            </h2>
            <p className="mt-5 max-w-sm text-ink-soft">
              We built Khata MiTtha around one rule: if we wouldn't serve it at our own table, it
              doesn't leave the kitchen.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:gap-x-12 lg:gap-y-14">
            {REASONS.map((r) => (
              <div key={r.num} className="reveal group">
                <div className="flex items-start justify-between border-b border-[#e8c07a] pb-4">
                  <span className="font-display text-4xl text-[#e8c07a] transition-colors group-hover:text-[#cd7f32]">
                    {r.num}
                  </span>
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-ink">{r.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
