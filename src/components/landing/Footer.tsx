export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-lg font-semibold text-foreground">Sabrina Myers</p>
            <p className="mt-1 text-sm text-foreground/70">
              Private elderly companionship and lifestyle coordination in Blackburn, Darwen, and
              Lancashire.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#about" className="text-foreground/70 hover:text-foreground">About</a>
            <a href="#services" className="text-foreground/70 hover:text-foreground">Services</a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground">Contact</a>
            <a href="#privacy" className="text-foreground/70 hover:text-foreground">Privacy Policy</a>
          </nav>
        </div>
        <p className="mt-8 text-sm text-foreground/60">
          © {year} Sabrina Myers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
