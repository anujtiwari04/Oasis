import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// Asset imports
import agm2013_proc from "@/assets/AGM Results/Oasis Sec Ltd_AGM Proceedings.pdf";
import agm2013_comb from "@/assets/AGM Results/Oasis_Combined report_2014.pdf";
import agm2014_proc from "@/assets/AGM Results/AGM Proceedings_2014-15.pdf";
import agm2015_proc from "@/assets/AGM Results/OASIS_ProceedingsofAGM_2015-16-26aug.pdf";
import agm2016_proc from "@/assets/AGM Results/Oasis Sec Ltd_AGM Proceedings 2016-17.pdf";
import agm2018_proc from "@/assets/AGM Results/Oasis Sec Ltd AGM Proceedings_2018-19.pdf";
import agm2019_proc from "@/assets/AGM Results/Oasis-Sec-Ltd-AGM-Proceedings2019-20.pdf";
import agm2020_proc from "@/assets/AGM Results/Oasis-Sec-Ltd_Outcome-of-34th-AGM-and-Voting-Results.pdf";
import agm2021_proc from "@/assets/AGM Results/35th-AGM-Outcome-Proceedings.pdf";
import agm2022_proc from "@/assets/AGM Results/Oasis_Sec_Ltd_36th_AGM_Outcome -Proceedings_2023.pdf";
import agm2023_proc from "@/assets/AGM Results/AGM-proceeding-oasis.pdf";
import agm2024_proc from "@/assets/AGM Results/Proceedings-2025.pdf";
import egmProceeding from "@/assets/AGM Results/EGM Proceeding.pdf";
import agm2025_26 from "@/assets/Proceeding of Annual General Meeting.pdf";

export const Route = createFileRoute("/agm-results")({
  component: AGMResultsPage,
});

const agmResults = [
  {
    year: "EOGM",
    reports: [
      { title: "EGM Proceeding", href: egmProceeding, filename: "EGM Proceeding.pdf" }
    ]
  },
  {
    year: "2025-26",
    reports: [
      { title: "Proceedings-2025-26", href: agm2025_26, filename: "Proceeding of Annual General Meeting.pdf" }
    ]
  },
  {
    year: "2024-25",
    reports: [
      { title: "Proceedings-2025.pdf", href: agm2024_proc, filename: "Proceedings-2025.pdf" }
    ]
  },
  {
    year: "2023-24",
    reports: [
      { title: "AGM-proceeding-oasis.pdf", href: agm2023_proc, filename: "AGM-proceeding-oasis.pdf" }
    ]
  },
  {
    year: "2022-23",
    reports: [
      { title: "Oasis_Sec_Ltd_36th_AGM_Outcome -Proceedings_2023.pdf", href: agm2022_proc, filename: "Oasis_Sec_Ltd_36th_AGM_Outcome -Proceedings_2023.pdf" }
    ]
  },
  {
    year: "2021-22",
    reports: [
      { title: "35th-AGM-Outcome-Proceedings.pdf", href: agm2021_proc, filename: "35th-AGM-Outcome-Proceedings.pdf" }
    ]
  },
  {
    year: "2020-21",
    reports: [
      { title: "Oasis-Sec-Ltd_Outcome-of-34th-AGM-and-Voting-Results.pdf", href: agm2020_proc, filename: "Oasis-Sec-Ltd_Outcome-of-34th-AGM-and-Voting-Results.pdf" }
    ]
  },
  {
    year: "2019-20",
    reports: [
      { title: "Oasis-Sec-Ltd-AGM-Proceedings2019-20.pdf", href: agm2019_proc, filename: "Oasis-Sec-Ltd-AGM-Proceedings2019-20.pdf" }
    ]
  },
  {
    year: "2018-19",
    reports: [
      { title: "Oasis Sec Ltd AGM Proceedings_2018-19.pdf", href: agm2018_proc, filename: "Oasis Sec Ltd AGM Proceedings_2018-19.pdf" }
    ]
  },
  {
    year: "2016-17",
    reports: [
      { title: "Oasis Sec Ltd_AGM Proceedings 2016-17.pdf", href: agm2016_proc, filename: "Oasis Sec Ltd_AGM Proceedings 2016-17.pdf" }
    ]
  },
  {
    year: "2015-16",
    reports: [
      { title: "OASIS_ProceedingsofAGM_2015-16-26aug.pdf", href: agm2015_proc, filename: "OASIS_ProceedingsofAGM_2015-16-26aug.pdf" }
    ]
  },
  {
    year: "2014-15",
    reports: [
      { title: "AGM Proceedings_2014-15.pdf", href: agm2014_proc, filename: "AGM Proceedings_2014-15.pdf" }
    ]
  },
  {
    year: "2013-14",
    reports: [
      { title: "Oasis Sec Ltd_AGM Proceedings.pdf", href: agm2013_proc, filename: "Oasis Sec Ltd_AGM Proceedings.pdf" },
      { title: "Oasis_Combined report_2014.pdf", href: agm2013_comb, filename: "Oasis_Combined report_2014.pdf" }
    ]
  }
];

function AGMResultsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Corporate</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                AGM/EOGM Results
              </h1>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Access and download Annual General Meeting (AGM) and Extra Ordinary General Meeting (EOGM) outcomes proceedings and results of Oasis Securities Limited.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <table className="w-full border-collapse text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th scope="col" className="w-32 px-5 py-4 text-sm font-semibold uppercase tracking-wide">
                      Year
                    </th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold uppercase tracking-wide">
                      Proceedings / Reports
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {agmResults.map((row) => (
                    <tr key={row.year} className="align-top hover:bg-slate-50 transition-colors">
                      <th scope="row" className="bg-slate-50/50 px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">
                        {row.year}
                      </th>
                      <td className="px-5 py-4">
                        <div className="space-y-3">
                          {row.reports.map((report) => (
                            <div
                              key={report.title}
                              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                            >
                              <div className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-slate-400 shrink-0" />
                                <span className="text-sm font-semibold text-slate-800 leading-snug break-all">
                                  {report.title}
                                </span>
                              </div>
                              <a
                                href={report.href}
                                download={report.filename}
                                className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
                              >
                                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                                Download / View PDF
                              </a>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
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
