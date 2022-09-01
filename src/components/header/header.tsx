import { HeaderLogo, HamburgerMenu } from '@/components/header/atoms';
import { HeaderNavContainer } from './molecules/header-nav-container';

export const Header = () => {
  return (
    <header className="flex h-24 items-center justify-between bg-zinc-900 px-6 xs:px-8 md:px-10 md:h-28 lg:px-20">
      <HeaderLogo />
      <HeaderNavContainer />
      <HamburgerMenu />
    </header>
  );
};
