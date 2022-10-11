import { HeaderLogo } from './header-logo';
import { MobileNavButton } from './mobile-nav-button';
import { DesktopNavs } from './desktop-navs';

export const Header = () => {
  return (
    <header className="flex h-24 items-center justify-between bg-zinc-900 px-6 xs:px-8 md:h-28 md:px-10 lg:px-20 4xl:h-32 4xl:px-28">
      <HeaderLogo />
      <MobileNavButton />
      <DesktopNavs />
    </header>
  );
};
