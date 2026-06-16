import { skillGroups } from "../../_data/site";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

export function SkillsSection() {
  return (
    <section id="habilidades" className="bg-[#0A0A0A] py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Habilidades"
            title="Stack moderna para construir com velocidade."
            description="Ferramentas e praticas que uso para entregar interfaces consistentes, tipadas e preparadas para evoluir."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <Reveal
              key={group.title}
              delay={groupIndex * 120}
              direction={groupIndex % 2 === 0 ? "left" : "right"}
            >
              <article className="rounded-lg border border-[#A78BFA]/15 bg-[#171717] p-6">
                <h3 className="text-xl font-bold text-[#FAFAFA]">
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#8B5CF6]/35 px-4 py-2 text-sm font-semibold text-[#FAFAFA]"
                    >
                      {skill}
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
