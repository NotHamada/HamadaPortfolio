export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Experiencia", href: "#experiencia" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
  { label: "Email", href: "mailto:contato@hamada.dev" },
];

export const profileHighlights = [
  {
    kicker: "Produto",
    title: "Traduzo requisitos em fluxo de uso",
    description:
      "Antes de escrever codigo, procuro entender a jornada, as decisoes do usuario e o que precisa ficar simples.",
  },
  {
    kicker: "Frontend",
    title: "Interfaces responsivas e consistentes",
    description:
      "Componentes bem divididos, estados previsiveis e atencao a performance visual em telas pequenas e grandes.",
  },
  {
    kicker: "Entrega",
    title: "Organizacao para evoluir sem travar",
    description:
      "Estruturo arquivos, dados e estilos de forma clara para que o projeto continue facil de manter.",
  },
];

export const projects = [
  {
    type: "Aplicacao web",
    title: "Dashboard operacional",
    description:
      "Painel responsivo para leitura rapida de indicadores, filtros e acoes prioritarias.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    type: "Landing page",
    title: "Pagina de conversao",
    description:
      "Experiencia de apresentacao com narrativa visual, secoes objetivas e chamada clara para contato.",
    stack: ["React", "SEO", "UI"],
  },
  {
    type: "Sistema interno",
    title: "Fluxo administrativo",
    description:
      "Interface para tarefas recorrentes, com foco em rapidez, organizacao e reducao de atrito.",
    stack: ["Forms", "APIs", "UX"],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "CSS moderno"],
  },
  {
    title: "Arquitetura",
    items: ["Componentizacao", "Design responsivo", "Acessibilidade", "SEO"],
  },
  {
    title: "Backend e dados",
    items: ["Node.js", "REST APIs", "SQL", "Integracoes"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "ESLint", "Figma", "Deploy"],
  },
];

export const experience = [
  {
    period: "Descoberta",
    title: "Entendimento do objetivo",
    description:
      "Mapeio publico, contexto e prioridades para que a interface comunique o que realmente importa.",
  },
  {
    period: "Construcao",
    title: "Componentes separados e reutilizaveis",
    description:
      "Divido a pagina em partes pequenas, com dados isolados e responsabilidades claras.",
  },
  {
    period: "Refino",
    title: "Animacoes e acabamento",
    description:
      "Uso movimento com proposito para guiar o olhar durante o scroll, sem prejudicar legibilidade.",
  },
];
