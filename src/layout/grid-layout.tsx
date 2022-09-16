import type { ReactNode } from 'react';

interface GridLayoutProps {
  children: ReactNode;
}

export const GridLayout = ({ children }: GridLayoutProps) => {
  return (
    <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7 lg:grid-cols-3 xl:grid-cols-4 3xl:gap-8">
      {children}
    </ul>
  );
};
