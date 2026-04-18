import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  "£20 per hour — flat rate, no surprises",
  "2-hour minimum visit",
  "Free Local Travel: The first 15 miles of any trip are completely free. Any additional driving is simply charged at the standard rate of 45p per mile.",
  "Activity Costs: The £20 hourly rate covers Sabrina's time and all travel/mileage. However, the client is responsible for covering any third-party costs during outings (e.g., event tickets, café bills, or admission fees for both the client and Sabrina).",
  "Free initial consultation",
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20 lg:py-28" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/60">
            Pricing
          </p>
          <h2 id="pricing-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Transparent, Simple Pricing
          </h2>
          <p className="mt-4 text-foreground/75">
            One honest hourly rate. No add-ons, no agency markups, no awkward conversations.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-6xl font-semibold text-foreground">£20</span>
              <span className="text-lg text-foreground/70">/ hour</span>
            </div>
            <p className="mt-2 text-sm font-medium text-foreground/60">Flat rate · all inclusive</p>
          </div>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-4 w-4 text-foreground" />
                </span>
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="font-semibold">
              <a href="#contact">Request a Bespoke Quote</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
