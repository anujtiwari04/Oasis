import oasisLogo from "@/assets/Oasis Logo.png";
import generalFAQ from "@/assets/faq/GeneralFAQ's.pdf";

export function Footer() {
  const links = [
    { href: "/contact", label: "Contact Us" },
    { href: generalFAQ, label: "FAQ", download: "GeneralFAQ's.pdf" },
    // { href: "#", label: "Disclaimer" },
  ];

  return (
    <footer className="bg-brand-green text-white/50" aria-label="Site footer">
      {/* Gold accent rule */}
      <div className="h-px bg-brand-gold/30" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Top row: Logo + Nav */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Company Name */}
          <div className="flex items-center gap-2">
            <img
              src={oasisLogo}
              alt="Oasis Securities Limited"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <span className="font-bold text-white text-sm">OASIS SECURITIES LTD.</span>
          </div>

          {/* Links navigation */}
          <nav className="flex items-center gap-6" aria-label="Footer">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                download={l.download}
                className="text-sm text-white/50 hover:text-brand-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Separator */}
        <div className="h-px bg-white/10 my-6" />

        {/* Bottom row: Copyright */}
        <p className="text-xs text-white/30 text-center">
          © Copyright ISIL 2010. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
