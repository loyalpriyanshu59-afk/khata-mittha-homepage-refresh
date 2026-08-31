import processImg from "@/assets/process.jpg";

const STEPS = [
  { n: "01", t: "Picked at dawn", d: "Farm crates reach our press by 5am, still cool from the night." },
  { n: "02", t: "Washed & sorted", d: "Triple-rinsed in filtered water; bruised fruit never makes the cut." },
  { n: "03", t: "Cold-pressed", d: "Slow hydraulic pressing, zero heat, zero oxidation shortcuts." },
  { n: "04", t: "Bottled & chilled", d: "Sealed in glass within four hours and kept at 4°C to your door." },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="reveal order-2 lg:order-1">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            From Fruit to Bottle
          </span>
          <h2 className="text-balance-tight mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Four hours, four steps, nothing in between.
          </h2>

          <ol className="mt-10 space-y-7">
            {STEPS.map((s) => (
              <li key={s.n} className="flex gap-5 border-b border-border pb-7 last:border-0 last:pb-0">
                <span className="font-display text-lg font-semibold text-primary">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{s.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal order-1 lg:order-2">
          <img
            src={processImg}
            alt="Fresh oranges being cold-pressed by hand at the Khata MiTtha juicery in morning light"
            loading="lazy"
            width={1280}
            height={912}
            className="h-[22rem] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)] sm:h-[32rem] sm:rounded-[2.5rem]"
          />
        </div>
      </div>
    </section>
  );
}
