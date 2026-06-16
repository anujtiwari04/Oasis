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
    <section id="contact" className="scroll-mt-24 py-24 bg-brand-surface" aria-label="Contact information">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold">
            <span className="h-px w-8 bg-brand-gold/40" /> Get in Touch
            <span className="h-px w-8 bg-brand-gold/40" />
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal">
            Contact Information
          </h2>
          <p className="mt-4 text-brand-text/60 font-normal max-w-2xl mx-auto">
            Reach out to our team. We're here to help with your financial needs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 border border-brand-charcoal/8 rounded-[4px] overflow-hidden"
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={item}
              className={`p-8 bg-white hover:bg-brand-green/[0.02] transition-colors ${i < cards.length ? "border-b md:border-b-0 md:border-r border-brand-charcoal/8" : ""}`}
            >
              <div className="h-11 w-11 rounded-full border-2 border-brand-green/20 text-brand-green flex items-center justify-center">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-charcoal">{c.title}</h3>
              <address className="mt-3 not-italic text-sm text-brand-text/70 leading-relaxed space-y-0.5">
                {c.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
            </motion.div>
          ))}

          {/* Contact details card */}
          <motion.div
            variants={item}
            className="p-8 bg-white hover:bg-brand-green/[0.02] transition-colors"
          >
            <div className="h-11 w-11 rounded-full border-2 border-brand-green/20 text-brand-green flex items-center justify-center">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-brand-charcoal">Contact Details</h3>
            <div className="mt-3 space-y-3 text-sm">
              <a
                href="tel:9257056969"
                className="flex items-center gap-2 text-brand-text/70 hover:text-brand-green transition-colors"
              >
                <Phone className="h-4 w-4 text-brand-green/40" />
                9257056969
              </a>
              {/* <p className="flex items-center gap-2 text-brand-text/70">
                <User className="h-4 w-4 text-brand-green/40" />
                Mr. Manish Nathawat
              </p> */}
              <a
                href="mailto:admin@oasiscaps.com"
                className="flex items-center gap-2 text-brand-text/70 hover:text-brand-green transition-colors break-all"
              >
                <Mail className="h-4 w-4 text-brand-green/40 shrink-0" />
                admin@oasiscaps.com
              </a>
              <a
                href="mailto:sodhanioasis@gmail.com"
                className="flex items-center gap-2 text-brand-text/70 hover:text-brand-green transition-colors break-all"
              >
                <Mail className="h-4 w-4 text-brand-green/40 shrink-0" />
                sodhanioasis@gmail.com
              </a>
              <a
                href="mailto:cssodhanioasis@gmail.com"
                className="flex items-center gap-2 text-brand-text/70 hover:text-brand-green transition-colors break-all"
              >
                <Mail className="h-4 w-4 text-brand-green/40 shrink-0" />
                cssodhanioasis@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
