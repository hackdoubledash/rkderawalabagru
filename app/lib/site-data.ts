export const instagram = "https://www.instagram.com/rkderawala_bagru/";
export const phone = "+919829065347";
export const phoneLabel = "+91 98290 65347";
export const address = "Bypass Road, Meeno ka Mohalla, Bagru, Jaipur, Rajasthan 303007";
export const directions = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
export const artisan = "https://handmadeinrajasthan.rajasthan.gov.in/content/industries/handmadeinrajasthandepartment/mastercrafts/padmaawardees/list/ramkishorechhipa.html";
export const padma = "https://www.pib.gov.in/newsite/erelcontent.aspx?lang=2&reg=48&relid=46983";
export const craftSource = "https://handmadeinrajasthan.rajasthan.gov.in/content/industries/handmadeinrajasthandepartment/artandcraft/textilework/handblockprinting.html";
export const dabuSource = "https://handmadeinrajasthan.rajasthan.gov.in/content/industries/handmadeinrajasthandepartment/artandcraft/textilework/dabu-mudresistdyeing.html";
export const filmSource = "https://commons.wikimedia.org/wiki/File:Blockprinting_in_Bagru_-_India.webm";
export const enquiryUrl = (message: string) => `https://wa.me/${phone.slice(1)}?text=${encodeURIComponent(message)}`;
export const whatsapp = enquiryUrl("Namaste, I would like to know more about RK Derawala textiles.");

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/the-craft", label: "The Craft" },
  { href: "/collections", label: "Collections" },
  { href: "/trade", label: "Trade & Collaborations" },
  { href: "/contact", label: "Contact" },
] as const;

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  source: string;
  position?: string;
  approval: "pending" | "licensed" | "approved";
};

function archive(file: string, alt: string, caption: string, post: string, position?: string): Photo {
  return { src: `/archive-media/${file}.jpg`, alt, caption, source: instagram + post, position, approval: "pending" };
}

function filmStill(file: string, alt: string, caption: string, position = "50% 50%"): Photo {
  return { src: `/video/${file}.jpg`, alt, caption, source: filmSource, position, approval: "licensed" };
}

export const photos = {
  garden: {
    src: "/art/bagru-garden-border.jpg",
    alt: "Printed flowers and foliage framing a carved arch on parchment",
    caption: "Botanical border and architectural engraving",
    source: "Client-supplied artwork",
    approval: "approved",
  } satisfies Photo,
  botanical: {
    src: "/art/floral-block-study.webp",
    alt: "Illustrated pink and plum flowers with olive leaves beside a faint lattice engraving",
    caption: "Illustration inspired by Bagru block printing",
    source: "Generated editorial artwork",
    approval: "approved",
  } satisfies Photo,
  print: archive("workshop-printing", "A printer presses a block into cloth at a long worktable", "A block placed by hand at the printing table", "reel/DON9j5dkR6j/", "50% 56%"),
  family: archive("derawala-family", "Members of the Derawala family in front of indigo cloth", "The Derawala family with indigo printed cloth", "p/C5qOO55SAPu/", "50% 36%"),
  award: archive("padma-shri-ceremony", "Ram Kishore Chhipa receives the Padma Shri at the ceremony", "Ram Kishore Chhipa receiving the Padma Shri", "p/C9mlWExSHLb/"),
  fabric: archive("printed-textile", "Earth coloured textile with patterned borders hanging against a wall", "Border and repeat in the textile archive", "reel/DYUObvFRo3u/", "50% 45%"),
  red: archive("red-textile", "Red floral cloth hanging among branches", "Red floral cloth from the textile archive", "reel/DXWxR6fiVEy/", "50% 68%"),
  floral: archive("floral-archive", "An open craft publication on patterned cloth", "A floral repeat beneath an open craft publication", "p/C7ZC-fGSKCT/"),
  detail: archive("printed-cloth-detail", "Dark floral block printed motifs on pale cloth", "A close view of the printed repeat", "reel/DOVfTxLkVVC/", "50% 45%"),
  drying: archive("indigo-drying", "Indigo patterned cloth laid outside to dry", "Indigo cloth drying in sunlight", "p/DW1O2bxEa1K/", "50% 22%"),
  film: filmStill("bagru-impression", "Hands pressing a wooden block into striped cloth at a Bagru printing table", "An impression at the printing table, Incredible India", "43% 50%"),
  tools: filmStill("bagru-blocks-and-printer", "A Bagru printer beside shelves of printing blocks", "A printer and his blocks in Bagru, Incredible India", "35% 50%"),
  worktable: filmStill("bagru-worktable", "A printer leaning across a long worktable covered with cloth", "A long printing table in Bagru, Incredible India", "46% 50%"),
  repeat: filmStill("bagru-striped-repeat", "Striped impressions repeat across cloth beside the printer's hands", "A printed repeat at a Bagru worktable, Incredible India"),
};

type Textile = {
  slug: string;
  name: string;
  description: string;
  heading: string;
  detail: string;
  enquiry: string;
  image: Photo;
  gallery: readonly Photo[];
  layout: "length" | "drape" | "layer" | "detail";
  published: boolean;
};

export const categories = [
  {
    slug: "fabrics", name: "Printed fabrics", layout: "length", published: true,
    description: "Hand printed lengths for clothing, interiors and projects.",
    heading: "Across the length",
    detail: "A length of fabric shows what happens when a motif is repeated across a whole surface. Look at the distance between impressions and the way a border frames the field. These details can change how a print reads when it is cut or placed in a room.",
    enquiry: "Share the intended use, the approximate length you need and any pattern or colour you have in mind.",
    image: photos.fabric, gallery: [photos.fabric, photos.detail, photos.print],
  },
  {
    slug: "sarees", name: "Sarees", layout: "drape", published: true,
    description: "Cloth that changes with the fold and the drape.",
    heading: "Pattern in the fold",
    detail: "A saree is seen in motion. A motif can open across one part of the drape and disappear into a pleat in the next. Ask to see a piece laid out so you can read the border and the body together.",
    enquiry: "Ask for current saree photographs and confirm fabric, dimensions and care for the piece you choose.",
    image: photos.red, gallery: [photos.red, photos.fabric],
  },
  {
    slug: "dupattas", name: "Dupattas", layout: "layer", published: true,
    description: "Printed cloth to layer, with pattern visible from edge to edge.",
    heading: "From edge to edge",
    detail: "A dupatta can be spread wide to show its field of colour or gathered to bring several folds together. A close photograph reveals how the repeated motif meets the edge, and an open view shows how the print sits across the cloth.",
    enquiry: "Tell the workshop which colours you are looking for and ask to see available pieces in full.",
    image: photos.floral, gallery: [photos.floral, photos.red],
  },
  {
    slug: "stoles", name: "Stoles", layout: "detail", published: true,
    description: "A closer encounter with the block, the motif and the ground.",
    heading: "At arm’s length",
    detail: "On a stole, the print is often seen from close by. Follow a single motif across the cloth and you can notice small changes in pressure and placement. A close view is useful alongside a photograph of the whole piece.",
    enquiry: "Ask about current designs and confirm the measurements and fabric of the piece you are considering.",
    image: photos.detail, gallery: [photos.detail, photos.fabric],
  },
] as const satisfies readonly Textile[];

export const pottery = {
  slug: "blue-pottery",
  name: "Blue pottery",
  published: false,
  objects: [] as readonly { name: string; material: string; dimensions: string; image: Photo }[],
};

export const processSteps = [
  { id: "block", title: "Carve the block", image: photos.tools, text: "The design begins in relief. A carver removes the wood around the parts that should touch the cloth. Where a design needs several colours, separate blocks may carry the outline and the fills." },
  { id: "prepare", title: "Prepare the cloth", image: photos.worktable, text: "Cloth is washed to remove starch and other residues before printing. In a traditional Dabu process, it may be treated with harda and dried before the resist is applied." },
  { id: "impression", title: "Place the impression", image: photos.print, text: "The printer charges the block, aligns it with the last impression and presses it into the cloth. The next placement depends on the last, so spacing and pressure matter across the whole length." },
  { id: "resist", title: "Print with resist", image: photos.detail, text: "Dabu is a mud resist applied with a wooden block. Once the resist is dry, the cloth can be dyed. The covered parts take less colour, which lets the pattern emerge after the paste is washed away." },
  { id: "wash", title: "Wash and dry", image: photos.drying, text: "Washing clears away the resist and reveals the relationship between motif and ground. Cloth is spread or hung to dry. Some designs go through another round of resist and dye before the final wash." },
  { id: "finish", title: "Read the repeat", image: photos.fabric, text: "Open the finished length and look at the pattern as a whole. A shift at the edge of one impression or a faint difference in pressure can reveal how the block moved across the cloth." },
] as const;
