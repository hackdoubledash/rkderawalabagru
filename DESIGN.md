# The Living Archive

The site presents RK Derawala’s Bagru workshop as an editorial archive. A split opening pairs a large Cormorant title with the workshop film. Bagru and Ram Kishore Chhipa’s honours follow early, before the botanical study, printing process and textiles.

| Area | Layout and behavior |
| --- | --- |
| Homepage | Indigo title panel and edge-to-edge film sit side by side on desktop and stack on mobile. The workshop story follows on ivory, then the honours on madder. |
| Craft | The photograph changes as each step reaches the desktop reading line. On narrow screens and with reduced motion, each image stays with its step. |
| Collections | All four textile categories show their name, description and link in a responsive image grid. Approved floral artwork supplies decorative panels when archive photography is awaiting approval. |
| Interior pages | Asymmetrical titles and photographs establish each section. The Journal lists its essays side by side on desktop and in reading order on mobile. |
| Enquiries | Contact, trade and international enquiries lead to the appropriate form and a WhatsApp draft. |

Cormorant and DM Sans are served locally. All interface colours come from the logo-derived palette: parchment, indigo, leaf olive, petal pink, madder red, paper tint, warm ivory, deep olive and rose wash. Controls use Lucide inline SVG icons with visible text or an accessible name. The mobile menu and photo viewer use native dialogs and restore focus on close.

[Jakub Krehel’s skills](https://github.com/jakubkrehel/skills) informed the shared edges, content grouping, keyboard behavior and colour roles. [Meng To’s skills](https://github.com/mengto/skills) informed the chapter layouts, masked headline and one-time image reveals. The [GitHub website-design topic](https://github.com/topics/website-design), including Clarity, provided a reference for restrained editorial layout. Existing fonts and palette take precedence over colours and type suggested in the references.

The opening headline rises through three masks. An IntersectionObserver triggers a single, short reveal when an offscreen print enters view. All content is visible before JavaScript runs. The animation respects reduced motion. The film pauses outside the viewport and has manual play and pause controls.

Production build and TypeScript passed. Chrome checks covered all 14 public content routes at widths of 320, 390, 768 and 1440 pixels, plus keyboard collection navigation, mobile menu and gallery focus return, reduced motion, film controls and an intercepted WhatsApp draft.
