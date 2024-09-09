import React from "react";
import { cn } from "../../../utils/cn";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const VerticalVideoCardContainer = ({ children }) => {
  const { pathname } = useLocation();
  const { isMenuOpen } = useSelector( store => store.app);
  console.log(isMenuOpen);
  
  const isChannelPage = pathname.includes("channel");
  return (
    <div className={cn("flex justify-center sm:justify-start")}>

      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2", !isMenuOpen && "lg:grid-cols-4"
        )}
      >
       {children}
      </div>
    </div>
  );
};

export default VerticalVideoCardContainer;
