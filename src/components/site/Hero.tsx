import { ArrowRight, Leaf } from "lucide-react";

import heroBottle from "@/assets/hero-bottle.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="grain-cream pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 top-10 -z-10 size-[34rem] rounded-full bg-primary/12 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-leaf/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
            <Leaf className="size-3.5" />
            Cold-pressed in India
          </span>

          <h1 className="text-balance-tight mt-6 font-display text-[2.6rem] font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-[4.4rem]">
            Freshly Squeezed.{" "}
            <span className="italic text-primary">Freshly Alive.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Khata MiTtha bottles the fruit exactly as the orchard gave it — pressed at dawn,
            never heated, never sweetened. Sunlight, pulp and a little bit of khatta-meetha
            nostalgia in every 300ml.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#order"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-16px_oklch(0.68_0.19_48/0.65)]"
            >
              Order Now
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#juices"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-card px-8 py-4 text-base font-semibold text-ink shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/30"
            >
              Explore Juices
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-7">
            {[
              { k: "100%", v: "Fruit, nothing else" },
              { k: "0g", v: "Added sugar" },
              { k: "5am", v: "Pressed daily" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-2xl font-semibold text-ink sm:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-xs leading-snug text-ink-soft sm:text-sm">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)] sm:rounded-[2.75rem]">
            <img
              src={heroBottle}
              alt="Premium Khata MiTtha cold-pressed orange juice bottle with fresh oranges and mint in warm sunlight"
              width={1280}
              height={1600}
              className="h-[26rem] w-full object-cover sm:h-[34rem] lg:h-[38rem]"
            />
          </div>
          <div className="absolute -bottom-5 left-4 rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-[var(--shadow-soft)] backdrop-blur sm:left-8">
            <p className="font-display text-lg font-semibold text-ink">Orange Sunrise</p>
            <p className="text-sm text-ink-soft">
              <span className="font-semibold text-primary">₹149</span> · 300ml glass
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
