const pt = {
  meta: {
    title: "Matheus Hamada | Full Stack Developer",
    description:
      "Landing page pessoal de Matheus Hamada, desenvolvedor fullstack focado em C# e .NET no backend e no ecossistema JavaScript (React, Next.js, Node.js e NestJS).",
  },
  header: {
    contact: "contato()",
    sectionsNav: "Navegação pelas seções",
    languageSwitcher: "Idioma do site",
  },
  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Stack", href: "#stack" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Atuação", href: "#projetos" },
    { label: "Projetos pessoais", href: "#projetos-pessoais" },
    { label: "Conquistas", href: "#conquistas" },
  ],
  hero: {
    badge: "Full Stack Developer · Maringá - PR",
    backend: "Backend em",
    frontend: "Frontend em",
    tagline: "do banco ao pixel.",
    introBefore: "Sou",
    introAfter:
      ", desenvolvedor fullstack. Construo APIs e sistemas corporativos com C# e .NET e interfaces modernas com React, Next.js, Node.js e NestJS.",
    primaryCta: "Ver experiência",
    secondaryCta: "$ ver --stack",
    stats: [
      { value: "4+", label: "anos desenvolvendo sistemas web" },
      { value: "2º", label: "lugar no Hackathon SECOMP 2024" },
      { value: "5", label: "certificações full stack e .NET" },
    ],
    codeWindow: {
      filesLabel: "Arquivos de exemplo",
      serverComponentComment: "// Server Component: renderizado no servidor",
    },
  },
  about: {
    eyebrow: "sobre",
    title: "Fullstack com base sólida em produto, dados e requisitos.",
    description:
      "Desenvolvo e mantenho sistemas web corporativos: implemento funcionalidades, integro APIs REST, modelo dados e levanto requisitos junto às áreas de negócio.",
    highlights: [
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
    ],
  },
  stack: {
    eyebrow: "stack",
    title: "Dois ecossistemas, uma entrega de ponta a ponta.",
    description:
      "C# e .NET para APIs e regras de negócio; React, Next.js, Node.js e NestJS para interfaces e serviços em JavaScript/TypeScript.",
    ecosystems: {
      dotnet: {
        name: ".NET & C#",
        tagline: "Backend robusto, tipado e pronto para o ambiente corporativo.",
        items: ["C#", ".NET Core", "ASP.NET", "Web APIs REST", "Arquitetura MVC"],
      },
      js: {
        name: "JavaScript & TypeScript",
        tagline: "Do servidor Node.js à interface React, com a mesma linguagem.",
        items: ["React", "Next.js", "Node.js", "NestJS", "TypeScript", "AngularJS"],
      },
    },
    groups: [
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
    ],
    certifications: "Certificações",
  },
  experience: {
    eyebrow: "experiência",
    title: "Trajetória profissional e acadêmica.",
    description:
      "Do estágio em 2022 até a atuação atual: cargos, responsabilidades e a formação que sustenta meu trabalho.",
    workLog: "experiencia",
    educationLog: "formacao",
    jobs: [
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
    ],
    education: [
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
    ],
  },
  projects: {
    eyebrow: "atuação",
    title: "Frentes de atuação no desenvolvimento web.",
    description:
      "Sistemas corporativos em .NET, integrações e dados, e interfaces modernas no ecossistema JavaScript.",
    items: [
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
    ],
  },
  personalProjects: {
    eyebrow: "projetos pessoais",
    title: "Meus repositórios em destaque no GitHub.",
    description:
      "Projetos próprios que marco com estrela no GitHub: uma vitrine que atualizo direto por lá, sem precisar mexer no site.",
    noDescription: "Repositório sem descrição.",
    fallback: [
      {
        title: "F1Statistics",
        description:
          "Projeto pessoal dedicado a reunir e apresentar estatísticas da Fórmula 1, facilitando a consulta e a análise de informações da categoria em uma experiência centralizada.",
        href: "https://github.com/NotHamada/F1Statistics",
        tags: ["Fórmula 1", "Estatísticas", "Projeto pessoal"],
      },
    ],
  },
  achievements: {
    eyebrow: "conquistas",
    title: "Reconhecimento, idiomas e interesses.",
    description:
      "Um prêmio recente, os idiomas que uso no dia a dia e alguns interesses que também fazem parte de quem eu sou.",
    items: [
      {
        title: "2º lugar — Hackathon SECOMP by Elotech 2024",
        description:
          "Parceria entre a Elotech Gestão Pública e a Semana da Computação (UEM), com o projeto “Faladoria”, voltado a soluções de inteligência artificial para gestão pública.",
      },
    ],
    languagesLabel: "Idiomas",
    languages: [
      { language: "Português", level: "Nativo" },
      { language: "Inglês", level: "Avançado" },
    ],
    interestsLabel: "Interesses",
    interests: [
      "Leitura",
      "Esportes",
      "Colecionar TCGs",
      "Conversar sobre temas variados",
    ],
  },
  contact: {
    terminalTitle: "bash — contato",
    command: "dotnet run --project contato",
    titleStart: "Vamos construir algo",
    titleHighlight: "com impacto?",
    description:
      "Estou aberto a oportunidades e conversas sobre desenvolvimento fullstack com .NET, React, Next.js, Node.js e NestJS, sistemas corporativos e integrações.",
  },
  footer: {
    builtWith: "feito com",
  },
};

export default pt;

export type Dictionary = typeof pt;
