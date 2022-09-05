import { CustomLink } from '@/components/@shared/custom-link';
import { NavLink } from '@/constants/nav';

interface SidebarNavContainerProps {
  name?: string;
  sidebarNavLinks: NavLink[];
}

export const SidebarNavContainer = ({ name, sidebarNavLinks }: SidebarNavContainerProps) => {
  return (
    <nav className={`${!name && 'mb-6'}`}>
      {name && (
        <div className="mb-2 border-b-2 border-b-stone-400 pb-2">
          <span className="text-xl font-bold text-emerald-400">{name}</span>
        </div>
      )}
      <ul className="flex flex-col gap-[0.35rem]">
        {sidebarNavLinks.map((sidebarNavLink) => (
          <li key={sidebarNavLink.name}>
            <CustomLink
              name={sidebarNavLink.name}
              icon={<sidebarNavLink.icon />}
              to={sidebarNavLink.to}
              className="px-0"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
