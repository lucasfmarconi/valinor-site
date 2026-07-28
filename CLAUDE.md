# Valinor company site — context

Bilingual (EN `/`, PT-BR `/pt/`) static site for Valinor Consultoria e Engenharia de
Software (brand: Valinor Software Engineering). Astro 5 + Tailwind v4, zero client JS.
Visual identity mirrors the I/O Smith landing page (dark GitHub-style tokens in
`src/styles/global.css` — keep them in sync conceptually).

- All copy lives in `src/i18n/index.ts` (en + pt objects, typed by `Dict`).
  Edit copy there only — components render from it. Company voice, never personal.
- Deploy target: Netlify → valinor.dev.br (+ www). The I/O Smith site gets
  `smithio.valinor.dev.br` on its own Netlify site. DNS stays at Registro.br.
  Full deploy/DNS steps and post-launch checklist: `README.md`.
- Contact form uses Netlify Forms (`name="contact"`); keep the hidden
  `form-name` input if restructuring.
- Footer must keep legal name + CNPJ 41.814.250/0001-42 and the "42 / Don't panic"
  easter egg (one place only, subtle).
- Original planning doc: io-smith repo, `specs/004-valinor-site/plan.md`.

Remaining work: create GitHub repo, connect Netlify, add domains, set DNS records
(see README), verify Lighthouse ≥ 95, optionally add Playwright smoke tests.
