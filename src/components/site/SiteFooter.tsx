import { Brandmark } from "./Brandmark";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Juices", href: "#juices" },
      { label: "Weekly Box", href: "#order" },
      { label: "Gifting", href: "#order" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "#story" },
      { label: "Our Process", href: "#process" },
      { label: "Why Khata MiTtha", href: "#why" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream-deep">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Brandmark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Cold-pressed fruit juice, bottled fresh every morning. Made in India, with nothing
            added.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-base font-semibold text-ink">{col.title}</h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-soft transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Khata MiTtha Beverages. All rights reserved.</p>
          <p>hello@khatamittha.in · +91 98000 00000</p>
        </div>
      </div>
    </footer>
  );
}
