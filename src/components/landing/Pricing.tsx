import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const tiers = [
  {
    no: "01",
    name: "Companionship Visits",
    price: "£35",
    unit: "/ hour",
    minimum: "Two-hour minimum",
    desc: "The core service. Conversation, company, hobbies, light home help, walks, appointment chaperoning, life-story work, gentle cognitive activity. Regular weekly or fortnightly visits, or one-off bookings.",
  },
  {
    no: "02",
    name: "Enrichment Days",
    price: "£140",
    unit: "/ 4 hours",
    minimum: "Flat planned outing",
    desc: "Pre-planned outings built around the older person's interests — a gallery, a garden, a tearoom, a theatre matinee, a favourite place. A premium product families often gift to a parent.",
  },
  {
    no: "03",
    name: "Special Occasions",
    price: "£40",
    unit: "/ hour",
    minimum: "Two-hour minimum",
    desc: "Evening events, theatre, late-night bingo, weddings, family celebrations. Flexible hours, arranged around what matters to you.",
  },
  {
    no: "04",
    name: "Care Home Lifestyle Programmes",
    price: "POA",
    unit: "day rates",
    minimum: "By arrangement",
    desc: "Freelance lifestyle coordination for care homes — bespoke activity programmes, event facilitation, and cover for activity coordinator absences. A B2B service for care home managers.",
  },
];

export function Pricing() {
  const heading = useScrollReveal<HTMLHeadingElement>();
  const rule = useScrollReveal<HTMLDivElement>();
  const grid = useScrollReveal<HTMLDivElement>();

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
          <p className="reveal-up delay-2 mt-5 max-w-2xl text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-xl">
            Four clear ways to work together. No agency markups, no hidden extras, no awkward conversations.
          </p>
        </div>

        <div ref={grid} className="reveal-up grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:gap-x-12">
          {tiers.map((t) => (
            <article
              key={t.name}
              className="flex flex-col border-t border-foreground/15 pt-8 sm:pt-10"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                {t.no} · {t.minimum}
              </span>
              <h3 className="mt-4 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
                {t.name}
              </h3>
              <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="font-serif text-5xl font-light leading-none tracking-tight text-foreground sm:text-6xl">
                  {t.price}
                </span>
                <span className="font-serif text-lg italic text-foreground/60 sm:text-xl">
                  {t.unit}
                </span>
              </div>
              <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-foreground/80 sm:text-lg">
                {t.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-foreground/15 pt-10 sm:grid-cols-3 sm:gap-8 sm:pt-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">Travel</p>
            <p className="mt-2 font-serif text-base leading-relaxed text-foreground/85 sm:text-lg">
              First 15 miles included free, then 45p per mile.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">Activity costs</p>
            <p className="mt-2 font-serif text-base leading-relaxed text-foreground/85 sm:text-lg">
              Tickets, café bills and entry fees during outings are covered by the client (for both of us).
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">First chat</p>
            <p className="mt-2 font-serif text-base leading-relaxed text-foreground/85 sm:text-lg">
              Always free, never rushed.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[var(--primary)] px-10 py-5 text-base font-semibold uppercase tracking-[0.18em] text-[var(--primary-foreground)] transition-all hover:bg-[var(--bronze)]"
          >
            Arrange a Free Chat
          </a>
        </div>
      </div>
    </section>
  );
}
