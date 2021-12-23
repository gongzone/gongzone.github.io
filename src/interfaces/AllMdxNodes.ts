import { ImageDataLike } from "gatsby-plugin-image";

export interface AllMdxNodes {
  id: string;
  frontmatter: {
    title: string;
    description: string;
    tags: string[];
    slug: string;
    date: string;
    image: ImageDataLike;
  };
}
