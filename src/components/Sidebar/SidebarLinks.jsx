import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../utils/cn";

const SidebarLinks = ({ children, title, link }) => {
  const { pathname } = useLocation();
  return (
    <div className={cn("sidebar-link", pathname === link && "bg-gray-300/30")}>
      <div className="px-2 bg-transparent mix-blend-color-dodge">
        {children}
      </div>
      <Link to={link} className="bg-transparent hover:bg-transparent">
        <span className="font-Roboto font-medium text-white   bg-transparent hover:bg-transparent">
          {title}
        </span>
      </Link>
    </div>
  );
};

export default SidebarLinks;
