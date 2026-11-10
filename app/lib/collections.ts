import { visible } from "./site";
import { categories } from "./site-data";

export const publishedTextiles = categories.filter((category) => category.published);

export const textileEntries = publishedTextiles.map((category) => ({
  name: category.name,
  description: category.description,
  href: `/collections/textiles/${category.slug}`,
  image: visible(category.image) ? category.image : undefined,
}));

export const textileOptions = publishedTextiles.map(({ name, slug }) => ({ name, slug }));
