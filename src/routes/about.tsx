import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Landmark, Building2, TrendingUp, Award, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// Asset imports
import aboutBgImage from "@/assets/about_page_bg_image.png";
import userPlaceholder from "@/assets/user_placeholder.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const leadershipTeam = [
  {
    name: "Mr. Rajesh Kumar Sodhani",
    designation: "Managing Director",
    roleDetails: "DIN: 02516856",
  },
  {
    name: "Mr. Devi Dutt Agarwal",
    designation: "Whole Time Director",
    roleDetails: "DIN: 10631960",
  },
  {
    name: "Mrs. Kirti Mool Chand Jain",
    designation: "Company Secretary & Compliance Officer",
    roleDetails: "Secretarial & Compliance",
  },
  {
    name: "Mr. Surendra Kumar Joshi",
    designation: "Chief Financial Officer",
    roleDetails: "Finance & Treasury",
  },
];

const corePillars = [
  {
    icon: Landmark,
    title: "Regulatory Excellence",
    description:
      "Registered with the Reserve Bank of India as a Base-Layer NBFC (Reg No: 13.0069), maintaining full statutory adherence to RBI Scale Based Regulations.",
  },
  {
    icon: TrendingUp,
    title: "Disciplined Financing",
    description:
      "Focusing on structured Loans Against Property (LAP) and working capital financing, balancing robust credit risk assessment with client growth.",
  },
  {
    icon: Award,
    title: "Public Market Integrity",
    description:
      "Publicly listed on the Bombay Stock Exchange (BSE Scrip: 512489) with a nearly four-decade heritage of transparent governance and public accountability.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-surface text-brand-charcoal antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative w-full min-h-[500px] sm:min-h-[560px] flex items-center overflow-hidden bg-brand-charcoal">
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={aboutBgImage}
                alt="Oasis Securities Limited Corporate Headquarters"
                className="w-full h-full object-cover object-center opacity-75"
              />
              {/* Dual gradient overlay for text readability & brand tone */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-green/95 via-brand-green/85 to-brand-green/50 mix-blend-multiply" />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl"
              >
                <div className="mb-4 inline-flex items-center gap-2 border-l-2 border-brand-gold bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold-light backdrop-blur-sm">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Incorporated 1986 · RBI Registered NBFC</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.1] tracking-tight">
                  A Legacy of <br />
                  <span className="text-brand-gold-light italic">Financial Integrity</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 font-light max-w-2xl leading-relaxed">
                  Established in 1986, Oasis Securities Limited is a premier RBI-registered Non-Banking Financial Company dedicated to fostering institutional trust and enduring financial stability.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Company Overview & Regulatory Badge */}
          <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-brand-surface">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Narrative Foundation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-8"
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  <span className="h-px w-8 bg-brand-gold/50" />
                  Our Foundation
                </span>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal leading-tight">
                  Institutional Trust Built on Decades of Prudence
                </h2>

                <div className="mt-8 space-y-6 text-brand-text/75 text-base sm:text-lg leading-relaxed font-normal">
                  <p>
                    For nearly four decades, <strong className="text-brand-charcoal font-semibold">Oasis Securities Limited</strong> has stood as a bastion of financial reliability in India's dynamic economic landscape. Incorporated on 06th November 1986, we have navigated complex market cycles with an unwavering commitment to our core principles of transparency, rigorous risk management, and long-term value creation.
                  </p>
                  <p>
                    As a seasoned institutional player listed on the Bombay Stock Exchange (BSE Scrip Code: 512489), our operations are underpinned by a deep understanding of capital markets and corporate financing. Classified as a <strong className="text-brand-charcoal font-semibold">'Base-Layer NBFC'</strong> by the Reserve Bank of India pursuant to Scale Based Regulations, the Company provides secured loans against property for business or personal needs as well as working capital for business expansion purposes at competitive interest rates.
                  </p>
                  <p>
                    Our legacy is not merely measured in years, but in the enduring partnerships and unshakeable financial stability we deliver to our clients, shareholders, and institutional stakeholders across the nation.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="/board-of-directors"
                    className="inline-flex items-center gap-2 rounded-[4px] bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green-light"
                  >
                    View Board of Directors
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/policies"
                    className="inline-flex items-center gap-2 rounded-[4px] border border-brand-green/30 bg-transparent px-6 py-3 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-green/5"
                  >
                    Statutory Policies
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Regulatory Standing Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-4 w-full"
              >
                <div className="bg-white border border-brand-charcoal/10 rounded-[6px] shadow-sm p-6 sm:p-8 border-l-4 border-l-brand-gold">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-charcoal">
                      Regulatory Standing
                    </h3>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="block text-xs font-medium uppercase tracking-wider text-brand-text/50">
                        Status
                      </span>
                      <span className="font-semibold text-brand-charcoal text-base">
                        Registered NBFC
                      </span>
                    </div>

                    <div className="w-full h-px bg-brand-charcoal/8" />

                    <div>
                      <span className="block text-xs font-medium uppercase tracking-wider text-brand-text/50">
                        Registration No
                      </span>
                      <span className="font-semibold text-brand-charcoal text-base">
                        13.0069
                      </span>
                      <span className="block text-xs text-brand-text/50 mt-0.5">
                        Dated 24.02.1998
                      </span>
                    </div>

                    <div className="w-full h-px bg-brand-charcoal/8" />

                    <div>
                      <span className="block text-xs font-medium uppercase tracking-wider text-brand-text/50">
                        Authority
                      </span>
                      <span className="font-semibold text-brand-charcoal text-base">
                        Reserve Bank of India (RBI)
                      </span>
                      <span className="block text-xs text-brand-text/50 mt-0.5">
                        Base-Layer (Scale Based Regulations)
                      </span>
                    </div>

                    <div className="w-full h-px bg-brand-charcoal/8" />

                    <div>
                      <span className="block text-xs font-medium uppercase tracking-wider text-brand-text/50">
                        Exchange Listing
                      </span>
                      <span className="font-semibold text-brand-charcoal text-base">
                        BSE Limited (Scrip: 512489)
                      </span>
                    </div>

                    <div className="w-full h-px bg-brand-charcoal/8" />

                    <div>
                      <span className="block text-xs font-medium uppercase tracking-wider text-brand-text/50">
                        CIN
                      </span>
                      <span className="font-mono text-xs font-bold text-brand-charcoal break-all">
                        L51900MH1986PLC041499
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Core Pillars */}
          <section className="py-16 bg-white border-y border-brand-charcoal/8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {corePillars.map((pillar) => (
                  <div key={pillar.title} className="p-6 rounded-[6px] bg-brand-surface border border-brand-charcoal/5">
                    <div className="h-11 w-11 rounded-[4px] bg-brand-green/10 text-brand-green flex items-center justify-center mb-4">
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-charcoal">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-brand-text/70 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership Team Section */}
          <section id="leadership" className="scroll-mt-20 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-brand-surface-alt">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 max-w-2xl mx-auto">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  <span className="h-px w-8 bg-brand-gold/50" />
                  Governance
                  <span className="h-px w-8 bg-brand-gold/50" />
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal">
                  Leadership Team
                </h2>
                <p className="mt-4 text-base sm:text-lg text-brand-text/60 font-normal">
                  Guided by veterans of the financial sector, ensuring prudent stewardship of capital.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {leadershipTeam.map((leader) => (
                  <motion.div
                    key={leader.name}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-[6px] border border-brand-charcoal/10 shadow-sm overflow-hidden group flex flex-col justify-between"
                  >
                    {/* Portrait Avatar Container */}
                    <div className="aspect-[4/5] overflow-hidden bg-gradient-to-b from-brand-surface to-brand-surface-alt flex items-center justify-center p-8 relative">
                      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md bg-white flex items-center justify-center">
                        <img
                          src={userPlaceholder}
                          alt={leader.name}
                          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute bottom-3 right-3 text-[11px] font-mono font-medium text-brand-charcoal/40 bg-white/80 px-2 py-0.5 rounded backdrop-blur-xs">
                        {leader.roleDetails}
                      </div>
                    </div>

                    {/* Metadata Content */}
                    <div className="p-5 text-center border-t border-brand-gold/20 bg-white">
                      <h3 className="text-base font-bold text-brand-charcoal leading-snug">
                        {leader.name}
                      </h3>
                      <p className="mt-1.5 text-xs font-semibold text-brand-gold uppercase tracking-wider">
                        {leader.designation}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a
                  href="/key-management-personnel"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
                >
                  View Full Key Management Personnel & Board Directory
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

