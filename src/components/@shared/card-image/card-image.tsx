import {
  GatsbyImage,
  getImage,
  type ImageDataLike,
  type IGatsbyImageData,
} from 'gatsby-plugin-image';

interface CardImageProps {
  title?: string | null;
  image?: {
    readonly childImageSharp: { readonly gatsbyImageData: IGatsbyImageData } | null;
  } | null;
  children?: React.ReactNode;
}

export const CardImage = ({ title, image, children }: CardImageProps) => {
  return (
    <div className="relative w-full overflow-hidden">
      <GatsbyImage
        className="rounded-t-md transition-all duration-300 hover:scale-110 hover:saturate-200"
        image={getImage(image as ImageDataLike)!}
        alt={title ?? 'card-image'}
        objectFit="cover"
      />
      {children}
    </div>
  );
};
