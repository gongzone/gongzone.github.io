import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const controlSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header controlSidebar={controlSidebar} />
      <Sidebar controlSidebar={controlSidebar} isOpen={isOpen} />
      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
