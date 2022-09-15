import { StaticImage } from 'gatsby-plugin-image';

export const Hero = () => {
  return (
    <div className="relative h-72 w-full select-none overflow-hidden xs:h-96 3xl:h-[550px] md:h-[460px] 2xl:h-[525px]">
      <StaticImage
        className="h-full w-full shadow-2xl brightness-50"
        src="../../../../assets/images/hero-bg.jpg"
        alt="hero-background"
        objectFit="cover"
        placeholder="none"
      />
      <div className="absolute top-1/2 left-1/2 z-30 -translate-y-1/2 -translate-x-1/2">
        <h2 className="text-2xl font-bold">Simplicity is the soul of efficiency.</h2>
      </div>
    </div>
  );
};
