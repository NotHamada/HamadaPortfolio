import { projects } from "../../_data/site";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

export function ProjectsSection() {
  return (
    <section id="projetos" className="bg-[#0A0A0A] py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projetos"
            title="Frentes de atuação no desenvolvimento web."
            description="Minha experiência profissional abrange sistemas corporativos, integrações, dados, manutenção evolutiva e melhoria contínua de aplicações."
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 140} direction="scale">
              <article className="group flex h-full flex-col rounded-lg border border-[#A78BFA]/15 bg-[#171717] p-6 transition hover:-translate-y-1 hover:border-[#A78BFA]/50">
                <div className="mb-7 h-40 rounded-md border border-[#A78BFA]/15 bg-[#0A0A0A] p-4">
                  <div className="mb-4 h-3 w-24 rounded-full bg-[#8B5CF6]" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 rounded bg-[#171717]" />
                    <div className="h-20 rounded bg-[#8B5CF6]/40" />
                    <div className="h-20 rounded bg-[#A78BFA]/30" />
                  </div>
                  <div className="mt-4 h-3 w-full rounded-full bg-[#FAFAFA]/20" />
                  <div className="mt-2 h-3 w-2/3 rounded-full bg-[#FAFAFA]/20" />
                </div>
                <p className="text-sm font-semibold text-[#A78BFA]">
                  {project.type}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#FAFAFA]">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-[#A3A3A3]">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-[#0A0A0A] px-3 py-1 text-xs font-semibold text-[#FAFAFA]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
