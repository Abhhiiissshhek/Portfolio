import { useState } from "react";

const navigationItems = [
  { label: "Home", href: "#main-content" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <button
          className="inline-flex size-11 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <svg
            aria-hidden="true"
            className="size-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>
      <div id="mobile-navigation" className={isMenuOpen ? "md:hidden" : "hidden"}>
        <ul className="mx-auto max-w-6xl border-t border-slate-200 px-6 py-3">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                className="block rounded-md px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default SiteHeader;
