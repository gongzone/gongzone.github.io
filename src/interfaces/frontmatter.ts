import { IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image";

export interface frontmatter {
  title: string;
  description: string;
  date: string;
  tags: string;
  slug: string;
  image: ImageDataLike;
  embeddedImages: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData | undefined;
    };
  };
}
