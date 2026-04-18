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
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const heading = useScrollReveal<HTMLHeadingElement>();
  const form = useScrollReveal<HTMLFormElement>();
  const aside = useScrollReveal<HTMLElement>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you. Sabrina will be in touch within one working day.");
    }, 600);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-32 lg:py-48"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-4 block text-[10px] font-medium uppercase tracking-eyebrow text-[var(--bronze)]">
            Enquiry · By Private Appointment
          </span>
          <h2
            ref={heading}
            id="contact-heading"
            className="reveal-up font-serif text-5xl font-light leading-[1.05] tracking-tight text-foreground sm:text-7xl"
          >
            Begin a <span className="italic">conversation</span>.
          </h2>
          <p className="reveal-up delay-1 mt-6 text-lg font-light text-foreground/75">
            Tell us a little about what you are looking for. A reply within one working day,
            without exception.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-y-12 gap-x-12">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="reveal-up col-span-12 lg:col-span-7"
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <FieldRow label="Name" htmlFor="name" full>
                <Input id="name" name="name" required placeholder="Your full name" />
              </FieldRow>
              <FieldRow label="Phone" htmlFor="phone">
                <Input id="phone" name="phone" type="tel" required placeholder="07…" />
              </FieldRow>
              <FieldRow label="Email" htmlFor="email">
                <Input id="email" name="email" type="email" required placeholder="you@example.com" />
              </FieldRow>
              <FieldRow label="Location" htmlFor="location" full>
                <Input id="location" name="location" required placeholder="e.g. Darwen, BB3" />
              </FieldRow>
              <FieldRow label="Service of Interest" htmlFor="service" full>
                <Select name="service">
                  <SelectTrigger id="service" className="rounded-none border-0 border-b border-foreground/25 bg-transparent px-0 shadow-none focus:ring-0">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="companionship">Active Companionship</SelectItem>
                    <SelectItem value="outings">Out & About</SelectItem>
                    <SelectItem value="special-events">Special Occasions</SelectItem>
                    <SelectItem value="care-home-support">Care Home Support</SelectItem>
                  </SelectContent>
                </Select>
              </FieldRow>
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-12 font-medium uppercase tracking-eyebrow"
              disabled={submitting}
            >
              {submitting ? "Sending…" : "Send Enquiry →"}
            </Button>
          </form>

          <aside ref={aside} className="reveal-up delay-1 col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="border-t border-foreground/15 pt-10">
              <h3 className="font-serif text-3xl font-light italic text-foreground">
                Or speak directly
              </h3>
              <p className="mt-3 text-base font-light text-foreground/70">
                A chat over the phone is often the gentlest place to begin.
              </p>

              <ul className="mt-10 space-y-8">
                <ContactItem icon={<Phone className="h-4 w-4" strokeWidth={1.25} />} label="Telephone">
                  <a href="tel:07515975760" className="hover:text-[var(--bronze)]">
                    07515 975 760
                  </a>
                </ContactItem>
                <ContactItem icon={<Mail className="h-4 w-4" strokeWidth={1.25} />} label="Email">
                  <a
                    href="mailto:hello@sabrinamyers.co.uk"
                    className="break-all hover:text-[var(--bronze)]"
                  >
                    hello@sabrinamyers.co.uk
                  </a>
                </ContactItem>
                <ContactItem icon={<MapPin className="h-4 w-4" strokeWidth={1.25} />} label="Area">
                  Blackburn with Darwen &amp; Lancashire
                </ContactItem>
                <ContactItem icon={<Clock className="h-4 w-4" strokeWidth={1.25} />} label="Hours">
                  Mon–Sat, by arrangement
                </ContactItem>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FieldRow({
  label,
  htmlFor,
  full,
  children,
}: {
  label: string;
  htmlFor: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <Label
        htmlFor={htmlFor}
        className="text-[10px] font-medium uppercase tracking-eyebrow text-foreground/55"
      >
        {label}
      </Label>
      <div className="mt-3 [&_input]:rounded-none [&_input]:border-0 [&_input]:border-b [&_input]:border-foreground/25 [&_input]:bg-transparent [&_input]:px-0 [&_input]:py-3 [&_input]:font-serif [&_input]:text-lg [&_input]:shadow-none [&_input]:focus-visible:border-[var(--bronze)] [&_input]:focus-visible:ring-0">
        {children}
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-1 text-[var(--bronze)]">{icon}</span>
      <div>
        <p className="text-[10px] font-medium uppercase tracking-eyebrow text-foreground/55">
          {label}
        </p>
        <p className="mt-1 font-serif text-lg text-foreground">{children}</p>
      </div>
    </li>
  );
}
