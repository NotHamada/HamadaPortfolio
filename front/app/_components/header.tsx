import { navItems } from "../_data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#171717] bg-[#0A0A0A]/90 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#inicio"
          className="text-base font-bold tracking-wide text-[#FAFAFA]"
        >
          Matheus Hamada
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#A3A3A3] transition hover:text-[#A78BFA]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contato"
          className="rounded-full bg-[#8B5CF6] px-4 py-2 text-sm font-semibold text-[#FAFAFA] transition hover:bg-[#A78BFA]"
        >
          Contato
        </a>
      </nav>
      <nav
        aria-label="Navegação pelas seções"
        className="section-shell flex gap-6 overflow-x-auto border-t border-[#171717] py-3 lg:hidden"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 text-sm font-medium text-[#A3A3A3] transition hover:text-[#A78BFA]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
