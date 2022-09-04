import { HeaderNavLink } from '@/components/header/atoms';

import { headerNavLinks } from '@/constants/nav';

export const HeaderNavContainer = () => {
  return (
    <ul className="hidden items-center gap-1 rounded-2xl md:flex">
      {headerNavLinks.map((navLink) => (
        <>
          <li key={navLink.name}>
            <HeaderNavLink navLink={navLink} />
          </li>
        </>
      ))}
    </ul>
  );
};
