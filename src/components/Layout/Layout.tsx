import type { ReactNode } from 'react';

import { Header } from '@/components/Layout/Header';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Footer } from '@/components/Layout/Footer';
import { Hero } from '@/components/Layout/Hero';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Hero />
      <main className="container mx-auto" role="main">
        {children}
      </main>
      <Footer />
    </>
  );
};
