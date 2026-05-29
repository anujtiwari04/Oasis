import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Subtle geometric background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.06),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-slate-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 shadow-sm mb-6"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-slate-900" />
          Registered NBFC · Reg No: 13.0069
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.05]"
        >
          Empowering Financial{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Growth.</span>
            <span className="absolute inset-x-0 bottom-1 h-3 bg-slate-900/10 -z-0 rounded" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl font-light text-slate-600 max-w-2xl mx-auto"
        >
          Oasis Securities Limited, A registered Non-Banking Financial Company (NBFC) committed to
          delivering trusted, institutional-grade financial services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#about"
            className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition-colors"
          >
            Explore Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            Contact Us
          </motion.a>
        </motion.div>

        {/* Stats strip */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 max-w-4xl mx-auto"
        >
          {[
            { v: "1986", l: "Incorporated" },
            { v: "NBFC", l: "Registered" },
            { v: "4+", l: "Services" },
            { v: "PAN India", l: "Reach" },
          ].map((s) => (
            <div key={s.l} className="bg-white p-6">
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">{s.l}</dt>
              <dd className="mt-1 text-2xl font-extrabold text-slate-900">{s.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
