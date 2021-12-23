import React, { useState, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onSidebar = () => {
    setIsOpen(true);
  };

  const offSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header onSidebar={onSidebar} />
      <Sidebar offSidebar={offSidebar} isOpen={isOpen} />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
