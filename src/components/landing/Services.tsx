import { useScrollReveal, useParallax } from "@/hooks/use-scroll-reveal";
import companionshipTea from "@/assets/companionship-tea.png";

const chapters = [
  {
    no: "One",
    title: "Friendly Companionship",
    desc: "A good chat over a cuppa, shared hobbies, and a helping hand around the house. Time spent together, never watched on a clock.",
    image: companionshipTea,
    meta: ["Conversation & company", "Hobbies & light home help", "Reading & memory work"],
  },
  {
    no: "Two",
    title: "Out & About",
    desc: "Lifts to appointments and proper days out — the local park, a favourite tearoom, the shops or a Sunday gallery. The first 15 miles are always on the house.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    meta: ["Appointment chaperone", "Daytime social outings", "15 free miles per visit"],
  },
  {
    no: "Three",
    title: "Special Occasions",
    desc: "An evening at the theatre, a late-night bingo win, a milestone birthday with the family. Flexible hours arranged around what matters to you.",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    meta: ["Evening events", "Theatre & bingo", "Family celebrations"],
  },
  {
    no: "Four",
    title: "Care Home Support",
    desc: "Freelance Activities Coordination for local care homes — bringing the same warm, person-centred approach to wider residential settings.",
    image:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1200&q=80",
    meta: ["Lifestyle programmes", "Event facilitation", "Cover for absences"],
  },
];

function Chapter({
  no,
  title,
  desc,
  image,
  meta,
  index,
}: (typeof chapters)[number] & { index: number }) {
  const reverse = index % 2 === 1;
  const imgWrap = useScrollReveal<HTMLDivElement>();
  const imgInner = useParallax<HTMLImageElement>(0.05);
  const text = useScrollReveal<HTMLDivElement>();

  return (
    <article className="grid grid-cols-12 items-center gap-y-10 gap-x-12">
      <div
        ref={imgWrap}
        className={`reveal-up col-span-12 lg:col-span-7 ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div
          className={`relative aspect-[4/3] overflow-hidden bg-[var(--primary)]/10 ${
            reverse
              ? "shadow-[-40px_40px_0_0_color-mix(in_oklab,var(--bronze)_18%,transparent)]"
              : "shadow-[40px_40px_0_0_color-mix(in_oklab,var(--primary)_15%,transparent)]"
          }`}
        >
          <img
            ref={imgInner}
            src={image}
            alt=""
            loading="lazy"
            className="h-[115%] w-full -translate-y-[7%] object-cover [filter:grayscale(15%)_contrast(1.02)] transition-transform duration-[1200ms] hover:scale-[1.03]"
          />
        </div>
      </div>

      <div
        ref={text}
        className={`reveal-up delay-1 col-span-12 lg:col-span-5 ${
          reverse ? "lg:order-1 lg:col-start-1" : "lg:order-2 lg:col-start-8"
        }`}
      >
        <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">{no}</span>
        <h3 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          {title}
        </h3>
        <p className="mt-8 max-w-[44ch] text-xl leading-relaxed text-foreground/80">
          {desc}
        </p>
        <ul className="mt-10 space-y-0">
          {meta.map((m, i) => (
            <li
              key={m}
              className="flex items-center justify-between border-t border-border/60 py-4 text-[11px] font-medium uppercase tracking-eyebrow text-foreground/85"
            >
              <span>
                <span className="mr-4 text-foreground/40">0{i + 1}</span>
                {m}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Services() {
  const heading = useScrollReveal<HTMLHeadingElement>();
  const rule = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="services"
      className="scroll-mt-24 py-32 lg:py-48"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-32 flex flex-col items-center text-center">
          <div ref={rule} className="reveal-up mb-10 h-24 w-px bg-[var(--primary)]/40" />
          <span className="mb-6 block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            Services
          </span>
          <h2
            ref={heading}
            id="services-heading"
            className="reveal-up delay-1 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            How I can
            <span className="italic text-[var(--primary)]"> help.</span>
          </h2>
          <p className="reveal-up delay-2 mt-6 max-w-xl text-xl text-foreground/80">
            Four ways I support older adults and their families — non-medical, person-centred,
            and shaped around what brings each person joy.
          </p>
        </div>

        <div className="space-y-32 lg:space-y-48">
          {chapters.map((c, i) => (
            <Chapter key={c.title} index={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
