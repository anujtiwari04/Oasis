import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// Asset imports
import ar2026 from "@/assets/annual report/annual-report-2025-26.pdf";
import ar2025 from "@/assets/annual report/annual-report-revised.pdf";
import ar2024 from "@/assets/annual report/OASIS_ANNUAL REPORT - revised.pdf";
import ar2023 from "@/assets/annual report/Oasis-Securities-Limited-36th-Annual-Report-2022-2023.pdf";
import ar2022 from "@/assets/annual report/Oasis_Sec_Ltd_Annual_Report_2021-2022.pdf";
import ar2021 from "@/assets/annual report/OASIS SECURITIES LIMITED - ANNUAL REPORT 2020-21.pdf";
import ar2020 from "@/assets/annual report/Oasis Securities Limited-AR 2019-2020.pdf";
import ar2019 from "@/assets/annual report/OASIS-AR-2018-2019.pdf";
import ar2018 from "@/assets/annual report/OASIS-AR-2017-18.pdf";
import ar2016_17 from "@/assets/annual report/OASIS-AR-2016-17.pdf";
import ar2015_16 from "@/assets/annual report/29-2015-16.pdf";
import ar2014_15 from "@/assets/annual report/2014-15.pdf";
import ar2013_14 from "@/assets/annual report/2013-14.pdf";
import ar2012_13 from "@/assets/annual report/2012-13.pdf";
import ar2011_12 from "@/assets/annual report/2011-12.pdf";
import ar2010_11 from "@/assets/annual report/2010-11.pdf";
import ar2009_10 from "@/assets/annual report/2009-10.pdf";

export const Route = createFileRoute("/annual-reports")({
  component: AnnualReportsPage,
});

const reports = [
  {
    year: "2025-26",
    title: "Annual Report 2025-26",
    href: ar2026,
    filename: "annual-report-2025-26.pdf",
  },
  {
    year: "2024-25",
    title: "Annual Report 2024-25",
    href: ar2025,
    filename: "annual-report-revised.pdf",
  },
  {
    year: "2023-24",
    title: "Annual Report 2023-24",
    href: ar2024,
    filename: "OASIS_ANNUAL REPORT - revised.pdf",
  },
  {
    year: "2022-23",
    title: "Annual Report 2022-23",
    href: ar2023,
    filename: "Oasis-Securities-Limited-36th-Annual-Report-2022-2023.pdf",
  },
  {
    year: "2021-22",
    title: "Annual Report 2021-22",
    href: ar2022,
    filename: "Oasis_Sec_Ltd_Annual_Report_2021-2022.pdf",
  },
  {
    year: "2020-21",
    title: "Annual Report 2020-21",
    href: ar2021,
    filename: "OASIS SECURITIES LIMITED - ANNUAL REPORT 2020-21.pdf",
  },
  {
    year: "2019-20",
    title: "Annual Report 2019-20",
    href: ar2020,
    filename: "Oasis Securities Limited-AR 2019-2020.pdf",
  },
  {
    year: "2018-19",
    title: "Annual Report 2018-19",
    href: ar2019,
    filename: "OASIS-AR-2018-2019.pdf",
  },
  {
    year: "2017-18",
    title: "Annual Report 2017-18",
    href: ar2018,
    filename: "OASIS-AR-2017-18.pdf",
  },
  {
    year: "2016-17",
    title: "Annual Report 2016-17",
    href: ar2016_17,
    filename: "OASIS-AR-2016-17.pdf",
  },
  {
    year: "2015-16",
    title: "Annual Report 2015-16",
    href: ar2015_16,
    filename: "29-2015-16.pdf",
  },
  {
    year: "2014-15",
    title: "Annual Report 2014-15",
    href: ar2014_15,
    filename: "2014-15.pdf",
  },
  {
    year: "2013-14",
    title: "Annual Report 2013-14",
    href: ar2013_14,
    filename: "2013-14.pdf",
  },
  {
    year: "2012-13",
    title: "Annual Report 2012-13",
    href: ar2012_13,
    filename: "2012-13.pdf",
  },
  {
    year: "2011-12",
    title: "Annual Report 2011-12",
    href: ar2011_12,
    filename: "2011-12.pdf",
  },
  {
    year: "2010-11",
    title: "Annual Report 2010-11",
    href: ar2010_11,
    filename: "2010-11.pdf",
  },
  {
    year: "2009-10",
    title: "Annual Report 2009-10",
    href: ar2009_10,
    filename: "2009-10.pdf",
  },
];

function AnnualReportsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Corporate</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Annual Reports
              </h1>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Access and download Annual Report documents of Oasis Securities Limited.
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
                      Document Title
                    </th>
                    <th scope="col" className="w-48 px-5 py-4 text-sm font-semibold uppercase tracking-wide text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {reports.map((report) => (
                    <tr key={report.year} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">
                        {report.year}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-slate-400 shrink-0" />
                          <span className="text-sm font-semibold text-slate-800 leading-snug">
                            {report.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <a
                          href={report.href}
                          download={report.filename}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                        >
                          <Download className="h-3.5 w-3.5" aria-hidden="true" />
                          Download / View PDF
                        </a>
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
