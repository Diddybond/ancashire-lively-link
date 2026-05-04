import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const menu = [
  {
    no: "One",
    title: "Cosy & Calm",
    subtitle: "At-Home Relaxation",
    items: [
      {
        h: "Life Story Logging",
        d: "Reminiscing and preserving memories, or organising old photo albums together.",
      },
      {
        h: "Nostalgia & Media",
        d: "Watching classic cinema, listening to favourite records, or reading the daily newspaper aloud.",
      },
      {
        h: "Gentle Puzzles",
        d: "Keeping the mind sharp with crosswords, jigsaws, or board games over a cup of tea.",
      },
    ],
  },
  {
    no: "Two",
    title: "Active Mind & Hands",
    subtitle: "Indoor Engagement",
    items: [
      {
        h: "Light Baking",
        d: "Whipping up scones or batch-cooking a favourite soup (Sabrina handles the heavy lifting!).",
      },
      {
        h: "Indoor Gardening",
        d: "Repotting houseplants or arranging fresh flowers.",
      },
      {
        h: "Tech Support",
        d: "Helping set up an iPad to FaceTime grandchildren or safely browse online.",
      },
      {
        h: "Arts & Crafts",
        d: "Creating seasonal crafts or doing gentle seated stretches to music.",
      },
    ],
  },
  {
    no: "Three",
    title: "Out & About",
    subtitle: "Using your 15 free miles",
    items: [
      {
        h: "Garden Centres",
        d: "Browsing the plants at local Lancashire spots, followed by tea and cake.",
      },
      {
        h: "Scenic Drives",
        d: "Enjoying the Ribble Valley countryside from the comfort of the passenger seat.",
      },
      {
        h: "Accompanied Shopping",
        d: "Picking out fresh groceries or heading to the high street for a browse.",
      },
      {
        h: "Parks & Nature",
        d: "Gentle strolls around local spots like Witton Country Park or Bold Venture Park.",
      },
    ],
  },
  {
    no: "Four",
    title: "Special Occasions",
    subtitle: "Flexible Hours",
    items: [
      {
        h: "Theatre & Entertainment",
        d: "Chaperoned trips to matinee or evening shows, and late-night bingo!",
      },
      {
        h: "Event Chaperone",
        d: "A calm, capable companion at weddings, parties, or family gatherings — making sure everyone is fed, comfortable, and at ease throughout the day.",
      },
      {
        h: "Life Admin",
        d: "Helping sort through the post, plan weekly menus, or write out Christmas and birthday cards.",
      },
    ],
  },
];

export function InspirationMenu() {
  const heading = useScrollReveal<HTMLHeadingElement>();
  const rule = useScrollReveal<HTMLDivElement>();
  const intro = useScrollReveal<HTMLParagraphElement>();
  const list = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="inspiration"
      className="scroll-mt-24 py-32 lg:py-48"
      aria-labelledby="inspiration-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
        <div className="mb-16 flex flex-col items-center text-center sm:mb-20">
          <div ref={rule} className="reveal-up mb-10 h-24 w-px bg-[var(--primary)]/40" />
          <span className="mb-6 block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            The Inspiration Menu
          </span>
          <h2
            ref={heading}
            id="inspiration-heading"
            className="reveal-up delay-1 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            What we can
            <span className="italic text-[var(--primary)]"> do together.</span>
          </h2>
          <p
            ref={intro}
            className="reveal-up delay-2 mt-5 max-w-2xl text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-xl"
          >
            Sometimes it&apos;s hard to know exactly what kind of support would help most —
            whether you&apos;re thinking about this for yourself or for someone you love. Here are
            just a few examples of how a visit with Sabrina can turn an ordinary day into a wonderful
            one.
          </p>
        </div>

        <div ref={list} className="reveal-up delay-2 w-full">
          {menu.map((m) => (
            <div
              key={m.title}
              className="border-b border-border/60 bg-[color-mix(in_oklab,var(--primary)_6%,transparent)] transition-colors"
            >
              {/* Section header — static, no toggle */}
              <div className="px-2 py-6 sm:px-6 sm:py-8">
                <div className="flex flex-1 items-baseline gap-4 text-left sm:gap-6">
                  <span className="font-serif text-xl italic text-[var(--primary)] shrink-0 sm:text-2xl">
                    {m.no}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
                      {m.title}
                    </h3>
                    <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground/60 sm:text-xs">
                      {m.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Section content — always visible */}
              <div className="px-2 pb-8 sm:px-6 sm:pb-10">
                <ul className="ml-0 space-y-0 sm:ml-16">
                  {m.items.map((item, idx) => (
                    <li
                      key={item.h}
                      className="flex flex-col gap-2 border-t border-border/50 py-5 sm:flex-row sm:gap-8"
                    >
                      <div className="flex shrink-0 items-baseline gap-3 sm:w-64">
                        <span className="text-foreground/40 text-sm">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/85">
                          {item.h}
                        </span>
                      </div>
                      <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                        {item.d}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
