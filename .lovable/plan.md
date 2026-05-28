## Gustum UAB — Landing page plan

A single, mobile-first landing page presenting Gustum UAB as the parent of two brands (Crustum and COFMOS), with clear outbound links to each brand's site, an About section, and full legal requisites.

### Visual direction — Warm & artisanal
- Palette: cream background, warm terracotta/clay accent, deep espresso text, soft butter highlight.
- Typography: distinctive serif display (e.g. Fraunces or Instrument Serif) paired with a clean humanist sans (Work Sans) for body.
- Texture: subtle grain, generous whitespace, gentle scroll fade-ins. No purple gradients, no generic SaaS look.

### Page structure (single route `/`)

1. **Header** — small Gustum wordmark left, anchor links right (Brands, About, Contact).
2. **Hero**
   - Headline: "Fresh treats and freshly roasted coffee, every day."
   - Sub: short mission line about Gustum bringing fresh, tasty treats to the local community.
   - Two outline buttons jumping to the brand cards.
3. **Brands section** — the centerpiece. Two large side-by-side cards (stacked on mobile):
   - **Crustum** — bakery + coffee shop chain. Short description, "Visit crustum.lt" CTA opening https://www.crustum.lt/ in a new tab.
   - **COFMOS Coffee Roasters** — roastery + e-shop. Short description, "Shop cofmos.lt" CTA opening https://cofmos.lt/ in a new tab.
   - Each card uses a generated artisanal photo (warm bakery scene / coffee roasting scene).
4. **About / Our story** — 2–3 short paragraphs on Gustum as the holding behind both brands, the shared mission, and the link between bakery, café, and roastery.
5. **Contact strip** — phone and email as tappable links, address line.
6. **Footer with legal requisites**
   - Gustum UAB
   - Registration number: 302780146
   - VAT code: LT100006875614
   - Address: Dūmų g. 1, LT-11119 Vilnius
   - Phone: +370 630 09901 · Email: info@gustum.lt
   - Copyright line.

### Suggestions for additional elements
Light additions I'd recommend; tell me which to include:
- Small "Find us" map embed for the Vilnius address.
- Language toggle EN/LT (the brand sites are LT-first).
- Subtle stat row ("2 brands · 1 mission · Vilnius since …") if you have a founding year.
- Simple Open Graph image so link previews look polished when shared.

### Technical notes
- TanStack Start, single route file `src/routes/index.tsx` (no extra routes needed for a one-pager; in-page anchors are appropriate here).
- Design tokens (cream/terracotta/espresso, serif+sans pairing, radii) defined in `src/styles.css` as oklch variables; no hard-coded colors in components.
- Two hero/brand images generated into `src/assets/` and imported as ES modules.
- Outbound brand links: `target="_blank" rel="noopener"`.
- SEO: `head()` with title "Gustum UAB — Crustum & COFMOS", description, og tags, JSON-LD `Organization` with `subOrganization` entries for both brands. Single H1, semantic sections, alt text on images.
- Fully responsive: mobile-first stack, two-column brand grid from `md:` up.

Confirm or tweak (especially the optional additions) and I'll build it.