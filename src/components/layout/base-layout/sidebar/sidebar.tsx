import shallow from 'zustand/shallow';

import { useSidebarStore } from '@/stores/sidebar';
import { sidebarBaseNavLinks, sidebarBlogNavLinks, sidebarAboutNavLinks } from '@/fixtures/nav';

import { Backdrop } from '@/components/@shared/backdrop';
import { SidebarCloseButton } from './sidebar-close-button';
import { SidebarNavs } from './sidebar-navs';

export const Sidebar = () => {
  const [isSidebarOpen, closeSidebar] = useSidebarStore(
    (state) => [state.isSidebarOpen, state.closeSidebar],
    shallow
  );

  return (
    <>
      <Backdrop state={isSidebarOpen} closeHandler={closeSidebar} duration={800} />
      <aside
        className={`
      ease fixed top-0 right-0 z-50 h-screen w-[285px] bg-gradient-to-b from-zinc-900 
      to-slate-800 transition-transform duration-[800ms] ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      >
        <div className="h-[106px]">
          <div className="absolute top-0 right-0 m-6">
            <SidebarCloseButton />
          </div>
        </div>

        <div className="flex flex-col gap-6 px-10 py-5">
          <SidebarNavs sidebarNavLinks={sidebarBaseNavLinks} />
          <SidebarNavs name="Blog" sidebarNavLinks={sidebarBlogNavLinks} />
          <SidebarNavs name="About" sidebarNavLinks={sidebarAboutNavLinks} />
        </div>
      </aside>
    </>
  );
};
