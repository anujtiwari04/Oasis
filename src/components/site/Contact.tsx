import { motion } from "framer-motion";
import { MapPin, Phone, Mail, User } from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "Registered Office",
    lines: ["A-112, 1st Floor, Lodha Supremus,", "MIDC, Andheri East,", "Mumbai – 400093"],
  },
  {
    icon: MapPin,
    title: "Branch Office",
    lines: [
      "2nd Floor, C 373",
      "Behind Amar Jain Hospital,",
      "Block C, Vaishali Nagar,",
      "Jaipur – 302021",
    ],
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

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 bg-slate-50" aria-label="Contact information">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <span className="h-px w-8 bg-slate-300" /> Get in Touch
            <span className="h-px w-8 bg-slate-300" />
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Contact Information
          </h2>
          <p className="mt-4 text-slate-600 font-light max-w-2xl mx-auto">
            Reach out to our team. We're here to help with your financial needs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={item}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-11 w-11 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{c.title}</h3>
              <address className="mt-3 not-italic text-sm text-slate-600 leading-relaxed space-y-0.5">
                {c.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
            </motion.div>
          ))}

          {/* Contact details card */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02, y: -4 }}
            className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-11 w-11 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900">Contact Details</h3>
            <div className="mt-3 space-y-3 text-sm">
              <a
                href="tel:9257056969"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
              >
                <Phone className="h-4 w-4 text-slate-400" />
                9257056969
              </a>
              {/* <p className="flex items-center gap-2 text-slate-700">
                <User className="h-4 w-4 text-slate-400" />
                Mr. Manish Nathawat
              </p> */}
              <a
                href="mailto:admin@oasiscaps.com"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors break-all"
              >
                <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                admin@oasiscaps.com
              </a>
              <a
                href="mailto:sodhanioasis@gmail.com"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors break-all"
              >
                <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                sodhanioasis@gmail.com
              </a>
              <a
                href="mailto:cssodhanioasis@gmail.com"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors break-all"
              >
                <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                cssodhanioasis@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
