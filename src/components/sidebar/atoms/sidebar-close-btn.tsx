import { AiOutlineCloseCircle } from 'react-icons/ai';

import { useSidebarStore } from '@/store/sidebar';

export const SidebarCloseBtn = () => {
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);

  return (
    <button className="hover-text-amber p-2" onClick={closeSidebar}>
      <AiOutlineCloseCircle size={30} />
    </button>
  );
};
