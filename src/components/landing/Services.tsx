import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const chapters = [
  {
    no: "One",
    audience: "For families",
    title: "Private Companionship at Home",
    price: "£35 / hour · two-hour minimum",
    desc: "Non-agency, unhurried visits to your loved one's own home. One consistent professional. Weekly or fortnightly — conversation, hobbies, light home help, walks, appointment chaperoning, life-story work. The core ongoing service for families wanting to support a parent ageing at home.",
    meta: ["One consistent professional", "Weekly or fortnightly", "£35/hr · 2-hour minimum"],
  },
  {
    no: "Two",
    audience: "For families",
    title: "Private Companion Visits in a Care Home",
    price: "£35 / hour · two-hour minimum",
    desc: "Hired by the family, not the care home. One-to-one enrichment time for your loved one inside their care home — on top of the home's own staff and group activities. A familiar, regular face who knows them, spends unhurried time with them, and brings the conversation, activities and small adventures their day might otherwise lack. Particularly valued by families whose parent is socially withdrawn, has recently moved into residential care, or simply isn't getting enough one-to-one attention.",
    meta: ["One-to-one inside the home", "Familiar, regular face", "Hired by the family"],
  },
  {
    no: "Three",
    audience: "For families",
    title: "Enrichment Days Out",
    price: "£140 flat · 4-hour planned outing",
    desc: "Pre-planned premium outings built around what each older person actually loves — gardens, galleries, tearooms, theatre matinees, the seaside, favourite places. A gift-bookable day, end to end. Available for older adults at home, and (subject to the care home's policy) for residents who can leave the home for the day.",
    meta: ["Planned around interests", "Gift-bookable", "£140 for 4 hours"],
  },
  {
    no: "Four",
    audience: "For families",
    title: "Special Occasions & Evenings",
    price: "£40 / hour · two-hour minimum",
    desc: "Milestone birthdays, theatre nights, family weddings, evening events. A calm, capable companion to make sure the day runs smoothly and everyone is at ease.",
    meta: ["Evenings & weekends", "Theatre, weddings, events", "£40/hr · 2-hour minimum"],
  },
  {
    no: "Five",
    audience: "For care home managers",
    title: "Care Home Lifestyle Programmes",
    price: "Day rates · by arrangement",
    desc: "Direct freelance contracts with care home managers — bespoke activity programmes, event facilitation, and cover for activity coordinator absences. This is a separate B2B service for care homes themselves, not for families.",
    meta: ["Activity programmes", "Event facilitation", "Coordinator cover"],
  },
];

function Chapter({
  no,
  audience,
  title,
  price,
  desc,
  meta,
  isB2B,
}: (typeof chapters)[number] & { index: number }) {
  const text = useScrollReveal<HTMLDivElement>();

  return (
    <article
      ref={text}
      className={`reveal-up mx-auto grid max-w-3xl grid-cols-1 border-t pt-10 text-left sm:pt-14 ${
        isB2B
          ? "border-[var(--bronze)]/40"
          : "border-foreground/15"
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <span className={`block text-sm font-semibold uppercase tracking-[0.28em] ${isB2B ? "text-[var(--bronze)]" : "text-[var(--primary)]"}`}>
          {no}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground/55">
          {audience}
        </span>
      </div>
      <h3 className="mt-4 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl">
        {title}
      </h3>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--bronze)]">
        {price}
      </p>
      <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-foreground/80 sm:mt-8 sm:text-xl">
        {desc}
      </p>
      <ul className="mt-8 space-y-0 sm:mt-10">
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
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="mb-20 flex flex-col items-center text-center sm:mb-32">
          <div ref={rule} className="reveal-up mb-10 h-24 w-px bg-[var(--primary)]/40" />
          <span className="mb-6 block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            Services
          </span>
          <h2
            ref={heading}
            id="services-heading"
            className="reveal-up delay-1 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            Five ways I can
            <span className="italic text-[var(--primary)]"> help.</span>
          </h2>
          <p className="reveal-up delay-2 mt-5 max-w-2xl text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-xl">
            Independent, non-agency companionship care and lifestyle support — wherever
            your loved one lives, at home or in a care home — shaped around what brings
            each older person joy.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {chapters.slice(0, 4).map((c, i) => (
            <Chapter key={c.title} index={i} {...c} isB2B={false} />
          ))}

          <div className="mx-auto max-w-3xl pt-8">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-[var(--bronze)]/30" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--bronze)]">
                For care home managers · B2B
              </span>
              <span className="h-px flex-1 bg-[var(--bronze)]/30" />
            </div>
          </div>

          {chapters.slice(4).map((c, i) => (
            <Chapter key={c.title} index={i + 4} {...c} isB2B={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
