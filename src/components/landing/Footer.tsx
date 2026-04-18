export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[oklch(0.28_0.04_150)] text-[oklch(0.97_0.018_90)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-lg font-semibold">Sabrina Myers</p>
            <p className="mt-1 text-sm opacity-80">
              Private elderly companionship and lifestyle coordination in Blackburn, Darwen, and
              Lancashire.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#about" className="opacity-80 hover:opacity-100">About</a>
            <a href="#services" className="opacity-80 hover:opacity-100">Services</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
            <a href="#privacy" className="opacity-80 hover:opacity-100">Privacy Policy</a>
          </nav>
        </div>
        <p className="mt-8 text-sm opacity-70">
          © {year} Sabrina Myers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
