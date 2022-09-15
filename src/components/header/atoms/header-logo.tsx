import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Routing } from '@/constants/routing';

export const HeaderLogo = () => {
  return (
    <div className="hover-text-amber">
      <Link className="flex items-center gap-2" to={Routing.HOME.toString()}>
        <StaticImage
          src="../../../assets/images/main-logo.png"
          alt="header-main-logo"
          placeholder="blurred"
          width={40}
          height={40}
          loading="eager"
        />
        <span className="font-['Poor_Story'] text-lg md:text-xl">공존의 발자취</span>
      </Link>
    </div>
  );
};
