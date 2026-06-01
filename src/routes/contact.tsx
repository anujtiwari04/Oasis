import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MapPin, Phone, Printer, Mail, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactDetailPage,
});

function ContactDetailPage() {
  const emails = ["admin@oasiscaps.com", "sodhanioasis@gmail.com"];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Get In Touch</p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Contact Detail
              </h1>
              <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
                Official contact and registry information for Oasis Securities Limited.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative group">
              {/* Top gradient highlight banner */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />

              <div className="p-8 sm:p-12">
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">Registered Office</span>
                      <p className="text-slate-800 leading-relaxed text-base sm:text-lg font-semibold">
                        A-112, 1st Floor, Lodha Supremus,<br />
                        MIDC, Andheri East, Mumbai – 400093, Maharashtra
                      </p>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Phone & Fax Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Call Us */}
                    <div className="flex gap-4 items-start">
                      <div className="h-11 w-11 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">Call Us</span>
                        <p className="text-slate-900 font-bold text-lg">9257056969</p>
                        <a
                          href="tel:9257056969"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 mt-1 transition-colors"
                        >
                          <span>Call Now</span>
                          <span>→</span>
                        </a>
                      </div>
                    </div>

                    {/* Fax */}
                    <div className="flex gap-4 items-start">
                      <div className="h-11 w-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                        <Printer className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">Fax Number</span>
                        <p className="text-slate-900 font-bold text-lg">9257056969</p>
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Emails */}
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div className="h-12 w-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">E-mail Address</span>
                      <div className="mt-2 space-y-3">
                        {emails.map((email) => (
                          <div
                            key={email}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-50 pb-2 last:border-b-0 last:pb-0"
                          >
                            <span className="text-slate-800 font-semibold break-all text-sm sm:text-base">{email}</span>
                            <a
                              href={`mailto:${email}`}
                              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-purple-600 text-white font-bold py-1.5 px-4 rounded-xl text-xs transition-colors w-fit shrink-0 shadow-sm"
                            >
                              <Mail className="h-3.5 w-3.5" />
                              <span>Email Now</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Investor Grievance */}
                  <div className="flex gap-4 sm:gap-6 items-start bg-rose-50/50 p-6 rounded-2xl border border-rose-100/50">
                    <div className="h-12 w-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                      <ShieldAlert className="h-6 w-6" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs text-rose-500 font-extrabold uppercase tracking-wider block mb-1">Investor Grievance</span>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2">
                        <span className="text-slate-900 font-bold break-all text-sm sm:text-base">sodhanioasis@gmail.com</span>
                        <a
                          href="mailto:sodhanioasis@gmail.com"
                          className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold py-1.5 px-4 rounded-xl text-xs transition-colors w-fit shrink-0 shadow-sm"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          <span>Submit Grievance</span>
                        </a>
                      </div>
                    </div>
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
