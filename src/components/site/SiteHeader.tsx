import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Brandmark } from "./Brandmark";

const NAV = [
  { label: "Juices", href: "#juices" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Our Story", href: "#story" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a href="#top" className="shrink-0" aria-label="Khata MiTtha home">
          <Brandmark />
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium uppercase tracking-wider text-ink-soft transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#order"
            className="hidden rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-primary md:inline-flex"
          >
            Order Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-ink transition-colors hover:bg-secondary md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-5 py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-display text-xl text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full bg-ink px-6 py-4 text-center text-base font-semibold text-cream"
            >
              Order Now
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
