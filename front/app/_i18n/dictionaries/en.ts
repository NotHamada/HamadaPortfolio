import type { Dictionary } from "./pt";

const en: Dictionary = {
  meta: {
    title: "Matheus Hamada | Full Stack Developer",
    description:
      "Personal landing page of Matheus Hamada, a full stack developer focused on C# and .NET on the backend and the JavaScript ecosystem (React, Next.js, Node.js and NestJS).",
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
    { label: "Side projects", href: "#projetos-pessoais" },
    { label: "Achievements", href: "#conquistas" },
  ],
  hero: {
    badge: "Full Stack Developer · Maringá, Brazil",
    backend: "Backend in",
    frontend: "Frontend in",
    tagline: "from database to pixel.",
    introBefore: "I'm",
    introAfter:
      ", a full stack developer. I build APIs and enterprise systems with C# and .NET, and modern interfaces with React, Next.js, Node.js and NestJS.",
    primaryCta: "See experience",
    secondaryCta: "$ show --stack",
    stats: [
      { value: "4+", label: "years building web systems" },
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
    title: "Full stack with a solid foundation in product, data and requirements.",
    description:
      "I build and maintain enterprise web systems: shipping features, integrating REST APIs, modeling data and gathering requirements with business teams.",
    highlights: [
      {
        kicker: "Journey",
        title: "From intern to Systems Analyst",
        description:
          "I started in 2022 as an intern at Ironbug Sistemas, grew into a Full Stack .NET Developer, and today I work as a Systems Analyst and PHP Developer at Ideal Imóveis Maringá.",
      },
      {
        kicker: "Stack",
        title: "C#, .NET, PHP, AngularJS, React and MySQL",
        description:
          "Feature development, REST API integrations (such as PagarMe) and data modeling for systems in healthcare, finance and real estate.",
      },
      {
        kicker: "Profile",
        title: "Analytical, organized and collaborative",
        description:
          "Focused on requirements gathering, problem solving, communication and teamwork in corporate environments.",
      },
    ],
  },
  stack: {
    eyebrow: "stack",
    title: "Two ecosystems, one end-to-end delivery.",
    description:
      "C# and .NET for APIs and business rules; React, Next.js, Node.js and NestJS for interfaces and services in JavaScript/TypeScript.",
    ecosystems: {
      dotnet: {
        name: ".NET & C#",
        tagline: "Robust, strongly typed backends ready for the enterprise.",
        items: ["C#", ".NET Core", "ASP.NET", "REST Web APIs", "MVC Architecture"],
      },
      js: {
        name: "JavaScript & TypeScript",
        tagline: "From Node.js servers to React interfaces, in one language.",
        items: ["React", "Next.js", "Node.js", "NestJS", "TypeScript", "AngularJS"],
      },
    },
    groups: [
      {
        title: "Data & Integrations",
        items: ["MySQL", "SQL", "REST APIs", "PagarMe", "PHP"],
      },
      {
        title: "Fundamentals",
        items: ["Git", "HTML", "CSS", "C", "C++", "Excel"],
      },
      {
        title: "Soft skills",
        items: [
          "Project Management",
          "Requirements Gathering",
          "Documentation",
          "Communication",
          "Advanced English",
        ],
      },
    ],
    certifications: "Certifications",
  },
  experience: {
    eyebrow: "experience",
    title: "Professional and academic journey.",
    description:
      "From my internship in 2022 to my current role: positions, responsibilities and the education behind my work.",
    workLog: "experience",
    educationLog: "education",
    jobs: [
      {
        period: "Aug 2026 - Present",
        title: "Systems Analyst & PHP Developer - Ideal Imóveis Maringá",
        description:
          "Requirements gathering with stakeholders, development and maintenance of PHP modules for Credbee (a rental guarantee platform), and internal solutions for continuous improvement of the system.",
      },
      {
        period: "Aug 2024 - Jun 2026",
        title: "Full Stack .NET Developer - Ironbug Sistemas",
        description:
          "Built and maintained enterprise web systems (Facility Imóveis, SendCase and NineSix) with C# (.NET Core) and AngularJS, integrated REST APIs (including PagarMe) and modeled MySQL data for healthcare, finance and real estate.",
      },
      {
        period: "Mar 2022 - Jul 2024",
        title: "Computer Science Intern - Ironbug Sistemas",
        description:
          "Supported the development and maintenance of web applications through bug fixes, testing and feature work, gaining hands-on experience with MVC architecture and full stack development.",
      },
    ],
    education: [
      {
        period: "Aug 2021 - Dec 2026",
        title: "Bachelor's in Computer Science",
        institution: "State University of Maringá (UEM)",
        status: "In progress",
      },
      {
        period: "May 2021 - Nov 2023",
        title: "Technologist Degree in Systems Analysis and Development",
        institution: "UniCesumar",
        status: "Completed",
      },
    ],
  },
  projects: {
    eyebrow: "work",
    title: "Areas of work in web development.",
    description:
      "Enterprise systems in .NET, integrations and data, and modern interfaces in the JavaScript ecosystem.",
    items: [
      {
        type: "Enterprise systems",
        title: "Full stack .NET and PHP development",
        description:
          "Building and maintaining features for web systems used by businesses such as Facility Imóveis, SendCase, NineSix and Credbee.",
        stack: ["C#", ".NET", "AngularJS", "PHP"],
      },
      {
        type: "Integrations",
        title: "REST APIs and data",
        description:
          "Consuming and integrating REST APIs such as PagarMe, with MySQL modeling and queries for healthcare, finance and real estate.",
        stack: ["REST APIs", "MySQL", "SQL"],
      },
      {
        type: "Modern frontend",
        title: "Interfaces with React and Next.js",
        description:
          "Component-based interfaces in React and Next.js backed by Node.js/NestJS APIs, plus bug fixes, performance improvements and continuous evolution of modules.",
        stack: ["React", "Next.js", "Node.js", "NestJS"],
      },
    ],
  },
  personalProjects: {
    eyebrow: "side projects",
    title: "My featured repositories on GitHub.",
    description:
      "Personal projects I star on GitHub: a showcase I update right there, without touching the site.",
    noDescription: "No description provided.",
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
    title: "Recognition, languages and interests.",
    description:
      "A recent award, the languages I use every day and a few interests that are also part of who I am.",
    items: [
      {
        title: "2nd place — SECOMP Hackathon by Elotech 2024",
        description:
          "A partnership between Elotech Gestão Pública and UEM's Computing Week, with “Faladoria”, a project focused on artificial intelligence solutions for public administration.",
      },
    ],
    languagesLabel: "Languages",
    languages: [
      { language: "Portuguese", level: "Native" },
      { language: "English", level: "Advanced" },
    ],
    interestsLabel: "Interests",
    interests: [
      "Reading",
      "Sports",
      "Collecting TCGs",
      "Talking about all kinds of topics",
    ],
  },
  contact: {
    terminalTitle: "bash — contact",
    command: "dotnet run --project contact",
    titleStart: "Let's build something",
    titleHighlight: "that makes an impact.",
    description:
      "I'm open to opportunities and conversations about full stack development with .NET, React, Next.js, Node.js and NestJS, enterprise systems and integrations.",
  },
  footer: {
    builtWith: "built with",
  },
};

export default en;
