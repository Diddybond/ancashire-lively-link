import { Button } from "@/components/ui/button";
import sabrina from "@/assets/sabrina.jpg";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted shadow-lg">
            <img
              src={sabrina}
              alt="Sabrina Myers, Lifestyle Coordinator"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/60">
            About
          </p>
          <h2 id="about-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Meet Sabrina, Your Lifestyle Coordinator
          </h2>
          <p className="mt-6 text-foreground/80">
            Hello! I’m Sabrina. With over 3 years of experience as a professional Activities and
            Lifestyle Coordinator in premium care settings, I founded this business to bring joy,
            engagement, and independence directly to seniors in their own homes.
          </p>
          <p className="mt-4 text-foreground/80">
            Born and raised in Darwen, I have deep roots in this community and a genuine love for
            the people who call Lancashire home. My approach is warm, patient, and unhurried —
            because real connection takes time. Whether it’s a cup of tea and a good chat or an
            afternoon out at a favourite spot, my mission is simply to make each day a little
            brighter.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="font-semibold">
              <a href="#contact">Ask Sabrina a Question</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
