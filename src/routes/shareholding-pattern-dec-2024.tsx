import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/shareholding-pattern-dec-2024")({
  component: Dec2024ShareholdingPage,
});

function Dec2024ShareholdingPage() {
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
                Shareholding Pattern - December 2024
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
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">NSE Symbol</th>
                      <td className="px-4 py-2">NA</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">MSEI Symbol</th>
                      <td className="px-4 py-2">NOTLISTED</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">ISIN</th>
                      <td className="px-4 py-2">INE876A01015</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">Name of the company</th>
                      <td className="px-4 py-2">OASIS SECURITIES LIMITED</td>
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
                      <td className="px-4 py-2">31-12-2024</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">Date of allotment / extinguishment (in case Capital Restructuring selected) / Listing Date</th>
                      <td className="px-4 py-2"></td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">Shareholding pattern filed under</th>
                      <td className="px-4 py-2">Regulation 31 (1) (b)</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">Whether the listed entity is Public Sector Undertaking (PSU)?</th>
                      <td className="px-4 py-2">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 2: Declaration Table */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 2: Declaration Table
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm text-left border border-slate-300" border={1}>
                  <thead className="bg-slate-50 font-bold">
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 border-r border-slate-300 w-16 text-center">Sr. No.</th>
                      <th className="px-4 py-2 border-r border-slate-300">Particular</th>
                      <th className="px-4 py-2 border-r border-slate-300 w-24 text-center">Yes/No</th>
                      <th className="px-4 py-2 border-r border-slate-300 w-32 text-center">Promoter and Promoter Group</th>
                      <th className="px-4 py-2 border-r border-slate-300 w-32 text-center">Public shareholder</th>
                      <th className="px-4 py-2 w-32 text-center">Non Promoter- Non Public</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300 text-center">1</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether the Listed Entity has issued any partly paid up shares?</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 text-center">No</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300 text-center">2</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether the Listed Entity has issued any Convertible Securities ?</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 text-center">No</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300 text-center">3</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether the Listed Entity has issued any Warrants ?</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 text-center">No</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300 text-center">4</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether the Listed Entity has any shares against which depository receipts are issued?</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 text-center">No</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300 text-center">5</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether the Listed Entity has any shares in locked-in?</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 text-center">No</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300 text-center">6</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether any shares held by promoters are pledge or otherwise encumbered?</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-4 py-2 text-center text-slate-400"></td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300 text-center">7</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether company has equity shares with differential voting rights?</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 text-center">No</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">8</td>
                      <td className="px-4 py-2 border-r border-slate-300">Whether the listed entity has any significant beneficial owner?</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-4 py-2 text-center text-slate-400"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Table VI - Statement Showing Foreign Ownership Limits */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 3: Table VI - Statement Showing Foreign Ownership Limits
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full max-w-2xl border-collapse text-sm text-left border border-slate-300" border={1}>
                  <thead className="bg-slate-50 font-bold">
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 border-r border-slate-300">Particular</th>
                      <th className="px-4 py-2 border-r border-slate-300 w-44 text-right">Approved limits (%)</th>
                      <th className="px-4 py-2 w-44 text-right">Limits utilized (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300">As on shareholding date</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-right">100</td>
                      <td className="px-4 py-2 text-right">0.33</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300">As on the end of previous 1st quarter</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-right">100</td>
                      <td className="px-4 py-2 text-right">0.32</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300">As on the end of previous 2nd quarter</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-right">100</td>
                      <td className="px-4 py-2 text-right">0.3</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-4 py-2 border-r border-slate-300">As on the end of previous 3rd quarter</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-right">100</td>
                      <td className="px-4 py-2 text-right">0.24</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-r border-slate-300">As on the end of previous 4th quarter</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-right">100</td>
                      <td className="px-4 py-2 text-right">0.19</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Table I - Summary Statement (Part A) */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 4: Table I - Summary Statement (Part A)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[1000px]" border={1}>
                  <thead className="bg-slate-50 font-bold text-center">
                    <tr className="border-b border-slate-300">
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-16">Category (I)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300">Category of shareholder (II)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-20">Nos. Of shareholders (III)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-28">No. of fully paid up equity shares held (IV)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-24">No. Of Partly paid-up equity shares held (V)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-24">No. Of shares underlying Depository Receipts (VI)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-28">Total nos. shares held (VII) = (IV)+(V)+(VI)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">Shareholding as a % of total no. of shares (calculated as per SCRR, 1957) (VIII) As a % of (A+B+C2)</th>
                      <th colSpan={3} className="px-2 py-2 border-r border-slate-300">Number of Voting Rights held in each class of securities (IX)</th>
                      <th rowSpan={2} className="px-2 py-3">Total as a % of (A+B+C)</th>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-2 py-2 border-r border-slate-300 w-24">Class X</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-20">Class Y</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">(A)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">Promoter & Promoter Group</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">3</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">70.64</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 text-center">70.64</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">(B)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">Public</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1,203</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">543,149</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">543,149</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">29.36</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">543,149</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">543,149</td>
                      <td className="px-2 py-2 text-center">29.36</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">(C)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Non Promoter- Non Public</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 text-center text-slate-400"></td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">(C1)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Shares underlying DRs</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 text-center text-slate-400"></td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">(C2)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Shares held by Employee Trusts</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 text-center text-slate-400"></td>
                    </tr>
                    <tr className="bg-slate-100 font-bold">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">Total</td>
                      <td className="px-2 py-2 border-r border-slate-300">Total</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1,206</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">100</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 text-center">100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Table I - Summary Statement (Part B - Conversions, Demat & Sub-categorization) */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 5: Table I - Summary Statement (Part B - Conversions, Demat & Sub-categorization)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[1100px]" border={1}>
                  <thead className="bg-slate-50 font-bold text-center">
                    <tr className="border-b border-slate-300">
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-16">Category (I)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300">Category of shareholder (II)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">No. Of Shares Underlying Outstanding convertible securities (X)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">No. of Shares Underlying Outstanding Warrants (Xi)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">No. Of Shares Underlying Outstanding convertible securities and No. Of Warrants (Xi) (a)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-36">Shareholding , as a % assuming full conversion of convertible securities (as a percentage of diluted share capital) (XI)= (VII)+(X) As a % of (A+B+C2)</th>
                      <th colSpan={2} className="px-2 py-2 border-r border-slate-300">Number of Locked in shares (XII)</th>
                      <th colSpan={2} className="px-2 py-2 border-r border-slate-300">Number of Shares pledged or otherwise encumbered (XIII)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-28">Number of equity shares held in dematerialized form (XIV)</th>
                      <th colSpan={3} className="px-2 py-2">Sub-categorization of shares</th>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-2 py-2 border-r border-slate-300 w-24">No. (a)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">As a % of total Shares held (b)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">No. (a)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">As a % of total Shares held (b)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">Sub-category (i)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">Sub-category (ii)</th>
                      <th className="px-2 py-2 w-24">Sub-category (iii)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold text-center">(A)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">Promoter & Promoter Group</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">70.64</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-center text-slate-400"></td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold text-center">(B)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">Public</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">29.36</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">480,588</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 text-center">0</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">(C)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Non Promoter- Non Public</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-center text-slate-400"></td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">(C1)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Shares underlying DRs</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-center text-slate-400"></td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">(C2)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Shares held by Employee Trusts</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 text-center text-slate-400"></td>
                    </tr>
                    <tr className="bg-slate-100 font-bold">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">Total</td>
                      <td className="px-2 py-2 border-r border-slate-300">Total</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">100</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,787,439</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 text-center">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 6: Table II & III - Detailed Shareholding Pattern Breakdown (Part A) */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 6: Table II & III - Detailed Shareholding Pattern Breakdown (Part A)
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
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-36">Shareholding as a % of total no. of shares (calculated as per SCRR, 1957) (VIII) As a % of (A+B+C2)</th>
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
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">A</td>
                      <td colSpan={11} className="px-2 py-2">Table II - Statement showing shareholding pattern of the Promoter and Promoter Group</td>
                    </tr>
                    <tr className="font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(1)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Indian</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 text-center text-slate-400"></td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(a)</td>
                      <td className="px-2 py-2 border-r border-slate-300 pl-4">Individuals/Hindu undivided Family</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">3</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">70.64</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 text-center">70.64</td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Sub-Total (A)(1)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">3</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">70.64</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 text-center">70.64</td>
                    </tr>
                    <tr className="font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(2)</td>
                      <td colSpan={11} className="px-2 py-2">Foreign - [All fields blank]</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total Shareholding of Promoter and Promoter Group (A)=(A)(1)+(A)(2)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">3</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">70.64</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 text-center">70.64</td>
                    </tr>

                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">B</td>
                      <td colSpan={11} className="px-2 py-2">Table III - Statement showing shareholding pattern of the Public shareholder</td>
                    </tr>
                    <tr className="font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(1)</td>
                      <td colSpan={11} className="px-2 py-2">Institutions (Domestic) - [All fields blank]</td>
                    </tr>
                    <tr className="font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(2)</td>
                      <td colSpan={11} className="px-2 py-2">Institutions (Foreign) - [All fields blank]</td>
                    </tr>
                    <tr className="font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(3)</td>
                      <td colSpan={11} className="px-2 py-2">Central Government / State Government(s) - [All fields blank]</td>
                    </tr>
                    <tr className="font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(4)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Non-institutions</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right text-slate-400"></td>
                      <td className="px-2 py-2 text-center text-slate-400"></td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(g)</td>
                      <td className="px-2 py-2 border-r border-slate-300 pl-4">Resident Individuals holding nominal share capital up to Rs. 2 lakhs</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1141</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">320,755</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">320,755</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">17.34</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">320,755</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">320,755</td>
                      <td className="px-2 py-2 text-center">17.34</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(h)</td>
                      <td className="px-2 py-2 border-r border-slate-300 pl-4">Resident Individuals holding nominal share capital in excess of Rs. 2 lakhs</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">2</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">61,458</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">61,458</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">3.32</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">61,458</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">61,458</td>
                      <td className="px-2 py-2 text-center">3.32</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(i)</td>
                      <td className="px-2 py-2 border-r border-slate-300 pl-4">Non Resident Indians (NRIs)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">13</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">6,193</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">6,193</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0.33</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">6,193</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">6,193</td>
                      <td className="px-2 py-2 text-center">0.33</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(l)</td>
                      <td className="px-2 py-2 border-r border-slate-300 pl-4">Bodies Corporate</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">15</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">131,846</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">131,846</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">7.13</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">131,846</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">131,846</td>
                      <td className="px-2 py-2 text-center">7.13</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(m)</td>
                      <td className="px-2 py-2 border-r border-slate-300 pl-4">Any Other (specify)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">32</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">22,897</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">22,897</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1.24</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">22,897</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">22,897</td>
                      <td className="px-2 py-2 text-center">1.24</td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Sub-Total (B)(4)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1,203</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">543,149</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">543,149</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">29.36</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">543,149</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">543,149</td>
                      <td className="px-2 py-2 text-center">29.36</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total Public Shareholding (B)=(B)(1)+(B)(2)+(B)(3)+(B)(4)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1,203</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">543,149</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">543,149</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">29.36</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">543,149</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">543,149</td>
                      <td className="px-2 py-2 text-center">29.36</td>
                    </tr>

                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">C</td>
                      <td colSpan={11} className="px-2 py-2">Table IV - Statement showing shareholding pattern of the Non Promoter- Non Public shareholder</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total ( A+B+C2 )</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1,206</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">100</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 text-center">100</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total (A+B+C )</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1,206</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">100</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,850,000</td>
                      <td className="px-2 py-2 text-center">100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 7: Table II & III - Detailed Shareholding Pattern Breakdown (Part B) */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 7: Table II & III - Detailed Shareholding Pattern Breakdown (Part B)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[1100px]" border={1}>
                  <thead className="bg-slate-50 font-bold text-center">
                    <tr className="border-b border-slate-300">
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-16">Category of shareholder (II)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">No. Of Shares Underlying Outstanding convertible securities (X)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">No. of Shares Underlying Outstanding Warrants (Xi)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-32">No. Of Shares Underlying Outstanding convertible securities and No. Of Warrants (Xi) (a)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-36">Shareholding , as a % assuming full conversion of convertible securities (as a percentage of diluted share capital) (XI)= (VII)+(X) As a % of (A+B+C2)</th>
                      <th colSpan={2} className="px-2 py-2 border-r border-slate-300">Number of Locked in shares (XII)</th>
                      <th colSpan={2} className="px-2 py-2 border-r border-slate-300">Number of Shares pledged or otherwise encumbered (XIII)</th>
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-28">Number of equity shares held in dematerialized form (XIV)</th>
                      <th colSpan={3} className="px-2 py-2">Sub-categorization of shares</th>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-2 py-2 border-r border-slate-300 w-24">No. (a)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">As a % of total Shares held (b)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">No. (a)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">As a % of total Shares held (b)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">Sub-category (i)</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">Sub-category (ii)</th>
                      <th className="px-2 py-2 w-24">Sub-category (iii)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">(a) [Individuals/HUF]</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">70.64</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-center text-slate-400"></td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300">Sub-Total (A)(1)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">70.64</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-center text-slate-400"></td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300">Total Shareholding of Promoter Group (A)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">70.64</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-center text-slate-400"></td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300">(g) [Public Individual &lt;= 2L]</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">17.34</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">258,794</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 text-center">0</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300">(h) [Public Individual &gt; 2L]</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">3.32</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">61,458</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 text-center">0</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300">(i) [NRIs]</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0.33</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">6,193</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 text-center">0</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300">(l) [Bodies Corporate]</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">7.13</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">131,746</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 text-center">0</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300">(m) [Any Other]</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1.24</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">22,397</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 text-center">0</td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300">Sub-Total (B)(4)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">29.36</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">480,588</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 text-center">0</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300">Total Public Shareholding (B)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">29.36</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">480,588</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                      <td className="px-2 py-2 text-center">0</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300">Total (A+B+C2)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">100</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,787,439</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-center text-slate-400"></td>
                    </tr>
                    <tr className="bg-slate-100 font-bold">
                      <td className="px-2 py-2 border-r border-slate-300">Total (A+B+C)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">100</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,787,439</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-center text-slate-400"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8: Granular Entity Deep-Dive Transposed Tables */}
            <section className="space-y-8">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 8: Granular Entity Deep-Dive Transposed Tables
              </h2>

              {/* Table 8A: Individuals/Hindu undivided Family (Promoters 1 to 3) */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-800">
                  Table 8A: Individuals/Hindu undivided Family (Promoters 1 to 3)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[1000px]" border={1}>
                    <thead className="bg-slate-50 font-bold">
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2 border-r border-slate-300 w-10 text-center">Sr.</th>
                        <th className="px-2 py-2 border-r border-slate-300">Name of Shareholder</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-24">PAN</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-right">Fully Paid Shares (IV)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-center">Partly Paid (V)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-center">DR Shares (VI)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-right">Total Shares (VII)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-16 text-center">Shareholding % (VIII)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-right">Voting Class X</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-16 text-center">Voting Class Y</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-right">Total Voting</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-16 text-center">Total Voting %</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-16 text-center">Diluted % (XI)</th>
                        <th colSpan={2} className="px-2 py-1 border-r border-slate-300 text-center">Locked-in (XII)</th>
                        <th colSpan={2} className="px-2 py-1 border-r border-slate-300 text-center">Pledged (XIII)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-24 text-right">Demat Shares (XIV)</th>
                        <th className="px-2 py-2">Promoter/Promoter Group</th>
                      </tr>
                      <tr className="border-b border-slate-300 bg-slate-50">
                        <th colSpan={13} className="border-r border-slate-300"></th>
                        <th className="px-1 py-1 border-r border-slate-300 text-center w-12">No. (a)</th>
                        <th className="px-1 py-1 border-r border-slate-300 text-center w-12">% (b)</th>
                        <th className="px-1 py-1 border-r border-slate-300 text-center w-12">No. (a)</th>
                        <th className="px-1 py-1 border-r border-slate-300 text-center w-12">% (b)</th>
                        <th colSpan={2}></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-medium">RAJESH KUMAR SODHANI</td>
                        <td className="px-2 py-2 border-r border-slate-300">ANVPS7354R</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,016,750</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,016,750</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">54.96</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,016,750</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,016,750</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">54.96</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">54.96</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,016,750</td>
                        <td className="px-2 py-2">Promoter</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-medium">GYAN CHAND JAIN</td>
                        <td className="px-2 py-2 border-r border-slate-300">AAUPJ9870B</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">9,150</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">9,150</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.49</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">9,150</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">9,150</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.49</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.49</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">9,150</td>
                        <td className="px-2 py-2">Promoter</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">3</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-medium">PRIYA SODHANI</td>
                        <td className="px-2 py-2 border-r border-slate-300">AOCPS5615M</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">280,951</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">280,951</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">15.19</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">280,951</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">280,951</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">15.19</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">15.19</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">280,951</td>
                        <td className="px-2 py-2">Promoter</td>
                      </tr>
                      <tr className="bg-slate-100 font-bold">
                        <td colSpan={2} className="px-2 py-2 border-r border-slate-300 text-center">Total</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">70.64</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">70.64</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">70.64</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,306,851</td>
                        <td className="px-2 py-2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 8B: Bodies Corporate Category Breakdown */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-800">
                  Table 8B: Bodies Corporate Category Breakdown
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[1000px]" border={1}>
                    <thead className="bg-slate-50 font-bold">
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2 border-r border-slate-300 w-10 text-center">Sr.</th>
                        <th className="px-2 py-2 border-r border-slate-300">Name of Shareholder</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-24">PAN</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-right">Fully Paid Shares (IV)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-center">Partly Paid (V)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-center">DR Shares (VI)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-right">Total Shares (VII)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-16 text-center">Shareholding % (VIII)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-right">Voting Class X</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-16 text-center">Voting Class Y</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-right">Total Voting</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-16 text-center">Total Voting %</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-16 text-center">Diluted % (XI)</th>
                        <th colSpan={2} className="px-2 py-1 border-r border-slate-300 text-center">Locked-in (XII)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-24 text-right">Demat Shares (XIV)</th>
                        <th colSpan={3} className="px-2 py-2 text-center">Sub-categorization of shares</th>
                      </tr>
                      <tr className="border-b border-slate-300 bg-slate-50">
                        <th colSpan={13} className="border-r border-slate-300"></th>
                        <th className="px-1 py-1 border-r border-slate-300 text-center w-12">No. (a)</th>
                        <th className="px-1 py-1 border-r border-slate-300 text-center w-12">% (b)</th>
                        <th className="border-r border-slate-300"></th>
                        <th className="px-1 py-1 border-r border-slate-300 text-center w-12">Sub-cat (i)</th>
                        <th className="px-1 py-1 border-r border-slate-300 text-center w-12">Sub-cat (ii)</th>
                        <th className="px-1 py-1 text-center w-12">Sub-cat (iii)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-medium">ADVANTAGE OVERSEAS PVT LTD</td>
                        <td className="px-2 py-2 border-r border-slate-300">AAECA8925F</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">87,890</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">87,890</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4.75</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">87,890</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">87,890</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4.75</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4.75</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">87,890</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 text-center">0</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-medium">OAK TRANSITION MANAGEMENT PRIVATE LIMITE</td>
                        <td className="px-2 py-2 border-r border-slate-300">AABCO3268J</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">27,967</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">27,967</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.51</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">27,967</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">27,967</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.51</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.51</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">27,967</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 text-center">0</td>
                      </tr>
                      <tr className="bg-slate-100 font-bold">
                        <td colSpan={2} className="px-2 py-2 border-r border-slate-300 text-center">Total</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">115,857</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">115,857</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">6.26</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">115,857</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">115,857</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">6.26</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">6.26</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">115,857</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 text-center">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 8C: Resident Individuals holding nominal share capital in excess of Rs. 2 lakhs */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-800">
                  Table 8C: Resident Individuals holding nominal share capital in excess of Rs. 2 lakhs
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[1000px]" border={1}>
                    <thead className="bg-slate-50 font-bold">
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2 border-r border-slate-300 w-10 text-center">Sr.</th>
                        <th className="px-2 py-2 border-r border-slate-300">Name of Shareholder</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-24">PAN</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-right">Fully Paid Shares (IV)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-center">Partly Paid (V)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-center">DR Shares (VI)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-right">Total Shares (VII)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-16 text-center">Shareholding % (VIII)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-right">Voting Class X</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-16 text-center">Voting Class Y</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-right">Total Voting</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-16 text-center">Total Voting %</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-16 text-center">Diluted % (XI)</th>
                        <th colSpan={2} className="px-2 py-1 border-r border-slate-300 text-center">Locked-in (XII)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-24 text-right">Demat Shares (XIV)</th>
                        <th colSpan={3} className="px-2 py-2 text-center">Sub-categorization of shares</th>
                      </tr>
                      <tr className="border-b border-slate-300 bg-slate-50">
                        <th colSpan={13} className="border-r border-slate-300"></th>
                        <th className="px-1 py-1 border-r border-slate-300 text-center w-12">No. (a)</th>
                        <th className="px-1 py-1 border-r border-slate-300 text-center w-12">% (b)</th>
                        <th className="border-r border-slate-300"></th>
                        <th className="px-1 py-1 border-r border-slate-300 text-center w-12">Sub-cat (i)</th>
                        <th className="px-1 py-1 border-r border-slate-300 text-center w-12">Sub-cat (ii)</th>
                        <th className="px-1 py-1 text-center w-12">Sub-cat (iii)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-medium">GUTTIKONDA VARA LAKSHMI</td>
                        <td className="px-2 py-2 border-r border-slate-300">AELPV6536R</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,462</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,462</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.92</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,462</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,462</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.92</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.92</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,462</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 text-center">0</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-medium">GUTTIKONDA RAJASEKHAR</td>
                        <td className="px-2 py-2 border-r border-slate-300">AGFPG9440D</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">25,996</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">25,996</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.41</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">25,996</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">25,996</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.41</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.41</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">25,996</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 text-center">0</td>
                      </tr>
                      <tr className="bg-slate-100 font-bold">
                        <td colSpan={2} className="px-2 py-2 border-r border-slate-300 text-center">Total</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">61,458</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">61,458</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">3.32</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">61,458</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">61,458</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">3.32</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">3.32</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">61,458</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 text-center">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 8D: Any Other (Specify) Category Sub-breakdown */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-800">
                  Table 8D: Any Other (Specify) Category Sub-breakdown
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[1000px]" border={1}>
                    <thead className="bg-slate-50 font-bold">
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2 border-r border-slate-300 w-10 text-center">Sr.</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-44">Category</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-44">Category / More than 1 percent</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-24 text-center">No. of shareholders</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-24 text-right">Fully Paid Shares (IV)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-24 text-right">Total Shares (VII)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-center">Shareholding % (VIII)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-24 text-right">Voting Class X</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-24 text-right">Total Voting</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-20 text-center">Diluted % (XI)</th>
                        <th className="px-2 py-2 border-r border-slate-300 w-24 text-right">Demat Form (XIV)</th>
                        <th colSpan={3} className="px-2 py-2 text-center">Sub-categories</th>
                      </tr>
                      <tr className="border-b border-slate-300 bg-slate-50">
                        <th colSpan={11} className="border-r border-slate-300"></th>
                        <th className="px-1 py-1 border-r border-slate-300 text-center w-16">Sub-cat (i)</th>
                        <th className="px-1 py-1 border-r border-slate-300 text-center w-16">Sub-cat (ii)</th>
                        <th className="px-1 py-1 text-center w-16">Sub-cat (iii)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300">Clearing Members</td>
                        <td className="px-2 py-2 border-r border-slate-300">Category</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">2</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">2</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">2</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">2</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">2</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 text-center">0</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2</td>
                        <td className="px-2 py-2 border-r border-slate-300">Firm</td>
                        <td className="px-2 py-2 border-r border-slate-300">Category</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">3</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">3,117</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">3,117</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.17</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">3,117</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">3,117</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.17</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">3,117</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 text-center">0</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <td className="px-2 py-2 border-r border-slate-300 text-center">3</td>
                        <td className="px-2 py-2 border-r border-slate-300">HUF</td>
                        <td className="px-2 py-2 border-r border-slate-300">Category</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">28</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">19,778</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">19,778</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.07</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">19,778</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">19,778</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.07</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">19,278</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 text-center">0</td>
                      </tr>
                      <tr className="bg-slate-100 font-bold">
                        <td colSpan={3} className="px-2 py-2 border-r border-slate-300 text-center">Total</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">32</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">22,897</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">22,897</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.24</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">22,897</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">22,897</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.24</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">22,397</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0</td>
                        <td className="px-2 py-2 text-center">0</td>
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
