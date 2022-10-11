import { AiOutlineCloseCircle } from 'react-icons/ai';

import { useSidebarStore } from '@/stores/sidebar';

export const SidebarCloseButton = () => {
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);

  return (
    <button className="hover-text-amber p-2" onClick={closeSidebar}>
      <AiOutlineCloseCircle size={40} />
    </button>
  );
};
