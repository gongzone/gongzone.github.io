import { Link } from 'gatsby';

import type { NavLink } from '@/constants/nav';

interface HeaderNavLinkProps {
  navLink: NavLink;
}

export const HeaderNavLink = ({ navLink }: HeaderNavLinkProps) => {
  return (
    <Link className="hover-text-amber flex items-center gap-2 p-2 text-zinc-300" to={navLink.to}>
      <span className="text-xl">{<navLink.icon />}</span>
      <span className="text-base font-bold">{navLink.name}</span>
    </Link>
  );
};
