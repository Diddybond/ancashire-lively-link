import { Info } from "lucide-react";

export function ScopeNotice() {
  return (
    <section aria-labelledby="scope-heading" className="py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-foreground">
              <Info className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="scope-heading"
                className="font-serif text-xl font-semibold text-foreground sm:text-2xl"
              >
                Important Information Regarding Our Services
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">
                To ensure the highest quality of lifestyle support and companionship, Sabrina
                operates strictly as a non-medical companion and lifestyle coordinator. We are not
                a regulated personal care agency. Therefore, we cannot provide hands-on personal
                care (such as assistance with bathing, toileting, or dressing), manual
                lifting/hoisting, or the administration of medication. If your loved one's needs
                cross the threshold into regulated personal or medical care, we are happy to
                recommend contacting a CQC-registered care provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
