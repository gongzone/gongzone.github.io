import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface SidebarState {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>()(
  devtools((set) => ({
    isSidebarOpen: false,
    openSidebar: () => set(() => ({ isSidebarOpen: true })),
    closeSidebar: () => set(() => ({ isSidebarOpen: false })),
  }))
);
