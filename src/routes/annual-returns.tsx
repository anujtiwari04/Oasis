import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// Asset imports
import mgt2022 from "@/assets/MGT-7/MGT_7 OASIS 31322 signed.pdf";
import mgt2021 from "@/assets/MGT-7/MGT-7-3132021-Oasis certified.pdf";
import mgt2020 from "@/assets/MGT-7/OASIS MGT-7- 2020.pdf";
import mgt2018 from "@/assets/MGT-7/Form MGT-7 -2018.signed.pdf";
import mgt2017 from "@/assets/MGT-7/Form_MGT-7 Oasis 31.03.2017 - Signed.pdf";
import formMgt7_25 from "@/assets/Forms/MGT-7_2025.pdf";
import formMgt7_23_24 from "@/assets/Forms/FORM MGT7 (2023-24).pdf";

export const Route = createFileRoute("/annual-returns")({
  component: AnnualReturnsPage,
});

const returns = [
  {
    year: "2024-25",
    title: "Annual Return MGT-7 (F.Y. 2024-25)",
    href: formMgt7_25,
    filename: "MGT-7_2025.pdf",
  },
  {
    year: "2023-24",
    title: "Annual Return MGT-7 (F.Y. 2023-24)",
    href: formMgt7_23_24,
    filename: "FORM MGT7 (2023-24).pdf",
  },
  {
    year: "2021-22",
    title: "Annual Return MGT-7 (F.Y. 2021-22)",
    href: mgt2022,
    filename: "MGT_7 OASIS 31322 signed.pdf",
  },
  {
    year: "2020-21",
    title: "Annual Return MGT-7 (F.Y. 2020-21)",
    href: mgt2021,
    filename: "MGT-7-3132021-Oasis certified.pdf",
  },
  {
    year: "2019-20",
    title: "Annual Return MGT-7 (F.Y. 2019-20)",
    href: mgt2020,
    filename: "OASIS MGT-7- 2020.pdf",
  },
  {
    year: "2017-18",
    title: "Annual Return MGT-7 (F.Y. 2017-18)",
    href: mgt2018,
    filename: "Form MGT-7 -2018.signed.pdf",
  },
  {
    year: "2016-17",
    title: "Annual Return MGT-7 (F.Y. 2016-17)",
    href: mgt2017,
    filename: "Form_MGT-7 Oasis 31.03.2017 - Signed.pdf",
  },
];

function AnnualReturnsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Corporate</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Annual Returns (Form MGT-7)
              </h1>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Access and download Annual Return (Form MGT-7) filings of Oasis Securities Limited.
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
                  {returns.map((ret) => (
                    <tr key={ret.year} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">
                        {ret.year}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-slate-400 shrink-0" />
                          <span className="text-sm font-semibold text-slate-800 leading-snug">
                            {ret.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <a
                          href={ret.href}
                          download={ret.filename}
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
