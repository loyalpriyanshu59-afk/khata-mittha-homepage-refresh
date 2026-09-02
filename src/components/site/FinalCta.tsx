import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function FinalCta() {
  const [phone, setPhone] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setPhone("");
      toast.success("Thanks! Our juice concierge will call you within the hour.");
    }, 1200);
  };

  return (
    <section
      id="order"
      className="relative overflow-hidden bg-ink py-20 text-cream sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, #cd7f3225, transparent 40%), radial-gradient(circle at 90% 80%, #a0522d20, transparent 45%)",
        }}
      />
      <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <span className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-[#e8c07a]">
          Limited Daily Batches
        </span>
        <h2 className="text-balance-tight reveal mt-5 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          Grab Yours Today
        </h2>
        <p className="reveal mx-auto mt-5 max-w-xl text-cream/80">
          Drop your number and we'll call you back to confirm flavours, delivery slot, and address.
          Bottles run out by evening.
        </p>

        <form onSubmit={submit} className="reveal mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
          <Input
            type="tel"
            inputMode="numeric"
            placeholder="Enter 10-digit phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-14 rounded-full border-cream/20 bg-cream/10 px-6 text-cream placeholder:text-cream/50 focus-visible:ring-[#e8c07a]"
            maxLength={14}
          />
          <Button
            type="submit"
            disabled={busy}
            className="h-14 rounded-full bg-[#e8c07a] px-8 text-sm font-semibold uppercase tracking-widest text-ink hover:bg-cream disabled:opacity-70"
          >
            {busy ? (
              <Loader2 className="mr-2 size-4 animate-spin" />
            ) : (
              <ArrowRight className="mr-2 size-4" />
            )}
            Order Now
          </Button>
        </form>
        <p className="reveal mt-5 text-xs text-cream/50">
          Available for same-day delivery in select cities.
        </p>
      </div>
    </section>
  );
}
