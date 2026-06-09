import { motion } from "framer-motion";
import { Building2, Award, Users, FileText } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 bg-white" aria-label="About Us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Detailed Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <span className="h-px w-8 bg-slate-300" /> About Us
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              About Oasis Securities Limited
            </h2>
            
            <div className="mt-8 space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              <p>
                <strong>OASIS SECURITIES LIMITED</strong>, a public limited company, originally incorporated on 06th November 1986 is listed on the Bombay Stock Exchange (BSE Scrip Code: 512489) and also an RBI- registered, non-deposit taking Non-Banking Financial Company (NBFC) headquartered in Mumbai.
              </p>
              <p>
                As an NBFC, our primary business is financing and investment activities. Classified as an ‘Base-Layer NBFC’ by the RBI pursuant to Scale Based Regulations, the Company provides loans against property for business or personal needs as well as working capital for business expansion purposes at reasonable interest rates, catering to diverse borrower needs while maintaining a strong focus on credit quality and risk management.
              </p>
              <p>
                Led by Managing Director Mr. Rajesh Kumar Sodhani and Whole Time Director Mr. Devi Dutt Agarwal, the Company is committed to responsible lending, transparency, and delivering long-term value to our investors and clients.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Quick Facts & Bullet Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 w-full"
          >
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2 border-b border-slate-200 pb-4">
                <Building2 className="h-5 w-5 text-slate-900" />
                Company Overview & Highlights
              </h3>
              
              <ul className="mt-6 space-y-4">
                <li className="flex gap-3 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span><strong>Incorporation:</strong> 06th November 1986</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span><strong>Listing Status:</strong> Listed on BSE (Scrip Code: 512489)</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span><strong>Regulatory Status:</strong> RBI-registered, Non-deposit taking NBFC</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span><strong>NBFC Classification:</strong> Base-Layer NBFC (pursuant to Scale Based Regulations)</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span><strong>Key Offerings:</strong> Loans Against Property & Working Capital Financing</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span><strong>Key Leadership:</strong> MD Mr. Rajesh Kumar Sodhani & WTD Mr. Devi Dutt Agarwal</span>
                </li>
              </ul>

              <div className="mt-8 rounded-xl bg-slate-900 p-5 text-white flex gap-3.5 items-start">
                <FileText className="h-5 w-5 text-slate-300 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">RBI Registration</h4>
                  <p className="text-sm font-semibold mt-1">
                    REGISTRATION CERTIFICATE NO: 13.0069
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Dated 24.02.1998
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
