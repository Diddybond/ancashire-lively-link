import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function IndependentDifference() {
  const eyebrow = useScrollReveal<HTMLSpanElement>();
  const heading = useScrollReveal<HTMLHeadingElement>();
  const body = useScrollReveal<HTMLParagraphElement>();
  const mark = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="independent"
      aria-labelledby="independent-heading"
      className="scroll-mt-24 overflow-hidden bg-[var(--forest)] py-32 text-[color-mix(in_oklab,var(--background)_94%,transparent)] lg:py-48"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-start gap-y-10 gap-x-0 px-4 sm:gap-y-12 sm:gap-x-8 sm:px-8 lg:gap-x-12 lg:px-12">
        <div ref={mark} className="reveal-up col-span-12 min-w-0 lg:col-span-4">
          <span
            ref={eyebrow}
            className="reveal-up mb-6 block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--bronze)]"
          >
            Why Choose Independent
          </span>
          <div className="font-serif text-[5rem] font-light leading-none italic text-[var(--bronze)]/80 sm:text-[10rem]">
            ¶
          </div>
        </div>

        <div className="col-span-12 min-w-0 lg:col-span-8">
          <h2
            ref={heading}
            id="independent-heading"
            className="reveal-up delay-1 max-w-[10ch] font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:max-w-none sm:text-6xl"
          >
            The <span className="italic text-[var(--bronze)]">Independent</span> Alternative
            <br /> to Care Agencies.
          </h2>
          <p
            ref={body}
            className="reveal-up delay-2 mt-8 max-w-none text-base leading-relaxed opacity-90 sm:mt-12 sm:max-w-[58ch] sm:text-xl"
          >
            I don&apos;t operate like a standard agency, and I never plan to. With large
            franchises, you often face a revolving door of different, rushed staff on
            tight 15-minute schedules. By choosing my independent service, you get
            the same familiar face, every visit. No corporate red tape, no rotating
            staff — just one dedicated professional, building a real relationship over
            time.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-y-8 sm:mt-14 sm:grid-cols-2 sm:gap-x-12">
            {[
              ["One dedicated professional", "Every visit, without exception."],
              ["Unhurried time", "No 15-minute slots, no clock-watching."],
              ["Continuity of care", "A genuine relationship, built over time."],
              ["No agency markup", "A direct, honest, transparent rate."],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-white/15 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--bronze)]">
                  {k}
                </p>
                <p className="mt-2 font-serif text-lg opacity-95 sm:text-xl">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
