import {
  SiDotnet,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const technologies = [
  { name: ".NET", icon: SiDotnet, color: "text-dotnet" },
  { name: "C#", icon: TbBrandCSharp, color: "text-dotnet" },
  { name: "React", icon: SiReact, color: "text-js" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-fg" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-node" },
  { name: "NestJS", icon: SiNestjs, color: "text-[#e0234e]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
  { name: "MySQL", icon: SiMysql, color: "text-[#4479a1]" },
];

export function StackMarquee() {
  return (
    <div className="marquee overflow-hidden border-t border-line bg-bg/70 py-5">
      <div className="marquee-track flex w-max gap-12">
        {[...technologies, ...technologies].map((tech, index) => {
          const Icon = tech.icon;

          return (
            <span
              key={`${tech.name}-${index}`}
              aria-hidden={index >= technologies.length}
              className="flex items-center gap-3 font-mono text-sm text-muted"
            >
              <Icon className={`text-xl ${tech.color}`} aria-hidden />
              {tech.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
