const navigationItems = [
  { label: "Home", href: "#main-content" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
        aria-label="Main navigation"
      >
        <a className="font-semibold tracking-tight text-slate-950" href="#main-content">
          Abhishek
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default SiteHeader;
