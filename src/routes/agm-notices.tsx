import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// Asset imports
import notice2014 from "@/assets/OASIS-AGM Notice 2013-14.pdf";
import notice2015 from "@/assets/OASIS AGM NOTICE 2014-15.pdf";
import notice2016 from "@/assets/OasisNotice-of-AGM_2015-16.pdf";
import notice2017 from "@/assets/OASIS-AGM-NOTICE_2016-17.pdf";
import notice2018 from "@/assets/OASIS-AGM-NOTICE_2017-18.pdf";
import notice2019 from "@/assets/OASIS-2018-2019-AGM-NOTICE.pdf";
import notice2020 from "@/assets/Oasis - Notice of AGM_2020.pdf";
import notice2021 from "@/assets/Oasis-Notice-of-AGM-2020-21.pdf";
import notice2022 from "@/assets/Oasis_Sec_Ltd_Notice_of_AGM_2021-2022.pdf";
import notice2023 from "@/assets/OASIS-Notice-of-AGM-2022-23.pdf";
import notice2024 from "@/assets/OASIS-Notice-of-AGM-2023-24.pdf";
import notice2025 from "@/assets/AGM-notice-24-25.pdf";
import noticeOfEGM from "@/assets/Notice of EGM.pdf";

export const Route = createFileRoute("/agm-notices")({
  component: AGMNoticesPage,
});

const notices = [
  {
    year: "EOGM",
    title: "Notice of EGM",
    href: noticeOfEGM,
    filename: "Notice of EGM.pdf",
  },
  {
    year: "2024-25",
    title: "AGM Notice for Annual General Meeting 2024-25",
    href: notice2025,
    filename: "AGM-notice-24-25.pdf",
  },
  {
    year: "2023-24",
    title: "AGM Notice for Annual General Meeting 2023-24",
    href: notice2024,
    filename: "OASIS-Notice-of-AGM-2023-24.pdf",
  },
  {
    year: "2022-23",
    title: "AGM Notice for Annual General Meeting 2022-23",
    href: notice2023,
    filename: "OASIS-Notice-of-AGM-2022-23.pdf",
  },
  {
    year: "2021-22",
    title: "AGM Notice for Annual General Meeting 2021-22",
    href: notice2022,
    filename: "Oasis_Sec_Ltd_Notice_of_AGM_2021-2022.pdf",
  },
  {
    year: "2020-21",
    title: "AGM Notice for Annual General Meeting 2020-21",
    href: notice2021,
    filename: "Oasis-Notice-of-AGM-2020-21.pdf",
  },
  {
    year: "2019-20",
    title: "AGM Notice for Annual General Meeting 2019-20",
    href: notice2020,
    filename: "Oasis - Notice of AGM_2020.pdf",
  },
  {
    year: "2018-19",
    title: "AGM Notice for Annual General Meeting 2018-19",
    href: notice2019,
    filename: "OASIS-2018-2019-AGM-NOTICE.pdf",
  },
  {
    year: "2017-18",
    title: "AGM Notice for Annual General Meeting 2017-18",
    href: notice2018,
    filename: "OASIS-AGM-NOTICE_2017-18.pdf",
  },
  {
    year: "2016-17",
    title: "AGM Notice for Annual General Meeting 2016-17",
    href: notice2017,
    filename: "OASIS-AGM-NOTICE_2016-17.pdf",
  },
  {
    year: "2015-16",
    title: "AGM Notice for Annual General Meeting 2015-16",
    href: notice2016,
    filename: "OasisNotice-of-AGM_2015-16.pdf",
  },
  {
    year: "2014-15",
    title: "AGM Notice for Annual General Meeting 2014-15",
    href: notice2015,
    filename: "OASIS AGM NOTICE 2014-15.pdf",
  },
  {
    year: "2013-14",
    title: "AGM Notice for Annual General Meeting 2013-14",
    href: notice2014,
    filename: "OASIS-AGM Notice 2013-14.pdf",
  },
];

function AGMNoticesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Corporate</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Notices & Circulars
              </h1>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Access and download notice documents of the Annual General Meetings (AGM) and Extra Ordinary General Meetings (EOGM) of Oasis Securities Limited.
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
                  {notices.map((notice) => (
                    <tr key={notice.year} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">
                        {notice.year}
                      </td>
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
