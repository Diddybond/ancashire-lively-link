import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    a: "Absolutely. Getting out and about is our specialty! Sabrina is fully insured for business travel, and uniquely, we never charge extra mileage fees — you only pay the standard hourly rate.",
  },
  {
    q: "Are you insured and background checked?",
    a: "Yes. Sabrina holds an Enhanced DBS check and the business carries full public liability insurance to guarantee peace of mind for you and your family.",
  },
  {
    q: "What exact areas do you cover?",
    a: "We are proudly based in Blackburn with Darwen and provide services across the wider Lancashire area. If you are unsure if we cover your specific village, just get in touch!",
  },
  {
    q: "Do you work with local care homes?",
    a: "Yes, we provide freelance Activities Coordination support to care homes that need extra hands for events, engaging lifestyle sessions, or covering staff absences.",
  },
];

export function FAQ() {
  return (
    <section
      id="faqs"
      className="scroll-mt-24 bg-card/50 py-20 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/60">
            FAQs
          </p>
          <h2 id="faq-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Common Questions from Families
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-foreground sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
