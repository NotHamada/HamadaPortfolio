export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Atuação", href: "#projetos" },
  { label: "Projetos pessoais", href: "#projetos-pessoais" },
  { label: "Conquistas", href: "#conquistas" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/NotHamada", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matheushamada/",
    external: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5544991170071",
    external: true,
  },
  { label: "Email", href: "mailto:matheushamada@live.com" },
];

export const profileHighlights = [
  {
    kicker: "Trajetória",
    title: "De estagiário a Analista de Sistemas",
    description:
      "Comecei em 2022 como estagiário na Ironbug Sistemas, evoluí para Desenvolvedor Full Stack .NET e hoje atuo como Analista de Sistemas e Desenvolvedor PHP na Ideal Imóveis Maringá.",
  },
  {
    kicker: "Stack",
    title: "C#, .NET, PHP, AngularJS, React e MySQL",
    description:
      "Desenvolvimento de funcionalidades, integração de APIs REST (como o PagarMe) e modelagem de dados para sistemas de áreas como medicina, financeiro e imobiliário.",
  },
  {
    kicker: "Perfil",
    title: "Analítico, organizado e colaborativo",
    description:
      "Foco em levantamento de requisitos, resolução de problemas, comunicação e trabalho em equipe em ambientes corporativos.",
  },
];

export const projects = [
  {
    type: "Sistemas corporativos",
    title: "Desenvolvimento fullstack .NET e PHP",
    description:
      "Construção e manutenção de funcionalidades para sistemas web usados por operações como Facility Imóveis, SendCase, NineSix e Credbee.",
    stack: ["C#", ".NET", "AngularJS", "PHP"],
  },
  {
    type: "Integrações",
    title: "APIs REST e dados",
    description:
      "Consumo e integração de APIs REST, como o PagarMe, com modelagem e consultas em bancos MySQL para áreas como medicina, financeiro e imobiliário.",
    stack: ["REST APIs", "MySQL", "SQL"],
  },
  {
    type: "Frontend moderno",
    title: "Interfaces com React e Next.js",
    description:
      "Interfaces componentizadas em React e Next.js, apoiadas por APIs em Node.js/NestJS, além de correção de bugs, melhoria de performance e evolução contínua de módulos.",
    stack: ["React", "Next.js", "Node.js", "NestJS"],
  },
];

export const personalProjects = [
  {
    title: "F1Statistics",
    description:
      "Projeto pessoal dedicado a reunir e apresentar estatísticas da Fórmula 1, facilitando a consulta e a análise de informações da categoria em uma experiência centralizada.",
    href: "https://github.com/NotHamada/F1Statistics",
    tags: ["Fórmula 1", "Estatísticas", "Projeto pessoal"],
  },
];

export const stackEcosystems = [
  {
    id: "dotnet",
    name: ".NET & C#",
    tagline: "Backend robusto, tipado e pronto para o ambiente corporativo.",
    items: [
      "C#",
      ".NET Core",
      "ASP.NET",
      "Web APIs REST",
      "Arquitetura MVC",
    ],
  },
  {
    id: "js",
    name: "JavaScript & TypeScript",
    tagline: "Do servidor Node.js à interface React, com a mesma linguagem.",
    items: ["React", "Next.js", "Node.js", "NestJS", "TypeScript", "AngularJS"],
  },
];

export const skillGroups = [
  {
    title: "Dados & Integrações",
    items: ["MySQL", "SQL", "REST APIs", "PagarMe", "PHP"],
  },
  {
    title: "Fundamentos",
    items: ["Git", "HTML", "CSS", "C", "C++", "Excel"],
  },
  {
    title: "Competências",
    items: [
      "Gestão de Projetos",
      "Levantamento de Requisitos",
      "Documentação",
      "Comunicação",
      "Inglês avançado",
    ],
  },
];

export const experience = [
  {
    period: "Ago 2026 - Atual",
    title: "Analista de Sistemas e Desenvolvedor PHP - Ideal Imóveis Maringá",
    description:
      "Levantamento de requisitos junto às áreas envolvidas, desenvolvimento e atualização de módulos PHP para o sistema da Credbee (plataforma de garantia locatícia) e soluções internas para melhoria contínua do sistema.",
  },
  {
    period: "Ago 2024 - Jun 2026",
    title: "Desenvolvedor Full Stack .NET - Ironbug Sistemas",
    description:
      "Desenvolvimento e manutenção de sistemas web corporativos (Facility Imóveis, SendCase e NineSix) com C# (.NET Core) e AngularJS, integração de APIs REST (incluindo PagarMe) e modelagem de dados em MySQL para áreas como medicina, financeiro e imobiliário.",
  },
  {
    period: "Mar 2022 - Jul 2024",
    title: "Estagiário de Ciência da Computação - Ironbug Sistemas",
    description:
      "Suporte ao desenvolvimento e manutenção de aplicações web, participando de correções de bugs, testes e implementação de funcionalidades, com aprendizado prático de arquitetura MVC e desenvolvimento fullstack.",
  },
];

export const education = [
  {
    period: "Ago 2021 - Dez 2026",
    title: "Bacharelado em Ciência da Computação",
    institution: "Universidade Estadual de Maringá (UEM)",
    status: "Cursando",
  },
  {
    period: "Mai 2021 - Nov 2023",
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "UniCesumar",
    status: "Concluído",
  },
];

export const certifications = [
  "Take Blip Full Stack Developer",
  "Impulso Full Stack Developer",
  "Santander Bootcamp | Full Stack Developer",
  "Banco Carrefour Full Stack Developer",
  "Pottencial .NET Developer",
];

export const achievements = [
  {
    title: "2º lugar — Hackathon SECOMP by Elotech 2024",
    description:
      "Parceria entre a Elotech Gestão Pública e a Semana da Computação (UEM), com o projeto “Faladoria”, voltado a soluções de inteligência artificial para gestão pública.",
  },
];

export const languages = [
  { language: "Português", level: "Nativo" },
  { language: "Inglês", level: "Avançado" },
];

export const interests = [
  "Leitura",
  "Esportes",
  "Colecionar TCGs",
  "Conversar sobre temas variados",
];
