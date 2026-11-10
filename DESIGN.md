# The Living Archive

On this page, the Derawala archive’s cloth, family portrait and recorded honours become the prints of an exhibition. A fixed frame changes one impression at a time as the reader moves through the craft.

Taste Skill dealt **The pinned poster**, seed **1131435972**. A stationary frame that changes contents suits the repetition and placement of a printed length. The supplied brief overrides the dealt pinned portrait hero with a full-bleed craft film and thin display serif. The pin carries the process chapter instead of delaying entry. The proof blueprint becomes a dated exhibition entry because there are two confirmed honours to present. The brief’s closing typographic invitation replaces the quiet-line footer.

## Composition and reference decisions

| Chapter | Composition and material | Phone and motion | Next action |
| --- | --- | --- | --- |
| Entrance | Full-bleed Bagru worktable film behind two lines of Cormorant | Closer crop and stacked actions. Short masked lift, then the film settles in | Discover the story or explore collections |
| Origin | Large paper field and an off-axis worktable print | Copy precedes the photograph. Scroll reveal on the headline and print | Our Story |
| Textile table | Large botanical illustration, quiet editorial copy and a smaller documentary cloth crop | Two prints in a four-column rhythm. The title comes first, followed by the illustration and the cloth | Continue into the archive |
| Honours | Madder field, ceremony image and the dates 2009 and 1987 | Year and honour remain paired. Dates rise gently into place | Artisan source or Our Story |
| Making | Sticky photographic stage next to a naturally scrolling list | Independent, stacked photographs and steps. On desktop images crossfade and progress advances as each step reaches the reading line | The Craft |
| Collections | Index rows against a large adjacent image | Always-visible thumbnail per row. Crossfade for pointer and keyboard preview | Detail route |
| Material | Indigo field and a crop of the repeat | Enlarged image opens in a native dialog, with zoom and focus restoration | Read the impression closely |
| Family | Square portrait and an account of daily practice | Portrait above copy. Image settles as it enters | Our Story |
| Enquiries and close | Practical routes followed by a dark, oversized wordmark | Stacked reading order and explicit WhatsApp handoff | Contact or trade |

The Good Move reference informs the panoramic opening and gradual change of tone. The True Care informs the archive reading rhythm, captions and high-contrast serif. Oura & Co. informs the direct navigation, image-led first screen and open typographic frame. Grand Tour Privé and The Museum inform the staggered prints and madder recognition chapter described in the brief. Their specific artwork is not reproduced. Only the earlier supplied images visible in the chat could be directly compared. References without a matching image in the conversation informed the design through their written descriptions, including darker photo treatment, compact hierarchy and quiet navigation.

## Type, colour and motion

Cormorant and DM Sans are served locally. The high-resolution client logo sets the palette. Median pixels sampled by region gave parchment `#E9DAC7`, indigo `#121A45`, olive `#7B775C`, petal pink `#DF74A6` and madder `#9B1C38`. Parchment and its ivory tints carry the page, indigo supplies text and dark fields, and madder marks the main actions and honours. Pink accents the journal and navigation details. A darker olive `#54513E` keeps light type readable in textile detail sections. The logo appears in the site shell, favicon and social card.

The home print table pairs a dominant generated floral plate with a smaller documentary cloth image. The supplied botanical border and architectural engraving anchor the journal invitation and appear again on the journal landing page. Both are identified in the asset manifest.

The Animation Vocabulary guide informs the names and purposes of the movements. A **reveal** lifts the two hero lines from clipping masks. The **stagger** separates the second line and the supporting content. **Scroll reveals** on selected headings and photographs give the larger prints space to arrive. A **crossfade** changes the craft stage and collection preview without shifting surrounding text. **Press feedback** and arrow translation confirm links and actions. The mobile menu and image viewer use native dialogs, Escape and focus return. Route navigation uses the router’s normal history and scroll behaviour.

On smaller screens the pin becomes naturally scrolling image-and-text chapters. The home hero holds its sharp still and lets the visitor choose when to play. With reduced motion, the pin and reveals are disabled. The film starts after load only while visible and permitted by motion and data preferences, pauses out of view, and has a manually operated play/pause control and a still fallback.

## Verification

- Next production build, TypeScript check, Taste Skill lint and Git whitespace check passed.
- The baseline homepage measured 16.1 desktop screens and triggered an edge-text failure. The review measured 11.5 desktop screens, two-line hero and section titles, zero failures and one typography warning at 1440, 768 and 390 pixels. The warning corresponds to an icon glyph using fallback type on tablet and mobile. A warm paper allowance reflects the brief’s palette.
- Chrome route and interaction checks covered 14 routes from 320 to 1920 pixels. They verified mobile dialog focus and scroll lock, gallery arrows and zoom, focus-driven collection previews, all six craft stages, reduced motion and an intercepted WhatsApp draft. The sticky stage is native CSS and IntersectionObserver, so the stage was checked directly at each chapter rather than with the skill’s Stage.js scene harness.
- A public-mode smoke test checked the 14 canonical URLs and their social previews, five permanent redirects, robots and sitemap, the branded 404 and the inaccessible pending media and pottery routes. The review server can serve the original photo renditions.
- One cold, throttled mobile Chrome run measured LCP at 916 ms and cumulative layout shift at 0.035. This was a local lab run, without field INP or a physical iOS or Android check. Safari and Firefox were not tested.
- The final self-critique scored design 7.8, usability 8.2, creativity 7.7 and content 8.0, for a weighted 7.9. The remaining visual limit is the small source archive and the portrait crop of existing material.

Screenshots, reports and the rubric are in the local ignored `.taste-skill/living/` folder. The `review/` subfolder contains the final homepage contact sheets, and `qa/` includes the route sheets and six craft states.
