import type { Dictionary } from "../../_i18n/dictionaries/pt";
import { Reveal } from "../reveal";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const channels = [
  {
    label: "Email",
    value: "matheushamada@live.com",
    href: "mailto:matheushamada@live.com",
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "in/matheushamada",
    href: "https://www.linkedin.com/in/matheushamada/",
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "NotHamada",
    href: "https://github.com/NotHamada",
    icon: FaGithub,
    external: true,
  },
  {
    label: "WhatsApp",
    value: "+55 44 99117-0071",
    href: "https://wa.me/5544991170071",
    icon: FaWhatsapp,
    external: true,
  },
];

export function ContactSection({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section id="contato" className="hero-backdrop py-24 md:py-32">
      <div className="section-shell">
        <Reveal direction="scale">
          <div className="gradient-border mx-auto max-w-4xl overflow-hidden rounded-2xl bg-surface/90 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-line px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-muted">
                {dict.terminalTitle}
              </span>
            </div>
            <div className="p-8 md:p-12">
              <p className="font-mono text-sm text-muted">
                <span className="text-node">➜</span>{" "}
                <span className="text-js">~</span> {dict.command}
              </p>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-fg md:text-6xl">
                {dict.titleStart}{" "}
                <span className="text-gradient">{dict.titleHighlight}</span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                {dict.description}
              </p>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {channels.map((channel) => {
                  const Icon = channel.icon;

                  return (
                    <li key={channel.label}>
                      <a
                        href={channel.href}
                        target={channel.external ? "_blank" : undefined}
                        rel="noreferrer"
                        className="group flex items-center gap-4 rounded-xl border border-line bg-bg/60 p-4 transition hover:border-js/60"
                      >
                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-surface-2 text-lg text-fg transition group-hover:text-js">
                          <Icon aria-hidden />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-fg">
                            {channel.label}
                          </span>
                          <span className="block truncate font-mono text-xs text-muted">
                            {channel.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
