import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    no: "01",
    title: "A free, unhurried chat",
    desc: "Phone or video, around 20 minutes, no obligation. We talk through what's happening at home and whether companionship care is the right fit.",
  },
  {
    no: "02",
    title: "A meeting with your loved one",
    desc: "At home or in their care home — I meet your loved one and any family present, get to know their interests and what would make their week better.",
  },
  {
    no: "03",
    title: "A simple plan",
    desc: "We agree what visits will look like, how often, and what we'll do — written down, shared with the family, and easy to change as things evolve.",
  },
  {
    no: "04",
    title: "Ongoing visits, with a monthly note home",
    desc: "Regular sessions delivered to the plan. Each month I send the family a short note about what's been happening — outings enjoyed, conversations had, small wins worth celebrating.",
  },
];

export function HowItWorks() {
  const heading = useScrollReveal<HTMLHeadingElement>();
  const rule = useScrollReveal<HTMLDivElement>();
  const grid = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-24 bg-[color-mix(in_oklab,var(--primary)_4%,var(--background))] py-32 lg:py-48"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="mb-16 flex flex-col items-center text-center sm:mb-20">
          <div ref={rule} className="reveal-up mb-10 h-24 w-px bg-[var(--primary)]/40" />
          <span className="mb-6 block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            How It Works
          </span>
          <h2
            ref={heading}
            id="how-heading"
            className="reveal-up delay-1 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            From first chat to
            <span className="italic text-[var(--primary)]"> ongoing visits.</span>
          </h2>
          <p className="reveal-up delay-2 mt-5 max-w-2xl text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-xl">
            A calm, considered process — designed so the family always knows what's
            happening and the older person always knows what to expect.
          </p>
        </div>

        <div ref={grid} className="reveal-up grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {steps.map((s) => (
            <article key={s.no} className="border-t border-foreground/15 pt-8">
              <span className="font-serif text-4xl font-light italic text-[var(--bronze)] sm:text-5xl">
                {s.no}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                {s.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
