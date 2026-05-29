import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { User, Briefcase, Phone } from "lucide-react";

export const Route = createFileRoute("/key-management-personnel")({
  component: KeyManagementPersonnelPage,
});

const personnel = [
  {
    name: "Mr. Devi Dutt Agarwal",
    designation: "Whole Time Director",
  },
  {
    name: "Mr. Rajesh Kumar Sodhani",
    designation: "Managing Director",
    phone: "9257056969",
  },
  {
    name: "Ms. Kirti Ranka",
    designation: "C.S. & Compliance Officer",
  },
  {
    name: "Mr. Surendra Kumar Joshi",
    designation: "Chief Financial Officer",
  },
];

function KeyManagementPersonnelPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Corporate Governance</p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Key Management Personnel
              </h1>
              <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
                Meet the leadership team guiding Oasis Securities Limited with expertise, dedication, and integrity.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {personnel.map((person) => {
                const isMD = person.phone !== undefined;
                return (
                  <div
                    key={person.name}
                    className="relative overflow-hidden bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5"
                  >
                    {/* Decorative accent */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                          <User className="h-6 w-6" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-slate-950 transition-colors">
                            {person.name}
                          </h2>
                          <div className="flex items-center gap-1.5 mt-1 text-indigo-600 font-medium text-xs uppercase tracking-wider">
                            <Briefcase className="h-3.5 w-3.5" />
                            <span>{person.designation}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {isMD && (
                      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Direct Contact</span>
                        <a
                          href={`tel:${person.phone}`}
                          className="inline-flex items-center justify-center gap-2.5 w-full bg-slate-900 hover:bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-all shadow-sm shadow-slate-900/10 hover:shadow-indigo-600/20"
                        >
                          <Phone className="h-4 w-4" />
                          <span>Call: {person.phone}</span>
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
