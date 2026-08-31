export function Brandmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 leading-none ${className}`}>
      <span className="font-display text-[1.35rem] font-semibold tracking-tight text-ink sm:text-2xl">
        Khata
      </span>
      <span className="font-display text-[1.35rem] font-semibold italic tracking-tight text-primary sm:text-2xl">
        MiTtha
      </span>
    </span>
  );
}
