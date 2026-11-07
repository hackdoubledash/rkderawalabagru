# RK Derawala website

Editorial site for RK Derawala, built with Next.js App Router and React. It presents the Bagru workshop, process, textile categories, Ram Kishore Chhipa's honours, and direct enquiry paths. Checkout is absent; a separate store can be linked later.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Validate with `npm run build` and `npm run typecheck`.

## Design and media

`DESIGN.md` records the V6 art direction: a photo-led editorial layout with staggered image sizes, a Bagru story, an artisan recognition table, an interactive making sequence, and a typographic footer. The Classic Folk palette, Cormorant Garamond display type, and DM Sans body type are retained. Both fonts are locally hosted placeholders until approved brand fonts arrive. `SITE_MAP.md` documents the routes and home-page journey.

The craft journal supports keyboard arrows and touch swipes. The making sequence, textile detail and enquiry paths are interactive; motion respects reduced-motion preferences. No third-party design API key is stored in this project.

`media-manifest.json` records each local media file, its source and use. Instagram images are temporary renditions. The floral logo comes from RK Derawala's public Instagram profile. The home hero and category pages use a 15-second, locally stored excerpt from [Incredible India's Bagru craft film](https://commons.wikimedia.org/wiki/File:Blockprinting_in_Bagru_-_India.webm), edited under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). It shows a different Bagru workshop, not RK Derawala's.

## Before final client handoff

- Replace temporary Instagram renditions with approved original imagery and a higher-resolution logo. Confirm category photos and current availability with RK Derawala.
- Confirm the WhatsApp number, street address, and any shipping claims before adding them. The current number and location come from the Rajasthan government artisan profile.
- Production requires `NEXT_PUBLIC_SITE_URL` set to the public HTTPS domain. Without it, the site uses `noindex`, disallows robots and omits canonical URLs and sitemap entries.
- The GitHub remote is `hackdoubledash/rkderawalabagru`. The connected Vercel project deploys pushes to `main`. Namecheap uses an apex A record and `www` CNAME supplied by the Vercel project's Domains settings.

## Factual sources

- [RK Derawala Instagram profile](https://www.instagram.com/rkderawala_bagru/): visual identity, workshop imagery, hand block printed textiles, natural colours and vegetable dyes.
- [Rajasthan government profile of Ram Kishore Chhipa](https://handmadeinrajasthan.rajasthan.gov.in/content/industries/handmadeinrajasthandepartment/mastercrafts/padmaawardees/list/ramkishorechhipa.html): identity, Padma Shri 2009, National Award 1987, mobile number and location.
- [RK Derawala public product listing](https://12886-in.all.biz/): broad category references for fabrics, sarees, dupattas and stoles. The site does not claim particular pieces are currently in stock.

The site makes no numerical environmental, employment, production or worldwide-shipping claims. Awards are attributed to Ram Kishore Chhipa (Derawala), rather than to the business.
