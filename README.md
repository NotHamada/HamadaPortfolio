# Matheus Hamada — Portfolio

Personal portfolio of **Matheus Hamada**, a Full Stack Developer and Systems Analyst working with C#/.NET, Angular, React, Next.js, Node.js and NestJS.

The site is bilingual (Portuguese and English), statically generated with Next.js and deployed on Vercel.

## Features

- **IDE-inspired design**: .NET violet and JavaScript cyan palette, an interactive code window in the hero (C#, React and NestJS tabs) and a terminal-style contact section.
- **Portuguese / English**: locale-prefixed routes (`/pt`, `/en`) with a PT | EN switcher in the header. Visiting `/` redirects to the language saved in a cookie or, failing that, the browser's `Accept-Language` (Portuguese by default).
- **Live GitHub projects**: the projects section lists the repositories I star on GitHub, revalidated every hour, next to a featured project card.
- **SEO**: localized metadata, `hreflang` alternates and `<html lang>` per language.
- **Accessibility and responsiveness**: works at phone width, respects `prefers-reduced-motion` and has visible focus states.
- **Analytics**: Vercel Web Analytics.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, `proxy.ts`)
- React 19 and TypeScript
- Tailwind CSS 4
- [react-icons](https://react-icons.github.io/react-icons/)
- Fonts via `next/font`: Geist, Space Grotesk and JetBrains Mono

## Getting started

The app lives in the `front` folder.

```bash
cd front
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You will be redirected to `/pt` or `/en`.

### Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the development server       |
| `npm run build` | Create a production build          |
| `npm run start` | Serve the production build         |
| `npm run lint`  | Run ESLint                         |

### Environment variables

| Variable       | Required | Description                                                                                  |
| -------------- | -------- | -------------------------------------------------------------------------------------------- |
| `GITHUB_TOKEN` | No       | GitHub token used to fetch starred repositories with a higher API rate limit. Without it, the section falls back to a static list if the limit is reached. |

## Project structure

```
front/
├── proxy.ts                     # Redirects / to /pt or /en and remembers the choice
└── app/
    ├── [lang]/
    │   ├── layout.tsx           # Root layout, fonts and localized metadata
    │   └── page.tsx             # Page composition
    ├── _components/             # Header, footer, code window, switcher, sections
    ├── _i18n/
    │   ├── config.ts            # Supported locales
    │   └── dictionaries/        # pt.ts and en.ts: all site copy
    ├── _data/site.ts            # Language-independent data (links, certifications)
    ├── _lib/github.ts           # Starred repositories from the GitHub API
    ├── globals.css              # Theme tokens and global styles
    ├── icon.svg                 # Favicon
    └── apple-icon.png           # Apple touch icon
```

## Editing content

All text on the site lives in `front/app/_i18n/dictionaries/pt.ts` and `en.ts`. The English dictionary is typed against the Portuguese one, so the build fails if a key is missing in either language.

To show a repository in the projects section, star it on GitHub. It appears on the site within an hour.

## Deployment

The project is deployed on [Vercel](https://vercel.com) with **Root Directory** set to `front`. Every push to `main` triggers a production deployment, and pull requests get preview deployments.

## Contact

- LinkedIn: [linkedin.com/in/matheushamada](https://www.linkedin.com/in/matheushamada/)
- GitHub: [github.com/NotHamada](https://github.com/NotHamada)
- Email: [matheushamada@live.com](mailto:matheushamada@live.com)
