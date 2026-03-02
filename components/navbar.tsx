const sections = ['about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-mist/95 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-sm font-semibold tracking-wide">
          Alane
        </a>
        <ul className="hidden gap-4 text-sm text-slate-700 md:flex">
          {sections.map((section) => (
            <li key={section}>
              <a className="capitalize transition hover:text-accent" href={`#${section}`}>
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
