import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you! Sabrina will be in touch within one working day.");
    }, 600);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 lg:py-28" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/60">
            Contact
          </p>
          <h2 id="contact-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Let’s arrange your free consultation.
          </h2>
          <p className="mt-4 text-foreground/75">
            Tell us a little about what you’re looking for and we’ll be in touch within one working
            day.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required className="mt-2" placeholder="Your full name" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" required className="mt-2" placeholder="07…" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required className="mt-2" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="location">Location (Town / Postcode)</Label>
                <Input id="location" name="location" required className="mt-2" placeholder="e.g. Darwen, BB3" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="service">Service needed</Label>
                <Select name="service">
                  <SelectTrigger id="service" className="mt-2">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="companionship">Companionship</SelectItem>
                    <SelectItem value="outings">Outings</SelectItem>
                    <SelectItem value="special-events">Special Events</SelectItem>
                    <SelectItem value="care-home-support">Care Home Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" size="lg" className="mt-7 w-full font-semibold sm:w-auto" disabled={submitting}>
              {submitting ? "Sending…" : "Send Request"}
            </Button>
          </form>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground">Talk to Sabrina directly</h3>
              <p className="mt-2 text-foreground/75">
                Prefer a chat over a form? Get in touch any of these ways.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                    <Phone className="h-4 w-4 text-foreground" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground/60">Phone</p>
                    <a href="tel:07515975760" className="text-foreground hover:underline">
                      07515 975 760
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                    <Mail className="h-4 w-4 text-foreground" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground/60">Email</p>
                    <a href="mailto:hello@sabrinamyers.co.uk" className="text-foreground hover:underline break-all">
                      hello@sabrinamyers.co.uk
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                    <MapPin className="h-4 w-4 text-foreground" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground/60">Area</p>
                    <p className="text-foreground">Blackburn with Darwen &amp; Lancashire</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                    <Clock className="h-4 w-4 text-foreground" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground/60">Hours</p>
                    <p className="text-foreground">Mon–Sat, flexible by arrangement</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
