import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    </>
  );
};

export default Layout;
