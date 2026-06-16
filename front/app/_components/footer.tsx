import { socialLinks } from "../_data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#171717] bg-[#0A0A0A]">
      <div className="section-shell flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[#A3A3A3]">
          © 2026 Matheus Hamada. Construído com Next.js.
        </p>
        <div className="flex flex-wrap gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#A3A3A3] transition hover:text-[#A78BFA]"
              rel="noreferrer"
              target={link.external ? "_blank" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
