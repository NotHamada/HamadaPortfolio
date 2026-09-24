import { CodeWindow } from "../code-window";
import { Reveal } from "../reveal";
import { StackMarquee } from "../stack-marquee";
import type { Dictionary } from "../../_i18n/dictionaries/pt";

export function HeroSection({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section
      id="inicio"
      className="hero-backdrop overflow-hidden border-b border-line"
    >
      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-14 py-20 grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 font-mono text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-node opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-node" />
              </span>
              {dict.badge}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 font-display text-[2.1rem] font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-[3.4rem] xl:text-6xl">
              {dict.backend} <span className="text-dotnet">.NET</span>,
              <br />
              {dict.frontend} <span className="text-js">React</span>,
              <br />
              <span className="text-gradient">{dict.tagline}</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              {dict.introBefore}{" "}
              <strong className="text-fg">Matheus Hamada</strong>
              {dict.introAfter}
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#experiencia"
                className="rounded-lg bg-gradient-to-r from-dotnet-deep to-dotnet px-7 py-3 text-center text-sm font-bold text-white shadow-[0_18px_50px_-12px_rgba(81,43,212,0.8)] transition hover:brightness-110"
              >
                {dict.primaryCta}
              </a>
              <a
                href="#stack"
                className="rounded-lg border border-line bg-surface/60 px-7 py-3 text-center font-mono text-sm font-semibold text-fg transition hover:border-js/60 hover:text-js"
              >
                {dict.secondaryCta}
              </a>
            </div>
          </Reveal>
          <Reveal delay={460}>
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-8">
              {dict.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-bold text-fg">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs leading-5 text-muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal direction="scale" delay={200}>
          <CodeWindow dict={dict.codeWindow} />
        </Reveal>
      </div>

      <StackMarquee />
    </section>
  );
}
