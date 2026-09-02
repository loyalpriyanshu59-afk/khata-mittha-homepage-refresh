import heroBottle from "@/assets/hero-bottle.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="grain-cream pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl items-end gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:pb-28">
        <div className="reveal space-y-8 lg:col-span-7">
          <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Est. 2024 — The Fresh Press
          </span>

          <h1 className="text-balance-tight font-display text-[3.2rem] font-semibold leading-[0.9] tracking-tight text-ink sm:text-7xl lg:text-[5.5rem]">
            Freshly Squeezed.{" "}
            <span className="block pl-2 italic text-[#cd7f32] sm:inline sm:pl-8 lg:pl-16">
              Freshly Alive.
            </span>
          </h1>

          <div className="max-w-md border-l-2 border-[#e8c07a] py-2 pl-6">
            <p className="text-lg leading-relaxed italic text-ink-soft">
              Khata MiTtha bottles the fruit exactly as the orchard gave it — pressed at dawn,
              never heated, never sweetened.
            </p>
            <a
              href="#order"
              className="mt-6 inline-flex items-center bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-primary"
            >
              Explore The Sips
            </a>
          </div>
        </div>

        <div className="reveal relative lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#e8c07a] sm:rounded-[2.5rem]">
            <img
              src={heroBottle}
              alt="Premium Khata MiTtha cold-pressed orange juice bottle with fresh oranges and mint in warm sunlight"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden max-w-[16rem] bg-ink p-6 text-cream lg:block">
            <p className="text-[10px] uppercase leading-relaxed tracking-widest">
              No Added Sugar
              <br />
              Cold Pressed Daily
              <br />
              Local Orchards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
