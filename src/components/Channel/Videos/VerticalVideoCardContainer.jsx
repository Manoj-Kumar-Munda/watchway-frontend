import React from "react";
import { cn } from "../../../utils/cn";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const VerticalVideoCardContainer = ({ children }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  
  const isChannelPage = pathname.includes("channel");
  return (
    <div className={cn("flex justify-center", isChannelPage && "justify-start")}>

      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2"
        )}
      >
       {children}
      </div>
    </div>
  );
};

export default VerticalVideoCardContainer;
