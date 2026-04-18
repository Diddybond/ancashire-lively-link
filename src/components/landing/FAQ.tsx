import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqs = [
  {
    q: "What is the difference between companionship and personal care?",
    a: "We focus entirely on enriching daily life through social support, hobbies, home help, and outings. We do not provide hands-on clinical care (such as bathing, toileting, or administering medication), which means we can focus 100% on lifestyle and wellbeing.",
  },
  {
    q: "Do I have to commit to a long-term contract?",
    a: "Not at all. We are completely flexible. Whether you need a regular weekly schedule or just ad-hoc cover for special events and respite, our only requirement is a minimum visit time of 2 hours.",
  },
  {
    q: "Can you take my parent to appointments or out shopping?",
    a: "Absolutely. Getting out and about is our specialty. Sabrina is fully insured for business travel. We include 15 miles completely free with every visit; further afield is charged at a standard 45p per mile.",
  },
  {
    q: "Who pays for tickets, meals, or activities during an outing?",
    a: "Our £25 hourly rate covers Sabrina's time and all travel/mileage. Out-of-pocket expenses during the visit — theatre tickets, café bills, admission fees for both client and Sabrina — are covered by the client.",
  },
  {
    q: "Are you insured and background checked?",
    a: "Yes. Sabrina holds an Enhanced DBS check and the business carries full public liability insurance for complete peace of mind.",
  },
  {
    q: "What exact areas do you cover?",
    a: "Proudly based in Blackburn with Darwen and serving the wider Lancashire area. If you are unsure whether we cover your specific village, please simply get in touch.",
  },
  {
    q: "Do you work with local care homes?",
    a: "Yes — freelance Activities Coordination support for events, lifestyle sessions, or cover for staff absences.",
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
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-12 px-6 sm:px-8 lg:px-12">
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
          <span className="mb-4 block text-[10px] font-medium uppercase tracking-eyebrow text-[var(--bronze)]">
            FAQs
          </span>
          <h2
            ref={heading}
            id="faq-heading"
            className="reveal-up font-serif text-5xl font-light italic leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            Common <br /> questions.
          </h2>
          <p className="mt-6 max-w-sm text-base font-light text-foreground/70">
            The things families most often ask before booking Sabrina to support a loved one.
          </p>
        </div>

        <div ref={list} className="reveal-up col-span-12 lg:col-span-7 lg:col-start-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-foreground/15"
              >
                <AccordionTrigger className="py-6 text-left font-serif text-xl font-normal text-foreground hover:no-underline sm:text-2xl">
                  <span className="flex items-baseline gap-6">
                    <span className="text-[10px] font-medium uppercase tracking-eyebrow text-[var(--bronze)]">
                      0{i + 1}
                    </span>
                    <span>{f.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pl-14 text-base font-light leading-relaxed text-foreground/75">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
