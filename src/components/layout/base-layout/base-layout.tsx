import { Header } from './header';
import { Sidebar } from './sidebar';
import { Footer } from './footer';

interface BaseLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export const BaseLayout = ({ className, children }: BaseLayoutProps) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className={`mx-auto ${className ? className : ''}`} role="main">
        {children}
      </main>
      <Footer />
    </>
  );
};
