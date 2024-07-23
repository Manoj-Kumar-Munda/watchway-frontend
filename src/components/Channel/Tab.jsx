import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";
const Tab = ({ title, link }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          "py-2 px-4 font-Roboto rounded-md text-sm transition-colors duration-300 hover:bg-gray-500/60",
          isActive && "bg-white text-black font-medium hover:bg-white"
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
