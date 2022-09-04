import type { IconType } from 'react-icons';
import { FiPenTool, FiLayers, FiUserCheck, FiPackage } from 'react-icons/fi';

import { Routing } from '@/constants/routing';

// Factory Method Pattern
abstract class Nav {
  abstract createNavLinks(): NavLink[];

  get navLinks() {
    return [...this.createNavLinks()];
  }
}

class HeaderNav extends Nav {
  createNavLinks(): NavLink[] {
    return [
      new NavLink('글', FiPenTool, Routing.POSTS.toString),
      new NavLink('시리즈', FiLayers, Routing.SERIES.toString),
      new NavLink('소개', FiUserCheck, Routing.INTRODUCTION.toString),
      new NavLink('프로젝트', FiPackage, Routing.PROJECTS.toString),
    ];
  }
}

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

export const headerNavLinks = new HeaderNav().navLinks;
