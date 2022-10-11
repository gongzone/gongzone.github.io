import { Link } from 'gatsby';

type NavLinkProps = {
  name: string;
  icon?: React.ReactNode;
  to: string;
  className?: string;
};

export const NavLink = ({ name, icon, to, className }: NavLinkProps) => {
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
