export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--forest)] text-[color-mix(in_oklab,var(--background)_92%,transparent)]">
      <div className="mx-auto max-w-7xl px-6 py-32 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-y-12 gap-x-12 border-b border-white/10 pb-20">
          <div className="col-span-12 lg:col-span-5">
            <div className="font-serif text-4xl italic leading-tight sm:text-5xl">
              Sabrina Myers
              <span className="block text-2xl not-italic font-light tracking-wide opacity-80 sm:text-3xl">
                Lifestyle &amp; Companionship
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed opacity-70">
              Friendly, independent companionship and lifestyle support for older adults
              across Blackburn with Darwen and the wider Lancashire area.
            </p>
          </div>

          <div className="col-span-6 lg:col-span-2 lg:col-start-7">
            <h4 className="mb-6 text-[10px] font-medium uppercase tracking-eyebrow opacity-50">
              Sabrina
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#about" className="opacity-80 hover:text-[var(--bronze)] hover:opacity-100">About Sabrina</a></li>
              <li><a href="#services" className="opacity-80 hover:text-[var(--bronze)] hover:opacity-100">Services</a></li>
              <li><a href="#pricing" className="opacity-80 hover:text-[var(--bronze)] hover:opacity-100">Pricing</a></li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-2">
            <h4 className="mb-6 text-[10px] font-medium uppercase tracking-eyebrow opacity-50">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#contact" className="opacity-80 hover:text-[var(--bronze)] hover:opacity-100">Send a Message</a></li>
              <li><a href="tel:07515975760" className="opacity-80 hover:text-[var(--bronze)] hover:opacity-100">07515 975 760</a></li>
              <li><a href="mailto:hello@sabrinamyers.co.uk" className="opacity-80 hover:text-[var(--bronze)] hover:opacity-100 break-all">hello@sabrinamyers.co.uk</a></li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:text-right">
            <h4 className="mb-6 text-[10px] font-medium uppercase tracking-eyebrow opacity-50">
              Hours
            </h4>
            <p className="font-serif text-2xl italic">Mon — Sat</p>
            <p className="mt-2 text-sm font-light opacity-70">Flexible by arrangement</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-10 text-[10px] font-medium uppercase tracking-eyebrow opacity-50 sm:flex-row sm:items-center">
          <p>© {year} Sabrina Myers Lifestyle &amp; Companionship · All Rights Reserved</p>
          <div className="flex gap-8">
            <a href="#privacy" className="hover:opacity-100">Privacy</a>
            <a href="#" className="hover:opacity-100">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
