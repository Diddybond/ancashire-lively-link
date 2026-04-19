import { useScrollReveal, useParallax } from "@/hooks/use-scroll-reveal";
import sabrinaPhoto from "@/assets/sabrina.jpg";

export function Hero() {
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const eyebrowRef = useScrollReveal<HTMLSpanElement>();
  const copyRef = useScrollReveal<HTMLParagraphElement>();
  const ctaRef = useScrollReveal<HTMLDivElement>();
  const imageWrapRef = useScrollReveal<HTMLDivElement>();
  const imageInnerRef = useParallax<HTMLImageElement>(0.06);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Soft sage shape behind image — agency polish */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 hidden h-[80%] w-[42%] rounded-l-[3rem] bg-[color-mix(in_oklab,var(--primary)_14%,transparent)] lg:block"
      />
      {/* Soft bronze shape bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -left-10 hidden h-64 w-64 rounded-full bg-[color-mix(in_oklab,var(--bronze)_18%,transparent)] blur-2xl lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-12 items-center gap-y-12 gap-x-8 px-6 sm:px-8 lg:gap-x-12 lg:px-12">
        {/* LEFT: white card with content (like reference) */}
        <div className="relative z-10 col-span-12 lg:col-span-7">
          <div className="bg-background/95 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] sm:p-12 lg:p-16 lg:-mr-16">
            <span
              ref={eyebrowRef}
              className="reveal-up mb-6 block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]"
            >
              Companionship &amp; Lifestyle Support
            </span>

            <h1
              ref={titleRef}
              className="reveal-up delay-1 font-serif text-[clamp(2rem,5.5vw,4.75rem)] font-medium leading-[1.05] tracking-tight text-foreground"
            >
              Quietly attentive care,
              <span className="block text-[var(--primary)]">delivered personally.</span>
            </h1>

            <p
              ref={copyRef}
              className="reveal-up delay-2 mt-6 max-w-[52ch] text-base leading-relaxed text-foreground/80 sm:mt-8 sm:text-xl"
            >
              <span className="font-semibold italic">Hello, I&apos;m Sabrina.</span> I offer
              private companionship and lifestyle support across Blackburn, Darwen, the
              Ribble Valley, and wider Lancashire — helping you, or someone you love,
              live well, comfortably, and independently at home.
            </p>

            <div
              ref={ctaRef}
              className="reveal-up delay-3 mt-10 flex flex-wrap items-center gap-6"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[var(--primary)] px-10 py-5 text-base font-semibold uppercase tracking-[0.18em] text-[var(--primary-foreground)] shadow-sm transition-all hover:bg-[var(--bronze)] hover:shadow-md"
              >
                Arrange a Free Chat
              </a>
              <a
                href="tel:07515975760"
                className="inline-flex items-center gap-3 text-lg font-medium text-foreground transition-colors hover:text-[var(--primary)]"
              >
                <span aria-hidden className="text-[var(--bronze)]">☏</span>
                07515 975 760
              </a>
            </div>

            <p className="mt-8 text-sm font-medium uppercase tracking-[0.24em] text-foreground/60">
              Quietly attentive · Carefully considered
            </p>
          </div>
        </div>

        {/* RIGHT: large photo */}
        <div
          ref={imageWrapRef}
          className="reveal-up delay-2 relative col-span-12 lg:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.3)]">
            <img
              ref={imageInnerRef}
              src={sabrinaPhoto}
              alt="Sabrina Myers — founder of Sabrina Myers Lifestyle & Companionship"
              className="h-[112%] w-full -translate-y-[6%] object-cover object-top"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="mx-auto mt-16 h-px max-w-7xl border-t border-[color-mix(in_oklab,var(--primary)_28%,transparent)]"
      />
    </section>
  );
}
