# Design

## Source of truth
Status: Active · 2026-11-03. V4 direction: retain the V3 page structure and visual system; carry over the V4 full-screen navigation; revise only the hero. The site deploys from `main` through Vercel. Product surfaces: the RK Derawala landing page and textile category pages. Evidence: user supplied eleven editorial website references, three typographic footer references, the supplied five-colour palette, the current V2 site, the public RK Derawala Instagram profile and source-linked media, the Rajasthan government artisan profile, and The Design Stack's Page-Flip Book interaction prompt. The external references guide composition and motion; they are not brand assets.

## Brand
An intimate, assured portrait of a living Bagru printing practice. Warm, tactile, art-directed, and unmistakably made by people. Trust comes from real workshop imagery, the family story, sourced award attribution, and direct contact. Avoid invented production counts, ornamental clichés, generic sustainability claims, and representing blue pottery as an RK Derawala product.

## Product goals
Introduce the craft, invite exploration of the process and textiles, and make an enquiry easy. The V3 section structure remains the base. The site has no checkout. Success means visitors can understand the people and technique, explore textile categories, and reach WhatsApp or phone. A Shopify store can be linked later.

## Personas and jobs
Prospective textile buyers, designers, and visitors discovering Bagru craft. They browse visually on phones, seek the maker's story, want to inspect categories and process, and need a direct enquiry path.

## Information architecture
Landing page: hero → story → interactive process → editorial heritage interlude → interactive craft journal → workshop reels → textile carousel → motif study → artisan archive → enquiry pathways → questions → contact/footer. Navigation: Story, Process, Textiles, Legacy, Enquire; secondary section links live in the footer. Category routes: `/textiles/fabrics`, `/textiles/sarees`, `/textiles/dupattas`, `/textiles/stoles`; each is an editorial category introduction and direct enquiry, not inventory. `SITE_MAP.md` records the complete page journey.

## Design principles
1. Let photography carry the first impression; use type to provide a point of view.
2. Vary scale and composition between sections: full bleed, asymmetrical grid, split panel, and horizontal gallery.
3. Make motion disclose the craft's rhythm. Motion must respond to scroll or an intentional control, never delay reading.
4. Treat decorative graphics as printed matter. Keep real business claims tied to sources.

## Visual language
- Core palette: beige sand `#E1DBC9`, slate blue grey `#6B7B84`, earth brown `#5E4B3B`, dark pine `#2D4530`, charcoal `#3C3C3C`. Support: warm paper `#F0EBDD`, madder `#8B4D3A`, pale line `#C9BEA8`. Indigo appears chiefly in real textiles.
- Display: locally hosted Cormorant Garamond, regular and italic, tight tracking and leading. The hero uses its thin regular face. Body: locally hosted DM Sans. The retained V4 navigation uses locally hosted Inter. All remain provisional until final brand fonts arrive; the Inter license notice is in `licenses/`.
- Spacing: 8px base rhythm, generous section pauses, intentionally asymmetric image placement. Thin rules and numbered marginalia reference archival catalogues. Corners stay mostly square; no card shadows.
- Imagery: public RK Derawala Instagram renditions, a clearly decorative generated paper illustration, and a locally stored 15-second Bagru craft film by Incredible India under CC BY 3.0. The film depicts a different Bagru workshop, and its source, license and edits are linked in the hero and recorded in `media-manifest.json`. Use the actual Instagram profile picture as the logo in compact contexts. Treat reel covers as linked reels, never as unplayable video.
- Motion: scroll progress, heading/image reveals, gentle marquee, interactive process panel, CSS 3D craft journal, horizontal textile carousel, textile zoom, enquiry selector and FAQ disclosure. The detail heading, FAQ layout and enquiry CTA adapt free patterns from The Design Stack. Keep transform and opacity work small; reduced motion removes nonessential movement.

## Components
`SiteHeader` owns the V4 compact bar, full-screen numbered menu, Escape dismissal, scroll lock and progress. `ProcessExplorer` owns an accessible four-step choice. `CraftBook` adapts The Design Stack's Page-Flip Book interaction to the Bagru story using local RK Derawala media and existing fonts. `TextileCarousel` owns scroll-snap cards and controls. `DetailStudy` owns an image zoom and block-line heading motion. `EnquiryPaths` owns three enquiry choices and a tailored WhatsApp action. `CraftFaq` owns the single-open accordion. CSS view timelines animate progressive entry for `data-reveal` elements. `BrandMark` uses the public Instagram profile image. CSS custom properties in `app/globals.css` own visual tokens; content definitions live in `app/lib/site-data.ts`.

## Accessibility
Target WCAG AA. Semantic landmarks and heading order, visible focus, keyboard-operable menu/tabs/carousel, meaningful image descriptions, 44px control targets, and contrast-safe text. Generated illustration is decorative. Respect `prefers-reduced-motion`; never hide content when script or scroll animation support is absent.

## Responsive behavior
At wide widths, the full-bleed hero film sits behind a thin serif title and three floating, sourced textile frames; the remaining sections retain their existing asymmetric grids. Under 900px, collapse process and story into stacked layouts. Under 700px, use a compact menu, keep headings within viewport, make gallery swipeable, and avoid horizontal document overflow.

## Interaction states
The opening mark clears by CSS. Header menu opens/closes with button and Escape and locks page scrolling while open. The hero video is muted, loops, and has a poster fallback; reduced-motion users see the poster. Process selection updates image and text with active/pressed state. Carousel arrows disable at ends and drag/swipe remains native. Textile zoom toggles on an accessible button. Enquiry selection updates a sourced image, description and prefilled WhatsApp message. FAQ buttons expose expanded state and only one answer opens at a time. Media has reserved ratios and lazy loads after the hero. External enquiries open separately.

## Content voice
Grounded, concise, specific. Prefer observations about cloth, blocks, colour, and the people making it. Use only a few editorial phrases; avoid repetitive label/subheadline/body stacks. Awards always name Ram Kishore Chhipa (Derawala). The international path invites enquiries and explicitly leaves availability and delivery to direct confirmation. Do not claim global shipping or current product stock without confirmation.

## Implementation constraints
Next.js App Router, rendered server HTML for content and metadata, small client islands for interaction. Local source-linked media manifest, responsive `next/image`, static category routes, social preview, sitemap, robots and structured business data. Canonical and indexing activate only with a real `NEXT_PUBLIC_SITE_URL`. Build, typecheck, phone/desktop visual review, keyboard check and Lighthouse are required before handoff.

## Open questions
- [ ] Client: provide approved original photography/video and higher-resolution brand logo; these replace Instagram renditions.
- [ ] Client: provide final font files and confirm product availability, shipping regions, and contact details before launch.
- [ ] Client: review the deployed hero and navigation.
