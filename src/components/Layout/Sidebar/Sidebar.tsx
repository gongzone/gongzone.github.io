import shallow from 'zustand/shallow';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { useSidebarStore } from '@/store/sidebar';
import { SIDEBAR_LIST_ENUM } from '@/components/Layout/Sidebar/SidebarList/enums';

import { Backdrop } from '@/components/Layout/Backdrop';
import { SidebarList } from '@/components/Layout/Sidebar/SidebarList';

export const Sidebar = () => {
  const [isSidebarOpen, closeSidebar] = useSidebarStore(
    (state) => [state.isSidebarOpen, state.closeSidebar],
    shallow
  );

  const sidebarTransform = isSidebarOpen ? 'translate-x-0' : 'translate-x-full';

  return (
    <>
      <Backdrop state={isSidebarOpen} closeHandler={closeSidebar} duration={800} />
      <aside
        className={`
      ease fixed top-0 right-0 z-50 h-screen w-[270px] bg-gradient-to-b from-zinc-900 
      to-slate-800 transition-transform duration-[800ms] ${sidebarTransform}`}
      >
        <div className="h-20">
          <button
            className="hover-text-amber absolute top-0 right-0 m-4 p-2"
            onClick={closeSidebar}
          >
            <AiOutlineCloseCircle size={30} />
          </button>
        </div>

        <div className="flex flex-col gap-4 px-10 py-5">
          {Object.values(SIDEBAR_LIST_ENUM).map((kind) => (
            <SidebarList key={kind} kind={kind} />
          ))}
        </div>
      </aside>
    </>
  );
};
