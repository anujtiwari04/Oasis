import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, Search } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// Asset imports
import mar2013 from "@/assets/Shareholding pattern/March_2013.pdf";
import mar2014 from "@/assets/Shareholding pattern/March_2014.pdf";
import mar2015 from "@/assets/Shareholding pattern/March_2015.pdf";
import mar2016 from "@/assets/Shareholding pattern/March-201630july.pdf";

import jun2013 from "@/assets/Shareholding pattern/June_2013.pdf";
import jun2014 from "@/assets/Shareholding pattern/June_2014.pdf";
import jun2015 from "@/assets/Shareholding pattern/June_2015.pdf";
import jun2016 from "@/assets/Shareholding pattern/June-201630july.pdf";
import jun2017 from "@/assets/Shareholding pattern/Shareholding-Pattern_30.06.2017.pdf";

import sep2013 from "@/assets/Shareholding pattern/Sept_2013.pdf";
import sep2014 from "@/assets/Shareholding pattern/Sept_2014.pdf";
import sep2015 from "@/assets/Shareholding pattern/sep2015.pdf";
import sep2017 from "@/assets/Shareholding pattern/Shareholding-Pattern_30.09.2017.pdf";

import dec2013 from "@/assets/Shareholding pattern/Dec_2013.pdf";
import dec2014 from "@/assets/Shareholding pattern/Dec_2014.pdf";
import dec2015 from "@/assets/Shareholding pattern/dec2015.pdf";
import dec2017 from "@/assets/Shareholding pattern/Shareholding-Pattern_31.12.2017.pdf";

import mar2018 from "@/assets/Shareholding pattern/Shareholding-Pattern_31.03.2018.pdf";
import mar2019 from "@/assets/Shareholding pattern/Shareholding-Pattern_31.03.2019.pdf";
import mar2020 from "@/assets/Shareholding pattern/OAIS_Shareholding Pattern 31.03.2020.xlsm.pdf";

import jun2018 from "@/assets/Shareholding pattern/Shareholding-Pattern_30.06.2018.pdf";
import jun2019 from "@/assets/Shareholding pattern/oaiss_Shareholding Pattern 30.06.2019.xlsm.pdf";
import jun2020 from "@/assets/Shareholding pattern/oasis Shareholding Pattern 30.06.2020.xlsm.pdf";
import jun2022 from "@/assets/Shareholding pattern/Shareholding _June_2022.pdf";

import sep2018 from "@/assets/Shareholding pattern/Shareholding-Pattern_30.09.2018.pdf";
import sep2019 from "@/assets/Shareholding pattern/OASIS_shareholding Pattern 30.09.2019.xlsm.pdf";

import dec2018 from "@/assets/Shareholding pattern/Shareholding-Pattern_31.12.2018.pdf";
import dec2019 from "@/assets/Shareholding pattern/oasis Shareholding Pattern 31.12.2019.xlsm.pdf";

import dec2023 from "@/assets/Shareholding pattern/Dec_2023.pdf";
import mar2024 from "@/assets/Shareholding pattern/march 2024.pdf";
import jul2024 from "@/assets/Shareholding pattern/shareholding-pattern-18.07.2024.pdf";
import sep2024 from "@/assets/Shareholding pattern/shareholding-pattern-30.09.2024.pdf";
import shpJune2026 from "@/assets/Shareholding pattern for quarter 30.06.2026.pdf";

export const Route = createFileRoute("/shareholding-pattern")({
  component: ShareholdingPatternPage,
});

interface PatternItem {
  title: string;
  pdf?: string;
  filename?: string;
}

const shareholdingData: PatternItem[] = [
  // 2013
  { title: "March 2013", pdf: mar2013, filename: "March_2013.pdf" },
  { title: "June 2013", pdf: jun2013, filename: "June_2013.pdf" },
  { title: "Sept 2013", pdf: sep2013, filename: "Sept_2013.pdf" },
  { title: "Dec 2013", pdf: dec2013, filename: "Dec_2013.pdf" },

  // 2014
  { title: "March 2014", pdf: mar2014, filename: "March_2014.pdf" },
  { title: "June 2014", pdf: jun2014, filename: "June_2014.pdf" },
  { title: "Sept 2014", pdf: sep2014, filename: "Sept_2014.pdf" },
  { title: "Dec 2014", pdf: dec2014, filename: "Dec_2014.pdf" },

  // 2015
  { title: "March 2015", pdf: mar2015, filename: "March_2015.pdf" },
  { title: "June 2015", pdf: jun2015, filename: "June_2015.pdf" },
  { title: "sep 2015", pdf: sep2015, filename: "sep2015.pdf" },
  { title: "Dec 2015", pdf: dec2015, filename: "dec2015.pdf" },

  // 2016
  { title: "March 2016", pdf: mar2016, filename: "March-201630july.pdf" },
  { title: "June 2016", pdf: jun2016, filename: "June-201630july.pdf" },
  { title: "Sept 2016" }, // empty
  { title: "Dec 2016" }, // empty

  // 2017
  { title: "March 2017" }, // empty
  { title: "June 2017", pdf: jun2017, filename: "Shareholding-Pattern_30.06.2017.pdf" },
  { title: "Sept 2017", pdf: sep2017, filename: "Shareholding-Pattern_30.09.2017.pdf" },
  { title: "Dec 2017", pdf: dec2017, filename: "Shareholding-Pattern_31.12.2017.pdf" },

  // 2018
  { title: "Mar 2018", pdf: mar2018, filename: "Shareholding-Pattern_31.03.2018.pdf" },
  { title: "June 2018", pdf: jun2018, filename: "Shareholding-Pattern_30.06.2018.pdf" },
  { title: "Sep 2018", pdf: sep2018, filename: "Shareholding-Pattern_30.09.2018.pdf" },
  { title: "Dec 2018", pdf: dec2018, filename: "Shareholding-Pattern_31.12.2018.pdf" },

  // 2019
  { title: "Mar 2019", pdf: mar2019, filename: "Shareholding-Pattern_31.03.2019.pdf" },
  { title: "June 2019", pdf: jun2019, filename: "oaiss_Shareholding Pattern 30.06.2019.xlsm.pdf" },
  { title: "Sep 2019", pdf: sep2019, filename: "OASIS_shareholding Pattern 30.09.2019.xlsm.pdf" },
  { title: "Dec 2019", pdf: dec2019, filename: "oasis Shareholding Pattern 31.12.2019.xlsm.pdf" },

  // 2020
  { title: "Mar 2020", pdf: mar2020, filename: "OAIS_Shareholding Pattern 31.03.2020.xlsm.pdf" },
  { title: "June 2020", pdf: jun2020, filename: "oasis Shareholding Pattern 30.06.2020.xlsm.pdf" },
  { title: "Sep 2020" }, // empty
  { title: "Dec 2020" }, // empty

  // 2021
  { title: "Mar 2021" }, // empty
  { title: "June 2021" }, // empty
  { title: "Sep 2021" }, // empty
  { title: "Dec 2021" }, // empty

  // 2022
  { title: "Mar 2022" }, // empty
  { title: "June 2022", pdf: jun2022, filename: "Shareholding _June_2022.pdf" },
  { title: "Sep 2022" }, // empty
  { title: "Dec 2022" }, // empty

  // 2023
  { title: "Mar 2023" }, // empty
  { title: "June 2023" }, // empty
  { title: "Sept 2023" }, // empty
  { title: "Dec 2023", pdf: dec2023, filename: "Dec_2023.pdf" },

  // 2024
  { title: "March 2024", pdf: mar2024, filename: "march 2024.pdf" },
  { title: "June 2024" }, // empty
  { title: "July 2024", pdf: jul2024, filename: "shareholding-pattern-18.07.2024.pdf" },
  { title: "September 2024", pdf: sep2024, filename: "shareholding-pattern-30.09.2024.pdf" },
  { title: "December 2024" }, // empty

  // 2025 & 2026
  { title: "March 2025" }, // empty
  { title: "June 2025" }, // empty
  { title: "September 2025" }, // empty
  { title: "December 2025" }, // empty
  { title: "March 2026" }, // empty
  {
    title: "Shareholding pattern for quarter 30.06.2026",
    pdf: shpJune2026,
    filename: "Shareholding pattern for quarter 30.06.2026.pdf",
  },
];

function ShareholdingPatternPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = [...shareholdingData]
    .reverse()
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Header Block */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Corporate</p>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Shareholding Pattern
                </h1>
                <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
                  View and download quarterly shareholding pattern statements of Oasis Securities Limited.
                </p>
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72 shrink-0">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search period (e.g. 2018)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-white placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
                />
              </div>
            </div>

            {/* Table Container */}
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <table className="w-full border-collapse text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold uppercase tracking-wide">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold uppercase tracking-wide text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                      <tr key={item.title} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <FileText className={`h-5 w-5 ${item.pdf || item.title === "Sept 2016" || item.title === "Dec 2016" || item.title === "March 2017" || item.title === "Sep 2020" || item.title === "Dec 2020" || item.title === "Mar 2021" || item.title === "June 2021" || item.title === "Sep 2021" || item.title === "Dec 2021" || item.title === "Mar 2022" || item.title === "Sep 2022" || item.title === "Dec 2022" || item.title === "Mar 2023" || item.title === "June 2023" || item.title === "Sept 2023" || item.title === "June 2024" || item.title === "December 2024" || item.title === "March 2025" || item.title === "June 2025" || item.title === "September 2025" || item.title === "December 2025" || item.title === "March 2026" ? "text-slate-400" : "text-slate-200"} shrink-0`} />
                            <span className={`text-sm font-semibold ${item.pdf || item.title === "Sept 2016" || item.title === "Dec 2016" || item.title === "March 2017" || item.title === "Sep 2020" || item.title === "Dec 2020" || item.title === "Mar 2021" || item.title === "June 2021" || item.title === "Sep 2021" || item.title === "Dec 2021" || item.title === "Mar 2022" || item.title === "Sep 2022" || item.title === "Dec 2022" || item.title === "Mar 2023" || item.title === "June 2023" || item.title === "Sept 2023" || item.title === "June 2024" || item.title === "December 2024" || item.title === "March 2025" || item.title === "June 2025" || item.title === "September 2025" || item.title === "December 2025" || item.title === "March 2026" ? "text-slate-800" : "text-slate-400"}`}>
                              {item.title}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          {item.title === "March 2026" ? (
                            <a
                              href="/shareholding-pattern-mar-2026"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "December 2025" ? (
                            <a
                              href="/shareholding-pattern-dec-2025"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "September 2025" ? (
                            <a
                              href="/shareholding-pattern-sep-2025"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "June 2025" ? (
                            <a
                              href="/shareholding-pattern-june-2025"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "March 2025" ? (
                            <a
                              href="/shareholding-pattern-mar-2025"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "December 2024" ? (
                            <a
                              href="/shareholding-pattern-dec-2024"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "June 2024" ? (
                            <a
                              href="/shareholding-pattern-june-2024"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "Sept 2023" ? (
                            <a
                              href="/shareholding-pattern-sep-2023"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "June 2023" ? (
                            <a
                              href="/shareholding-pattern-june-2023"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "Mar 2023" ? (
                            <a
                              href="/shareholding-pattern-mar-2023"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "Dec 2022" ? (
                            <a
                              href="/shareholding-pattern-dec-2022"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "Sep 2022" ? (
                            <a
                              href="/shareholding-pattern-sep-2022"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "Mar 2022" ? (

                            <a
                              href="/shareholding-pattern-mar-2022"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "Dec 2021" ? (

                            <a
                              href="/shareholding-pattern-dec-2021"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "Sep 2021" ? (

                            <a
                              href="/shareholding-pattern-sep-2021"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "June 2021" ? (
                            <a
                              href="/shareholding-pattern-june-2021"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "Mar 2021" ? (
                            <a
                              href="/shareholding-pattern-mar-2021"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "Dec 2020" ? (
                            <a
                              href="/shareholding-pattern-dec-2020"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "Sep 2020" ? (
                            <a
                              href="/shareholding-pattern-sep-2020"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "March 2017" ? (
                            <a
                              href="/shareholding-pattern-march-2017"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "Sept 2016" ? (
                            <a
                              href="/shareholding-pattern-sept-2016"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.title === "Dec 2016" ? (
                            <a
                              href="/shareholding-pattern-dec-2016"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              View
                            </a>
                          ) : item.pdf ? (
                            <a
                              href={item.pdf}
                              download={item.filename}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                            >
                              <Download className="h-3.5 w-3.5" aria-hidden="true" />
                              Download / View PDF
                            </a>
                          ) : (
                            <span className="inline-flex items-center text-xs font-semibold text-slate-400 px-3.5 py-2">
                              Not Available
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2} className="px-6 py-12 text-center text-slate-500 text-sm">
                        No shareholding patterns found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
