import type { Dictionary } from "../../_i18n/dictionaries/pt";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { FaDatabase, FaLayerGroup, FaWindowMaximize } from "react-icons/fa6";

const icons = [FaLayerGroup, FaDatabase, FaWindowMaximize];

export function ProjectsSection({
  dict,
}: {
  dict: Dictionary["projects"];
}) {
  return (
    <section
      id="projetos"
      className="border-y border-line bg-surface/40 py-24 md:py-32"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow={dict.eyebrow}
            title={dict.title}
            description={dict.description}
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {dict.items.map((project, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Reveal key={project.title} delay={index * 140} direction="scale">
                <article className="card card-hover flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-dotnet-deep/60 to-js/30 text-xl text-white">
                      <Icon aria-hidden />
                    </span>
                    <span className="font-mono text-xs text-line">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-js">
                    {project.type}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-fg">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-7 text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                    {project.stack.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-fg/90"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
