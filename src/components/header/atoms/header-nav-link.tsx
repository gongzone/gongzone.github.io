import { Link } from 'gatsby';

interface HeaderNavLinkProps {
  to: string;
}

export const HeaderNavLink = ({ to }: HeaderNavLinkProps) => {
  return <Link to={to}></Link>;
};
