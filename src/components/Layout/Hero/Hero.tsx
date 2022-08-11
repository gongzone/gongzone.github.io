import { StaticImage } from 'gatsby-plugin-image';

export const Hero = () => {
  return (
    <div className="relative h-72 w-full">
      <StaticImage
        className="h-full w-full"
        src="../../../assets/images/hero-bg.jpg"
        alt="hero-background"
        objectFit="cover"
        placeholder="blurred"
      />
      <div className="relative z-30">
        <h2></h2>
      </div>
    </div>
  );
};
