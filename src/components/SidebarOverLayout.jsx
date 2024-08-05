import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const SidebarOverLayout = ({ children, isSmMenuOpen }) => {
  return (
    <div className="px-2">
      <Sidebar isSmMenuOpen={isSmMenuOpen} className="flex px-2 md:px-4" />
      {children}
    </div>
  );
};

export default SidebarOverLayout;
