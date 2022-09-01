import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export const HeaderLogo = () => {
  return (
    <div className="hover-text-amber">
      <Link className="flex items-center gap-2" to="/">
        <StaticImage
          src="../../../assets/images/main-logo.png"
          alt="header-main-logo"
          placeholder="blurred"
          width={40}
          height={40}
        />
        <span className="font-['Poor_Story'] text-lg shadow-lg md:text-xl">공존의 발자취</span>
      </Link>
    </div>
  );
};
