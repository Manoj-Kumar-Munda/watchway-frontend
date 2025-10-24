import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";
const Tab = ({ title, link }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          "py-2 px-4 font-Roboto text-sm transition-colors duration-300 hover:bg-white/10",
          isActive && "bg-white text-black font-medium hover:bg-white/20 rounded-lg"
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
