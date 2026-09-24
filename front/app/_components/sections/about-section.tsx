import type { Dictionary } from "../../_i18n/dictionaries/pt";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { FaCode, FaRoute, FaUserGear } from "react-icons/fa6";

const icons = [FaRoute, FaCode, FaUserGear];

export function AboutSection({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow={dict.eyebrow}
            title={dict.title}
            description={dict.description}
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {dict.highlights.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Reveal key={item.title} delay={index * 120}>
                <article className="card card-hover h-full p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface-2 text-lg text-dotnet">
                    <Icon aria-hidden />
                  </span>
                  <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-js">
                    {item.kicker}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
