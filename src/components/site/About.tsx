import { motion } from "framer-motion";
import { Building2, FileText } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28 bg-brand-green" aria-label="About Us">
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
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold">
              <span className="h-px w-8 bg-brand-gold/40" /> About Us
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              About Oasis Securities Limited
            </h2>
            
            <div className="mt-8 space-y-6 text-white/75 text-base sm:text-lg leading-relaxed font-light">
              <p>
                <strong className="text-white font-semibold">OASIS SECURITIES LIMITED</strong>, a public limited company, originally incorporated on 06th November 1986 is listed on the Bombay Stock Exchange (BSE Scrip Code: 512489) and also an RBI- registered, non-deposit taking Non-Banking Financial Company (NBFC) headquartered in Mumbai.
              </p>
              <p>
                As an NBFC, our primary business is financing and investment activities. Classified as an 'Base-Layer NBFC' by the RBI pursuant to Scale Based Regulations, the Company provides loans against property for business or personal needs as well as working capital for business expansion purposes at reasonable interest rates, catering to diverse borrower needs while maintaining a strong focus on credit quality and risk management.
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
            <div className="rounded-[4px] bg-white/[0.07] border border-white/10 backdrop-blur-sm p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/15 pb-4">
                <Building2 className="h-5 w-5 text-brand-gold" />
                Company Overview & Highlights
              </h3>
              
              <ul className="mt-6 space-y-4">
                <li className="flex gap-3 text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                  <span><strong className="text-white">Incorporation:</strong> 06th November 1986</span>
                </li>
                <li className="flex gap-3 text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                  <span><strong className="text-white">Listing Status:</strong> Listed on BSE (Scrip Code: 512489)</span>
                </li>
                <li className="flex gap-3 text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                  <span><strong className="text-white">Regulatory Status:</strong> RBI-registered, Non-deposit taking NBFC</span>
                </li>
                <li className="flex gap-3 text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                  <span><strong className="text-white">NBFC Classification:</strong> Base-Layer NBFC (pursuant to Scale Based Regulations)</span>
                </li>
                <li className="flex gap-3 text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                  <span><strong className="text-white">Key Offerings:</strong> Loans Against Property & Working Capital Financing</span>
                </li>
                <li className="flex gap-3 text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                  <span><strong className="text-white">Key Leadership:</strong> MD Mr. Rajesh Kumar Sodhani & WTD Mr. Devi Dutt Agarwal</span>
                </li>
              </ul>

              <div className="mt-8 rounded-[4px] bg-brand-gold/15 border border-brand-gold/30 p-5 flex gap-3.5 items-start">
                <FileText className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-brand-gold font-bold">RBI Registration</h4>
                  <p className="text-sm font-semibold text-white mt-1">
                    REGISTRATION CERTIFICATE NO: 13.0069
                  </p>
                  <p className="text-xs text-white/60 mt-1">
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
