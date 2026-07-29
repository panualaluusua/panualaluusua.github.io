# Agent instructions

## Project

This repository is Panu Alaluusua's static portfolio site published through
GitHub Pages. It presents professional experience, public engineering projects,
writing, credentials and contact links.

## Sources of truth

Use these in order:

1. explicit user instructions;
2. this file and `CLAUDE.md`;
3. `docs/project-overview.md` and `docs/portfolio-project-pattern.md`;
4. `index.html` and project case-study pages;
5. older planning files in `docs/` as dated background.

## Portfolio project pattern

Strong portfolio projects should use the B + C pattern documented in
`docs/portfolio-project-pattern.md`:

- **B: featured homepage treatment** in `index.html`, not just a small grid card;
- **C: dedicated case study page** under `projects/`.

Use this pattern when a project is strategically important, has enough public
evidence, and needs more than a few sentences to communicate the engineering
thinking. Keep ordinary or supporting projects as compact cards.

For B + C projects:

- state the problem and audience quickly;
- explain the design choice and trade-offs;
- include concrete evidence such as tests, releases, CI, demos or public links;
- include honest limitations and boundaries;
- avoid inflated claims, invented metrics or confidential client details;
- prefer architecture diagrams, screenshots or other real project assets over
  generic decorative imagery.

## Current featured-project precedent

ContextVault is the current reference implementation of the B + C pattern:

- homepage featured system in `index.html`;
- case study page at `projects/contextvault.html`;
- local architecture asset at `assets/contextvault-architecture.svg`.

Future major projects should follow the same relationship: short featured
summary on the homepage, deeper case page for context, evidence and limits.

## Editing guidance

- The site is static HTML/CSS/JavaScript. Do not add a build system unless the
  user explicitly asks for one.
- Preserve the current paper-like visual language and rough-card treatment.
- Keep project claims specific, evidence-backed and professionally modest.
- Customer names, private data, implementation details and confidential numbers
  must remain omitted or anonymized.
- Verify local links and asset paths after adding pages or project assets.
