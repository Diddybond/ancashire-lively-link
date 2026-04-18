import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#journal", label: "Journal" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border/40 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-3 items-center px-6 sm:px-8 lg:px-12">
        <div aria-hidden className="hidden lg:block" />

        <a
          href="#top"
          className="col-start-1 col-end-3 font-serif text-xl italic tracking-tight text-foreground sm:text-2xl lg:col-start-2 lg:col-end-3 lg:text-center"
        >
          Sabrina Myers
        </a>

        <nav
          className="col-start-3 hidden items-center justify-end gap-10 text-[10px] font-medium uppercase tracking-eyebrow lg:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/80 transition-colors hover:text-[var(--bronze)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="col-start-3 flex justify-end lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-serif text-2xl italic">Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-[11px] font-medium uppercase tracking-eyebrow text-foreground hover:bg-accent/20"
                  >
                    {l.label}
                  </a>
                ))}
                <Button asChild className="mt-6 font-medium" onClick={() => setOpen(false)}>
                  <a href="#contact">Request a Consultation</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
