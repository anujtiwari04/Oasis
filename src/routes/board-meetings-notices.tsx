import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// Asset imports
import noticeBMJan2026 from "@/assets/Notice_BM_JANUARY 2026.pdf";
import noticeBMNov2025 from "@/assets/Notice_BM_NOVEMBER 2025.pdf";
import noticeBMJuly2025 from "@/assets/Notice_BM_JULY 2025.pdf";
import noticeBMMay2025 from "@/assets/Board Meeting Notice_MAY 2025.pdf";
import noticeBMJan2025 from "@/assets/notice-of-board-meeting-2025.pdf";
import noticeBMSept2021 from "@/assets/OASIS - BM Notice 30.09.2021.pdf";
import noticeBMJune2021 from "@/assets/OASIS-BM-Notice-unaudited-results -June 2021.pdf";
import noticeBMFinMarch2021 from "@/assets/OASIS-Noticeaudited-financial-results_31.03.2021.pdf";
import noticeBMDec2016 from "@/assets/unaudited-results-dec2016-17.2.17.pdf";
import noticeBMJune2016 from "@/assets/OASIS_ notice_BM_ unaudited results_30.06.2016.pdf";
import noticeBMDec2015 from "@/assets/unaudited-results-dec-31-2015.pdf";
import noticeBMNewspaper2016 from "@/assets/Newspaper-Notice-BM.pdf";
import noticeBMSept2016 from "@/assets/Oasis-notice-for-BM-unaudited-results-sept-2016.pdf";
import noticeBMJune2017 from "@/assets/Oasis9x8cm2ndjune17.pdf";
import noticeBMIntimation from "@/assets/BM-Intimation.pdf";
import priorIntimationBM from "@/assets/Prior Intimation BM.pdf";
import noticeBM07082026 from "@/assets/Notice_BM_07.08.2026.pdf";
import noticeBM11052026 from "@/assets/Notice_BM_11.05.2026.pdf";

export const Route = createFileRoute("/board-meetings-notices")({
  component: BoardMeetingsNoticesPage,
});

const notices = [
  {
    title: "Prior Intimation BM",
    href: priorIntimationBM,
    filename: "Prior Intimation BM.pdf",
  },
  {
    title: "Notice_BM_07.08.2026",
    href: noticeBM07082026,
    filename: "Notice_BM_07.08.2026.pdf",
  },
  {
    title: "Notice_BM_11.05.2026",
    href: noticeBM11052026,
    filename: "Notice_BM_11.05.2026.pdf",
  },
  {
    title: "Notice BM JANUARY 2026",
    href: noticeBMJan2026,
    filename: "Notice_BM_JANUARY 2026.pdf",
  },
  {
    title: "Notice BM NOVEMBER 2025",
    href: noticeBMNov2025,
    filename: "Notice_BM_NOVEMBER 2025.pdf",
  },
  {
    title: "Notice BM JULY 2025",
    href: noticeBMJuly2025,
    filename: "Notice_BM_JULY 2025.pdf",
  },
  {
    title: "Board Meeting Notice MAY 2025",
    href: noticeBMMay2025,
    filename: "Board Meeting Notice_MAY 2025.pdf",
  },
  {
    title: "Board Meeting Notices (Jan 2025)",
    href: noticeBMJan2025,
    filename: "notice-of-board-meeting-2025.pdf",
  },
  {
    title: "Board Meeting Notices (Sept 2021)",
    href: noticeBMSept2021,
    filename: "OASIS - BM Notice 30.09.2021.pdf",
  },
  {
    title: "Notice unaudited results June 2021",
    href: noticeBMJune2021,
    filename: "OASIS-BM-Notice-unaudited-results -June 2021.pdf",
  },
  {
    title: "Notice audited financial results 31.03.2021",
    href: noticeBMFinMarch2021,
    filename: "OASIS-Noticeaudited-financial-results_31.03.2021.pdf",
  },
  {
    title: "Notice for BM unaudited results Dec 2016",
    href: noticeBMDec2016,
    filename: "unaudited-results-dec2016-17.2.17.pdf",
  },
  {
    title: "unaudited results 30.06.2016",
    href: noticeBMJune2016,
    filename: "OASIS_ notice_BM_ unaudited results_30.06.2016.pdf",
  },
  {
    title: "Unaudited Results Dec 31,2015",
    href: noticeBMDec2015,
    filename: "unaudited-results-dec-31-2015.pdf",
  },
  {
    title: "Newspaper Notice-BM for audited results 310316",
    href: noticeBMNewspaper2016,
    filename: "Newspaper-Notice-BM.pdf",
  },
  {
    title: "Oasis notice for BM unaudited results sept-2016",
    href: noticeBMSept2016,
    filename: "Oasis-notice-for-BM-unaudited-results-sept-2016.pdf",
  },
  {
    title: "Notice",
    href: noticeBMJune2017,
    filename: "Oasis9x8cm2ndjune17.pdf",
  },
  {
    title: "BM-Intimation",
    href: noticeBMIntimation,
    filename: "BM-Intimation.pdf",
  },
];

function BoardMeetingsNoticesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Corporate</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Board Meetings Notices
              </h1>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Access and download notice documents of the Board Meetings of Oasis Securities Limited.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <table className="w-full border-collapse text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold uppercase tracking-wide">
                      Notice Title
                    </th>
                    <th scope="col" className="w-48 px-5 py-4 text-sm font-semibold uppercase tracking-wide text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {notices.map((notice) => (
                    <tr key={notice.title} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-slate-400 shrink-0" />
                          <span className="text-sm font-semibold text-slate-800 leading-snug">
                            {notice.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <a
                          href={notice.href}
                          download={notice.filename}
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
