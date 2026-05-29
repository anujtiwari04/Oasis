import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// Asset imports
import policyMaterialSubsidiary from "@/assets/POLICY ON DETERMINING MATERIAL SUBSDIARY.pdf";
import policyRelatedPartyTransactions from "@/assets/POLICY ON DETERMINING RELATED PARTY TRANSACTIONS.pdf";
import policyGrievanceRedressal from "@/assets/Grievance Redressal Policy_13112025.pdf";
import policyIndependentDirectors from "@/assets/Terms-&-Conditions_Appointment-of-Independent-Directors.pdf";
import policyArchival from "@/assets/Archival-Policy.pdf";
import policyMaterialityEvents from "@/assets/Policy-on-Determination-of-Materiality-of-events-or-information.pdf";
import policyFairPractices from "@/assets/FAIR PRACTICES CODE.pdf";
import policyPmlaLiterature from "@/assets/ADDITIONAL LITERATURE FOR AML REQUIRMENTS.pdf";
import policyCriteriaSelection from "@/assets/Criteria for selection of candidates for Senior Mgmt and Members on Board of Directors.pdf";
import policyEvaluationDirectors from "@/assets/Evaluation of Directors.pdf";
import policyFrameworkInsiderTrading from "@/assets/Framework to avoid insider trading.pdf";
import policyBoardDiversity from "@/assets/Policy on Board Diversity of the Company.pdf";
import policyRemuneration from "@/assets/Remuneration Policy.pdf";
import policyRiskManagement from "@/assets/Risk Management Policy.pdf";
import policySrMgmtSelection from "@/assets/Sr Mgmt and BoD Selection criteria.pdf";
import policyWhistleBlower from "@/assets/Whistle blower policy (1).pdf";
import policyNewInsiderTradingCode from "@/assets/New-Insider-Trading-Code-of-Conduct-29.05.2015.pdf";

export const Route = createFileRoute("/policies")({
  component: PoliciesPage,
});

const policies = [
  {
    title: "POLICY ON DETERMINING MATERIAL SUBSIDIARY",
    href: policyMaterialSubsidiary,
    filename: "POLICY ON DETERMINING MATERIAL SUBSDIARY.pdf",
  },
  {
    title: "POLICY ON DETERMINING RELATED PARTY TRANSACTIONS",
    href: policyRelatedPartyTransactions,
    filename: "POLICY ON DETERMINING RELATED PARTY TRANSACTIONS.pdf",
  },
  {
    title: "Grievance Redressal Policy",
    href: policyGrievanceRedressal,
    filename: "Grievance Redressal Policy_13112025.pdf",
  },
  {
    title: "Terms & Conditions Appointment of Independent Directors",
    href: policyIndependentDirectors,
    filename: "Terms-&-Conditions_Appointment-of-Independent-Directors.pdf",
  },
  {
    title: "Archival Policy",
    href: policyArchival,
    filename: "Archival-Policy.pdf",
  },
  {
    title: "Policy on Determination of Materiality of events or information",
    href: policyMaterialityEvents,
    filename: "Policy-on-Determination-of-Materiality-of-events-or-information.pdf",
  },
  {
    title: "Fair Practices Code",
    href: policyFairPractices,
    filename: "FAIR PRACTICES CODE.pdf",
  },
  {
    title: "Literature for PMLA requirements",
    href: policyPmlaLiterature,
    filename: "ADDITIONAL LITERATURE FOR AML REQUIRMENTS.pdf",
  },
  {
    title: "Criteria for selection of candidates for Senior Mgmt and Members on Board of Directors",
    href: policyCriteriaSelection,
    filename: "Criteria for selection of candidates for Senior Mgmt and Members on Board of Directors.pdf",
  },
  {
    title: "Evaluation of Directors",
    href: policyEvaluationDirectors,
    filename: "Evaluation of Directors.pdf",
  },
  {
    title: "Framework to avoid insider trading",
    href: policyFrameworkInsiderTrading,
    filename: "Framework to avoid insider trading.pdf",
  },
  {
    title: "Policy on Board Diversity of the Company",
    href: policyBoardDiversity,
    filename: "Policy on Board Diversity of the Company.pdf",
  },
  {
    title: "Remuneration Policy",
    href: policyRemuneration,
    filename: "Remuneration Policy.pdf",
  },
  {
    title: "Risk Management Policy",
    href: policyRiskManagement,
    filename: "Risk Management Policy.pdf",
  },
  {
    title: "Sr Mgmt and BoD Selection criteria",
    href: policySrMgmtSelection,
    filename: "Sr Mgmt and BoD Selection criteria.pdf",
  },
  {
    title: "Whistle blower policy",
    href: policyWhistleBlower,
    filename: "Whistle blower policy (1).pdf",
  },
  {
    title: "New Insider Trading Code of Conduct-29.05.2015",
    href: policyNewInsiderTradingCode,
    filename: "New-Insider-Trading-Code-of-Conduct-29.05.2015.pdf",
  },
];

function PoliciesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Corporate</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Policies
              </h1>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Access and download official policy documents and compliance guidelines of Oasis Securities Limited.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <table className="w-full border-collapse text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold uppercase tracking-wide">
                      Policy Title
                    </th>
                    <th scope="col" className="w-40 px-5 py-4 text-sm font-semibold uppercase tracking-wide text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {policies.map((policy) => (
                    <tr key={policy.title} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-slate-400 shrink-0" />
                          <span className="text-sm font-semibold text-slate-800 leading-snug">
                            {policy.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <a
                          href={policy.href}
                          download={policy.filename}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                        >
                          <Download className="h-3.5 w-3.5" aria-hidden="true" />
                          Download
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
