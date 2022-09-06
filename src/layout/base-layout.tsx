import type { ReactNode } from 'react';

import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Footer } from '@/components/footer';

interface BaseLayoutProps {
  className?: string;
  children?: ReactNode;
}

export const BaseLayout = ({ className, children }: BaseLayoutProps) => {
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
