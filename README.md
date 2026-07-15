# Anthony Kish — Personal Portfolio

A single-page personal portfolio website for Anthony Kish, a full-stack software engineer. Built with React and Vite, styled with Tailwind CSS, and featuring a custom "cosmos" gradient/starfield background, an animated typing effect, glassmorphism cards, and a downloadable résumé.

**Live site:** [anthonykish.netlify.app](https://anthonykish.netlify.app)

## Tech Stack

- **React 19** — UI library
- **Vite 8** — build tool and dev server (with HMR)
- **Tailwind CSS 4** — styling, via the `@tailwindcss/vite` plugin
- **react-icons** — Font Awesome, Simple Icons, and VS Code icon sets for the tech-stack and social icons
- **ESLint 9** — linting

## Sections

The site (`src/anthony_kish_portfolio.jsx`) is a single scrolling page with:

- **Hero** — name, animated typing headline, and calls to action (Download Résumé / View Projects)
- **About** — bio and headshot
- **Skills / Tech Stack** — grouped by Languages, Frontend, Backend, Databases, Cloud / Infrastructure, AI / Data, Testing / Tooling, and Embedded / Systems
- **Projects** — expandable cards (AI Billing Automation Platform, Clinical Data Web Platform, Automated Hardware Test Framework, Swarm Search & Rescue Robotics)
- **Experience** — a timeline of roles
- **Contact** — email and LinkedIn links

A fixed social sidebar (GitHub, LinkedIn) and a sticky header nav are shown on larger screens.

## Getting Started

Requires [Node.js](https://nodejs.org/) (18+ recommended).

```bash
# Install dependencies
npm install

# Start the dev server (default: http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview

# Lint
npm run lint
```

## Project Structure

```
anthony-portfolio/
├── public/
│   ├── Anthony Kish SWE Resume.pdf   # résumé served for download
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/headshot.jpg
├── src/
│   ├── anthony_kish_portfolio.jsx    # the entire portfolio page + TypingWord component
│   ├── main.jsx                      # React entry point
│   ├── index.css / App.css           # global styles
│   └── assets/
├── index.html                        # Vite HTML entry
├── vite.config.js                    # React + Tailwind plugins
└── eslint.config.js
```

## Editing Content

Most of the page content is defined as data arrays near the top of
[`src/anthony_kish_portfolio.jsx`](src/anthony_kish_portfolio.jsx):

- `navItems` — header navigation links
- `typingWords` — words cycled in the animated hero headline
- `skillCategories` — the tech-stack groups and their icons
- `projects` — project cards
- `experiences` — the experience timeline
- `socialLinks` — sidebar social links

Update the résumé by replacing `public/Anthony Kish SWE Resume.pdf`, and the photo by replacing `public/images/headshot.jpg`.

## Contact

- **Email:** anthonykish@outlook.com
- **GitHub:** [@anthonykish](https://github.com/anthonykish)
- **LinkedIn:** [anthony-kish](https://linkedin.com/in/anthony-kish)
