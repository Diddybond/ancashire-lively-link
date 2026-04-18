import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-foreground/70">
            Blackburn with Darwen · Lancashire
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Enriching the Lives of Older Adults in Lancashire.
          </h1>
          <p className="mt-6 text-lg text-foreground/75 sm:text-xl">
            Professional companionship, social outings, and lifestyle support in Blackburn with
            Darwen. Led by an experienced Activities Coordinator.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="font-semibold">
              <a href="#contact">
                Schedule a Free Meet &amp; Greet
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?auto=format&fit=crop&w=1200&q=80"
              alt="Two older adults walking happily outdoors in a Lancashire park"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-xl border border-border bg-card p-5 shadow-lg sm:block">
            <p className="font-serif text-base font-semibold text-foreground">
              "Joy, engagement, and independence — at home."
            </p>
            <p className="mt-1 text-sm text-foreground/70">— Sabrina Myers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
