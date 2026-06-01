export function Footer() {
  const links = [
    { href: "/contact", label: "Contact Us" },
    { href: "#", label: "FAQ" },
    { href: "#", label: "Disclaimer" },
  ];
  return (
    <footer className="bg-slate-900 text-slate-400 py-8" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-white/10 text-white flex items-center justify-center font-extrabold">
              O
            </div>
            <span className="font-bold text-white text-sm">OASIS SECURITIES LTD</span>
          </div>
          <nav className="flex items-center gap-6" aria-label="Footer">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-slate-500 text-center sm:text-right">
            © Copyright ISIL 2010. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
