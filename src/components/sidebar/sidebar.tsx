import shallow from 'zustand/shallow';

import { useSidebarStore } from '@/store/sidebar';
import { sidebarBaseNavLinks, sidebarBlogNav, sidebarAboutNav } from '@/constants/nav';

import { Backdrop } from '@/components/Layout/Backdrop';
import { SidebarCloseBtn } from '@/components/sidebar/atoms';
import { SidebarNavContainer } from '@/components/sidebar/molecules';

export const Sidebar = () => {
  const [isSidebarOpen, closeSidebar] = useSidebarStore(
    (state) => [state.isSidebarOpen, state.closeSidebar],
    shallow
  );

  const sidebarDuration = 800;
  const sidebarTransform = isSidebarOpen ? 'translate-x-0' : 'translate-x-full';

  return (
    <>
      <Backdrop state={isSidebarOpen} closeHandler={closeSidebar} duration={sidebarDuration} />
      <aside
        className={`
      ease fixed top-0 right-0 z-50 h-screen w-[270px] bg-gradient-to-b from-zinc-900 
      to-slate-800 transition-transform duration-[${sidebarDuration}ms] ${sidebarTransform}`}
      >
        <div className="h-20">
          <div className="absolute top-0 right-0 m-4">
            <SidebarCloseBtn />
          </div>
        </div>

        <div className="flex flex-col gap-4 px-10 py-5">
          <SidebarNavContainer sidebarNavLinks={sidebarBaseNavLinks} />
          <SidebarNavContainer name="Blog" sidebarNavLinks={sidebarBlogNav} />
          <SidebarNavContainer name="About" sidebarNavLinks={sidebarAboutNav} />
        </div>
      </aside>
    </>
  );
};
