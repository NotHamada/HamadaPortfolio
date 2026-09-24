import { socialLinks } from "../_data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="section-shell flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-sm text-muted">
          <span className="text-node">✓</span> © 2026 Matheus Hamada · built
          with <span className="text-fg">Next.js</span>
        </p>
        <div className="flex flex-wrap gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted transition hover:text-js"
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
