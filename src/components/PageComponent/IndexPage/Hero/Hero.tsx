import { StaticImage } from 'gatsby-plugin-image';

export const Hero = () => {
  return (
    <div className="group relative h-72 w-full overflow-hidden xs:h-96 md:h-[460px]">
      <StaticImage
        className="h-full w-full shadow-2xl brightness-50 transition-all duration-500 group-hover:scale-110 group-hover:sepia-[.25]"
        src="../../../../assets/images/hero-bg.jpg"
        alt="hero-background"
        objectFit="cover"
        placeholder="blurred"
      />
      <div className="absolute top-1/2 left-1/2 z-30 -translate-y-1/2 -translate-x-1/2">
        <h2 className="text-2xl font-bold">Simplicity is the soul of efficiency.</h2>
      </div>
    </div>
  );
};
