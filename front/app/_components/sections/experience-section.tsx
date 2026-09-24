import { education, experience } from "../../_data/site";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

type TimelineItem = {
  period: string;
  title: string;
  body: string;
  badge?: string;
};

function Timeline({
  label,
  items,
  accent,
}: {
  label: string;
  items: TimelineItem[];
  accent: "dotnet" | "js";
}) {
  const dot = accent === "dotnet" ? "bg-dotnet" : "bg-js";
  const text = accent === "dotnet" ? "text-dotnet" : "text-js";

  return (
    <div>
      <Reveal>
        <h3 className="mb-8 font-mono text-sm text-muted">
          <span className={text}>$</span> git log --{label}
        </h3>
      </Reveal>
      <ol className="relative border-l border-line">
        {items.map((item, index) => (
          <li key={item.title} className="relative pb-10 pl-8 last:pb-0">
            <span
              className={`absolute -left-[6px] top-1.5 h-[11px] w-[11px] rounded-full ring-4 ring-bg ${
                index === 0 ? dot : "bg-line"
              }`}
            />
            <Reveal delay={index * 120}>
              <div className="flex flex-wrap items-center gap-3">
                <p className={`font-mono text-xs ${text}`}>{item.period}</p>
                {item.badge && (
                  <span className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">
                    {item.badge}
                  </span>
                )}
              </div>
              <h4 className="mt-2 font-display text-xl font-bold text-fg">
                {item.title}
              </h4>
              <p className="mt-2 leading-7 text-muted">{item.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="experiência"
            title="Trajetória profissional e acadêmica."
            description="Do estágio em 2022 até a atuação atual: cargos, responsabilidades e a formação que sustenta meu trabalho."
          />
        </Reveal>
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <Timeline
            label="experiencia"
            accent="dotnet"
            items={experience.map((item) => ({
              period: item.period,
              title: item.title,
              body: item.description,
            }))}
          />
          <Timeline
            label="formacao"
            accent="js"
            items={education.map((item) => ({
              period: item.period,
              title: item.title,
              body: item.institution,
              badge: item.status,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
