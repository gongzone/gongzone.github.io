import { FiMenu } from 'react-icons/fi';

import { useSidebarStore } from '@/store/sidebar';

export const HamburgerMenu = () => {
  const openSidebar = useSidebarStore((state) => state.openSidebar);

  return (
    <button className="hover-text-amber p-1 text-2xl md:hidden" onClick={openSidebar}>
      <FiMenu />
    </button>
  );
};
