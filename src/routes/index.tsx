import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Corporate } from "@/components/site/Corporate";
import { Links } from "@/components/site/Links";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Corporate /> */}
        <Links />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
