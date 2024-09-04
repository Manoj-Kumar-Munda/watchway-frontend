import React from "react";
import { Link } from "react-router-dom";

const SidebarLinks = ({ children, title, link }) => {
  return (
    <div className="sidebar-link">
      <div className="px-2 bg-transparent dark:mix-blend-color-dodge">{children}</div>
      <Link to={link} className="bg-transparent hover:bg-transparent">
        <span className="font-Roboto font-medium text-gray-600  dark:text-white   bg-transparent hover:bg-transparent">{title}</span>
      </Link>
    </div>
  );
};

export default SidebarLinks;
