export const instagram = "https://www.instagram.com/rkderawala_bagru/";
export const phone = "+919829065347";
export const enquiryUrl = (message: string) => `https://wa.me/919829065347?text=${encodeURIComponent(message)}`;
export const whatsapp = enquiryUrl("Namaste, I would like to know more about RK Derawala textiles.");

export const categories = [
  {
    slug: "fabrics",
    name: "Printed fabrics",
    image: "/media/printed-textile.jpg",
    alt: "Earth-toned hand printed cloth hanging against a stone wall",
    description: "Length by length, a surface for pattern, colour and possibility.",
    detail: "Explore hand block printed cloth shaped by Bagru's patient practice. Each length carries the rhythm of the block and the small variations of work done by hand.",
    companion: "/media/printed-cloth-detail.jpg",
    companionAlt: "Close view of motifs on pale printed cloth",
  },
  {
    slug: "sarees",
    name: "Sarees",
    image: "/media/red-textile.jpg",
    alt: "Red floral printed cloth hanging outdoors",
    description: "A long tradition of colour, made to be worn and lived in.",
    detail: "RK Derawala's textile practice extends to sarees. Ask the workshop about current pieces, patterns and colours available for enquiry.",
    companion: "/media/floral-archive.jpg",
    companionAlt: "Floral printed cloth beside an open craft publication",
  },
  {
    slug: "dupattas",
    name: "Dupattas",
    image: "/media/floral-archive.jpg",
    alt: "Floral block printed textile beneath an open craft publication",
    description: "Light, expressive cloth with the character of a hand-placed motif.",
    detail: "Discover the language of Bagru print in cloth made to layer and carry. Contact RK Derawala to explore the current selection of dupattas.",
    companion: "/media/red-textile.jpg",
    companionAlt: "Red hand printed cloth among leaves",
  },
  {
    slug: "stoles",
    name: "Stoles",
    image: "/media/printed-cloth-detail.jpg",
    alt: "Earth-toned and black block printed motifs on pale cloth",
    description: "A smaller canvas for the same remarkable depth of craft.",
    detail: "Stoles offer a close view of motif, texture and natural colour. Enquire directly to see what is being made and available now.",
    companion: "/media/printed-textile.jpg",
    companionAlt: "Earth-toned printed textile detail",
  },
] as const;

export const processSteps = [
  { name: "The block", image: "/media/printing-blocks.jpg", alt: "Wooden printing blocks laid on a workshop surface", text: "A motif begins in carved wood. Outline, ground and detail find their place through a maker's practiced eye.", source: "https://www.instagram.com/rkderawala_bagru/reel/DWYxGp0CTgq/" },
  { name: "The impression", image: "/media/workshop-printing.jpg", alt: "A person printing a striped motif by hand in the workshop", text: "The block meets cloth, then lifts. Repetition becomes rhythm, and slight variations make each length unmistakably human.", source: "https://www.instagram.com/rkderawala_bagru/reel/DON9j5dkR6j/" },
  { name: "The colour", image: "/media/indigo-drying.jpg", alt: "Indigo printed cloth drying outdoors", text: "Dabu mud resist and natural colour deepen the pattern. Washing and sunlight bring the print into view.", source: "https://www.instagram.com/rkderawala_bagru/p/DW1O2bxEa1K/" },
  { name: "The cloth", image: "/media/printed-textile.jpg", alt: "Finished earth-toned printed textile hanging against stone", text: "What remains is a cloth with the trace of every hand, block and passage through colour.", source: "https://www.instagram.com/rkderawala_bagru/reel/DYUObvFRo3u/" },
] as const;
