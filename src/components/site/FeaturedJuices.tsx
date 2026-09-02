import mango from "@/assets/juice-mango.jpg";
import mixed from "@/assets/juice-mixed.jpg";
import mosambi from "@/assets/juice-mosambi.jpg";
import orange from "@/assets/juice-orange.jpg";
import pineapple from "@/assets/juice-pineapple.jpg";

const JUICES = [
  {
    n: "01",
    name: "Orange",
    note: "Nagpur navels, bright and sunny",
    price: "₹149",
    img: orange,
    alt: "Bottle of fresh Khata MiTtha orange juice with orange slices",
  },
  {
    n: "02",
    name: "Mosambi",
    note: "Sweet lime, gentle on the gut",
    price: "₹139",
    img: mosambi,
    alt: "Bottle of fresh mosambi sweet lime juice with green limes",
  },
  {
    n: "03",
    name: "Mango",
    note: "Seasonal Alphonso, thick and golden",
    price: "₹179",
    img: mango,
    alt: "Bottle of Alphonso mango juice with ripe mangoes",
  },
  {
    n: "04",
    name: "Pineapple",
    note: "Tangy, tropical, lightly salted",
    price: "₹159",
    img: pineapple,
    alt: "Bottle of pineapple juice with fresh pineapple slices",
  },
  {
    n: "05",
    name: "Mixed Fruit",
    note: "Our house blend of five fruits",
    price: "₹169",
    img: mixed,
    alt: "Bottle of mixed fruit juice surrounded by assorted fresh fruit",
  },
];

export function FeaturedJuices() {
  return (
    <section id="juices" className="scroll-mt-24 bg-cream-deep py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              The Collection
            </span>
            <h2 className="text-balance-tight mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              Five pressings. One promise.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft sm:text-base">
            Every bottle is filled within four hours of pressing and chilled the whole way to you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {JUICES.map((j, i) => (
            <article
              key={j.name}
              className={`reveal group cursor-pointer ${i === 1 ? "lg:mt-12" : ""} ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative overflow-hidden bg-[#e8c07a]">
                <img
                  src={j.img}
                  alt={j.alt}
                  loading="lazy"
                  width={600}
                  height={750}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 right-0 bg-cream p-4">
                  <span className="font-display text-xl text-ink">{j.n}</span>
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between border-b border-[#e8c07a] pb-4">
                <div>
                  <h3 className="font-display text-2xl text-ink">{j.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-tighter text-ink-soft">{j.note}</p>
                </div>
                <span className="font-display text-xl text-[#cd7f32]">{j.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
