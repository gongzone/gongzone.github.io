import { useSidebarStore } from '@/stores/sidebar';

import { NavLink as NavLinkType } from '@/fixtures/nav';

import { NavLink } from '@/components/@shared/nav-link';

type SidebarNavsProps = {
  name?: string;
  sidebarNavLinks: NavLinkType[];
};

export const SidebarNavs = ({ name, sidebarNavLinks }: SidebarNavsProps) => {
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);

  return (
    <nav className={`${!name && 'mb-6'}`}>
      {name && (
        <div className="mb-3 border-b-2 border-b-stone-400 pb-2">
          <span className="text-2xl font-bold text-emerald-400">{name}</span>
        </div>
      )}
      <ul className="flex flex-col gap-[0.35rem]">
        {sidebarNavLinks.map((sidebarNavLink) => (
          <li key={sidebarNavLink.name}>
            <button onClick={closeSidebar}>
              <NavLink
                name={sidebarNavLink.name}
                icon={<sidebarNavLink.icon />}
                to={sidebarNavLink.to}
                className="px-0 text-lg"
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
