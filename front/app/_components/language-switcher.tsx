"use client";

import type { MouseEvent } from "react";
import { locales, type Locale } from "../_i18n/config";

type LanguageSwitcherProps = {
  lang: Locale;
  label: string;
};

export function LanguageSwitcher({ lang, label }: LanguageSwitcherProps) {
  // Keep the current section when switching languages.
  function keepHash(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.href = `/${event.currentTarget.dataset.locale}${window.location.hash}`;
  }

  return (
    <div
      role="group"
      aria-label={label}
      className="flex rounded-lg border border-line bg-surface/60 p-0.5 font-mono text-xs"
    >
      {locales.map((locale) => {
        const active = locale === lang;

        return (
          <a
            key={locale}
            href={`/${locale}`}
            data-locale={locale}
            hrefLang={locale === "pt" ? "pt-BR" : locale}
            aria-current={active ? "true" : undefined}
            onClick={keepHash}
            className={`rounded-md px-2.5 py-1.5 uppercase transition ${
              active
                ? "bg-surface-2 text-fg shadow-[inset_0_-2px_0_var(--js)]"
                : "text-muted hover:text-fg"
            }`}
          >
            {locale}
          </a>
        );
      })}
    </div>
  );
}
