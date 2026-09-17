import { education, experience } from "../../_data/site";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="bg-[#0A0A0A] py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experiência"
            title="Trajetória profissional e acadêmica."
            description="Cargos, responsabilidades e formação acadêmica que construíram minha trajetória, do estágio em 2022 até a atuação atual."
          />
        </Reveal>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.22em] text-[#A78BFA]">
              Experiência profissional
            </h3>
          </Reveal>
          {experience.map((item, index) => (
            <Reveal key={item.title} delay={index * 130}>
              <article className="relative border-l border-[#8B5CF6]/35 pb-10 pl-7 last:pb-0">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#A78BFA]" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A78BFA]">
                  {item.period}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#FAFAFA]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#A3A3A3]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <h3 className="mb-8 mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#A78BFA]">
              Formação acadêmica
            </h3>
          </Reveal>
          {education.map((item, index) => (
            <Reveal key={item.title} delay={index * 130}>
              <article className="relative border-l border-[#8B5CF6]/35 pb-10 pl-7 last:pb-0">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#A78BFA]" />
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A78BFA]">
                    {item.period}
                  </p>
                  <span className="rounded-full bg-[#171717] px-3 py-1 text-xs font-semibold text-[#A3A3A3]">
                    {item.status}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-bold text-[#FAFAFA]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#A3A3A3]">
                  {item.institution}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
