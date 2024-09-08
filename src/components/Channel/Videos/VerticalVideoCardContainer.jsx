import React from "react";
import { cn } from "../../../utils/cn";
import { useLocation } from "react-router-dom";

const VerticalVideoCardContainer = ({ children }) => {
  const { pathname } = useLocation();
  const isChannelPage = pathname.includes("channel");
  return (
    <div className={cn("flex justify-center sm:justify-start")}>

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
