import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Routing } from '@/constants/routing';

export const FooterLogo = () => {
  return (
    <div className="rounded-xl border-2 border-slate-500 p-3 shadow-sm shadow-neutral-500">
      <Link to={Routing.HOME.toString}>
        <StaticImage
          src="../../../assets/images/main-logo.png"
          alt="footer-main-logo"
          placeholder="blurred"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
};
