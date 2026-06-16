import { experience } from "../../_data/site";
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
            description="Experiência iniciada em 2022 na Ironbug Sistemas, com evolução de estagiário para desenvolvedor fullstack júnior."
          />
        </Reveal>
        <div className="mx-auto max-w-3xl">
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
        </div>
      </div>
    </section>
  );
}
