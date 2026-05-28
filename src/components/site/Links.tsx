import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const links = [
  {
    title: "SEBI Official Website",
    desc: "Securities and Exchange Board of India — the regulator for the securities market.",
    href: "https://www.sebi.gov.in",
  },
  {
    title: "BSE Official Website",
    desc: "Bombay Stock Exchange — India's leading stock exchange for listed securities.",
    href: "https://www.bseindia.com",
  },
  {
    title: "SMART ODR Portal",
    desc: "Online Dispute Resolution platform for the Indian securities market.",
    href: "https://smartodr.in",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Links() {
  return (
    <section id="links" className="scroll-mt-24 py-24 bg-white" aria-label="Important links">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <span className="h-px w-8 bg-slate-300" /> Resources
            <span className="h-px w-8 bg-slate-300" />
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Important Links
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {links.map((l) => (
            <motion.a
              key={l.title}
              variants={item}
              whileHover={{ scale: 1.02, y: -6 }}
              whileTap={{ scale: 0.98 }}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="h-11 w-11 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors flex items-center justify-center">
                  <ExternalLink className="h-5 w-5 text-slate-900 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-slate-900 transition-colors">
                  Visit
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">{l.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{l.desc}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
