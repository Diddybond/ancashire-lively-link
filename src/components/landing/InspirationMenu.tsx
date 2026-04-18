import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        h: "Family Event Chaperone",
        d: "Sabrina can attend weddings or parties with your loved one, ensuring they are fed, comfortable, and safe, allowing you to relax and host.",
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
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <div className="mb-20 flex flex-col items-center text-center">
          <div ref={rule} className="reveal-up mb-10 h-24 w-px bg-[var(--primary)]/40" />
          <span className="mb-6 block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            The Inspiration Menu
          </span>
          <h2
            ref={heading}
            id="inspiration-heading"
            className="reveal-up delay-1 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            What we can
            <span className="italic text-[var(--primary)]"> do together.</span>
          </h2>
          <p
            ref={intro}
            className="reveal-up delay-2 mt-6 max-w-2xl text-xl leading-relaxed text-foreground/80"
          >
            Sometimes it&apos;s hard to know exactly what kind of support you need. Here are
            just a few examples of how Sabrina can turn a standard visit into a wonderful
            day.
          </p>
        </div>

        <div ref={list} className="reveal-up delay-2">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {menu.map((m, i) => (
              <AccordionItem
                key={m.title}
                value={`item-${i}`}
                className="border-b border-border/60 data-[state=open]:bg-[color-mix(in_oklab,var(--primary)_6%,transparent)] transition-colors"
              >
                <AccordionTrigger className="group px-2 py-8 hover:no-underline sm:px-6">
                  <div className="flex flex-1 items-baseline gap-6 text-left">
                    <span className="font-serif text-2xl italic text-[var(--primary)] shrink-0">
                      {m.no}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
                        {m.title}
                      </h3>
                      <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
                        {m.subtitle}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-2 pb-10 sm:px-6">
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
                        <p className="text-lg leading-relaxed text-foreground/80">
                          {item.d}
                        </p>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
