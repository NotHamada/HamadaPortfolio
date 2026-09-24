import { achievements, interests, languages } from "../../_data/site";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { FaComments, FaLanguage, FaTrophy } from "react-icons/fa6";

export function AchievementsSection() {
  return (
    <section
      id="conquistas"
      className="border-y border-line bg-surface/40 py-24 md:py-32"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="conquistas"
            title="Reconhecimento, idiomas e interesses."
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
              <article className="gradient-border flex flex-col gap-5 rounded-[14px] bg-surface p-7 sm:flex-row sm:items-center">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-amber/10 text-3xl text-amber">
                  <FaTrophy aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-fg">
                    {achievement.title}
                  </h3>
                  <p className="mt-2 leading-7 text-muted">
                    {achievement.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={140} direction="left">
            <article className="card h-full p-7">
              <p className="flex items-center gap-2 font-mono text-sm text-muted">
                <FaLanguage className="text-lg text-js" aria-hidden /> Idiomas
              </p>
              <dl className="mt-5 flex flex-col gap-2">
                {languages.map((item) => (
                  <div
                    key={item.language}
                    className="flex items-center justify-between rounded-lg bg-surface-2 px-4 py-2.5 text-sm"
                  >
                    <dt className="font-semibold text-fg">{item.language}</dt>
                    <dd className="font-mono text-xs text-muted">
                      {item.level}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>

          <Reveal delay={200} direction="right" className="lg:col-span-2">
            <article className="card h-full p-7">
              <p className="flex items-center gap-2 font-mono text-sm text-muted">
                <FaComments className="text-lg text-dotnet" aria-hidden />{" "}
                Interesses
              </p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-lg border border-line px-4 py-2 text-sm text-fg/90"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
