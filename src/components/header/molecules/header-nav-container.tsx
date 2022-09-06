import { CustomLink } from '@/components/@shared/custom-link';

import { headerNavLinks } from '@/constants/nav';

export const HeaderNavContainer = () => {
  return (
    <ul className="hidden items-center gap-2 rounded-2xl md:flex">
      {headerNavLinks.map((navLink) => (
        <li key={navLink.name}>
          <CustomLink name={navLink.name} icon={<navLink.icon />} to={navLink.to} />
        </li>
      ))}
    </ul>
  );
};
