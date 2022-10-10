type GridLayoutProps = {
  children: React.ReactNode;
};

export const GridLayout = ({ children }: GridLayoutProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-5 xs:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
};
