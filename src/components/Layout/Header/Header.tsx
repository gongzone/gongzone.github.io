import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { AiOutlineMenu } from 'react-icons/ai';

import { useSidebarStore } from '@/store/sidebar';

export const Header = () => {
  const openSidebar = useSidebarStore((state) => state.openSidebar);

  return (
    <header className="flex h-20 items-center justify-between bg-zinc-900 px-6 shadow-lg md:h-24 md:px-12">
      <h1 className="hover-text-amber">
        <Link className="flex items-center gap-2" to="/">
          <StaticImage
            src="../../../assets/images/logo-icon.png"
            alt="logo-icon"
            placeholder="blurred"
            width={40}
            height={40}
          />
          <span className="font-['Poor_Story'] text-lg md:text-xl">공존의 발자취</span>
        </Link>
      </h1>

      <button className="hover-text-amber p-1 text-xl md:text-2xl" onClick={openSidebar}>
        <AiOutlineMenu />
      </button>
    </header>
  );
};
