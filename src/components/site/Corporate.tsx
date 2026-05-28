import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ChevronRight } from "lucide-react";

const corporateItems = [
  "Postal Ballot",
  "Board of Directors",
  "Key Managerial Person",
  "Policies",
  "Financial Results",
  "Annual Reports",
];

const openOfferItems = ["Public Announcement", "Detailed Public Statement", "Draft Letter of Offer"];

export function Corporate() {
  const [tab, setTab] = useState<"corporate" | "open">("corporate");
  const items = tab === "corporate" ? corporateItems : openOfferItems;

  return (
    <section
      id="corporate"
      className="scroll-mt-24 py-24 bg-slate-50"
      aria-label="Corporate disclosures and open offers"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <span className="h-px w-8 bg-slate-300" /> Transparency
            <span className="h-px w-8 bg-slate-300" />
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Corporate Disclosures & Open Offers
          </h2>
          <p className="mt-4 text-slate-600 font-light max-w-2xl mx-auto">
            Access governance documents, financial reports and open offer materials in one place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden"
        >
          {/* Tabs */}
          <div role="tablist" aria-label="Disclosure categories" className="flex border-b border-slate-200">
            {[
              { id: "corporate", label: "Corporate" },
              { id: "open", label: "Open Offer" },
            ].map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id as "corporate" | "open")}
                className={`relative flex-1 px-6 py-4 text-sm font-semibold transition-colors ${
                  tab === t.id ? "text-slate-900" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {t.label}
                {tab === t.id && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"
                  />
                )}
              </button>
            ))}
          </div>

          {/* List */}
          <AnimatePresence mode="wait">
            <motion.ul
              key={tab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="divide-y divide-slate-100"
            >
              {items.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="group flex items-center justify-between px-6 py-4 hover:bg-slate-100 transition-colors"
                  >
                    <span className="flex items-center gap-3 text-slate-800 font-medium">
                      <FileText className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                      {label}
                    </span>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
