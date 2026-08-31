import { Droplets, Leaf, Snowflake, Sprout } from "lucide-react";

const POINTS = [
  {
    icon: Leaf,
    title: "100% Natural",
    body: "Fruit, and that's the whole list. No concentrates, colours or preservatives.",
  },
  {
    icon: Droplets,
    title: "No Sugar Added",
    body: "Sweetness comes from ripeness. We pick later so you don't need syrup.",
  },
  {
    icon: Snowflake,
    title: "Cold-Pressed Daily",
    body: "Hydraulic pressed without heat, so vitamins and enzymes stay intact.",
  },
  {
    icon: Sprout,
    title: "Fresh Ingredients",
    body: "Sourced each morning from farms we visit, not from cold storage.",
  },
];

export function WhySection() {
  return (
    <section id="why" className="scroll-mt-24 bg-cream-deep py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
            Why Khata MiTtha
          </span>
          <h2 className="text-balance-tight mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Honest juice is a short ingredient list.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <div
              key={p.title}
              className="reveal rounded-[1.5rem] border border-border/70 bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                <p.icon className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
