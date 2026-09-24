import { personalProjects } from "../../_data/site";
import { getStarredRepos } from "../../_lib/github";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { FaArrowUpRightFromSquare, FaGithub, FaStar } from "react-icons/fa6";

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
    <section id="projetos-pessoais" className="py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="projetos pessoais"
            title="Meus repositórios em destaque no GitHub."
            description="Projetos próprios que marco com estrela no GitHub: uma vitrine que atualizo direto por lá, sem precisar mexer no site."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, index) => (
            <Reveal key={project.key} delay={index * 120} direction="scale">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="card card-hover group flex h-full flex-col p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 font-mono text-sm text-muted">
                    <FaGithub className="text-lg text-fg" aria-hidden />
                    NotHamada/
                  </span>
                  {typeof project.stars === "number" && (
                    <span className="flex shrink-0 items-center gap-1 font-mono text-xs text-muted">
                      <FaStar className="text-amber" aria-hidden />{" "}
                      {project.stars}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 break-words font-display text-2xl font-bold text-fg transition group-hover:text-js">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-muted">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line pt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-fg/90"
                    >
                      {tag}
                    </span>
                  ))}
                  <FaArrowUpRightFromSquare
                    className="ml-auto text-sm text-muted transition group-hover:text-js"
                    aria-hidden
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
