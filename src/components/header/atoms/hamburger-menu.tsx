import { AiOutlineMenu } from 'react-icons/ai';

import { useSidebarStore } from '@/store/sidebar';

export const HamburgerMenu = () => {
  const openSidebar = useSidebarStore((state) => state.openSidebar);

  return (
    <button className="hover-text-amber p-1 text-xl md:hidden" onClick={openSidebar}>
      <AiOutlineMenu />
    </button>
  );
};
