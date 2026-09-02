import story from "@/assets/story.jpg";

export function Story() {
  return (
    <section id="story" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative order-2 lg:order-1">
          <div className="aspect-square overflow-hidden rounded-[2rem] bg-[#e8c07a] sm:rounded-[2.5rem]">
            <img
              src={story}
              alt="A fresh fruit crate with oranges, limes and mangoes on a sunlit wooden surface"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 hidden max-w-[14rem] bg-ink p-6 text-cream lg:block">
            <p className="font-display text-xl italic leading-snug">
              "Khatta bhi, meetha bhi — bilkul phal jaisa."
            </p>
          </div>
        </div>

        <div className="reveal order-1 space-y-6 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Our Story
          </span>
          <h2 className="text-balance-tight font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Born in an Indian kitchen, made for honest mornings.
          </h2>
          <p className="max-w-lg text-ink-soft">
            Khata MiTtha started with a simple memory: the first glass of juice at the family
            breakfast table — tangy, sweet, and unmistakably real. We wanted every bottle we made to
            bring that same feeling back, without the chemical aftertaste of shelf-stable drinks.
          </p>
          <p className="max-w-lg text-ink-soft">
            Today we still press in small batches, buy from local growers, and bottle only what we
            would happily drink ourselves. If it isn't fresh, it isn't Khata MiTtha.
          </p>

          <div className="inline-block border-l-2 border-[#e8c07a] py-2 pl-6 lg:hidden">
            <p className="font-display text-xl italic text-ink">
              "Khatta bhi, meetha bhi — bilkul phal jaisa."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
