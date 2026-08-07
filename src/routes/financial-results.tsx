import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// Asset imports
import resJune2026 from "@/assets/FINANCIAL RESULT 30th JUNE 2026.pdf";
import resDec2025 from "@/assets/FINANCIAL-RESULTS_DEC2025.pdf";
import resResults2026 from "@/assets/FinancialResults2026.pdf";
import resResult from "@/assets/FINANCIALS RESULT.pdf";
import resResults2025 from "@/assets/financial-results-2025.pdf";
import resUnauditedSept2023 from "@/assets/Oasis Sec Ltd_unaudited fin results_qtr and half year_Sept 2023.pdf";
import resUnauditedJune2024 from "@/assets/Unaudited_June 2024.pdf";
import resAuditedMar2024 from "@/assets/Audited_Mar 2024.pdf";
import resSep2024 from "@/assets/financial-result-sep-2024.pdf";
import resOutcomeMar2025 from "@/assets/outcome-of-bm-31.03.2025.pdf";
import resAuditedMar2018 from "@/assets/Audited-Financial-Results_31.03.2018.pdf";
import resAuditedMar2019 from "@/assets/Audited-Financial-Results_31.03.2019.pdf";
import resAuditedMar2020 from "@/assets/Oasis Unaudited results June 2020.pdf";
import resAuditedMar2021 from "@/assets/Oasis-unaudited-financial-results_June-2021.pdf";
import resAuditedMar2022 from "@/assets/Audited_financial_results_31.03.2022.pdf";
import resAuditedMar2023 from "@/assets/Audited Financial results_31.03.2023.pdf";
import resUnauditedJune2018 from "@/assets/unaudited-financial-results_30.06.2018.pdf";
import resUnauditedJune2019 from "@/assets/Oasis Unaudited results June 2019.pdf";
import resUnauditedJune2020 from "@/assets/Oasis Unaudited results June 2020 (1).pdf";
import resUnauditedJune2021 from "@/assets/Oasis-unaudited-financial-results_June-2021 (1).pdf";
import resUnauditedJune2022 from "@/assets/Unaudited financial results_30.06.2022.pdf";
import resUnauditedJune2023 from "@/assets/Oasis_unaudited_fin_results_30.06.2023.pdf";
import resUnauditedSep2018 from "@/assets/Unaudited-Financial Results_30.09.2018.pdf";
import resUnauditedSep2019 from "@/assets/Oasis_ Unaudited results_Sept 2019.pdf";
import resUnauditedSep2020 from "@/assets/oasis - unaudited fin results sept 2020.pdf";
import resUnauditedSep2021 from "@/assets/Oasis _unaudited fin results_Sept 2021.pdf";
import resUnauditedDec2018 from "@/assets/Unaudited-Financial-Results_31.12.2018.pdf";
import resUnauditedDec2019 from "@/assets/Oasis Unaudited results _Dec 2019.pdf";
import resUnauditedDec2020 from "@/assets/Oasis -unaudited fin results_Dec 2020.pdf";
import resUnauditedDec2021 from "@/assets/Oasis Sec ltd- unaudited results _ Dec 2021.pdf";
import resUnauditedDec2022 from "@/assets/Oasis_unaudited_fin_results_31.12.2022.pdf";
import resUnauditedSep2022 from "@/assets/Oasis_unaudited_fin_results_30.09.2022.pdf";
import resAudited31032013 from "@/assets/Audited_31.03.2013.pdf";
import resAudited31032014 from "@/assets/Audited_31.03.2014.pdf";
import resAudited31032015 from "@/assets/Audited_31.03.2015.pdf";
import resAuditedMarch2016 from "@/assets/Audited-March2016.pdf";
import resAuditedMarch2017 from "@/assets/March2017-2ndjune17.pdf";
import resUnauditedMarch2013 from "@/assets/Audited_31.03.2013 (1).pdf";
import resUnauditedMarch2014 from "@/assets/Audited_31.03.2014 (1).pdf";
import resUnauditedJune2015 from "@/assets/Audited_31.03.2015 (1).pdf";
import resUnauditedJune2016 from "@/assets/Audited-March2016 (1).pdf";
import resUnauditedJune2017 from "@/assets/March2017-2ndjune17 (1).pdf";
import resUnauditedJune2013 from "@/assets/Unaudited_June 2013.pdf";
import resUnauditedJune2014 from "@/assets/Unaudited_June 2014.pdf";
import resUnauditedSept2015 from "@/assets/oasis-sec-ltd-unaudited-sept-2015.pdf";
import resUnauditedSept2016 from "@/assets/Sept2016-23dec16.pdf";
import resUnauditedSept2017 from "@/assets/Unaudited-Financial Results_30.09.2017.pdf";
import resUnauditedSept2013 from "@/assets/Unaudited_June 2013 (1).pdf";
import resUnauditedSept2014 from "@/assets/Unaudited_Sept 2014.pdf";
import resUnauditedDec2015 from "@/assets/oasis-dec-2015-quarterly-result-for-publishing.pdf";
import resQtrlyUnauditedDec2016 from "@/assets/Oasis-Sec Ltd-Dec2016-Qtrly-Result-or-Publishing17.2.17.pdf";
import resUnauditedDec2017 from "@/assets/Unaudited-Financial-Results_31.12.2017.pdf";
import resUnauditedDec2013 from "@/assets/Unaudited_Dec 2013.pdf";
import resUnauditedDec2014 from "@/assets/Unaudited_Dec 2014.pdf";
import resUnauditedDec2023 from "@/assets/Oasis Sec Ltd_unaudited fin results_31.12.2023.pdf";

export const Route = createFileRoute("/financial-results")({
  component: FinancialResultsPage,
});

const rawResults = [
  {
    title: "FINANCIAL RESULT 30th JUNE 2026",
    href: resJune2026,
    filename: "FINANCIAL RESULT 30th JUNE 2026.pdf",
    type: "unaudited",
  },
  {
    title: "Financial Results Mar 2026",
    href: resResults2026,
    filename: "FinancialResults2026.pdf",
    type: "audited",
  },
  {
    title: "Financial Result Dec 2025",
    href: resDec2025,
    filename: "FINANCIAL-RESULTS_DEC2025.pdf",
    type: "unaudited",
  },
  {
    title: "Financial Result",
    href: resResult,
    filename: "FINANCIALS RESULT.pdf",
    type: "audited",
  },
  {
    title: "Financial Results 2025",
    href: resResults2025,
    filename: "financial-results-2025.pdf",
    type: "audited",
  },
  {
    title: "Unaudited Sept 2023",
    href: resUnauditedSept2023,
    filename: "Oasis Sec Ltd_unaudited fin results_qtr and half year_Sept 2023.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited June 2024",
    href: resUnauditedJune2024,
    filename: "Unaudited_June 2024.pdf",
    type: "unaudited",
  },
  {
    title: "Audited Mar 2024",
    href: resAuditedMar2024,
    filename: "Audited_Mar 2024.pdf",
    type: "audited",
  },
  {
    title: "Financial Result Sep 2024",
    href: resSep2024,
    filename: "financial-result-sep-2024.pdf",
    type: "unaudited",
  },
  {
    title: "Outcome of BM Mar 2025",
    href: resOutcomeMar2025,
    filename: "outcome-of-bm-31.03.2025.pdf",
    type: "outcome",
  },
  {
    title: "Audited_Mar 2018",
    href: resAuditedMar2018,
    filename: "Audited-Financial-Results_31.03.2018.pdf",
    type: "audited",
  },
  {
    title: "Audited_Mar 2019",
    href: resAuditedMar2019,
    filename: "Audited-Financial-Results_31.03.2019.pdf",
    type: "audited",
  },
  {
    title: "Audited_Mar 2020",
    href: resAuditedMar2020,
    filename: "Oasis Unaudited results June 2020.pdf",
    type: "audited",
  },
  {
    title: "Audited_Mar 2021",
    href: resAuditedMar2021,
    filename: "Oasis-unaudited-financial-results_June-2021.pdf",
    type: "audited",
  },
  {
    title: "Audited_Mar 2022",
    href: resAuditedMar2022,
    filename: "Audited_financial_results_31.03.2022.pdf",
    type: "audited",
  },
  {
    title: "Audited_Mar 2023",
    href: resAuditedMar2023,
    filename: "Audited Financial results_31.03.2023.pdf",
    type: "audited",
  },
  {
    title: "Unaudited_June 2018",
    href: resUnauditedJune2018,
    filename: "unaudited-financial-results_30.06.2018.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_June 2019",
    href: resUnauditedJune2019,
    filename: "Oasis Unaudited results June 2019.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_June 2020",
    href: resUnauditedJune2020,
    filename: "Oasis Unaudited results June 2020 (1).pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_June 2021",
    href: resUnauditedJune2021,
    filename: "Oasis-unaudited-financial-results_June-2021 (1).pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_June 2022",
    href: resUnauditedJune2022,
    filename: "Unaudited financial results_30.06.2022.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_June 2023",
    href: resUnauditedJune2023,
    filename: "Oasis_unaudited_fin_results_30.06.2023.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Sep 2018",
    href: resUnauditedSep2018,
    filename: "Unaudited-Financial Results_30.09.2018.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Sep 2019",
    href: resUnauditedSep2019,
    filename: "Oasis_ Unaudited results_Sept 2019.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Sep 2020",
    href: resUnauditedSep2020,
    filename: "oasis - unaudited fin results sept 2020.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Sep 2021",
    href: resUnauditedSep2021,
    filename: "Oasis _unaudited fin results_Sept 2021.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Dec 2018",
    href: resUnauditedDec2018,
    filename: "Unaudited-Financial-Results_31.12.2018.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Dec 2019",
    href: resUnauditedDec2019,
    filename: "Oasis Unaudited results _Dec 2019.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Dec 2020",
    href: resUnauditedDec2020,
    filename: "Oasis -unaudited fin results_Dec 2020.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Dec 2021",
    href: resUnauditedDec2021,
    filename: "Oasis Sec ltd- unaudited results _ Dec 2021.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Dec 2022",
    href: resUnauditedDec2022,
    filename: "Oasis_unaudited_fin_results_31.12.2022.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Sep 2022",
    href: resUnauditedSep2022,
    filename: "Oasis_unaudited_fin_results_30.09.2022.pdf",
    type: "unaudited",
  },
  {
    title: "Audited_31.03.2013",
    href: resAudited31032013,
    filename: "Audited_31.03.2013.pdf",
    type: "audited",
  },
  {
    title: "Audited_31.03.2014",
    href: resAudited31032014,
    filename: "Audited_31.03.2014.pdf",
    type: "audited",
  },
  {
    title: "Audited_31.03.2015",
    href: resAudited31032015,
    filename: "Audited_31.03.2015.pdf",
    type: "audited",
  },
  {
    title: "audited_March 2016",
    href: resAuditedMarch2016,
    filename: "Audited-March2016.pdf",
    type: "audited",
  },
  {
    title: "audited_March 2017",
    href: resAuditedMarch2017,
    filename: "March2017-2ndjune17.pdf",
    type: "audited",
  },
  {
    title: "Unaudited_March 2013",
    href: resUnauditedMarch2013,
    filename: "Audited_31.03.2013 (1).pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_March 2014",
    href: resUnauditedMarch2014,
    filename: "Audited_31.03.2014 (1).pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_June 2015",
    href: resUnauditedJune2015,
    filename: "Audited_31.03.2015 (1).pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_June 2016",
    href: resUnauditedJune2016,
    filename: "Audited-March2016 (1).pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_June 2017",
    href: resUnauditedJune2017,
    filename: "March2017-2ndjune17 (1).pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_June 2013",
    href: resUnauditedJune2013,
    filename: "Unaudited_June 2013.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_June 2014",
    href: resUnauditedJune2014,
    filename: "Unaudited_June 2014.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Sept 2015",
    href: resUnauditedSept2015,
    filename: "oasis-sec-ltd-unaudited-sept-2015.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Sept 2016",
    href: resUnauditedSept2016,
    filename: "Sept2016-23dec16.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Sept 2017",
    href: resUnauditedSept2017,
    filename: "Unaudited-Financial Results_30.09.2017.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Sept 2013",
    href: resUnauditedSept2013,
    filename: "Unaudited_June 2013 (1).pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Sept 2014",
    href: resUnauditedSept2014,
    filename: "Unaudited_Sept 2014.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Dec 2015",
    href: resUnauditedDec2015,
    filename: "oasis-dec-2015-quarterly-result-for-publishing.pdf",
    type: "unaudited",
  },
  {
    title: "Qtrly results Unaudited Dec 2016",
    href: resQtrlyUnauditedDec2016,
    filename: "Oasis-Sec Ltd-Dec2016-Qtrly-Result-or-Publishing17.2.17.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Dec 2017",
    href: resUnauditedDec2017,
    filename: "Unaudited-Financial-Results_31.12.2017.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Dec 2013",
    href: resUnauditedDec2013,
    filename: "Unaudited_Dec 2013.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Dec 2014",
    href: resUnauditedDec2014,
    filename: "Unaudited_Dec 2014.pdf",
    type: "unaudited",
  },
  {
    title: "Unaudited_Dec2023",
    href: resUnauditedDec2023,
    filename: "Oasis Sec Ltd_unaudited fin results_31.12.2023.pdf",
    type: "unaudited",
  },
];

function FinancialResultsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Header section */}
            <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Corporate</p>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Financial Results
                </h1>
                <p className="mt-2 text-slate-600 text-sm sm:text-base">
                  Access and download audited and unaudited financial statement reports of Oasis Securities Limited.
                </p>
              </div>
            </div>

            {/* Results Table */}
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <table className="w-full border-collapse text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold uppercase tracking-wide">
                      Document Title
                    </th>
                    <th scope="col" className="w-48 px-5 py-4 text-sm font-semibold uppercase tracking-wide text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {rawResults.map((result) => (
                    <tr key={result.title} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-slate-400 shrink-0" />
                          <span className="text-sm font-semibold text-slate-800 leading-snug">
                            {result.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <a
                          href={result.href}
                          download={result.filename}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none"
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
