# Portfolio project pattern

Last updated: 2026-07-29.

Use the **B + C pattern** for strategically important public portfolio projects.

## The Pattern

**B: Featured homepage treatment**

The project gets a larger, visually distinct treatment on `index.html`. It
should explain the project's value in 10-20 seconds and link to deeper evidence.

Include:

- a concise problem statement;
- the project's role in the portfolio narrative;
- the strongest implementation evidence;
- links to the case study, repository, release, demo or architecture artifact.

**C: Dedicated case study page**

The project also gets a standalone page under `projects/`. The case page should
show engineering thinking, not marketing copy.

Recommended structure:

1. Problem and audience.
2. Context or system model.
3. Design choice and trade-offs.
4. Implementation details.
5. Architecture diagram, screenshot or other real asset.
6. Evidence: tests, CI, release, evaluation, demo or public deployment.
7. Limits and intentionally deferred work.
8. Links to source material.

## When to Use

Use B + C when a project:

- is central to the AI Engineer / AI Architect positioning;
- has public code or other public evidence;
- demonstrates architecture, reliability, evaluation, governance or delivery;
- needs more explanation than a compact card can provide.

Keep smaller or supporting projects as normal homepage cards.

## Current Reference

ContextVault is the current reference implementation:

- homepage featured section: `index.html`;
- case study: `projects/contextvault.html`;
- architecture asset: `assets/contextvault-architecture.svg`;
- public repository: `https://github.com/panualaluusua/contextvault-memoryagent`;
- release: `v0.1.0`.

The ContextVault case frames the project as a governed memory layer for
long-running multi-agent software work. It distinguishes session state, repo
context, cross-repo context, retrieval context and governed memory, then shows
where ContextVault fits.

## Quality Bar

- Do not invent metrics or impact claims.
- Separate synthetic evaluation from real-world business impact.
- State limitations clearly.
- Keep confidential client details anonymized.
- Prefer real architecture diagrams, screenshots, release links and test
  evidence over generic visuals.
- Maintain the current static-site architecture unless a user explicitly asks
  for a build system.
