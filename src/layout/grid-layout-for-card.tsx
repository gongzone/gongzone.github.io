import type { ReactNode } from 'react';

interface GridLayoutForCardProps {
  children: ReactNode;
}

export const GridLayoutForCard = ({ children }: GridLayoutForCardProps) => {
  return (
    <ul className="grid w-full grid-cols-1 gap-5 drop-shadow-lg sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </ul>
  );
};
