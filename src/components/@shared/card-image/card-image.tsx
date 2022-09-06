import type { ReactNode } from 'react';
import {
  GatsbyImage,
  getImage,
  type ImageDataLike,
  type IGatsbyImageData,
} from 'gatsby-plugin-image';

interface CardImageProps {
  title?: string;
  image?: {
    readonly childImageSharp: { readonly gatsbyImageData: IGatsbyImageData } | null;
  } | null;
  children?: ReactNode;
}

export const CardImage = ({ title, image, children }: CardImageProps) => {
  return (
    <div className="relative w-full overflow-hidden">
      <GatsbyImage
        className="rounded-t-md transition-all duration-300 group-hover:scale-110 group-hover:saturate-200"
        image={getImage(image as ImageDataLike)!}
        alt={title!}
        objectFit="cover"
      />
      {children}
    </div>
  );
};
