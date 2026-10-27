import type { Dictionary } from "./pt";

const en: Dictionary = {
  meta: {
    title: "Matheus Hamada | Full Stack Developer",
    description:
      "Matheus Hamada, Full Stack Developer and Systems Analyst with 4+ years building corporate web systems with C# (.NET Core), Angular, React, Next.js, Node.js, NestJS and MySQL.",
  },
  header: {
    contact: "contact()",
    sectionsNav: "Section navigation",
    languageSwitcher: "Site language",
  },
  nav: [
    { label: "About", href: "#sobre" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experiencia" },
    { label: "Work", href: "#projetos" },
    { label: "Projects", href: "#projetos-pessoais" },
    { label: "Achievements", href: "#conquistas" },
  ],
  hero: {
    badge: "Full Stack Developer · Systems Analyst · Maringá, Brazil",
    backend: "Backend in",
    frontend: "Frontend in",
    tagline: "from database to pixel.",
    introBefore: "I'm",
    introAfter:
      ", a full stack developer. For 4+ years I've been delivering and evolving corporate web systems in production with C# (.NET Core), AngularJS, React, Next.js, Node.js and MySQL.",
    primaryCta: "See experience",
    secondaryCta: "$ show --stack",
    stats: [
      { value: "4+", label: "years on web systems in production" },
      { value: "2nd", label: "place at SECOMP Hackathon 2024" },
      { value: "5", label: "full stack and .NET certifications" },
    ],
    codeWindow: {
      filesLabel: "Sample files",
      serverComponentComment: "// Server Component: rendered on the server",
    },
  },
  about: {
    eyebrow: "about",
    title: "Corporate systems in production, from database to interface.",
    description:
      "I build and evolve web systems for healthcare, finance and real estate: gathering requirements, integrating REST APIs, modeling data and shipping features end to end.",
    highlights: [
      {
        kicker: "Journey",
        title: "From intern to Full Stack in 2 years and 5 months",
        description:
          "I started in 2022 as an intern at Ironbug Sistemas, grew into a Full Stack .NET Developer at the same company, and now work as a Systems Analyst and PHP Developer at Ideal Imóveis Maringá.",
      },
      {
        kicker: "Stack",
        title: "C#, .NET Core, Angular, React, Next.js and Node.js",
        description:
          "Features in production, REST API integrations (such as the PagarMe payments API) and data modeling in MySQL, SQL Server and PostgreSQL.",
      },
      {
        kicker: "How I work",
        title: "Validated requirements, AI with my own review",
        description:
          "Every delivery starts from a need validated with the teams involved. I use generative AI (Claude) to speed up development, always with my own review and validation.",
      },
    ],
  },
  stack: {
    eyebrow: "stack",
    title: "Two ecosystems, one end-to-end delivery.",
    description:
      "C# and .NET Core for APIs and business rules; Angular, React, Next.js, Node.js and NestJS for interfaces and services in JavaScript.",
    ecosystems: {
      dotnet: {
        name: ".NET & C#",
        tagline: "Robust, strongly typed backends ready for the enterprise.",
        items: ["C#", ".NET Core", "ASP.NET", "REST APIs", "MVC Architecture"],
      },
      js: {
        name: "JavaScript ecosystem",
        tagline: "From Node.js servers to React interfaces, in one language.",
        items: ["React", "Next.js", "Node.js", "NestJS", "AngularJS", "JavaScript"],
      },
    },
    groups: [
      {
        title: "Data",
        items: [
          "MySQL",
          "SQL Server",
          "PostgreSQL",
          "Data Modeling",
          "Data Analysis",
        ],
      },
      {
        title: "Engineering Practices",
        items: [
          "Git",
          "GitHub Actions (CI/CD)",
          "Scrum / Kanban",
          "API and Unit Testing",
          "Generative AI (Claude)",
        ],
      },
      {
        title: "Analysis & Also use",
        items: [
          "Systems Analysis",
          "Requirements Gathering",
          "PHP",
          "PagarMe API",
        ],
      },
    ],
    certifications: "Certifications",
  },
  experience: {
    eyebrow: "experience",
    title: "Professional and academic journey.",
    description:
      "From my internship in 2022 to my current role: positions, deliveries and the education behind my work.",
    workLog: "experience",
    educationLog: "education",
    jobs: [
      {
        period: "Aug 2026 - Present",
        title: "Systems Analyst and PHP Developer",
        company: "Ideal Imóveis Maringá",
        highlights: [
          "Gather requirements with the teams involved before each development on Credbee's system (rental guarantee), ensuring every delivery starts from a validated need.",
          "Develop and update PHP modules, keeping the platform in continuous evolution.",
          "Analyze internal projects and develop PHP solutions that sustain the system's continuous improvement.",
        ],
      },
      {
        period: "Aug 2024 - Jun 2026",
        title: "Full Stack .NET Developer",
        company: "Ironbug Sistemas",
        highlights: [
          "Delivered and maintained features in C# (.NET Core) and AngularJS for corporate systems in production: Facility Imóveis, NineSix, and SendCase, a virtual-consultation platform still in use at public health clinics (UBS) in the region.",
          "Integrated REST APIs, including the PagarMe payments API, and modeled data in MySQL for healthcare, finance, and real estate systems.",
          "Fixed bugs and optimized application performance, improving system responsiveness and automating crucial parts.",
        ],
      },
      {
        period: "Mar 2022 - Jul 2024",
        title: "Computer Science Intern",
        company: "Ironbug Sistemas",
        highlights: [
          "Supported the development and maintenance of web applications by fixing bugs, testing, and implementing features.",
          "Grew from intern to Full Stack Developer at the same company in 2 years and 5 months, learning MVC architecture and full stack development hands-on.",
        ],
      },
    ],
    education: [
      {
        period: "Aug 2021 - Dec 2026",
        title: "Bachelor's Degree in Computer Science",
        institution: "Universidade Estadual de Maringá (UEM)",
        status: "Expected",
        note: "Senior thesis focused on Big Data and NoSQL processing.",
      },
      {
        period: "May 2021 - Nov 2023",
        title: "Associate Degree in Systems Analysis and Development",
        institution: "UniCesumar",
        status: "Completed",
        note: "",
      },
    ],
  },
  projects: {
    eyebrow: "work",
    title: "Areas of work in web development.",
    description:
      "Corporate systems in production, integrations and data, and continuous performance and quality improvement.",
    items: [
      {
        type: "Corporate systems",
        title: "Full stack .NET in production",
        description:
          "Features in C# (.NET Core) and AngularJS for Facility Imóveis, NineSix and SendCase, a virtual-consultation platform still in use at public health clinics in the region, plus PHP modules for Credbee.",
        stack: ["C#", ".NET Core", "AngularJS", "PHP"],
      },
      {
        type: "Integrations",
        title: "REST APIs and data",
        description:
          "REST API integrations, including the PagarMe payments API, and MySQL data modeling for healthcare, finance and real estate systems.",
        stack: ["REST APIs", "PagarMe", "MySQL"],
      },
      {
        type: "Quality and performance",
        title: "Optimization and automation",
        description:
          "Bug fixing, performance optimization and automation of crucial parts of the systems, backed by API and unit tests and requirements validated before each delivery.",
        stack: ["Git", "GitHub Actions", "Testing", "Scrum"],
      },
    ],
  },
  personalProjects: {
    eyebrow: "projects",
    title: "Personal projects and featured repositories.",
    description:
      "What I build outside of work, plus the repositories I star on GitHub, which update the site on their own.",
    noDescription: "No description provided.",
    featured: {
      badge: "Featured project",
      name: "Sonalytics",
      period: "Aug 2026 - Present",
      highlights: [
        "A web app that analyzes my own Spotify listening history, with a full-history dashboard, insights and Wrapped-style reports.",
        "Built with Next.js (React) and Node.js and deployed on Vercel, using generative AI as support while keeping architecture decisions and validation my own responsibility.",
      ],
      stack: ["Next.js", "React", "Node.js", "Vercel"],
      siteLabel: "Live site",
      siteHref: "https://sonalytics.vercel.app",
      repoLabel: "Source",
      repoHref: "https://github.com/NotHamada/Sonalytics",
    },
    fallback: [
      {
        title: "F1Statistics",
        description:
          "A personal project that gathers and presents Formula 1 statistics, making it easy to browse and analyze the sport's data in one place.",
        href: "https://github.com/NotHamada/F1Statistics",
        tags: ["Formula 1", "Statistics", "Side project"],
      },
    ],
  },
  achievements: {
    eyebrow: "achievements",
    title: "Recognition, languages and volunteering.",
    description:
      "A recent award, the languages I use every day and my volunteer work outside of tech.",
    items: [
      {
        title: "2nd Place — SECOMP by Elotech Hackathon 2024",
        description:
          "A partnership between Elotech Gestão Pública and Semana da Computação (UEM), with the project “Faladoria”, focused on AI-driven solutions for public administration.",
      },
    ],
    languagesLabel: "Languages",
    languages: [
      { language: "Portuguese", level: "Native" },
      { language: "English", level: "Advanced" },
    ],
    volunteer: {
      label: "Volunteer experience",
      role: "1st Secretary",
      organization:
        "FMECH — Federação das Mocidades Evangélicas Holiness (3rd Region)",
      period: "Apr 2026 - Present",
      highlights: [
        "Centralize communication between the board and the coordinators of 5 local youth groups (Assaí, Curitiba, Londrina, Maringá and Paranaguá), keeping the institutional contact database up to date.",
        "Organize the federation's administrative documents and records and support the planning of activities and events.",
      ],
    },
  },
  contact: {
    terminalTitle: "bash — contact",
    command: "dotnet run --project contact",
    titleStart: "Let's build something",
    titleHighlight: "that makes an impact.",
    description:
      "I'm open to opportunities and conversations about full stack development with .NET, Angular, React, Next.js, Node.js and NestJS, corporate systems and integrations.",
  },
  footer: {
    builtWith: "built with",
  },
};

export default en;
