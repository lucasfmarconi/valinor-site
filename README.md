# valinor.dev.br — Valinor Software Engineering

Bilingual (EN `/`, PT-BR `/pt/`) static company site. Astro 5 + Tailwind v4, zero client-side JS.
Visual identity shared with the I/O Smith landing page.

## Local dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Deploy (Netlify)

1. Move this folder out of the io-smith repo and make it its own repo:
   ```bash
   mv valinor-site ~/dev/valinor-site && cd ~/dev/valinor-site
   git init && git add -A && git commit -m "Valinor company site"
   gh repo create valinor-site --private --source=. --push
   ```
2. Netlify → Add new site → Import from GitHub → `valinor-site`. Build command and publish dir come from `netlify.toml`.
3. Site settings → Domain management → add `valinor.dev.br` (primary) and `www.valinor.dev.br`.
4. On the **existing I/O Smith Netlify site** → Domain management → add `smithio.valinor.dev.br`.
5. Forms → `contact` → Notifications → Email → valinordev@proton.me.

## DNS (Registro.br → painel DNS)

| Record | Type | Value |
|---|---|---|
| `valinor.dev.br` (apex) | A | `75.2.60.5` |
| `www` | CNAME | `<valinor-site>.netlify.app.` |
| `smithio` | CNAME | `<io-smith-site>.netlify.app.` |

HTTPS certs are auto-provisioned by Netlify after DNS propagates.

## Post-launch checklist

- [ ] `valinor.dev.br`, `www.`, `smithio.` resolve with valid certs; `www` redirects to apex
- [ ] Contact form submission arrives (check spam)
- [ ] EN/PT toggle works both ways; `hreflang` present in both pages
- [ ] Lighthouse ≥ 95 performance/accessibility
- [ ] Google Search Console: verify domain (TXT via Registro.br), submit sitemap
- [ ] Replace `public/og-image.png` placeholder if a designed one becomes available
