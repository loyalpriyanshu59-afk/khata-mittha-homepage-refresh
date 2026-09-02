const SHOP_LINKS = [
  { label: "Orange Juice", href: "#juices" },
  { label: "Mosambi Juice", href: "#juices" },
  { label: "Mango Juice", href: "#juices" },
  { label: "Pineapple Juice", href: "#juices" },
];

const COMPANY_LINKS = [
  { label: "Our Story", href: "#story" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#order" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream-deep py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <a href="#top" className="inline-block">
              <span className="font-display text-3xl text-ink">Khata</span>{" "}
              <span className="font-display text-3xl italic text-primary">MiTtha</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
              Premium cold-pressed juices made from real Indian fruit. No sugar. No shortcuts. Just
              the honest taste of the orchard.
            </p>
            <p className="mt-6 text-sm text-ink-soft">
              <a href="mailto:hello@khatamittha.in" className="underline-offset-4 hover:underline">
                hello@khatamittha.in
              </a>
              <br />
              <a href="tel:+919800000000" className="underline-offset-4 hover:underline">
                +91 98000 00000
              </a>
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">Shop</h4>
            <ul className="mt-5 space-y-3">
              {SHOP_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">Company</h4>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">Hours</h4>
            <p className="mt-5 text-sm text-ink-soft">
              Pressing starts at 5:00 AM
              <br />
              Same-day delivery: 10 AM — 7 PM
              <br />
              Seven days a week
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-ink-soft">© {year} Khata MiTtha. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-ink-soft">
            <a href="#" className="hover:text-ink">
              Privacy
            </a>
            <a href="#" className="hover:text-ink">
              Terms
            </a>
            <a href="#" className="hover:text-ink">
              Shipping
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
