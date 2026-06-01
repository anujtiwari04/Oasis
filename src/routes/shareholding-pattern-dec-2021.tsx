import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/shareholding-pattern-dec-2021")({
  component: Dec2021ShareholdingPage,
});

function Dec2021ShareholdingPage() {
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
                Shareholding Pattern - December 2021
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
                      <td className="px-4 py-2">NA</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <th className="px-4 py-2 bg-slate-50 font-bold border-r border-slate-300">ISIN</th>
                      <td className="px-4 py-2">INE876A01015</td>
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
                      <td className="px-4 py-2">31-12-2021</td>
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
                      <td className="px-4 py-2 border-r border-slate-300 text-center">Yes</td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-4 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-4 py-2 text-center text-slate-400"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Table I - Summary Statement (Part A) */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 3: Table I - Summary Statement (Part A)
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
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">(A)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">Promoter & Promoter Group</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">10</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,671</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,671</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">70.74</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,671</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,671</td>
                      <td className="px-2 py-2 text-center">70.74</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">(B)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">Public</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1,084</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">541,329</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">541,329</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">29.26</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">541,329</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">541,329</td>
                      <td className="px-2 py-2 text-center">29.26</td>
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
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1,094</td>
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

            {/* SECTION 4: Table I - Summary Statement (Part B - Conversions & Demat) */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 4: Table I - Summary Statement (Part B - Conversions & Demat)
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
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-36">Shareholding , as a % assuming full conversion of convertible securities (as a percentage of diluted share capital) (XI)= (VII)+(X) As a % of (A+B+C2)</th>
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
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold text-center">(A)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">Promoter & Promoter Group</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">70.74</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right">1,308,671</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold text-center">(B)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">Public</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">29.26</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right">477,648</td>
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
                      <td className="px-2 py-2 text-right text-slate-400"></td>
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
                      <td className="px-2 py-2 text-right text-slate-400"></td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-semibold">(C2)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Shares held by Employee Trusts</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right text-slate-400"></td>
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
                      <td className="px-2 py-2 text-right">1,786,319</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Table II - Detailed Shareholding Pattern Breakdown (Part A) */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 5: Table II - Detailed Shareholding Pattern Breakdown (Part A)
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
                      <td className="px-2 py-2 border-r border-slate-300 text-center">9</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,038</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,038</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">70.7</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,038</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,038</td>
                      <td className="px-2 py-2 text-center">70.7</td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Sub-Total (A)(1)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">9</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,038</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,038</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">70.7</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,038</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,038</td>
                      <td className="px-2 py-2 text-center">70.7</td>
                    </tr>
                    <tr className="font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(2)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Foreign</td>
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
                      <td className="px-2 py-2 border-r border-slate-300 pl-4">Individuals (NonResident Individuals/ Foreign Individuals)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0.03</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                      <td className="px-2 py-2 text-center">0.03</td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Sub-Total (A)(2)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0.03</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                      <td className="px-2 py-2 text-center">0.03</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total Shareholding of Promoter and Promoter Group (A)=(A)(1)+(A)(2)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">10</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,671</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,671</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">70.74</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,671</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">1,308,671</td>
                      <td className="px-2 py-2 text-center">70.74</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">B</td>
                      <td colSpan={11} className="px-2 py-2">Table III - Statement showing shareholding pattern of the Public shareholder</td>
                    </tr>
                    <tr className="font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(1)</td>
                      <td className="px-2 py-2 border-r border-slate-300">Institutions</td>
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
                    <tr className="font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(3)</td>
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
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(a(i))</td>
                      <td className="px-2 py-2 border-r border-slate-300 pl-4">Individuals - i.Individual shareholders holding nominal share capital up to Rs. 2 lakhs.</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1,035</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">289,836</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">289,836</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">15.67</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">289,836</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">289,836</td>
                      <td className="px-2 py-2 text-center">15.67</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(a(ii))</td>
                      <td className="px-2 py-2 border-r border-slate-300 pl-4">Individuals - ii. Individual shareholders holding nominal share capital in excess of Rs. 2 lakhs.</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">3</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">91,535</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">91,535</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">4.95</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">91,535</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">91,535</td>
                      <td className="px-2 py-2 text-center">4.95</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(e)</td>
                      <td className="px-2 py-2 border-r border-slate-300 pl-4">Any Other (specify)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">46</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">159,958</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">159,958</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">8.65</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">159,958</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">159,958</td>
                      <td className="px-2 py-2 text-center">8.65</td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Sub-Total (B)(3)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1,084</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">541,329</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">541,329</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">29.26</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">541,329</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">541,329</td>
                      <td className="px-2 py-2 text-center">29.26</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total Public Shareholding (B)=(B)(1)+(B)(2)+(B)(3)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1,084</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">541,329</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">541,329</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">29.26</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">541,329</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-right">541,329</td>
                      <td className="px-2 py-2 text-center">29.26</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">C</td>
                      <td colSpan={11} className="px-2 py-2">Table IV - Statement showing shareholding pattern of the Non Promoter- Non Public shareholder</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total ( A+B+C2 )</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1,094</td>
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
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1,094</td>
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

            {/* SECTION 6: Table II - Detailed Shareholding Pattern Breakdown (Part B - Conversions & Demat) */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 6: Table II - Detailed Shareholding Pattern Breakdown (Part B - Conversions & Demat)
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
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-36">Shareholding , as a % assuming full conversion of convertible securities (as a percentage of diluted share capital) (XI)= (VII)+(X) As a % of (A+B+C2)</th>
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
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">[Individuals/HUF]</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">70.7</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right">1,308,038</td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Sub-Total (A)(1)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">70.7</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right">1,308,038</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(a)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">[Foreign Individuals]</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0.03</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right">633</td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Sub-Total (A)(2)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">0.03</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right">633</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total Shareholding of Promoter Group (A)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">70.74</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right">1,308,671</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(a(i))</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">[Public Individual &lt;= 2L]</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">15.67</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right">226,755</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(a(ii))</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">[Public Individual &gt; 2L]</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">4.95</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right">91,535</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">(e)</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">[Any Other]</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">8.65</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right">159,358</td>
                    </tr>
                    <tr className="bg-slate-50 font-semibold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Sub-Total (B)(3)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">29.26</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right">477,648</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total Public Shareholding (B)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">29.26</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right">477,648</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total (A+B+C2)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">100</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right">1,786,319</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold">
                      <td className="px-2 py-2 border-r border-slate-300 text-center"></td>
                      <td className="px-2 py-2 border-r border-slate-300">Total (A+B+C)</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">100</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 text-right">1,786,319</td>
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
                    <tbody>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300 w-44">Searial No.</th>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">1</td>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">2</td>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">3</td>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">4</td>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">5</td>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">6</td>
                        <td className="px-2 py-2.5 text-center font-semibold">7</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Name</th>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">INDRA KUMAR BAGRI HUF</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">PRERIT KAMAL DAMANI</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">SAVITRIDEVI MANGALCHAND JAJOO</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">ANIL KUMAR BAGRI</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">STUTI ANIL BAGRI</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">ARCHANA BAGRI</td>
                        <td className="px-2 py-2 font-semibold">ISHITA BAGRI</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">PAN</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AAAHI1836A</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AAAPD6320L</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">ADVPJ7839A</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">ADPPB7746L</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">CRCPB8712M</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">ADPPB7414B</td>
                        <td className="px-2 py-2 text-center font-mono">ALIPB8683K</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Fully Paid Shares (IV)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">30,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">28,600</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">34,500</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">264,335</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">46,450</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">31,600</td>
                        <td className="px-2 py-2 text-right">46,450</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Total Shares (VII)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">30,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">28,600</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">34,500</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">264,335</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">46,450</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">31,600</td>
                        <td className="px-2 py-2 text-right">46,450</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Shareholding % (VIII)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.62</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.55</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.86</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">14.29</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2.51</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.71</td>
                        <td className="px-2 py-2 text-center">2.51</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Voting Rights Class X</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">30,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">28,600</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">34,500</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">264,335</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">46,450</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">31,600</td>
                        <td className="px-2 py-2 text-right">46,450</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Total Voting Rights %</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.62</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.55</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.86</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">14.29</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2.51</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.71</td>
                        <td className="px-2 py-2 text-center">2.51</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Diluted Shareholding % (XI)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.62</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.55</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.86</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">14.29</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">2.51</td>
                        <td className="px-2 py-2 text-center">2.51</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Demat Form Shares (XIV)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">30,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">28,600</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">34,500</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">264,335</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">46,450</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">31,600</td>
                        <td className="px-2 py-2 text-right">46,450</td>
                      </tr>
                      <tr>
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Shareholder type</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">Promoter Group</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">Promoter Group</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">Promoter Group</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">Promoter</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">Promoter Group</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">Promoter Group</td>
                        <td className="px-2 py-2 text-center">Promoter Group</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 7B: Individuals/Hindu undivided Family (Promoters 8 to 9 & Total Column) */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Table 7B: Individuals/Hindu undivided Family (Promoters 8 to 9 & Total Column)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[500px] max-w-4xl" border={1}>
                    <tbody>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300 w-44">Searial No.</th>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">8</td>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">9</td>
                        <td className="px-2 py-2.5 text-center font-semibold">[Total Column]</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Name</th>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">ANANYA AMIT BAGRI</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">INDRA KUMAR BAGRI</td>
                        <td className="px-2 py-2 font-bold">Total</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">PAN</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">ALIPB8684Q</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AEKPB3104N</td>
                        <td className="px-2 py-2 text-center text-slate-400"></td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Fully Paid Shares (IV)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">83,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">743,103</td>
                        <td className="px-2 py-2 text-right font-bold">1,308,038</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Total Shares (VII)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">83,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">743,103</td>
                        <td className="px-2 py-2 text-right font-bold">1,308,038</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Shareholding % (VIII)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4.49</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">40.17</td>
                        <td className="px-2 py-2 text-center font-bold">70.7</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Voting Rights Class X</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">83,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">743,103</td>
                        <td className="px-2 py-2 text-right font-bold">1,308,038</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Total Voting Rights %</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4.49</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">40.17</td>
                        <td className="px-2 py-2 text-center font-bold">70.7</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Diluted Shareholding % (XI)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">4.49</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">40.17</td>
                        <td className="px-2 py-2 text-center font-bold">70.7</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Demat Form Shares (XIV)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">83,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">743,103</td>
                        <td className="px-2 py-2 text-right font-bold">1,308,038</td>
                      </tr>
                      <tr>
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Shareholder type</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">Promoter Group</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">Promoter</td>
                        <td className="px-2 py-2 text-slate-400 border-r border-slate-300"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 7C: Individuals (NonResident Individuals/ Foreign Individuals) */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Table 7C: Individuals (NonResident Individuals/ Foreign Individuals)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[400px] max-w-2xl" border={1}>
                    <tbody>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300 w-44">Searial No.</th>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">1</td>
                        <td className="px-2 py-2.5 text-center font-semibold">[Total Column]</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Name</th>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">AMITKUMAR INDRAKUMAR BAGRI</td>
                        <td className="px-2 py-2 font-bold">Total</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">PAN</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AEDPB2552D</td>
                        <td className="px-2 py-2 text-slate-400"></td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Fully Paid Shares (IV)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                        <td className="px-2 py-2 text-right font-bold">633</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Total Shares (VII)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                        <td className="px-2 py-2 text-right font-bold">633</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Shareholding % (VIII)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.03</td>
                        <td className="px-2 py-2 text-center font-bold">0.03</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Voting Rights Class X</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                        <td className="px-2 py-2 text-right font-bold">633</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Total Voting Rights %</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.03</td>
                        <td className="px-2 py-2 text-center font-bold">0.03</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Diluted Shareholding % (XI)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.03</td>
                        <td className="px-2 py-2 text-center font-bold">0.03</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Demat Form Shares (XIV)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">633</td>
                        <td className="px-2 py-2 text-right font-bold">633</td>
                      </tr>
                      <tr>
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Shareholder type</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">Promoter Group</td>
                        <td className="px-2 py-2 text-slate-400"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 7D: Public Capital holding in excess of Rs. 2 Lakhs */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Table 7D: Public Capital holding in excess of Rs. 2 Lakhs
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[600px] max-w-4xl" border={1}>
                    <tbody>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300 w-44">Searial No.</th>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">1</td>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">2</td>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">3</td>
                        <td className="px-2 py-2.5 text-center font-semibold">[Total Column]</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Name</th>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">MANOJ MITTAL</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">NISHMA GORWARA</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">SHANJU RANI</td>
                        <td className="px-2 py-2 font-bold">Total</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">PAN</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AAGPM0399G</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AVOPG8258K</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AELPR3226C</td>
                        <td className="px-2 py-2 text-slate-400"></td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Fully Paid Shares (IV)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">21,535</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,000</td>
                        <td className="px-2 py-2 text-right font-bold">91,535</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Total Shares (VII)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">21,535</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,000</td>
                        <td className="px-2 py-2 text-right font-bold">91,535</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Shareholding % (VIII)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.89</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.16</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.89</td>
                        <td className="px-2 py-2 text-center font-bold">4.95</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Voting Rights Class X</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">21,535</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,000</td>
                        <td className="px-2 py-2 text-right font-bold">91,535</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Total Voting Rights %</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.89</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.16</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.89</td>
                        <td className="px-2 py-2 text-center font-bold">4.95</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Diluted Shareholding % (XI)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.89</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.16</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.89</td>
                        <td className="px-2 py-2 text-center font-bold">4.95</td>
                      </tr>
                      <tr>
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Demat Form Shares (XIV)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,000</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">21,535</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">35,000</td>
                        <td className="px-2 py-2 text-right font-bold">91,535</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 7E: Any Other (Specify) Subcategories */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Table 7E: Any Other (Specify) Subcategories
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[950px]" border={1}>
                    <tbody>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300 w-44">Searial No.</th>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">1</td>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">2</td>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">3</td>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">4</td>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">5</td>
                        <td className="px-2 py-2.5 border-r border-slate-300 text-center font-semibold">6</td>
                        <td className="px-2 py-2.5 text-center font-semibold">[Total Column]</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Category</th>
                        <td className="px-2 py-2 border-r border-slate-300">Bodies Corporate</td>
                        <td className="px-2 py-2 border-r border-slate-300">Bodies Corporate</td>
                        <td className="px-2 py-2 border-r border-slate-300">Bodies Corporate</td>
                        <td className="px-2 py-2 border-r border-slate-300">Non-Resident Indian (NRI)</td>
                        <td className="px-2 py-2 border-r border-slate-300">HUF</td>
                        <td className="px-2 py-2 border-r border-slate-300">Clearing Members</td>
                        <td className="px-2 py-2 font-bold">Total</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Category / More than 1 percentage</th>
                        <td className="px-2 py-2 border-r border-slate-300">Category</td>
                        <td className="px-2 py-2 border-r border-slate-300">More than 1 percentage of shareholding</td>
                        <td className="px-2 py-2 border-r border-slate-300">More than 1 percentage of shareholding</td>
                        <td className="px-2 py-2 border-r border-slate-300">Category</td>
                        <td className="px-2 py-2 border-r border-slate-300">Category</td>
                        <td className="px-2 py-2 border-r border-slate-300">Category</td>
                        <td className="px-2 py-2 text-slate-400"></td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Name</th>
                        <td className="px-2 py-2 text-slate-400 border-r border-slate-300"></td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">ADVANTAGE OVERSEAS PRIVATE LTD</td>
                        <td className="px-2 py-2 border-r border-slate-300 font-semibold">OAK TRANSITION MANAGEMENT PRIVATE LIMITED</td>
                        <td className="px-2 py-2 text-slate-400 border-r border-slate-300"></td>
                        <td className="px-2 py-2 text-slate-400 border-r border-slate-300"></td>
                        <td className="px-2 py-2 text-slate-400 border-r border-slate-300"></td>
                        <td className="px-2 py-2 font-bold">Total</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">PAN</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-slate-400"></td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AAECA8925F</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AABCO3268J</td>
                        <td className="px-2 py-2 text-slate-400 border-r border-slate-300"></td>
                        <td className="px-2 py-2 text-slate-400 border-r border-slate-300"></td>
                        <td className="px-2 py-2 text-slate-400 border-r border-slate-300"></td>
                        <td className="px-2 py-2 text-slate-400"></td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">No. of Shareholders</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">11</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">7</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">22</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">6</td>
                        <td className="px-2 py-2 text-center font-bold">46</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Fully Paid Shares (IV)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">130,280</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">94,204</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">27,967</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">4,412</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">24,100</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,166</td>
                        <td className="px-2 py-2 text-right font-bold">159,958</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Total Shares (VII)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">130,280</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">94,204</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">27,967</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">4,412</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">24,100</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,166</td>
                        <td className="px-2 py-2 text-right font-bold">159,958</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Shareholding % (VIII)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">7.04</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">5.09</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.51</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.24</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.3</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.06</td>
                        <td className="px-2 py-2 text-center font-bold">8.64</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Voting Rights Class X</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">130,280</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">94,204</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">27,967</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">4,412</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">24,100</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,166</td>
                        <td className="px-2 py-2 text-right font-bold">159,958</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Total Voting Rights %</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">7.04</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">5.09</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.51</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.24</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.3</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.06</td>
                        <td className="px-2 py-2 text-center font-bold">8.64</td>
                      </tr>
                      <tr className="border-b border-slate-300">
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Diluted Shareholding % (XI)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">7.04</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">5.09</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.51</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.24</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">1.3</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-center">0.06</td>
                        <td className="px-2 py-2 text-center font-bold">8.64</td>
                      </tr>
                      <tr>
                        <th className="px-2 py-2.5 bg-slate-50 font-bold border-r border-slate-300">Demat Form Shares (XIV)</th>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">130,180</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">94,204</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">27,967</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">4,412</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">23,600</td>
                        <td className="px-2 py-2 border-r border-slate-300 text-right">1,166</td>
                        <td className="px-2 py-2 text-right font-bold">159,358</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 8: Significant Beneficial Owners (SBO) Table */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
                SECTION 8: Significant Beneficial Owners (SBO) Table
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs text-left border border-slate-300 min-w-[1100px]" border={1}>
                  <thead className="bg-slate-50 font-bold text-center">
                    <tr className="border-b border-slate-300">
                      <th rowSpan={2} className="px-2 py-3 border-r border-slate-300 w-12">Sr. No.</th>
                      <th colSpan={5} className="px-2 py-2 border-r border-slate-300">Details of the SBO</th>
                      <th colSpan={5} className="px-2 py-2 border-r border-slate-300">Details of the registered owner</th>
                      <th colSpan={5} className="px-2 py-2 border-r border-slate-300">Details of holding/exercise of right of the SBO</th>
                      <th rowSpan={2} className="px-2 py-3 w-28">Date of creation / acquisition of significant beneficial interest</th>
                    </tr>
                    <tr className="border-b border-slate-300">
                      {/* SBO */}
                      <th className="px-2 py-2 border-r border-slate-300 w-28">Name</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">PAN</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-20">Passport No.</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-20">Nationality</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-20">Nationality (If Any other)</th>
                      {/* Registered Owner */}
                      <th className="px-2 py-2 border-r border-slate-300 w-28">Name</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-24">PAN</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-20">Passport No.</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-20">Nationality</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-20">Nationality (If Any other)</th>
                      {/* Holding rights */}
                      <th className="px-2 py-2 border-r border-slate-300 w-16">Shares %</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-16">Voting rights %</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-20">Rights on distributable dividend %</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-16">Exercise of control</th>
                      <th className="px-2 py-2 border-r border-slate-300 w-16">Exercise of significant influence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1</td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">MR INDRA KUMAR BAGRI</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AEKPB3104N</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">India</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 font-semibold">I K BAGRI HUF</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center font-mono">AAAHI1836A</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">India</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">1.62</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center text-slate-400"></td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">No</td>
                      <td className="px-2 py-2 text-center">08-02-2019</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold">
                      <td className="px-2 py-2 border-r border-slate-300 text-center">Total</td>
                      <td colSpan={10} className="px-2 py-2 border-r border-slate-300">Total</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">Shares Total: 1.62</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">Voting Rights Total: 0</td>
                      <td className="px-2 py-2 border-r border-slate-300 text-center">Dividend Total: 0</td>
                      <td colSpan={2} className="px-2 py-2 border-r border-slate-300 text-slate-400"></td>
                      <td className="px-2 py-2 text-slate-400"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
