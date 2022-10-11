import { headerNavLinks } from '@/fixtures/nav';

import { NavLink } from '@/components/@shared/nav-link';

export const DesktopNavs = () => {
  return (
    <ul className="hidden items-center gap-2 rounded-2xl md:flex">
      {headerNavLinks.map((navLink) => (
        <li key={navLink.name}>
          <NavLink name={navLink.name} icon={<navLink.icon />} to={navLink.to} />
        </li>
      ))}
    </ul>
  );
};
