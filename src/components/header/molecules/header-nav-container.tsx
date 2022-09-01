import { HeaderNavLink } from '@/components/header/atoms';

import { getNavItems } from '@/constants/nav-items';

export const HeaderNavContainer = () => {
  const navItems = getNavItems();

  return (
    <ul className="hidden items-center gap-1 rounded-2xl md:flex">
      {navItems.map((navItem) => (
        <>
          <li key={navItem.name}>
            <HeaderNavLink navItem={navItem} />
          </li>
        </>
      ))}
    </ul>
  );
};
