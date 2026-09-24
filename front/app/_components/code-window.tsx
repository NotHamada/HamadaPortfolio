"use client";

import { useState } from "react";
import { SiDotnet, SiNestjs, SiReact } from "react-icons/si";
import type { Dictionary } from "../_i18n/dictionaries/pt";

const files = [
  {
    name: "Program.cs",
    icon: SiDotnet,
    accent: "text-dotnet",
    code: `var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

var app = builder.Build();

// GET /api/dev
app.MapGet("/api/dev", () => new Developer(
    Name: "Matheus Hamada",
    Stack: [".NET", "C#", "React", "Node"],
    OpenToWork: true
));

app.Run();`,
  },
  {
    name: "page.tsx",
    icon: SiReact,
    accent: "text-js",
    code: `export default function Portfolio() {
  const stack = ["React", "Next.js", "TypeScript"];

  {{serverComponentComment}}
  return (
    <Developer
      name="Matheus Hamada"
      stack={stack}
      location="Maringá - PR"
    />
  );
}`,
  },
  {
    name: "dev.controller.ts",
    icon: SiNestjs,
    accent: "text-[#e0234e]",
    code: `@Controller("dev")
export class DevController {
  constructor(private readonly dev: DevService) {}

  // Node.js + NestJS
  @Get()
  profile() {
    return this.dev.find("matheus-hamada");
  }
}`,
  },
];

const keywords = new Set([
  "var",
  "new",
  "true",
  "false",
  "return",
  "export",
  "default",
  "function",
  "const",
  "class",
  "private",
  "readonly",
  "constructor",
]);

const tokenPattern =
  /(\/\/.*$)|("(?:[^"\\]|\\.)*")|(@\w+)|([A-Za-z_]\w*)|(\s+)|(.)/gm;

function highlight(line: string) {
  const tokens: { text: string; className?: string }[] = [];

  for (const match of line.matchAll(tokenPattern)) {
    const [text, comment, string, decorator, word] = match;
    const next = line[(match.index ?? 0) + text.length];

    let className: string | undefined;
    if (comment) className = "text-muted italic";
    else if (string) className = "text-amber";
    else if (decorator) className = "text-[#f472b6]";
    else if (word && keywords.has(word)) className = "text-[#c792ea]";
    else if (word && next === "(") className = "text-js";
    else if (word && /^[A-Z]/.test(word)) className = "text-node";
    else if (word && next === ":") className = "text-dotnet";

    tokens.push({ text, className });
  }

  return tokens;
}

export function CodeWindow({
  dict,
}: {
  dict: Dictionary["hero"]["codeWindow"];
}) {
  const [active, setActive] = useState(0);
  const file = files[active];
  const lines = file.code
    .replace("{{serverComponentComment}}", dict.serverComponentComment)
    .split("\n");

  return (
    <div className="gradient-border overflow-hidden rounded-2xl bg-surface/90 shadow-[0_40px_120px_-40px_rgba(81,43,212,0.6)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate font-mono text-xs text-muted">
          ~/matheus-hamada
        </span>
      </div>

      <div
        role="tablist"
        aria-label={dict.filesLabel}
        className="flex overflow-x-auto border-b border-line bg-bg/60"
      >
        {files.map((item, index) => {
          const Icon = item.icon;
          const selected = index === active;

          return (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(index)}
              className={`flex shrink-0 cursor-pointer items-center gap-2 border-r border-line px-4 py-2.5 font-mono text-xs transition ${
                selected
                  ? "bg-surface text-fg shadow-[inset_0_-2px_0_var(--js)]"
                  : "text-muted hover:bg-surface/60 hover:text-fg"
              }`}
            >
              <Icon className={item.accent} aria-hidden />
              {item.name}
            </button>
          );
        })}
      </div>

      <pre
        role="tabpanel"
        className="min-h-[340px] overflow-x-auto p-5 font-mono text-[13px] leading-6"
      >
        <code>
          {lines.map((line, index) => (
            <div key={`${file.name}-${index}`} className="flex">
              <span className="mr-5 w-5 shrink-0 select-none text-right text-line">
                {index + 1}
              </span>
              <span className="text-fg/90">
                {highlight(line).map((token, tokenIndex) => (
                  <span key={tokenIndex} className={token.className}>
                    {token.text}
                  </span>
                ))}
                {index === lines.length - 1 && <span className="caret" />}
              </span>
            </div>
          ))}
        </code>
      </pre>

      <div className="flex items-center justify-between border-t border-line bg-dotnet-deep/25 px-4 py-1.5 font-mono text-[11px] text-muted">
        <span>
          <span className="text-node">●</span> main
        </span>
        <span>UTF-8 · {file.name.split(".").pop()?.toUpperCase()}</span>
      </div>
    </div>
  );
}
