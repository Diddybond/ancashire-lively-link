import { useScrollReveal, useParallax } from "@/hooks/use-scroll-reveal";
import companionshipTea from "@/assets/companionship-tea.png";
import outAndAbout from "@/assets/out-and-about.jpeg";
import specialOccasions from "@/assets/special-occasions.png";
import careHomeSupport from "@/assets/care-home-support.png";

const chapters = [
  {
    no: "One",
    title: "Private Companionship Visits",
    price: "£35 / hour · two-hour minimum",
    desc: "Non-agency, unhurried companionship from one consistent professional. Weekly or fortnightly visits — conversation, hobbies, light home help, walks, appointment chaperoning, life-story work. The core ongoing service.",
    image: companionshipTea,
    meta: ["One consistent professional", "Weekly or fortnightly", "£35/hr · 2-hour minimum"],
  },
  {
    no: "Two",
    title: "Enrichment Days Out",
    price: "£140 flat · 4-hour planned outing",
    desc: "Pre-planned premium outings built around what each older person actually loves — gardens, galleries, tearooms, theatre matinees, the seaside, favourite places. A gift-bookable day, end to end.",
    image: outAndAbout,
    meta: ["Planned around interests", "Gift-bookable", "£140 for 4 hours"],
  },
  {
    no: "Three",
    title: "Special Occasions & Evenings",
    price: "£40 / hour · two-hour minimum",
    desc: "Milestone birthdays, theatre nights, family weddings, evening events. A calm, capable companion to make sure the day runs smoothly and everyone is at ease.",
    image: specialOccasions,
    meta: ["Evenings & weekends", "Theatre, weddings, events", "£40/hr · 2-hour minimum"],
  },
  {
    no: "Four",
    title: "Care Home Lifestyle Programmes",
    price: "Day rates · by arrangement",
    desc: "Freelance lifestyle coordination contracts for care homes — bespoke activity programmes, event facilitation, and cover for activity coordinator absences. A B2B service for care home managers.",
    image: careHomeSupport,
    meta: ["Activity programmes", "Event facilitation", "Coordinator cover"],
  },
];

function Chapter({
  no,
  title,
  price,
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
    <article className="grid grid-cols-12 items-center gap-y-10 gap-x-0 overflow-hidden sm:gap-x-8 lg:gap-x-12">
      <div
        ref={imgWrap}
        className={`reveal-up col-span-12 min-w-0 lg:col-span-7 ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div
          className={`relative aspect-[4/3] overflow-hidden bg-[var(--primary)]/10 ${
            reverse
              ? "shadow-[-16px_16px_0_0_color-mix(in_oklab,var(--bronze)_18%,transparent)] sm:shadow-[-40px_40px_0_0_color-mix(in_oklab,var(--bronze)_18%,transparent)]"
              : "shadow-[16px_16px_0_0_color-mix(in_oklab,var(--primary)_15%,transparent)] sm:shadow-[40px_40px_0_0_color-mix(in_oklab,var(--primary)_15%,transparent)]"
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
        className={`reveal-up delay-1 col-span-12 min-w-0 lg:col-span-5 ${
          reverse ? "lg:order-1 lg:col-start-1" : "lg:order-2 lg:col-start-8"
        }`}
      >
        <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
          {no}
        </span>
        <h3 className="font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          {title}
        </h3>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--bronze)]">
          {price}
        </p>
        <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-foreground/80 sm:mt-8 sm:text-xl">
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
            Four ways I can
            <span className="italic text-[var(--primary)]"> help.</span>
          </h2>
          <p className="reveal-up delay-2 mt-5 max-w-2xl text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-xl">
            Independent, non-agency companionship care and lifestyle support — shaped around
            what brings each older person joy.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-48">
          {chapters.map((c, i) => (
            <Chapter key={c.title} index={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
