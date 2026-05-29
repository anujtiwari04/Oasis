import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X, Phone } from "lucide-react";
import oasisLogo from "@/assets/Oasis Logo.png";
import postalBallotNotice from "@/assets/postal-ballot-notice.pdf";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#corporate", label: "Corporate" },
  { href: "#links", label: "Links" },
  { href: "#contact", label: "Contact" },
];

const postalBallotItems = [
  { href: postalBallotNotice, label: "Notice", download: "postal-ballot-notice.pdf" },
  { href: "/scrutinizers-report", label: "Scrutinizer's Report" },
  { href: "#", label: "Voting Result and Scrutinizer Report" },
];

const corporateItems = [
  { href: "#", label: "Postal Ballot", children: postalBallotItems },
  { href: "#", label: "Composition of Committees" },
  { href: "#", label: "Board of Directors" },
  { href: "#", label: "Key Management Personnel" },
  { href: "#", label: "Compliance Officer" },
  { href: "#", label: "Policies" },
  { href: "#", label: "AGM Notices" },
  { href: "#", label: "Board Meetings Notices" },
  { href: "#", label: "Financial Results" },
  { href: "#", label: "Shareholding pattern" },
  { href: "#", label: "Share Transfer Agent (RTA)" },
  { href: "#", label: "Annual Reports" },
  { href: "#", label: "Book Closure" },
  { href: "#", label: "AGM Results" },
  { href: "#", label: "Circulars & Disclosures" },
  { href: "#", label: "Forms" },
  { href: "#", label: "Newspaper Publications" },
  { href: "#", label: "Outcome" },
  { href: "#", label: "Dlof" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeCorporateSubmenu, setActiveCorporateSubmenu] = useState<string | null>(null);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-slate-900 text-white text-sm py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <a href="tel:9257056969" className="flex items-center gap-2 hover:text-slate-300 transition-colors">
            <Phone className="h-3.5 w-3.5" />
            <span>Call Us: 9257056969</span>
          </a>
          <span className="text-slate-300 text-xs sm:text-sm">CIN: L51900MH1986PLC041499</span>
        </div>
      </div>

      {/* Sticky header */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
            <a href="#home" className="flex items-center gap-2" aria-label="Oasis Securities Limited home">
              <img src={oasisLogo} alt="Oasis Securities Limited" className="h-9 w-auto object-contain" />
              <span className="font-extrabold tracking-tight text-slate-900 text-sm sm:text-base">
                OASIS SECURITIES LTD
              </span>
            </a>

            <nav className="hidden md:flex items-center justify-center gap-8" aria-label="Primary">
              {navLinks.map((l) => (
                l.label === "Corporate" ? (
                  <div key={l.href} className="group relative py-5">
                    <a
                      href={l.href}
                      className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-slate-900 group-hover:after:w-full after:transition-all"
                    >
                      {l.label}
                    </a>

                    <div
                      className="invisible absolute left-0 top-full opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100"
                      onMouseLeave={() => setActiveCorporateSubmenu(null)}
                    >
                      <div className="relative w-72">
                        <ul
                          className="max-h-[500px] overflow-y-auto overflow-x-hidden bg-white text-slate-700 shadow-xl ring-1 ring-slate-200"
                          aria-label="Corporate menu"
                        >
                          {corporateItems.map((item) => (
                            <li
                              key={item.label}
                              className="border-b border-slate-100 last:border-b-0"
                              onMouseEnter={() => setActiveCorporateSubmenu(item.children ? item.label : null)}
                            >
                              <a
                                href={item.href}
                                className="flex min-h-11 items-center justify-between gap-3 px-4 py-3 text-sm font-semibold leading-snug hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900 focus:outline-none"
                              >
                                <span>{item.label}</span>

                                {item.children ? (
                                  <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                                ) : null}
                              </a>
                            </li>
                          ))}
                        </ul>

                        {activeCorporateSubmenu === "Postal Ballot" ? (
                          <ul className="absolute left-full top-0 z-10 w-72 bg-white text-slate-700 shadow-xl ring-1 ring-slate-200">
                            {postalBallotItems.map((child) => (
                              <li key={child.label} className="border-b border-slate-100 last:border-b-0">
                                <a
                                  href={child.href}
                                  download={child.download}
                                  className="block min-h-11 px-4 py-3 text-sm font-semibold leading-snug hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900 focus:outline-none"
                                >
                                  {child.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-slate-900 hover:after:w-full after:transition-all"
                  >
                    {l.label}
                  </a>
                )
              ))}
            </nav>

            <div className="hidden md:flex justify-end">
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
              >
                Get in Touch
              </a>
            </div>

            <button
              className="md:hidden col-start-3 justify-self-end inline-flex items-center justify-center p-2 text-slate-900"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-white shadow-xl md:hidden flex flex-col"
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <span className="font-extrabold text-slate-900">OASIS SECURITIES</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                  <X className="h-5 w-5 text-slate-900" />
                </button>
              </div>

              <nav className="flex flex-col p-4 gap-1" aria-label="Mobile primary">
                {navLinks.map((l) => (
                  l.label === "Corporate" ? (
                    <div key={l.href} className="rounded-lg border border-slate-200">
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-3 text-slate-900 font-semibold transition-colors hover:bg-slate-50"
                      >
                        {l.label}
                      </a>
                      <div className="border-t border-slate-200 bg-slate-50 py-1">
                        {corporateItems.map((item) => (
                          <div key={item.label}>
                            <a
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="block px-5 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900"
                            >
                              {item.label}
                            </a>
                            {item.children ? (
                              <div className="pb-1">
                                {item.children.map((child) => (
                                  <a
                                    key={child.label}
                                    href={child.href}
                                    download={child.download}
                                    onClick={() => setOpen(false)}
                                    className="block px-8 py-2 text-sm text-slate-600 hover:text-slate-900"
                                  >
                                    {child.label}
                                  </a>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="px-3 py-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors"
                    >
                      {l.label}
                    </a>
                  )
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
