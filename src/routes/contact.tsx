import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MapPin, Phone, Printer, Mail, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactDetailPage,
});

function ContactDetailPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Minimalist Heading Block */}
            <div className="border-b border-slate-100 pb-6 mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Contact Details</span>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Contact Detail
              </h1>
            </div>

            {/* Clean Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column: Addresses */}
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-1" />
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Registered Office</h2>
                    <address className="mt-3 not-italic text-slate-600 leading-relaxed text-base font-normal">
                      A-112, 1st Floor, Lodha Supremus,<br />
                      MIDC, Andheri East,<br />
                      Mumbai – 400093, Maharashtra
                    </address>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-1" />
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Branch Office</h2>
                    <address className="mt-3 not-italic text-slate-600 leading-relaxed text-base font-normal">
                      2nd Floor, C 373<br />
                      Behind Amar Jain Hospital,<br />
                      Block C, Vaishali Nagar,<br />
                      Jaipur – 302021
                    </address>
                  </div>
                </div>
              </div>

              {/* Right Column: Communications & Grievance */}
              <div className="space-y-8">
                {/* Phone & Fax */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex gap-4 items-start">
                    <Phone className="h-5 w-5 text-slate-400 shrink-0 mt-1" />
                    <div>
                      <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Call Us</h2>
                      <a href="tel:9257056969" className="block mt-2 text-slate-600 hover:text-slate-900 transition-colors font-medium">
                        9257056969
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <Printer className="h-5 w-5 text-slate-400 shrink-0 mt-1" />
                    <div>
                      <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Fax No</h2>
                      <p className="mt-2 text-slate-600 font-medium">
                        9257056969
                      </p>
                    </div>
                  </div>
                </div>

                {/* E-mails */}
                <div className="flex gap-4 items-start">
                  <Mail className="h-5 w-5 text-slate-400 shrink-0 mt-1" />
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">E-mail</h2>
                    <div className="mt-2 space-y-1.5">
                      <a
                        href="mailto:admin@oasiscaps.com"
                        className="block text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        admin@oasiscaps.com
                      </a>
                      <a
                        href="mailto:sodhanioasis@gmail.com"
                        className="block text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        sodhanioasis@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Investor Grievance */}
                <div className="flex gap-4 items-start">
                  <ShieldAlert className="h-5 w-5 text-slate-400 shrink-0 mt-1" />
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Investor Grievance</h2>
                    <a
                      href="mailto:sodhanioasis@gmail.com"
                      className="block mt-2 text-slate-600 hover:text-slate-900 transition-colors font-medium"
                    >
                      sodhanioasis@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
