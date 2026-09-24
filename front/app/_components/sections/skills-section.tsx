import {
  certifications,
  skillGroups,
  stackEcosystems,
} from "../../_data/site";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SiDotnet, SiNodedotjs, SiReact } from "react-icons/si";
import { FaCertificate } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";

const ecosystemStyles = {
  dotnet: {
    text: "text-dotnet",
    chip: "border-dotnet/30 bg-dotnet-deep/15 hover:border-dotnet",
    glow: "from-dotnet-deep/35",
    icons: [SiDotnet, TbBrandCSharp],
  },
  js: {
    text: "text-js",
    chip: "border-js/30 bg-js/10 hover:border-js",
    glow: "from-js/20",
    icons: [SiReact, SiNodedotjs],
  },
} as const;

export function SkillsSection() {
  return (
    <section
      id="stack"
      className="border-y border-line bg-surface/40 py-24 md:py-32"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="stack"
            title="Dois ecossistemas, uma entrega de ponta a ponta."
            description="C# e .NET para APIs e regras de negócio; React, Next.js, Node.js e NestJS para interfaces e serviços em JavaScript/TypeScript."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {stackEcosystems.map((ecosystem, index) => {
            const style =
              ecosystemStyles[ecosystem.id as keyof typeof ecosystemStyles];

            return (
              <Reveal
                key={ecosystem.id}
                delay={index * 140}
                direction={index === 0 ? "left" : "right"}
              >
                <article className="card relative h-full overflow-hidden p-8">
                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${style.glow} to-transparent blur-2xl`}
                  />
                  <div className={`flex gap-3 text-4xl ${style.text}`}>
                    {style.icons.map((Icon, iconIndex) => (
                      <Icon key={iconIndex} aria-hidden />
                    ))}
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-bold text-fg">
                    {ecosystem.name}
                  </h3>
                  <p className="mt-2 text-muted">{ecosystem.tagline}</p>
                  <ul className="mt-7 flex flex-wrap gap-2.5">
                    {ecosystem.items.map((skill) => (
                      <li
                        key={skill}
                        className={`rounded-lg border px-3.5 py-1.5 font-mono text-sm text-fg transition ${style.chip}`}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 100}>
              <article className="card h-full p-6">
                <h3 className="font-mono text-sm text-muted">
                  <span className="text-dotnet">#</span> {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md bg-surface-2 px-3 py-1 text-sm text-fg/90"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="card mt-6 flex flex-col gap-5 p-6 md:flex-row md:items-center">
            <h3 className="flex shrink-0 items-center gap-2 font-mono text-sm text-muted">
              <FaCertificate className="text-amber" aria-hidden /> Certificações
            </h3>
            <ul className="flex flex-wrap gap-2">
              {certifications.map((certification) => (
                <li
                  key={certification}
                  className="rounded-md border border-line px-3 py-1 text-sm text-fg/90"
                >
                  {certification}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
