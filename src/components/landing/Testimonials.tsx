import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    quote:
      "A genuine, considered approach that has made a real difference to our family. Sabrina is a quiet professional in every sense.",
    name: "Family Member",
    location: "Blackburn",
  },
  {
    quote:
      "The continuity is what we noticed first — the same kind face, every visit. Mum looks forward to her afternoons with Sabrina.",
    name: "Daughter of Client",
    location: "Darwen",
  },
  {
    quote:
      "Unhurried, warm, and endlessly patient. After years of agency rotations, this has been a revelation.",
    name: "Family Member",
    location: "Lancashire",
  },
  {
    quote:
      "Dad now has someone to share a proper conversation with. The outings to the park have brought him back to himself.",
    name: "Son of Client",
    location: "Accrington",
  },
  {
    quote:
      "Honest, dependable, and kind. Sabrina treats my mother as a person first, never a task on a schedule.",
    name: "Family Member",
    location: "Clitheroe",
  },
  {
    quote:
      "We engaged Sabrina for our care home's lifestyle programme. Residents and staff alike adore her.",
    name: "Care Home Manager",
    location: "Lancashire",
  },
];

export function Testimonials() {
  const heading = useScrollReveal<HTMLHeadingElement>();
  const rule = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 py-32 lg:py-48"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-24 flex flex-col items-center text-center">
          <div ref={rule} className="reveal-up mb-10 h-24 w-px bg-[var(--bronze)]/40" />
          <span className="mb-4 block text-[10px] font-medium uppercase tracking-eyebrow text-[var(--bronze)]">
            In Their Own Words
          </span>
          <h2
            ref={heading}
            id="testimonials-heading"
            className="reveal-up delay-1 font-serif text-5xl font-light italic leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            Kind reflections.
          </h2>
          <p className="reveal-up delay-2 mt-6 max-w-xl text-lg font-light text-foreground/75">
            A growing collection of words from the families and care settings Sabrina has had the
            privilege to serve.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} index={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  location,
  index,
}: {
  quote: string;
  name: string;
  location: string;
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  const delayClass = `delay-${(index % 4) + 1}` as const;

  return (
    <figure
      ref={ref}
      className={`reveal-up ${delayClass} flex flex-col border-t border-foreground/15 pt-8`}
    >
      <span
        aria-hidden
        className="mb-4 font-serif text-6xl leading-none text-[var(--bronze)]/70"
      >
        &ldquo;
      </span>
      <blockquote className="font-serif text-2xl font-light italic leading-snug text-foreground/85">
        {quote}
      </blockquote>
      <figcaption className="mt-8 flex items-baseline justify-between text-[10px] font-medium uppercase tracking-eyebrow text-foreground/55">
        <span>{name}</span>
        <span className="text-[var(--bronze)]">{location}</span>
      </figcaption>
      <p className="mt-3 text-[9px] font-medium uppercase tracking-eyebrow text-foreground/35">
        Placeholder · 0{index + 1}
      </p>
    </figure>
  );
}
