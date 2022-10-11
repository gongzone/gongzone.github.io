import { GatsbyImage, getImage, type ImageDataLike } from 'gatsby-plugin-image';

type PostImageProps = {
  title: string;
  image: ImageDataLike;
};

export const PostImage = ({ title, image }: PostImageProps) => {
  return (
    <div className="flex items-center justify-center">
      <GatsbyImage className="rounded-lg" image={getImage(image)!} alt={title} />
    </div>
  );
};
