import { Link } from 'gatsby';

import { useSidebarStore } from '@/store/sidebar';

import { SIDEBAR_LIST_ENUM } from '@/components/Layout/Sidebar/SidebarList/enums';
import { SIDEBAR_LIST_ITEMS } from '@/components/Layout/Sidebar/SidebarList/constants';
import type { SidebarItem, SidebarListType } from '@/components/Layout/Sidebar/SidebarList/types';

interface SidebarListProps {
  kind: SidebarListType;
}

export const SidebarList = ({ kind }: SidebarListProps) => {
  const items = SIDEBAR_LIST_ITEMS[kind];

  return (
    <nav className={kind === SIDEBAR_LIST_ENUM.TOP ? 'mb-6' : ''}>
      {kind !== SIDEBAR_LIST_ENUM.TOP && (
        <div className="mb-2 border-b-2 border-b-stone-400 pb-2">
          <span className="text-xl font-bold text-emerald-400">{kind}</span>
        </div>
      )}
      <ul className="flex flex-col gap-[0.35rem]">
        {items.map((item) => (
          <li key={item.name}>
            <SidebarListItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface SidebarListItemProps {
  item: SidebarItem;
}

const SidebarListItem = ({ item }: SidebarListItemProps) => {
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);
  return (
    <Link onClick={closeSidebar} className="group inline-flex items-center gap-2" to={item.to}>
      <span className="text-lg">
        <item.icon />
      </span>
      <span className="text-lg transition-colors duration-300 group-hover:text-amber-300">
        {item.name}
      </span>
    </Link>
  );
};
