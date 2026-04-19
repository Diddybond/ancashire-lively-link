import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const areas = [
  {
    region: "Blackburn & Darwen",
    places: "Blackburn, Darwen, Tockholes, Hoddlesden, Lower Darwen",
  },
  {
    region: "The Ribble Valley",
    places: "Clitheroe, Whalley, Longridge & surrounding villages",
  },
  {
    region: "Hyndburn & Burnley",
    places: "Accrington, Oswaldtwistle, Burnley",
  },
  {
    region: "Preston & South Ribble",
    places: "Preston City, Bamber Bridge, Leyland",
  },
  {
    region: "Chorley & Rossendale",
    places: "Chorley, Rawtenstall, Bacup",
  },
  {
    region: "Beyond 15 miles?",
    places: "Just 45p per mile after the free first 15 — please ask.",
  },
];

export function ServiceAreas() {
  const heading = useScrollReveal<HTMLHeadingElement>();
  const intro = useScrollReveal<HTMLParagraphElement>();
  const grid = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="areas"
      className="relative scroll-mt-24 bg-[color-mix(in_oklab,var(--primary)_8%,var(--background))] py-32 lg:py-44"
      aria-labelledby="areas-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <span className="mb-6 block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            Proudly Serving Our Lancashire Communities
          </span>
          <h2
            ref={heading}
            id="areas-heading"
            className="reveal-up font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            Supporting independence
            <span className="block italic text-[var(--primary)]">across the county.</span>
          </h2>
          <p
            ref={intro}
            className="reveal-up delay-1 mt-6 text-base leading-relaxed text-foreground/80 sm:mt-8 sm:text-xl"
          >
            Based in Blackburn with Darwen, Sabrina provides her quietly attentive
            companionship to families throughout the following areas:
          </p>
        </div>

        <div
          ref={grid}
          className="reveal-up delay-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {areas.map((a, i) => (
            <article
              key={a.region}
              className="group relative bg-background/95 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] sm:p-8 lg:p-10"
            >
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                0{i + 1}
              </span>
              <h3 className="font-serif text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                {a.region}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/75 sm:text-lg">{a.places}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center text-base text-foreground/65">
          Don&apos;t see your village? Sabrina happily travels across Lancashire — get in
          touch and she&apos;ll let you know.
        </p>
      </div>
    </section>
  );
}
