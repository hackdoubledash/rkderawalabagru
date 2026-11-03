# RK Derawala site map

## Public routes

| URL | Purpose | Main action |
| --- | --- | --- |
| `/` | Introduce the Bagru workshop, its craft, people and textiles | Explore and enquire |
| `/textiles/fabrics` | Editorial introduction to printed fabrics | Ask about current availability |
| `/textiles/sarees` | Editorial introduction to sarees | Ask about current availability |
| `/textiles/dupattas` | Editorial introduction to dupattas | Ask about current availability |
| `/textiles/stoles` | Editorial introduction to stoles | Ask about current availability |

## Home page journey

1. **Hero** `#top` — RK Derawala in large serif type over sourced Bagru craft footage and textile frames.
2. **Bagru** `#story` — A pinned scroll sequence of the Derawala family, hand printing and cloth.
3. **The artisan** `#legacy` — Ram Kishore Chhipa's individually attributed National Award (1987) and Padma Shri (2009), linked to the Rajasthan government profile.
4. **The making** `#process` — Four interactive stages: block, impression, colour and cloth.
5. **Variation** — An illustrated full-screen pause on the maker's trace.
6. **The textiles** `#textiles` — A horizontal gallery leading to four category pages.
7. **A closer look** `#detail` — An interactive motif study with image zoom.
8. **Craft journal** `#journal` — A page-turning account of people, tools, colour and cloth.
9. **At the table** — Source-linked Instagram reels showing the work in motion.
10. **Enquire** `#enquiries` — Personal, design/sourcing and international paths with no shipping or export promise.
11. **Good to know** `#questions` — Answers about the craft, categories, larger projects and international enquiries.
12. **Contact and footer** `#contact` — WhatsApp, telephone, Instagram, Bagru address and site links.

## Navigation and indexing

The primary menu starts with Bagru and the artisan, followed by process, textiles and the journal, with a persistent Enquire action. The footer links to the additional sections. `app/sitemap.ts` lists public **routes**, so the new on-page sections do not add XML sitemap entries. Before launch, set `NEXT_PUBLIC_SITE_URL=https://rkderawalabagru.com` in the production hosting environment and rebuild to enable canonical URLs, indexing and the public XML sitemap.

## Later phases

- Replace provisional Instagram images and the low-resolution profile mark with approved originals.
- Add product inventory, prices and checkout through a separate Shopify store when ready.
- Add a confirmed shipping/export policy only after RK Derawala supplies it.
