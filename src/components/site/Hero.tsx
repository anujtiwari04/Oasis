import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

const stats = [
  { v: "1986", l: "Incorporated" },
  { v: "NBFC", l: "Registered" },
  { v: "4+", l: "Services" },
  { v: "PAN India", l: "Reach" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 pt-20 pb-24 sm:pt-28 sm:pb-32 bg-brand-surface"
      aria-label="Hero"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* NBFC Registration Badge */}
          <div className="inline-flex items-center gap-2.5 border-l-2 border-brand-gold bg-white px-4 py-2.5 text-xs font-medium text-brand-text/70 mb-8">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-green" />
            Registered NBFC · Reg No: 13.0069
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-brand-charcoal max-w-4xl mx-auto leading-[1.08]">
            Empowering Financial{" "}
            <span className="font-serif italic text-brand-green">Growth.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl font-normal text-brand-text/70 max-w-2xl mx-auto leading-relaxed">
            Oasis Securities Limited, A registered Non-Banking Financial Company (NBFC) committed to
            delivering trusted, institutional-grade financial services.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-[4px] bg-brand-green px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[4px] border border-brand-green/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-brand-green hover:bg-brand-green/5 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Stats — Editorial horizontal strip */}
          <dl className="mt-20 hidden sm:flex items-center justify-center max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <div
                key={s.l}
                className={`flex flex-col items-center px-10 lg:px-12 py-4 ${i < stats.length - 1 ? "border-r border-brand-charcoal/10" : ""}`}
              >
                <dd className="text-2xl sm:text-3xl font-bold text-brand-charcoal">{s.v}</dd>
                <dt className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-brand-text/45">{s.l}</dt>
              </div>
            ))}
          </dl>

          {/* Stats — Mobile 2x2 grid */}
          <dl className="mt-16 grid grid-cols-2 gap-px bg-brand-charcoal/5 rounded-[4px] overflow-hidden sm:hidden max-w-sm mx-auto">
            {stats.map((s) => (
              <div key={s.l} className="bg-brand-surface p-5 flex flex-col items-center">
                <dd className="text-2xl font-bold text-brand-charcoal">{s.v}</dd>
                <dt className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-brand-text/45">{s.l}</dt>
              </div>
            ))}
          </dl>

          {/* Decorative gold rule */}
          <div className="mt-16 mx-auto w-16 h-px bg-brand-gold" />
        </motion.div>
      </div>
    </section>
  );
}
