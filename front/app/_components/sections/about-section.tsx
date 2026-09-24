import { profileHighlights } from "../../_data/site";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { FaCode, FaRoute, FaUserGear } from "react-icons/fa6";

const icons = [FaRoute, FaCode, FaUserGear];

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="sobre"
            title="Fullstack com base sólida em produto, dados e requisitos."
            description="Desenvolvo e mantenho sistemas web corporativos: implemento funcionalidades, integro APIs REST, modelo dados e levanto requisitos junto às áreas de negócio."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {profileHighlights.map((item, index) => {
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
