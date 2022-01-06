import { ImageDataLike } from "gatsby-plugin-image";

export interface MdxFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: {
    name: string;
    slug: string;
  }[];
  slug: string;
  image: ImageDataLike;
  embeddedImages: ImageDataLike;
}
