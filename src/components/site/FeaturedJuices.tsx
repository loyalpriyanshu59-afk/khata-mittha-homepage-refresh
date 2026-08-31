import mango from "@/assets/juice-mango.jpg";
import mixed from "@/assets/juice-mixed.jpg";
import mosambi from "@/assets/juice-mosambi.jpg";
import orange from "@/assets/juice-orange.jpg";
import pineapple from "@/assets/juice-pineapple.jpg";

const JUICES = [
  {
    name: "Orange",
    note: "Nagpur navels, bright and sunny",
    price: "₹149",
    img: orange,
    alt: "Bottle of fresh Khata MiTtha orange juice with orange slices",
  },
  {
    name: "Mosambi",
    note: "Sweet lime, gentle on the gut",
    price: "₹139",
    img: mosambi,
    alt: "Bottle of fresh mosambi sweet lime juice with green limes",
  },
  {
    name: "Mango",
    note: "Seasonal Alphonso, thick and golden",
    price: "₹179",
    img: mango,
    alt: "Bottle of Alphonso mango juice with ripe mangoes",
  },
  {
    name: "Pineapple",
    note: "Tangy, tropical, lightly salted",
    price: "₹159",
    img: pineapple,
    alt: "Bottle of pineapple juice with fresh pineapple slices",
  },
  {
    name: "Mixed Fruit",
    note: "Our house blend of five fruits",
    price: "₹169",
    img: mixed,
    alt: "Bottle of mixed fruit juice surrounded by assorted fresh fruit",
  },
];

export function FeaturedJuices() {
  return (
    <section id="juices" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The Bottles
            </span>
            <h2 className="text-balance-tight mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              Five pressings. One promise.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft sm:text-base">
            Every bottle is filled within four hours of pressing and chilled the whole way to you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {JUICES.map((j, i) => (
            <article
              key={j.name}
              className="reveal group overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={j.img}
                  alt={j.alt}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-72"
                />
              </div>
              <div className="flex items-end justify-between gap-4 p-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">{j.name}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{j.note}</p>
                </div>
                <span className="shrink-0 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-ink">
                  {j.price}
                </span>
              </div>
            </article>
          ))}

          <a
            href="#order"
            className="reveal group flex min-h-56 flex-col justify-between rounded-[1.75rem] border border-dashed border-primary/40 bg-primary/8 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:bg-primary/14"
          >
            <p className="font-display text-2xl font-semibold leading-snug text-ink">
              Can&apos;t choose? Take the weekly six-pack.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Build your box
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
