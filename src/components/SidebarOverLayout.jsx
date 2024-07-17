import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const SidebarOverLayout = ({ children, isSmMenuOpen }) => {
  return (
    <div>
      <Sidebar isSmMenuOpen={isSmMenuOpen} className="flex" />
      {children}
    </div>
  );
};

export default SidebarOverLayout;
