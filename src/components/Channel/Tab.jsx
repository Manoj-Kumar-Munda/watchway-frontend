import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";
const Tab = ({ title, link }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          "py-2 px-4 font-Roboto text-sm transition-colors duration-300 dark:hover:bg-white/10 hover:bg-gray-200",
          isActive && "bg-white text-black font-medium dark:hover:bg-white hover:bg-white"
        )
      }
      to={link}
      end
    >
      {title}
    </NavLink>
  );
};

export default Tab;
