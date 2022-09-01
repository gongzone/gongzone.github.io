import { HeaderLogo, HamburgerMenu } from '@/components/header/atoms';
import { HeaderNavContainer } from './molecules/header-nav-container';

export const Header = () => {
  return (
    <header className="flex h-28 items-center justify-between px-8 xs:px-14 xs:h-28 md:h-32 lg:px-20">
      <HeaderLogo />
      <HeaderNavContainer />
      <HamburgerMenu />
    </header>
  );
};
