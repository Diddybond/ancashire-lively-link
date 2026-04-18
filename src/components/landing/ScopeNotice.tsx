import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ScopeNotice() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section aria-labelledby="scope-heading" className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <div
          ref={ref}
          className="reveal-up grid grid-cols-12 gap-8 rounded-sm border border-[color-mix(in_oklab,var(--primary)_22%,transparent)] bg-[color-mix(in_oklab,var(--primary)_5%,transparent)] px-8 py-12 sm:px-12"
        >
          <div className="col-span-12 sm:col-span-3">
            <span className="block text-[10px] font-medium uppercase tracking-eyebrow text-[var(--bronze)]">
              A gentle note
            </span>
            <p className="mt-3 font-serif text-xl italic leading-snug text-foreground/80">
              On the scope of my service
            </p>
          </div>
          <div className="col-span-12 sm:col-span-9">
            <h2
              id="scope-heading"
              className="font-serif text-2xl font-light italic leading-snug text-foreground sm:text-3xl"
            >
              A non-medical companion and lifestyle coordinator — here to enrich daily life.
            </h2>
            <p className="mt-6 max-w-[60ch] text-base font-light leading-relaxed text-foreground/75">
              I'm not a regulated personal care agency, so I don't provide hands-on personal
              care (bathing, toileting, dressing), manual lifting or hoisting, or the
              administration of medication. Where needs cross into regulated personal or
              medical care, I'm always happy to recommend a trusted CQC-registered provider.
            </p>
            <p className="mt-4 max-w-[60ch] text-sm font-light leading-relaxed text-foreground/65">
              Every visit includes the first 15 miles of local travel free of charge — so we
              can simply enjoy the day without watching the meter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
