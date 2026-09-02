# Saumya Mishra — Premium Portfolio

A from-scratch React + Vite portfolio: black + cherry editorial design, GSAP + ScrollTrigger
motion (cinematic hero intro, pinned project showcase, scroll-triggered reveals), a custom
cursor, magnetic buttons, and a working contact form via Formspree.

## 1. Installation

```bash
npm install
```

## 2. Run in development

```bash
npm run dev
```

Opens the site locally (usually at `http://localhost:5173`) with hot reload.

## 3. Build for production

```bash
npm run build
```

Outputs the optimized static site into `dist/`. Preview the production build with:

```bash
npm run preview
```

## 4. Project structure

```
saumya-portfolio/
├── public/
│   └── resume.pdf              ← your resume PDF, served at /resume.pdf
├── src/
│   ├── assets/
│   │   ├── images/portrait.jpg ← your portrait photo
│   │   └── projects/           ← the 4 project screenshots
│   ├── components/              Navbar, CustomCursor, MagneticButton,
│   │                            ProjectRow, PinnedProject, SplitWords, SkillIcon
│   ├── sections/                Hero, Freelance, Work, About, Skills,
│   │                            Experience, Education, Resume, Contact
│   ├── data/content.js          ← all project/skill/experience/education text
│   ├── styles/                  one CSS file per section/component
│   ├── App.jsx
│   └── main.jsx
├── .env.example
└── package.json
```

## 5. Where your assets live

- **Photo:** `src/assets/images/portrait.jpg` — used in the Hero. Replace this file
  (keep the same name) to swap the photo.
- **Project screenshots:** `src/assets/projects/` — `chat-app.png`,
  `employee-management.png`, `softtoy-store.png`, `campus-wellness.png`.
- **Resume:** `public/resume.pdf` — served directly at `/resume.pdf`, used by both the
  "View Resume" and "Download PDF" buttons.

## 6. Updating project links

All project content (titles, descriptions, tech stack, and links) lives in one place:
`src/data/content.js`, in the `projects` array. Edit the `links` array for any project to
change its GitHub or live-demo URL.

## 7. Updating GitHub / LinkedIn / email

Also in `src/data/content.js`, in the `social` object at the top of the file:

```js
export const social = {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  email: "you@example.com",
};
```

## 8. Configuring the contact form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io) and copy its endpoint URL.
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Paste your endpoint into `.env`:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-id
   ```
4. Restart `npm run dev` (Vite only reads `.env` on startup).

Until this is set, the form will show an inline message telling visitors the endpoint
isn't configured yet — it will never fake a successful submission.

## 9. Deploying

### Vercel
```bash
npm install -g vercel
vercel
```
Set `VITE_FORMSPREE_ENDPOINT` under Project Settings → Environment Variables.

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- Add `VITE_FORMSPREE_ENDPOINT` under Site settings → Environment variables.

### GitHub Pages
1. `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://your-username.github.io/your-repo",
   "scripts": { "deploy": "vite build && gh-pages -d dist" }
   ```
3. Set `base: "/your-repo/"` in `vite.config.js`.
4. `npm run deploy`

Note: GitHub Pages doesn't support build-time secrets in the same way — bake the
Formspree endpoint into a `.env` file locally before building, or use a repo secret with
a GitHub Actions deploy workflow instead of the CLI above.

## Notes on the build

- Motion: GSAP + ScrollTrigger throughout, with `prefers-reduced-motion` respected (the
  pinned project sequence and portrait parallax are skipped when reduced motion is on).
- Custom cursor and magnetic buttons are automatically disabled on touch/narrow (< 860px)
  devices.
- All copy is sourced only from the resume and information provided — no invented
  experience, clients, or stats.
