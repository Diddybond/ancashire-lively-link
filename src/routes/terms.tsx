import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/terms")({
  component: Terms,
});

function Terms() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-32 sm:px-8 sm:py-40 lg:px-12">
        <Link
          to="/"
          className="mb-10 inline-block text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)] hover:text-[var(--bronze)]"
        >
          ← Back to home
        </Link>

        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
          Legal
        </span>
        <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-sm text-foreground/60">Last updated: May 2026</p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-foreground/80 sm:text-lg">

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">About these terms</h2>
            <p>
              These terms govern the provision of services by Sabrina Myers, trading as Sabrina Myers
              Companionship &amp; Lifestyle Support, based in Blackburn with Darwen, Lancashire
              ("Sabrina", "we", "us"). By booking a service, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">Services</h2>
            <p>Sabrina offers the following services:</p>
            <ul className="mt-3 space-y-2 pl-5 list-disc">
              <li><strong>Companionship at Home</strong> — £35 per hour, two-hour minimum</li>
              <li><strong>Companion Visits in a Care Home</strong> — £35 per hour, two-hour minimum</li>
              <li><strong>Enrichment Days Out</strong> — £140 flat rate for a planned 4-hour outing</li>
              <li><strong>Special Occasion Companionship</strong> — £40 per hour, two-hour minimum</li>
              <li><strong>Care Home Lifestyle Programmes</strong> — day rates by arrangement (B2B)</li>
            </ul>
            <p className="mt-3">
              All services are non-medical companionship and lifestyle support. Sabrina does not provide
              personal care (bathing, dressing, medication administration) or medical services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">Travel</h2>
            <p>
              The first 15 miles of travel from Blackburn with Darwen are included free in every visit.
              Travel beyond 15 miles is charged at 45p per mile. Mileage is calculated from Sabrina's
              base in Blackburn with Darwen to the client's location.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">Activity costs during outings</h2>
            <p>
              During Enrichment Days and other outings, the client covers out-of-pocket costs for both
              the client and Sabrina — including entry fees, café bills, tickets, and meals. These costs
              are agreed in advance of the outing.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">Booking and payment</h2>
            <p>
              Visits are arranged by appointment. Payment is due within 7 days of the visit unless a
              separate arrangement has been agreed in writing. We accept bank transfer and cash.
              Invoices will be provided on request.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">Cancellation</h2>
            <p>
              We ask for at least <strong>48 hours' notice</strong> to cancel or reschedule a visit.
              Cancellations made with less than 48 hours' notice may be charged at 50% of the visit fee.
              Cancellations made with less than 24 hours' notice may be charged at the full visit fee.
              We will always try to be reasonable where circumstances are outside your control.
            </p>
            <p className="mt-3">
              In the unlikely event that Sabrina needs to cancel a visit, we will give as much notice as
              possible and reschedule at the earliest opportunity with no charge.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">Commitments and contracts</h2>
            <p>
              There are no long-term contracts and no minimum number of visits required beyond the
              two-hour minimum per visit. You may stop or change arrangements at any time with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">Insurance and checks</h2>
            <p>
              Sabrina holds an enhanced DBS check, public liability insurance, and professional indemnity
              cover. Documentation is available on request.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">Limitation of liability</h2>
            <p>
              Sabrina's liability in connection with any service is limited to the fees paid for that
              service. Nothing in these terms limits liability for death, personal injury caused by
              negligence, or any other liability that cannot be excluded under English law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">Governing law</h2>
            <p>
              These terms are governed by the law of England and Wales. Any disputes will be subject
              to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">Contact</h2>
            <p>
              For any questions about these terms, contact:{" "}
              <a href="mailto:hello@sabrinamyers.co.uk" className="text-[var(--primary)] underline-offset-4 hover:underline">
                hello@sabrinamyers.co.uk
              </a>{" "}
              or call <a href="tel:07515975760" className="text-[var(--primary)] underline-offset-4 hover:underline">07515 975 760</a>.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
