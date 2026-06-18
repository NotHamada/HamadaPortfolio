import { personalProjects } from "../../_data/site";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

export function PersonalProjectsSection() {
  return (
    <section id="projetos-pessoais" className="bg-[#0A0A0A] py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projetos pessoais"
            title="Ideias que desenvolvo além do trabalho."
            description="Projetos criados para explorar interesses, praticar tecnologias e transformar curiosidade em soluções funcionais."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {personalProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 140} direction="scale">
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#A78BFA]/15 bg-[#171717] transition hover:-translate-y-1 hover:border-[#A78BFA]/50">
                <div className="relative h-48 overflow-hidden border-b border-[#A78BFA]/15 bg-[#0A0A0A]">
                  <div className="absolute -left-10 top-16 h-20 w-72 rotate-[-8deg] rounded-full border-[10px] border-[#8B5CF6]/70" />
                  <div className="absolute left-36 top-4 h-32 w-64 rotate-[12deg] rounded-full border-[10px] border-[#A78BFA]/35" />
                  <div className="absolute bottom-5 right-6 rounded-md bg-[#171717] px-4 py-2 font-mono text-sm font-bold text-[#FAFAFA] shadow-xl">
                    F1 / STATS
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A78BFA]">
                    Projeto em destaque
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[#FAFAFA]">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-7 text-[#A3A3A3]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#0A0A0A] px-3 py-1 text-xs font-semibold text-[#FAFAFA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 self-start rounded-full bg-[#8B5CF6] px-5 py-2.5 text-sm font-bold text-[#FAFAFA] transition hover:bg-[#A78BFA]"
                  >
                    Ver no GitHub
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
