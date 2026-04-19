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
    "Out-of-pocket costs during outings — tickets, café bills, entry fees for both Sabrina and the person she's accompanying — are covered by the client.",
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
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="mb-16 flex flex-col items-center text-center sm:mb-24">
          <div ref={rule} className="reveal-up mb-10 h-24 w-px bg-[var(--primary)]/40" />
          <span className="mb-6 block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            Pricing
          </span>
          <h2
            ref={heading}
            id="pricing-heading"
            className="reveal-up delay-1 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            Honest &amp;
            <span className="italic text-[var(--primary)]"> straightforward.</span>
          </h2>
          <p className="reveal-up delay-2 mt-5 max-w-xl text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-xl">
            One simple hourly rate. No agency markups, no hidden extras, no awkward conversations.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-y-16 gap-x-0 sm:gap-x-12">
          <div ref={price} className="reveal-up col-span-12 min-w-0 lg:col-span-5">
            <div className="border-t border-foreground/15 pt-10">
              <p className="text-[10px] font-medium uppercase tracking-eyebrow text-foreground/55">
                From
              </p>
              <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-2">
                <span className="font-serif text-[5rem] font-light leading-none tracking-tight text-foreground sm:text-[8rem]">
                  £25
                </span>
                <span className="font-serif text-xl italic text-foreground/60 sm:text-2xl">/ hour</span>
              </div>
              <p className="mt-5 max-w-xs font-serif text-lg italic leading-snug text-foreground/70 sm:mt-6 sm:text-xl">
                A flat, all-inclusive rate covering Sabrina's time and local travel.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center justify-center bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary-foreground)] transition-all hover:bg-[var(--bronze)] sm:mt-12 sm:px-10 sm:py-5 sm:text-base"
              >
                Ask for a Quote
              </a>
            </div>
          </div>

          <div ref={list} className="reveal-up delay-1 col-span-12 min-w-0 lg:col-span-6 lg:col-start-7">
            <ul>
              {points.map(([k, v], i) => (
                <li
                  key={k}
                  className="grid grid-cols-12 gap-4 border-t border-foreground/15 py-6 sm:gap-6"
                >
                  <span className="col-span-12 min-w-0 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)] sm:col-span-3">
                    0{i + 1} · {k}
                  </span>
                  <span className="col-span-12 min-w-0 font-serif text-base leading-relaxed text-foreground/85 sm:col-span-9 sm:text-lg sm:leading-snug">
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
