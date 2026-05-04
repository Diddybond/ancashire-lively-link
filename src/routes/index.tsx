import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { About } from "@/components/landing/About";
import { IndependentDifference } from "@/components/landing/IndependentDifference";
import { Services } from "@/components/landing/Services";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { InspirationMenu } from "@/components/landing/InspirationMenu";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { Journal } from "@/components/landing/Journal";
import { ServiceAreas } from "@/components/landing/ServiceAreas";
import { Contact } from "@/components/landing/Contact";
import { ScopeNotice } from "@/components/landing/ScopeNotice";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <IndependentDifference />
        <Services />
        <HowItWorks />
        <InspirationMenu />
        <Journal />
        <Pricing />
        <ServiceAreas />
        <FAQ />
        <ScopeNotice />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
