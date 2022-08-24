import type { IconType } from 'react-icons';

import { SIDEBAR_LIST_ENUM } from '@/components/Layout/Sidebar/SidebarList/enums';

export interface SidebarItem {
  name: string;
  icon: IconType;
  to: string;
}

export type SidebarListType = typeof SIDEBAR_LIST_ENUM[keyof typeof SIDEBAR_LIST_ENUM];
