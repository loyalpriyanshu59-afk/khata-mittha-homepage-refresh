import storyImg from "@/assets/story.jpg";

export function Story() {
  return (
    <section id="story" className="scroll-mt-24 bg-cream-deep py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="reveal">
          <img
            src={storyImg}
            alt="Crates of fresh citrus at an Indian market stall in golden morning light"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-square w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)] sm:rounded-[2.5rem]"
          />
        </div>

        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
            Our Story
          </span>
          <h2 className="text-balance-tight mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            A thela, a hand press, and one stubborn rule.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              Khata MiTtha began at a corner cart where our founder&apos;s grandfather sold
              mosambi juice to college students — one rupee a glass, squeezed while you waited.
              The rule then was simple: if it isn&apos;t fresh, don&apos;t sell it.
            </p>
            <p>
              We kept the rule and upgraded everything else. Today the same fruit is pressed in a
              cold-chain kitchen, sealed in glass and delivered across the city before noon —
              still with nothing added, still tasting like the cart did.
            </p>
          </div>
          <p className="mt-8 font-display text-xl italic text-ink">
            “Khatta bhi, meetha bhi — bilkul phal jaisa.”
          </p>
        </div>
      </div>
    </section>
  );
}
