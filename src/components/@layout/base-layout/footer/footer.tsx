import { FooterLogo } from './footer-logo';
import { FooterContactIcons } from './footer-contact-icons';

export const Footer = () => {
  return (
    <div className="flex h-48 w-full items-center justify-center gap-4 bg-zinc-900 p-5 2xl:h-56 2xl:gap-5">
      <FooterLogo />

      <div className="flex flex-col justify-center gap-1 2xl:gap-2">
        <FooterContactIcons />
        <div className="flex flex-col items-center">
          <span className="text-gray-500">&copy; {new Date().getFullYear()} 공존의 발자취</span>
          <span className="text-xs text-gray-500">Made by GongZone</span>
        </div>
      </div>
    </div>
  );
};
