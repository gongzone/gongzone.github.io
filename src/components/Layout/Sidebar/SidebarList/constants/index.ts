import { AiFillHome, AiFillFileText, AiFillCopy, AiFillRobot, AiFillProfile } from 'react-icons/ai';

import type { SidebarItem } from '@/components/Layout/Sidebar/SidebarList/types';
import { SIDEBAR_LIST_ENUM } from '@/components/Layout/Sidebar/SidebarList/enums';

const SIDEBAR_LIST_TOP: SidebarItem[] = [{ name: 'HOME', icon: AiFillHome, to: '/' }];

const SIDEBAR_LIST_BLOG: SidebarItem[] = [
  { name: '글', icon: AiFillFileText, to: '/posts' },
  { name: '시리즈', icon: AiFillCopy, to: '/series' },
];

const SIDEBAR_LIST_ABOUT: SidebarItem[] = [
  { name: '소개', icon: AiFillRobot, to: '/aboutme' },
  { name: '프로젝트', icon: AiFillProfile, to: '/projects' },
];

export const SIDEBAR_LIST_ITEMS = {
  [SIDEBAR_LIST_ENUM.TOP]: SIDEBAR_LIST_TOP,
  [SIDEBAR_LIST_ENUM.BLOG]: SIDEBAR_LIST_BLOG,
  [SIDEBAR_LIST_ENUM.ABOUT]: SIDEBAR_LIST_ABOUT,
};
