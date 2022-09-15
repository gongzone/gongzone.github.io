import { Link } from 'gatsby';
import type { ReactNode } from 'react';

interface CustomLinkProps {
  name: string;
  icon?: ReactNode;
  to: string;
  className?: string;
}

export const CustomLink = ({ name, icon, to, className }: CustomLinkProps) => {
  return (
    <Link
      className={`hover-text-amber flex items-center gap-2 p-1 text-zinc-300 ${className}`}
      activeClassName="text-amber-300"
      to={to}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span className="font-bold">{name}</span>
    </Link>
  );
};
