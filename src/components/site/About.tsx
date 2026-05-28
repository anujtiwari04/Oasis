import { motion } from "framer-motion";
import { TrendingUp, Briefcase, ShieldCheck, Wallet, Building2 } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Mutual Fund Distribution",
    desc: "Curated mutual fund options aligned with your financial goals.",
  },
  {
    icon: Briefcase,
    title: "I.P.O. Activities",
    desc: "Participate in primary market opportunities with expert guidance.",
  },
  {
    icon: ShieldCheck,
    title: "Life Insurance",
    desc: "Protect what matters most with trusted insurance solutions.",
  },
  {
    icon: Wallet,
    title: "Retail Loans",
    desc: "Tailored credit solutions for individuals and businesses.",
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

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 bg-white" aria-label="About and services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <span className="h-px w-8 bg-slate-300" /> About Us
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              About Oasis Securities Limited
            </h2>
            <p className="mt-6 text-lg font-light text-slate-600 leading-relaxed">
              Oasis Securities Limited is a publicly listed Non-Banking Financial Company with nearly
              four decades of presence in India's financial services landscape.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Incorporated on November 6, 1986 as Abhishek India Ltd.",
                "Renamed to Oasis Securities Limited on February 1, 1995.",
                "Promoter: Shri Indra Kumar Bagri.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm flex items-start gap-3">
              <Building2 className="h-5 w-5 text-slate-900 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Public Limited Company &nbsp;|&nbsp; NBFC Reg No: 13.0069
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Regulated and registered under applicable Indian financial regulations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - services */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={item}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-11 w-11 rounded-lg bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-900 transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
