import process from "@/assets/process.jpg";

const STEPS = [
  {
    title: "Select",
    desc: "Fruit is hand-checked at the market before it reaches our kitchen.",
  },
  {
    title: "Wash",
    desc: "Triple-rinsed in filtered water, then air-dried naturally.",
  },
  {
    title: "Press",
    desc: "Slow cold-pressing keeps enzymes alive and flavour intact.",
  },
  {
    title: "Bottle",
    desc: "Filled, sealed and chilled within minutes — delivered the same day.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-cream-deep py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            From Fruit to Bottle
          </span>
          <h2 className="text-balance-tight mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Four steps. No secrets.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="reveal relative overflow-hidden rounded-[2rem] bg-[#e8c07a] sm:rounded-[2.5rem]">
            <img
              src={process}
              alt="Fresh oranges being prepared and cold-pressed in a clean juice kitchen"
              loading="lazy"
              width={1280}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 hidden rounded-full bg-cream px-5 py-2 text-xs font-semibold uppercase tracking-widest text-ink sm:inline-block">
              Cold-pressed in India
            </div>
          </div>

          <div className="reveal grid gap-8 sm:gap-10">
            {STEPS.map((s, i) => (
              <div key={s.title} className="flex gap-6 border-b border-[#e8c07a]/60 pb-8 last:border-0 last:pb-0">
                <span className="font-display text-2xl text-[#cd7f32]">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
