import React from "react";
import { Link } from "react-router-dom";

const SidebarLinks = ({ children, title, link }) => {
  return (
    <div className="sidebar-link">
      <div className="px-2">{children}</div>
      <Link to={link}>
        <span className="font-Roboto font-medium text-gray-600">{title}</span>
      </Link>
    </div>
  );
};

export default SidebarLinks;
