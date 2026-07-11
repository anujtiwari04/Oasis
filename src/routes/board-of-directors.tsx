import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/board-of-directors")({
  component: BoardOfDirectorsPage,
});

const directors = [
  {
    srNo: 1,
    name: "Devi Dutt Agarwal",
    designation: "Whole Time Director",
    residentialAddress: "Flat No. C104, Block-C, Melodia Plot No.5, Kuber Complex, Jaipur-302021, Rajasthan, India",
    pan: "AGWPA6965A",
    uidDin: "10631960",
  },
  {
    srNo: 2,
    name: "Gyan Chand Jain",
    designation: "Director",
    residentialAddress: "Plot No. C-36-37, Govindpuri, Ram Nagar, Sodala, Jaipur-302006, Rajasthan, India",
    pan: "AAUPJ9870B",
    uidDin: "01220412",
  },
  {
    srNo: 3,
    name: "Rajesh Kumar Sodhani",
    designation: "Managing Director",
    residentialAddress: "26 Ganga Sagar B, Vaishali Nagar, Jaipur-302021, Rajasthan, India",
    pan: "ANVPS7354R",
    uidDin: "02516856",
  },
  {
    srNo: 4,
    name: "Priya Sodhani",
    designation: "Director",
    residentialAddress: "Plot No. 26, Ganga Sagar-B, Near Vaishali Police Station, Vaishali Nagar, Jaipur-302021, Rajasthan, India",
    pan: "AOCPS5615M",
    uidDin: "02523843",
  },
  {
    srNo: 5,
    name: "Meenu Kabra",
    designation: "Director",
    residentialAddress: "F-6/190, Radha Kuteer, Chitrakoot Scheme, Jaipur-302021, Rajasthan, India",
    pan: "AKOPK6142R",
    uidDin: "10269674",
  },
  {
    srNo: 6,
    name: "Tushar Agarwal",
    designation: "Additional Director",
    residentialAddress: "131 B Gayatri Nagar B Jaipur-302018 Rajasthan",
    pan: "BCAPA1416K",
    uidDin: "10932962",
  },
];

function BoardOfDirectorsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header />

      <main className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Corporate</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Board of Directors
            </h1>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
            <table className="min-w-[1100px] w-full border-collapse text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="px-4 py-4 text-sm font-semibold uppercase tracking-wide">
                    Sr. No.
                  </th>
                  <th scope="col" className="px-4 py-4 text-sm font-semibold uppercase tracking-wide">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-4 text-sm font-semibold uppercase tracking-wide">
                    Designation
                  </th>
                  <th scope="col" className="px-4 py-4 text-sm font-semibold uppercase tracking-wide">
                    Residential Address
                  </th>
                  <th scope="col" className="px-4 py-4 text-sm font-semibold uppercase tracking-wide">
                    PAN
                  </th>
                  <th scope="col" className="px-4 py-4 text-sm font-semibold uppercase tracking-wide">
                    UID/DIN
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {directors.map((director) => (
                  <tr key={director.uidDin} className="align-top">
                    <td className="px-4 py-4 text-sm font-medium text-slate-900">{director.srNo}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-slate-900">{director.name}</td>
                    <td className="px-4 py-4 text-sm text-slate-700">{director.designation}</td>
                    <td className="px-4 py-4 text-sm leading-6 text-slate-700">{director.residentialAddress}</td>
                    <td className="px-4 py-4 text-sm font-medium text-slate-700">{director.pan}</td>
                    <td className="px-4 py-4 text-sm font-medium text-slate-700">{director.uidDin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
