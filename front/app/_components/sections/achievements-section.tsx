import type { Dictionary } from "../../_i18n/dictionaries/pt";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { FaHandshakeAngle, FaLanguage, FaTrophy } from "react-icons/fa6";

export function AchievementsSection({
  dict,
}: {
  dict: Dictionary["achievements"];
}) {
  return (
    <section
      id="conquistas"
      className="border-y border-line bg-surface/40 py-24 md:py-32"
    >
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow={dict.eyebrow}
            title={dict.title}
            description={dict.description}
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {dict.items.map((achievement, index) => (
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
                <FaLanguage className="text-lg text-js" aria-hidden />{" "}
                {dict.languagesLabel}
              </p>
              <dl className="mt-5 flex flex-col gap-2">
                {dict.languages.map((item) => (
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
                <FaHandshakeAngle className="text-lg text-dotnet" aria-hidden />{" "}
                {dict.volunteer.label}
              </p>
              <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-bold text-fg">
                  {dict.volunteer.role}
                </h3>
                <span className="font-mono text-xs text-dotnet">
                  {dict.volunteer.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-fg/70">
                {dict.volunteer.organization}
              </p>
              <ul className="mt-4 space-y-2">
                {dict.volunteer.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="relative pl-4 leading-7 text-muted before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-line"
                  >
                    {highlight}
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
