# RK Derawala website V3

Local, client-reviewable editorial site for RK Derawala, built with Next.js App Router and React. It presents the Bagru workshop, process, textile categories, Ram Kishore Chhipa's honours, and direct enquiry paths. Checkout is absent; a separate store can be linked later.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Validate with `npm run build` and `npm run typecheck`.

## Design and media

`DESIGN.md` is the source of truth for V3's composition, palette, typography, interactions, and responsive behaviour. The five supplied colours remain the foundation. Cormorant Garamond and DM Sans are locally hosted provisional fonts; replace them when the approved brand fonts arrive.

The interactive craft journal adapts [The Design Stack's Page-Flip Book](https://thedesignstack.co.in/prompts/page-flip-book/) prompt to RK Derawala's story with local imagery, the existing type palette, keyboard controls and reduced-motion support. The Design Stack API key is not stored in this project.

The closer-look heading, questions section and enquiry button adapt The Design Stack's [Block Line Reveal](https://thedesignstack.co.in/prompts/block-line-reveal/), [FAQ Accordion](https://thedesignstack.co.in/prompts/faq-accordion/) and [Circle Fill Button](https://thedesignstack.co.in/prompts/circle-fill-button/) patterns. `SITE_MAP.md` documents the public routes and complete home-page journey.

`media-manifest.json` records every local media file, its source and use. Instagram images are temporary renditions. The floral logo is the profile image from RK Derawala's Instagram account. The paper illustration is AI generated decorative art, not documentary imagery. Reel cover images link to the original Instagram reels; V3 does not embed or imply playable local video.

## Before launch

- Replace temporary Instagram renditions with approved original imagery and a higher-resolution logo. Confirm category photos and current availability with RK Derawala.
- Confirm the WhatsApp number, street address, and any shipping claims before adding them. The current number and location come from the Rajasthan government artisan profile.
- Set `NEXT_PUBLIC_SITE_URL` to the final public HTTPS domain and rebuild. Until then, the site uses `noindex`, disallows robots and omits canonical URLs and sitemap entries.
- Connect the GitHub remote after the repository is supplied. This local project has no remote or deployment configured.

## Factual sources

- [RK Derawala Instagram profile](https://www.instagram.com/rkderawala_bagru/): visual identity, workshop imagery, hand block printed textiles, natural colours and vegetable dyes.
- [Rajasthan government profile of Ram Kishore Chhipa](https://handmadeinrajasthan.rajasthan.gov.in/content/industries/handmadeinrajasthandepartment/mastercrafts/padmaawardees/list/ramkishorechhipa.html): identity, Padma Shri 2009, National Award 1987, mobile number and location.
- [RK Derawala public product listing](https://12886-in.all.biz/): broad category references for fabrics, sarees, dupattas and stoles. V3 does not claim particular pieces are currently in stock.

The site makes no numerical environmental, employment, production or worldwide-shipping claims. Awards are attributed to Ram Kishore Chhipa (Derawala), rather than to the business.
