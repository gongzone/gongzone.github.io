import { FooterLogo } from '@/components/footer/atoms';
import { ContactIcons, FooterInfoContainer } from '@/components/footer/molecules';

export const Footer = () => {
  return (
    <div className="flex h-48 w-full items-center justify-center gap-4 bg-zinc-900 p-5">
      <FooterLogo />

      <div className="flex flex-col justify-center gap-1">
        <ContactIcons />
        <FooterInfoContainer />
      </div>
    </div>
  );
};
