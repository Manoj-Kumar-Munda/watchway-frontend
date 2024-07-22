import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const SidebarOverLayout = ({ children, isSmMenuOpen }) => {
  return (
    <div>
      <Sidebar isSmMenuOpen={isSmMenuOpen} className="flex px-2 md:px-4" />
      {children}
    </div>
  );
};

export default SidebarOverLayout;
