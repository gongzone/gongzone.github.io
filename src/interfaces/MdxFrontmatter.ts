import { ImageDataLike } from "gatsby-plugin-image";

export interface MdxFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  image: ImageDataLike;
  embeddedImages: ImageDataLike;
}
