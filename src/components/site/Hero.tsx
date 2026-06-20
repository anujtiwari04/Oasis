import { motion } from "framer-motion";
import { ArrowRight, Landmark, ShieldCheck, TrendingUp } from "lucide-react";
import oasisLogoWithBg from "@/assets/Oasis Logo with bg.png";

const stats = [
  { v: "1986", l: "Incorporated" },
  { v: "NBFC", l: "Registered" },
  { v: "4+", l: "Services" },
  { v: "PAN India", l: "Reach" },
];

const financeBars = [
  { h: "h-16", delay: 0 },
  { h: "h-24", delay: 0.12 },
  { h: "h-20", delay: 0.24 },
  { h: "h-32", delay: 0.36 },
  { h: "h-28", delay: 0.48 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-24 bg-brand-surface pt-16 pb-20 sm:pt-24 sm:pb-28"
      aria-label="Hero"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(27, 67, 50, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(27, 67, 50, 0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16"
        >
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center gap-2.5 border-l-2 border-brand-gold bg-white px-4 py-2.5 text-xs font-medium text-brand-text/70 shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-green" />
              Registered NBFC &middot; Reg No: 13.0069
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-brand-charcoal sm:text-5xl lg:mx-0 lg:text-7xl">
              Empowering Financial{" "}
              <span className="font-serif italic text-brand-green">Growth.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg font-normal leading-relaxed text-brand-text/70 sm:text-xl lg:mx-0">
              Oasis Securities Limited, A registered Non-Banking Financial Company (NBFC) committed to
              delivering trusted, institutional-grade financial services.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#about"
                className="group inline-flex items-center gap-2 rounded-[4px] bg-brand-green px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-light"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[4px] border border-brand-green/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-green/5"
              >
                Contact Us
              </a>
            </div>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-[440px] lg:mx-0"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              aria-hidden="true"
              className="absolute -left-6 top-8 hidden h-28 w-28 border border-brand-gold/30 md:block"
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative overflow-hidden rounded-[6px] border border-brand-green/10 bg-white shadow-xl shadow-brand-green/10">
              <div className="flex items-center justify-between border-b border-brand-green/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={oasisLogoWithBg}
                    alt=""
                    aria-hidden="true"
                    className="h-10 w-10 rounded-[4px] object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-brand-charcoal">Oasis Securities</p>
                    <p className="text-xs font-medium text-brand-text/50">Institutional finance view</p>
                  </div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-brand-green/10 text-brand-green">
                  <Landmark className="h-4 w-4" />
                </div>
              </div>

              <div className="grid grid-cols-[1fr_auto] gap-6 px-5 py-6">
                <div>
                  {/* <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-brand-charcoal">13.0069</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">RBI</span>
                  </div> */}
                  <p className="mt-2 text-sm leading-6 text-brand-text/60">
                    Registered non-deposit taking NBFC with a disciplined lending and investment focus.
                  </p>
                </div>

                <motion.div
                  className="flex h-28 items-end gap-2 border-l border-brand-green/10 pl-5"
                  initial="hidden"
                  animate="visible"
                >
                  {financeBars.map((bar) => (
                    <motion.span
                      key={`${bar.h}-${bar.delay}`}
                      className={`w-5 rounded-t-[3px] bg-brand-green ${bar.h}`}
                      initial={{ scaleY: 0.35, opacity: 0.45 }}
                      animate={{ scaleY: [0.45, 1, 0.72, 1], opacity: [0.45, 1, 0.7, 1] }}
                      transition={{
                        duration: 3.2,
                        delay: bar.delay,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      style={{ transformOrigin: "bottom" }}
                    />
                  ))}
                </motion.div>
              </div>

              <div className="border-t border-brand-green/10 bg-brand-surface-alt px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-green">
                    <TrendingUp className="h-4 w-4" />
                    Sustainable growth focus
                  </div>
                  <motion.div
                    className="h-1.5 w-28 overflow-hidden rounded-full bg-brand-green/10"
                    aria-hidden="true"
                  >
                    <motion.span
                      className="block h-full rounded-full bg-brand-gold"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -right-4 -bottom-5 hidden border-l-2 border-brand-gold bg-brand-green px-4 py-3 text-white shadow-lg sm:block"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">Founded</p>
              <p className="mt-1 text-2xl font-bold">1986</p>
            </motion.div>
          </motion.div>

          <dl className="hidden max-w-3xl items-center justify-center sm:col-span-2 sm:mx-auto sm:mt-8 sm:flex lg:mt-4">
            {stats.map((s, i) => (
              <div
                key={s.l}
                className={`flex flex-col items-center px-10 py-4 lg:px-12 ${i < stats.length - 1 ? "border-r border-brand-charcoal/10" : ""}`}
              >
                <dd className="text-2xl font-bold text-brand-charcoal sm:text-3xl">{s.v}</dd>
                <dt className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-brand-text/45">
                  {s.l}
                </dt>
              </div>
            ))}
          </dl>

          <dl className="mx-auto grid max-w-sm grid-cols-2 gap-px overflow-hidden rounded-[4px] bg-brand-charcoal/5 sm:hidden">
            {stats.map((s) => (
              <div key={s.l} className="flex flex-col items-center bg-brand-surface p-5">
                <dd className="text-2xl font-bold text-brand-charcoal">{s.v}</dd>
                <dt className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-brand-text/45">
                  {s.l}
                </dt>
              </div>
            ))}
          </dl>

          <div className="mx-auto h-px w-16 bg-brand-gold sm:col-span-2" />
        </motion.div>
      </div>
    </section>
  );
}
