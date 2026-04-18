import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const points = [
  ["Hourly Rate", "£25 per hour — flat, all inclusive."],
  ["Minimum Visit", "Two hours, arranged at a time that suits you."],
  [
    "Travel",
    "The first 15 miles of any visit are included free of charge. Anything further afield is just 45p per mile.",
  ],
  [
    "Activity Costs",
    "Out-of-pocket costs during outings — tickets, café bills, entry fees for both Sabrina and your loved one — are covered by the client.",
  ],
  ["First Chat", "Always free, never rushed."],
];

export function Pricing() {
  const heading = useScrollReveal<HTMLHeadingElement>();
  const rule = useScrollReveal<HTMLDivElement>();
  const price = useScrollReveal<HTMLDivElement>();
  const list = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-[color-mix(in_oklab,var(--primary)_5%,var(--background))] py-32 lg:py-48"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-24 flex flex-col items-center text-center">
          <div ref={rule} className="reveal-up mb-10 h-24 w-px bg-[var(--bronze)]/40" />
          <span className="mb-4 block text-[10px] font-medium uppercase tracking-eyebrow text-[var(--bronze)]">
            Pricing
          </span>
          <h2
            ref={heading}
            id="pricing-heading"
            className="reveal-up delay-1 font-serif text-5xl font-light italic leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            Honest &amp; straightforward.
          </h2>
          <p className="reveal-up delay-2 mt-6 max-w-xl text-lg font-light text-foreground/75">
            One simple hourly rate. No agency markups, no hidden extras, no awkward conversations.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-y-16 gap-x-12">
          <div ref={price} className="reveal-up col-span-12 lg:col-span-5">
            <div className="border-t border-foreground/15 pt-10">
              <p className="text-[10px] font-medium uppercase tracking-eyebrow text-foreground/55">
                From
              </p>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-serif text-[8rem] font-light leading-none tracking-tight text-foreground">
                  £25
                </span>
                <span className="font-serif text-2xl italic text-foreground/60">/ hour</span>
              </div>
              <p className="mt-6 max-w-xs font-serif text-xl italic leading-snug text-foreground/70">
                A flat, all-inclusive rate covering Sabrina's time and local travel.
              </p>
              <a
                href="#contact"
                className="group mt-12 inline-flex items-center gap-4 border-b border-foreground/25 pb-2 text-[11px] font-medium uppercase tracking-eyebrow text-foreground transition-colors hover:border-[var(--bronze)] hover:text-[var(--bronze)]"
              >
                Ask for a Quote
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </a>
            </div>
          </div>

          <div ref={list} className="reveal-up delay-1 col-span-12 lg:col-span-6 lg:col-start-7">
            <ul>
              {points.map(([k, v], i) => (
                <li
                  key={k}
                  className="grid grid-cols-12 gap-6 border-t border-foreground/15 py-6"
                >
                  <span className="col-span-12 text-[10px] font-medium uppercase tracking-eyebrow text-[var(--bronze)] sm:col-span-3">
                    0{i + 1} · {k}
                  </span>
                  <span className="col-span-12 font-serif text-lg leading-snug text-foreground/85 sm:col-span-9">
                    {v}
                  </span>
                </li>
              ))}
              <li className="border-t border-foreground/15" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
