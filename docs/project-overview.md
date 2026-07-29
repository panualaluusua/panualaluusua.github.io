# Project Overview: panualaluusua.github.io

Last updated: 2026-07-29.

This project is Panu Alaluusua's static portfolio website. It presents
professional experience, public engineering projects, writing, credentials and
contact links. The site is hosted with GitHub Pages through the custom domain
`panualaluusua.fi`.

## Core Parts

- `index.html`: the main static page with hero, professional experience, public
  work, writing, digest, credentials and contact sections.
- `projects/`: dedicated case study pages for strategically important public
  projects.
- `assets/`: local visual assets such as architecture diagrams and digest
  images.
- `docs/`: documentation, planning notes and portfolio conventions.
- `AGENTS.md` / `CLAUDE.md`: repository instructions for coding agents.
- `Panu_Alaluusua_CV.md` and PDF files: downloadable CV material.
- `CNAME`: GitHub Pages custom-domain configuration.

## Portfolio Project Pattern

Strategically important portfolio projects use the **B + C pattern**:

- **B: featured homepage treatment** in `index.html`;
- **C: dedicated case study page** under `projects/`.

The current reference is ContextVault:

- homepage featured section in `index.html`;
- case study at `projects/contextvault.html`;
- architecture asset at `assets/contextvault-architecture.svg`.

Use this pattern when a project is central to the AI Engineer / AI Architect
positioning and has enough public evidence to justify a deeper case page.
Supporting projects should remain as compact homepage cards.

See `docs/portfolio-project-pattern.md` for the full convention.

## Technologies

- Static HTML, CSS and vanilla JavaScript.
- Rough.js for hand-drawn card and button borders.
- Google Fonts for the current paper-like visual style.
- GitHub Pages for hosting.

Do not add a build system unless explicitly requested.

## Maintenance Notes

- Keep project claims evidence-backed and professionally modest.
- Do not invent metrics or impact claims.
- Keep client work anonymized.
- Prefer real project assets such as architecture diagrams, screenshots and
  release links over generic decorative imagery.
- Verify local `href` and `src` paths after adding pages or assets.
