import type { Dictionary } from "../../_i18n/dictionaries/pt";
import { getStarredRepos } from "../../_lib/github";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaSpotify,
  FaStar,
} from "react-icons/fa6";

type DisplayProject = {
  key: string;
  title: string;
  description: string;
  href: string;
  tags: string[];
  stars?: number;
};

export async function PersonalProjectsSection({
  dict,
}: {
  dict: Dictionary["personalProjects"];
}) {
  const { featured } = dict;
  // The featured project already has its own card, so skip it in the grid.
  const starredRepos = (await getStarredRepos(7))
    .filter((repo) => repo.name.toLowerCase() !== featured.name.toLowerCase())
    .slice(0, 6);

  const displayProjects: DisplayProject[] =
    starredRepos.length > 0
      ? starredRepos.map((repo) => ({
          key: repo.fullName,
          title: repo.name,
          description: repo.description ?? dict.noDescription,
          href: repo.url,
          tags: repo.language
            ? [repo.language, ...repo.topics.slice(0, 2)]
            : repo.topics.slice(0, 3),
          stars: repo.stars,
        }))
      : dict.fallback.map((project) => ({
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
            eyebrow={dict.eyebrow}
            title={dict.title}
            description={dict.description}
          />
        </Reveal>

        <Reveal direction="scale">
          <article className="gradient-border mb-6 grid gap-8 overflow-hidden rounded-2xl bg-surface p-7 md:p-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-node/15 px-2.5 py-1 font-mono text-xs text-node">
                  {featured.badge}
                </span>
                <span className="font-mono text-xs text-muted">
                  {featured.period}
                </span>
              </div>
              <h3 className="mt-5 flex items-center gap-3 font-display text-3xl font-bold text-fg md:text-4xl">
                <FaSpotify className="text-[#1db954]" aria-hidden />
                {featured.name}
              </h3>
              <ul className="mt-5 space-y-3">
                {featured.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="relative pl-4 leading-7 text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-node"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6 lg:items-end">
              <ul className="flex flex-wrap gap-2 lg:justify-end">
                {featured.stack.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-fg/90"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={featured.siteHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-dotnet-deep to-dotnet px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
                >
                  {featured.siteLabel}
                  <FaArrowUpRightFromSquare className="text-xs" aria-hidden />
                </a>
                <a
                  href={featured.repoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-line bg-bg/60 px-5 py-2.5 font-mono text-sm font-semibold text-fg transition hover:border-js/60 hover:text-js"
                >
                  <FaGithub aria-hidden /> {featured.repoLabel}
                </a>
              </div>
            </div>
          </article>
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
