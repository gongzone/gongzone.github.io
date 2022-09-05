import type { ReactNode } from 'react';

import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Footer } from '@/components/footer';

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
