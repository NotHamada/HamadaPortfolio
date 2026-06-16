import { profileHighlights } from "../../_data/site";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

export function AboutSection() {
  return (
    <section id="sobre" className="bg-[#0A0A0A] py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Sobre mim"
            title="Codigo limpo, produto claro e uma boa dose de curiosidade."
            description="Gosto de trabalhar na interseccao entre experiencia do usuario, arquitetura front-end e entrega constante. Para mim, uma boa interface tambem precisa ser facil de manter."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {profileHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <article className="h-full rounded-lg border border-[#A78BFA]/15 bg-[#171717] p-6 transition hover:border-[#A78BFA]/45 hover:shadow-[0_18px_45px_rgba(10,10,10,0.35)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A78BFA]">
                  {item.kicker}
                </p>
                <h3 className="mt-4 text-xl font-bold text-[#FAFAFA]">
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
