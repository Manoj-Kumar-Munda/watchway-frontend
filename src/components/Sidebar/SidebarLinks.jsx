import React from "react";
import { Link } from "react-router-dom";

const SidebarLinks = ({ children, title, link }) => {
  return (
    <div className="inline-flex items-center gap-2 py-2 border border-transparent duration-300 transition-all hover:border-gray-300 rounded-lg hover:bg-gray-300/30 backdrop-blur-xl">
      <div className="px-2">{children}</div>
      <Link to={link}>
        <span className="font-Roboto font-medium text-gray-600">{title}</span>
      </Link>
    </div>
  );
};

export default SidebarLinks;
