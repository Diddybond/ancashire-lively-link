import { Coffee, Map, Ticket, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Coffee,
    title: "Active Companionship",
    desc: "Meaningful conversation, shared hobbies, and light home help.",
  },
  {
    icon: Map,
    title: "Out & About",
    desc: "Chaperoned appointments and daytime social outings. We include 15 miles of free travel per visit.",
  },
  {
    icon: Ticket,
    title: "Special Occasions",
    desc: "Flexible hours for evening events like the theatre or late-night bingo.",
  },
  {
    icon: Building,
    title: "Care Home Support",
    desc: "B2B freelance Activities Coordination for local care settings.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-card/50 py-20 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/60">
            Services
          </p>
          <h2 id="services-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Tailored support for everyday life
          </h2>
          <p className="mt-4 text-foreground/75">
            Non-medical, person-centred companionship designed around what brings each individual
            joy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              className="group border-border bg-background transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6 pt-6">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-foreground transition-colors group-hover:bg-primary/25">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-foreground/75">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
