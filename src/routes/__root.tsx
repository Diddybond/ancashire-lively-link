import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Private Companionship Care & Lifestyle Support in Lancashire | Sabrina Myers" },
      {
        name: "description",
        content:
          "Independent, non-agency companionship care and lifestyle support for older adults at home or in a care home. Across Blackburn with Darwen, Ribble Valley, Preston, Burnley and wider Lancashire. £35/hour. Free first chat with Sabrina.",
      },
      { property: "og:title", content: "Private Companionship Care & Lifestyle Support in Lancashire | Sabrina Myers" },
      {
        property: "og:description",
        content:
          "Independent, non-agency companionship care and lifestyle support for older adults — at home or in a care home — across Lancashire. £35/hour. Free first chat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Private Companionship Care & Lifestyle Support in Lancashire | Sabrina Myers" },
      { name: "twitter:description", content: "Independent, non-agency companionship care and lifestyle support for older adults — at home or in a care home — across Lancashire." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/da9c1608-c7ab-487c-b90d-6c9b972601e3/id-preview-3a1e778d--df643023-88c3-43bf-b06c-71165a6ad7de.lovable.app-1776556858156.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/da9c1608-c7ab-487c-b90d-6c9b972601e3/id-preview-3a1e778d--df643023-88c3-43bf-b06c-71165a6ad7de.lovable.app-1776556858156.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "HomeAndConstructionBusiness",
              "@id": "https://ancashire-lively-link.lovable.app/#business",
              name: "Sabrina Myers Companionship & Lifestyle Support",
              description:
                "Independent, non-agency companionship care and lifestyle support for older adults across Lancashire.",
              telephone: "+44-7515-975760",
              email: "hello@sabrinamyers.co.uk",
              priceRange: "££",
              url: "https://ancashire-lively-link.lovable.app/",
              areaServed: [
                "Blackburn with Darwen", "Darwen", "Tockholes", "Hoddlesden",
                "Ribble Valley", "Clitheroe", "Whalley", "Longridge",
                "Hyndburn", "Accrington", "Oswaldtwistle", "Burnley",
                "Preston", "South Ribble", "Bamber Bridge", "Leyland",
                "Chorley", "Rossendale", "Rawtenstall", "Bacup", "Lancashire",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  opens: "08:00",
                  closes: "20:00",
                },
              ],
              founder: { "@id": "https://ancashire-lively-link.lovable.app/#sabrina" },
              makesOffer: [
                { "@type": "Offer", name: "Private Companionship at Home", price: "35", priceCurrency: "GBP", priceSpecification: { "@type": "UnitPriceSpecification", price: "35", priceCurrency: "GBP", unitCode: "HUR" } },
                { "@type": "Offer", name: "Private Companion Visits in a Care Home", price: "35", priceCurrency: "GBP", priceSpecification: { "@type": "UnitPriceSpecification", price: "35", priceCurrency: "GBP", unitCode: "HUR" } },
                { "@type": "Offer", name: "Enrichment Days Out", price: "140", priceCurrency: "GBP", description: "Planned 4-hour outing." },
                { "@type": "Offer", name: "Special Occasions & Evenings", price: "40", priceCurrency: "GBP", priceSpecification: { "@type": "UnitPriceSpecification", price: "40", priceCurrency: "GBP", unitCode: "HUR" } },
                { "@type": "Offer", name: "Care Home Lifestyle Programmes", description: "Day rates by arrangement." },
              ],
            },
            {
              "@type": "Person",
              "@id": "https://ancashire-lively-link.lovable.app/#sabrina",
              name: "Sabrina Myers",
              jobTitle: "Lifestyle Coordinator & Independent Companion",
              telephone: "+44-7515-975760",
              email: "hello@sabrinamyers.co.uk",
              worksFor: { "@id": "https://ancashire-lively-link.lovable.app/#business" },
              areaServed: "Lancashire, United Kingdom",
            },
            {
              "@type": "WebSite",
              "@id": "https://ancashire-lively-link.lovable.app/#website",
              url: "https://ancashire-lively-link.lovable.app/",
              name: "Sabrina Myers — Private Companionship Care & Lifestyle Support",
              publisher: { "@id": "https://ancashire-lively-link.lovable.app/#business" },
            },
            {
              "@type": "Service",
              name: "Private Companionship at Home",
              serviceType: "Companionship care",
              provider: { "@id": "https://ancashire-lively-link.lovable.app/#business" },
              areaServed: "Lancashire",
              offers: { "@type": "Offer", price: "35", priceCurrency: "GBP", priceSpecification: { "@type": "UnitPriceSpecification", price: "35", priceCurrency: "GBP", unitCode: "HUR" } },
              description: "Non-agency, unhurried companionship care from one consistent professional in your loved one's own home. Weekly or fortnightly visits, two-hour minimum.",
            },
            {
              "@type": "Service",
              name: "Private Companion Visits in a Care Home",
              serviceType: "Companionship care",
              provider: { "@id": "https://ancashire-lively-link.lovable.app/#business" },
              areaServed: "Lancashire",
              offers: { "@type": "Offer", price: "35", priceCurrency: "GBP", priceSpecification: { "@type": "UnitPriceSpecification", price: "35", priceCurrency: "GBP", unitCode: "HUR" } },
              description: "Privately-hired one-to-one companionship visits to a relative living in a care home — paid for by the family, in addition to the home's own staff and group activities. A familiar, regular face for residents whose day might otherwise lack one-to-one attention.",
            },
            {
              "@type": "Service",
              name: "Enrichment Days Out",
              serviceType: "Companionship care outings",
              provider: { "@id": "https://ancashire-lively-link.lovable.app/#business" },
              areaServed: "Lancashire",
              offers: { "@type": "Offer", price: "140", priceCurrency: "GBP", description: "Planned 4-hour outing." },
              description: "Pre-planned premium outings for older adults — gardens, galleries, tearooms, theatre matinees, favourite places. Available for older adults at home, and (subject to the care home's policy) for residents who can leave the home for the day.",
            },
            {
              "@type": "Service",
              name: "Special Occasions & Evenings",
              serviceType: "Companion chaperone",
              provider: { "@id": "https://ancashire-lively-link.lovable.app/#business" },
              areaServed: "Lancashire",
              offers: { "@type": "Offer", price: "40", priceCurrency: "GBP", priceSpecification: { "@type": "UnitPriceSpecification", price: "40", priceCurrency: "GBP", unitCode: "HUR" } },
              description: "Companion chaperone for milestone birthdays, theatre nights, weddings and family events.",
            },
            {
              "@type": "Service",
              name: "Care Home Lifestyle Programmes",
              serviceType: "Lifestyle coordination",
              provider: { "@id": "https://ancashire-lively-link.lovable.app/#business" },
              areaServed: "Lancashire",
              description: "Freelance lifestyle coordination for care homes — bespoke activity programmes, event facilitation, and cover for activity coordinator absences. Day rates by arrangement.",
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "What is companionship care?", acceptedAnswer: { "@type": "Answer", text: "Companionship care is a non-medical home support service for older adults who are largely independent but would benefit from regular company, engagement, and gentle help with daily life. It focuses on emotional and social wellbeing rather than personal or medical care — conversation, hobbies, outings, light home help, accompanying to appointments, and meaningful time together. It can be provided in someone's own home or, increasingly, inside the care home where their loved one lives." } },
                { "@type": "Question", name: "What's the difference between companionship care and personal care?", acceptedAnswer: { "@type": "Answer", text: "Personal care is a regulated activity covering tasks like bathing, dressing, toileting and administering medication — provided by CQC-registered agencies. Companionship care is non-medical and focuses on engagement, social connection and quality of life. As an independent companion, I provide companionship care only. Where needs cross into personal care, I'm always happy to recommend a trusted CQC-registered provider." } },
                { "@type": "Question", name: "How much does companionship care cost in the UK?", acceptedAnswer: { "@type": "Answer", text: "Hourly rates for companionship care typically range from £20 to £35 per hour in the UK. As an independent, non-agency provider, my rate is £35 per hour with a two-hour minimum visit. Families pay only for my time and local travel — there are no agency markups, no admin fees, and no hidden extras." } },
                { "@type": "Question", name: "How is an independent companion carer different from a care agency?", acceptedAnswer: { "@type": "Answer", text: "With a large agency, families often face a rotating roster of different staff on tight 15-minute schedules. As an independent companion, I'm one consistent professional — every visit, without exception. No corporate red tape, no rotating staff, no rushed visits. Just a genuine relationship built over time." } },
                { "@type": "Question", name: "Do I have to commit to a long-term contract?", acceptedAnswer: { "@type": "Answer", text: "No. There are no contracts and no minimum commitments beyond a two-hour minimum visit length. Most families book regular weekly or fortnightly visits because consistency is part of the value, but you're free to stop or change at any time." } },
                { "@type": "Question", name: "Can I hire a private companion to visit my parent in a care home?", acceptedAnswer: { "@type": "Answer", text: "Yes. Many families hire a private companion to visit a parent or relative inside their care home, on top of the care home's own staff and group activities. This is particularly valuable for residents who are socially withdrawn, have recently moved into residential care, or simply aren't getting enough one-to-one time. Most care homes welcome private visitors who are properly DBS-checked and insured. I'm always happy to introduce myself to the home's manager before the first visit." } },
                { "@type": "Question", name: "Can you take my elderly parent out for the day?", acceptedAnswer: { "@type": "Answer", text: "Yes. Days out are one of the things families value most. I plan outings around the older person's interests — gardens, galleries, tearooms, favourite walks, theatre matinees, the seaside. The first 15 miles of travel from Blackburn are included free; further mileage is 45p per mile. My Enrichment Days package is a flat £140 for a planned 4-hour outing. For relatives in residential care, days out are arranged in agreement with the care home." } },
                { "@type": "Question", name: "Who pays for tickets, meals, or activities during an outing?", acceptedAnswer: { "@type": "Answer", text: "The client covers out-of-pocket costs during outings — tickets, café bills, entry fees — for both themselves and for me. These are agreed in advance." } },
                { "@type": "Question", name: "Are you insured and DBS checked?", acceptedAnswer: { "@type": "Answer", text: "Yes. I hold an enhanced DBS check, full public liability insurance, and professional indemnity cover. Documentation available on request. Documentation can be shared directly with a care home manager before a first visit if needed." } },
                { "@type": "Question", name: "What areas of Lancashire do you cover?", acceptedAnswer: { "@type": "Answer", text: "Blackburn with Darwen, the Ribble Valley (Clitheroe, Whalley, Longridge), Hyndburn (Accrington, Oswaldtwistle), Burnley, Preston, South Ribble, Chorley and Rossendale. The first 15 miles of travel from Blackburn are included free in every visit; further afield is 45p per mile." } },
                { "@type": "Question", name: "Do you work with local care homes?", acceptedAnswer: { "@type": "Answer", text: "Yes — but it's a separate, B2B service. As a qualified lifestyle coordinator, I take freelance contracts with care home managers to deliver bespoke activity programmes, facilitate events, and cover for activity coordinator absences. This is different from my private family service, where I'm hired by the family to visit their loved one one-to-one. Care home managers can contact me directly to discuss day rates." } },
                { "@type": "Question", name: "How quickly can companionship visits start?", acceptedAnswer: { "@type": "Answer", text: "Most new clients can have an initial free chat within 48 hours, a home visit within a week, and regular visits beginning the week after. Special occasions can be arranged at shorter notice. For care home visits, the first session is usually arranged in agreement with the home's manager." } },
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}
