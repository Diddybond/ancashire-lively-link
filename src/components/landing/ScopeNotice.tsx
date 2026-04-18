import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ScopeNotice() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section aria-labelledby="scope-heading" className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <div
          ref={ref}
          className="reveal-up grid grid-cols-12 gap-8 border-y border-foreground/15 py-12"
        >
          <div className="col-span-12 sm:col-span-3">
            <span className="block text-[10px] font-medium uppercase tracking-eyebrow text-[var(--bronze)]">
              Note · Scope of Service
            </span>
          </div>
          <div className="col-span-12 sm:col-span-9">
            <h2
              id="scope-heading"
              className="font-serif text-2xl font-light italic leading-snug text-foreground sm:text-3xl"
            >
              Sabrina operates strictly as a non-medical companion and lifestyle coordinator.
            </h2>
            <p className="mt-6 max-w-[60ch] text-base font-light leading-relaxed text-foreground/75">
              We are not a regulated personal care agency, and so do not provide hands-on
              personal care (bathing, toileting, dressing), manual lifting or hoisting, or the
              administration of medication. Where needs cross into regulated personal or medical
              care, we are happy to recommend a CQC-registered provider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
