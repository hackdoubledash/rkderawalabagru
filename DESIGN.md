# Design

## Source of truth

Status: Active V5 redesign, approved for `main` on 2026-11-04. The Boyd is a composition and motion reference. RK Derawala's Instagram, the Rajasthan government artisan profile, the user's Classic Folk design system and CSS tokens, and the recorded media sources supply the identity and facts. No reference site's media or copy is reused.

## Brand and audience

A tactile portrait of RK Derawala's Bagru hand block printing practice for textile buyers, designers and visitors. The site should make the family and craft visible, then make direct enquiry easy. No checkout, invented production figures, employment totals, sustainability metrics or unconfirmed export promises. The National Award (1987) and Padma Shri (2009) always belong to Ram Kishore Chhipa (Derawala), not to the business.

## Design idea

Bagru becomes a pinned poster: its name holds on screen while the family, the artisan's hand and the cloth pass through it. This is the main scroll event. The person behind the honours follows directly, before process and product browsing. The live interaction is the four-stage process explorer; the visitor selects a stage and sees its source-linked image and explanation. The page must be complete and readable without animation.

## Page journey

Hero → pinned Bagru story → Ram Kishore Chhipa's honours → interactive process → variation interlude → textiles → motif zoom → craft journal → workshop reels → enquiry paths → practical questions → contact and footer. Navigation leads with Bagru and Artisan. Category routes remain `/textiles/fabrics`, `/textiles/sarees`, `/textiles/dupattas`, and `/textiles/stoles`. `SITE_MAP.md` records the full journey.

## Visual system

- User-supplied Classic Folk palette: warm cream `#F8F1E8`, soft white `#FFFCF8`, parchment `#E5D5C3`, midnight indigo `#1E173C`, folk pink `#DF73A4`, olive `#78735E`, deep gulal `#971B36`, divider `#CCB9A4`. Semantic tokens in `app/globals.css` own these values. Indigo and warm cream carry the page; gulal marks recognition and enquiry; pink is sparing.
- Locally hosted Cormorant Garamond in regular and italic is the provisional display face. Locally hosted DM Sans is the body and UI face. Titles use tight tracking and short leading. Body text stays readable and balanced. The user will provide final fonts later.
- The hero uses a sourced 15-second Bagru craft film as atmosphere, with three sourced textile frames. The film depicts a different Bagru workshop and is credited in the hero and footer. Family and craft photographs come from the media manifest. The Instagram profile image is the compact brand mark. The heritage illustration is explicitly decorative.
- Sections change scale and field: full-bleed film, sticky image story, inverse recognition field, process split, large still interlude, horizontal textile gallery, tactile journal, and typographic footer. Avoid repeated eyebrow/title/subtext stacks, decorative numbering and invented metrics.

## Motion and interaction

The pinned Bagru story uses native scrolling and `position: sticky`; it never hijacks scroll. CSS view timelines unmask images, move crops slightly and bring captions and award panels into view. The hero footage loops muted with a still poster fallback. Process selection, carousel, zoom, page turning, enquiries and FAQ remain directly controlled. Interactive controls use short, interruptible transitions with clear pressed/focus states. Under `prefers-reduced-motion`, video and nonessential travel stop and all content remains visible.

## Accessibility and responsive behavior

Semantic landmarks and heading order, descriptive image text, visible focus, keyboard-operable menu/tabs/carousel/book/FAQ, readable contrast and touch targets at least 44px. On phones, the Bagru title pins near the top and each image fills the middle band; awards stack below the story. The page must have no horizontal document overflow. The menu closes on Escape and locks scroll only while open. Media reserves dimensions and loads responsively.

## Implementation and verification

Next.js App Router renders page copy and structured data in HTML; small client components own interaction. Metadata, social preview, robots and sitemap remain. Media sources live in `media-manifest.json`. Before a release, run typecheck, production build, desktop and mobile browser review, keyboard checks, and performance/SEO audit.

## Open items

- Approved original photography/video and a high-resolution logo are needed before final client handoff.
- Final fonts, current product availability, shipping regions and contact details need client confirmation.
