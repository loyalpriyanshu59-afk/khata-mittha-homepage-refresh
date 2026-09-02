const QUOTES = [
  {
    name: "Ananya Iyer",
    city: "Bengaluru",
    quote:
      "The orange juice actually tastes like oranges — not sugar water. I order every Sunday now.",
  },
  {
    name: "Rohit Malhotra",
    city: "Delhi",
    quote:
      "Khata MiTtha's mosambi is my post-yoga ritual. Light, clean, and the glass bottle feels premium.",
  },
  {
    name: "Sneha Patil",
    city: "Pune",
    quote:
      "Finally a juice brand that doesn't hide behind 'blend' labels. Mixed fruit is genuinely fruity.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream-deep py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            The Fresh Press
          </span>
          <h2 className="text-balance-tight mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            What our sippers say
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <figure
              key={q.name}
              className="reveal relative flex flex-col justify-between rounded-3xl bg-card p-8 shadow-soft transition-shadow duration-500 hover:shadow-lift"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <blockquote className="font-display text-2xl leading-snug text-ink">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-between border-t border-border pt-5">
                <div>
                  <p className="font-semibold text-ink">{q.name}</p>
                  <p className="text-sm text-ink-soft">{q.city}</p>
                </div>
                <span className="font-display text-3xl text-[#cd7f32]">{`0${i + 1}`}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
