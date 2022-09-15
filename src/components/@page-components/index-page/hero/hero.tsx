import { StaticImage } from 'gatsby-plugin-image';
import { FiFeather, FiCoffee } from 'react-icons/fi';

export const Hero = () => {
  return (
    <div className="relative mx-auto my-8 flex w-full select-none flex-col items-center justify-center gap-6 px-5 md:my-16 md:flex-row lg:my-20 xl:my-24 3xl:my-28">
      <div className="w-56 xs:w-72 md:w-96">
        <StaticImage
          className="w-full"
          src="../../../../assets/images/hero-rabbit.png"
          alt="hero-background"
          objectFit="contain"
          placeholder="none"
          loading="eager"
        />
      </div>
      <div className="">
        <h2 className="flex flex-col gap-1 text-2xl font-bold">
          <span className="text-5xl">Simplicity</span>
          <span>is the soul of efficiency.</span>
        </h2>

        <div className="flex select-none items-center justify-center gap-4 px-3 py-5 2xl:my-10">
          <FiFeather size={65} />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 2xl:gap-2">
              <FiCoffee className="text-2xl text-zinc-400 2xl:text-3xl" />
              <span className="text-2xl font-bold text-emerald-400 2xl:text-3xl">GongZone</span>
            </div>
            <div className="text-lg font-bold">
              <p className="text-lg font-bold">who mainly writes</p>
              <p className="text-lg font-bold">about web development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
