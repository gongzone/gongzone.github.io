import { Link } from 'gatsby';

import type { NavItem } from '@/constants/nav-items';

interface HeaderNavLinkProps {
  navItem: NavItem;
}

export const HeaderNavLink = ({ navItem }: HeaderNavLinkProps) => {
  return (
    <Link className="hover-text-amber flex items-center gap-2 p-2 text-zinc-300" to={navItem.to}>
      <span className="text-xl">{<navItem.icon />}</span>
      <span className="text-lg font-bold">{navItem.name}</span>
    </Link>
  );
};
