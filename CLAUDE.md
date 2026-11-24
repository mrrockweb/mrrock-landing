# Mr. Rock Kft. – landing page

Egyoldalas, kétnyelvű (HU alapértelmezett a `/` alatt, EN a `/en/` alatt) bemutatkozó oldal a „Mr. Rock” Kft. budapesti építőipari vállalkozásnak (lakó- és nem lakóépületek kivitelezése, területelőkészítés, közműépítés, mérnöki tanácsadás, építőanyag-beszerzés). Célközönség: főleg cégek és ingatlanfejlesztők (külföldiek is) Budapesten és környékén; másodlagosan magánszemélyek. A cél egy szép, megbízható hatású oldal, ami ajánlatkérésre (telefon/e-mail) vezet. Az ügyfél kérésére most nincs külön SEO/GEO munka és nincs részletes launch-check: elég az alap (helyes meta, lang, sitemap).

- **Stack:** Astro 7 + Tailwind CSS v4, statikus (SSG), pnpm.
- **Hosting:** Cloudflare Pages (headerek: `public/_headers`).
- **Profil (`doczidev.json`):** landing, i18n (hu/en), sötét mód, LocalBusiness; nincs űrlap, nincs analytics, nincs cookie; AI tréning botok tiltva (`robots.txt`).
- **Tartalom forrása:** [docs/tartalom-hu.md](docs/tartalom-hu.md) (az ügyfél szövege + cégadatok). Az angol változat ennek fordítása.
- **Repo:** még nincs; a user később adja meg, abba initelünk (első commit: „chore: scaffold with doczidev kit”).

## Cserelista

- [x] Domain: `https://mrrock.net` (`astro.config.mjs` `site`, `doczidev.json`, `public/robots.txt`, `public/llms.txt`, `public/.well-known/security.txt`).
- [x] Telefonszám: +36 30 630 6529 (`src/i18n/content.ts` → `contact`).
- [x] E-mail: info@mrrock.net (`src/i18n/content.ts` → `contact`, `public/.well-known/security.txt`).
- [x] Logó: az ügyfélnek nincs; a tervezett logó (narancs faceted kő-jel + MR. ROCK felirat) a `src/components/Logo.astro`-ban és a `public/logo.svg`-ben van. Ha az ügyfél ad sajátot, ezt cseréljük.
- [ ] Favicon szett: a `favicon.svg` kész (a kő-jel). Hiányzik: `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png`, 192/512 ikonok + `site.webmanifest`.
- [x] OG kép: `public/og/default.jpg` (1200×630, a hero-ból). Domain/kép csere után újragenerálandó.
- [ ] Stock fotók (Unsplash, általános építkezés-képek, NEM a cég munkái): `src/assets/stock/`, forrás: `src/assets/stock/SOURCES.md`. Saját projektfotókra cserélendők, ha lesznek.

Workflow rules come from the doczidev plugin (dev-claude).

---

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
