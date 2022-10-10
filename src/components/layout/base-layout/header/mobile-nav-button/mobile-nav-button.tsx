import { FiMenu } from 'react-icons/fi';

import { useSidebarStore } from '@/stores/sidebar';

export const MobileNavButton = () => {
  const openSidebar = useSidebarStore((state) => state.openSidebar);

  return (
    <button className="hover-text-amber p-2 text-2xl md:hidden" onClick={openSidebar}>
      <FiMenu />
    </button>
  );
};
