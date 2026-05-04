import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Testimonials() {
  const heading = useScrollReveal<HTMLHeadingElement>();
  const card = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 py-32 lg:py-48"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-8 lg:px-12">
        <div
          ref={card}
          className="reveal-up flex flex-col items-center border border-[color-mix(in_oklab,var(--primary)_22%,transparent)] bg-[color-mix(in_oklab,var(--primary)_5%,transparent)] px-6 py-14 text-center sm:px-12 sm:py-20"
        >
          <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            Coming Soon
          </span>
          <h2
            ref={heading}
            id="testimonials-heading"
            className="font-serif text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl"
          >
            Stay tuned for
            <span className="italic text-[var(--primary)]"> our journal.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            A growing record of the days out, kitchen-table moments, and small adventures
            Sabrina shares with the people she looks after. New entries appear here as
            Sabrina shares them — pop back to follow along.
          </p>
          <a
            href="#journal"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)] transition-colors hover:text-[var(--bronze)]"
          >
            Read the journal <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
