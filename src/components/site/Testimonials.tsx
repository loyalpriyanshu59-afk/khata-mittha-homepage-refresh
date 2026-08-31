import { Star } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "The mosambi tastes like my nani's kitchen. My kids finished a six-pack in three days.",
    name: "Ananya Iyer",
    place: "Bengaluru",
  },
  {
    quote:
      "I stopped buying tetra-pack juice entirely. You can actually smell the fruit when you open it.",
    name: "Rohit Malhotra",
    place: "Delhi",
  },
  {
    quote:
      "Cold, sealed and at my desk by 10am. The mango one during season is genuinely unreal.",
    name: "Sneha Patil",
    place: "Pune",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Loved Across India
          </span>
          <h2 className="text-balance-tight mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            12,000+ bottles poured this year.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              className="reveal flex h-full flex-col justify-between rounded-[1.75rem] border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div>
                <div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-lg leading-snug text-ink">
                  “{r.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-7 text-sm text-ink-soft">
                <span className="font-semibold text-ink">{r.name}</span> · {r.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
