import type { Locale } from "../_i18n/config";
import type { Dictionary } from "../_i18n/dictionaries/pt";
import { LanguageSwitcher } from "./language-switcher";

type HeaderProps = {
  lang: Locale;
  dict: Dictionary;
};

export function Header({ lang, dict }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/80 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between gap-6">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-mono text-sm font-semibold text-fg"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-dotnet-deep to-js/70 font-display text-sm font-bold text-white">
            MH
          </span>
          <span className="hidden sm:inline">
            matheus<span className="text-dotnet">.</span>hamada
          </span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {dict.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} label={dict.header.languageSwitcher} />
          <a
            href="#contato"
            className="rounded-lg border border-dotnet/40 bg-dotnet-deep/20 px-4 py-2 font-mono text-sm font-semibold text-fg transition hover:border-dotnet hover:bg-dotnet-deep/40"
          >
            {dict.header.contact}
          </a>
        </div>
      </nav>
      <nav
        aria-label={dict.header.sectionsNav}
        className="section-shell flex gap-5 overflow-x-auto border-t border-line/80 py-3 lg:hidden"
      >
        {dict.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 text-sm font-medium text-muted transition hover:text-fg"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
