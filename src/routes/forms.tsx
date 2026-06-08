import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// Asset imports
import formIsr1 from "@/assets/Forms/Form_ISR_1_Form_for_updation_of_KYC_details.pdf";
import formIsr2 from "@/assets/Forms/Form_ISR_2_Specimen_signature.pdf";
import formIsr3 from "@/assets/Forms/Form_ISR_3_Declaration_to_Opting_out_Nomination.pdf";
import formSh13 from "@/assets/Forms/Form_SH_13_Nomination_Form.pdf";
import formSh14_cancel from "@/assets/Forms/Form_SH_14_Cancellation_of_Nomination.pdf";
import formSh14_req from "@/assets/Forms/Format of request letter for change of address.pdf";
import formSh14_dup from "@/assets/Forms/Duplicate shares issuance process.pdf";
import formMoa from "@/assets/Forms/MOA.pdf";
import formAoa from "@/assets/Forms/AOA.pdf";
import formMgt7_23_24 from "@/assets/Forms/FORM MGT7 (2023-24).pdf";
import formMgt7_25 from "@/assets/Forms/MGT-7_2025.pdf";

export const Route = createFileRoute("/forms")({
  component: FormsPage,
});

const forms = [
  {
    title: "Form_ISR_1_Form_for_updation_of_KYC_details",
    href: formIsr1,
    filename: "Form_ISR_1_Form_for_updation_of_KYC_details.pdf",
  },
  {
    title: "Form_ISR_2_Specimen_signature",
    href: formIsr2,
    filename: "Form_ISR_2_Specimen_signature.pdf",
  },
  {
    title: "Form_ISR_3_Declaration_to_Opting_out_Nomination",
    href: formIsr3,
    filename: "Form_ISR_3_Declaration_to_Opting_out_Nomination.pdf",
  },
  {
    title: "Form_SH_13_Nomination_Form",
    href: formSh13,
    filename: "Form_SH_13_Nomination_Form.pdf",
  },
  {
    title: "Form_SH_14_Cancellation_of_Nomination",
    href: formSh14_cancel,
    filename: "Form_SH_14_Cancellation_of_Nomination.pdf",
  },
  {
    title: "Form_SH_14 Request letter",
    href: formSh14_req,
    filename: "Format of request letter for change of address.pdf",
  },
  {
    title: "Form_SH_14_Duplicate_shares",
    href: formSh14_dup,
    filename: "Duplicate shares issuance process.pdf",
  },
  {
    title: "Copy of MOA",
    href: formMoa,
    filename: "MOA.pdf",
  },
  {
    title: "Copy of AOA",
    href: formAoa,
    filename: "AOA.pdf",
  },
  {
    title: "FORM MGT7 (2023-24)",
    href: formMgt7_23_24,
    filename: "FORM MGT7 (2023-24).pdf",
  },
  {
    title: "MGT-7_2025",
    href: formMgt7_25,
    filename: "MGT-7_2025.pdf",
  },
  {
    title: "Annual Reports",
    href: "/annual-returns",
    isRedirect: true,
  },
];

function FormsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Corporate</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Forms
              </h1>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Access and download official forms and declaration documents of Oasis Securities Limited.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <table className="w-full border-collapse text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold uppercase tracking-wide">
                      Form Title
                    </th>
                    <th scope="col" className="w-48 px-5 py-4 text-sm font-semibold uppercase tracking-wide text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {forms.map((form) => (
                    <tr key={form.title} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-slate-400 shrink-0" />
                          <span className="text-sm font-semibold text-slate-800 leading-snug">
                            {form.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right">
                        {form.isRedirect ? (
                          <Link
                            to={form.href}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                          >
                            View
                          </Link>
                        ) : (
                          <a
                            href={form.href}
                            download={form.filename}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                          >
                            <Download className="h-3.5 w-3.5" aria-hidden="true" />
                            Download / View PDF
                          </a>
                        )}
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
