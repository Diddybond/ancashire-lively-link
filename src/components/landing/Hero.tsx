import { useScrollReveal, useParallax } from "@/hooks/use-scroll-reveal";

export function Hero() {
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const eyebrowRef = useScrollReveal<HTMLSpanElement>();
  const copyRef = useScrollReveal<HTMLParagraphElement>();
  const ctaRef = useScrollReveal<HTMLDivElement>();
  const imageWrapRef = useScrollReveal<HTMLDivElement>();
  const imageInnerRef = useParallax<HTMLImageElement>(0.08);
  const cardRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="top" className="relative overflow-hidden pt-32 lg:pt-40">
      {/* Decorative background type */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 right-4 select-none font-serif text-[18vw] leading-none italic text-foreground/[0.04] lg:right-12 lg:text-[14vw]"
      >
        est. care
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-12 items-end gap-8 px-6 pb-20 sm:px-8 lg:gap-12 lg:px-12 lg:pb-32">
        <div className="col-span-12 lg:col-span-6 lg:pb-12">
          <span
            ref={eyebrowRef}
            className="reveal-up mb-8 block text-[10px] font-medium uppercase tracking-eyebrow text-[var(--bronze)]"
          >
            Sabrina Myers Lifestyle &amp; Companionship
          </span>
          <h1
            ref={titleRef}
            className="reveal-up delay-1 font-serif text-[clamp(2.5rem,6vw,5.25rem)] font-light leading-[1.05] tracking-tight text-balance text-foreground"
          >
            A private companionship and lifestyle service for older adults across{" "}
            <span className="italic">Blackburn with Darwen</span> and the wider Lancashire area.
          </h1>
          <p
            ref={copyRef}
            className="reveal-up delay-2 mt-10 max-w-[46ch] text-lg font-light leading-relaxed tracking-wide text-foreground/75"
          >
            Quietly attentive. Carefully considered. Personally led by Sabrina Myers to ensure
            your loved ones live beautifully and independently at home.
          </p>
          <div ref={ctaRef} className="reveal-up delay-3 mt-12 flex flex-wrap items-center gap-10">
            <a
              href="#contact"
              className="group flex items-center gap-4 border-b border-foreground/25 pb-2 text-[11px] font-medium uppercase tracking-eyebrow text-foreground transition-colors hover:border-[var(--bronze)] hover:text-[var(--bronze)]"
            >
              Arrange a Free Chat
              <span className="transition-transform group-hover:translate-x-2">→</span>
            </a>
            <a
              href="tel:07515975760"
              className="group flex items-center gap-3 text-[11px] font-medium uppercase tracking-eyebrow text-foreground/70 transition-colors hover:text-foreground"
            >
              <span className="h-px w-8 bg-foreground/40 transition-all group-hover:w-12" />
              Call 07515 975 760
            </a>
          </div>
        </div>

        <div ref={imageWrapRef} className="reveal-up delay-2 relative col-span-12 lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--primary)]/10">
            <img
              ref={imageInnerRef}
              src="https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?auto=format&fit=crop&w=1400&q=80"
              alt="An older couple walking through a tree-lined Lancashire park at golden hour"
              className="h-[115%] w-full -translate-y-[7%] object-cover [filter:grayscale(15%)_contrast(1.02)]"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/5" />
          </div>

          {/* Floating editorial card */}
          <div
            ref={cardRef}
            className="reveal-up delay-3 absolute -bottom-10 -left-6 hidden max-w-xs bg-background p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] sm:block lg:-left-12 lg:p-10"
          >
            <span className="mb-3 block font-serif text-4xl italic text-[var(--bronze)]">01</span>
            <p className="text-[10px] font-medium uppercase leading-relaxed tracking-eyebrow text-foreground">
              Proudly serving the towns and villages of Blackburn with Darwen and Lancashire.
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden className="mx-auto mt-8 h-px max-w-7xl border-t border-[color-mix(in_oklab,var(--primary)_28%,transparent)]" />
    </section>
  );
}
