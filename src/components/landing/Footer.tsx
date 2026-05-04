export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--forest)] text-[color-mix(in_oklab,var(--background)_92%,transparent)]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="grid grid-cols-12 gap-y-12 gap-x-6 border-b border-white/10 pb-16 sm:gap-x-8 sm:pb-20 lg:gap-x-12">
          <div className="col-span-12 min-w-0 lg:col-span-5">
            <div className="font-serif text-3xl leading-tight sm:text-5xl">
              Sabrina Myers
              <span className="block font-serif text-xl italic font-normal tracking-wide opacity-80 sm:text-3xl">
                Companionship &amp; Lifestyle Support
              </span>
            </div>
            <p className="mt-5 max-w-sm text-base leading-relaxed opacity-80 sm:mt-6">
              Independent, non-agency companionship care and lifestyle support for older
              adults across Blackburn with Darwen, the Ribble Valley, Preston, Burnley
              and wider Lancashire.
            </p>
          </div>

          <div className="col-span-6 lg:col-span-2 lg:col-start-7">
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] opacity-60">
              Sabrina
            </h4>
            <ul className="space-y-4 text-base">
              <li><a href="#about" className="opacity-85 hover:text-[var(--bronze)] hover:opacity-100">About Sabrina</a></li>
              <li><a href="#services" className="opacity-85 hover:text-[var(--bronze)] hover:opacity-100">Services</a></li>
              <li><a href="#pricing" className="opacity-85 hover:text-[var(--bronze)] hover:opacity-100">Pricing</a></li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-2">
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] opacity-60">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-base">
              <li><a href="#contact" className="opacity-85 hover:text-[var(--bronze)] hover:opacity-100">Send a Message</a></li>
              <li><a href="tel:07515975760" className="opacity-85 hover:text-[var(--bronze)] hover:opacity-100">07515 975 760</a></li>
              <li><a href="mailto:hello@sabrinamyers.co.uk" className="opacity-85 hover:text-[var(--bronze)] hover:opacity-100 break-all">hello@sabrinamyers.co.uk</a></li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:text-right">
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] opacity-60">
              Hours
            </h4>
            <p className="font-serif text-2xl italic">Mon — Sat</p>
            <p className="mt-2 text-base opacity-80">Flexible by arrangement</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-10 text-xs font-semibold uppercase tracking-[0.24em] opacity-60 sm:flex-row sm:items-center">
          <p>© {year} Sabrina Myers Lifestyle &amp; Companionship · All Rights Reserved</p>
          <div className="flex gap-8">
            <a href="#privacy" className="hover:opacity-100">Privacy</a>
            <a href="#" className="hover:opacity-100">Terms</a>
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-white/55">
          Private companionship care, independent companion carer, and non-medical
          lifestyle support for older adults in Blackburn with Darwen, Clitheroe, Whalley,
          Longridge, Accrington, Oswaldtwistle, Burnley, Preston, Chorley and the wider
          Ribble Valley.
        </p>
      </div>
    </footer>
  );
}
