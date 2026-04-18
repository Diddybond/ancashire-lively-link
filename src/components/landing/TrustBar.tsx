import { ShieldCheck, FileBadge, Car } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Enhanced DBS Checked" },
  { icon: FileBadge, label: "Fully Insured" },
  { icon: Car, label: "Zero Hidden Mileage Fees" },
];

export function TrustBar() {
  return (
    <section aria-label="Trust and credentials" className="border-y border-border bg-card/60">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-3 text-center sm:justify-start">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-foreground">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-base font-semibold text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
