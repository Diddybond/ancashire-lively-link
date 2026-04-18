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
      className="scroll-mt-24 py-32 lg:py-48"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-y-16 gap-x-12 px-6 sm:px-8 lg:px-12">
        <div ref={imgWrap} className="reveal-up col-span-12 lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--primary)]/10 shadow-[40px_40px_0_0_color-mix(in_oklab,var(--primary)_15%,transparent)]">
            <img
              ref={imgInner}
              src={sabrina}
              alt="Sabrina Myers, Lifestyle Coordinator"
              className="h-[115%] w-full -translate-y-[7%] object-cover [filter:grayscale(10%)]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <span
            ref={eyebrow}
            className="reveal-up mb-6 block text-[10px] font-medium uppercase tracking-eyebrow text-[var(--bronze)]"
          >
            Chapter · Founder
          </span>
          <h2
            ref={title}
            id="about-heading"
            className="reveal-up delay-1 font-serif text-5xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl"
          >
            A lifetime of <span className="italic">care</span>,
            <br /> patiently practiced.
          </h2>
          <p
            ref={p1}
            className="reveal-up delay-2 mt-10 max-w-[52ch] text-lg font-light leading-relaxed text-foreground/80"
          >
            Hello! I'm Sabrina. Originally from Ballymena in Northern Ireland, I've proudly
            called the mainland home for 25 years, and I love serving the community here in
            Lancashire.
          </p>
          <p
            ref={p2}
            className="reveal-up delay-3 mt-6 max-w-[52ch] text-lg font-light leading-relaxed text-foreground/80"
          >
            My early career was in retail, which gave me a deep appreciation for customer service
            and simply having a really good chat! As my children grew older, I realised my true
            calling was in care.
          </p>
          <p className="reveal-up delay-3 mt-6 max-w-[52ch] text-lg font-light leading-relaxed text-foreground/80">
            My experience comes directly from working as a professional Activities and Lifestyle
            Coordinator in premium care homes, where I discovered my absolute passion for
            person-centred, joyful support. I founded this independent business because I saw a
            desperate need in our community for consistent, unhurried companionship — the exact
            opposite of the standard agency model. When you book with me, you get my dedicated
            time and a genuine relationship, every single visit.
          </p>

          <div ref={sig} className="reveal-up delay-4 mt-12 flex items-center gap-6">
            <div className="font-serif text-3xl italic text-[var(--bronze)]">— Sabrina</div>
            <div className="hairline h-px flex-1" />
            <a
              href="#contact"
              className="text-[11px] font-medium uppercase tracking-eyebrow text-foreground transition-colors hover:text-[var(--bronze)]"
            >
              Speak with Sabrina →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
