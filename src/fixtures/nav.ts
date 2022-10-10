import type { IconType } from 'react-icons';
import { FiHome, FiPenTool, FiLayers, FiUserCheck, FiPackage } from 'react-icons/fi';

import { Routing } from '@/fixtures/routing';

// Factory Method Pattern
export class NavLink {
  constructor(private _name: string, private _icon: IconType, private _to: string) {}

  get name() {
    return this._name;
  }

  get icon(): IconType {
    return this._icon;
  }

  get to(): string {
    return this._to;
  }
}

abstract class NavLinks {
  abstract createNavLinks(): NavLink[];

  get data() {
    return [...this.createNavLinks()];
  }
}

class HeaderNavLinks extends NavLinks {
  createNavLinks(): NavLink[] {
    return [
      new NavLink('글', FiPenTool, Routing.POSTS.toString()),
      new NavLink('시리즈', FiLayers, Routing.SERIES.toString()),
      new NavLink('소개', FiUserCheck, Routing.INTRODUCTION.toString()),
      new NavLink('프로젝트', FiPackage, Routing.PROJECTS.toString()),
    ];
  }
}

class SidebarBaseNavLinks extends NavLinks {
  createNavLinks(): NavLink[] {
    return [new NavLink('HOME', FiHome, Routing.HOME.toString())];
  }
}

class SidebarBlogNavLinks extends NavLinks {
  createNavLinks(): NavLink[] {
    return [
      new NavLink('글', FiPenTool, Routing.POSTS.toString()),
      new NavLink('시리즈', FiLayers, Routing.SERIES.toString()),
    ];
  }
}

class SidebarAboutNavLinks extends NavLinks {
  createNavLinks(): NavLink[] {
    return [
      new NavLink('소개', FiUserCheck, Routing.INTRODUCTION.toString()),
      new NavLink('프로젝트', FiPackage, Routing.PROJECTS.toString()),
    ];
  }
}

export const headerNavLinks = new HeaderNavLinks().data;
export const sidebarBaseNavLinks = new SidebarBaseNavLinks().data;
export const sidebarBlogNavLinks = new SidebarBlogNavLinks().data;
export const sidebarAboutNavLinks = new SidebarAboutNavLinks().data;
