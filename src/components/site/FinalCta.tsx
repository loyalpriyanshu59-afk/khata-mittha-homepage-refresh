import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function FinalCta() {
  const [phone, setPhone] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const clean = phone.replace(/\D/g, "");
    if (clean.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }
    toast.success("You're on the list! We'll call to confirm your first box.");
    setPhone("");
  };

  return (
    <section id="order" className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center shadow-[var(--shadow-lift)] sm:rounded-[2.75rem] sm:px-12 sm:py-20">
        <div className="reveal mx-auto max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zest">
            Fresh batch closes at 9pm
          </span>
          <h2 className="text-balance-tight mt-4 font-display text-3xl font-semibold leading-tight text-cream sm:text-5xl">
            Grab Yours Today
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">
            Leave your number and we&apos;ll deliver tomorrow morning&apos;s pressing, chilled and
            sealed in glass.
          </p>

          <form
            onSubmit={onSubmit}
            className="mx-auto mt-9 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="phone" className="sr-only">
              Mobile number
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your mobile number"
              className="w-full rounded-full border border-cream/20 bg-cream/10 px-6 py-4 text-base text-cream placeholder:text-cream/50 outline-none transition-colors focus:border-primary"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Order Now
            </button>
          </form>

          <p className="mt-5 text-xs text-cream/50">
            Free delivery on orders above ₹499 · Cash or UPI on delivery
          </p>
        </div>
      </div>
    </section>
  );
}
