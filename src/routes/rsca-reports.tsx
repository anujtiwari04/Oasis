import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// Asset imports
import rscaMar2026 from "@/assets/RSCA/RSCA MARCH 2026.pdf";
import rscaDec2025 from "@/assets/RSCA/RSCA DEC 2025.pdf";
import rscaSep2025 from "@/assets/RSCA/RSCA SEPT 2025.pdf";
import rscaJune2025 from "@/assets/RSCA/RSCA Report JUNE 2025.pdf";
import rscaMar2025 from "@/assets/RSCA/RSCA MARCH 2025.pdf";
import rscaDec2024 from "@/assets/RSCA/RSCA DEC 2024.pdf";
import rscaSep2024 from "@/assets/RSCA/RSCA REPORT SEPT 2024.pdf";

export const Route = createFileRoute("/rsca-reports")({
  component: RSCAReportsPage,
});

const reports = [
  {
    title: "RSCA Report - March 2026",
    href: rscaMar2026,
    filename: "RSCA MARCH 2026.pdf",
  },
  {
    title: "RSCA Report - December 2025",
    href: rscaDec2025,
    filename: "RSCA DEC 2025.pdf",
  },
  {
    title: "RSCA Report - September 2025",
    href: rscaSep2025,
    filename: "RSCA SEPT 2025.pdf",
  },
  {
    title: "RSCA Report - June 2025",
    href: rscaJune2025,
    filename: "RSCA Report JUNE 2025.pdf",
  },
  {
    title: "RSCA Report - March 2025",
    href: rscaMar2025,
    filename: "RSCA MARCH 2025.pdf",
  },
  {
    title: "RSCA Report - December 2024",
    href: rscaDec2024,
    filename: "RSCA DEC 2024.pdf",
  },
  {
    title: "RSCA Report - September 2024",
    href: rscaSep2024,
    filename: "RSCA REPORT SEPT 2024.pdf",
  },
];

function RSCAReportsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Corporate</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Reconciliation of Share Capital Audit Report
              </h1>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Access and download Reconciliation of Share Capital Audit Reports of Oasis Securities Limited.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <table className="w-full border-collapse text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold uppercase tracking-wide">
                      Report Title
                    </th>
                    <th scope="col" className="w-48 px-5 py-4 text-sm font-semibold uppercase tracking-wide text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {reports.map((report) => (
                    <tr key={report.title} className="hover:bg-slate-50 transition-colors">
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
