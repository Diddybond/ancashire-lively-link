import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});

function Privacy() {
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
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-foreground/60">Last updated: May 2026</p>

        <div className="prose-custom mt-12 space-y-10 text-base leading-relaxed text-foreground/80 sm:text-lg">

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">Who we are</h2>
            <p>
              This website is operated by Sabrina Myers, trading as Sabrina Myers Companionship &amp; Lifestyle Support,
              based in Blackburn with Darwen, Lancashire. Sabrina Myers is the data controller for any personal
              information collected through this website.
            </p>
            <p className="mt-3">
              For any privacy-related questions, contact: <a href="mailto:hello@sabrinamyers.co.uk" className="text-[var(--primary)] underline-offset-4 hover:underline">hello@sabrinamyers.co.uk</a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">What information we collect</h2>
            <p>When you use the contact form on this website, we collect:</p>
            <ul className="mt-3 space-y-2 pl-5 list-disc">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number (if provided)</li>
              <li>The content of your message</li>
            </ul>
            <p className="mt-3">
              We do not use cookies beyond those strictly necessary for the website to function,
              and we do not use tracking or advertising technologies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">How we use your information</h2>
            <p>We use the information you submit solely to:</p>
            <ul className="mt-3 space-y-2 pl-5 list-disc">
              <li>Respond to your enquiry</li>
              <li>Arrange an initial consultation if requested</li>
              <li>Communicate with you about services you have asked about</li>
            </ul>
            <p className="mt-3">
              We will never sell, rent, or share your personal information with third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">Legal basis for processing</h2>
            <p>
              Under UK GDPR, we process your personal information on the basis of <strong>legitimate interests</strong> —
              specifically, to respond to an enquiry you have initiated — and, where you have given it,
              your <strong>consent</strong>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">How long we keep your data</h2>
            <p>
              Enquiry information is kept for no longer than 12 months from the date of your last contact,
              unless you become a client, in which case we retain relevant records for the duration of the
              working relationship and for 6 years thereafter in line with standard UK legal requirements.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">Your rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="mt-3 space-y-2 pl-5 list-disc">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email <a href="mailto:hello@sabrinamyers.co.uk" className="text-[var(--primary)] underline-offset-4 hover:underline">hello@sabrinamyers.co.uk</a>.
              You also have the right to lodge a complaint with the{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] underline-offset-4 hover:underline">
                Information Commissioner's Office (ICO)
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">External links</h2>
            <p>
              This website may contain links to third-party websites. We are not responsible for the
              privacy practices of those sites and recommend you review their privacy policies separately.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl font-medium text-foreground">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The date at the top of this page will always
              reflect the most recent revision.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
