import { craftSource, dabuSource, photos, type Photo } from "./site-data";

type Article = {
  slug: string;
  title: string;
  description: string;
  photo: Photo;
  sections: { title: string; paragraphs: string[] }[];
  source: { name: string; url: string };
  published: boolean;
};

export const articles: readonly Article[] = [
  {
    slug: "reading-a-repeat",
    title: "Reading a repeat",
    description: "What the spacing, edges and pressure of a printed motif can tell you about the cloth.",
    photo: photos.detail,
    published: true,
    sections: [
      { title: "Start with one motif", paragraphs: [
        "Unfold the cloth and choose one form you can recognise at a glance. It could be a petal, the corner of a diamond or the small space between two shapes. Follow the form along the length of the fabric. You’ll see how the placement of one motif sets up the next.",
        "Now look across the width. A repeat can be easy to follow in one direction and harder to find in another, especially where the print is dense. A border gives you another place to start. Compare how it holds the eye with how the pattern in the centre sends the eye across the cloth.",
      ] },
      { title: "Look at the edge", paragraphs: [
        "The Rajasthan craft directory describes direct printing as dipping a block into colour and placing impressions on the cloth. Look at the edge of an impression where it meets the ground. Some edges are crisp and some are faint. If a print uses more than one block, look at how the colour sits against the outline.",
        "The next time you ask to see a textile, ask for a photograph of the whole length and a close view of the same cloth. One lets you judge the rhythm and scale. The other shows what a folded or distant photograph leaves out.",
      ] },
    ],
    source: { name: "Rajasthan craft directory, Hand Block Printing", url: craftSource },
  },
  {
    slug: "what-mud-resist-does",
    title: "What mud resist does",
    description: "How Dabu uses the covered parts of the cloth to shape the finished pattern.",
    photo: photos.fabric,
    published: true,
    sections: [
      { title: "A block can cover", paragraphs: [
        "In direct printing the block brings colour to the surface. In Dabu the block lays down a paste that limits where dye can reach. The covered areas form part of the pattern, though their final relationship to the ground only becomes clear later.",
        "The Rajasthan craft directory describes a process that starts with washed cloth. The printer uses a carved wooden block to apply the resist. After the paste dries, the cloth can go into the dye. The uncovered areas take up colour while the paste protects the covered parts.",
      ] },
      { title: "The wash reveals it", paragraphs: [
        "Washing clears the paste away. The difference between the protected cloth and the dyed ground is now visible. The directory notes that dye can find its way into cracks in the paste, leaving fine lines in some prints.",
        "A design can involve more than one round of resist and dye. When looking at a piece, ask how it was made if the technique matters to your choice. A photograph can show the pattern clearly while leaving the order of the work hard to read.",
      ] },
    ],
    source: { name: "Rajasthan craft directory, Dabu Mud Resist Dyeing", url: dabuSource },
  },
];

export const publishedArticles = articles.filter((article) => article.published);
