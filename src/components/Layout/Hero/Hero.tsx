import { StaticImage } from 'gatsby-plugin-image';

export const Hero = () => {
  return (
    <div className="relative h-72 w-full">
      <StaticImage
        src="../../../assets/images/hero-bg.jpg"
        alt="hero-background"
        className="h-72 w-full"
        objectFit="cover"
        placeholder="blurred"
      />
      <div className="relative z-30">
        <h2></h2>
      </div>
    </div>
  );
};