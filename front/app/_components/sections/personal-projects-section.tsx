import { personalProjects } from "../../_data/site";
import { getStarredRepos } from "../../_lib/github";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { FaStar } from "react-icons/fa6";

type DisplayProject = {
  key: string;
  title: string;
  description: string;
  href: string;
  tags: string[];
  stars?: number;
};

export async function PersonalProjectsSection() {
  const starredRepos = await getStarredRepos(6);

  const displayProjects: DisplayProject[] =
    starredRepos.length > 0
      ? starredRepos.map((repo) => ({
          key: repo.fullName,
          title: repo.name,
          description: repo.description ?? "Repositório sem descrição.",
          href: repo.url,
          tags: repo.language
            ? [repo.language, ...repo.topics.slice(0, 2)]
            : repo.topics.slice(0, 3),
          stars: repo.stars,
        }))
      : personalProjects.map((project) => ({
          key: project.title,
          title: project.title,
          description: project.description,
          href: project.href,
          tags: project.tags,
        }));

  return (
    <section id="projetos-pessoais" className="bg-[#0A0A0A] py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projetos pessoais"
            title="Meus repositórios em destaque no GitHub."
            description="Projetos próprios que marco com estrela no GitHub — uma vitrine que atualizo direto por lá, sem precisar mexer no site."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, index) => (
            <Reveal key={project.key} delay={index * 120} direction="scale">
              <article className="group flex h-full flex-col rounded-lg border border-[#A78BFA]/15 bg-[#171717] p-6 transition hover:-translate-y-1 hover:border-[#A78BFA]/50">
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate text-sm font-semibold uppercase tracking-[0.18em] text-[#A78BFA]">
                    Projeto em destaque
                  </p>
                  {typeof project.stars === "number" && (
                    <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-[#A3A3A3]">
                      <FaStar className="text-[#A78BFA]" /> {project.stars}
                    </span>
                  )}
                </div>
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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
