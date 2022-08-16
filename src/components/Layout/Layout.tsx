import type { ReactNode } from 'react';

import { Header } from '@/components/Layout/Header';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Footer } from '@/components/Layout/Footer';

interface LayoutProps {
  className?: string;
  children?: ReactNode;
}

export const Layout = ({ className, children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className={`mx-auto ${className}`} role="main">
        {children}
      </main>
      <Footer />
    </>
  );
};
