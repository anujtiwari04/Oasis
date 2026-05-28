import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#corporate", label: "Corporate" },
  { href: "#links", label: "Links" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

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
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2" aria-label="Oasis Securities Limited home">
              <div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-extrabold">O</div>
              <span className="font-extrabold tracking-tight text-slate-900 text-sm sm:text-base">
                OASIS SECURITIES LTD
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-slate-900 hover:after:w-full after:transition-all"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
              >
                Get in Touch
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center p-2 text-slate-900"
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
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
