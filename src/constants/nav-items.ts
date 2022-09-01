import type { IconType } from 'react-icons';
import { FiPenTool, FiLayers, FiUserCheck, FiPackage } from 'react-icons/fi';

export interface NavItem {
  name: 'HOME' | '글' | '시리즈' | '소개' | '프로젝트';
  icon: IconType;
  to: string;
}

type NavItemNames = NavItem['name'];

const navItems: NavItem[] = [
  { name: 'HOME', icon: FiPenTool, to: '/' },
  { name: '글', icon: FiPenTool, to: '/posts' },
  { name: '시리즈', icon: FiLayers, to: '/series' },
  { name: '소개', icon: FiUserCheck, to: '/aboutme' },
  { name: '프로젝트', icon: FiPackage, to: '/projects' },
];

export function getNavItems(keyWords: NavItemNames[] = []) {
  if (keyWords.length === 0) return navItems.slice(1);

  const match = (navLink: NavItem) => keyWords.includes(navLink.name);

  return navItems.filter(match);
}
