import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Download, FileText, Search } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// Asset imports
import np1 from "@/assets/Newspaper Publications/Oasis_published_unaudited fin results_30.09.2023_ML_09.11.2023.pdf";
import np2 from "@/assets/Newspaper Publications/Oasis_published_unaudited fin results_30.09.2023_FE_09.11.2023.pdf";
import np3 from "@/assets/Newspaper Publications/Oasis_publishing_Unaudited_fin_results_30.06.2023_FE_12.08.2023.pdf";
import np4 from "@/assets/Newspaper Publications/Oasis_publishing_unaudited_fin_results_30.06.2023_ML_12.08.2023.pdf";
import np5 from "@/assets/Newspaper Publications/ML_page 3_post_dispatch_27-8-2023.pdf";
import np6 from "@/assets/Newspaper Publications/FE_Mumbai_page 2_post_dispatch_27-8-2023.pdf";
import np7 from "@/assets/Newspaper Publications/ML_page 3_pre_dispatch_22-08-2023.pdf";
import np8 from "@/assets/Newspaper Publications/FE_Mumbai_page-16_pre_dispatch_22-08-2023.pdf";
import np9 from "@/assets/Newspaper Publications/Oasis Sec Ltd_publication_audited financial results_31.03.2023.pdf";
import np10 from "@/assets/Newspaper Publications/Oasis_published _unaudited fin results_qtr ended 31.12.2022.pdf";
import np11 from "@/assets/Newspaper Publications/Oasis_published _unaudited fin results_qtr and half year ended 30.09.2022.pdf";
import np12 from "@/assets/Newspaper Publications/PA-Oasis_Securities_Limited.pdf";
import np13 from "@/assets/Newspaper Publications/Oasis_FE_page_14_(26.8.2022)_after_despatch_of_AR.pdf";
import np14 from "@/assets/Newspaper Publications/Oasis_ML_page_5_(26-08-2022)_after_despatch_of_AR.pdf";
import np15 from "@/assets/Newspaper Publications/Oasis_FE_page_10_(19-08-2022).pdf";
import np16 from "@/assets/Newspaper Publications/Oasis _ML_page_3_(19-08-2022).pdf";
import np17 from "@/assets/Newspaper Publications/Oasis Sec Ltd_newspaper clipping_unaudited financial results_30.06.2022.pdf";
import np18 from "@/assets/Newspaper Publications/Oasis Sec Ltd_newspaper publication_Audited financial results 31.03.2022.pdf";
import np19 from "@/assets/Newspaper Publications/Fin results Newspaper publ 31.12.2021.pdf";
import np20 from "@/assets/Newspaper Publications/Fin results Newspaper publ 30.09.2021.pdf";
import np21 from "@/assets/Newspaper Publications/Notice Newspaper publ 30.06.2021.pdf";
import np22 from "@/assets/Newspaper Publications/Audited Fin results Newspaper publ 31.03.2021.pdf";
import np23 from "@/assets/Newspaper Publications/Oasis_published_unaudited fin results_31.12.2023_FE_25.01.2024.pdf";
import np24 from "@/assets/Newspaper Publications/Oasis_published_unaudited fin results_31.12.2023_ML_25.01.2024.pdf";
import np25 from "@/assets/Newspaper Publications/Unaudited financial results_publication_qtr ended_30.06.2024.pdf";
import np26 from "@/assets/Newspaper Publications/Audited financial results_publication_31.03.2024.pdf";
import np27 from "@/assets/Newspaper Publications/NEWSPAPER PUBLICATION_25.08.2024.pdf";
import np28 from "@/assets/Newspaper Publications/Newspaper Publication_29.08.2024.pdf";
import np29 from "@/assets/Newspaper Publications/newspaper-publication-25.08.2024.pdf";
import np30 from "@/assets/Newspaper Publications/newspaper-publication-29.08.2024.pdf";
import np31 from "@/assets/Newspaper Publications/newspaper-advertisement.pdf";
import np32 from "@/assets/Newspaper Publications/NEWSPAPER PUBLICAITON_SEPTEMBER 2025.pdf";
import np33 from "@/assets/Newspaper Publications/Newspaper Publication_DECEMBER 2024.pdf";
import np34 from "@/assets/Newspaper Publications/NEWSPAPER PUBLICATION_DECEMBER 2025.pdf";
import np35 from "@/assets/Newspaper Publications/Newspaper Publication_JUNE 2025.pdf";
import np36 from "@/assets/Newspaper Publications/Newspaper Publication_MARCH 2025.pdf";

export const Route = createFileRoute("/newspaper-publications")({
  component: NewspaperPublicationsPage,
});

const publications = [
  { title: "Oasis publishing unaudited fin results 30.09.2023 ML 09.11.2023", href: np1, filename: "Oasis_published_unaudited fin results_30.09.2023_ML_09.11.2023.pdf" },
  { title: "Oasis published unaudited fin results 30.09.2023 FE 09.11.2023", href: np2, filename: "Oasis_published_unaudited fin results_30.09.2023_FE_09.11.2023.pdf" },
  { title: "Oasis publishing unaudited fin results 30.06.2023 FE 12.08.2023", href: np3, filename: "Oasis_publishing_Unaudited_fin_results_30.06.2023_FE_12.08.2023.pdf" },
  { title: "Oasis publishing unaudited fin results 30.06.2023 ML 12.08.2023", href: np4, filename: "Oasis_publishing_unaudited_fin_results_30.06.2023_ML_12.08.2023.pdf" },
  { title: "ML page 3 post dispatch 27-8-2023", href: np5, filename: "ML_page 3_post_dispatch_27-8-2023.pdf" },
  { title: "FE Mumbai page 2 post dispatch 27-8-2023", href: np6, filename: "FE_Mumbai_page 2_post_dispatch_27-8-2023.pdf" },
  { title: "ML page 3 pre dispatch 22-08-2023", href: np7, filename: "ML_page 3_pre_dispatch_22-08-2023.pdf" },
  { title: "FE Mumbai page-16 pre dispatch 22-08-2023", href: np8, filename: "FE_Mumbai_page-16_pre_dispatch_22-08-2023.pdf" },
  { title: "Oasis Sec Ltd_publication_audited financial results_31.03.2023", href: np9, filename: "Oasis Sec Ltd_publication_audited financial results_31.03.2023.pdf" },
  { title: "Oasis published unaudited fin results qtr ended 31.12.2022", href: np10, filename: "Oasis_published _unaudited fin results_qtr ended 31.12.2022.pdf" },
  { title: "Oasis published unaudited fin results qtr and half year ended 30.09.2022", href: np11, filename: "Oasis_published _unaudited fin results_qtr and half year ended 30.09.2022.pdf" },
  { title: "Fin results Newspaper publ 30.09.2022", href: np12, filename: "PA-Oasis_Securities_Limited.pdf" },
  { title: "Oasis FE page 14 (26.8.2022) after despatch of AR", href: np13, filename: "Oasis_FE_page_14_(26.8.2022)_after_despatch_of_AR.pdf" },
  { title: "Oasis ML page 5 (26-08-2022) after despatch of AR", href: np14, filename: "Oasis_ML_page_5_(26-08-2022)_after_despatch_of_AR.pdf" },
  { title: "Oasis FE page 10 (19-08-2022)", href: np15, filename: "Oasis_FE_page_10_(19-08-2022).pdf" },
  { title: "Oasis ML page 3 (19-08-2022)", href: np16, filename: "Oasis _ML_page_3_(19-08-2022).pdf" },
  { title: "Oasis Sec Ltd Newspaper clipping unaudited financial results 30.06.2022", href: np17, filename: "Oasis Sec Ltd_newspaper clipping_unaudited financial results_30.06.2022.pdf" },
  { title: "Oasis Sec Ltd Newspaper publication Audited financial results 31.03.2022", href: np18, filename: "Oasis Sec Ltd_newspaper publication_Audited financial results 31.03.2022.pdf" },
  { title: "Fin results Newspaper publ 31.12.2021", href: np19, filename: "Fin results Newspaper publ 31.12.2021.pdf" },
  { title: "Fin results Newspaper publ 30.09.2021", href: np20, filename: "Fin results Newspaper publ 30.09.2021.pdf" },
  { title: "Notice Newspaper publ 30.06.2021", href: np21, filename: "Notice Newspaper publ 30.06.2021.pdf" },
  { title: "Audited Fin results Newspaper publ 31.03.2021", href: np22, filename: "Audited Fin results Newspaper publ 31.03.2021.pdf" },
  { title: "Oasis_published_unaudited fin results_31.12.2023_FE_25.01.2024", href: np23, filename: "Oasis_published_unaudited fin results_31.12.2023_FE_25.01.2024.pdf" },
  { title: "Oasis_published_unaudited fin results_31.12.2023_ML_25.01.2024", href: np24, filename: "Oasis_published_unaudited fin results_31.12.2023_ML_25.01.2024.pdf" },
  { title: "Unaudited financial results publication qtr ended 30.06.2024", href: np25, filename: "Unaudited financial results_publication_qtr ended_30.06.2024.pdf" },
  { title: "Audited financial results publication 31.03.2024", href: np26, filename: "Audited financial results_publication_31.03.2024.pdf" },
  { title: "Notice of Pre Adcertisement dated 25.08.2024", href: np27, filename: "NEWSPAPER PUBLICATION_25.08.2024.pdf" },
  { title: "Notice of Post Adcertisement dated 29.08.2024", href: np28, filename: "Newspaper Publication_29.08.2024.pdf" },
  { title: "Notice of Newspaper Publication Date 25.08.2024", href: np29, filename: "newspaper-publication-25.08.2024.pdf" },
  { title: "Notice of Newspaper Publication Date 29.08.2024", href: np30, filename: "newspaper-publication-29.08.2024.pdf" },
  { title: "Notice of Newspaper Advertisement Date 07.11.2024", href: np31, filename: "newspaper-advertisement.pdf" },
  { title: "NEWSPAPER PUBLICAITON SEPTEMBER 2025", href: np32, filename: "NEWSPAPER PUBLICAITON_SEPTEMBER 2025.pdf" },
  { title: "Newspaper Publication DECEMBER 2024", href: np33, filename: "Newspaper Publication_DECEMBER 2024.pdf" },
  { title: "Newspaper Publication DECEMBER 2025", href: np34, filename: "NEWSPAPER PUBLICATION_DECEMBER 2025.pdf" },
  { title: "Newspaper Publication JUNE 2025", href: np35, filename: "Newspaper Publication_JUNE 2025.pdf" },
  { title: "Newspaper Publication MARCH 2025", href: np36, filename: "Newspaper Publication_MARCH 2025.pdf" },
];

function NewspaperPublicationsPage() {
  const [search, setSearch] = useState("");

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) =>
      pub.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Corporate</p>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Newspaper Publications
                </h1>
                <p className="mt-2 text-slate-600 text-sm sm:text-base">
                  Browse and download official newspaper publications and media release notices of Oasis Securities Limited.
                </p>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative mb-6">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search publications by title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 placeholder-slate-400"
              />
            </div>

            {/* List Layout */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden divide-y divide-slate-100">
              {filteredPublications.length > 0 ? (
                filteredPublications.map((pub) => (
                  <a
                    key={pub.title}
                    href={pub.href}
                    download={pub.filename}
                    className="flex items-center justify-between gap-4 p-4 hover:bg-slate-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 group-hover:bg-slate-200/80 group-hover:text-slate-800 transition-colors">
                        <FileText className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 leading-snug group-hover:text-slate-900 group-hover:underline transition-colors">
                        {pub.title}
                      </span>
                    </div>
                    <div className="h-8 w-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-slate-900 group-hover:bg-white group-hover:border-slate-300 shrink-0 transition-colors shadow-sm">
                      <Download className="h-4 w-4" />
                    </div>
                  </a>
                ))
              ) : (
                <div className="p-8 text-center text-sm text-slate-500 font-medium">
                  No newspaper publications found matching your search.
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
