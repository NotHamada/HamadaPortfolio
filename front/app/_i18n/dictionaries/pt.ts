const pt = {
  meta: {
    title: "Matheus Hamada | Full Stack Developer",
    description:
      "Matheus Hamada, Desenvolvedor Full Stack e Analista de Sistemas com mais de 4 anos em sistemas web corporativos com C# (.NET Core), Angular, React, Next.js, Node.js, NestJS e MySQL.",
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
    { label: "Projetos", href: "#projetos-pessoais" },
    { label: "Conquistas", href: "#conquistas" },
  ],
  hero: {
    badge: "Full Stack Developer · Analista de Sistemas · Maringá - PR",
    backend: "Backend em",
    frontend: "Frontend em",
    tagline: "do banco ao pixel.",
    introBefore: "Sou",
    introAfter:
      ", desenvolvedor full stack. Há mais de 4 anos entrego e evoluo sistemas web corporativos em produção com C# (.NET Core), AngularJS, React, Next.js, Node.js e MySQL.",
    primaryCta: "Ver experiência",
    secondaryCta: "$ ver --stack",
    stats: [
      { value: "4+", label: "anos em sistemas web em produção" },
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
    title: "Sistemas corporativos em produção, do banco à interface.",
    description:
      "Desenvolvo e evoluo sistemas web para saúde, financeiro e imobiliário: levanto requisitos, integro APIs REST, modelo dados e entrego funcionalidades de ponta a ponta.",
    highlights: [
      {
        kicker: "Trajetória",
        title: "De estagiário a Full Stack em 2 anos e 5 meses",
        description:
          "Comecei em 2022 como estagiário na Ironbug Sistemas, cresci para Desenvolvedor Full Stack .NET na mesma empresa e hoje sou Analista de Sistemas e Desenvolvedor PHP na Ideal Imóveis Maringá.",
      },
      {
        kicker: "Stack",
        title: "C#, .NET Core, Angular, React, Next.js e Node.js",
        description:
          "Funcionalidades em produção, integração de APIs REST (como a de pagamentos PagarMe) e modelagem de dados em MySQL, SQL Server e PostgreSQL.",
      },
      {
        kicker: "Forma de trabalhar",
        title: "Requisitos validados e IA com revisão própria",
        description:
          "Cada entrega parte de uma necessidade validada com as áreas envolvidas. Uso IA generativa (Claude) para acelerar o desenvolvimento, sempre com revisão e validação minhas.",
      },
    ],
  },
  stack: {
    eyebrow: "stack",
    title: "Dois ecossistemas, uma entrega de ponta a ponta.",
    description:
      "C# e .NET Core para APIs e regras de negócio; Angular, React, Next.js, Node.js e NestJS para interfaces e serviços em JavaScript.",
    ecosystems: {
      dotnet: {
        name: ".NET & C#",
        tagline: "Backend robusto, tipado e pronto para o ambiente corporativo.",
        items: ["C#", ".NET Core", "ASP.NET", "APIs REST", "Arquitetura MVC"],
      },
      js: {
        name: "Ecossistema JavaScript",
        tagline: "Do servidor Node.js à interface React, com a mesma linguagem.",
        items: ["React", "Next.js", "Node.js", "NestJS", "AngularJS", "JavaScript"],
      },
    },
    groups: [
      {
        title: "Dados",
        items: [
          "MySQL",
          "SQL Server",
          "PostgreSQL",
          "Modelagem de Dados",
          "Análise de Dados",
        ],
      },
      {
        title: "Práticas de Engenharia",
        items: [
          "Git",
          "GitHub Actions (CI/CD)",
          "Scrum / Kanban",
          "Testes de API e unitários",
          "IA Generativa (Claude)",
        ],
      },
      {
        title: "Análise & Também uso",
        items: [
          "Análise de Sistemas",
          "Levantamento de Requisitos",
          "PHP",
          "PagarMe API",
        ],
      },
    ],
    certifications: "Certificações",
  },
  experience: {
    eyebrow: "experiência",
    title: "Trajetória profissional e acadêmica.",
    description:
      "Do estágio em 2022 até a atuação atual: cargos, entregas e a formação que sustenta meu trabalho.",
    workLog: "experiencia",
    educationLog: "formacao",
    jobs: [
      {
        period: "Ago 2026 - Atual",
        title: "Analista de Sistemas e Desenvolvedor PHP",
        company: "Ideal Imóveis Maringá",
        highlights: [
          "Levanto requisitos com as áreas envolvidas antes de cada desenvolvimento no sistema da Credbee (garantia locatícia), garantindo que cada entrega parta de uma necessidade validada.",
          "Desenvolvo e atualizo módulos em PHP, mantendo a plataforma em evolução contínua.",
          "Analiso projetos internos e desenvolvo soluções em PHP que sustentam a melhoria contínua do sistema.",
        ],
      },
      {
        period: "Ago 2024 - Jun 2026",
        title: "Desenvolvedor Full Stack .NET",
        company: "Ironbug Sistemas",
        highlights: [
          "Entreguei e mantive funcionalidades em C# (.NET Core) e AngularJS em sistemas em produção: Facility Imóveis, NineSix e SendCase, plataforma de consultas virtuais ainda ativa em UBS da região.",
          "Integrei APIs REST, incluindo a de pagamentos PagarMe, e modelei dados em MySQL para sistemas de medicina, financeiro e imobiliário.",
          "Corrigi bugs e otimizei a performance das aplicações, melhorando o desempenho dos sistemas e automatizando partes cruciais.",
        ],
      },
      {
        period: "Mar 2022 - Jul 2024",
        title: "Estagiário de Ciência da Computação",
        company: "Ironbug Sistemas",
        highlights: [
          "Apoiei o desenvolvimento e a manutenção de aplicações web, corrigindo bugs, testando e implementando funcionalidades.",
          "Evoluí de estagiário a Desenvolvedor Full Stack na mesma empresa em 2 anos e 5 meses, aprendendo arquitetura MVC e desenvolvimento full stack na prática.",
        ],
      },
    ],
    education: [
      {
        period: "Ago 2021 - Dez 2026",
        title: "Bacharelado em Ciência da Computação",
        institution: "Universidade Estadual de Maringá (UEM)",
        status: "Previsto",
        note: "TCC voltado à área de Big Data e processamento NoSQL.",
      },
      {
        period: "Mai 2021 - Nov 2023",
        title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        institution: "UniCesumar",
        status: "Concluído",
        note: "",
      },
    ],
  },
  projects: {
    eyebrow: "atuação",
    title: "Frentes de atuação no desenvolvimento web.",
    description:
      "Sistemas corporativos em produção, integrações e dados, e melhoria contínua de performance e qualidade.",
    items: [
      {
        type: "Sistemas corporativos",
        title: "Full stack .NET em produção",
        description:
          "Funcionalidades em C# (.NET Core) e AngularJS para Facility Imóveis, NineSix e SendCase, plataforma de consultas virtuais ainda ativa em UBS da região, além de módulos PHP para a Credbee.",
        stack: ["C#", ".NET Core", "AngularJS", "PHP"],
      },
      {
        type: "Integrações",
        title: "APIs REST e dados",
        description:
          "Integração de APIs REST, incluindo a de pagamentos PagarMe, e modelagem de dados em MySQL para sistemas de medicina, financeiro e imobiliário.",
        stack: ["APIs REST", "PagarMe", "MySQL"],
      },
      {
        type: "Qualidade e performance",
        title: "Otimização e automação",
        description:
          "Correção de bugs, otimização de performance e automação de partes cruciais dos sistemas, com testes de API e unitários e requisitos validados antes de cada entrega.",
        stack: ["Git", "GitHub Actions", "Testes", "Scrum"],
      },
    ],
  },
  personalProjects: {
    eyebrow: "projetos",
    title: "Projetos pessoais e repositórios em destaque.",
    description:
      "O que construo fora do trabalho, mais os repositórios que marco com estrela no GitHub, que atualizam o site sozinhos.",
    noDescription: "Repositório sem descrição.",
    featured: {
      badge: "Projeto em destaque",
      name: "Sonalytics",
      period: "Ago 2026 - Atual",
      highlights: [
        "Aplicação web de análise do meu histórico de audição no Spotify, com dashboard completo, insights e relatórios no estilo Wrapped.",
        "Desenvolvida com Next.js (React) e Node.js e publicada na Vercel, usando IA generativa como apoio e mantendo arquitetura e validação sob minha responsabilidade.",
      ],
      stack: ["Next.js", "React", "Node.js", "Vercel"],
      siteLabel: "Ver online",
      siteHref: "https://sonalytics.vercel.app",
      repoLabel: "Código",
      repoHref: "https://github.com/NotHamada/Sonalytics",
    },
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
    title: "Reconhecimento, idiomas e voluntariado.",
    description:
      "Um prêmio recente, os idiomas que uso no dia a dia e minha atuação voluntária fora da tecnologia.",
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
    volunteer: {
      label: "Atuação voluntária",
      role: "1º Secretário",
      organization:
        "FMECH — Federação das Mocidades Evangélicas Holiness (3ª Região)",
      period: "Abr 2026 - Atual",
      highlights: [
        "Centralizo a comunicação entre a diretoria e os coordenadores de 5 mocidades locais (Assaí, Curitiba, Londrina, Maringá e Paranaguá), mantendo atualizada a base de contatos institucionais.",
        "Organizo os documentos e registros administrativos da federação e apoio o planejamento de atividades e eventos.",
      ],
    },
  },
  contact: {
    terminalTitle: "bash — contato",
    command: "dotnet run --project contato",
    titleStart: "Vamos construir algo",
    titleHighlight: "com impacto?",
    description:
      "Estou aberto a oportunidades e conversas sobre desenvolvimento full stack com .NET, Angular, React, Next.js, Node.js e NestJS, sistemas corporativos e integrações.",
  },
  footer: {
    builtWith: "feito com",
  },
};

export default pt;

export type Dictionary = typeof pt;
