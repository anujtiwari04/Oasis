import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { Corporate } from "@/components/site/Corporate";
import { Links } from "@/components/site/Links";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-brand-surface text-brand-charcoal antialiased">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        {/* <Corporate /> */}
        {/* <Links /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
