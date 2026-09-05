import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import scrutinizerReport2026 from "@/assets/VOTING RESULT AND SCRUTINIZER REPORT_01.09.2026.pdf";
import scrutinizerReport2025 from "@/assets/scrutinizer-report-2025.pdf";
import scrutinizerReport2024 from "@/assets/scrutinizer's-report.pdf";
import scrutinizerReport2023 from "@/assets/Oasis_Sec_Ltd_36th_AGM_Scrutinizer's_Report_2023.pdf";
import scrutinizerReport2022 from "@/assets/Scrutinizer's Report 2022.pdf";
import scrutinizerReport2021 from "@/assets/Scrutinizers-Report-2021-Oasis.pdf";
import votingReport2020 from "@/assets/OSL-VOTING 2019-20.pdf";
import scrutinizerReport2020 from "@/assets/Oasis-Securities-Ltd_Scrutinizers-Report_2019-20.pdf";
import scrutinizerReport2019 from "@/assets/Oasis Securities Ltd -Scrutinizer's Report-AGM 2018-19.pdf";
import scrutinizerReport2018 from "@/assets/Oasis Scrutinizer's Report AGM 2017-2018.pdf";
import scrutinizerReport2017 from "@/assets/Oasis Sec Ltd_Scrutinizer's Report_AGM_2016-17.pdf";
import scrutinizerReport2016 from "@/assets/OASIS_Scrutinizer's-report-2015-16-26aug.pdf";
import agmResult2015 from "@/assets/RESULT OF AGM_2015.pdf";
import evotingReport2014 from "@/assets/Oasis_evoting_2014.pdf";
import pollingReport2014 from "@/assets/Oasis_polling report_2014.pdf";

export const Route = createFileRoute("/scrutinizers-report")({
  component: ScrutinizersReportPage,
});

interface ReportItem {
  title: string;
  href: string;
  filename?: string;
}

interface ReportRow {
  year: string;
  reports: ReportItem[];
}

const reportRows: ReportRow[] = [
  {
    year: "2025-26",
    reports: [
      {
        title: "VOTING RESULT AND SCRUTINIZER REPORT_01.09.2026",
        href: scrutinizerReport2026,
        filename: "VOTING RESULT AND SCRUTINIZER REPORT_01.09.2026.pdf",
      },
    ],
  },
  {
    year: "2024-25",
    reports: [{ title: "scrutinizer-report-2025.pdf", href: scrutinizerReport2025 }],
  },
  {
    year: "2023-24",
    reports: [{ title: "scrutinizer's-report.pdf", href: scrutinizerReport2024 }],
  },
  {
    year: "2022-23",
    reports: [{ title: "Oasis_Sec_Ltd_36th_AGM_Scrutinizer's_Report_2023.pdf", href: scrutinizerReport2023 }],
  },
  {
    year: "2021-22",
    reports: [{ title: "Scrutinizer's Report 2022.pdf", href: scrutinizerReport2022 }],
  },
  {
    year: "2020-21",
    reports: [{ title: "Scrutinizers-Report-2021-Oasis.pdf", href: scrutinizerReport2021 }],
  },
  {
    year: "2019-20",
    reports: [
      { title: "OSL-VOTING 2019-20.pdf", href: votingReport2020 },
      { title: "Oasis-Securities-Ltd_Scrutinizers-Report_2019-20.pdf", href: scrutinizerReport2020 },
    ],
  },
  {
    year: "2018-19",
    reports: [{ title: "Oasis Securities Ltd -Scrutinizer's Report-AGM 2018-19.pdf", href: scrutinizerReport2019 }],
  },
  {
    year: "2017-18",
    reports: [{ title: "Oasis Scrutinizer's Report AGM 2017-2018.pdf", href: scrutinizerReport2018 }],
  },
  {
    year: "2016-17",
    reports: [{ title: "Oasis Sec Ltd_Scrutinizer's Report_AGM_2016-17.pdf", href: scrutinizerReport2017 }],
  },
  {
    year: "2015-16",
    reports: [{ title: "OASIS_Scrutinizer's-report-2015-16-26aug.pdf", href: scrutinizerReport2016 }],
  },
  {
    year: "2015",
    reports: [{ title: "RESULT OF AGM_2015.pdf", href: agmResult2015 }],
  },
  {
    year: "2013-14",
    reports: [
      { title: "Oasis_evoting_2014.pdf", href: evotingReport2014 },
      { title: "Oasis_polling report_2014.pdf", href: pollingReport2014 },
    ],
  },
];

function ScrutinizersReportPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header />

      <main className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Postal Ballot</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Scrutinizer's Report
            </h1>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="w-36 px-5 py-4 text-sm font-semibold uppercase tracking-wide">
                    Years
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold uppercase tracking-wide">
                    Reports
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {reportRows.map((row) => (
                  <tr key={row.year} className="align-top">
                    <th scope="row" className="bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-900">
                      {row.year}
                    </th>
                    <td className="px-5 py-4">
                      <div className="space-y-3">
                        {row.reports.map((report) => (
                          <div
                            key={report.title}
                            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                          >
                            <span className="break-words text-sm font-medium text-slate-700">{report.title}</span>
                            <a
                              href={report.href}
                              download={report.filename ?? report.title}
                              className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                            >
                              <Download className="h-4 w-4" aria-hidden="true" />
                              Download
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

      <Footer />
    </div>
  );
}
