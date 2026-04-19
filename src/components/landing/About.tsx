import sabrina from "@/assets/sabrina.jpg";
import { useParallax, useScrollReveal } from "@/hooks/use-scroll-reveal";

export function About() {
  const imgWrap = useScrollReveal<HTMLDivElement>();
  const imgInner = useParallax<HTMLImageElement>(0.06);
  const eyebrow = useScrollReveal<HTMLSpanElement>();
  const title = useScrollReveal<HTMLHeadingElement>();
  const p1 = useScrollReveal<HTMLParagraphElement>();
  const p2 = useScrollReveal<HTMLParagraphElement>();
  const sig = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-32 lg:py-48"
      aria-labelledby="about-heading"
    >
      {/* Soft sage shape — matches hero language */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-24 hidden h-[70%] w-[38%] rounded-r-[3rem] bg-[color-mix(in_oklab,var(--primary)_12%,transparent)] lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-12 items-center gap-y-16 gap-x-12 px-6 sm:px-8 lg:px-12">
        <div ref={imgWrap} className="reveal-up col-span-12 lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.3)]">
            <img
              ref={imgInner}
              src={sabrina}
              alt="Sabrina Myers, Lifestyle Coordinator"
              className="h-[115%] w-full -translate-y-[7%] object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <div className="bg-background/95 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.2)] sm:p-12 lg:p-14">
            <span
              ref={eyebrow}
              className="reveal-up mb-6 block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]"
            >
              About · Founder
            </span>
            <h2
              ref={title}
              id="about-heading"
              className="reveal-up delay-1 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl"
            >
              Meet
              <span className="block text-[var(--primary)]">Sabrina Myers.</span>
            </h2>
            <p
              ref={p1}
              className="reveal-up delay-2 mt-6 max-w-[52ch] text-base leading-relaxed text-foreground/80 sm:mt-8 sm:text-xl"
            >
              Hello! I'm Sabrina Myers. Originally from Ballymena in Northern Ireland, I've
              proudly called the mainland home for 25 years, and I love serving the community
              here in Lancashire.
            </p>
            <p
              ref={p2}
              className="mt-5 max-w-[52ch] text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-xl"
            >
              My early career spanned 25 years in retail — a background that taught me the value
              of genuine customer service and the simple pleasure of a really good chat. As my
              children grew older, I realised my true calling was lifestyle coordination and care.
            </p>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-xl">
              I've always worked independently of agencies, and I always will. It's the only way
              to maintain the unhurried, premium standard of companionship I believe every older
              adult deserves. When you book with me, you get my dedicated time and a genuine
              relationship — never a rota, never a stranger, every single visit.
            </p>

            <div ref={sig} className="reveal-up delay-4 mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary-foreground)] transition-all hover:bg-[var(--bronze)] sm:px-8 sm:py-4 sm:text-base"
              >
                Speak with Sabrina
              </a>
              <span className="font-serif text-2xl italic text-[var(--primary)]">— Sabrina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
