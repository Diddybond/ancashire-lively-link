import { ShieldCheck, FileBadge, Car } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const items = [
  { icon: ShieldCheck, label: "Enhanced DBS Checked" },
  { icon: FileBadge, label: "Fully Insured" },
  { icon: Car, label: "Free Local Travel · 15 Miles" },
];

export function TrustBar() {
  const ref = useScrollReveal();
  return (
    <section
      ref={ref}
      aria-label="Trust and credentials"
      className="reveal-up border-y border-border/60 bg-background"
    >
      <div className="mx-auto grid max-w-7xl gap-x-12 gap-y-6 px-6 py-10 sm:grid-cols-3 sm:px-8 lg:px-12">
        {items.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className={`flex items-center gap-4 ${
              i > 0 ? "sm:border-l sm:border-border/60 sm:pl-12" : ""
            }`}
          >
            <span className="text-[var(--bronze)]">
              <Icon className="h-5 w-5" strokeWidth={1.25} />
            </span>
            <div>
              <p className="text-[9px] font-medium uppercase tracking-eyebrow text-foreground/55">
                Assurance
              </p>
              <p className="font-serif text-lg leading-tight text-foreground">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
