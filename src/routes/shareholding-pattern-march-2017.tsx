import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/shareholding-pattern-march-2017")({
  component: March2017ShareholdingPage,
});

function March2017ShareholdingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col justify-between">
      <div>
        <Header />

        <main className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Title Block */}
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Corporate Filings</span>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                Shareholding Pattern - March 2017
              </h1>
            </div>

            {/* SECTION 1: General Information About Company */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 1: General Information About Company
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full max-w-2xl border-collapse text-sm text-left border border-slate-300" border={1}>
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300 w-1/2">Scrip code</th>
                      <td className="px-4 py-2">512489</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">Name of the company</th>
                      <td className="px-4 py-2">OASIS SECURITIES LTD</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">Whether company is SME</th>
                      <td className="px-4 py-2">No</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">Class of Security</th>
                      <td className="px-4 py-2">Equity Shares</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">Type of report</th>
                      <td className="px-4 py-2">Quarterly</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">Quarter Ended / Half year ended/Date of Report (For Prelisting / Allotment)</th>
                      <td className="px-4 py-2">31-03-2017</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">Date of allotment / extinguishment (in case Capital Restructuring selected) / Listing Date</th>
                      <td className="px-4 py-2"></td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">Shareholding pattern filed under</th>
                      <td className="px-4 py-2">Regulation 31 (1) (b)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 2: Particulars Table */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 2: Particulars Table
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full max-w-4xl border-collapse text-sm text-left border border-slate-300" border={1}>
                  <thead className="bg-slate-50 font-bold">
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 border-r border-slate-300 w-16 text-center">Sr. No.</th>
                      <th className="px-4 py-2 border-r border-slate-300">Particular</th>
                      <th className="px-4 py-2 w-24 text-center">Yes/No</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300 text-center">1</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether the Listed Entity has issued any partly paid up shares?</td>
                      <td className="px-4 py-2 text-center">No</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300 text-center">2</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether the Listed Entity has issued any Convertible Securities ?</td>
                      <td className="px-4 py-2 text-center">No</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300 text-center">3</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether the Listed Entity has issued any Warrants ?</td>
                      <td className="px-4 py-2 text-center">No</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300 text-center">4</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether the Listed Entity has any shares against which depository receipts are issued?</td>
                      <td className="px-4 py-2 text-center">No</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300 text-center">5</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether the Listed Entity has any shares in locked-in?</td>
                      <td className="px-4 py-2 text-center">No</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300 text-center">6</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether any shares held by promoters are pledge or otherwise encumbered?</td>
                      <td className="px-4 py-2 text-center">No</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">7</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether company has equity shares with differential voting rights?</td>
                      <td className="px-4 py-2 text-center">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Table I - Summary Statement (Part A) */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 3: Table I - Summary Statement holding of specified securities (Part A)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[1000px]" border={1}>
                  <thead className="bg-slate-50 font-bold text-center">
                    <tr className="border-b border-slate-300">
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-16">Category (I)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300">Category of shareholder (II)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-24">Nos. Of shareholders (III)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">No. of fully paid up equity shares held (IV)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-28">No. Of Partly paid-up equity shares held (V)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-28">No. Of shares underlying Depository Receipts (VI)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-28">Total nos. shares held (VII) = (IV)+(V)+(VI)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-36">Shareholding as a % of total no. of shares (SCRR, 1957) (VIII) As a % of (A+B+C2)</th>
                      <th colSpan={3} className="px-2 py-2 border-r border-slate-300">Number of Voting Rights held in each class of securities (IX)</th>
                      <th rowSpan={2} className="px-2 py-3">Total as a % of (A+B+C)</th>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-2 py-2 border-r border-slate-300 w-28">Class X</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-20">Class Y</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-28">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 font-bold text-center">(A)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-bold">Promoter & Promoter Group</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">10</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,078,021</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,078,021</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">58.27</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,078,021</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,078,021</td>
                      <td className="px-2 py-2 text-center font-semibold">58.27</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 font-bold text-center">(B)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-bold">Public</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">810</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">771,979</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">771,979</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">41.73</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">771,979</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">771,979</td>
                      <td className="px-2 py-2 text-center font-semibold">41.73</td>
                    </tr>
                    <tr className="border-b border-slate-300 text-slate-400">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(C)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Non Promoter- Non Public</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 text-center">-</td>
                    </tr>
                    <tr className="border-b border-slate-300 text-slate-400">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(C1)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Shares underlying DRs</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 text-center">-</td>
                    </tr>
                    <tr className="border-b border-slate-300 text-slate-400">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(C2)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Shares held by Employee Trusts</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 text-center">-</td>
                    </tr>
                    <tr className="bg-slate-100 border-b border-slate-300 font-bold">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">Total</td>
                      <td className="px-2 py-2 border-r border-slate-300">Total</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">820</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">100</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 text-center">100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Table I - Summary Statement (Part B - Conversions & Demat) */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 4: Table I - Summary Statement holding of specified securities (Part B - Conversions & Demat)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[1000px]" border={1}>
                  <thead className="bg-slate-50 font-bold text-center">
                    <tr className="border-b border-slate-300">
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-16">Category (I)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300">Category of shareholder (II)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">No. Of Shares Underlying Outstanding convertible securities (X)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">No. of Shares Underlying Outstanding Warrants (Xi)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">No. Of Shares Underlying Outstanding convertible securities and No. Of Warrants (Xi) (a)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-36">Shareholding , as a % assuming full conversion (as % of diluted share capital) (XI)=(VII)+(X) As % of (A+B+C2)</th>
                      <th colSpan={2} className="px-2 py-2 border-r border-slate-300">Number of Locked in shares (XII)</th>
                      <th colSpan={2} className="px-2 py-2 border-r border-slate-300">Number of Shares pledged or otherwise encumbered (XIII)</th>
                      <th rowSpan={2} className="px-2 py-3">Number of equity shares held in dematerialized form (XIV)</th>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-2 py-2 border-r border-slate-300 w-24">No. (a)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">As a % of total Shares held (b)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">No. (a)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">As a % of total Shares held (b)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 font-bold text-center">(A)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-bold">Promoter & Promoter Group</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">58.27</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 text-right font-semibold">1,078,021</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 font-bold text-center">(B)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-bold">Public</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">41.73</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 text-right font-semibold">671,027</td>
                    </tr>
                    <tr className="border-b border-slate-300 text-slate-400">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(C)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Non Promoter- Non Public</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 text-right">-</td>
                    </tr>
                    <tr className="border-b border-slate-300 text-slate-400">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(C1)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Shares underlying DRs</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 text-right">-</td>
                    </tr>
                    <tr className="border-b border-slate-300 text-slate-400">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(C2)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Shares held by Employee Trusts</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 text-right">-</td>
                    </tr>
                    <tr className="bg-slate-100 border-b border-slate-300 font-bold">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">Total</td>
                      <td className="px-2 py-2 border-r border-slate-300">Total</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">100</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 text-right">1,749,048</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Table II & III - Detailed Shareholding Pattern Breakdown (Part A) */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 5: Table II & III - Detailed Shareholding Pattern Breakdown (Part A)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[1000px]" border={1}>
                  <thead className="bg-slate-50 font-bold text-center">
                    <tr className="border-b border-slate-300">
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-16">Category (I)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300">Category of shareholder (II)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-24">Nos. Of shareholders (III)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">No. of fully paid up equity shares held (IV)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-28">No. Of Partly paid-up equity shares held (V)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-28">No. Of shares underlying Depository Receipts (VI)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-28">Total nos. shares held (VII) = (IV)+(V)+(VI)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-36">Shareholding as a % of total no. of shares (SCRR, 1957) (VIII) As a % of (A+B+C2)</th>
                      <th colSpan={3} className="px-2 py-2 border-r border-slate-300">Number of Voting Rights held in each class of securities (IX)</th>
                      <th rowSpan={2} className="px-2 py-3">Total as a % of (A+B+C)</th>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-2 py-2 border-r border-slate-300 w-28">Class X</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-20">Class Y</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-28">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Promoter & Promoter Group */}
                    <tr className="bg-slate-100/50 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">A</td>
                      <td colSpan={11} className="px-2 py-2">Table II - Statement showing shareholding pattern of the Promoter and Promoter Group</td>
                    </tr>
                    <tr className="font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(1)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Indian</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400">-</td>
                      <td className="px-2 py-2 text-center text-slate-400">-</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(a)</td>
                      <td className="px-2 py-2 border-r border-slate-300 pl-6">Individuals/Hindu undivided Family</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">10</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,078,021</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,078,021</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">58.27</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,078,021</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,078,021</td>
                      <td className="px-2 py-2 text-center">58.27</td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300 font-bold">Sub-Total (A)(1)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">10</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,078,021</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,078,021</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">58.27</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,078,021</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,078,021</td>
                      <td className="px-2 py-2 text-center">58.27</td>
                    </tr>
                    <tr className="text-slate-400 border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(2)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">Foreign</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 text-center">-</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300 font-bold">Total Shareholding of Promoter and Promoter Group (A)=(A)(1)+(A)(2)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">10</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,078,021</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,078,021</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">58.27</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,078,021</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,078,021</td>
                      <td className="px-2 py-2 text-center">58.27</td>
                    </tr>

                    {/* Public Shareholder */}
                    <tr className="bg-slate-100/50 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">B</td>
                      <td colSpan={11} className="px-2 py-2">Table III - Statement showing shareholding pattern of the Public shareholder</td>
                    </tr>
                    <tr className="text-slate-400 border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(1)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">Institutions</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">-</td>
                      <td className="px-2 py-2 text-center">-</td>
                    </tr>
                    <tr className="font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(3)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Non-institutions</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400">-</td>
                      <td className="px-2 py-2 text-center text-slate-400">-</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(a(i))</td>
                      <td className="px-2 py-2 border-r border-slate-300 pl-6">Individuals - i.Individual shareholders holding nominal share capital up to Rs. 2 lakhs.</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">747</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">337,952</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">337,952</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">18.27</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">337,952</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">337,952</td>
                      <td className="px-2 py-2 text-center">18.27</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(a(ii))</td>
                      <td className="px-2 py-2 border-r border-slate-300 pl-6">Individuals - ii. Individual shareholders holding nominal share capital in excess of Rs. 2 lakhs.</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">5</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">186,958</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">186,958</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">10.11</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">186,958</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">186,958</td>
                      <td className="px-2 py-2 text-center">10.11</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(e)</td>
                      <td className="px-2 py-2 border-r border-slate-300 pl-6">Any Other (specify)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">58</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">247,069</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">247,069</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">13.36</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">247,069</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">247,069</td>
                      <td className="px-2 py-2 text-center">13.36</td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300 font-bold">Sub-Total (B)(3)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">810</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">771,979</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">771,979</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">41.73</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">771,979</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">771,979</td>
                      <td className="px-2 py-2 text-center">41.73</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total Public Shareholding (B)=(B)(1)+(B)(2)+(B)(3)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">810</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">771,979</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">771,979</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">41.73</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">771,979</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">771,979</td>
                      <td className="px-2 py-2 text-center">41.73</td>
                    </tr>

                    {/* Non Promoter- Non Public */}
                    <tr className="bg-slate-100/50 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">C</td>
                      <td colSpan={11} className="px-2 py-2">Table IV - Statement showing shareholding pattern of the Non Promoter- Non Public shareholder</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300 font-bold">Total ( A+B+C2 )</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">820</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">100</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,850,000</td>
                      <td className="px-2 py-2 text-center">100</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300 font-bold">Total ( A+B+C )</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">820</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">100</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,850,000</td>
                      <td className="px-2 py-2 text-center">100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 6: Table II & III - Detailed Shareholding Pattern Breakdown (Part B - Conversions & Demat) */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 6: Table II & III - Detailed Shareholding Pattern Breakdown (Part B - Conversions & Demat)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[1000px]" border={1}>
                  <thead className="bg-slate-50 font-bold text-center">
                    <tr className="border-b border-slate-300">
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-16">Category (I)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300">Category of shareholder (II)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">No. Of Shares Underlying Outstanding convertible securities (X)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">No. of Shares Underlying Outstanding Warrants (Xi)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">No. Of Shares Underlying Outstanding convertible securities and No. Of Warrants (Xi) (a)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-36">Shareholding , as a % assuming full conversion (as % of diluted share capital) (XI)=(VII)+(X) As % of (A+B+C2)</th>
                      <th colSpan={2} className="px-2 py-2 border-r border-slate-300">Number of Locked in shares (XII)</th>
                      <th colSpan={2} className="px-2 py-2 border-r border-slate-300">Number of Shares pledged or otherwise encumbered (XIII)</th>
                      <th rowSpan={2} className="px-2 py-3">Number of equity shares held in dematerialized form (XIV)</th>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-2 py-2 border-r border-slate-300 w-24">No. (a)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">As a % of total Shares held (b)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">No. (a)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">As a % of total Shares held (b)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(a)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Individuals/Hindu undivided Family</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">58.27</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 text-right font-semibold">1,078,021</td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Sub-Total (A)(1)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">58.27</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 text-right font-semibold">1,078,021</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total Shareholding of Promoter Group (A)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">58.27</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 text-right font-semibold">1,078,021</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(a(i))</td>
                      <td className="px-2 py-2 border-r border-slate-300">Public Individual &lt;= 2L</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">18.27</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 text-right font-semibold">243,961</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(a(ii))</td>
                      <td className="px-2 py-2 border-r border-slate-300">Public Individual &gt; 2L</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">10.11</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 text-right font-semibold">186,958</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(e)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Any Other</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">13.36</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 text-right font-semibold">240,108</td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Sub-Total (B)(3)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">41.73</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 text-right font-semibold">671,027</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total Public Shareholding (B)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">41.73</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 text-right font-semibold">671,027</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total (A+B+C2)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">100</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 text-right font-semibold">1,749,048</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total (A+B+C)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">100</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400">-</td>
                      <td className="px-2 py-2 text-right font-semibold">1,749,048</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 7: Granular Entity Deep-Dive Transposed Tables */}
            <section className="space-y-8">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 7: Granular Entity Deep-Dive Transposed Tables
              </h2>

              {/* Table 7A: Individuals/Hindu undivided Family (Promoters 1 to 7) */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Table 7A: Individuals/Hindu undivided Family (Promoters 1 to 7)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[900px]" border={1}>
                    <thead className="bg-slate-50 font-bold text-center">
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 border-r border-slate-300 w-16">Searial No.</th>
                        <th className="px-2 py-2.5 border-r border-slate-300">Name</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">PAN</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Fully Paid Shares (IV)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Total Shares (VII)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">Shareholding % (VIII)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Voting Rights Class X</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">Total Voting Rights %</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">Diluted Shareholding % (XI)</th>
                        <th className="px-2 py-2.5">Demat Form Shares (XIV)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">ARCHANA BAGRI</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">ADPPB7414B</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">31,600</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">31,600</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.71</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">31,600</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.71</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.71</td>
                        <td className="px-2 py-2 text-right">31,600</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">ISHITA BAGRI</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">ALIPB8683K</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">46,450</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">46,450</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2.51</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">46,450</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2.51</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2.51</td>
                        <td className="px-2 py-2 text-right">46,450</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">3</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">STUTI ANILKUMAR BAGRI</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">ALIPB8634Q</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">46,450</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">46,450</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2.51</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">46,450</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2.51</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2.51</td>
                        <td className="px-2 py-2 text-right">46,450</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">INDRA KUMAR BAGRI HUF</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AAAHI1836A</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">30,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">30,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.62</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">30,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.62</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.62</td>
                        <td className="px-2 py-2 text-right">30,000</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">5</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">INDRA KUMAR BAGRI</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AEKPB3104N</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">743,103</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">743,103</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">40.17</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">743,103</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">40.17</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">40.17</td>
                        <td className="px-2 py-2 text-right">743,103</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">6</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">PRERIT KAMAL DAMANI</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AAAPD6320L</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">28,600</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">28,600</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.55</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">28,600</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.55</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.55</td>
                        <td className="px-2 py-2 text-right">28,600</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">7</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">ANANYA AMIT BAGRI</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">ALIPB8684Q</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">83,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">83,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4.49</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">83,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4.49</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4.49</td>
                        <td className="px-2 py-2 text-right">83,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 7B: Individuals/Hindu undivided Family (Promoters 8 to 10 & Total Column) */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Table 7B: Individuals/Hindu undivided Family (Promoters 8 to 10 & Total Column)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[900px]" border={1}>
                    <thead className="bg-slate-50 font-bold text-center">
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 border-r border-slate-300 w-16">Serial No</th>
                        <th className="px-2 py-2.5 border-r border-slate-300">Name</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">PAN</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Fully Paid Shares (IV)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Total Shares (VII)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">Shareholding % (VIII)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Voting Rights Class X</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">Total Voting Rights %</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">Diluted Shareholding % (XI)</th>
                        <th className="px-2 py-2.5">Demat Form Shares (XIV)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">8</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">SAVITRIDEVI MANGALCHAND JAJOO</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">ADVPJ7839A</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">34,500</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">34,500</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.86</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">34,500</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.86</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.86</td>
                        <td className="px-2 py-2 text-right">34,500</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">9</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">AMITKUMAR INDRAKUMAR BAGRI</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AEDPB2552D</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.03</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.03</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.03</td>
                        <td className="px-2 py-2 text-right">633</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">10</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">ANIL KUMAR BAGRI</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">ADPPB7746L</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">33,685</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">33,685</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.82</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">33,685</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.82</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.82</td>
                        <td className="px-2 py-2 text-right">33,685</td>
                      </tr>
                      <tr className="bg-slate-100 font-bold border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">Total</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-bold">Total</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,078,021</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,078,021</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">58.27</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,078,021</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">58.27</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">58.27</td>
                        <td className="px-2 py-2 text-right font-semibold">1,078,021</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 7C: Public Capital holding in excess of Rs. 2 Lakhs */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Table 7C: Public Capital holding in excess of Rs. 2 Lakhs
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[900px]" border={1}>
                    <thead className="bg-slate-50 font-bold text-center">
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 border-r border-slate-300 w-16">Serial No</th>
                        <th className="px-2 py-2.5 border-r border-slate-300">Name</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">PAN</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Fully Paid Shares (IV)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Total Shares (VII)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">Shareholding % (VIII)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Voting Rights Class X</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">Total Voting Rights %</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">Diluted Shareholding % (XI)</th>
                        <th className="px-2 py-2.5">Demat Form Shares (XIV)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">RANGNATH SOMANI</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AABPS8102L</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">73,778</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">73,778</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">3.99</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">73,778</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">3.99</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">3.99</td>
                        <td className="px-2 py-2 text-right">73,778</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">RAJAT BAGREE</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AXTPB9663Q</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">21,645</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">21,645</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.17</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">21,645</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.17</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.17</td>
                        <td className="px-2 py-2 text-right">21,645</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">3</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">NISHMA GORWARA</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AVOPG8258K</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">21,535</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">21,535</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.16</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">21,535</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.16</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.16</td>
                        <td className="px-2 py-2 text-right">21,535</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">MANOJ MITTAL</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AAGPM0399G</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.89</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.89</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.89</td>
                        <td className="px-2 py-2 text-right">35,000</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">5</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">SHANJU RANI</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AELPR3226C</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.89</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.89</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.89</td>
                        <td className="px-2 py-2 text-right">35,000</td>
                      </tr>
                      <tr className="bg-slate-100 font-bold border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">Total</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-bold">Total</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">186,958</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">186,958</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">10.11</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">186,958</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">10.11</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">10.11</td>
                        <td className="px-2 py-2 text-right font-semibold">186,958</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 7D: Any Other (Specify) Subcategories (Columns 1 to 7) */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Table 7D: Any Other (Specify) Subcategories (Columns 1 to 7)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[1000px]" border={1}>
                    <thead className="bg-slate-50 font-bold text-center">
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 border-r border-slate-300 w-16">Serial No</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Category Type</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Classification</th>
                        <th className="px-2 py-2.5 border-r border-slate-300">Name</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">PAN</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-20">Number of Shareholders</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Fully Paid Shares (IV)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Total Shares (VII)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-20">Shareholding % (VIII)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">Voting Rights Class X</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-20">Total Voting Rights %</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-20">Diluted Shareholding % (XI)</th>
                        <th className="px-2 py-2.5">Dematerialized Shares (XIV)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300">Bodies Corporate</td>
                        <td className="px-2 py-2 border-r border-slate-300">Category</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400">-</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400 text-center">-</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">24</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">200,828</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">200,828</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">10.86</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">200,828</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">10.86</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">10.86</td>
                        <td className="px-2 py-2 text-right">200,728</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2</td>
                        <td className="px-2 py-2 border-r border-slate-300">Bodies Corporate</td>
                        <td className="px-2 py-2 border-r border-slate-300">More than 1 percentage</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">ADVANTAGE OVERSEAS PRIVATE LTD</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-mono text-center">AAECA8925F</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">94,259</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">94,259</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">5.1</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">94,259</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">5.1</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">5.1</td>
                        <td className="px-2 py-2 text-right">94,259</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">3</td>
                        <td className="px-2 py-2 border-r border-slate-300">Bodies Corporate</td>
                        <td className="px-2 py-2 border-r border-slate-300">More than 1 percentage</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">OAK TRANSITION MANAGEMENT PRIVATE LIMITED</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-mono text-center">AABCO3268J</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">27,967</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">27,967</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.51</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">27,967</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.51</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.51</td>
                        <td className="px-2 py-2 text-right font-semibold">27,967</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4</td>
                        <td className="px-2 py-2 border-r border-slate-300">Bodies Corporate</td>
                        <td className="px-2 py-2 border-r border-slate-300">More than 1 percentage</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">SUMPOORNA PORTFOLIO LIMITED</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-mono text-center">AAOCS8998N</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">74,177</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">74,177</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4.01</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">74,177</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4.01</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4.01</td>
                        <td className="px-2 py-2 text-right font-semibold">74,177</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">5</td>
                        <td className="px-2 py-2 border-r border-slate-300">NRI – Repat</td>
                        <td className="px-2 py-2 border-r border-slate-300">Category</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400">-</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400 text-center">-</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,630</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">1,630</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.09</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,630</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.09</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.09</td>
                        <td className="px-2 py-2 text-right">1,630</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">6</td>
                        <td className="px-2 py-2 border-r border-slate-300">NRI – Non- Repat</td>
                        <td className="px-2 py-2 border-r border-slate-300">Category</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400">-</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400 text-center">-</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">500</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">500</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.03</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">500</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.03</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.03</td>
                        <td className="px-2 py-2 text-right">500</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">7</td>
                        <td className="px-2 py-2 border-r border-slate-300">HUF</td>
                        <td className="px-2 py-2 border-r border-slate-300">Category</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400">-</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400 text-center">-</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">26</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">43,911</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">43,911</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2.37</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">43,911</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2.37</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">2.37</td>
                        <td className="px-2 py-2 text-right">43,050</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 7E: Any Other (Specify) Subcategories (Columns 8 to 11 & Total Column) */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Table 7E: Any Other (Specify) Subcategories (Columns 8 to 11 & Total Column)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[1000px]" border={1}>
                    <thead className="bg-slate-50 font-bold text-center">
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 border-r border-slate-300 w-16">Serial No</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Category Type</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Classification</th>
                        <th className="px-2 py-2.5 border-r border-slate-300">Name</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">PAN</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-20">Number of Shareholders</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Fully Paid Shares (IV)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-28">Total Shares (VII)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-20">Shareholding % (VIII)</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-24">Voting Rights Class X</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-20">Total Voting Rights %</th>
                        <th className="px-2 py-2.5 border-r border-slate-300 w-20">Diluted Shareholding % (XI)</th>
                        <th className="px-2 py-2.5">Dematerialized Shares (XIV)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">8</td>
                        <td className="px-2 py-2 border-r border-slate-300">HUF</td>
                        <td className="px-2 py-2 border-r border-slate-300">More than 1 percentage</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">SANJEEV GORWARA HUF</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-mono text-center">AAQHS2486A</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">22,498</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">22,498</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.22</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">22,498</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.22</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.22</td>
                        <td className="px-2 py-2 text-right">22,498</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">9</td>
                        <td className="px-2 py-2 border-r border-slate-300">Director or Director's Relatives</td>
                        <td className="px-2 py-2 border-r border-slate-300">Category</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400">-</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400 text-center">-</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">100</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">100</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.01</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">100</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.01</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">0.01</td>
                        <td className="px-2 py-2 text-right">100</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">10</td>
                        <td className="px-2 py-2 border-r border-slate-300">Clearing Members</td>
                        <td className="px-2 py-2 border-r border-slate-300">Category</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400">-</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400 text-center">-</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">100</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">100</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.01</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">100</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.01</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">0.01</td>
                        <td className="px-2 py-2 text-right">100</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">11</td>
                        <td className="px-2 py-2 border-r border-slate-300">IEPF</td>
                        <td className="px-2 py-2 border-r border-slate-300">Category</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400">-</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400 text-center">-</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">100</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-semibold">100</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.01</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">100</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.01</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">0.01</td>
                        <td className="px-2 py-2 text-right">100</td>
                      </tr>
                      <tr className="bg-slate-100 font-bold border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">Total</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-bold">Total</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-bold">58</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-bold">247,069</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-bold">247,069</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-bold">13.36</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right font-bold">247,069</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-bold">13.36</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-bold">13.36</td>
                        <td className="px-2 py-2 text-right font-bold">240,108</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
