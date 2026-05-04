import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqs = [
  {
    q: "What is companionship care?",
    a: "Companionship care is a non-medical home support service for older adults who are largely independent but would benefit from regular company, engagement, and gentle help with daily life. It focuses on emotional and social wellbeing rather than personal or medical care — conversation, hobbies, outings, light home help, accompanying to appointments, and meaningful time together.",
  },
  {
    q: "What's the difference between companionship care and personal care?",
    a: "Personal care is a regulated activity covering tasks like bathing, dressing, toileting and administering medication — provided by CQC-registered agencies. Companionship care is non-medical and focuses on engagement, social connection and quality of life. As an independent companion, I provide companionship care only. Where needs cross into personal care, I'm always happy to recommend a trusted CQC-registered provider.",
  },
  {
    q: "How much does companionship care cost in the UK?",
    a: "Hourly rates for companionship care typically range from £20 to £35 per hour in the UK. As an independent, non-agency provider, my rate is £35 per hour with a two-hour minimum visit. Families pay only for my time and local travel — there are no agency markups, no admin fees, and no hidden extras.",
  },
  {
    q: "How is an independent companion carer different from a care agency?",
    a: "With a large agency, families often face a rotating roster of different staff on tight 15-minute schedules. As an independent companion, I'm one consistent professional — every visit, without exception. No corporate red tape, no rotating staff, no rushed visits. Just a genuine relationship built over time.",
  },
  {
    q: "Do I have to commit to a long-term contract?",
    a: "No. There are no contracts and no minimum commitments beyond a two-hour minimum visit length. Most families book regular weekly or fortnightly visits because consistency is part of the value, but you're free to stop or change at any time.",
  },
  {
    q: "Can you take my elderly parent out for the day?",
    a: "Yes. Days out are one of the things families value most. I plan outings around the older person's interests — gardens, galleries, tearooms, favourite walks, theatre matinees, the seaside. The first 15 miles of travel from Blackburn are included free; further mileage is 45p per mile. My Enrichment Days package is a flat £140 for a planned 4-hour outing.",
  },
  {
    q: "Who pays for tickets, meals, or activities during an outing?",
    a: "The client covers out-of-pocket costs during outings — tickets, café bills, entry fees — for both themselves and for me. These are agreed in advance.",
  },
  {
    q: "Are you insured and DBS checked?",
    a: "Yes. I hold an enhanced DBS check, full public liability insurance, and professional indemnity cover. Documentation available on request.",
  },
  {
    q: "What areas of Lancashire do you cover?",
    a: "Blackburn with Darwen, the Ribble Valley (Clitheroe, Whalley, Longridge), Hyndburn (Accrington, Oswaldtwistle), Burnley, Preston, South Ribble, Chorley and Rossendale. The first 15 miles of travel from Blackburn are included free in every visit; further afield is 45p per mile.",
  },
  {
    q: "Do you work with local care homes?",
    a: "Yes. As a qualified lifestyle coordinator, I take freelance contracts with local care homes — running bespoke activity programmes, facilitating events, and covering activity coordinator absences. Care home managers can contact me directly to discuss day rates.",
  },
  {
    q: "How quickly can companionship visits start?",
    a: "Most new clients can have an initial free chat within 48 hours, a home visit within a week, and regular visits beginning the week after. Special occasions can be arranged at shorter notice.",
  },
];

export function FAQ() {
  const heading = useScrollReveal<HTMLHeadingElement>();
  const list = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="faqs"
      className="scroll-mt-24 py-32 lg:py-48"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 sm:gap-12 sm:px-8 lg:px-12">
        <div className="col-span-12 min-w-0 lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
          <span className="mb-6 block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            Companionship Care FAQs
          </span>
          <h2
            ref={heading}
            id="faq-heading"
            className="reveal-up font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            Common
            <span className="block italic text-[var(--primary)]">questions.</span>
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-xl">
            What families most often ask before booking private companionship care with Sabrina.
          </p>
        </div>

        <div ref={list} className="reveal-up col-span-12 min-w-0 lg:col-span-7 lg:col-start-6">
          <dl className="w-full">
            {faqs.map((f, i) => (
              <div key={f.q} className="border-b border-foreground/15 py-6 sm:py-8">
                <dt className="grid min-w-0 w-full grid-cols-[auto_1fr] items-start gap-3 sm:gap-6">
                  <span className="pt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--primary)] sm:text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="min-w-0 break-words font-serif text-lg font-medium text-foreground sm:text-2xl">
                    {f.q}
                  </h3>
                </dt>
                <dd className="mt-3 pl-0 text-base leading-relaxed text-foreground/80 sm:pl-14 sm:text-lg">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
