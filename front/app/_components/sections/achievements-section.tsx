import { achievements, interests, languages } from "../../_data/site";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { FaComments, FaLanguage, FaTrophy } from "react-icons/fa6";

export function AchievementsSection() {
  return (
    <section id="conquistas" className="bg-[#0A0A0A] py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Conquistas"
            title="Reconhecimento, idiomas e interesses pessoais."
            description="Um prêmio recente, os idiomas que uso no dia a dia e alguns interesses que também fazem parte de quem eu sou."
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <Reveal
              key={achievement.title}
              delay={index * 120}
              direction="scale"
              className="lg:col-span-3"
            >
              <article className="flex flex-col gap-4 rounded-lg border border-[#A78BFA]/20 bg-[#171717] p-6 sm:flex-row sm:items-center">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#8B5CF6]/15 text-2xl text-[#A78BFA]">
                  <FaTrophy />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#FAFAFA]">
                    {achievement.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[#A3A3A3]">
                    {achievement.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={140} direction="left">
            <article className="h-full rounded-lg border border-[#A78BFA]/15 bg-[#171717] p-6">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#A78BFA]">
                <FaLanguage /> Idiomas
              </p>
              <div className="mt-5 flex flex-col gap-3">
                {languages.map((item) => (
                  <div
                    key={item.language}
                    className="flex items-center justify-between rounded-full bg-[#0A0A0A] px-4 py-2 text-sm font-semibold text-[#FAFAFA]"
                  >
                    <span>{item.language}</span>
                    <span className="text-[#A3A3A3]">{item.level}</span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={200} direction="right" className="lg:col-span-2">
            <article className="h-full rounded-lg border border-[#A78BFA]/15 bg-[#171717] p-6">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#A78BFA]">
                <FaComments /> Interesses
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-[#8B5CF6]/35 px-4 py-2 text-sm font-semibold text-[#FAFAFA]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
