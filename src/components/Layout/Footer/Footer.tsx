import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex h-48 w-full items-center justify-center gap-4 bg-zinc-900 p-5">
      <div className="rounded-xl border-2 border-slate-500 p-3 shadow-sm shadow-neutral-500">
        <Link to="/">
          <StaticImage
            src="../../../assets/images/logo-icon.png"
            alt="logo-icon"
            placeholder="blurred"
            width={50}
            height={50}
          />
        </Link>
      </div>

      <div className="flex flex-col justify-center ">
        <div className="flex justify-center gap-4">
          <a href="https://www.instagram.com/gongzone0/">
            <StaticImage
              src="../../../assets/images/instagram.png"
              alt="instagram"
              placeholder="blurred"
              width={30}
              height={30}
            />
          </a>
          <a href="mailto:dnjsqhwo@gmail.com">
            <StaticImage
              src="../../../assets/images/gmail.png"
              alt="gmail"
              placeholder="blurred"
              width={30}
              height={30}
            />
          </a>
          <a href="https://github.com/gongzone">
            <StaticImage
              src="../../../assets/images/github.png"
              alt="github"
              placeholder="blurred"
              width={30}
              height={30}
            />
          </a>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-gray-500">&copy; {currentYear} 공존의 발자취</span>
          <span className="text-xs text-gray-500">Made by GongZone</span>
        </div>
      </div>
    </div>
  );
};
