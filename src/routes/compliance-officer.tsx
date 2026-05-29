import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { User, MapPin, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/compliance-officer")({
  component: ComplianceOfficerPage,
});

function ComplianceOfficerPage() {
  const emails = ["sodhanioasis@gmail.com", "admin@oasiscaps.com"];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Corporate Governance</p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Compliance Officer
              </h1>
              <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
                Details and official contact information for the Compliance Officer of Oasis Securities Limited.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative group">
              {/* Top gradient highlight banner */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />

              <div className="p-8 sm:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Left profile icon section */}
                  <div className="flex flex-col items-center justify-center bg-indigo-50/70 p-6 rounded-2xl shrink-0 w-full md:w-48 text-indigo-600">
                    <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
                      <User className="h-10 w-10 text-indigo-600" />
                    </div>
                    <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider text-center">Designation</span>
                    <span className="text-base font-bold text-slate-800 text-center mt-1">Compliance Officer</span>
                  </div>

                  {/* Right information details section */}
                  <div className="flex-1 space-y-6 w-full">
                    {/* Name */}
                    <div>
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Name</span>
                      <p className="text-xl sm:text-2xl font-extrabold text-slate-900">Ms. Kirti Mool Chand Jain</p>
                    </div>

                    {/* Address */}
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 mt-1">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Registered Address</span>
                        <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-medium">
                          A-112, 1st Floor, Lodha Supremus, MIDC,<br />
                          Andheri East, Mumbai – 400093, Maharashtra
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 mt-1">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="w-full">
                        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Phone Number</span>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-1">
                          <p className="text-slate-900 font-bold text-base sm:text-lg">9257056969</p>
                          <a
                            href="tel:9257056969"
                            className="inline-flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-semibold py-1.5 px-4 rounded-lg text-sm transition-colors w-fit"
                          >
                            <Phone className="h-4 w-4" />
                            <span>Call Officer</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email addresses */}
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 mt-1">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="w-full">
                        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Email Addresses</span>
                        <div className="space-y-3 mt-2">
                          {emails.map((email) => (
                            <div key={email} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2 last:border-b-0 last:pb-0">
                              <span className="text-slate-700 font-medium break-all text-sm sm:text-base">{email}</span>
                              <a
                                href={`mailto:${email}`}
                                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white font-semibold py-1.5 px-3 rounded-lg text-xs transition-colors w-fit shrink-0"
                              >
                                <Mail className="h-3.5 w-3.5" />
                                <span>Email Now</span>
                              </a>
                            </div>
                          ))}
                        </div>
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
